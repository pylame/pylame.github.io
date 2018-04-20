import $ from 'jquery';
import data from './data';

const items = $('.items');

data.forEach((el) => {
  let template = `
  <div class="item clearfix">
    <picture>
      <source media="(max-width: 767px)" srcset="${el.imgPath.mob}">
      <img class="item-img" src="${el.imgPath.desktop}" alt="${el.name}">
    </picture>
    <div class="item-wrapper">
      <a href="#"><h2 class="item-name">${el.name}</h2></a>
      <p class="item-place">${el.place}</p>
      <div>`;
  for (let i = 0; i < el.stars; i++) {
    template += '<i class="fas fa-star"></i>';
  }
  template +=`
      </div>
      <p class="item-price-info">
        <span class="item-price">${el.price}</span>
        <span class="item-cy">M</span>
        <span class="item-slash">/</span>
        <span class="item-interval">1 nəfər günlük</span>
      </p>
      <p class="item-info visible-md visible-lg">${el.descr}</p>
    </div>
  </div>`;

  items.append(template);
});