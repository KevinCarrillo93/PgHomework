function laCajaDePandora(numero) {
  const numero = Math.round(numero);
  if (numero % 2 === 0) return numero.toString(2);
  else return numero.toString(16);
}

function yeiduin() {
  const me = { name: "yeiduin", age: 26, nationality: "Colombia" };
  return me;
}
