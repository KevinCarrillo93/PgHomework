function laCajaDePandora(numero) {
  if (numero % 2 === 0) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
}

function fati2() {
  return {
    nombre: "fatima",
    edad: 24,
    nacionalidad: "argentina",
  };
}
