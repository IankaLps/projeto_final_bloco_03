import { MagnifyingGlass, User, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="w-full flex justify-center py-4 bg-teal-400 text-white">
            <div className="container flex justify-between items-center text-lg">
                
                {/* Logo Farmácia */}
                <Link to="/">
                    <img 
                        src="https://ik.imagekit.io/yijg14v4w/Farm%C3%A1cia%20Ecommerce/logo.png?updatedAt=1740488836951" 
                        alt="Logo" 
                        className="h-10 w-auto" 
                    />
                </Link>

                {/* Barra de Pesquisa com Ícone */}
                <div className="flex items-center bg-white rounded-md px-2 w-1/3">
                    <input 
                        type="text" 
                        placeholder="Buscar..." 
                        className="px-2 py-2 text-black w-full outline-none bg-transparent"
                    />
                    <MagnifyingGlass size={24} className="text-gray-500" />
                </div>

                {/* Menu + Ícones */}
                <div className="flex gap-6 items-center">
                    <Link to="/categorias" className="hover:underline">Categorias</Link>
                    <Link to="/cadastrarCategoria" className="hover:underline">Cadastrar Categoria</Link>
                    
                    {/* Ícone de Perfil */}
                    <User size={30} className="cursor-pointer" />

                    {/* Ícone de Carrinho */}
                    <ShoppingCart size={30} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;