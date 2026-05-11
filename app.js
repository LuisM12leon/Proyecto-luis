async function buscarJugador() {

    // nombre que escribe el usuario
    let nombre = document.getElementById("jugador").value;

    // api
    let url = "https://premier-league-api.onrender.com/players/" + nombre;

    try {

        // pedir datos
        let respuesta = await fetch(url);

        // convertir a json
        let datos = await respuesta.json();

        console.log(datos);

        // comprobar si existe
        if(datos.length === 0){

            document.getElementById("resultado").innerHTML = `
                <h2>Jugador no encontrado</h2>
            `;

            return;
        }

        // jugador
        let jugador = datos[0];

        // imprimir datos
        document.getElementById("nombreJugador").textContent = jugador.name;

        document.getElementById("equipo").textContent = jugador.club;

        document.getElementById("posicion").textContent = jugador.position;

        document.getElementById("numero").textContent = jugador.Jersey_Number;

        document.getElementById("nacionalidad").textContent = jugador.Nationality;

        document.getElementById("goles").textContent = jugador.Goals;

        document.getElementById("asistencias").textContent = jugador.Assists;

        document.getElementById("minutos").textContent = jugador.Minutes_Played;

        document.getElementById("partidos").textContent = jugador.Appearances;

        document.getElementById("amarillas").textContent = jugador.Yellow_Cards;

        document.getElementById("rojas").textContent = jugador.Red_Cards;

        document.getElementById("historia").textContent =
        jugador.name + " juega actualmente en " +
        jugador.club + " como " +
        jugador.position + ". Lleva " +
        jugador.Goals + " goles esta temporada.";

    } catch(error){

        console.log(error);

        document.getElementById("resultado").innerHTML = `
            <h2>Error al buscar jugador</h2>
        `;
    }

}