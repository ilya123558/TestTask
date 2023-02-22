import { Route, Routes } from "react-router-dom";
import DetailsRoute from "./app/pages/Details/DetailsRoute";
import Error from "./app/pages/Error/Error";
import Home from "./app/pages/Home/Home";

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/*" element={<DetailsRoute />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
