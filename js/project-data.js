
// data mmobilr version//

let projectData = [{
  name: 'Tonic',
  company: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups require',
  popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo',
  technologies: ['html', 'css', 'javaScript'],
  image:  './img/Snapshoot-Portfolio.png',
  liveURL: 'https://osvaldobc.github.io/osvaldojose.github.io/',
  sourceURL: 'https://github.com/OsvaldoBC/portfolio-setup',
},
  {
  name: 'Multi-Post-Stories',
  company: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups require',
  popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo',
  technologies: ['html', 'css', 'javaScript'],
  image:  './img/Snapshoot-project2.png',
  liveURL: 'https://osvaldobc.github.io/osvaldojose.github.io/',
  sourceURL: 'https://github.com/OsvaldoBC/portfolio-setup',
},
    {
  name: 'Tonic',
  company: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups require',
  popupdescription: 'Lorem Ipsum is simply dummy text of the printing and or sign-ups requiretypes',
  technologies: ['html', 'css', 'javaScript'],
  image:  './img/Snapshoot-project3.png',
  liveURL: 'https://osvaldobc.github.io/osvaldojose.github.io/',
  sourceURL: 'https://github.com/OsvaldoBC/portfolio-setup',
},
  {
  name: 'Multi-Post-Stories',
  company: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups require',
  popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo',
  technologies: ['html', 'css', 'javaScript'],
  image:  './img/Snapshoot-project4.png',
  liveURL: 'https://osvaldobc.github.io/osvaldojose.github.io/',
  sourceURL: 'https://github.com/OsvaldoBC/portfolio-setup',
},
];

// fill dynamic mobile version"

for (let i = 0; i < projectData.length; i++) {
  console.log(projectData [i]);
  let card1 = document.createElement('div');
  card1.classList.add('container1');

  let portfolio = document.createElement('div');
  portfolio.classList.add('portfolio');

  let contenido1 = document.createElement('div');
  contenido1.classList.add('contenido1');

  let cardh2 = document.createElement('h2');
  cardh2.classList.add('tonic');
  cardh2.textContent = projectData [i].name;
  contenido1.appendChild(cardh2);

  const buttons = document.createElement('ul');
  buttons.classList.add('buttons');

  for (let u = 0; u < projectData [i].technologies.length; u += 1) {
    const tagLi = document.createElement('li');
    tagLi.classList.add('int-button');
    tagLi.textContent = projectData [i].technologies[u];

    buttons.appendChild(tagLi);
  }

  const info = document.createElement('ul');
  info.classList.add('info');

  for (let u1 = 0; u1 < projectData [i].company.length; u1 += 1) {
    const tagLi1 = document.createElement('li');
    tagLi1.classList.add('tonic-detail2');
    tagLi1.textContent = projectData [i].company[u1];
    info.appendChild(tagLi1);
  }

  let cardp = document.createElement('p');
  cardp.classList.add('project-detail');
  cardp.textContent = projectData [i].description;

  let image = document.createElement('img');
  image.src = projectData [i].image;
  image.alt = 'imagen';

  const button = document.createElement('button');
  button.classList.add('see');
  button.setAttribute('type', 'button');
  const butText = document.createTextNode('See Project');
  button.appendChild(butText);

  portfolio.appendChild(image);
  contenido1.appendChild(info);
  contenido1.appendChild(cardp);
  card1.appendChild(portfolio);
  card1.appendChild(contenido1);
  contenido1.appendChild(buttons);
  contenido1.appendChild(button);

  document.querySelector('.containerobj').appendChild(card1);
}

const modalButton = document.querySelectorAll('.see');
const modal = document.querySelector('.popuphidden');
const closeModal = document.getElementById('closeModal');
for (let index = 0; index < modalButton.length; index += 1) {
  modalButton[index].setAttribute('data-index', index);
  modalButton[index].addEventListener('click', (e) => {
    const pos = e.target.getAttribute('data-index');
    modal.querySelector('.poptitle').innerHTML = projectData[pos].name;
    modal.querySelector('.popimge').src = projectData[pos].image;
    modal.querySelector('.popdescrip').innerHTML = projectData[pos].popupdescription;
    modal.querySelector('.live').href = projectData[pos].liveURL;
    modal.querySelector('.source').href = projectData[pos].sourceURL;
    modal.style.display = 'block';
  });
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
