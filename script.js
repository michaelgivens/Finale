
function createLI(){
 var elem = document.getElementById("car1");
 var vehDelivered = elem.firstChild.nodeValue;
 
    //if(document.getElementById(checkbox-1.checked="true"){
    alert("hi");
    document.getElementById("c1").innerHTML = vehDelivered;
    //}
}

function cLI(){
    
 var listItem = "C2";
 
    document.getElementById("c2").innerHTML = listItem;
}

function addCompleted(){    
    var elem = document.getElementById("car1");
    var vehDelivered = elem.firstChild.nodeValue;
    var text = document.createTextNode(vehDelivered);
    
    var newLi = document.createElement("li");
    newLi.appendChild(text);
    
    var currentList = document.getElementById("completed");
    currentList.appendChild(newLi);
    //document.getElementById("completed").innerHTML += "<li>Completed Deliveries2</li>";
    
    return false;
}