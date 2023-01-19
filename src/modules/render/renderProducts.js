
import { getData } from '../getData';
import { API_URL } from '../const';
import { createElement } from '../utils/createElement';
import { DATA } from '../const';
import { renderPagination } from './renderPgination';
import { COUNT_PAGINATION } from '../const';

export const renderProducts = async (title, params) => {
  const products = document.querySelector('.new-products');
  products.innerHTML = '';
  const data = await getData(`${API_URL}/api/goods`, params);
  const goods = Array.isArray(data.data) ? data.data : data.data.goods;
  const container = createElement('div', {
    className: 'container'
  }, {
    parent: products
  })
  createElement('h2', {
    className: 'title new-products__title',
    textContent: title
  }, {
    parent: container
  })
  const newProductsWrapper = createElement('div', {
    className: 'new-products__wrapper'
  }, {
    parent: container
  })
  const newProductsCards = goods.map(product => {
    const newProductsCard = createElement('div', {
      className: 'new-products__card',
      innerHTML: `
      <div class="new-products__imgbox">
            <a href='#/product/${product.id}'>
              <img src="${API_URL}/${product.pic}" alt="${product.title}">
            </a>
      </div>
      <a href='#/product/${product.id}'>
       <h3 class="new-products__title-card">${product.title}</h3>
      </a>`
    }, {
      parent: newProductsWrapper
    })
    const newProducsBody = createElement('div', {
      className: 'new-products__body',
      innerHTML: `<div class="new-products__prices">
      <span class="new-products__price">руб ${product.price}</span>
      <ul class="list-actions">
        <li class="list-actions__item">
          <button data-id=${product.id} class="list-actions__link" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </li>
      </ul>
      </div>`
    }, {
      parent: newProductsCard
    })
    const colorList = createElement('ul', {
      className: 'colors-list'
    }, {
      parent: newProducsBody,
      appends: product.colors.map((colorID, i) => {
        const color = DATA.colors.data.find(item => item.id == colorID)
        return createElement('li', {
          className: 'colors-list__item'
        }, {
          append: createElement('button', {
            className: `colors-list__button colors-list__button--${color.title} ${i ? '' : 'active'}`
          })
        })
      })
    })
    return newProductsCard;
  });
  if (data.data.pages && data.data.pages > 1) {
    const pagination = createElement('div', {
      className: 'pagination'
    }, {
      parent: container
    })
    renderPagination(pagination,data.data.page,data.data.pages,COUNT_PAGINATION)
  }
};