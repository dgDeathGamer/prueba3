var contraste = () => {
    //Esta función es para cambiar el color del fondo del cuestionario
    let btn = document.getElementById('btnContraste');

    if (btn.value == '0') {
        let elements = document.getElementsByClassName("blanco"); //Esto lo que hace es guardar en una clase, el color negro y quitar el blanco
        elements[0].classList.add("negro");
        elements[0].classList.remove("blanco");
        btn.value = '1';
    }
    else if (btn.value == '1') {
        let elements = document.getElementsByClassName("negro");
        elements[0].classList.add("blanco");
        elements[0].classList.add("negro");
        btn.value = '0';
    }
}
var fuente = () => {
    //Esta función es para ajustar el tamaño de la letra, entre pequeño, mediano y grande así facilitando la lectura.
    let btn = document.getElementById('btnFuente');
    if (btn.value == '0') {
        let elements = document.getElementsByClassName("small-letras");
        const largo = elements.length;
        for (let i = 0; i < largo; i++) {
            const element = elements[0];
            element.classList.replace('small-letras', 'medium-letras')

        }
        btn.value = '1'
    }
    else if (btn.value == "1") {
        let elements = document.getElementsByClassName("medium-letras");
        const largo = elements.length;
        for (let i = 0; i < largo; i++) {
            let element = elements[0];
            element.classList.replace('medium-letras', 'large-letras')

        }
        btn.value = "2";
    }
    else if (btn.value == "2") {
        let elements = document.getElementsByClassName("large-letras");
        const largo = elements.length;
        for (let i = 0; i < largo; i++) {
            let element = elements[0];
            element.classList.replace('large-letras', 'small-letras')

        }
        btn.value = "0";
    }
}
document.getElementById('btnContraste').addEventListener('click',contraste);
document.getElementById('btnFuente').addEventListener('click',fuente);


var limpiar = () => {
    //Esta función es para dejar vacios los inputs después de borrar algo del formulario
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n3").value = "";
    document.getElementById("n4").value = "";
    document.getElementById("n5").value = "";
    document.getElementById("n6").value = "";
    document.getElementById("n7").value = "";
    document.querySelectorAll('input[name = "sexo"]').forEach(element => {
        element.checked = false;
    });
}
var noDisabled = () => {
    //esta función es para volver a activar los campos después de eliminar algo.
    var form = document.getElementById("formularioniti3").getElementsByTagName('*');
    for (var a = 0; a < form.length; a++) {
        form[a].disabled = false
    }
}

function validarN1(event) {
    //Esta función es para hacer que solo se pueda introducir letras y espacios en el nombre.
    const input = event.target;
    const regex = /^[a-zA-Z\s]*$/; 
    if (!regex.test(input.value)) {
        input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
    }
}
function validarN3(event) {
    //Esta función es para hacer que solo se puedan ingresar  digitos numericos.
    const input = event.target;
    input.value = input.value.replace(/\D/g, ''); 
}
function validarInputs() {
    //Esta función es para validar los inputs del formulario.
    var iN1 = document.getElementById("n1");
    var iN2 = document.getElementById("n2");
    var iN3 = document.getElementById("n3");
    var iN4 = document.getElementById("n4");
    var iN5 = document.getElementById("n5");
    var iN6 = document.getElementById("n6");
    var iN7 = document.getElementById("n7");
    var in8 = document.querySelector('input[name="sexo"]:checked');

    //Esto es para que cuando el usuario deje un campo vacio, se le avise cambiando el color del borde a rojo del input que este vacio.
    if (iN1.value.trim() === "") {
        document.getElementById("n1").style.borderColor = "red";
        const mensajeAdvertencia = document.getElementById('mensajeAdvertencia');
        mensajeAdvertencia.style.display = 'block';
        return false;
    } else {
        document.getElementById("n1").style.borderColor = "";
        mensajeAdvertencia.style.display = 'none';
    }

    if (iN2.value.trim() === "") {
        document.getElementById("n2").style.borderColor = "red";
        const mensajeAdvertencia = document.getElementById('mensajeAdvertencia');
        mensajeAdvertencia.style.display = 'block';
        return false;
    } else {
        document.getElementById("n2").style.borderColor = "";
        mensajeAdvertencia.style.display = 'none';
    }

    //esta función es para hacer que solo se puedan poner numeros positivos.
    var edadRegex = /^[1-9][0-9]*$/; 
    if (!edadRegex.test(iN3.value)) {
        document.getElementById("n3").style.borderColor = "red";
        const mensajeAdvertencia = document.getElementById('mensajeAdvertencia');
        mensajeAdvertencia.style.display = 'block';
        return false;
    } else {
        document.getElementById("n3").style.borderColor = "";
        mensajeAdvertencia.style.display = 'none';
    }

    if (iN4.value.trim() === "") {
        document.getElementById("n4").style.borderColor = "red";
        const mensajeAdvertencia = document.getElementById('mensajeAdvertencia');
        mensajeAdvertencia.style.display = 'block';
        return false;
    } else {
        document.getElementById("n4").style.borderColor = "";
        mensajeAdvertencia.style.display = 'none';
    }

    //Esta función es para validar el formato del email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(iN5.value)) {
        document.getElementById("n5").style.borderColor = "red";
        const mensajeAdvertencia = document.getElementById('mensajeAdvertencia');
        mensajeAdvertencia.style.display = 'block';
        return false;
    } else {
        document.getElementById("n5").style.borderColor = "";
        mensajeAdvertencia.style.display = 'none';
    }

    //Esta función es para verificar un número de teléfono de 10 dígitos
    var telefonoRegex = /^\d{10}$/; 
    if (!telefonoRegex.test(iN6.value)) {
        document.getElementById("n6").style.borderColor = "red";
        const mensajeAdvertencia = document.getElementById('mensajeAdvertencia');
        mensajeAdvertencia.style.display = 'block';
        return false;
    } else {
        document.getElementById("n6").style.borderColor = "";
        mensajeAdvertencia.style.display = 'none';
    }

    if (iN7.value.trim() === "") {
        document.getElementById("n7").style.borderColor = "red";
        const mensajeAdvertencia = document.getElementById('mensajeAdvertencia');
        mensajeAdvertencia.style.display = 'block';
        return false;
    } else {
        document.getElementById("n7").style.borderColor = "";
        mensajeAdvertencia.style.display = 'none';
    }

    if (!in8) {
        const mensajeAdvertencia = document.getElementById('mensajeAdvertencia');
        mensajeAdvertencia.style.display = 'block';
    } else {
        mensajeAdvertencia.style.display = 'none';
    }

    return true;
}

//Esto es para que cuando uno ingrese la fecha de nacimiento, se ponga automaticamente la edad
const fechaNacimientoInput = document.getElementById('n4');
fechaNacimientoInput.addEventListener('change', calcularEdad);
//Esta función es para calcular la edad segun la fecha de nacimiento
function calcularEdad() {
    const fechaNacimiento = new Date(fechaNacimientoInput.value);

    const fechaActual = new Date();

    const tiempoDiferencia = fechaActual - fechaNacimiento;

    const edad = Math.floor(tiempoDiferencia / (1000 * 60 * 60 * 24 * 365));

    document.getElementById('n3').value = edad;
}

var modificar = (listaNueva) => {
    //Esta función es para modificar la lista donde se guardan los formularios
    let in1 = document.getElementById("n1");
    let in2 = document.getElementById("n2");
    let in3 = document.getElementById("n3");
    let in4 = document.getElementById("n4");
    let in5 = document.getElementById("n5");
    let in6 = document.getElementById("n6");
    let in7 = document.getElementById("n7");
    let in8 = document.querySelector('input[name = "sexo"]:checked');
    let eBtnEditarUp = document.getElementById('btnEditar')

    let nombre = in1.value;
    let contraseña = in2.value;
    let edad = in3.value;
    let fecha_nac = in4.value;
    let email = in5.value;
    let telef = in6.value;
    let server = in7.value;
    let sexo = in8.value;
    let indice = eBtnEditarUp.value
    listaNueva[indice].Nombre = nombre; //asegurarme de que los atributos sean iguales, osea la misma "clave", ya que el programa es sensible a las mayúsculas.
    listaNueva[indice].Contraseña = contraseña;
    listaNueva[indice].Edad = edad;
    listaNueva[indice].Fecha_nac = fecha_nac;
    listaNueva[indice].Email = email;
    listaNueva[indice].Telefono = telef;
    listaNueva[indice].Server = server;
    listaNueva[indice].Sexo = sexo;
    localStorage.setItem('personas', JSON.stringify(listaNueva));
    //cargar de nuevo la tabla
    cargarTabla(listaNueva)
}
var eliminar = (listaNueva) => {
    //Esta función es para eliminar algún registro de la lista.
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    console.log(listaNueva)
    lista = listaNueva.filter((p) => p.id != indice)
    lista = lista.map((p, index) => { return { ...p, 'id': index } })


    console.log(lista)
    localStorage.setItem('personas', JSON.stringify(lista));
    cargarTabla(lista);
    limpiar();
    noDisabled();
}
var cargarTabla = (listaNueva) => {
    //Función para cargar la tabla y que se muestre en el contenedor.
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let in1 = document.getElementById("n1");
    let in2 = document.getElementById("n2");
    let in3 = document.getElementById("n3");
    let in4 = document.getElementById("n4");
    let in5 = document.getElementById("n5");
    let in6 = document.getElementById("n6");
    let in7 = document.getElementById("n7");
    let in8 = document.querySelector('input[name = "sexo"]:checked');

    render = "<table>"
    render += "<tr><th>Nombre</th><th>Contraseña</th><th>Edad</th><th>Fecha_nac</th><th>Email</th><th>Telefono</th><th>Server</th><th>Sexo</th><th>Accion</th></tr>"
    for (let i = 0; i < listaNueva.length; i++) {
        const element = listaNueva[i];
        render += "<tr>"
        render += "<td>" + element.Nombre + "</td>"
        render += "<td>" + element.Contraseña + "</td>"
        render += "<td>" + element.Edad + "</td>"
        render += "<td>" + element.Fecha_nac + "</td>"
        render += "<td>" + element.Email + "</td>"
        render += "<td>" + element.Telefono + "</td>"
        render += "<td>" + element.Server + "</td>"
        render += "<td>" + element.Sexo + "</td>"
        render += "<td>"
        render += "<button id='btnEditar" + i + "'>Editar</button>"
        render += "<button id='btnEliminar" + i + "'>Eliminar</button>"
        render += "</td>"
        render += "</tr>"

    }
    render += "</table>";
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listaNueva.length; i++) {
        var eBtn = document.getElementById("btnEditar" + i);
        var eBtn2 = document.getElementById("btnEliminar" + i);
        let element = listaNueva[i]
        eBtn.addEventListener("click", () => {
            in1.value = element.Nombre;
            in2.value = element.Contraseña;
            in3.value = element.Edad;
            in4.value = element.Fecha_nac;
            in5.value = element.Email;
            in6.value = element.Telefono;
            in7.value = element.Server;
            in8 = element.Sexo;
            document.querySelectorAll(`input[name="${"sexo"}"]`).forEach(elemento => {
                if (elemento.value === element.Sexo) {
                    elemento.checked = true;
                }
            });
            let sEditar = "<button type='button' id='btnEditar' value='" + i + "'>Editar</button>";

            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar;
            let eBtnEditarUp = document.getElementById('btnEditar');
            eBtnEditarUp.addEventListener('click', () => modificar(listaNueva))
        })
        eBtn2.addEventListener("click", () => {
            in1.value = element.Nombre;
            in2.value = element.Contraseña;
            in3.value = element.Edad;
            in4.value = element.Fecha_nac;
            in5.value = element.Email;
            in6.value = element.Telefono;
            in7.value = element.Server;
            document.querySelectorAll(`input[name="${"sexo"}"]`).forEach(elemento => {
                if (elemento.value === element.Sexo) {
                    elemento.checked = true;
                }
            });
            var form = document.getElementById("formularioniti3").getElementsByTagName('*');
            for (var a = 0; a < form.length; a++) {
                form[a].disabled = true;
            }
            let sEliminar = "<button type='button' id='btnEliminar' value='" + i + "'>Eliminar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEliminar;
            let eBtnEliminarUp = document.getElementById('btnEliminar')
            eBtnEliminarUp.addEventListener('click', () => eliminar(listaNueva))


        })
    }
}

var registrar = () => {
    //Función para registrar los datos introducidos en los inputs, los datos seleccionados en los selects y Radio Buttons
    let in1 = document.getElementById("n1");
    let in2 = document.getElementById("n2");
    let in3 = document.getElementById("n3");
    let in4 = document.getElementById("n4");
    let in5 = document.getElementById("n5");
    let in6 = document.getElementById("n6");
    let in7 = document.getElementById("n7");
    let in8 = document.querySelector('input[name = "sexo"]:checked');

    //Esto es para verificar que no falta nada
    if (!in1.value || !in2.value || !in3.value || !in4.value || !in5.value || !in6.value || !in7.value || !in8) {
        return; //Esto detiene el registro, así para evitar enviar el formulario en caso de que falte algo.
    }

    let nombre = in1.value;
    let contraseña = in2.value;
    let edad = in3.value;
    let fecha_nac = in4.value;
    let email = in5.value;
    let telef = in6.value;
    let server = in7.value;
    let sexo = in8.value;

    let ListaPersonas = localStorage.getItem("personas");
    let ListaAntigua = JSON.parse(ListaPersonas);
    if (ListaAntigua == null) {
        let datos = { "id": 0, "Nombre": nombre, "Contraseña": contraseña, "Edad": edad, "Fecha_nac": fecha_nac, "Email": email, "Telefono": telef, "Server": server, "Sexo": sexo };
        listaNueva = [datos]
    } else {
        let datos = { "id": ListaAntigua.length, "Nombre": nombre, "Contraseña": contraseña, "Edad": edad, "Fecha_nac": fecha_nac, "Email": email, "Telefono": telef, "Server": server, "Sexo": sexo };
        listaNueva = [...ListaAntigua, datos]
    }
    //console.log(datos);
    console.log(ListaAntigua);
    console.log(listaNueva);
    localStorage.setItem("personas", JSON.stringify(listaNueva));
    //eContenedorTabla.innerHTML = ""+listaNueva.length;
    //tabla
    cargarTabla(listaNueva)
    //

}
//Evento click para el botón de registro, registra una vez validados los datos.
document.getElementById("btn").addEventListener("click", () => {
    if (validarInputs()) {
        registrar();
    }
});
var cargarDatos = () => {
    //Esta función es para cargar los datos en la lista antigua.
    let ListaPersonas = localStorage.getItem("personas");
    let ListaAntigua = JSON.parse(ListaPersonas);
    cargarTabla(ListaAntigua)
}
addEventListener('load', cargarDatos) //si se me olvida algo, revisar github larr014