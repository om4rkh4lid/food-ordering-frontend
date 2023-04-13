import { ReactNode, useEffect, useState } from 'react';
import { DeliveryAddressItem } from '../../../components/DeliveryAddressItem/DeliveryAddressItem';
import './Checkout.css';
import axiosInstance from '../../../api/axios';
import Address from '../../../entities/Address';
import { useCart } from '../../../hooks/useCart';

export const Checkout: React.FC = () => {

  const [selected, setSelected] = useState<number>();
  const [addresses, setAddresses] = useState<Address[]>([]);

  const selectComponent = (id: number) => {
    setSelected(id);
  }

  const isActiveComponent = (id: number) => {
    return selected === id;
  }

  useEffect(() => {
    const query = `{
      addresses(userId: ${1}) {
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
        selectComponent(addresses[0].id);
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
        <button id='da-back-button'>Back</button>
        <button id='da-add-button'>Add a new address</button>
        <button id='da-proceed-button'>Proceed</button>
      </div>
    </main>
  );
}