let myArray = ["🤬", "🥺", "😹", "🦁", "🐇"]

const addtoendBtn = document.getElementById("addtoend-btn")
const addtobegBtn = document.getElementById("addtobeg-btn")
const removefromendBtn = document.getElementById("removefromend-btn")
const removefrombgBtn = document.getElementById("removefrombeg-btn")
const emojisEl = document.getElementById("emojis-box")
const inputEmoji = document.getElementById("input-box") 

function renderEmojis(){
    emojisEl.textContent = ""
    for (let i = 0; i<myArray.length; i++){
        emojisEl.textContent += myArray[i]
    }
}

renderEmojis()

function addEnd(){
    if (inputEmoji.value){
        myArray.push(inputEmoji.value)
        renderEmojis()
    }
}

addtoendBtn.addEventListener("click", addEnd)

function removeEnd(){
    myArray.pop()
    renderEmojis()
}

removefromendBtn.addEventListener("click", removeEnd)

function addBeg(){
    if (inputEmoji.value){
        myArray.unshift(inputEmoji.value)
        renderEmojis()
    }
}

addtobegBtn.addEventListener("click", addBeg)

function removeBeg(){
    myArray.shift()
    renderEmojis()
}

removefrombgBtn.addEventListener("click", removeBeg)