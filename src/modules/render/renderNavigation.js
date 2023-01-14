import { createElement } from "../createElement";
import { dataNavigation } from "../dataNavigation";

export const renderNavigation = (gender) => {
  const navigationContainer = document.querySelector('.navigation .container')
  navigationContainer.textContent = '';
  const navigation = createElement('nav', {
    className: 'nav-gender'
  }, {
    parent: navigationContainer
  })
  const categoryList = createElement('ul',
    {
      className: 'category-list'
    },
    {
      parent: navigationContainer
    })
  //формируем список элементов по категориям
  const categoryListItem = dataNavigation[gender].list.map((item) =>
    createElement('a',
      {
        className: 'category-list__link',
        textContent: item.title,
        href: `#/${gender} / ${item.slug}`
      },
      {
        parent: createElement('li', {
          className: 'category-list__item'
        },
          {
            parent: categoryList
          }),
          //присваиваем/убираем активнй клас у пунка меню категорий
        cb(elem) {
          elem.addEventListener('click', () => {
            document.querySelectorAll('.category-list__link').forEach(function (item) {
              item.classList.remove('active')
            })
            if (elem.classList.contains('active')) {
              console.log('да')
            } else {
              elem.classList.add('active')
            }
          });
        }
      })
  )

  const genderList = createElement('ul', {
    className: 'nav-gender__list'
  }, {
    parent: navigation,
  })

  for (const genderName in dataNavigation) {
    createElement('a', {
      className: `nav-gender__link ${gender === genderName ? 'active' : ''}`,
      href: `#/${genderName}`,
      textContent: dataNavigation[genderName].title
    },
      {
        parent: createElement('li', {
          className: 'nav-gender__item'
        },
          {
            parent: genderList
          })
      })
  }
  //   navigation.innerHTML = `
  //   <nav class="nav-gender">
  //     <ul class="nav-gender__list">
  //       <li class="nav-gender__item active">
  //         <a class="nav-gender__link" href="#">Женщины</a>
  //       </li>
  //       <li class="nav-gender__item">
  //         <a class="nav-gender__link" href="#">Мужчины</a>
  //       </li>
  //     </ul>
  //  </nav>
  //  <ul class="category-list">
  //    <li class="category-list__item">
  //      <a class="category-list__link active" href="#">Бюстгальтеры</a>
  //    </li>
  //    <li class="category-list__item">
  //      <a class="category-list__link" href="#">Трусы</a>
  //    </li>
  //    <li class="category-list__item">
  //      <a class="category-list__link" href="#">Носки</a>
  //    </li>
  //    <li class="category-list__item">
  //      <a class="category-list__link" href="#">Халаты</a>
  //    </li>
  //    <li class="category-list__item">
  //      <a class="category-list__link" href="#">Термобелье</a>
  //    </li>
  //    <li class="category-list__item">
  //      <a class="category-list__link" href="#">Пижамы</a>
  //    </li>
  //  </ul>
  //   `;
}