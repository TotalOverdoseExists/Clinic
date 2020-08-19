document.addEventListener('DOMContentLoaded', () => {
	/*Top navigation button*/
	try {
		const topNav = document.querySelector('#topNav')
		const openButton = topNav.querySelector('button[data-act="openTopNav"]')
		const hamburger = openButton.querySelector('i')

		openButton.addEventListener('click', () => {
			event.preventDefault()
			hamburger.classList.toggle('fa-bars')
			hamburger.classList.toggle('fa-times')
			topNav.classList.toggle('js-topNavShown')
		})
	}
	catch {
		console.log('No top navigation')
	}

	/*Top navigation inner buttons*/
	try {
		const innerButtons = topNav.querySelectorAll('button[data-act="openInnerTopNav"]')
		for(let button of innerButtons) {
			button.addEventListener('click', () => {
				event.preventDefault()
				button.closest('div').classList.toggle('js-innerTopNavShown')
			})
		}
	}
	catch {
		console.log('No top navigation inner menu')
	}

	/*Sub navigation buttons*/
	try {
		const subNavButtons = document.querySelectorAll('button[data-act="openSubNav"]')
		for(let button of subNavButtons) {
			button.addEventListener('click', () => {
				event.preventDefault()
				button.closest('div').classList.toggle('js-subNavShown')
			})
		}
	}
	catch {
		console.log('No sub navigation')
	}

	/*Anchor links*/
	try {
		const anchorLinks = document.querySelectorAll('a[href*="#"]')
		for(let link of anchorLinks) {
			link.addEventListener('click', () => {
				event.preventDefault()
				const hashBlock = document.getElementById(link.getAttribute('href').substr(1))
				const blockY = hashBlock.getBoundingClientRect().top + window.pageYOffset - 70
				window.scrollTo({
					top: blockY,
					behavior: 'smooth'
				})
			})
		}
	}
	catch {
		console.log('No anchor links')
	}

	/*Buttons links*/
	try {
		let linkButtons = document.querySelectorAll('button[data-link]')
		for(const link of linkButtons) {
			link.addEventListener('click', () => {
				event.preventDefault()
				document.location.href = link.getAttribute('data-link')
			})
		}
	}
	catch {
		console.log('No buttons with link')
	}

	/*Callback popup*/
	try {
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
	}
	catch {
		console.log('No callback popup')
	}

	/*Gallery*/
	try {
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
	}
	catch {
		console.log('No gallery')
	}

	/*Slider*/
	try {
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
	}
	catch {
		console.log('No slider')
	}

	/*To top button*/
	try {
		let toTop = document.querySelector('#toTop')
		toTop.addEventListener('click', () => {
			window.scrollTo({
				left: 0,
				top: 0,
				behavior: 'smooth'
			})
		})
	}
	catch {
		console.log('No to top button')
	}
})