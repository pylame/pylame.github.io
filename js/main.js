(function ($) {
'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

const hotels = [
  {
    name: 'Abşeron Hotel',
    imgPath: {
      mob: 'img/hotels/mobile/AbşeronHotel.jpg',
      desktop: 'img/hotels/AbşeronHotel.jpg'
    },
    place: 'Bakı / Azərbaycan',
    stars: 5,
    price: 150,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },
  {
    name: 'Hilton Baku',
    imgPath: {
      mob: 'img/hotels/mobile/HiltonBaku.jpg',
      desktop: 'img/hotels/HiltonBaku.jpg'
    },
    place: 'Bakı / Azərbaycan',
    stars: 5,
    price: 130,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },
  {
    name: 'Ramada',
    imgPath: {
      mob: 'img/hotels/mobile/Ramada.jpg',
      desktop: 'img/hotels/Ramada.jpg'
    },
    place: 'Bakı / Azərbaycan',
    stars: 3,
    price: 56,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },
  {
    name: 'HYATT IN',
    imgPath: {
      mob: 'img/hotels/mobile/HYATTIN.jpg',
      desktop: 'img/hotels/HYATTIN.jpg'
    },
    place: 'Bakı / Azərbaycan',
    stars: 2,
    price: 73,
    descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },
];

const items = $('.items');

hotels.forEach((el) => {
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

}($));

//# sourceMappingURL=main.js.map
