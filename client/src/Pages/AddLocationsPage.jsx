import AddLocation from "../Features/AddLocation";
import { useUrlPosition } from "../hooks/useUrlPosition";

const AddLocationsPage = () => {
  const [, , key] = useUrlPosition();
  return <AddLocation key={key} />;
};

export default AddLocationsPage;
