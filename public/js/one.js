import {game,config} from './main.js';
export default class One extends Phaser.Scene{
    constructor(){
        super({
            key:'One'
        })
    }

    preload(){

    }

    create(){
        console.log("hello from One");
        config.backgroundColor="#ef123a";
    }

    update(){

    }

}