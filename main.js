const users = [
      {
        name: 'Wayne Barnett',
        position: 'Founder e CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
      },
      {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
      },
      {
        name: 'Walter Gordon',
        position: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
      },
      {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
      },
      {
        name: 'Scott Estrada',
        position: 'Developer',
        img: 'scott-estrada-developer.jpg',
      },
      {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
      }
]

for (let i = 0; i < users.length; i++) {
       const person = users[i];
       for (let key in person){
        console.log(person[key])
       }
  }

  
const card = document.getElementById("card");

  for (let i = 0; i < users.length; i++) {
    const person = users[i];
     
    const userImg = `
    <div id="card-img" class="card-img">
      <img src="${users.img}" alt="">
    </div>`;

    const userName = ` 
    div id="name">
      <h3>Name</h3>
      <p id="nome">${users.name}</p>
    </div>
    `;

    const userPosition = `
    <div id="position">
       <h3>Ruolo</h3>
       <p id="ruolo">${users.position}</p>
    </div>
    `;
    }

