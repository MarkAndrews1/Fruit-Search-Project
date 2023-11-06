const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const searchTerm = str.toLowerCase();
	for (let fruitName of fruit) {
		if (fruitName.toLowerCase().includes(searchTerm)) {
			results.push(fruitName)
		}
	}
	showSuggestions(results, str);
	return results;
}

function searchHandler(e) {
	const value = e.target.value
	suggestions.innerHTML = ''
	if (value) {
		search(value)
	}
}

function resetSuggestions(){
	const preSuggestions = suggestions.querySelectorAll('li')
	preSuggestions.forEach((sug) => {
		sug.removeEventListener(click, useSuggestion)
	})
}

function showSuggestions(results, inputVal) {
	for (let fruit of results){
		const resultList = document.createElement('li')
		const highlightedChar = document.createElement('span')
		highlightedChar.innerHTML = highlightedLetter(fruit, inputVal.toLowerCase())
		resultList.appendChild(highlightedChar)
		suggestions.appendChild(resultList)
	}
	resetSuggestions()
}

function highlightedLetter(txt, searchTerm) {
	const startIdx = txt.toLowerCase().indexOf(searchTerm);
	if (startIdx !== -1) {
		const endIdx = startIdx + searchTerm.length;
		return (
			txt.substring(0, startIdx) + 
			'<strong>' + txt.substring(startIdx, endIdx) + '</strong>' +
			txt.substring(endIdx)
		)
	}
	return txt;
}

function useSuggestion(e) {
	input.value = e.target.textContent
	suggestions.innerHTML = '';
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
