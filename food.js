
import { onSnake, expandSnake } from "./snake.js"

import { getRandom as getrandomfood } from "./random.js"

let food = {x:10,y:3}


const Exp_Rate =5 

export function update(){

    if(onSnake(food)){
        expandSnake(Exp_Rate)
        food = getrandomfood()

    }

    

}


export function draw(gameboard){

  
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart= food.y
    foodElement.style.gridColumnStart= food.x
    foodElement.classList.add('food')
    gameboard.appendChild(foodElement)

    }


function getRandom(){
    let new_food 

    while(new_food == null ||  onSnake(new_food)){

        new_food = random_Grid_Pos
    }

    return new_food

}