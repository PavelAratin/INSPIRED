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

//обращение к серверу
const init = async () => {
  DATA.navigation = await getData(`${API_URL}/api/categories`);
  console.log(DATA.navigation.data);
  //через библиотеку
  router.on('*', () => {
    renderHeader();
    renderFooter();
  })
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
  router.resolve();
}
init()

