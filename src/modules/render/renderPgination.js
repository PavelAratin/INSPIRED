import { createElement } from "../utils/createElement";
import { getUrl } from "../utils/getUrl";

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
        href: getUrl({ page: n })
      })
    })
  }
  if (pages > count) {
    createElement('a', {
      className: `pagination__arrow pagination__arrow--start ${!isNotStart ? 'pagination__arrow--disabled' : ''}`,
      href: getUrl({ page: 1 }),
      innerHTML: `<svg width="5" height="8" viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7.06L1.90958 4L5 0.94L4.04858 0L-1.19209e-07 4L4.04858 8L5 7.06Z"/>
      </svg>`,
      ariaLabel: 'В начало'
    }, {
      parent: wrapperPagination
    })
    createElement('a', {
      className: `pagination__arrow pagination__arrow--end ${isEnd ? 'pagination__arrow--disabled' : ''}`,
      href: getUrl({page:pages}),
      innerHTML: `<svg width="5" height="8" viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 7.06L3.09042 4L0 0.94L0.951417 0L5 4L0.951417 8L0 7.06Z"/>
      </svg>`,
      ariaLabel: 'В конец'
    }, {
      parent: wrapperPagination
    })
  }
};