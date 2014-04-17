chrome.contextMenus.create({"title": chrome.i18n.getMessage("translate") +" \"%s\"", "contexts": ["selection"], "onclick": tyda});

function tyda(info, tab){

	var word = info.selectionText;
	var src = 'http://tyda.se/search/' + encodeURIComponent(word);

	var str_list = localStorage["history"];
	var list;

	if (typeof str_list === 'undefined') {
		list = new Array();
	} else {
		list = JSON.parse(str_list);
	}

	if (list.length > 10) {
		list.reverse();
		list.pop();
		list.reverse();
	}

	list.push(word);
	str_list = JSON.stringify(list);
	localStorage["history"] = str_list;

	window.open(src, '_blank');
}
