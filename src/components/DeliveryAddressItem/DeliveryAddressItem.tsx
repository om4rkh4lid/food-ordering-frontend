import Address from '../../entities/Address';
import { formatFloorNumber } from '../../utils/helpers/format-floor-number';
import './DeliveryAddressItem.css'

type DeliveryAddressItemProps = {
  onClick: () => void;
  isActive: () => boolean;
  address: Address;
}

export const DeliveryAddressItem: React.FC<DeliveryAddressItemProps> = ({ onClick, isActive, address }) => {

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