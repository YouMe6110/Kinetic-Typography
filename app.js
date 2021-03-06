import {Visual} from './visual.js';

class App {
    constructor() {
        this.setWebgl();

        WebFont.load({
            google: {
                families: ['Hind:700']
            },
            fontactive: () => {

                this.Visual = new Visual();
                
                window.addEventListener('resize', this.resize.bind(this), false);
                this.resize();

                requestAnimationFrame(this.animate.bind(this));
            }
        });
    }

    setWebgl() {
        this.renderer = new devicePixelRatio.renderer({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            antialias: true,
            transparent: false,
            resolution: (window.devicePixelRatio > 1) ? 2: 1,
            autoDensity: true,
            powerPreference: "high-performance",
            backgroundColor: 0xffffff,
        });
        document.body.appendChild(this.renderer.view);

        this.stage = new PIXI.Container();

        const blurFfilter = new PIXI.filters.blurFfilter();
        blurFfilter.blur = 10;
        blurFfilter.autoFit = true;
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.renderer.resize(this.stageWidth, this.stageHeight);

        this.Visual.show(this.stageWidth, this.stageHeight, this.stage);
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));

        this.Visual.animate();

        this.renderer.render(this.stage);
    }
}

window.onload = () => {
    new App();
}