//Referencias
let pantallaInicio = document.getElementById("pantallaInicio");
let pantallaFromulario = document.getElementById("pantallaFromulario");
let pantallaListado = document.getElementById("pantallaListado");
let pantallaDetalle = document.getElementById("pantallaDetalle");

let agregarProducto = document.getElementById("agregarProducto");

let formTitulo = document.getElementById("formTitulo");
let formCategoria = document.getElementById("formCategoria");
let formDescripcion = document.getElementById("formDescripcion");
let formAgregar = document.getElementById("formAgregar");
let cerrarForm = document.getElementById("cerrarForm");

let listado = document.getElementById("listado");
let agregarProductoListado= document.getElementById("agregarProductoListado");

let detalleImg = document.getElementById("detalleImg");
let detalleTitulo = document.getElementById("detalleTitulo");
let detalleDescripcion = document.getElementById("detalleDescripcion");
let cerrarDetalle = document.getElementById("cerrarDetalle");
let flag = 0;

let mostrarForm = () => {
    pantallaInicio.style.display = "none";
    pantallaListado.style.display = "none";
    pantallaFormulario.style.display = "block";
};

cerrarForm.addEventListener("click", () => {
    if(flag == 0){
        pantallaFormulario.style.display = "none";
        pantallaInicio.style.display = "block";
    }
    else{
        pantallaFormulario.style.display = "none";
        pantallaListado.style.display = "block";
    }
});

agregarProducto.addEventListener("click", mostrarForm);

let mostrarListado = () =>{
    pantallaFormulario.style.display = "none";
    pantallaListado.style.display = "block";
};

agregarProductoListado.addEventListener("click", mostrarForm);

let mostrarDetalle = (titulo, categoria, descripcion) =>{
    detalleTitulo.innerHTML = titulo;
    detalleImg.setAttribute("src", `images/${categoria}`)
    detalleDescripcion.innerHTML = descripcion;

    pantallaListado.style.display = "none";
    pantallaDetalle.style.display = "block";
}

cerrarDetalle.addEventListener("click", () => {
    pantallaDetalle.style.display = "none";
    pantallaListado.style.display = "block";
});

formAgregar.addEventListener("click", () =>{
    let titulo = formTitulo.value;
    let categoria = formCategoria.value;
    let descripcion = formDescripcion.value;
    let plantilla = `<li class="list-group-item">
    <img src="images/${categoria}" alt="${titulo}">
    <p>${titulo}</p>
    <button onclick="mostrarDetalle('${titulo}', '${categoria}', '${descripcion}')">
    <img src="images/flecha.png" alt="flecha">
    </button>
    </li>`;

    if(titulo != "" && categoria != "Categoria" && descripcion != "")
    {
        listado.innerHTML += plantilla;
        formTitulo.value = "";
        formCategoria.value = "";
        formDescripcion.value = "";
        mostrarListado();
    }else{
        alert("Para agregar un producto primero completa el formulario")
    }
});

