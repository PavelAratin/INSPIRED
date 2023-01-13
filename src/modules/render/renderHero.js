export const renderHero = () => {
  const hero = document.querySelector('.hero');
  hero.innerHTML = `
 <div class="container">
        <div class="hero__content">
          <h1 class="title hero__title">Новая коллекция бюстгальтер-балконет</h1>
          <a href="#" class="hero__link">Перейти</a>
        </div>
      </div>`;
};