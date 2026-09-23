interface GetDataSettings {
  NotaMinimaParaPassar: number;
  QuantidadeDeNotas: number;
  DivisorDeMedia: number;
}

export default function GetDataSettings(): GetDataSettings {
  return {
    NotaMinimaParaPassar: Number(localStorage.getItem("NotaMinimaParaPassar")),
    QuantidadeDeNotas: Number(localStorage.getItem("QuantidadeDeNotas")),
    DivisorDeMedia: Number(localStorage.getItem("DivisorDeMedia")),
  };
}
