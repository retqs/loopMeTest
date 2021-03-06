const notAvailableScreen = document.querySelector('.notAvailable');
const productImg = document.querySelectorAll('.product');
//----------------------------Loader selection------------------------------//
const disclaimer = document.querySelector('.content__disclaimer');
const infoPriceTag = document.querySelector('.loader__infoPriceTag');
const loadingScreen = document.querySelector('.loader');
const loaderShadow = document.querySelector('.item__shadow');
const header = document.querySelector('.content__disclaimer');
const productOne = document.getElementById('productOne');
const productTwo = document.getElementById('productTwo');
const productThree = document.getElementById('productThree');

//----------------------Slider selection------------------------//
const sliderContainer = document.querySelector('.sliderContainer');
const prevItem = document.getElementById('prev');
const nextItem = document.getElementById('next');
const shadow = document.querySelectorAll('.shadow');
const sliderWrapper = document.querySelector('.sliderContainer');
const slider = document.getElementById('slider');
const sliderImgsCnt = document.querySelectorAll('.slide__product');

//------------------------------- Buttons selection ---------------------------------//
const versaPink = document.getElementById('versaPink');
const versaGrey = document.getElementById('versaGrey');
const versaBlack = document.getElementById('versaBlack');
const versa = document.querySelector('.versa');
const selectedPink = document.getElementById('selectedPink');
const selectedGrey = document.getElementById('selectedGrey');
const selectedBlack = document.getElementById('selectedBlack');

const Charge3Lilac = document.getElementById('Charge3Lilac');
const Charge3Black = document.getElementById('Charge3Black');
const Charge3Blue = document.getElementById('Charge3Blue');
const charger = document.querySelector('.charger');
const chargerLilac = document.getElementById('chargerLilac');
const chargerBlack = document.getElementById('chargerBlack');
const chargerBlue = document.getElementById('chargerBlue');

const HRWhite = document.getElementById('HRWhite');
const HRLilac = document.getElementById('HRLilac');
const HRBlack = document.getElementById('HRBlack');
const hr = document.querySelector('.hr');
const selectedHRWhite = document.getElementById('selectedHRWhite');
const selectedHRLilac = document.getElementById('selectedHRLilac');
const selectedHRBlack = document.getElementById('selectedHRBlack');

const animated = document.querySelectorAll('.animated');

const Screen = window.addEventListener('orientationchange', function() {
  window.orientation === 90 ? (notAvailableScreen.style.display = 'block') : (notAvailableScreen.style.display = 'none');
});

onLoading();
Slider(prevItem, nextItem);

function onLoading() {
  let interval = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      loadingScreen.style.display = 'none';
      window.clearInterval(interval);
    }
    SliderAnimations();
  }, 2200);

  LoaderAnimations();
}

function SliderAnimations() {
  return new Promise(res => {
    res();
  })
    .then(() => {
      sliderContainer.style.visibility = 'visible';
    })
    .then(() => {
      setTimeout(() => {
        shadow.forEach(shadow => shadow.classList.add('reveal'));
      }, 200);
    })
    .then(() => {
      setTimeout(() => productImg.forEach(product => product.classList.add('reveal')), 500);
    });
}

function LoaderAnimations() {
  return new Promise(res => {
    setTimeout(() => {
      res();
      productTwo.classList.add('reveal');
    }, 300);
  })
    .then(() => {
      setTimeout(() => {
        productOne.classList.add('fromTop');
        productThree.classList.add('fromBottom');
      }, 300);
    })
    .then(() => {
      setTimeout(() => {
        disclaimer.classList.add('reveal');
        infoPriceTag.classList.add('reveal');
      }, 500);
    })
    .then(() => {
      setTimeout(() => loaderShadow.classList.add('reveal'), 800);
    })
    .catch(err => {
      console.log(err);
    });
}

function Slider(prev, next) {
  let slides = document.getElementsByClassName('slide'),
    index = 0;

  slides[0].style.transform = `translate3d(0,0,0)`;
  slides[1].style.transform = `translate3d(100vw,0,0)`;
  slides[2].style.transform = `translate3d(-100vw,0,0)`;

  const nextSlide = () => {
    let power = 1;

    index++;

    if (index === 1) {
      slides[0].style.transform = `translate3d(-${power * 100}vw,0,0)`;
      slides[1].style.transform = `translate3d(0,0,0)`;
      slides[2].style.transform = `translate3d(${power * 100}vw,0,0)`;
    } else if (index === 2) {
      slides[0].style.transform = `translate3d(${power * 100}vw,0,0)`;
      slides[1].style.transform = `translate3d(-${power * 100}vw,0,0)`;
      slides[2].style.transform = `translate3d(0,0,0)`;

      index = -1;
    } else if (index === 0) {
      slides[0].style.transform = `translate3d(0,0,0)`;
      slides[1].style.transform = `translate3d(${power * 100}vw,0,0)`;
      slides[2].style.transform = `translate3d(-${power * 100}vw,0,0)`;
    }
  };

  const prevSlide = () => {
    let power = 1;

    index--;

    if (index === 0) {
      slides[0].style.transform = `translate3d(0,0,0)`;
      slides[1].style.transform = `translate3d(${power * 100}vw,0,0)`;
      slides[2].style.transform = `translate3d(-${power * 100}vw,0,0)`;
    } else if (index === -1) {
      slides[0].style.transform = `translate3d(${power * 100}vw,0,0)`;
      slides[1].style.transform = `translate3d(-${power * 100}vw,0,0)`;
      slides[2].style.transform = `translate3d(0,0,0)`;
    } else if (index === -2) {
      slides[0].style.transform = `translate3d(-${power * 100}vw,0,0)`;
      slides[1].style.transform = `translate3d(0,0,0)`;
      slides[2].style.transform = `translate3d(${power * 100}vw,0,0)`;
      index = 1;
    }
  };

  next.addEventListener('click', () => {
    setTimeout(nextSlide, 300);

    animated.forEach(node => (node.style.opacity = 0));

    setTimeout(() => animated.forEach(node => (node.style.opacity = 1)), 500);
  });
  prev.addEventListener('click', () => {
    setTimeout(prevSlide, 300);

    animated.forEach(node => (node.style.opacity = 0));

    setTimeout(() => animated.forEach(node => (node.style.opacity = 1)), 500);
  });

  let clientX = 0;
  let clientx = 0;

  sliderImgsCnt.forEach(cnt =>
    cnt.addEventListener('touchend', event => {
      clientX = event.changedTouches[0].clientX;
      if (clientx - clientX > 100) {
        setTimeout(nextSlide, 300);

        animated.forEach(node => (node.style.opacity = 0));

        setTimeout(() => animated.forEach(node => (node.style.opacity = 1)), 500);
      } else if (clientx - clientX < -100) {
        setTimeout(prevSlide, 300);

        animated.forEach(node => (node.style.opacity = 0));

        setTimeout(() => animated.forEach(node => (node.style.opacity = 1)), 500);
      }
    })
  );
  sliderImgsCnt.forEach(cnt =>
    cnt.addEventListener('touchstart', event => {
      clientx = event.changedTouches[0].clientX;
    })
  );
}
//--------------------------Select colors events------------------------------//

versaPink.addEventListener('click', function() {
  selectedPink.value = 'on';

  if (selectedPink.value === 'on') {
    versaBlack.children[0].src = './assets/P_Versa_Black_off.png';
    versaGrey.children[0].src = './assets/P_Versa_Grey_off.png';
    this.children[0].src = './assets/P_Versa_Pink_on.png';
  }

  versa.src = this.dataset.selecteditem;
});

versaGrey.addEventListener('click', function() {
  selectedGrey.value = 'on';

  if (selectedGrey.value === 'on') {
    versaBlack.children[0].src = './assets/P_Versa_Black_off.png';
    versaPink.children[0].src = './assets/P_Versa_Pink_off.png';
    this.children[0].src = './assets/P_Versa_Grey_on.png';
  }

  versa.src = this.dataset.selecteditem;
});

versaBlack.addEventListener('click', function() {
  selectedBlack.value = 'on';

  if (selectedBlack.value === 'on') {
    versaPink.children[0].src = './assets/P_Versa_Pink_off.png';
    versaGrey.children[0].src = './assets/P_Versa_Grey_off.png';
    this.children[0].src = './assets/P_Versa_Black_on.png';
  }

  versa.src = this.dataset.selecteditem;
});

Charge3Lilac.addEventListener('click', function() {
  chargerLilac.value = 'on';

  if (chargerLilac.value === 'on') {
    Charge3Black.children[0].src = './assets/P_Charge3_Black_off.png';
    Charge3Blue.children[0].src = './assets/P_Charge3_Blue_off.png';
    this.children[0].src = './assets/P_Charge3_Lilac_on.png';
  }

  charger.src = this.dataset.selecteditem;
});

Charge3Black.addEventListener('click', function() {
  chargerBlack.value = 'on';

  if (chargerBlack.value === 'on') {
    Charge3Lilac.children[0].src = './assets/P_Charge3_Lilac_off.png';
    Charge3Blue.children[0].src = './assets/P_Charge3_Blue_off.png';
    this.children[0].src = './assets/P_Charge3_Black_on.png';
  }

  charger.src = this.dataset.selecteditem;
});

Charge3Blue.addEventListener('click', function() {
  chargerBlue.value = 'on';

  if (chargerBlue.value === 'on') {
    Charge3Black.children[0].src = './assets/P_Charge3_Black_off.png';
    Charge3Lilac.children[0].src = './assets/P_Charge3_Lilac_off.png';
    this.children[0].src = './assets/P_Charge3_Blue_on.png';
  }

  charger.src = this.dataset.selecteditem;
});

HRWhite.addEventListener('click', function() {
  selectedHRWhite.value = 'on';

  if (selectedHRWhite.value === 'on') {
    HRBlack.children[0].src = './assets/P_HR_Black_off.png';
    HRLilac.children[0].src = './assets/P_HR_Lilac_off.png';
    this.children[0].src = './assets/P_HR_White_on.png';
  }

  hr.src = this.dataset.selecteditem;
});

HRLilac.addEventListener('click', function() {
  selectedHRLilac.value = 'on';

  if (selectedHRLilac.value === 'on') {
    HRBlack.children[0].src = './assets/P_HR_Black_off.png';
    HRWhite.children[0].src = './assets/P_HR_White_off.png';
    this.children[0].src = './assets/P_HR_Lilac_on.png';
  }

  hr.src = this.dataset.selecteditem;
});

HRBlack.addEventListener('click', function() {
  selectedHRBlack.value = 'on';

  if (selectedHRBlack.value === 'on') {
    HRWhite.children[0].src = './assets/P_HR_White_off.png';
    HRLilac.children[0].src = './assets/P_HR_Lilac_off.png';
    this.children[0].src = './assets/P_HR_Black_on.png';
  }

  hr.src = this.dataset.selecteditem;
});
