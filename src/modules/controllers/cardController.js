import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";
import { API_URL, DATA } from "../const";
import { getData } from "../getData";
import { renderCard } from "../render/renderCard";

export const cardController = async (routerData) => { 
  const { id } = routerData.data;
  const data = await getData(`${API_URL}/api/goods/${id}`);

  renderNavigation(data.data.gender, data.data.category);
  renderHero(false);
  renderCard(data.data);
  renderProducts('Вам так же может понравится', {count:4,gender:data.data.gender});
}