import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<ListarCategorias />} />
        <Route path="/cadastrarCategoria" element={<FormCategoria />} />
        <Route path="/editarCategoria/:id" element={<FormCategoria />} />
        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;