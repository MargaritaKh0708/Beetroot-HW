
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
//const item = document.querySelector('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;


  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;

};
const checkBtns = function () {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth

};

checkBtns();

var swiper = new Swiper(".mySwiper", {
  //Exp
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 40,
    stretch: 10,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  //Exp
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".master-mini-slider", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//Modal window 

const btns = document.querySelectorAll('*[data-modal-btn]'),
  burger = document.getElementById('js-burger'),
  header = document.getElementById('js-header');
const modalWindow = () => {

  for (let i = 0; i < btns.length; i++) {
    const name = btns[i].getAttribute('data-modal-btn'),
      modal = document.querySelector("[data-modal-window='" + name + "']");
    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add('modal__event-style');
      burger.classList.add('burger__event');
      header.classList.add('header__event-style');

    }, 0)

    const close = modal.querySelector('.modal__close');
    close.addEventListener('click', () => {
      modal.classList.remove('modal__event-style');
      header.classList.remove('header__event-style');
      modal.style.display = "none";
      setTimeout(() => { burger.classList.remove('burger__event') }, 100)
    }

    )
    close.addEventListener('mouseover', () => close.classList.add('modal__close-event'))
    close.addEventListener('mouseout', () => close.classList.remove('modal__close-event'))

    window.onclick = (e) => {
      if (e.target.hasAttribute('data-modal-window')) {
        const modals = document.querySelectorAll("*[data-modal-window]");
        for (let i = 0; i < modals.length; i++) {
          modals[i].style.display = 'none';
          header.classList.remove('header__event-style');
          burger.classList.remove('burger__event');
        }
      }
    }
  }

}

burger.addEventListener('click', modalWindow)





// MAP

// Initialize and add the map
function initMap() {

  const options = {
    center: {
      lat: 37.394364, lng: -122.051381
    },
    zoom: 13,
    disableDefaultUI: true,
    scrollwheel: false,
    streetViewControl: false, //hide the yellow Street View pegman
    styles: [
      {
        "stylers": [
          {
            "color": "#313131"
          }
        ]
      },
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "weight": 0.5
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "weight": 0.5
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "color": "#313131"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#464343"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ]
  }

  const screenWidth = window.innerWidth;
  screenWidth < 1000 ? options.center = { lat: 37.324218, lng: -122.117594 } : options.center = {
    lat: 37.394364, lng: -122.051381
  }

  const barberMap = new google.maps.Map(document.getElementById('map'), options);

  const marker = new google.maps.Marker({
    position: { lat: 37.349293, lng: - 122.119949 },
    map: barberMap,
    icon: './assets/pic/mapIcon.png',
    animation: google.maps.Animation.BOUNCE
  });

}


// Show more 

const showMoreBnt = document.getElementById('js-more'),
  moreGroup = document.getElementById('more-special-group')

const showMore = () => {
  moreGroup.classList.toggle('h-hide');
  setTimeout(() => {
    moreGroup.classList.toggle('js-more-special-group')
  })
}

showMoreBnt.addEventListener('click', showMore)




// Form & validation

class ClientsBase {
  constructor(clientName, clientPhoneNum) {
    this.clientName = clientName,
      this.clientPhoneNum = clientPhoneNum
  }
}
const nameField = document.getElementById('js-user-name'),
  phoneField = document.getElementById('js-user-number'),
  submitBtn = document.getElementById('js-btn'),
  checkInput = document.getElementById('userConfirm');
let error = 0;


const errorMsg = () => {
  event.preventDefault();
  remover();
  allCheck();
  if (error > 0) return false
  else if (error === 0) {
    const user = new ClientsBase(nameField.value, phoneField.value)
    for (const item of document.querySelectorAll('.check')) {
      item.value = '';
    }
    console.log(user)
  }

}

submitBtn.addEventListener('click', errorMsg)

const remover = () => {
  const inputs = document.querySelectorAll('.check');
  inputs.forEach(input => {
    if (input.value) {
      input.classList.remove('error');
      input.nextElementSibling.innerText = '';
      error = 0;
    }
  })
}


// Error checkers

const checker = () => {
  if (!checkInput.checked) {
    document.querySelector('.map-block__form-checkbox-fake').classList.add('error-chek');
    error++;
  }
}


const emptyChecker = () => {
  const inputs = document.querySelectorAll('.check');
  inputs.forEach(input => {
    if (!input.value) {
      input.classList.add('error');
      input.nextElementSibling.innerText = 'Please, fill in the form field'
      error++
    }
  })
}

const letterChecker = () => {
  const regexName = /[0-9]/g;
  nameField.oninput = function () {
    if (this.value.match(regexName)) {
      this.value = this.value.replace(regexName, '');
      this.classList.add('error');
      this.nextElementSibling.innerText = 'Please, enter letters only';
    }
    else if (nameField.value.length === 1) {
      nameField.classList.add('error');
      nameField.nextElementSibling.innerText = 'Upps..Are u sure that it is your name?';

    }
    else {
      nameField.classList.remove('error');
      nameField.nextElementSibling.innerText = '';
    }

  }
}

const numberChecker = () => {
  const regexPhone = /[a-zA-Zа-яёА-ЯЁ]/g;
  phoneField.oninput = function () {
    if (this.value.match(regexPhone)) {
      this.value = this.value.replace(regexPhone, '');
      this.classList.add('error');
      this.nextElementSibling.innerText = 'Please, enter numbers only';
    }
    else if (phoneField.value.length > 0 && phoneField.value.length < 10) {
      phoneField.classList.add('error');
      phoneField.nextElementSibling.innerText = 'Upps..Are u sure that it is right phone number?'
    }
    else {
      phoneField.classList.remove('error');
      phoneField.nextElementSibling.innerText = '';
    }
  }


}


letterChecker();
numberChecker();


const allCheck = () => {
  emptyChecker();
  checker();
} 