async function buscarJugador() {

    let nombre = document.getElementById("jugador").value.trim();

    let url = "https://premier-league-api.onrender.com/players/" + encodeURIComponent(nombre);

    try {

        let respuesta = await fetch(url);

        let datos = await respuesta.json();

        console.log(datos);

        // si no existe
        if (!datos) {
            document.getElementById("resultado").innerHTML =
                "<h2>Jugador no encontrado</h2>";
            return;
        }

        // mostrar datos
        document.getElementById("nombreJugador").textContent = datos.name;
        document.getElementById("equipo").textContent = datos.club;
        document.getElementById("posicion").textContent = datos.position;
        document.getElementById("numero").textContent = datos.Jersey_Number;
        document.getElementById("nacionalidad").textContent = datos.Nationality;
        document.getElementById("goles").textContent = datos.Goals;
        document.getElementById("asistencias").textContent = datos.Assists;

    } catch(error) {

        console.log(error);

        document.getElementById("resultado").innerHTML =
            "<h2>Error al buscar jugador</h2>";
    }
}