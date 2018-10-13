		var header = document.getElementById("myActive");
		var btns = header.getElementsByClassName("pad");
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
		    var current = document.getElementsByClassName("activeSelectionP1");
		    current[0].className = current[0].className.replace(" activeSelectionP1", "");
		    this.className += " activeSelectionP1";
		  });
		}
		var header = document.getElementById("myActiveBuBor");
		var btns = header.getElementsByClassName("pad2");
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
		    var current = document.getElementsByClassName("selectedType");
		    current[0].className = current[0].className.replace(" selectedType", "");
		    this.className += " selectedType";
		  });
		}
		var header = document.getElementById("active");
		var btns = header.getElementsByClassName("sec");
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
		    var current = document.getElementsByClassName("custom3");
		    current[0].className = current[0].className.replace(" custom3", "");
		    this.className += " custom3";
		  });
		}
		var imActive = document.getElementById("actives");
		var btns = imActive.getElementsByClassName("selec");
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
		    var current = document.getElementsByClassName("currentPay");
		    current[0].className = current[0].className.replace(" currentPay", "");
		    this.className += " currentPay";
		  });
		}
		function foodValueChanger() {
		  document.getElementById("randValue1").innerHTML = "Breades";
		  document.getElementById("randValue2").innerHTML = "Pastas";
		  document.getElementById("randValue3").innerHTML = "Pizzas";
		  document.getElementById("randValue4").innerHTML = "Soups";
		}
		function beverageValueChanger() {
		  var i;
		  for (i = 1; i <= 4; i++){
		  document.getElementById("randValue"+i).innerHTML = "Beverage";
		  }
		}
		function marchandiseValueChanger() {
		  var i;
		  for (i = 1; i <= 4; i++){
		  document.getElementById("randValue"+i).innerHTML = "Marchandise";
		  }		  
		}
		function mealValueChanger() {
		  var i;
		  for (i = 1; i <= 4; i++){
		  document.getElementById("randValue"+i).innerHTML = "Meal";
		  }		 
		}

		function breadValueChanger() {
    		var x = document.getElementById("randValue1").textContent;
    		var i;
		  	for (i = 1; i <= 20; i++){
		  	document.getElementById("btn-all"+i).innerHTML = x;
		  }  
		}

		function pastaValueChanger() {
		  var x = document.getElementById("randValue2").textContent;
    		var i;
		  	for (i = 1; i <= 20; i++){
		  	document.getElementById("btn-all"+i).innerHTML = x;
		  }  
		}

		function pizzaValueChanger() {
		  var x = document.getElementById("randValue3").textContent;
    		var i;
		  	for (i = 1; i <= 20; i++){
		  	document.getElementById("btn-all"+i).innerHTML = x;
		  }  
		}

		function soupValueChanger() {
		  var x = document.getElementById("randValue4").textContent;
    		var i;
		  	for (i = 1; i <= 20; i++){
		  	document.getElementById("btn-all"+i).innerHTML = x;
		  }  
		}
		function myFunction() {
    		document.getElementById("dropDown").classList.toggle("dropDownOptions");
		}
		window.onclick = function(e) {
  			if (!e.target.matches('.dropbtn')) {
    			var dropDown = document.getElementById("dropDown");
      				if (dropDown.classList.contains('dropDownOptions')) {
        				dropDown.classList.remove('dropDownOptions');
      				}
  			}
		}
		// Date
		var today = new Date();
		var d = today.getDate();
		var m = today.getMonth()+1;
		var y = today.getFullYear();
		if(d<10) {
		    d = '0'+d
		} 
		if(m<10) {
		    m = '0'+m
		} 
		today ="Date: " + d + '/' + m + '/' + y;
		document.getElementById("currentDate").innerHTML = today;
		
		// Time
		function checkTime(i) {
		  if (i < 10) {
		    i = "0" + i;
		  }
		  return i;
		}
		function checkTime(i) {
		  if (i < 10) {
		    i = "0" + i;
		  }
		  return i;
		}

		function startTime() {
		  var today = new Date();
		  var h = today.getHours();
		  var m = today.getMinutes();
		  var s = today.getSeconds();
		  m = checkTime(m);
		  s = checkTime(s);
		  if (h>=12) {
		  	var timeZone = "PM";
		  	h = h-12;
		  }
		  else {
		  	var timeZone = "AM";	
		  }
		  document.getElementById('time').innerHTML = "Hour: "+ h + ":" + m + ":" + s + " " +timeZone;
		  t = setTimeout(function() {
		    startTime()
		  }, 500);
		}
		startTime();