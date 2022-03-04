document.addEventListener('DOMContentLoaded', (event) => {

const gameButton = document.querySelector("#add-game")
const addGameForm = document.querySelector('#game-form')
const submitGame = document.querySelector('#submit-game')

gameButton.addEventListener('click',(e) => {
    addGameForm.innerHTML = `
        <ul>
        <label id = 'game-name' class = "center"> Name </label><input class = 'textbox' type="text" ></lable>
        <label id = 'game-img' class = "center"> IMG URL</label><input class = 'textbox' type="text" ></lable>
        <label id = 'game-price' class = "center"> Price</label><input class = 'textbox' type="text" ></lable>
        <label id = 'game-system' class = "center"> Systems</label><input type="text"></lable>
        <label id = 'game-description' class = "center"> Description</label><input type="text"></lable>
        <input id ='submit-game' class = "center" type="submit" value = 'Get Rated'>
      </ul>`

      // const submitGame = document.querySelector('#submit-game')

      // // submitGame.addEventListener('click',(e) => {
      // //   console.log('hi')
      // // })
    })

    function handleGameSubmit(e){
      e.preventDefault()
      let game = {
        name:e.target.name.value,
        imgUrl: e.target.img_url.value,
        description:e.target.description.value,
        


      }
    }

    function renderGame(game){
      let gameCard = document.createElement('li')
      gameCard.className = 'gamecard'
      gameCard.innerHTML = `
      <h3> ${game.name} </h3>
      <img src = ${game.imgurl} />
      <h3> ${game.imgurl} </>
      <p> ${game.description} </p>
      <p> ${game.price}</p>
      <button> 'Must Play' </button> <button> 'Return' </button><button> 'Retrun it'</button>
      `
    }

    

    // fetch("http://localhost:3000/games")
    //   .then (function(respone)){
    //     console.lo
    //   }
});