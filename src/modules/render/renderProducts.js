export const renderProducts =()=>{
  const products = document.querySelector('.new-products')
  products.innerHTML = `
  <div class="container">
        <h2 class="title new-products__title">Новинки</h2>
        <div class="new-products__wrapper">
          <div class="new-products__card">
            <div class="new-products__imgbox">
              <img src="./img/woomen-new-1.jpg" alt="Женское белье">
            </div>
            <div class="new-products__body">
              <h3 class="new-products__title-card">Бюстгальтер-Балконет Wien из Микрофибры</h3>
              <div class="new-products__prices">
                <span class="new-products__price">руб 2999</span>
                <ul class="list-actions">
                  <li class="list-actions__item">
                    <a class="list-actions__link" href="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="colors-list">
                <li class="colors-list__item">
                  <button class="colors-list__button colors-list__button--black active"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button colors-list__button--red"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button colors-list__button--white"></button>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-products__card">
            <div class="new-products__imgbox">
              <img src="./img/woomen-new-1.jpg" alt="Женское белье">
            </div>
            <div class="new-products__body">
              <h3 class="new-products__title-card">Бюстгальтер-Балконет Wien из Микрофибры</h3>
              <div class="new-products__prices">
                <span class="new-products__price">руб 2999</span>
                <ul class="list-actions">
                  <li class="list-actions__item">
                    <a class="list-actions__link" href="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="colors-list">
                <li class="colors-list__item">
                  <button class="colors-list__button colors-list__button--black"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button colors-list__button--red"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button colors-list__button--white"></button>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-products__card">
            <div class="new-products__imgbox">
              <img src="./img/woomen-new-1.jpg" alt="Женское белье">
            </div>
            <div class="new-products__body">
              <h3 class="new-products__title-card">Бюстгальтер-Балконет Wien из Микрофибры</h3>
              <div class="new-products__prices">
                <span class="new-products__price">руб 2999</span>
                <ul class="list-actions">
                  <li class="list-actions__item">
                    <a class="list-actions__link" href="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="colors-list">
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-products__card">
            <div class="new-products__imgbox">
              <img src="./img/woomen-new-1.jpg" alt="Женское белье">
            </div>
            <div class="new-products__body">
              <h3 class="new-products__title-card">Бюстгальтер-Балконет Wien из Микрофибры</h3>
              <div class="new-products__prices">
                <span class="new-products__price">руб 2999</span>
                <ul class="list-actions">
                  <li class="list-actions__item">
                    <a class="list-actions__link" href="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="colors-list">
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-products__card">
            <div class="new-products__imgbox">
              <img src="./img/woomen-new-1.jpg" alt="Женское белье">
            </div>
            <div class="new-products__body">
              <h3 class="new-products__title-card">Бюстгальтер-Балконет Wien из Микрофибры</h3>
              <div class="new-products__prices">
                <span class="new-products__price">руб 2999</span>
                <ul class="list-actions">
                  <li class="list-actions__item">
                    <a class="list-actions__link" href="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="colors-list">
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-products__card">
            <div class="new-products__imgbox">
              <img src="./img/woomen-new-1.jpg" alt="Женское белье">
            </div>
            <div class="new-products__body">
              <h3 class="new-products__title-card">Бюстгальтер-Балконет Wien из Микрофибры</h3>
              <div class="new-products__prices">
                <span class="new-products__price">руб 2999</span>
                <ul class="list-actions">
                  <li class="list-actions__item">
                    <a class="list-actions__link" href="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="colors-list">
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-products__card">
            <div class="new-products__imgbox">
              <img src="./img/woomen-new-1.jpg" alt="Женское белье">
            </div>
            <div class="new-products__body">
              <h3 class="new-products__title-card">Бюстгальтер-Балконет Wien из Микрофибры</h3>
              <div class="new-products__prices">
                <span class="new-products__price">руб 2999</span>
                <ul class="list-actions">
                  <li class="list-actions__item">
                    <a class="list-actions__link" href="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="colors-list">
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-products__card">
            <div class="new-products__imgbox">
              <img src="./img/woomen-new-1.jpg" alt="Женское белье">
            </div>
            <div class="new-products__body">
              <h3 class="new-products__title-card">Бюстгальтер-Балконет Wien из Микрофибры</h3>
              <div class="new-products__prices">
                <span class="new-products__price">руб 2999</span>
                <ul class="list-actions">
                  <li class="list-actions__item">
                    <a class="list-actions__link" href="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="colors-list">
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
                <li class="colors-list__item">
                  <button class="colors-list__button"></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  `;

}