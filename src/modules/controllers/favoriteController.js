import { products } from "../const"
import { renderHero } from "../render/renderHero"
import { renderNavigation } from "../render/renderNavigation"
import { renderProducts } from "../render/renderProducts"

export const getFavorite = () => {
  return JSON.parse(localStorage.getItem('favorite') || '[]')
}
export const addFavorite = (id) => {
  const favoriteList = getFavorite();
  favoriteList.push(id)
  localStorage.setItem('favorite', JSON.stringify(favoriteList))
}
export const removeFavorite = (id) => {
  const favoriteList = getFavorite();
  const index = favoriteList.findIndex(item => item === id)
  if (index == -1) {
    return;
  }
  favoriteList.splice(index, 1)
  localStorage.setItem('favorite', JSON.stringify(favoriteList))
}

export const handlerFavorite = () => {
  (e) => {
    const target = e.target;

    if (target.closest('.favorite__active')) {
      removeFavorite(target.dataset.id)
      target.classList.remove('favorite__active')
      console.log(getFavorite());
      return;
    }
    if (target.closest('.favorite__button')) {
      addFavorite(target.dataset.id)
      target.classList.add('favorite__active')
      console.log(getFavorite());
      return;
    }
  }
}

products.addEventListener('click',handlerFavorite)
export const favoriteController = () => {
  renderNavigation('all');
  renderHero(false);
  renderProducts('Избранное', { list: getFavorite() })
}