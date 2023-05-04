const reviewBtns = document.querySelectorAll('.reviews__tabs-btn')
const reviewContents = document.querySelectorAll('.reviews__content-item')
const mapBtns = document.querySelectorAll('.statistics__review-item')
const commentBlocks = document.querySelectorAll('.statistics__review-comment')
const burger = document.querySelector('.header__burger')
const sideMenu = document.querySelector('.mobile-menu')
const popup = document.querySelector('.popup')
const sideMenuLink = document.querySelectorAll('.popup__nav-title')
const sideMenuLinkDropdown = document.querySelectorAll('.popup__nav-list')
const closeBtn = document.querySelector('.mobile-menu__close')
const body = document.querySelector('body');


burger.addEventListener('click',()=>{
	burger.classList.toggle('open')
	sideMenu.classList.add('mobile-menu--active')
	body.classList.add('no-scroll')

})
closeBtn.addEventListener('click', ()=> {
	sideMenu.classList.remove('mobile-menu--active')
	burger.classList.remove('open')
	body.classList.remove('no-scroll')
})
document.querySelectorAll('.popup__nav-link').forEach((link)=>{
	link.addEventListener('click',()=>{
		sideMenu.style.display = 'none'
		burger.classList.remove('open')
		sideMenuLinkDropdown.forEach((item)=>{
			item.style.display = 'none'
		})
	})
})

document.addEventListener('click', (e)=> {
	if(!burger.contains(e.target) && !popup.contains(e.target)){
		sideMenu.style.display = 'none'
		burger.classList.remove('open')
	}
})

sideMenuLink.forEach((btn,idx)=> {
	btn.addEventListener('click', ()=>{
		sideMenuLink.forEach((el)=> {
			el.classList.remove('popup__nav-title-active')
			btn.classList.add('popup__nav-title-active')

			sideMenuLinkDropdown.forEach((item)=>{
				item.style.display = 'none'
			})
			sideMenuLinkDropdown[idx].style.display = 'grid'
		})
	})
})

reviewBtns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		reviewBtns.forEach((item) => {
			item.classList.remove('reviews__tabs-active')
			btn.classList.add('reviews__tabs-active')

			reviewContents.forEach((el) =>
				el.classList.remove('reviews__content-item-active')
			)
			reviewContents[idx].classList.add('reviews__content-item-active')
		})
	})
})
mapBtns.forEach((btn,idx)=>{
	btn.addEventListener('click',()=>{
		commentBlocks[idx].classList.toggle('statistics__review-comment-active')
	})
})
new Swiper('.starsSwiper', {
	slidesPerView: 4,
	centeredSlides: false,
	spaceBetween: 40,
	grabCursor: true,
	loop: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			centeredSlides: true,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	}
});
new Swiper('.partnersSlider', {
	slidesPerView: 'auto',
	centeredSlides: false,
	grabCursor: true,
	navigation: {
		nextEl: ".next",
		prevEl: ".prev"
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
})
new Swiper('.chairmanSlider', {
	slidesPerView: 4,
	centeredSlides: false,
	spaceBetween: 40,
	grabCursor: true,
	loop: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			centeredSlides: true,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	}
})
$(document).ready(function() {
	$('.lang-select').select2();
});



