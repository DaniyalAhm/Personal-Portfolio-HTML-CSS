
import {update as updateSnake, draw as drawSnake, SnakeSpeed, getSnakeHead, snakeIntersection} from './snake.js'

import {update as updateFood, draw as drawFood} from './food.js'

import { outsideGrid } from './random.js'

let lastRender =0
let gameOver = false
const gameboard = document.getElementById("game-board")
/* timer function */



   window.requestAnimationFrame(main)


 function main(currentTime){
   if(gameOver){
   
   
      alert("You Lost!") 
       


      
     return window.location.href= "Project1.html"
   
   
   }


 

    window.requestAnimationFrame(main)
    const countRender = (currentTime -lastRender)/1000
    if(countRender< 1/SnakeSpeed) return
    
 

    lastRender= currentTime

    update()
    draw()
      

   

    }





 /* logic for game */

 function update(){
    updateSnake()
    updateFood()
    checkDeath()

 }


 function draw(){
   gameboard.innerHTML=''
    drawSnake(gameboard)
    drawFood(gameboard)
 }


 function checkDeath(){
   gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()


 }
