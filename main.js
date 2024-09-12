
let name = document.getElementById("name")
let nameSaved = name.innerText; 
name.onmouseover = function(){this.innerText = 'HASNA AHMED'; } ;
name.onmouseout = function(){this.innerText = nameSaved;};



let rule = document.getElementById("rule")
let ruleSaved = rule.innerText; 
rule.onmouseover = function(){this.innerText = 'IOS DEVELOPER'; } ;
rule.onmouseout = function(){this.innerText = ruleSaved;};

let profile = document.getElementById("profile")
let porfileSaved = profile.innerText
profile.onmouseover = function(){this.innerText = 'Recent computer science graduate and iOS developer, eager to contribute and develop skills in a collaborative team Seeking to gain practical experience and participate in innovative projects within a stimulating work environment.'}
profile.onmouseout = function(){this.innerText = porfileSaved;};


let phone = document.getElementById("phone")
let phoneSaved = phone.innerText
profile.onmouseover = function(){this.innerText = '+955 542400000';};
profile.onmouseout = function(){this.innerText = phoneSaved;};