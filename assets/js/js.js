document.addEventListener('DOMContentLoaded', () => {
	/*Callback popup*/
	let popupOpenButtons = document.querySelectorAll('button[data-act="openPopup"]')
	let popup = document.querySelector('#popupForm')
	let popupClose = popup.querySelector('button[data-act="closePopup"]')
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
	let galleryPics = document.querySelectorAll('a[data-act="openGallery"]')
	let gallery = document.querySelector('#gallery')
	let galleryClose = gallery.querySelector('button[data-act="closeGallery"]')
	let galleryPrev = gallery.querySelector('button[data-act="prevPic"]')
	let galleryNext = gallery.querySelector('button[data-act="nextPic"]')
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
			count = --count
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
			count = ++count
		}
		else {
			count = 0
		}
		const image = galleryPics[count]
		picChange(image, count)
	})

	/*Slider*/

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