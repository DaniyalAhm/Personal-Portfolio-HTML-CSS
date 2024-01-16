let Gridsize =21

export function getRandom(){
 
    return       {
        x: Math.floor(Math.random()*Gridsize )+1,
        y: Math.floor(Math.random()*Gridsize )+1
    }


}


export function outsideGrid(position){

    return(
        position.x<1 || position.x>Gridsize ||position.y<1 || position.y>Gridsize


    )
}