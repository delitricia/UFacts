
const fact = document.getElementById("fact_space");
const favsList = document.getElementById("fav_facts");
const saveBtn = document.getElementById("save_btn");

let favs = [];

function getFact() {
    fact.textContent = " Searching... ";

    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(response => response.json())  
        .then(data => {
            fact.textContent = data.text;
        })
        .catch(error => {
            fact.textContent = "Error loading fact";
            console.error(error);
        });
}
document.getElementById("btn").addEventListener("click", getFact);

function saveFavs() {
    const currentFact = fact.textContent;

    if (currentFact && !favs.includes(currentFact)) {
        favs.push(currentFact);
        updateFavsUI();
    }
}

function updateFavsUI() {
    favsList.innerHTML = ""; 
    favs.forEach(fact => {
        const li = document.createElement("li");
        li.textContent = fact;
        favsList.appendChild(li);
    });
}

saveBtn.addEventListener("click", saveFavs); 