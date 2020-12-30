const URL_Servicio = "https://5fd162f4b485ea0016eee4e2.mockapi.io"

export const getUsuarios = async () => {
    const peticion = await fetch(`${URL_Servicio}/usuario`);
    const data = await peticion.json();
    return data ;
}

export const getUsuarioSearch = async (_usuario) => {
    const peticion = await fetch(`${URL_Servicio}/usuario?search=${_usuario}`);
    const data = await peticion.json();
    return data ;
}