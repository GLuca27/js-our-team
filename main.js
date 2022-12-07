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

  
const container = document.getElementById('card-container');

for (let i = 0; i < users.length; i++){
    const user = users[i];
    const template = document.getElementById('template').content.cloneNode(true);

    template.querySelector('#cardimg').src = user.img;
    template.querySelector('#nome').innerHTML = user.name;
    template.querySelector('#ruolo').innerHTML = user.position;

    container.append(template);
}

