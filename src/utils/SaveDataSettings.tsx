export default function SaveData(
  NotaMinimaParaPassar: string,
  QuantidadeDeNotas: string,
  DivisorDeMedia: string,
) {
  localStorage.setItem("NotaMinimaParaPassar", NotaMinimaParaPassar);
  localStorage.setItem("QuantidadeDeNotas", QuantidadeDeNotas);
  localStorage.setItem("DivisorDeMedia", DivisorDeMedia);
}
