const button = document.querySelector("button")

button.addEventListener("click", () => {
    document.querySelectorAll("#filtro").forEach((e) => {
        e.style.visibility = "visible"
    });
    document.querySelectorAll("#btn_lista_deseo").forEach( (e) => {
        e.style.visibility = "visible"
    });
    document.querySelector(".listaPokemon").style.visibility = "visible";

    mostrarPokemon();
});

function mostrarPokemon() {
    document.querySelector(".cargandoDatos").style.visibility = "visible";
}
