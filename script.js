$(document).ready(function() {
    // console.log( "ready!" );

    // Toggle the navigation bar
    var hamburger = document.querySelector('.hamburger');
    var surprise = document.querySelector('.surprise');

    var onButtonClick = function (){
    	surprise.classList.toggle('show');
    }
    	hamburger.addEventListener('click', onButtonClick);

    // Customize Select Dropdown

    var select = document.querySelectorAll('.drop-list');
    // console.log(select);
    for (var i = 0; i < select.length; i++) {
    	var option = select[i].textContent;
    	// console.log(option);
    }

		var items = document.querySelectorAll('option');
		console.log(items);
		for (var i = 0; i < items.length; i++) {
			var item = items[i].textContent;
			console.log(item);
		}

		var toggleSelectMenu = function(){	
			select.classList.toggle('active');
			return false;
		}
			select.addEventListener('click', toggleSelectMenu);

    

});