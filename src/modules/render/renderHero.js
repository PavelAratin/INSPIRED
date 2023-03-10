import { TITLE } from "../const";
import { createElement } from "../utils/createElement";
import { hero } from "../const";

const container = createElement('div', {
  className: 'container'
})
const content = createElement('div', {
  className: 'hero__content'
}, {
  parent: container
})

const titleElem = createElement('h2', {
  className: 'title hero__title'
}, {
  parent: content
})
const heroLink = createElement('a', {
  className: 'hero__link',
  textContent: 'Перейти'
}, {
  parent: content
})

export const renderHero = (gender) => {
  if (!gender) {
    hero.style.display = 'none';
    return
  }
  hero.style.display = '';
  hero.className = `hero hero__${gender}`;
  titleElem.textContent = TITLE[gender].title;
  heroLink.href = `#/product/${TITLE[gender].id}`
  hero.append(container);
};