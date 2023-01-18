import { createElement } from "../createElement";
import { router } from "../../modules/router";

export const renderPagination = (wrapperPagination, page, pages, count) => {
  wrapperPagination.innerHTML = '';
  const paginationList = createElement('ul', {
    className: 'pagination-list'
  }, {
    parent: wrapperPagination
  })
  const isNotStart = page - Math.floor(count / 2) > 1;
  const isEnd = page + Math.floor(count / 2) > pages;
  if (count > pages) {
    count = pages
  }
  for (let i = 0; i < count; i++) {
    let n = i + 1;
    if (isNotStart) {
      if (isEnd) {
        n = pages - count + i + 1;
      } else {
        n = page - Math.floor(count / 2) + i;
      }
    }
    createElement('li', {
      className: 'pagination-list__item'
    }, {
      parent: paginationList,
      append: createElement('a', {
        textContent: n,
        className: `pagination-list__link ${page === n ? 'active' : ''}`,
        href: `${router.getCurrentLocation().url}?page=${n}`
      })
    })
  }
  if (pages > count) {
    createElement('a', {
      className: `pagination__arrow pagination__arrow--start ${!isNotStart ? 'pagination__arrow--disabled' : ''}`,
      href: `${router.getCurrentLocation().url}?page=${1}`,
      textContent: 'start',
      ariaLabel: 'В начало'
    }, {
      parent: wrapperPagination
    })
    createElement('a', {
      className: `pagination__arrow pagination__arrow--end ${isEnd ? 'pagination__arrow--disabled' : ''}`,
      href: `${router.getCurrentLocation().url}?page=${pages}`,
      textContent: 'end',
      ariaLabel: 'В конец'
    }, {
      parent: wrapperPagination
    })
  }
};