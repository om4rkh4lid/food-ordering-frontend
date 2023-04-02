import Restaurants from "../Restaurants/Restaurants";
import Menu from "../Menu/Menu";

interface ClientContentProps {
  searchQuery: string;
}

const ClientContent: React.FC<ClientContentProps> = ({ searchQuery }) => {

  return (
    // <Restaurants searchQuery={searchQuery} />    
    <Menu />
  );
};

export default ClientContent;
