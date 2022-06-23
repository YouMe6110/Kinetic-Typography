import {Text} from './text.js';
import {Particle} from './particle.js';

export class Visual {
    constructor() {
        this.text = new Text();

        this.texture = PIXI.texture.from('particle.png');

        this.Particle = [];

        this.mouse = {
            x: 0,
            y: 0,
            radius: 100,
        };

        document.addEventListener('pointermove', this.onMove.bind(this), false);
    }

    show(stageWidth, stageHeight, stage) {
        if (this.container) {
            stage.removeChild(this.container);
        }
    }

    onMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }
}