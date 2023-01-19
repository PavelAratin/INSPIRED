import "@babel/polyfill";//импортируем полифилы
import './index.html';//импорт для слежения за html
import './index.scss';

import { router } from "./modules/utils/router";

import { mainPageController } from "./modules/controllers/mainPageController";
import { renderFooter } from "./modules/render/renderFooter";
import { renderHeader } from "./modules/render/renderHeader";
import { getData } from "./modules/getData";
import { API_URL } from "./modules/const";
import { DATA } from "./modules/const";
import { createCssColors } from "./modules/createCssColors";
import { createElement } from "./modules//utils/createElement";
import { categoryPageController } from "./modules/controllers/categoryPageController";
import { searchPageController } from "./modules/controllers/searchController";

//обращение к серверу
const init = async () => {
  try {
    //через библиотеку
    router.on('*', () => {
      renderHeader();
      renderFooter();
    })
    DATA.navigation = await getData(`${API_URL}/api/categories`);
    DATA.colors = await getData(`${API_URL}/api/colors`);
    //функция для создания динамического css на основе данных с сервера
    createCssColors(DATA.colors)
    //через библиотеку
    router.on('/', () => {
      //вывод навигации,херо,товаров на главную страницу
      mainPageController();
    })
    //через библиотеку
    router.on('women', () => {
      //вывод навигации,херо,товаров на главную страницу
      mainPageController('women');
    })
    //через библиотеку
    router.on('men', () => {
      //вывод навигации,херо,товаров на главную страницу
      mainPageController('men');
    })
    //через библиотеку , данные из строки поиска
    router.on('search', searchPageController)
    //через библиотеку , данные из строки поиска
    router.on('/:gender/:category', categoryPageController)

  } catch (error) {
    createElement('h2', {
      textContent: 'Что-то пошло не так, попробуйте позже '
    }, {
      parent: document.querySelector('section'),
      cb(h2) {
        h2.style.textAlign = 'center'
      }
    })

  } finally {
    router.resolve();
  }
}
init()

