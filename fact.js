function getFact() {
    const fact = document.getElementById("fact_space");

    fact.textContent = " Searching... ";

    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(response => response.json())   // Convertimos la respuesta a JSON
        .then(data => {
            fact.textContent = data.text;    // Mostramos el dato en el <p>
        })
        .catch(error => {
            fact.textContent = "Error loading fact"; // Manejo de errores
            console.error(error);
        });
}
document.getElementById("btn").addEventListener("click", getFact);




//console.log ("algo");
//let num = 5;
//const prueba = true;
//console.log("mi edad es " + num)



//ref: https://www.youtube.com/watch?v=bmGPv687toc&t=1645s