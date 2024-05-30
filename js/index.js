let result = [1, 0, 0]
const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const text = document.querySelectorAll("#text")
let isOpening = false
let activeAtCard = -1

card1.addEventListener("click", (e) => {
	if (isOpening && activeAtCard !== 0) {
		isOpeningAction()
		return
	} else {
		activeAtCard = 0
	}
	text[0].classList.toggle("hidden")
	isOpening = !isOpening
})

card2.addEventListener("click", (e) => {
	if (isOpening && activeAtCard !== 1) {
		isOpeningAction()
		return
	} else {
		activeAtCard = 1
	}
	text[1].classList.toggle("hidden")
	isOpening = !isOpening
})

card3.addEventListener("click", (e) => {
	if (isOpening && activeAtCard !== 2) {
		isOpeningAction()
		return
	} else {
		activeAtCard = 2
	}
	text[2].classList.toggle("hidden")
	isOpening = !isOpening
})

function isOpeningAction() {
	alert("แน่ะ รู้นะว่าจะเปิดอีกใบอะ")
}

function random() {
	if (activeAtCard !== -1) {
		alert("เห้ย จะรีเซ็ตระหว่างเกมอ๋อ ทำไมเป็นคนขี้โกงแบบนี้ ไม่น่ารักเลย!")
	}

	result = shuffle(result)
	for (let i = 0; i < result.length; i++) {
		if (result[i] === 0) {
			text[i].innerHTML = "ดำ"
		} else {
			text[i].innerHTML = "ทอง"
		}
	}
}

function reset() {
	activeAtCard = -1
	isOpening = false
	for (let i = 0; i < result.length; i++) {
		if (!text[i].classList.contains("hidden")) text[i].classList.toggle("hidden")
	}
}

const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}
