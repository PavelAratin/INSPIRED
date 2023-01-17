import "@babel/polyfill";//импортируем полифилы
import './index.html';//импорт для слежения за html
import './index.scss';

import { router } from "./modules/router";

import { mainPage } from "./modules/mainPage/mainPage";
import { womenMainPage } from "./modules/mainPage/womenMainPage";
import { menMainPage } from "./modules/mainPage/menMainPage";
import { renderFooter } from "./modules/render/renderFooter";
import { renderHeader } from "./modules/render/renderHeader";
import { getData } from "./modules/getData";
import { API_URL } from "./modules/const";
import { DATA } from "./modules/const";
import { createCssColors } from "./modules/creareCssColors";
import { createElement } from "./modules/createElement";

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
      mainPage();
    })
    //через библиотеку
    router.on('women', () => {
      //вывод навигации,херо,товаров на главную страницу
      womenMainPage();
    })
    //через библиотеку
    router.on('men', () => {
      //вывод навигации,херо,товаров на главную страницу
      menMainPage();
    })
    //через библиотеку , данные из строки поиска
    router.on('search', (data) => {
      console.log(data.params.value);
    })
    
  } catch (error) {
    createElement('h2',{
      textContent:'Что-то пошло не так, попробуйте позже '
    },{
      parent:document.querySelector('section'),
      cb(h2){
        h2.style.textAlign='center'
      }
    })
    
  } finally {
    router.resolve();
  }
}
init()

