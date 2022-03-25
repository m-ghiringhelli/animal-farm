import { animals } from '../data.js';
import { findById } from '../utils.js';

const animalName = document.getElementById('animal-name');
const animalImage = document.getElementById('animal-image');
const animalQuote = document.getElementById('animal-quote');

const params = new URLSearchParams(window.location.search);

const animal = findById(params.get('id'), animals);

animalName.textContent = animal.name;
animalImage.src = `../assets/${animal.type}.svg`;
animalQuote.textContent = animal.says;



