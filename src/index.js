import "@babel/polyfill";//импортируем полифилы
import './index.html';//импорт для слежения за html
import './index.scss';

import { router } from "./modules/router";

import { mainPage } from "./modules/mainPage/mainPage";
import { womenMainPage } from "./modules/mainPage/womenMainPage";
import { menMainPage } from "./modules/mainPage/menMainPage";
import { renderFooter } from "./modules/render/renderFooter";
import { renderHeader } from "./modules/render/renderHeader";

//через библиотеку
router.on('*',()=>{
  renderHeader();
  renderFooter();
})
//через библиотеку
router.on('/',()=>{
  console.log('log');
  //вывод навигации,херо,товаров на главную страницу
  mainPage();
})
//через библиотеку
router.on('women',()=>{
  //вывод навигации,херо,товаров на главную страницу
  womenMainPage();
})
//через библиотеку
router.on('men',()=>{
  //вывод навигации,херо,товаров на главную страницу
  menMainPage();
})

// setTimeout(()=>{
//   router.navigate('men')
// },3000)
// setTimeout(()=>{
//   router.navigate('women')
// },6000)
//что бы роутер заработал нужно вызвать резолв
router.resolve();

