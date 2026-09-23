import { useNavigate } from "react-router-dom";

import IconEduCalc from "/IconEduCalc.png";

import SaveData from "../utils/SaveDataSettings.tsx";

import showMessage from "./../components/showMessage.tsx";

const inputStyle = `w-full bg-sky-950 rounded-lg text-4xl text-center p-2.5 outline-none`;

export default function Standard() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-sky-950 flex flex-col justify-between items-center font-sans text-[SILVER]">
      <header className="w-full bg-sky-900 flex justify-between rounded-b-lg items-center p-2.5">
        <div>
          <h1 className="text-5xl font-bold">EduCalc</h1>
          <h2 className="text-4xl">Calculadora de nota escolar</h2>
        </div>
        <img className="w-20" src={IconEduCalc} />
      </header>
      <article className="w-[70%] bg-sky-900 flex flex-col justify-center items-center gap-2.5 rounded-lg p-2.5">
        <h1 className="text-6xl font-bold">Configurações</h1>
        <label className="text-4xl" htmlFor="NotaMinimaParaPassar">
          Nota mínima para passar:
        </label>
        <input
          className={inputStyle}
          id="NotaMinimaParaPassar"
          type="number"
          placeholder="7"
        />
        <label className="text-4xl" htmlFor="QuantidadeDeNotas">
          Quantidade de notas:
        </label>
        <input
          className={inputStyle}
          id="QuantidadeDeNotas"
          type="number"
          placeholder="3"
        />
        <label className="text-4xl" htmlFor="DivisorDeMedia">
          Divisor de média:
        </label>
        <input
          className={inputStyle}
          id="DivisorDeMedia"
          type="number"
          placeholder="3"
        />
        <button
          onClick={() => {
            const NotaMinimaParaPassar = (
              document.querySelector(
                "#NotaMinimaParaPassar",
              ) as HTMLInputElement
            ).value;
            const QuantidadeDeNotas = (
              document.querySelector("#QuantidadeDeNotas") as HTMLInputElement
            ).value;
            const DivisorDeMedia = (
              document.querySelector("#DivisorDeMedia") as HTMLInputElement
            ).value;

            if (
              NotaMinimaParaPassar == "" ||
              QuantidadeDeNotas == "" ||
              DivisorDeMedia == ""
            ) {
              showMessage("Preencha todos os campos para continuar.");
            } else {
              SaveData(NotaMinimaParaPassar, QuantidadeDeNotas, DivisorDeMedia);

              showMessage("Configurações salvas com sucesso!");

              navigate("/PageMain");
            }
          }}
          className="w-full bg-sky-950 text-4xl rounded-lg p-2.5 hover:bg-sky-800"
        >
          Próximo
        </button>
      </article>
      <footer className="p-2.5 text-center">
        <h6 className="text-2xl">Calculadora de nota escolar</h6>
        <h5 className="text-3xl">Desenvolvido para professores</h5>
        <h4 className="text-4xl">
          Desenvolvido por: <u>Guilherme Soares Marciel</u>
        </h4>
      </footer>
    </main>
  );
}
