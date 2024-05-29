var element = document.getElementById("settingBox");
var addTodo = document.getElementById("addTodo");
var todoText = document.getElementById("todoArea");
var close = document.getElementById("close");

var funcGroup = {};
var func = "func";
var activeFuncNum = null;

for (var i = 1; i <= 49; i++) {
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
                const colorButton = document.getElementById("colorButton");
                const colorPicker = document.getElementById("colorPicker");
                colorButton.addEventListener("click", function() {colorPicker.click();})
                colorPicker.addEventListener("input", function() {
                    let _tr_ = "tr" + activeFuncNum;
                    let tr = document.getElementById(_tr_)
                    tr.style.backgroundColor = colorPicker.value;
                });
            }
        };
    })(i);
}


addTodo.addEventListener("click", function() {
    if (activeFuncNum !== null) {
        let todoItself = todoText.value;
        if (addTodo.textContent === "SİL") {
            addTodo.addEventListener("click", function() {
                todoText.value = "";
                addTodo.textContent = "EKLE";
            })
        } else {
            let td = "td" + activeFuncNum;
            var tdText = document.getElementById(td)
            tdText.innerText = todoItself
            element.style.display = "none";
        }
    } else {console.log("No active function");}
});

close.addEventListener("click", function() {element.style.display = "none";});


function toggleButton() {
    document.body.classList.toggle("body-dark");
}

/* 
// Yanlış kullanım
let deleteButtonText = addTodo.textContent; // Bu bir string olur
deleteButtonText.textContent = "SİL"; // Hata verir, çünkü stringlerin textContent özelliği yoktur

// Doğru kullanım
let deleteButton = addTodo; // Bu bir DOM öğesi olur
deleteButton.textContent = "SİL"; // Bu çalışır, çünkü deleteButton bir DOM öğesidir
*/
