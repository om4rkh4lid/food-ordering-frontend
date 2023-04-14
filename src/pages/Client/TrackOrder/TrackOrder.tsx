import { useParams } from 'react-router-dom';
import './TrackOrder.css';

export const TrackOrder: React.FC = () => {
  const { id } = useParams();
  return <main className='to-main-body'>
    <h3 className='to-order-heading'>Order from 'Karam El Sham'</h3>
    <address className='to-order-address'>
      <span className='label'>Deliver to:</span> <span>Smouha, 5 Fouad St, 5th Floor - Third door from the right</span>
    </address>
    <div className="to-order-container">
      <ul className='to-order-items'>
        <li>
          <span>Cheeseburger</span>
          <span>x3</span>
        </li>
        <li>
          <span>Cheeseburger</span>
          <span>x3</span>
        </li>
        <li>
          <span>Cheeseburger</span>
          <span>x3</span>
        </li>
        <li>
          <span>Cheeseburger</span>
          <span>x3</span>
        </li>
        <li className='to-order-total'>
          <span>Total</span>
          <span>500</span>
        </li>
      </ul>

    </div>
    <div className='to-order-status'>
      <span>Order Status</span>
      <span>PENDING</span>
    </div>
  </main>
}