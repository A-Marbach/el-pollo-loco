class Character extends MovableObject {
    y = 150;
    height = 200;
    width = 140;
    speed = 15;
    timer = 0;

    offset = {
        top: 120,
        left: 40,
        right: 30,  
        bottom: 30
    }


    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png'
    ];
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];
    IMAGES_SLEEP = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];
    IMAGES_LONG_SLEEP = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];
    world;
    jumping_sounds = new Audio('audio/jump.mp3');
    walking_sounds = new Audio('audio/walk.mp3');
    hurt_sounds = new Audio ('audio/character-is-hurt.mp3');
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png'); // super()= von movableObject das Bild laden
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_LONG_SLEEP);
        this.applyGravity();
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.walking_sounds.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sounds.play();
            } if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sounds.play();
            } if (this.world.keyboard.JUMP && !this.isAboveGround()) {
                this.jump();
                this.jumping_sounds.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            this.timer++;
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.gameOver();
            } else if (this.isHurt()) {
                this.hurt_sounds.play();
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.timer = 0;
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && this.timer >= 30) {
                this.playAnimation(this.IMAGES_LONG_SLEEP);
            } else if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_SLEEP);
            } if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
                this.timer = 0;
            }
        }, 100);
    }
}