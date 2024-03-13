import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";

import { auth } from "../../Services/firebaseConecction";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("preencha todos os campos!");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("logado com sucesso!");
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        console.log("Erro ao fazer login:");
        console.log(error);
      });
  }

  return (
    <div className="flex w-full h-screen items-center flex-col">
      <Link to={"/"}>
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col px-3"
      >
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemplo@hotmail.com"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
        <button
          type="submit"
          className="h-9 bg-blue-600 rounded-md border-0 text-lg font-medium - text-white"
        >
          Acessar
        </button>
      </form>
    </div>
  );
};

export default Login;
