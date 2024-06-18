var element = document.getElementById("settingBox"); // div target what i call it "kutucuk"
var addTodo = document.getElementById("addTodo"); // EKLE-SİL button for some adding or removing stuff
var todoArea = document.getElementById("todoArea"); // the input, what we write todos in it
var close = document.getElementById("close"); // the id for opening/closing the kutucuk

var funcGroup = {};
var func = "func";
var activeFuncNum = null;

for (var i = 1; i <= 49; i++) {
    if (localStorage.getItem(`text-td${i}`)) {
        var oldText_ = localStorage.getItem(`text-td${i}`)
        var tdData = "td" + i;
        var oldText = document.getElementById(tdData)
        oldText.innerText = JSON.parse(oldText_);
    }
}

for (var i = 1; i <= 49; i++) {
    funcGroup[func + i] = (function(num) {
        return function() {
            activeFuncNum = num;
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "block";
            } else {element.style.display = "none";}
            if (activeFuncNum !== null && activeFuncNum !== undefined) {
                var data = "td" + activeFuncNum;
                var tdText = document.getElementById(data)
                console.log(data)
                var localText = localStorage.getItem(`text-td${activeFuncNum}`)
                tdText.innerText = localText
                let deleteButton = "SİL"
                let addButon = "EKLE";
                let td = "td" + activeFuncNum;
                var tdText = document.getElementById(td)
                todoArea.value = tdText.textContent;
                addTodo.textContent = tdText.textContent ? deleteButton : addButon;
                const colorButton = document.getElementById("colorButton");
                const colorPicker = document.getElementById("colorPicker");
                colorButton.addEventListener("click", function() {colorPicker.click();})
                colorPicker.addEventListener("input", function() {
                    let _tr_ = "tr" + activeFuncNum;
                    let tr = document.getElementById(_tr_)
                    tr.style.backgroundColor = colorPicker.value;
//----------------------------------------------------------------------------------------------------
//TODO - we must put a button for adding color. because, this block possible to make tired the machine
                    if (localStorage.getItem(`bgcolor-tr${activeFuncNum}`)) {
                        let bgColor = JSON.parse(localStorage.getItem(`bgcolor-tr${activeFuncNum}`))
                        if (bgColor === colorPicker.value) return;
                        bgColor.push(colorPicker.value)
                        console.log("bgColor pushed")
                    } else {
                        // this base different from other
                        let bgColorForLoc = []
                        bgColorForLoc.push(colorPicker.value)
                        localStorage.setItem(`bgcolor-tr${activeFuncNum}`, JSON.stringify(bgColorForLoc))
                        console.log("bgColor created")
                    }
                });
            }
        };
    })(i);
}


addTodo.addEventListener("click", function() {
    if (activeFuncNum !== null) {
        let todoItself = todoArea.value;
        if (addTodo.textContent === "SİL") {
            addTodo.addEventListener("click", function() {
                todoArea.value = "";
                addTodo.textContent = "EKLE";
            })
        } else {
            let td = "td" + activeFuncNum;
            var tdText = document.getElementById(td)
            tdText.innerText = todoItself
            if (localStorage.getItem(`text-td${activeFuncNum}`)) {
                console.log("text exist")
            }
            else {
                // this base different from other
                localStorage.setItem(`text-td${activeFuncNum}`, JSON.stringify(todoItself))
            }
            element.style.display = "none";
        }
    } else {console.log("No active function");}
});

close.addEventListener("click", function() {element.style.display = "none";});


function toggleButton() {
    document.body.classList.toggle("body-dark");
}

document.getElementById("darkMode-icon").addEventListener("click", function() {
    let currentRotation = this.style.transform.match(/rotate\((\d+)deg\)/);
    let newRotation = currentRotation ? (parseInt(currentRotation[1]) + 180) %360 : 180;
    this.style.transform = `rotate(${newRotation}deg)`;
})

/* 
// Yanlış kullanım
let deleteButtonText = addTodo.textContent; // Bu bir string olur
deleteButtonText.textContent = "SİL"; // Hata verir, çünkü stringlerin textContent özelliği yoktur

// Doğru kullanım
let deleteButton = addTodo; // Bu bir DOM öğesi olur
deleteButton.textContent = "SİL"; // Bu çalışır, çünkü deleteButton bir DOM öğesidir
*/
