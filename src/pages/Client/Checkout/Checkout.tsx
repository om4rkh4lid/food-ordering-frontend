import { ReactNode, useEffect, useState } from 'react';
import { DeliveryAddressItem } from '../../../components/DeliveryAddressItem/DeliveryAddressItem';
import './Checkout.css';
import axiosInstance from '../../../api/axios';
import Address from '../../../entities/Address';
import { useCart } from '../../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

export const Checkout: React.FC = () => {

  const [selected, setSelected] = useState<number>();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const { getDeliveryAddress, setDeliveryAddress } = useCart();
  const navigate = useNavigate();

  const selectComponent = (id: number) => {
    setSelected(id);
    setDeliveryAddress(id);
  }

  const isActiveComponent = (id: number) => {
    return selected === id;
  }

  useEffect(() => {
    const query = `{
      addresses(clientId: ${1}) {
        id
        alias
        area
        street
        floor
        building
        description
      }
    }`
    axiosInstance.post('/', { query })
      .then(result => {
        const addresses: Address[] = result.data.addresses;
        setAddresses(addresses)
        const chosenAddress = getDeliveryAddress();
        chosenAddress ? selectComponent(chosenAddress) : selectComponent(addresses[0].id);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <main className='dai-page'>
      <h3 className='dai-heading'>Choose a delivery address</h3>
      <div className="delivery-addresses">
        {addresses.map(address =>
          <DeliveryAddressItem
            key={address.id}
            onClick={() => selectComponent(address.id)}
            isActive={() => isActiveComponent(address.id)}
            address={address}
          />)}
      </div>
      <div className="da-controls">
        <button onClick={ () => navigate('/cart') } id='da-back-button'>Back</button>
        <button onClick={ () => navigate('/addresses/add') } id='da-add-button'>Add a new address</button>
        <button onClick={ () => navigate('/') } id='da-proceed-button'>Confirm Order</button>
      </div>
    </main>
  );
}