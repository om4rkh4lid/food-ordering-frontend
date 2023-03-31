import Restaurants from "../Restaurants/Restaurants";

interface ClientContentProps {
  searchQuery: string;
}

const ClientContent: React.FC<ClientContentProps> = ({ searchQuery }) => {

  return (
    <Restaurants searchQuery={searchQuery} />    
  );
};

export default ClientContent;
