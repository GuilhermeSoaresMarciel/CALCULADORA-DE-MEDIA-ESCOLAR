interface GetDataSettings {
  NotaMinimaParaPassar: number;
  QuantidadeDeNotas: number;
  DivisorDeMedia: number;
}

export default function GetDataSettings(): GetDataSettings {
  return {
    NotaMinimaParaPassar: Number(
      sessionStorage.getItem("NotaMinimaParaPassar"),
    ),
    QuantidadeDeNotas: Number(sessionStorage.getItem("QuantidadeDeNotas")),
    DivisorDeMedia: Number(sessionStorage.getItem("DivisorDeMedia")),
  };
}
