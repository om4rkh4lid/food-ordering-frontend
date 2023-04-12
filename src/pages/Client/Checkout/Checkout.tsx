import { ReactNode, useState } from 'react';
import { DeliveryAddressItem } from '../../../components/DeliveryAddressItem/DeliveryAddressItem';
import './Checkout.css';

export const Checkout: React.FC = () => {

  const [selected, setSelected] = useState<number>();

  const selectComponent = (item: number) => {
    setSelected(item);
  }

  const isActiveComponent = (item: number) => {
    return selected === item;
  }


  return (
    <main className='dai-page'>
      <h3 className='dai-heading'>Choose a delivery address</h3>
      <div className="delivery-addresses">
        {[1, 2, 3].map(item =>
          <DeliveryAddressItem
            key={item}
            onClick={() => selectComponent(item)}
            isActive={() => isActiveComponent(item)}
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