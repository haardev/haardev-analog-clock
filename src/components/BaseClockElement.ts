import './clock-element.css';
import { ElementRotation } from "../types/ElementRotation";

class BaseClockElement {
    private rotation: ElementRotation = ElementRotation.HORIZONTAL;

    constructor(rotation: ElementRotation) {
        this.rotation = rotation;
    }

    createArrows(): Node[] {
        const arrowLeft = document.createElement('DIV');
        const arrowRight = document.createElement('DIV');

        arrowLeft.classList.add('arrow-left');
        arrowRight.classList.add('arrow-right');

        return [arrowLeft, arrowRight];
    }

    render() {
        const container = window.document.createElement("DIV");
        container.classList.add('clock-element');

        const rotationClassModifier = this.rotation === ElementRotation.HORIZONTAL ? 'horizontal' : 'vertical';
        container.classList.add(`clock-element--${ rotationClassModifier }`);

        container.appendChild(this.createArrows()[0]);
        container.appendChild(this.createArrows()[1]);

        return container;
    }
}

export default BaseClockElement;
