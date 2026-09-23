import { useNavigate } from "react-router-dom";

import IconEduCalc from "/IconEduCalc.png";

import GetDataSettings from "../utils/GetDataSettings.tsx";

const inputStyle: string = `w-full bg-sky-950 rounded-lg text-4xl text-center p-2.5 outline-none`;

const { QuantidadeDeNotas } = GetDataSettings();

function updateQuantityNTS(localForNTS: string, QuantidadeDeNotas: number) {
  for (let index = 1; index <= QuantidadeDeNotas; index++) {
    const element = document.createElement("input");

    element.type = "number";
    element.placeholder = `Nota ${index}`;

    element.className = inputStyle;

    element.id = `inputNTS${index}`;

    document.getElementById(localForNTS)!.appendChild(element);
  }
}

export default function PageMain() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-sky-950 flex flex-col font-sans text-[SILVER]">
      <header className="w-full bg-sky-900 flex justify-between rounded-b-lg items-center p-2.5">
        <div>
          <h1 className="text-5xl font-bold">EduCalc</h1>
          <h2 className="text-4xl">Calculadora de nota escolar</h2>
        </div>
        <img className="w-20" src={IconEduCalc} />
      </header>
      <div className="flex-1 flex justify-center items-center">
        <article className="w-[70%] bg-sky-900 flex flex-col justify-center items-center gap-2.5 rounded-lg p-2.5">
          <header className="w-full flex justify-between items-center">
            <h1 className="text-6xl font-bold">Dados do aluno</h1>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="bg-sky-950 text-2xl rounded-lg font-bold p-2.5 hover:bg-sky-800"
            >
              Alterar configurações.
            </button>
          </header>
          <label className="text-4xl" htmlFor="NomeDoAluno">
            Nome do aluno
          </label>
          <input
            className={inputStyle}
            id="NomeDoAluno"
            type="text"
            placeholder="Guilherme"
          />
          <label className="text-4xl" htmlFor="SerieAno">
            Série/Ano
          </label>
          <input
            className={inputStyle}
            id="SerieAno"
            type="number"
            placeholder="9° Ano A"
          />
          <label className="w-full text-4xl">Notas</label>
          <div id="localForNTS" className="w-full flex flex-col gap-2.5"></div>
          <button
            onClick={() => {
              updateQuantityNTS("localForNTS", QuantidadeDeNotas);
            }}
            className="w-full bg-sky-950 text-4xl rounded-lg font-bold p-2.5 hover:bg-sky-800"
          >
            Calcular
          </button>
        </article>
      </div>
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
