import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col">
      <h1 className="font-bold text-6xl mb-6">404</h1>
      <h1 className="font-bold text-4xl mb-4">Ops... Página não encontrada!</h1>
      <p className="italic text-2xl mb-5">
        Você caiu em uma pagina que não existe
      </p>
      <Link to={"/"} className="bg-gray-50/20 py-1 px-4 rounded-md">
        Voltar para a Home
      </Link>
    </div>
  );
};

export default ErrorPage;
