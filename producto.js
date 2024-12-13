const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URLMain = "https://fakestoreapi.com/products";


function getData (){
    fetch(URLMain).then((response)=>{
        console.log(response);
        response.json().then((res) => {
            createCards(res);
        });
    }). catch ((err) => {
        console.log(`Problema al traer la informacion ${err}`);
        alertError.innerText= `Problema al traer la informacion ${err}`;
        alertError.style.display="block";
    });

}

getData();

// TarjetaTitulo.insertAdjacentHTML("beforeend",
//     `${res[0].title}`);
// ImagenTarj.insertAdjacentHTML("beforeend",
//     `image: ${res[0].image}`);
// TarjetaPa.insertAdjacentHTML("beforeend",
//     `<strong>Precio: ${res[0].price}</strong>
//     <br/>
//     Description: ${res[0].description}`);
// }

// createCards();

function createCards(res){
    divProductos.innerHTML="";

    res.forEach(producto => {
        const card= document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.borderRadius = "8px";
        card.style.padding = "16px";
        card.style.margin = "16px";
        card.style.width = "250px";
        card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        card.style.textAlign = "center";
        card.style.backgroundColor = "white";

        const titulo= document.createElement("h3");
        titulo.textContent = producto.title;

        const imagen= document.createElement("img");
        imagen.src = producto.image;
        imagen.alt = producto.title;
        imagen.style.width = "100%";
        imagen.style.height = "150px";
        

        const descripcion= document.createElement("p");
        descripcion.innerHTML = `<br/><strong>Precio: $${producto.price}</strong><br/><br/>
            ${producto.description}<br/><br/>Rating: ${producto.rating.rate}`;
           

        card.appendChild(titulo);
        card.appendChild(imagen);
        card.appendChild(descripcion);

        divProductos.appendChild(card);

        
    });
}

createCards();


