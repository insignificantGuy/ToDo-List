function todolist(){
	var li= document.createElement("li");
	var value= document.getElementById("todo").value;
	var text= document.createTextNode(value);
	li.appendChild(text);
	if(value==''){
		alert("PLease Write Something first");
	}
	else{
		document.getElementById("list").appendChild(li);
	}
	//document.getElementById("todo").value="";
	
	var cross= document.createElement("span");
	var sign=document.createTextNode("\u00D7");
	cross.className = "close";
	cross.appendChild(sign);
	li.appendChild(cross);

	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


var close= document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
		close[i].onclick=function(){
			console.log("Got Clicked");
			var div= this.parentElement;
			div.style.display=none;
	}
}
