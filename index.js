'use strict';

class Rating {
  constructor(value) {
    this.value = value;
  }

  render() {
    const ratingElement = document.createElement('div');
    ratingElement.className = 'rating';
    ratingElement.innerHTML = `
      <div class="rating__value"></div>
      <div class="rating__stars">
        <div class="rating__star"></div>
        <div class="rating__star"></div>
        <div class="rating__star"></div>
        <div class="rating__star"></div>
        <div class="rating__star"></div>
      </div>
    `;

    const starElms = ratingElement.querySelectorAll('.rating__star');
    starElms.forEach((star, index) => {
      star.addEventListener('click', () => {
        this.value = index + 1;
        this.update();
      });
    });

    return ratingElement;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  update() {
    const valueELm = this.element.querySelector('.rating__value');
    valueELm.textContent = this.value;

    const starElms = this.element.querySelectorAll('.rating__star');
    for (let i = 0; i < starElms.length; i++) {
      if (i < this.value) {
        starElms[i].classList.add('rating__star--on');
      } else {
        starElms[i].classList.remove('rating__star--on');
      }
    }
  }
};


const app = document.querySelector('#app');
const rating1 = new Rating(1);
rating1.mount(app);

const rating2 = new Rating(2);
rating2.mount(app);

const rating3 = new Rating(3);
rating3.mount(app);
