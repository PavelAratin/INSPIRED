export const renderFooter = ()=>{
  const footer = document.querySelector('.footer');
  footer.innerHTML=`
  <div class="container">
     <div class="footer__wrapper">
      <div class="footer-catalog">
        <h3 class="footer-catalog__title footer__title">Каталог</h3>
        <div class="footer-catalog__wrapper">
          <ul class="footer-catalog__list">
            <li class="footer-catalog__item">
              <a class="footer-catalog__link footer-catalog__link--gender" href="#">Женщины</a>
            </li>
            <li class="footer-catalog__item">
              <a class="footer-catalog__link" href="#">Бюстгальтеры</a>
            </li>
            <li class="footer-catalog__item">
              <a class="footer-catalog__link" href="#">Трусы</a>
            </li>
            <li class="footer-catalog__item">
              <a class="footer-catalog__link" href="#">Носки</a>
            </li>
            <li class="footer-catalog__item">
              <a class="footer-catalog__link" href="#">Халаты</a>
            </li>
            <li class="footer-catalog__item">
              <a class="footer-catalog__link" href="#">Термобелье</a>
            </li>
            <li class="footer-catalog__item">
              <a class="footer-catalog__link" href="#">Пижамы</a>
            </li>
          </ul>
          <ul class="footer-catalog__list">
            <li class="footer-catalog__item">
              <a class="footer-catalog__link footer-catalog__link--gender" href="#">Мужчины</a>
            </li>
            <li class="footer-catalog__item">
              <a class="footer-catalog__link" href="#">Трусы</a>
            </li>
            <li class="footer-catalog__item">
              <a class="footer-catalog__link" href="#">Носки</a>
            </li>
            <li class="footer-catalog__item">
              <a class="footer-catalog__link" href="#">Халаты</a>
            </li>
            <li class="footer-catalog__item">
              <a class="footer-catalog__link" href="#">Термобелье</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-socials">
          <h3 class="footer-socials__title footer__title">Связаться с нами</h3>
          <p class="footer-socials__description">Контакты и адреса магазинов</p>
          <ul class="footer-socials__list">
            <li class="footer-socials__item">
              <a class="footer-socials__link" href="#">
                <img src="./img/vk.svg" alt="ССылка на группу ВК">
              </a>
            </li>
            <li class="footer-socials__item">
              <a class="footer-socials__link" href="#">
                <img src="./img/facebook.svg" alt="ССылка на ФейсБук">
              </a>
            </li>
          </ul>
      </div>
      <div class="footer-contacts">
        <ul class="footer-contacts__list">
          <li class="footer-contacts__item">
            <a class="footer-contacts__link" href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
          </li>
          <li class="footer-contacts__item">
            <a class="footer-contacts__link" href="tel:+79304902620">8 930 490 26 20</a>
          </li>
        </ul>
      </div>
     </div>
     <ul class="copyright-list">
      <li>
        <p>© INSPIRED, 2023</p>
      </li>
      <li>
        <p class="copyright-list__designer">Designer: Anastasia Ilina</p>
        <p>Developer: Aratin Pavel</p>
      </li>
    </ul>
    </div>
  `;
}