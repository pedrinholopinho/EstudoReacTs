import { Route, BrowserRouter, Routes } from "react-router-dom";
import Tela from "../pages/tela";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota 1 */}
        <Route path="/" element={<Tela/>} />
      
      </Routes>
    </BrowserRouter>
  );
};
