// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.


// creazione team array

// MILESTONE 0
let teamArray = [
    {
        nome: "Wayne Barnett",
        posizione: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        posizione: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        posizione: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        posizione: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        posizione: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        posizione: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    },
];


// MILESTON 1
// console.log(teamArray);
// for ( let key in teamArray){
//     console.log(key, teamArray[key])
// }




// creazione variabile di riferimento al DOM

const rowCard = document.querySelector(".card-row");


// creazioen variabile per le immagini

// creazione del cilo for per passare tutti i membri
for (let i = 0; i < teamArray.length; i++){
    const teamMembers = teamArray[i];
    console.log(teamMembers)

    rowCard.innerHTML += `
    <div class="card">
        <div class="img-card">
            <img>
                ${teamMembers.foto}
            </img>
        </div>
        <div class="text-card">
            <h2>
                ${teamMembers.nome}
            </h2>
            <h3>
                ${teamMembers.posizione}
            </h3>
        </div>
    </div>`
    
}