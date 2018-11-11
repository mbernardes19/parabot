export default class Preload extends Phaser.Scene{
    constructor(){
        super({
            key:'Preload'
        })
    }

    preload(){
        this.load.spritesheet('player','/img/sprite.png',{frameWidth:32, frameHeight: 32, startFrame:1, endFrame:6});
    }

    create(){
        console.log('oi');
        this.anims.create({
            key:'walk',
            frames: this.anims.generateFrameNames('player', {
                start:1,
                end:6
            }),
            repeat:-1,
            frameRate:10          
        });
        this.player = this.add.sprite(50,50,'player');
        this.player.anims.play('walk');
        
    }

    update(){

    }

}