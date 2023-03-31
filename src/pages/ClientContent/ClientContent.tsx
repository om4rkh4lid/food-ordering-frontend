import Restaurants from "../Restaurants/Restaurants";

interface ClientContentProps {
  query: string;
}

const ClientContent: React.FC<ClientContentProps> = ({ query }) => {
  return (
    <Restaurants />    
  );
};

export default ClientContent;
