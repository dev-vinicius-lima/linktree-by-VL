import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { db } from "../../Services/firebaseConecction";
import { setDoc, doc, getDoc } from "firebase/firestore";

const Networks = () => {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook);
          setInstagram(snapshot.data()?.instagram);
          setLinkedin(snapshot.data()?.linkedin);
        }
      });
    }
    loadLinks();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      linkedin: linkedin,
    })
      .then(() => {
        console.log("Cadastrados com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao salvar " + error);
      });
  }
  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas Redes Sociais
      </h1>

      <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
        <label className="text-white font-medium mt-2 mb-2">
          Link do facebook
        </label>
        <Input
          placeholder="Digite a URL do facebook"
          type="url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do instagram
        </label>
        <Input
          placeholder="Digite a URL do Instagram"
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do linkedin
        </label>
        <Input
          placeholder="Digite a URL do Linkedin"
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium mt-2"
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
};

export default Networks;
