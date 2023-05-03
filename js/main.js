const reviewBtns = document.querySelectorAll('.reviews__tabs-btn')
const reviewContents = document.querySelectorAll('.reviews__content-item')
const mapBtns = document.querySelectorAll('.statistics__review-item')
const commentBlocks = document.querySelectorAll('.statistics__review-comment')
const burger = document.querySelector('.header__burger')
const sideMenu = document.querySelector('.overlay')
const popup = document.querySelector('.popup')
const sideMenuLink = document.querySelectorAll('.popup__nav-title')
const sideMenuLinkDropdown = document.querySelectorAll('.popup__nav-list')
const closeBtn = document.querySelector('.popup__closebtn')
const body = document.querySelector('body');


burger.addEventListener('click',()=>{
	burger.classList.toggle('open')
	sideMenu.style.display = 'block'


})
closeBtn.addEventListener('click', ()=> {
	sideMenu.style.display = 'none'
	burger.classList.remove('open')
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
			sideMenuLinkDropdown[idx].style.display = 'flex'
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
new Swiper('.mySwiper', {
	slidesPerView: 'auto'	,
	spaceBetween: 20,
	centeredSlides: false,
	loop: false,

	a11y: true,
	keyboardControl: true,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
})
