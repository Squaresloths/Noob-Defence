let username;

document.getElementById("myButton").onclick = function(){
      username = document.getElementById("myText").value
      document.getElementById("myH2").textContent = `Hello ${username}!`
}

// SWITCH - can be an efficient replacement to many else if statements
//.checked - property that determines the checked state of a HTML checkbox or radio button element
