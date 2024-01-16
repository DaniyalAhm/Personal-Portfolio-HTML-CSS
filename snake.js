
import {getInputDirection} from "./input.js";


let newSegments = 0


export const SnakeSpeed = 10


const body = [{x:11,y:11}];
/** Remember to import them later! */
export function update(){
    const InputD= getInputDirection()
    addSegments()
    for(let i = body.length-2; i>=0; i--){
        body[i+1]={...body[i]}

    }
    console.log(body.length)

  
    body[0].x+=InputD.x
    body[0].y+=InputD.y
}

export function draw(gameboard){

    body.forEach(segment =>{
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart= segment.y
    snakeElement.style.gridColumnStart= segment.x
    snakeElement.classList.add('snakeBody')
    gameboard.appendChild(snakeElement)

    })
}




export function expandSnake(amount){
    newSegments += amount

}
export function onSnake(position, {ignoreHead = false}= {}){
    return body.some((segment,index) => {
        if(ignoreHead && index == 0) return false

        return equalPositions(segment, position)
    })
}


function equalPositions(pos1, pos2){

    if( pos1.x == pos2.x &&  pos1.y == pos2.y ){

  
    return true
    }
    
}

function addSegments(){
    for (let i =0; i< newSegments;i++){
        body.push({...body[body.length-1]})



    }

    newSegments=0
}


export function getSnakeHead(){
    return body[0]
}


export function snakeIntersection(){
    return onSnake(body[0], {ignoreHead: true})


}