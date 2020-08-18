document.addEventListener('DOMContentLoaded', () => {
	/*Top navigation button*/
	const topNav = document.querySelector('#topNav')
	const openButton = topNav.querySelector('button[data-act="openTopNav"]')
	const hamburger = openButton.querySelector('i')

	openButton.addEventListener('click', () => {
		event.preventDefault()
		hamburger.classList.toggle('fa-bars')
		hamburger.classList.toggle('fa-times')
		topNav.classList.toggle('js-topNavShown')
	})

	/*Top navigation inner buttons*/
	const innerButtons = topNav.querySelectorAll('button[data-act="openInnerTopNav"]')
	for(let button of innerButtons) {
		button.addEventListener('click', () => {
			event.preventDefault()
			button.classList.toggle('js-innerTopNavShown')
		})
	}

	/*Buttons links*/
	let linkButtons = document.querySelectorAll('button[data-link]')
	for(const link of linkButtons) {
		link.addEventListener('click', () => {
			event.preventDefault()
			document.location.href = link.getAttribute('data-link')
		})
	}

	/*Callback popup*/
	const popupOpenButtons = document.querySelectorAll('button[data-act="openPopup"]')
	const popup = document.querySelector('#popupForm')
	const popupClose = popup.querySelector('button[data-act="closePopup"]')
	for(button of popupOpenButtons) {
		button.addEventListener('click', () => {
			event.preventDefault()
			popup.classList.add('js-popupShown')
		})
	}
	popupClose.addEventListener('click', () => {
		event.preventDefault()
		popup.classList.remove('js-popupShown')
	})

	/*Gallery*/
	const galleryPics = document.querySelectorAll('a[data-act="openGallery"]')
	const gallery = document.querySelector('#gallery')
	const galleryClose = gallery.querySelector('button[data-act="closeGallery"]')
	const galleryPrev = gallery.querySelector('button[data-act="prevPic"]')
	const galleryNext = gallery.querySelector('button[data-act="nextPic"]')
	let galleryCurrentPic = gallery.querySelector('img')
	let count = 0

	function picChange(image, key) {
		let pic = image.getAttribute('href')
		galleryCurrentPic.setAttribute('src', pic)
		count = key
	}

	for(let [key, image] of galleryPics.entries()) {
		image.addEventListener('click', () => {
			event.preventDefault()
			count = key
			picChange(image, key)
			gallery.classList.add('js-galleryShown')
		})
	}
	galleryClose.addEventListener('click', () => {
		event.preventDefault()
		gallery.classList.remove('js-galleryShown')
	})
	galleryPrev.addEventListener('click', () => {
		event.preventDefault()
		if(count !== 0) {
			--count
		}
		else {
			count = galleryPics.length-1
		}
		const image = galleryPics[count]
		picChange(image, count)
	})
	galleryNext.addEventListener('click', () => {
		event.preventDefault()
		if(count !== galleryPics.length-1) {
			++count
		}
		else {
			count = 0
		}
		const image = galleryPics[count]
		picChange(image, count)
	})

	/*Slider*/
	const slider = document.querySelector('#mainSlider')
	const sliderContainer = slider.querySelector('div.row')
	const slideWidth = sliderContainer.querySelector('div').offsetWidth
	const sliderPrev = slider.querySelector('button[data-act="prevSlide"]')
	const sliderNext = slider.querySelector('button[data-act="nextSlide"]')
	let slides = sliderContainer.querySelectorAll('div')
	let currentSlide = 0

	sliderPrev.addEventListener('click', () => {
		event.preventDefault()
		if(currentSlide <= 0) {
			return
		}
		else {
			--currentSlide
			sliderContainer.style.transform = 'translateX(-' + slideWidth*currentSlide + 'px)'
		}
	})

	sliderNext.addEventListener('click', () => {
		event.preventDefault()
		let lengthOffset
		if(window.outerWidth >= 992) {
			lengthOffset = 4
		}
		else if(window.outerWidth >= 768) {
			lengthOffset = 2
		}
		else {
			lengthOffset = 1
		}
		if(currentSlide >= slides.length-lengthOffset) {
			return
		}
		else {
			++currentSlide
			sliderContainer.style.transform = 'translateX(-' + slideWidth*currentSlide + 'px)'
		}
	})

	/*To top button*/
	let toTop = document.querySelector('#toTop')
	toTop.addEventListener('click', () => {
		window.scrollTo({
			left: 0,
			top: 0,
			behavior: 'smooth'
		})
	})
})