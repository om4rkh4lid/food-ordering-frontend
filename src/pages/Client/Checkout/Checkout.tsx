import { DeliveryAddressItem } from '../../../components/DeliveryAddressItem/DeliveryAddressItem';
import './Checkout.css';

export const Checkout: React.FC = () => {
  return (
    <main className='dai-page'>
      <h3 className='dai-heading'>Choose a delivery address</h3>
      <div className="delivery-addresses">
        {[1, 2, 3].map(item => <DeliveryAddressItem key={item} />)}
      </div>
      <div className="da-controls">
        <button id='da-back-button'>Back</button>
        <button id='da-add-button'>Add a new address</button>
        <button id='da-proceed-button'>Proceed</button>
      </div>
    </main>
  );
}