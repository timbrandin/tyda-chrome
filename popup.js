function main() {
	var clearButton = document.getElementById('clear')
	clearButton.addEventListener('click', clear);
	clearButton.setAttribute('title', chrome.i18n.getMessage("clearButtonTitle"));
	clearButton.parentNode.insertAdjacentHTML('beforeEnd', chrome.i18n.getMessage("clearButtonValue"));
	build();
}

function build() {
	var history = document.getElementById('history');
	str = "<ul>";
	
	var str_list = localStorage["history"];
	var list;
	
	if (typeof str_list === 'undefined') {
		list = new Array();
	} else {
		list = JSON.parse(str_list);
	}
	
	list.reverse();
	
	for (var i = 0; i < list.length; i++) {
		str += "<li><a href=\"http://tyda.se/?w=" + list[i] + "\" target=\"_blank\">" + list[i] + "</a></li>";
	}
	history.innerHTML = str + "</ul>";
}

function clear() {
	localStorage.clear();
	build();
}

document.addEventListener('DOMContentLoaded', main);