document.addEventListener('DOMContentLoaded', (event) => {

  const gameButton = document.querySelector("#add-game")
  const addGameForm = document.querySelector('#game-form')
  const submitGame = document.querySelector('#submit-game')
  const contClass = document.querySelector('#card_table')
  
  gameButton.addEventListener('click', createGameForm)
  
  
  function createGameForm(e){
    addGameForm.innerHTML = `
      <ul>
      <form id = 'gameform'>
      <label class = "center"> Name </label><input id = 'game_name' class = 'textbox' type="text" ></lable>
      <label class = "center"> IMG URL</label><input id = 'game_img' class = 'textbox' type="text" ></lable>
      <label class = "center"> Price</label><input id = 'game_price' class = 'textbox' type="text" ></lable>
      <label class = "center"> Systems</label><input id = 'game_system' class = 'textbox' type="text"></lable>
      <label class = "center"> Description</label><input id = 'game_description' type="text"></lable>
      <input id ='submit-game' class = 'center' type="submit" value = 'Get Rated'/>
      </form id = gameform>
      <button id = 'back_btn'> Hide </button>
      </ul>`
          
      const gameform = document.querySelector('#gameform')
        //console.log(gameform)
        //  Created the handlesubmit function within adding a game funtion so it could take be in the function scope. Without being in this function 
      gameform.addEventListener('submit', (e) => {
        e.preventDefault() 
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
          hideGame()
        })
        const backButton = document.querySelector('#back_btn')
        backButton.addEventListener('click', hideGame)
  }
  
  
  
  function hideGame(){ 
    addGameForm.innerHTML = '';
    createGameForm
  }
  
  
  function renderGame(game){
    let frontGameCard = document.createElement('div')
    const frontHTML = `
      <div class = "container">
      <img class = "gamePic" src = '${game.imgurl}'/>
      <button id = "btn_${game.id}" class ='btn'> ${game.name} </button>
      </div >`
      frontGameCard.className = 'front_card'
      frontGameCard.id = `card_${game.id}`
      frontGameCard.innerHTML = frontHTML
  
        contClass.appendChild(frontGameCard)

  function createCardButton(){
    let cardButton = document.getElementById(`btn_${game.id}`)
    cardButton.addEventListener('click', backCard)}
      createCardButton()
  


  function backCard(){
    frontGameCard.innerHTML = 
      `<div class = "container">
      <div class = 'column'>
      <h2> ${game.name} </h2>
      <p> ${game.description} </p>
      <div id = 'sys_price' class = 'grid'>
      <p> System </p>
      <p> Price </p>
      <p> ${game.systems}</p>
      <p> $${game.price}</p>
      </div>
      <div class = 'grid'>
      <p> <span id = 'num-of-must'> ${game.must_play} </span></p> 
      <p> <span id = 'num-of-play'> ${game.play} </span></p>
      <p> <span id = 'num-of-return'> ${game.return} </span></p> 
      <button class = 'Must_Button'> Must Play </button> 
      <button class = 'Play_Button'> Play </button> 
      <button class = 'Return_Button'> Return </button>
      </div>
      </div>
      <button class = back_btn> Back </button>
      </div">` 
  
        frontGameCard.querySelector('.Must_Button').addEventListener('click', (e) =>{
          game.must_play += 1
          frontGameCard.querySelector('#num-of-must').textContent = game.must_play
          updateGameLike(game)
        })
  
        frontGameCard.querySelector('.Play_Button').addEventListener('click', (e) =>{
          game.play += 1
          frontGameCard.querySelector('#num-of-play').textContent = game.play 
          updateGameLike(game)
        })
  
        frontGameCard.querySelector('.Return_Button').addEventListener('click', (e) =>{
          game.return += 1
          frontGameCard.querySelector('#num-of-return').textContent = game.return 
          updateGameLike(game)
        })
  
        frontGameCard.querySelector('.back_btn').addEventListener('click', (e) => {
          frontGameCard.innerHTML = frontHTML;
          createCardButton()
        })
  
    }
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
  
  
  
  function updateGameLike(game){
    fetch(`http://localhost:3000/games/${game.id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/JSON',
        },
        body: JSON.stringify(game)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  
  
  });
  