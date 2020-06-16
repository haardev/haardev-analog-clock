import BaseClockElement from "./components/BaseClockElement";
import { ElementPosition } from "./enums/ElementPosition";

class App {
    private readonly domContainer: HTMLElement | null;

    constructor() {
        this.domContainer = window.document.getElementById('clock-container');
    }

    run() {
        const {domContainer} = this;

        if (domContainer) {
            domContainer.appendChild(new BaseClockElement(ElementPosition.TOP).render());
            domContainer.appendChild(new BaseClockElement(ElementPosition.BOTTOM).render());
            domContainer.appendChild(new BaseClockElement(ElementPosition.LEFT_TOP).render());
        }
    }
}

const app = new App();
app.run();
