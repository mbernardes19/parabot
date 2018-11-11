import Preload from './preload.js';
import One from './one.js';
var config={
    type: Phaser.AUTO,
    width:800,
    height:600,
    backgroundColor:'#00ff01',
    scene: [Preload,{create:create}, One]
};
let game = new Phaser.Game(config);


function create(){
    
}

export {game,config};
