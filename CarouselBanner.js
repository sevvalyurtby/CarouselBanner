if (jQuery("#splide").length <= 0) {
  var link = '/Users/sevvalkutlu/Documents/GitHub/CarouselBanner/CarouselBanner.json';
  var text = ``;
  var text1 = ``;
  var deneme = ``;
  var dizi = link;
  dizi = dizi.replaceAll('},]', '}]');
  dizi = JSON.parse(dizi);
  dizi.forEach(function (i, j) {
    text = `
        <div id="splide" class="splide splide">
        <p class="title">Sizin İçin Seçtiklerimiz</p>
          <div class="splide__track">
            <ul class="splide__list">`;
    let newItem = i;
    if (newItem != undefined) {
      deneme +=
        `
              <li class="splide__slide">
                  <div class="splide__slide__container">
                      <div class="info_product" id="product-id">
                          <a href="${newItem.url}">
                              <img data-id="product-id" class="slides-img" style="border-radius:0;" src="${newItem.img}">
                              ${newItem.img2 != "" ? `<img style="display:none;" data-id="product-id" class="slides-img-hover" src=${newItem.img2}>` : `<img style="display: none;">`}
                          </a>
						<pz-button class="product-item__add-basket js-add-to-cart -icon-button pz-button -icon-left -appearance-filled icon-content" data-product="${newItem.product_pk}" busy="false" icon="quick-basket">
      						<i class="pz-button__icon pz-icon-quick-basket"></i>
						</pz-button>
                          <div class="slides-content-br"></div>
                          <div class="splide_pinfo">
                              <div class="slides-content-title"><a href="${newItem.url}">${newItem.title}</a></div>
                              <div class="slides-content-price-container">
                                  ${newItem.price1 == newItem.price2 ? `<span class="slides-content-price">₺ ${newItem.price2}</span>` : `<span class="slides-content-price1">₺ ${newItem.price1}</span><span class="slides-content-price"> ₺ ${newItem.price2}</span>`}
                              </div>
                          </div>
						  ${newItem.kampLabel != "" ? `<div class="camp">🎁 ${newItem.kampLabel}</div>` : ``}
                      </div>
                  </div>
              </li>
      
      `
    }
  });
  text1 += `
            </ul>
            </div>
            </div>
            `;
  var reponseDeneme = text + deneme + text1;
  jQuery('body').append(reponseDeneme);

  const imgContainers = document.querySelectorAll('.info_product');


  imgContainers.forEach(imgContainer => {
    const img = imgContainer.querySelector('.slides-img');
    const imgHover = imgContainer.querySelector('.slides-img-hover');
    imgContainer.addEventListener('mouseover', function () {
      if (imgHover) {
        if (imgHover.src != "") {
          const tempSrc = img.src;
          img.src = imgHover.src;
          imgHover.src = tempSrc;
        }
      }
    });

    imgContainer.addEventListener('mouseout', function () {
      if (imgHover) {
        if (imgHover.src != "") {
          const tempSrc = img.src;
          img.src = imgHover.src;
          imgHover.src = tempSrc;
        }
      }
    });

  });
  new Splide('#splide', {
    type: 'slide',
    perMove: 1,
    rewind: true,
    perPage: 5,
    /*gap: '1em',*/
    breakpoints: {
      780: {
        perPage: 2
      }
    }
  }).mount();
}
