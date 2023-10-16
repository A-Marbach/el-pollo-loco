class Bottle extends MovableObject{
    y = 360;
    height = 80;
    width = 60;
    x;

    offset = {
        top: 10,
        left: 10,
        right: -20,
        bottom: -20
    }

    IMAGES_SPLASH_BOTTLE =[
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]

    IMAGES_ROTATION_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]

    IMAGES_ON_GROUND = [
        'img/7_salsa_bottle/1_salsa_bottle_on_ground.png'
    ]

    
    constructor(x){
        super().loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'); // super()= von movableObject das Bild laden
        this.loadImages(this.IMAGES_ROTATION_BOTTLE);
        this.loadImages(this.IMAGES_ON_GROUND);
        this.loadImages(this.IMAGES_SPLASH_BOTTLE);

        
        this.x = x;
        this.animate();
       
       

        // this.animate();
    }

    animate(){
        if(this.y < 100){
            this.playanimation(this.IMAGES_SPLASH_BOTTLE);
        }
    }

    // throwTheBottle() {
    //     setInterval(() => {
    //         if (this.world.keyboard.D) {
    //             this.playanimation(this.IMAGES_ROTATION_BOTTLE);
    //         }
    //     }, 200);
    // }
}