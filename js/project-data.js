
// data mmobilr version//

let projectData = [{
  name: 'Traffic Conference Page',
  company: ['MICROVERSE', 'Front End Dev', '2022'],
  description: 'Congress of Online Advertising. This is a capstone project for the first module at Microverse. It is based on an online website for a conference. It contains information about the event and the speakers. It is created using javaScript, html and CSS.',
  popupdescription: 'Congress of Online Advertising. This is a capstone project for the first module at Microverse. It is based on an online website for a conference. It contains information about the event and the speakers. It is created using javaScript, html and CSS.',
  technologies: ['html', 'css', 'javaScript'],
  image: './img/project1desktop.png',
  liveURL: 'https://osvaldobc.github.io/trafficConferencePage/',
  sourceURL: 'https://github.com/OsvaldoBC/trafficConferencePage',
},
{
  name: 'To Do List App',
  company: ['MICROVERSE', 'Front End Dev', '2022'],
  description: 'It is a simple web page that was built using webpack and served by a webpack dev server , is an App to organize daily tasks. They can be added, edited marked as completed and deleted them. It also allows you to select and delete all the tasks that are completed. It is created using javaScript ES6 language.',
  popupdescription: 'It is a simple web page that was built using webpack and served by a webpack dev server , is an App to organize daily tasks. They can be added, edited marked as completed and deleted them. It also allows you to select and delete all the tasks that are completed. It is created using javaScript ES6 language.',
  technologies: ['html', 'css', 'javaScript'],
  image: './img/project2desktop.png',
  liveURL: 'https://osvaldobc.github.io/to-do-list-OB/dist/',
  sourceURL: 'https://github.com/OsvaldoBC/to-do-list-OB',
},
{
  name: 'Awesome Books',
  company: ['MICROVERSE', 'Full Stack Dev', '2022'],
  description: 'This is a single-page application to add and remove information about books and store the data at local storage. It is created using JavaScript ES6 language.',
  popupdescription: 'This is a single-page application to add and remove information about books and store the data at local storage. It is created using JavaScript ES6 language.',
  technologies: ['html', 'css', 'javaScript'],
  image: './img/project3desktop.png',
  liveURL: 'https://osvaldobc.github.io/awesomeBooksES6OB/',
  sourceURL: 'https://github.com/OsvaldoBC/awesomeBooksES6OB',
},
{
  name: 'My Expenses App',
  company: ['MICROVERSE', 'Full Stack Dev', '2023'],
  description: 'My expenses is a web application where you can create an user and track your expenses divided by category',
  popupdescription: 'App created with Ruby on Rails. It is an app where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what',
  technologies: ['html', 'css', 'Ruby on Rails'],
  image: './img/project4desktop.png',
  liveURL: 'https://osvaldobc.github.io/osvaldojose.github.io/',
  sourceURL: 'https://github.com/OsvaldoBC/budget-ror',
},
];

// fill dynamic mobile version"

for (let i = 0; i < projectData.length; i++) {
  console.log(projectData[i]);
  let card1 = document.createElement('div');
  card1.classList.add('container1');

  let portfolio = document.createElement('div');
  portfolio.classList.add('portfolio');

  let contenido1 = document.createElement('div');
  contenido1.classList.add('contenido1');

  let cardh2 = document.createElement('h2');
  cardh2.classList.add('tonic');
  cardh2.textContent = projectData[i].name;
  contenido1.appendChild(cardh2);

  const buttons = document.createElement('ul');
  buttons.classList.add('buttons');

  for (let u = 0; u < projectData[i].technologies.length; u += 1) {
    const tagLi = document.createElement('li');
    tagLi.classList.add('int-button');
    tagLi.textContent = projectData[i].technologies[u];

    buttons.appendChild(tagLi);
  }

  const info = document.createElement('ul');
  info.classList.add('info');

  for (let u1 = 0; u1 < projectData[i].company.length; u1 += 1) {
    const tagLi1 = document.createElement('li');
    tagLi1.classList.add('tonic-detail2');
    tagLi1.textContent = projectData[i].company[u1];
    info.appendChild(tagLi1);
  }

  let cardp = document.createElement('p');
  cardp.classList.add('project-detail');
  cardp.textContent = projectData[i].description;

  let image = document.createElement('img');
  image.src = projectData[i].image;
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
