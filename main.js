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

console.log(users)

document.getElementById("card-img").innerHTML = img;
document.getElementById("nome").innerHTML = name;
document.getElementById("ruolo").innerHTML = position;

for (let i = 0; i < users.length; i++) {
       users[i];
  }

