const contents = document.querySelectorAll('.program-line__content')
const title = document.querySelectorAll('.program-line__title')

contents.forEach((content) => {
	const title = content.querySelector('.program-line__title')
	const descr = content.querySelector('.program-line__descr')
	title.addEventListener('click', () => {
		descr.classList.toggle('active')
	})
})