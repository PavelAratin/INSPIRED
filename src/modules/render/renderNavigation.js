import { DATA } from "../const";
import { createElement } from "../utils/createElement";

//флаг , который будет предотвращать повторный рендеринг навигации
let flag = false;
let oldGender = 'women';

export const renderNavigation = (gender, category) => {
  const navigationContainer = document.querySelector('.navigation .container');

  if (!gender) {
    navigationContainer.style.display = 'none';
  } else {
    navigationContainer.style.display = '';
  }
  if (flag && oldGender === gender) {
    return;
  };

  if (gender === 'all') {
    gender = oldGender;
  }

  oldGender = gender;
  flag = true;

  navigationContainer.textContent = '';
  const navigations = createElement('nav', {
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
  const categoryListItem = DATA.navigation.data[gender].list.map((item) =>
    createElement('a',
      {
        className: `category-list__link ${category === item.slug ? 'active' : ''}`,
        textContent: item.title,
        href: `#/${gender}/${item.slug}`
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
    parent: navigations,
  })

  for (const genderName in DATA.navigation.data) {
    createElement('a', {
      className: `nav-gender__link ${gender === genderName ? 'active' : ''}`,
      href: `#/${genderName}`,
      textContent: DATA.navigation.data[genderName].title
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