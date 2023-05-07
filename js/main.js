const reviewBtns = document.querySelectorAll('.reviews__tabs-btn')
const reviewContents = document.querySelectorAll('.reviews__content-item')
const reviewsBlock = document.querySelector('.statistics__review-comment-wrapper')
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

// document.addEventListener('click', (e)=> {
// 	if(!burger.contains(e.target) && !popup.contains(e.target)){
// 		sideMenu.style.display = 'none'
// 		burger.classList.remove('open')
// 	}
// })

sideMenuLink.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        sideMenuLink.forEach((el) => {
            el.classList.remove('popup__nav-title-active')
            btn.classList.add('popup__nav-title-active')

            sideMenuLinkDropdown.forEach((item) => {
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
reviewBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        reviewContents[idx].scrollIntoView({behavior: "smooth", block: "center"});
    });
});
mapBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        commentBlocks[idx].classList.toggle('statistics__review-comment-active');
    });
});
//swiper
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
    slidesPerView: 3,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },    breakpoints: {
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
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 2,
        },
        1241: {
            slidesPerView: 3,
        }
    }

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
if ($('.datepicker').length) {
$(".phone_mask").mask("+7(999)999-99-99");
} else {}
// Get the modal
'use strict';

class Modal {

    constructor() {
        this.triggers = document.querySelectorAll( '.js-modal' );
        this.close = document.querySelectorAll( '.js-close-modal' );
        this.modals = document.querySelectorAll( '.modal' );
        this.modalInners = document.querySelectorAll( '.modal-inner' );

        this.listeners();
    }

    listeners() {
        window.addEventListener( 'keydown', this.keyDown );

        this.triggers.forEach( el => {
            el.addEventListener( 'click', this.openModal, false );
        } );

        this.modals.forEach( el => {
            el.addEventListener( 'transitionend', this.revealModal, false );
            el.addEventListener( 'click', this.backdropClose, false );
        } );

        this.close.forEach( el => {
            el.addEventListener( 'click', Modal.hideModal, false );
        } );

        this.modalInners.forEach( el => {
            el.addEventListener( 'transitionend', this.closeModal, false );
        } );
    }

    keyDown( e ) {
        if ( 27 === e.keyCode && document.body.classList.contains( 'modal-body' ) ) {
            Modal.hideModal();
        }
    }

    backdropClose( el ) {
        if ( ! el.target.classList.contains( 'modal-visible' ) ) {
            return;
        }

        let backdrop =  el.currentTarget.dataset.backdrop !== undefined ? el.currentTarget.dataset.backdrop : true ;

        if ( backdrop === true ) {
            Modal.hideModal();
        }
    }

    static hideModal() {
        let modalOpen = document.querySelector( '.modal.modal-visible' );

        modalOpen.querySelector( '.modal-inner' ).classList.remove( 'modal-reveal' );
        document.querySelector( '.modal-body' ).addEventListener( 'transitionend', Modal.modalBody, false );
        document.body.classList.add( 'modal-fadeOut' );
    }

    closeModal( el ) {
        if ( 'opacity' === el.propertyName && ! el.target.classList.contains( 'modal-reveal' ) ) {
            document.querySelector( '.modal.modal-visible' ).classList.remove( 'modal-visible' );
        }
    }

    openModal( el ) {
        if ( ! el.currentTarget.dataset.modal ) {
            console.error( 'No data-modal attribute defined!' );
            return;
        }

        let modalID = el.currentTarget.dataset.modal;
        let modal = document.getElementById( modalID );

        document.body.classList.add( 'modal-body' );
        modal.classList.add( 'modal-visible' );
    }

    revealModal( el ) {
        if ( 'opacity' === el.propertyName && el.target.classList.contains( 'modal-visible' ) ) {
            el.target.querySelector( '.modal-inner' ).classList.add( 'modal-reveal' );
        }
    }

    static modalBody( el ) {
        if ( 'opacity' === el.propertyName && el.target.classList.contains( 'modal' ) && ! el.target.classList.contains( 'modal-visible' ) ) {
            document.body.classList.remove( 'modal-body', 'modal-fadeOut' );
        }
    }

}

new Modal();


if ($('.modal-select').length) {
	$(document).ready(function () {
		$('.modal-select').select2({
            Search: false,
            theme: 'modal',
            width: '100%',
        });
	});
} else {}
if ($('.lang-select').length) {
    $(document).ready(function () {
        $('.lang-select').select2({
            Search: false,
            theme: 'lang',
            width: '100%',
        });
    });
} else {}

//tabs
const tabs = document.querySelector(".tabs-wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
if(tabs !== null){
    tabs.onclick = e => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");

            contents.forEach(content => {
                content.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    }
}
$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);
if ($('.datepicker').length) {
    $(function(){
        $("#datepicker").datepicker({
        });
    });

} else {}
$(function() {
    //caches a jQuery object containing the header element
    var header = $(".partners__block");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('clearHeader').addClass("darkHeader");
        } else {
            header.removeClass("darkHeader").addClass('clearHeader');
        }
    });
});
