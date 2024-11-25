let currentSlide = 0
const slides = document.querySelectorAll('.carousel-slide')
const totalSlides = slides.length

function showSlide(index) {
	const track = document.querySelector('.carousel-track')
	track.style.transform = `translateX(-${index * 100}%)`
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % totalSlides
	showSlide(currentSlide)
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
	showSlide(currentSlide)
}
