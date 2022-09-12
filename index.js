function laCajaDePandora(numero){

    if(numero % 2 === 0) return numero.toString(2);
    else return numero.toString(16);
}

const fati = () => {
    return {
        nombre: 'Fátima',
        edad: 24,
        nacionalidad: 'Argentina',
    }
}
