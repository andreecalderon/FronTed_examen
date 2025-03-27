import { crearFormularioLogin } from "./components/login/login.js"; // Asegúrate de importar correctamente


async function cargarContenidoPrincipal() {
    let DOM = document.getElementById("root");
    DOM.innerHTML = ""; 
    console.log('Cargando header...');
    DOM.appendChild(crearHeader());
    console.log('Cargando formulario...');
    const formularioElement = await formulario();
    DOM.appendChild(formularioElement); 
    console.log('Cargando formulario de tarea...');
    DOM.appendChild(crearFormularioTarea());
}


function cargarDOM() {
    let DOM = document.getElementById("root");
    console.log('Cargando formulario de login...');
    const formularioLogin = crearFormularioLogin(cargarContenidoPrincipal); 
    DOM.appendChild(formularioLogin);
}


cargarDOM();