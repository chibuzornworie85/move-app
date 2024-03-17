import { Route, Routes } from "react-router-dom";
import "./App.css";
import AccountBox from "./components/accountBox";
import ProcurementPage from "./ProcurementPage/ProcurementPage";

function App() {
  return (
    <div className="text-[#000000] bg-[#c8c8c8] h-[100vh]">
      <Routes>
        <Route path="/" element={<AccountBox />} />
        <Route
          path="/procurement3yiukjeg5-47/5408456-856"
          element={<ProcurementPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
