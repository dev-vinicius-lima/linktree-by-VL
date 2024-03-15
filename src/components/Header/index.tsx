import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { auth } from "../../Services/firebaseConecction";
import { signOut } from "firebase/auth";

const Header = () => {
  async function handleLogout() {
    await signOut(auth);
  }
  return (
    <header className="w-full max-w-2xl mt-4 px-1">
      <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-3">
        <div className="flex gap-4 font-medium">
          <Link to={"/"} className=" hover:text-sky-500">
            Links Ativos
          </Link>
          <Link to={"/admin"} className=" hover:text-sky-500">
            Criar Links
          </Link>
          <Link to={"/admin/social"} className=" hover:text-sky-500">
            Redes Sociais
          </Link>
        </div>

        <button onClick={handleLogout}>
          <BiLogOut size={28} color="#db2629" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
