// обявление функции. имя и параметры в скобках
function showGeneralInfoContent() {

    // обявление переменных документ, достань элемент страницы по ее ай-ди
	// содержимое общей информаций
	var genInfoContent = document.getElementById("general-info-content")
	// кнопка
	var genInfoButton = document.getElementById("general-info-button")

	// если то что в круглых скобках правда выполни то что в первых фигурных скобках, иначе то что во вторых
	// то есть, если стиль дисплея равен none (скрыто)...
	if (genInfoContent.style.display === "none") {
	    // ... поменяй стиль дисплея на block (показано)
		genInfoContent.style.display = "block"
		// также поменяй содержание кнопки
		genInfoButton.innerHTML = "General info (hide)";
	// иначе ...
	} else {
		// поменяй стиль дисплея на none (крыто)
		genInfoContent.style.display = "none"
		// и содержание кнопки
		genInfoButton.innerHTML = "General info (show)"
	}
}

function showLanguagesContent() {

	var languagesContent = document.getElementById("languages-content")
	var languagesButton = document.getElementById("languages-button")

	if (languagesContent.style.display === "none") {
		languagesContent.style.display = "block"
		languagesButton.innerHTML = "Language skills (hide)";
	} else {
		languagesContent.style.display = "none"
		languagesButton.innerHTML = "Language skills (show)"
	}
}
