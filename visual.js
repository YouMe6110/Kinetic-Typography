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

        this.pos = this.text.setText('A', stageWidth, stageHeight);

        this.container = new PIXI.ParticleContainer (this.pos.length,
            {
                vertices: false,
                position: true,
                rotation: false,
                scale: false,
                uvs: false,
                tint: false,
            });
            stage.addChild(this.container);

            this.Particle = [];
            for (let i = 0; i < this.pos.length; i++) {
                const item = new Particle(this.pos[i], this.texture);
                this.container.addChild(item.sprite);
                this.Particle.push(item);
            }
    }

    onMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }
}