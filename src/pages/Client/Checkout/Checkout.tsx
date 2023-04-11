import './Checkout.css';

export const Checkout: React.FC = () => {
  return (
    <main className='dai-page'>
      <h3 className='dai-heading'>Choose a delivery address</h3>
      <div className="delivery-addresses">
        <div className="delivery-address-item active">
          <p className='dai-title'><span className='alias'>Home</span> (El Ibrahimeyya)</p>
          <div className="dai-address">
            <address className='dai-address'>
              15 Fouad Street, 1st floor
              <p className='dai-description'>(The third apartment from the right)</p>
            </address>
          </div>
        </div>
        <div className="delivery-address-item">
          <p className='dai-title'>El Ibrahimeyya</p>
          <div className="dai-address">
            <address className='dai-address'>
              15 Fouad Street, 1st floor
              <p className='dai-description'>(The third apartment from the right)</p>
            </address>
          </div>
        </div>
        <div className="delivery-address-item">
          <p className='dai-title'>El Ibrahimeyya</p>
          <div className="dai-address">
            <address className='dai-address'>
              15 Fouad Street, 1st floor
            </address>
          </div>
        </div>
      </div>
      <div className="da-controls">
        <button id='da-back-button'>Back</button>
        <button id='da-add-button'>Add a new address</button>
        <button id='da-proceed-button'>Proceed</button>
      </div>
    </main>
  );
}