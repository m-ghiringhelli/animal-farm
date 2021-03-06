import { animals } from './data.js';
import { renderListItem } from './render-utils.js';

const main = document.querySelector('main');

for (let animal of animals) {
    const animalDiv = renderListItem(animal);
    const a = document.createElement('a');
    a.href = `./animals/?id=${animal.id}`;
    a.append(animalDiv);
    main.append(a);
}
