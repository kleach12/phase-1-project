document.addEventListener('DOMContentLoaded', (event) => {

const gameButton = document.querySelector("#add-game")
const addGameForm = document.querySelector('#game-form')

gameButton.addEventListener('click',(e) => {
    addGameForm.innerHTML = `
        <ul>
        <label class = "center"> Name </label><input type="text"></lable>
        <label class = "center"> IMG URL</label><input type="text"></lable>
        <label class = "center"> Price</label><input type="text"></lable>
        <label class = "center"> Systems</label><input type="text"></lable>
        <label class = "center"> Description</label><input type="text"></lable>
        <input id ='submit-game'class = "center" type="submit" value = 'Get Rated'>
      </ul>`
    })

});