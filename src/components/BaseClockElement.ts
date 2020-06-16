import './clock-element.css';
import { ElementPosition } from "../enums/ElementPosition";

class BaseClockElement {
    private rotation: ElementPosition = ElementPosition.TOP;

    constructor(rotation: ElementPosition) {
        this.rotation = rotation;
    }

    createArrows(): Node[] {
        const arrowLeft = document.createElement('DIV');
        const arrowRight = document.createElement('DIV');

        arrowLeft.classList.add('arrow-left');
        arrowRight.classList.add('arrow-right');

        return [arrowLeft, arrowRight];
    }

    getClassNameModifier() {
        let classNameModifier = '';
        switch (this.rotation) {
            case ElementPosition.TOP:
                classNameModifier = 'top';
                break;
            case ElementPosition.LEFT_TOP:
                classNameModifier = 'left-top';
                break;
            case ElementPosition.RIGHT_TOP:
                classNameModifier = 'right-top';
                break;
            case ElementPosition.LEFT_BOTTOM:
                classNameModifier = 'left-bottom';
                break;
            case ElementPosition.RIGHT_BOTTOM:
                classNameModifier = 'right-bottom';
                break;
            case ElementPosition.BOTTOM:
                classNameModifier = 'bottom';
                break;
            case ElementPosition.MIDDLE:
                classNameModifier = 'middle';
                break;
        }

        return 'clock-element--' + classNameModifier;
    }

    render() {
        const container = window.document.createElement("DIV");
        container.classList.add('clock-element');
        container.classList.add(this.getClassNameModifier());

        container.appendChild(this.createArrows()[0]);
        container.appendChild(this.createArrows()[1]);

        return container;
    }
}

export default BaseClockElement;
