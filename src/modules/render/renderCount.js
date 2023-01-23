
import { countController } from "../controllers/countController";
import { createElement } from "../utils/createElement"

export const renderCount = () => {
  const control = createElement('div', {
    className: 'counter'
  });
  const minusEl = createElement('button', {
    className: 'counter__minus',
    type: 'button',
    textContent: '-'
  }, {
    parent: control
  })
  const numberEl = createElement('span', {
    className: 'counter__count',
    textContent: '1'
  }, {
    parent: control
  })
  const plusEl = createElement('button', {
    className: 'counter__plus',
    type: 'button',
    textContent: '+'
  }, {
    parent: control
  })
  const inputEl = createElement('input', {
    className: 'counter__input',
    type: 'hidden',
    value: '1',
    name: 'count'
  }, {
    parent: control
  })

  countController(minusEl,plusEl, numberEl, inputEl)
  return control;
}