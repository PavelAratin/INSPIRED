import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";
import { DATA } from "../const";

export const categoryPageController = (routerData) => {
  const { gender, category } = routerData.data;

  if (!Object.keys(DATA.navigation.data).includes(gender)) {
    return
  }

  const params = { gender, category };
  if (routerData.params?.page) {
    params.page = routerData.params?.page
  }
  const { title } = DATA.navigation.data[gender].list
    .find((item) => item.slug === category);          
  renderNavigation(gender, category);
  renderHero(false);
  renderProducts(title, params);
}