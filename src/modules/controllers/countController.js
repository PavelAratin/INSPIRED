export const countController = (minus,plus, number, input) => {
  let n = +input.value;
  minus.addEventListener('click', () => {
    if(n > 1){
      n -= 1;
    }
    number.textContent = n;
    input.value = n;
  })
  plus.addEventListener('click', () => {
    n += 1;
    number.textContent = n;
    input.value = n;
  })
}