import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Categoria } from "../../../models/Categoria";
import { deletar, listar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Categoria não encontrada!");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagada com sucesso!");
      retornar();
    } catch (error) {
      alert("Erro ao apagar a categoria!");
    } finally {
      setIsLoading(false);
    }
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="py-4 text-4xl text-center">Deletar Categoria</h1>
      <p className="mb-4 font-semibold text-center">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="flex flex-col justify-between overflow-hidden border rounded-2xl">
        <header className="px-6 py-2 text-2xl font-bold text-white bg-slate-600">
          Categoria
        </header>
        <p className="h-full p-8 text-3xl bg-white">{categoria.tipo}</p>
        <div className="flex">
          <button
            className="w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-all"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="flex items-center justify-center w-full bg-teal-600 text-white hover:bg-teal-800 transition-all"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;