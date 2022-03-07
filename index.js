document.addEventListener('DOMContentLoaded', (event) => {

const gameButton = document.querySelector("#add-game")
const addGameForm = document.querySelector('#game-form')
const submitGame = document.querySelector('#submit-game')
const contClass = document.querySelector('#card_table')


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
            must_play:0,
            play:0,
            return:0
          }
          renderGame(game)
          createAGame(game)
         //debugger
    })
})


    function renderGame(game){
//debugger
      let frontGameCard = document.createElement('div')
      let backGameCard = document.createElement('div')
      frontGameCard.className = 'front_card'
      frontGameCard.id = `card_${game.id}`
      frontGameCard.innerHTML = `
      <img class = "gamePic" src = '${game.imgurl}'/>
      <button id = "btn_${game.id}" class ='btn'> ${game.name} </button>
      `
  
      // backGameCard.innerHTML =
      // `<h3> ${game.name} </h3>
      // <img src = ${game.imgurl} />
      // <p> ${game.description} </p>
      // <p> ${game.price}</p>
      // <button> Must Play ${game.must_play}</button> <button> Play ${game.play} </button><button> Return ${game.return}  </button>
      // `

      contClass.appendChild(frontGameCard)
      let cardButton = document.querySelectorAll(`.btn`)

      cardButton.forEach(e => e.addEventListener('click', (e) => 
      
      frontGameCard.innerHTML = 
          `<h3> ${game.name} </h3>
        <p> ${game.description} </p>
        <p> ${game.price}</p>
        <button> Must Play ${game.must_play}</button> <button> Play ${game.play} </button><button> Return ${game.return}  </button>
        ` )
      )

    }

function getAllGames(){
  fetch("http://localhost:3000/games")
  .then(res => res.json())
  .then(gameData => gameData.forEach(game => renderGame(game)))

}   
getAllGames()


function createAGame(game){
  fetch("http://localhost:3000/games",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(game)
  })
    .then(res => res.json())
    .then(game => console.log(game))
}



});
