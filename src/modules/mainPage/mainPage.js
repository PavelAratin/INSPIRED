import { renderNavigation } from "../render/renderNavigation";
import { renderHero } from "../render/renderHero";
import { renderProducts } from "../render/renderProducts";
//вывод отдельных частей верстки на страницу

export const mainPage = (gender = 'women') => {
  console.log(gender);
  renderNavigation(gender);
  renderHero(gender);
  renderProducts(gender);
}