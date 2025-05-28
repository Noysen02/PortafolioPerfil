

//JSON JavaScript Object Notation
const datosProyecto = [
    {
        nombre: "Punto Cell",
        descripcion: "Inventario para una tienda de celulares.",
        fechaInicio: "2023-06-10",
        fechaFin: "2023-08-15",
        imgUrl: "https://via.placeholder.com/200",
        done: true
    },

    {
        nombre: "Clinica",
        descripcion: "Sistema de inventario, registro pacientes, citas, etc.",
        fechaInicio: "2022-03-29",
        fechaFin: "2022-04-23",
        imgUrl: "https://via.placeholder.com/200",
        done: false
    },
];

function page_load(){
    populateProyect();
}

function populateProyect(){
    const contendorEscritorio = document.getElementById("aplicacionesMovil");
    datosProyecto.forEach((proyecto)=>{

        const card = document.createElement("div");
        card.classList.add("card");
        if(proyecto.done){
            card.classList.add("done");
        }
        const img = document.createElement("img");
        img.src = proyecto.imgUrl;
        img.alt = "Imagen del proyecto";

        const h4 = document.createElement("h4");
        h4.textContent = proyecto.nombre;

        const p = document.createElement("p");
        p.textContent = `${proyecto.descripcion} ${proyecto.fechaInicio} - ${proyecto.fechaFin}`;

        card.appendChild(img);
        card.appendChild(h4);
        card.appendChild(p);

        contendorEscritorio.appendChild(card);
    });
}

//registrando una funcion para que se
// ejecute cuando este cargado todo el documento
document.addEventListener("DOMContentLoaded",page_load);