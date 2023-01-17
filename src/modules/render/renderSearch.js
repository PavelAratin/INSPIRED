import { searchController } from "../controllers/searchController";
import { createElement } from "../createElement";

export const search = createElement('div', {
  className: 'search'
});

export const searchToggle = () => {
  search.classList.toggle('search-show')
}

const container = createElement('div', {
  className: 'container'
}, {
  parent: search
})

const form = createElement('form', {
  className: 'form'
}, {
  parent: container,
  cb: searchController
});

createElement('input', {
  className: 'form__input',
  type: 'search',
  name: 'search',
  placeholder: 'Найти ...'
}, {
  parent: form
})

createElement('button', {
  className: 'form__button',
  type: 'submit',
  textContent: 'Найти'
}, {
  parent: form
})