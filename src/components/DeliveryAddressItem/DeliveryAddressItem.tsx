import './DeliveryAddressItem.css'

type DeliveryAddressItemProps = {
  onClick: () => void;
  isActive: () => boolean;
}

export const DeliveryAddressItem: React.FC<DeliveryAddressItemProps> = ({ onClick, isActive }) => {
  return (
    <div onClick={onClick} className={`delivery-address-item ${isActive() ? 'active' : ''}`}>
      <p className='dai-title'><span className='alias'>Home</span> (El Ibrahimeyya)</p>
      <div className="dai-address">
        <address className='dai-address'>
          15 Fouad Street, 1st floor
          <p className='dai-description'>(The third apartment from the right)</p>
        </address>
      </div>
    </div>
  );
}