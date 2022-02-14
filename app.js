const jokeForm = document.getElementById('jokeForm')
const jokeText = document.getElementById('jokeText')
const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const randomColor = generateRandomColor();


// Случайная цитата при нажатии на кнопку
jokeForm.addEventListener('submit', async (e) => {
	e.preventDefault()
	const firstName = firstNameInput.value || 'Chuck'
	const lastName = lastNameInput.value || 'Norris'

	const url = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`

	try {
		const res = await fetch(url)
		const data = await res.json()
		jokeText.innerHTML = data.value.joke
	} catch (ex) {
		console.error(ex)
	}
})

// Случайная цитата при перезагрузке страницы
window.addEventListener('load', async (e) => {
	e.preventDefault()
	const firstName = firstNameInput.value || 'Chuck'
	const lastName = lastNameInput.value || 'Norris'

	const url = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`

	try {
		const res = await fetch(url)
		const data = await res.json()
		jokeText.innerHTML = data.value.joke
	} catch (ex) {
		console.error(ex)
	}
})


// Выборка случайного цвета для фона страницы
function generateRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


// Фон страницы случайного цвета при перезагрузке страницы
function changeBackground(color) {
	document.body.style.background = color;
}
window.addEventListener("load", function () { changeBackground(randomColor) });


// Анимация при клике на кнопку (добавление класса)
let chuckImg = document.getElementById("chuckImg");
// jokeForm.addEventListener('submit', function(){
// 	chuckImg.classList.add("chuckImgRotate")
// })

// если есть класс - то убрать его toggle
// chuckImg.classList.remove("chuckImgRotate")
jokeForm.addEventListener('submit', function () {
	document.getElementById("chuckImg").classList.toggle("chuckImgRotate");
	document.getElementById("btn1").classList.toggle("none");
})