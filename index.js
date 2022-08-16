console.log('\n\n125 баллов\n\n1) Слайдер изображений в секции destinations - вроде всё работает как надо.  +50\n2) Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап - тоже все ок. + 50\n3) Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение) - я вам подсказку оставил, что смену Sign Up я срятал за левый край, чтоб красиво было. если принципиально, чтобы смена происходила прямо на экране, можете в js файле закоментить строки 102 и 108, это ф-ции по скрытию за левый край //leftHide. +25');


// burger menu

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const blurA = document.querySelector('.blur');
const loginButton = document.querySelector('.loginButton');
const popup = document.querySelector('.popup');
const fyp = document.querySelector('.fyp');
const spoiler = document.querySelector('.spoiler');
const spoilerCloseIcon = document.querySelector('.spoilerCloseIcon');
const spoilerQuestionIcon = document.querySelector('.spoilerQuestionIcon');
const spoilerText = document.querySelector('.spoilerText');
const spoilerIconWrapper = document.querySelector('.spoilerIconWrapper');

// popup form
  const popupForm = document.forms.popupForm
  const fbButton = popupForm.fbButton
  const googleButton = popupForm.googleButton
  const emailInput = popupForm.emailInput
  const passwordInput = popupForm.passwordInput
  const signInButton = popupForm.signInButton

  spoilerCloseIcon.addEventListener('click', function() {
    spoilerCloseIcon.classList.add('hide')
    spoilerText.classList.add('hide')
    spoilerQuestionIcon.classList.add('show')
  })

  spoilerQuestionIcon.addEventListener('click', function() {
    spoilerCloseIcon.classList.remove('hide')
    spoilerText.classList.remove('hide')
    spoilerQuestionIcon.classList.remove('show')
   
  })

  function showSpoiler () {
    spoiler.classList.add('active')
  }

  function hideSpoiler () {
    spoiler.classList.remove('active')
  }

  function leftHide() {
    popup.classList.add('leftHide')
  }
  function leftShow() {
    popup.classList.remove('leftHide')
  }

  function showPopup() {
    popup.classList.add('active');
    document.body.classList.add('block');
    blurA.classList.add('active');
    showSpoiler()
  }

  function hidePopup() {
    popup.classList.remove('active');
    document.body.classList.remove('block');
    blurA.classList.remove('active');
    hideSpoiler()
  }

  function showMenu() {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('block');
    blurA.classList.toggle('active');
  }

  function hideMenu() {
  if (burger.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('block');
        blurA.classList.remove('active');
      }
    }

  function changeFormToRegister() {
    popupForm.classList.add('register')
    popupForm.classList.remove('login')
  }

  function changeFormToLogin() {
    popupForm.classList.remove('register')
    popupForm.classList.add('login')
  }

  function loginMenu() {
    leftHide();
    setTimeout(changeFormToLogin, 300);
    setTimeout(leftShow, 300);
  }

   function registerMenu() {
    leftHide();
    setTimeout(changeFormToRegister, 300);
    setTimeout(leftShow, 300);
  }
 

document.addEventListener("click", function(event) {
  if(event.target.closest('.burger')) {
    showMenu()
  }
  if(!event.target.closest('.burger')) {
    hideMenu()
  }
  if(event.target.closest('.loginButton')) {
    showPopup()
  }
  if(event.target.closest('.toRegister')) {
    registerMenu()
  }
  if(event.target.closest('.toLogin')) {
    loginMenu()
  }
  if(spoilerText.classList.contains('hide')) {
    if(event.target.closest('.spoilerTextWrapper')) {
    hidePopup()
    }
  }
})

nav.addEventListener("click", function (event) {
  if(event.target.closest('.menuLink')) {
    hideMenu();
  }})

popup.addEventListener('click', function (event) {
  if(event.target.classList.contains('popup')) {
    hidePopup()
  }  
})

nav.addEventListener("click", function (event) {
  if(event.target.closest('.accountButton')) {
    showPopup();
  }})

spoiler.addEventListener('click', function (event) {
  if(event.target.classList.contains('spoiler')) {
    hidePopup()
  }
  if(spoilerCloseIcon.classList.contains('hide') && event.target.classList.contains('spoilerIconWrapper')) {
    console.log(1)
    hidePopup()
 }
  if(!spoilerQuestionIcon.classList.contains('show') && event.target.classList.contains('spoilerIconWrapper')) {
    console.log(1)
    hidePopup()
 }
})


  let emailValue = ''
  let passwordValue = ''

  fbButton.addEventListener('click', function () {
    emailInput.value = 'my-facebook-login@fb.com'
    passwordInput.value = 'my-facebook-password'
  })

  googleButton.addEventListener('click', function () {
    emailInput.value = 'my-google-login@fb.com'
    passwordInput.value = 'my-google-password'
  })
  

  popup.addEventListener('submit', function (value) {
    value.preventDefault()
     if (emailInput.value === '') {
      emailValue = 'пустота бесконечная'
    } else {
      emailValue = emailInput.value
    }
    if (passwordInput.value === '') {
      passwordValue = 'пустота бескрайняя'
    } else {
      passwordValue = passwordInput.value
    }
    hidePopup()
    alert('\n' + emailValue + '\n\n' + passwordValue)
    passwordInput.value = ''
    emailInput.value = ''
})

  fyp.addEventListener('click', function() {
    alert('Забыли и забыли, со всеми бывает')
  })


  // slider // ---------------------------
  
  const slider = document.querySelector('.slider')
  const sliderBlocks = document.querySelectorAll('.slider-block')

  const spainSlide = document.querySelector('.spainSlide')
  const japanSlide = document.querySelector('.japanSlide')
  const usaSlide = document.querySelector('.usaSlide')

  const sliderButtonLeft = document.querySelector('.sliderButtonLeft')
  const sliderButtonCenter = document.querySelector('.sliderButtonCenter')
  const sliderButtonRight = document.querySelector('.sliderButtonRight')

function leftClick () {
  console.log('left click');
  sliderBlocks.forEach((block) => {    
    if(block.classList.contains('one')) {
      block.classList.replace('one', 'two')
    } else {
      if(block.classList.contains('two')) {
        block.classList.replace('two', 'three')
      } else {
        if(block.classList.contains('three')) {
          block.classList.replace('three', 'four')
        } else {
          if(block.classList.contains('four')) {
            block.classList.replace('four', 'five')
          } else {
            if(block.classList.contains('five')) {
              block.classList.replace('five', 'null')
            } else {
              if(block.classList.contains('null')) {
                block.classList.remove('nullTransition')
                block.classList.replace('null', 'one')
                }
            }
          }
        }      
      }
    }
  })
}
  
function rightClick () {
  console.log('right click');
  sliderBlocks.forEach((block) => {
    if(block.classList.contains('one')) {
      block.classList.add('nullTransition')
      block.classList.replace('one', 'null')
    } else {
      if(block.classList.contains('two')) {
        block.classList.replace('two', 'one')
      } else {
        if(block.classList.contains('three')) {
          block.classList.replace('three', 'two')
        } else {
          if(block.classList.contains('four')) {
            block.classList.replace('four', 'three')
          } else {
            if(block.classList.contains('five')) {
              block.classList.replace('five', 'four')
            } else {
              if(block.classList.contains('null')) {
                block.classList.remove('nullTransition')
                block.classList.replace('null', 'five')
              }
            }
          }
        }      
      }
    }
  })
} 
  
  
  
function clickToSlider (event) {
  if(event.target.closest('.three')) {
    rightClick()
  }
  if(event.target.closest('.one')) {
    leftClick()
  }
}

slider.addEventListener('click', clickToSlider)



  slider.addEventListener('click', function(event) {
    
    if(event.target.closest('.japanSlide')) {
      sliderButtonCenter.classList.add('bright')
      sliderButtonLeft.classList.remove('bright')
      sliderButtonRight.classList.remove('bright')
      console.log('japan');
      }
    if(event.target.closest('.spainSlide')) {
      sliderButtonCenter.classList.remove('bright')
      sliderButtonLeft.classList.add('bright')
      sliderButtonRight.classList.remove('bright')
      console.log('spain');
      }
    if(event.target.closest('.usaSlide')) {
      sliderButtonCenter.classList.remove('bright')
      sliderButtonLeft.classList.remove('bright')
      sliderButtonRight.classList.add('bright')
      console.log('usa');
      }
  })


sliderButtonLeft.addEventListener('click', function(event) {
    sliderButtonRight.classList.remove('bright')
    sliderButtonCenter.classList.remove('bright')
    sliderButtonLeft.classList.add('bright')
  if (sliderBlocks[0].classList.contains('one') || sliderBlocks[0].classList.contains('four')) {
    leftClick()
  }
  if (sliderBlocks[0].classList.contains('three') || sliderBlocks[0].classList.contains('null')) {
    rightClick()
  }
})

sliderButtonCenter.addEventListener('click', function(event) {
    sliderButtonRight.classList.remove('bright')
    sliderButtonCenter.classList.add('bright')
    sliderButtonLeft.classList.remove('bright')
  if (sliderBlocks[1].classList.contains('one') || sliderBlocks[1].classList.contains('four')) {
    leftClick()
  }
  if (sliderBlocks[1].classList.contains('three') || sliderBlocks[1].classList.contains('null')) {
    rightClick()
  }
})

sliderButtonRight.addEventListener('click', function(event) {
    sliderButtonRight.classList.add('bright')
    sliderButtonCenter.classList.remove('bright')
    sliderButtonLeft.classList.remove('bright')
  if (sliderBlocks[2].classList.contains('one') || sliderBlocks[2].classList.contains('four')) {
    leftClick()
  }
  if (sliderBlocks[2].classList.contains('three') || sliderBlocks[2].classList.contains('null')) {
    rightClick()
  }
})

// ----------------------- mobile slider

const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')
const MobileDot = document.querySelectorAll('.mobileDots div')
const mobileSliderBlocks = document.querySelectorAll('.mobileSliderBlock')

function leftButtonAble() {
  leftArrow.disabled = false;
}
function rightButtonAble() {
  rightArrow.disabled = false;
}

function mobileRightClick () {
    rightArrow.disabled = true;
    setTimeout(rightButtonAble, 400)
    console.log('mobile right click');
      mobileSliderBlocks.forEach((block) => {
      if(block.classList.contains('orderTwo')) {
        block.classList.replace('orderTwo', 'orderNull')
        } else {
          if(block.classList.contains('orderOne')) {
          block.classList.replace('orderOne', 'orderTwo')
          } else {
          if(block.classList.contains('orderNull')) {
        block.classList.replace('orderNull', 'orderOne')
        }}
        }})
}

function mobileLeftClick () {
    leftArrow.disabled = true;
    setTimeout(leftButtonAble, 400)
    console.log('mobile left click');
      mobileSliderBlocks.forEach((block) => {
      if(block.classList.contains('orderNull')) {
        block.classList.replace('orderNull', 'orderTwo')
        } else {
          if(block.classList.contains('orderOne')) {
          block.classList.replace('orderOne', 'orderNull')
          } else {
          if(block.classList.contains('orderTwo')) {
          block.classList.replace('orderTwo', 'orderOne')
        }
      }
    }
  }
)
}

function brightDots () {
  mobileSliderBlocks.forEach((block) => {
  if (block.classList.contains('orderOne') && block.classList.contains('spainMobileSlide')) {   
        MobileDot[0].classList.toggle('bright')
        MobileDot[1].classList.remove('bright')
        MobileDot[2].classList.remove('bright')
      } else {
        if (block.classList.contains('orderOne') && block.classList.contains    ('japanMobileSlide')) {         
          MobileDot[0].classList.remove('bright')
          MobileDot[1].classList.toggle('bright')
          MobileDot[2].classList.remove('bright')
      } else {
         if (block.classList.contains('orderOne') && block.classList.contains    ('usaMobileSlide')) {
          MobileDot[0].classList.remove('bright')
          MobileDot[1].classList.remove('bright')
          MobileDot[2].classList.toggle('bright')
      }
    }
  }
})
}
  
rightArrow.addEventListener('click', mobileRightClick)
rightArrow.addEventListener('click', brightDots)
leftArrow.addEventListener('click', mobileLeftClick)
leftArrow.addEventListener('click', brightDots)





