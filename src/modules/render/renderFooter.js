
import { createElement } from '../createElement';
import { DATA } from '../const';
// const arrayData = Object.entries(dataNavigation);
export const renderFooter = () => {

  const footerCatalogWrapper = document.querySelector('.footer-catalog__wrapper');
  footerCatalogWrapper.innerHTML = ''
  for (let i = 0; i < DATA.navigation.length; i++) {
    const footerCatalogList = createElement('ul', {
      className: 'footer-catalog__list'
    })
    const footerCatalogLinkTitle = createElement('a', {
      className: `footer-catalog__link footer-catalog__link--gender`,
      textContent: DATA.navigation[i][1].title,
      href: `#`
    }, {
      parent: createElement('li', {
        className: 'footer-catalog__item'
      }, {
        parent: footerCatalogList
      })
    })
    const footerCatalogLink = DATA.navigation[i][1].list.map((item) =>
      createElement('a', {
        className: 'footer-catalog__link',
        textContent: item.title,
        href: `#`
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

  // footerCatalogWrapper.innerHTML=`
  //   ${{footerCatalogList}}
  // `;
  // footer.innerHTML = `
  // <div class="container">
  //    <div class="footer__wrapper">
  //     <div class="footer-catalog">
  //       <h3 class="footer-catalog__title footer__title">Каталог</h3>
  //       <div class="footer-catalog__wrapper">
  //         <ul class="footer-catalog__list">
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link footer-catalog__link--gender" href="#">Женщины</a>
  //           </li>
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link" href="#">Бюстгальтеры</a>
  //           </li>
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link" href="#">Трусы</a>
  //           </li>
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link" href="#">Носки</a>
  //           </li>
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link" href="#">Халаты</a>
  //           </li>
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link" href="#">Термобелье</a>
  //           </li>
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link" href="#">Пижамы</a>
  //           </li>
  //         </ul>
  //         <ul class="footer-catalog__list">
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link footer-catalog__link--gender" href="#">Мужчины</a>
  //           </li>
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link" href="#">Трусы</a>
  //           </li>
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link" href="#">Носки</a>
  //           </li>
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link" href="#">Халаты</a>
  //           </li>
  //           <li class="footer-catalog__item">
  //             <a class="footer-catalog__link" href="#">Термобелье</a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //     <div class="footer-socials">
  //         <h3 class="footer-socials__title footer__title">Связаться с нами</h3>
  //         <p class="footer-socials__description">Контакты и адреса магазинов</p>
  //         <ul class="footer-socials__list">
  //           <li class="footer-socials__item">
  //             <a class="footer-socials__link" href="#">
  //               <img src=${VK} alt="ССылка на группу ВК">
  //             </a>
  //           </li>
  //           <li class="footer-socials__item">
  //             <a class="footer-socials__link" href="#">
  //               <img src=${FB} alt="ССылка на ФейсБук">
  //             </a>
  //           </li>
  //         </ul>
  //     </div>
  //     <div class="footer-contacts">
  //       <ul class="footer-contacts__list">
  //         <li class="footer-contacts__item">
  //           <a class="footer-contacts__link" href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
  //         </li>
  //         <li class="footer-contacts__item">
  //           <a class="footer-contacts__link" href="tel:+79304902620">8 930 490 26 20</a>
  //         </li>
  //       </ul>
  //     </div>
  //    </div>
  //    <ul class="copyright-list">
  //     <li>
  //       <p>© INSPIRED, 2023</p>
  //     </li>
  //     <li>
  //       <p class="copyright-list__designer">Designer: Anastasia Ilina</p>
  //       <p>Developer: Aratin Pavel</p>
  //     </li>
  //   </ul>
  //   </div>
  // `;
}
