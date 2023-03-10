import { renderNavigation } from "../render/renderNavigation";
import { renderHero } from "../render/renderHero";
import { renderProducts } from "../render/renderProducts";
//вывод отдельных частей верстки на страницу

export const mainPageController = (gender = 'women') => {
  renderNavigation(gender);
  renderHero(gender);
  renderProducts('Новинки',{gender});
}