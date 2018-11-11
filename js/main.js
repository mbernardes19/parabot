'use strict';
const config={
    type: Phaser.AUTO,
    width:800,
    height:600,
    scene:
    {
      one:'one'  
    }
}

export default class Game extends Phaser.Game{
    constructor(){
        super(config);
    }

}