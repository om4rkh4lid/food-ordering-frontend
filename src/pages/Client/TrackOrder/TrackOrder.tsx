import { useParams } from 'react-router-dom';
import './TrackOrder.css';
import { useEffect, useState } from 'react';
import { Order } from '../../../entities/Order';
import axiosInstance from '../../../api/axios';
import { formatFloorNumber } from '../../../utils/helpers/format-floor-number';

export const TrackOrder: React.FC = () => {

  const { id } = useParams();
  const [order, setOrder] = useState<Order>();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const query = `{
      findOrder(orderId: ${id}) {
        restaurant {
          name
        }
        address {
          alias
          area
          building
          floor
          description
          street
        }
        items {
          item {
            name
            price
          }
          qty
        }
        status
      }
    }`;
    axiosInstance.post('/', { query })
      .then(result => setOrder(result.data.findOrder))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (order) {
      const total = order.items.reduce<number>((final, current) => {
        final += current.item.price * current.qty;
        return final;
      }, 0);
      setTotal(total);
    }

  }, [order])

  return order
    ? <main className='to-main-body'>
      <h3 className='to-order-heading'>Order from '{order.restaurant.name}'</h3>
      <address className='to-order-address'>
        <span className='label'>Deliver to:</span> <span>{order.address.area}, {order.address.building} {order.address.street}, {formatFloorNumber(order.address.floor)} Floor {order.address.description && `- ${order.address.description}`}</span>
      </address>
      <div className="to-order-container">
        <ul className='to-order-items'>
          {order.items.map(item => {
            return <li key={item.item.id}>
              <span>{item.item.name}</span>
              <span>x{item.qty}</span>
            </li>
          })}
          <li className='to-order-total'>
            <span>Total</span>
            <span>{total}</span>
          </li>
        </ul>

      </div>
      <div className='to-order-status'>
        <span>Order Status</span>
        <span>{order.status.toUpperCase()}</span>
      </div>
    </main>
    : null;
}