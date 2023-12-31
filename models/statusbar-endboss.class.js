class StatusBarEndboss extends DrawableObject {
    width = 200;
    height = 60;
    x = 120;
    y = 300;
    percentage = 100;
    IMAGES_HEALTH_ENDBOSS = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/2_statusbar_endboss/green.png'
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH_ENDBOSS);
        this.x = 500;
        this.y = 20;
        this.setPercentage(100);
    }

    /**
     * This function loads the appropriate image for the status bar
     * 
     * @param {number} percentage percent of the status bar
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH_ENDBOSS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * This function calculates which image is the right one for the status bar
     * 
     * 
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 3;
        } else
            if (this.percentage > 60) {
                return 2;
            } else
                if (this.percentage > 30) {
                    return 1;
                } else {
                    return 0;
                }
    }
}