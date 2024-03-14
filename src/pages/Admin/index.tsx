import { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";

const Admin = () => {
  const [nameInput, setNameinput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f1f1f1");
  const [bgColorInput, setBgColorInput] = useState("#121212");
  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
        <label className="text-white font-medium mt-2 mb-2">
          Nome do Link:
        </label>
        <Input
          placeholder="Digite o nome do link..."
          value={nameInput}
          onChange={(e) => setNameinput(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">URL do Link:</label>
        <Input
          type="url"
          placeholder="Digite a URL..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-2 items-center">
            <label className="text-white font-medium mt-2 mb-2">
              Cor do link
            </label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="text-white font-medium mt-2 mb-2">
              Fundo do link
            </label>
            <input
              type="color"
              value={bgColorInput}
              onChange={(e) => setBgColorInput(e.target.value)}
            />
          </div>
        </section>

        <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
          <label className="text-white font-medium mt-2 mb-3">
            Veja como esta ficando:
          </label>
          <article
            className="w-full max-w-lg flex flex-col items-center justify-between bg-zinc-600 rounded-md px-1 py-3"
            style={{
              marginBottom: 8,
              marginTop: 8,
              backgroundColor: bgColorInput,
            }}
          >
            <p className="font-medium" style={{ color: textColorInput }}>
              Canal do yotube
            </p>
          </article>
        </div>
      </form>
    </div>
  );
};

export default Admin;
