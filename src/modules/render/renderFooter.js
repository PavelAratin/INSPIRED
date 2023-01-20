
import { createElement } from '../utils/createElement';
import { DATA } from '../const';
import { footerCatalogWrapper } from '../const';
export const renderFooter = (gender) => {

  footerCatalogWrapper.innerHTML = ''
  const arrayData = Object.entries(DATA)
  const currentArray = (Object.entries(arrayData[0][1].data));


  for (let i = 0; i < currentArray.length; i++) {
    const footerCatalogList = createElement('ul', {
      className: 'footer-catalog__list'
    })
    const footerCatalogLinkTitle = createElement('a', {
      className: `footer-catalog__link footer-catalog__link--gender`,
      textContent: currentArray[i][1].title,
      href: `#/${currentArray[i][0]}`
    }, {
      parent: createElement('li', {
        className: 'footer-catalog__item'
      }, {
        parent: footerCatalogList
      })
    })
    const footerCatalogLink = currentArray[i][1].list.map((item) =>
      createElement('a', {
        className: 'footer-catalog__link',
        textContent: item.title,
        href: `#/${currentArray[i][0]}/${item.slug}`
      }, {
        parent: createElement('li', {
          className: 'footer-catalog__item'
        }, {
          parent: footerCatalogList
        })
      })
    )
    footerCatalogWrapper.insertAdjacentElement("afterbegin", footerCatalogList)
  }

}
