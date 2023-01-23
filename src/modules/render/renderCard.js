import { API_URL, cardDetail, DATA } from "../const"
import { handlerFavorite } from "../controllers/favoriteController";
import { createElement } from "../utils/createElement";
import { renderCount } from "./renderCount";
import { addProductcart } from "../controllers/cartController";

export const renderCard = ({ id, title, description, price, colors, pic, size }) => {
  cardDetail.innerHTML = '';
  const container = createElement('div', {
    className: 'container'
  }, {
    parent: cardDetail
  })
  const detailCardWrapper = createElement('div', {
    className: 'detail-card__wrapper'
  }, {
    parent: container
  })
  const detailCardImgbox = createElement('div', {
    className: 'detail-card__imgbox'
  }, {
    parent: detailCardWrapper
  })

  createElement('img', {
    src: `${API_URL}/${pic}`,
    alt: title
  }, {
    parent: detailCardImgbox
  })

  const detailCardContenForm = createElement('form', {
    className: 'detail-card-content form-card'
  }, {
    parent: detailCardWrapper,
    cb(elem) {
      elem.addEventListener('submit', (e) => {
        e.preventDefault()
        const { color, size, count } = elem;
        if (color.value && size.value && count.value) {
          const formData = new FormData(elem)
          const product = Object.fromEntries(formData);
          addProductCart(product)
          return;
        }

        const p = createElement('p', {
          className: "form-alert",
          textContent: size.value ? color.value ? count.value ? 'Что то пошло не так' : 'Кол-во не корректное' : 'Выберите цвет' : 'Выберите размер'
        }, {
          parent: detailCardContenForm
        })
        setTimeout(() => { p.remove() }, 3000)

      })

      // addProductCart()
    }
  })

  createElement('h1', {
    className: 'detail-card-content__title',
    textContent: title
  }, {
    parent: detailCardContenForm
  })
  createElement('div', {
    className: 'detail-card-content__prices',
    innerHTML: `<span class="detail-card-content__str">руб</span>
    <span class="detail-card-content__num">${price}</span>`
  }, {
    parent: detailCardContenForm
  })
  createElement('div', {
    className: 'articuls',
    innerHTML: ` <span class="articuls__str">Артикул</span>
    <span class="articuls__num">${id}</span>
    <input type="hidden" value=${id} name="id"></input>
    `
  }, {
    parent: detailCardContenForm
  })

  const colorEL = createElement('div', {
    className: "colors",
    innerHTML: '<h3 class="detail-mintitle">Цвет</h3>'
  }, {
    parent: detailCardContenForm
  })
  createElement('ul', {
    className: "colors-list"
  }, {
    parent: colorEL,
    cb(colorList) {
      colors.forEach((colorId, i) => {
        const color = DATA.colors.data.find((color) => color.id === colorId).title
        const colorsListItem = createElement('li', {
          className: "colors-list__item"
        }, {
          parent: colorList
        })
        const label = createElement('label', {
          className: `colors-list__label`
        }, {
          parent: colorsListItem
        })
        createElement('input', {
          className: 'colors-list__input',
          type: 'radio',
          name: 'color',
          value: color,
          required: true,
          checked: !i
        }, {
          parent: label
        })
        createElement('span', {
          className: `colors-list__span colors-list__button--${color}`
        }, {
          parent: label
        })
      })
    }
  })
  const sizeEL = createElement('div', {
    className: "size",
    innerHTML: '<h3 class="detail-mintitle">Размер</h3>'
  }, {
    parent: detailCardContenForm
  })
  createElement('ul', {
    className: "size__list"
  }, {
    parent: sizeEL,
    cb(sizeList) {
      size.forEach((item) => {

        const sizeListItem = createElement('li', {
          className: "size__item"
        }, {
          parent: sizeList
        })
        const label = createElement('label', {
          className: `size__label`
        }, {
          parent: sizeListItem
        })
        createElement('input', {
          className: 'size__input checkbox',
          type: 'checkbox',
          name: 'size',
          value: item,
          // required: true,
        }, {
          parent: label
        })
        createElement('span', {
          className: `size__span`,
          textContent: item
        }, {
          parent: label
        })
      })
    }
  })
  detailCardContenForm.insertAdjacentHTML('beforeend', `
  <div class="detail-description">
    <h3 class="detail-mintitle">Описание</h3>
    <p class="detail-description__description">${description}</p>
  </div>
  `)

  const actionsEl = createElement('div', {
    className: 'actions'
  }, {
    parent: detailCardContenForm
  })
  const count = renderCount();

  createElement('div', {
    className: 'actions__control'
  }, {
    parent: actionsEl,
    appends: [count]
  })
  const buttonEl = createElement('button', {
    className: 'detail-card__button',
    textContent: 'В корзину',
    type: 'submit'
  }, {
    parent: actionsEl
  })
  const favoriteList = createElement('ul', {
    className: 'list-actions'
  }, {
    parent: actionsEl
  })
  const favoriteItem = createElement('li', {
    className: 'list-actions__item'
  }, {
    parent: favoriteList
  })
  const fovariteButton = createElement('a', {
    className: 'list-actions__link',
    innerHTML: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path
               d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
               stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
           </svg>`
  }, {
    parent: favoriteItem,
  }, {
    cb(elem) {
      elem.dataset.id = id;
      elem.addEventListener('click', handlerFavorite)
    }
  })
}