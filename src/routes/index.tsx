import { Route, BrowserRouter, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota 1 */}
        <Route path="/" element={<h1>olá</h1>} />
        <Route path="/caminho2" element={<h2>olá denovo</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
