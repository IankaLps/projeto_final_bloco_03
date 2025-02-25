import { Link } from "react-router-dom"; 
import { Categoria } from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex flex-col justify-between overflow-hidden border rounded-2xl shadow-md">
      <header className="px-6 py-2 text-2xl font-bold text-white bg-slate-700">
        Categoria
      </header>

      <p className="h-full p-8 text-3xl text-center bg-white">{categoria.tipo}</p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="flex items-center justify-center w-full py-2 bg-teal-600 text-white hover:bg-teal-800 transition-all"
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="flex items-center justify-center w-full py-2 bg-red-500 text-white hover:bg-red-700 transition-all"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;