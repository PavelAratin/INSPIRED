import "@babel/polyfill";//импортируем полифилы
import './index.html';//импорт для слежения за html
import './index.scss';
import { mainPage } from "./modules/mainPage/mainPage";
import { renderFooter } from "./modules/render/renderFooter";
import { renderHeader } from "./modules/render/renderHeader";

renderHeader();
renderFooter();

mainPage();

