// slider
$(function() {
		$('.foter__cards').slick({
				infinite: true,
				slidesToShow: 7,
				slidesToScroll: 1,
				arrows: false,
				cssEase: 'linear',
				autoplay: true,
				autoplaySpeed: 3000
	});

});

// random
let random = function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
};

document.querySelector(".bid").innerHTML =`€${random(1200, 4599)}`;
document.querySelector(".ask").innerHTML =`€${random(1200, 4599)}`;

// pop-up
const modalTrigger = document.querySelector('[data-popup]'),
	modal = document.querySelector('.popup'),
	modalCloseBtn = document.querySelector('[data-close]');

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow ='hidden';
	}
	
	modalTrigger.addEventListener('click', openModal);
   
	
	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow ='';
	}

	modalCloseBtn.addEventListener('click', closeModal);

// closePopup-Bg
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

// closePopup-Esc
   document.addEventListener('keydown', (e) => {
	   if (e.code === 'Escape' && modal.classList.contains('show')) {
		closeModal();
	   }
   });

// popup-dataShow
   modalTrigger.addEventListener('click', (e) => {
	e.preventDefault();

	let modal__input = document.querySelectorAll(".modal__input"),
		popup__data = document.querySelectorAll(".popup__data");

		modal__input.forEach(function(item, i) {
		popup__data.item(i).innerText =`${item.value}`;
	    	item.value = "";
   });

