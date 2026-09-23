export default function SaveData(
  NotaMinimaParaPassar: string,
  QuantidadeDeNotas: string,
  DivisorDeMedia: string,
) {
  sessionStorage.setItem("NotaMinimaParaPassar", NotaMinimaParaPassar);
  sessionStorage.setItem("QuantidadeDeNotas", QuantidadeDeNotas);
  sessionStorage.setItem("DivisorDeMedia", DivisorDeMedia);
}
