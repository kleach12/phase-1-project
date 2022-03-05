document.addEventListener('DOMContentLoaded', (event) => {

const gameButton = document.querySelector("#add-game")
const addGameForm = document.querySelector('#game-form')
const submitGame = document.querySelector('#submit-game')
console.log(submitGame)

gameButton.addEventListener('click',(e) => {
    addGameForm.innerHTML = `
    <form id = 'gameform'>
        <ul>
        <label class = "center"> Name </label><input id = 'game_name' class = 'textbox' type="text" ></lable>
        <label class = "center"> IMG URL</label><input id = 'game_img' class = 'textbox' type="text" ></lable>
        <label class = "center"> Price</label><input id = 'game_price' class = 'textbox' type="text" ></lable>
        <label class = "center"> Systems</label><input id = 'game_system' class = 'textbox' type="text"></lable>
        <label class = "center"> Description</label><input id = 'game_description' type="text"></lable>
        <input id ='submit-game' class = "center" type="submit" value = 'Get Rated'>
      </ul>
      </form id = gameform>`
        
         const gameform = document.querySelector('#gameform')

        //  Created the handlesubmit function within adding a game funtion so it could take be in the function scope. Without being in this function 
         gameform.addEventListener('submit', (e) => {
            e.preventDefault(e)
            //debugger; 
          let game = {
            name: e.target.game_name.value,
            imgurl: e.target.game_img.value,
            price:e.target.game_price.value,
            systems:e.target.game_system.value,
            description:e.target.game_description.value,
          }
          renderGame(game)
         //debugger
    })
})


    function renderGame(game){
debugger
      let gameCard = document.createElement('div')
      gameCard.className = 'card'
      gameCard.innerHTML = `
      <h3> ${game.name} </h3>
      <img src = ${game.imgurl} />
      <h3> ${game.imgurl} </>
      <p> ${game.description} </p>
      <p> ${game.price}</p>
      <button> 'Must Play' </button> <button> 'Return' </button><button> 'Retrun it'</button>
      `
debugger
      document.body.appendChild(gameCard)
debugger
    }

    

    // fetch("http://localhost:3000/games")
    //   .then (function(respone)){
    //     console.lo
    //   }
});