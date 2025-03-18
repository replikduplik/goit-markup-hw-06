// Pop-up işlevselliği
document.addEventListener('DOMContentLoaded', function () {
	const popup = document.querySelector('.pop-up-container');
	const openPopupBtn = document.querySelector('.hero-button');
	const closePopupBtn = document.querySelector('.pop-up-close-button');

	popup.style.display = 'none';
	openPopupBtn.addEventListener('click', function () {
		popup.style.display = 'block';
	});
	closePopupBtn.addEventListener('click', function () {
		popup.style.display = 'none';
	});
	window.addEventListener('click', function (event) {
		if (event.target === popup) {
			popup.style.display = 'none';
		}
	});
});

// Hamburger menü işlevselliği

document.addEventListener('DOMContentLoaded', function () {
	const burgerButton = document.getElementById('burgerButton');
	const closeMenuButton = document.getElementById('closeMenuButton');
	const mobileMenu = document.getElementById('mobileMenu');

	burgerButton.addEventListener('click', function () {
		mobileMenu.classList.add('is-open');
	});

	closeMenuButton.addEventListener('click', function () {
		mobileMenu.classList.remove('is-open');
	});
});
