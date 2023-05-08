import { useSelector } from "react-redux";
import Dashboard from "./Dashboard/Dashboard";
import App from "./App";
const RootComponent = () => {
  const dashIsOpen = useSelector((state) => state.dash.dashIsOpen);
  return dashIsOpen ? <Dashboard /> : <App />;
};
export default RootComponent;
