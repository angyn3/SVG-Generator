class Shapes {
    constructor(color) {
        this.color = "";

    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shapes {

    createShape() {
        return `<circle cx="50" cy="50" r="40"  fill="${this.color}" />`
    }

}
class Square extends Shapes {

    createShape() {
        return `<rect x="0" y="0" height="100%" width="100%" fill="${this.color}" />`

    }
}

class Triangle extends Shapes {

    createShape() {
        return `<polygon points="50 10, 90 90, 10 90" fill="${this.color}" />`
    }


}

module.exports = { Circle, Square, Triangle };