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
            if (activeFuncNum !== null && activeFuncNum !== undefined) {
                let deleteButton = "SİL"
                let addButon = "EKLE";
                let td = "td" + activeFuncNum;
                var tdText = document.getElementById(td)
                todoText.value = tdText.textContent;
                addTodo.textContent = tdText.textContent ? deleteButton : addButon;
            }
        };
    })(i);
}


addTodo.addEventListener("click", function() {
    if (activeFuncNum !== null) {
        let td = "td" + activeFuncNum;
        var todoItself = todoText.value;
        var tdText = document.getElementById(td)
        tdText.innerText = todoItself
        todoText.value = ""
        element.style.display = "none";
    } else {console.log("No active function");}
});

close.addEventListener("click", function() {element.style.display = "none";});


/* 
// Yanlış kullanım
let deleteButtonText = addTodo.textContent; // Bu bir string olur
deleteButtonText.textContent = "SİL"; // Hata verir, çünkü stringlerin textContent özelliği yoktur

// Doğru kullanım
let deleteButton = addTodo; // Bu bir DOM öğesi olur
deleteButton.textContent = "SİL"; // Bu çalışır, çünkü deleteButton bir DOM öğesidir
*/