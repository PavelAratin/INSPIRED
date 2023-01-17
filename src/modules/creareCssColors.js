import { createElement } from "./createElement"
//формируем динмаический css для списка цветов из базы данных
export const createCssColors = (colors) => {
  let style = createElement('style');
  colors.data.forEach(color => {
    style.textContent += `
    .colors-list__button--${color.title}{
      background-color: ${color.code};
      ${color.title === 'white' ? 'border: 1px solid #000000' : ''}
    }
    `;
  })
  document.head.append(style)
}