import BaseClockElement from "./components/BaseClockElement";
import { ElementRotation } from "./types/ElementRotation";

class App {
    private readonly domContainer: HTMLElement | null;

    constructor() {
        this.domContainer = window.document.getElementById('clock-container');
    }

    run() {
        const {domContainer} = this;

        if (domContainer) {
            domContainer.appendChild(new BaseClockElement(ElementRotation.HORIZONTAL).render());
            domContainer.appendChild(new BaseClockElement(ElementRotation.VERTICAL).render());
            domContainer.appendChild(new BaseClockElement(ElementRotation.VERTICAL).render());
            domContainer.appendChild(new BaseClockElement(ElementRotation.VERTICAL).render());
            domContainer.appendChild(new BaseClockElement(ElementRotation.HORIZONTAL).render());
        }
    }
}

const app = new App();
app.run();
