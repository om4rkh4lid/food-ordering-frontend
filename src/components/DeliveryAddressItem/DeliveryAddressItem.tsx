import Address from '../../entities/Address';
import './DeliveryAddressItem.css'

type DeliveryAddressItemProps = {
  onClick: () => void;
  isActive: () => boolean;
  address: Address;
}

export const DeliveryAddressItem: React.FC<DeliveryAddressItemProps> = ({ onClick, isActive, address }) => {

  const formatFloorNumber = (floor: number) => {
    const lastDigit = `${floor}`.slice(-1);
    switch (parseInt(lastDigit)) {
      case 1:
        return `${floor}st`;
      case 2:
        return `${floor}nd`;
      case 3:
        return `${floor}rd`
      default:
        return `${floor}th`;
    }
  }

  return (
    <div onClick={onClick} className={`delivery-address-item ${isActive() ? 'active' : ''}`}>
      {
      address.alias 
      ? <p className='dai-title'><span className='alias'>{address.alias}</span> ({address.area})</p> 
      : <p className='dai-title'>{address.area}</p>
      }

      <div className="dai-address">
        <address className='dai-address'>
          {address.building} {address.street}, {formatFloorNumber(address.floor)} floor
          {address.description && <p className='dai-description'>({address.description})</p>}
        </address>
      </div>
    </div>
  );
}