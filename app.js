import {Text} from './text.js';

class App {
    constructor() {
        WebFont.load({
            google: {
                families: ['Hind:700']
            },
            fontactive: () => {
                this.text = new Text();
                this.text.setText(
                    'A',
                    2,
                    document.body.clientWidth,
                    document.body.clientHeight,
                );
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
        })
    }
}

window.onload = () => {
    new App();
}