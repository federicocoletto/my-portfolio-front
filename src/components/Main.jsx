/* eslint-disable no-unused-vars */

import Circuitbg from "./Circuitbg"
import '../styles/Main.css'

const Main = () => {

    // Array de nombres de países
    const paises = ["Argentina", "Brasil", "Colombia", "España", "Estados Unidos", "México", "Perú"];

    // Función para filtrar los países y actualizar el menú desplegable
    const filtrarPaises = () => {
        const input = document.getElementById("buscador");
        const filtro = input.value.toLowerCase();
        const menuDesplegable = document.getElementById("menuDesplegable");

        // Eliminar las opciones anteriores del menú desplegable
        while (menuDesplegable.firstChild) {
            menuDesplegable.removeChild(menuDesplegable.firstChild);
        }

        // Filtrar los países según el texto ingresado
        var paisesFiltrados = paises.filter(function (pais) {
            return pais.toLowerCase().indexOf(filtro) > -1;
        });

        // Agregar las opciones filtradas al menú desplegable
        paisesFiltrados.forEach(function (pais) {
            var opcion = document.createElement("option");
            opcion.value = pais;
            menuDesplegable.appendChild(opcion);
        });
    }

    // Llamar a la función filtrarPaises cuando se carga la página
    window.onload = function () {
        filtrarPaises();
    };


    return (
        <>
            <main>
                <h1 className='title' id='home'>Hi, welcome to my Portfolio</h1>
                <p className='intro'>Bienvenido al portfolio de Federico Coletto. Aquí encontrarás una muestra de mis más creativos proyectos en diseño y desarrollo.</p>
                <p>Espero que encuentres inspiracion en mis trabajos y que podamos trabajar juntos en el futuro!</p>
                <button className='contact' type='button'>Contact me</button>
                <Circuitbg />
                <div className="my-img">
                    <img src="" alt="" />
                </div>
                <input type="text" id="buscador" onKeyUp={filtrarPaises()} placeholder="Buscar país..." />
                <select id="menuDesplegable"></select>
            </main>
        </>
    )
}

export default Main