const toggleBtn = document.getElementById('nav_toggle');
const closeBtn = document.getElementById('nav_close');
const navMenu = document.getElementById('nav_menu');
const logo = document.getElementById('nav_logo');
const nightMode = document.getElementById('nav_mode');
const dropCoding = document.getElementById('drop_coding');
const codingMenu = document.getElementById('wrapper_coding');
const dropWeb = document.getElementById('drop_web');
const dropArrow = document.getElementById('arrow-down');
const dropArrowW = document.getElementById('arrow-downW');
const webMenu = document.getElementById('wrapper_web');
const slider = document.querySelector('.slider');
const navlink = document.querySelectorAll('.nav-icon-toggle')
const scrollUp = document.getElementById("scroll_up");
//const firstImg = slider.querySelectorAll('img')[0];

var docWidth = document.documentElement.offsetWidth;

var isDragStart = false, prevPageX, prevScrollLeft, positionDiff;

const autoSlide = () => {
  positionDiff = Math.abs(positionDiff);
  console.log(positionDiff);
  let firstImgWidth = firstImg.clientWidth;
  let valDiff = firstImgWidth - positionDiff;

  if(slider.scrollLeft > prevScrollLeft) {
    return slider.scrollLeft += positionDiff > Math.floor(firstImgWidth / 2) ? valDiff : -positionDiff;
  }
  slider.scrollLeft -= positionDiff > Math.floor(firstImgWidth / 2) ? valDiff : -positionDiff;
}

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft =  slider.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
  autoSlide();
}

//slider.addEventListener('mousedown', dragStart);
//slider.addEventListener('touchstart', dragStart);
//slider.addEventListener('mousemove', dragging);
//slider.addEventListener('touchmove', dragging);
//slider.addEventListener('mouseup', dragStop);
//slider.addEventListener('touchend', dragStop);

if(toggleBtn){
  toggleBtn.addEventListener('click', () => {
    
    if(!navMenu.classList.contains('show-menu')){
      navMenu.classList.add('show-menu')
      toggleBtn.classList.add('hide-icon')
      toggleBtn.classList.remove('show-icon')
      closeBtn.classList.remove('hide-icon')
      closeBtn.classList.add('show-icon')
      }
  })
  }

  if(closeBtn){
    closeBtn.addEventListener('click', () => {
      
      if(navMenu.classList.contains('show-menu')){
      navMenu.classList.remove('show-menu')
      closeBtn.classList.remove('show-icon')
      closeBtn.classList.add('hide-icon')
      toggleBtn.classList.remove('hide-icon')
      toggleBtn.classList.add('show-icon')
      }
    })
  }

  if(navlink){
    navlink.forEach(elem => elem.addEventListener('click', () => {

      if(navMenu.classList.contains('show-menu')){
        navMenu.classList.remove('show-menu')
        closeBtn.classList.remove('show-icon')
        closeBtn.classList.add('hide-icon')
        toggleBtn.classList.remove('hide-icon')
        toggleBtn.classList.add('show-icon')
      }
    }))
  }

  [].forEach.call(
    document.querySelector('*'),
    function(el) {
      if(el.offsetWidth > docWidth) {
        console.log(el);
      }
    }
  );

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    scrollUp.style.cssText = "transition: transform 0.3s; transform: translate(0);";
  } else{
    scrollUp.style.cssText = "transform: translate(0, 1000px); transition: transform 0.2s;";
  }
  }

  