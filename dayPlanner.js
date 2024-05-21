var element = document.getElementById("settingBox");
var addTodo = document.getElementById("addTodo");
var todoText = document.getElementById("todoArea");
var close = document.getElementById("close");

var funcGroup = {};
var func = "func";
var activeFuncNum = null;

for (var i = 1; i <= 15; i++) {
    funcGroup[func + i] = (function(num) {
        return function() {
            activeFuncNum = num;
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "block";
            } else {element.style.display = "none";}
        };
    })(i);
}

addTodo.addEventListener("click", function() {
    if (activeFuncNum !== null) {
        let td = "td" + activeFuncNum;
        var todoItself = todoText.value;
        var tdText = document.getElementById(td)
        tdText.innerText = todoItself
        console.log(todoItself);
        todoText.value = ""
    } else {console.log("No active function");}
});


close.addEventListener("click", function() {element.style.display = "none";});



/*
var element = document.getElementById("settingBox")
var addTodo = document.getElementById("addTodo")
var close = document.getElementById("close")
var todoText = document.getElementById("todoArea")


close.addEventListener("click", function() {element.style.display = "none"})

var funcGroup = {}
var func = "func"
for (var i = 1; i <= 15; i++) {
    funcGroup[func + i] = (function(num){
        return function() {
            if (element.style.display === "none" || element.style.display === "") 
                {element.style.display = "block";
                addTodo.addEventListener("click", function() {
                    var td = "td" + num
                    console.log(td)
                });
            } else {element.style.display = "none"}
        }})(i)
}
*/

/*
BURADA BİR PROBLEM YOK
var funcGroup = {}
var func = "func"
for (var i = 1; i <= 15; i++) {
    funcGroup[func + i] = (function(num){
        return function() {
            if (element.style.display === "none" || element.style.display === "") 
                {element.style.display = "block";
                addTodo.addEventListener("click", function() {
                    var td = "td" + num
                    console.log(td)
                });
            }
            else {element.style.display = "none"}
        }})(i)
}

---- AMA EĞER TD'DEN SONRA NUM DEĞİL DE İ KULLANIRSAK İ'NİN DEĞERİ 16 OLUYOR

var funcGroup = {}
var func = "func"
for (var i = 1; i <= 15; i++) {
    funcGroup[func + i] = (function(num){
        return function() {
            if (element.style.display === "none" || element.style.display === "") 
                {element.style.display = "block";
                addTodo.addEventListener("click", function() {
                    var td = "td" + i
                    console.log(td)
                });
            }
            else {element.style.display = "none"}
        }})(i)
}
*/
