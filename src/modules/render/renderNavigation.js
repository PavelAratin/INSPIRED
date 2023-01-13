export const renderNavigation = ()=>{
  const navigation = document.querySelector('.navigation .container')
  navigation.innerHTML=`
  <nav class="nav-gender">
    <ul class="nav-gender__list">
      <li class="nav-gender__item active">
        <a class="nav-gender__link" href="#">Женщины</a>
      </li>
      <li class="nav-gender__item">
        <a class="nav-gender__link" href="#">Мужчины</a>
      </li>
    </ul>
 </nav>
 <ul class="category-list">
   <li class="category-list__item">
     <a class="category-list__link active" href="#">Бюстгальтеры</a>
   </li>
   <li class="category-list__item">
     <a class="category-list__link" href="#">Трусы</a>
   </li>
   <li class="category-list__item">
     <a class="category-list__link" href="#">Носки</a>
   </li>
   <li class="category-list__item">
     <a class="category-list__link" href="#">Халаты</a>
   </li>
   <li class="category-list__item">
     <a class="category-list__link" href="#">Термобелье</a>
   </li>
   <li class="category-list__item">
     <a class="category-list__link" href="#">Пижамы</a>
   </li>
 </ul>
  `;
}