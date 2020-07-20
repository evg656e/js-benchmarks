class Vector2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    clone() {
        return new Vector2D(this.x, this.y);
    }

    equals(other) {
        return this.x === other.x && this.y === other.y;
    }

    isNull() {
        return this.x === 0 && this.y === 0;
    }

    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    translated(dx, dy) {
        return new Vector2D(this.x + dx, this.y + dy);
    }
}

class Rectangle {
    constructor(p = new Vector2D(), s = new Vector2D()) {
        this.p = p;
        this.s = s;
    }

    clone() {
        return new Rectangle(this.p.clone(), this.s.clone());
    }

    isNull() {
        return this.s.isNull();
    }

    translate(dx, dy) {
        this.p.translate(dx, dy);
    }

    translated(dx, dy) {
        return new Rectangle(this.p.translated(dx, dy), this.s.clone());
    }
}

function cloneRectangle(rect) {
    return new Rectangle(rect.p.clone(), rect.s.clone());
}

function isNullRectangle(rect) {
    return rect.s.isNull();
}

function translateRectangle(rect, dx, dy) {
    rect.p.translate(dx, dy);
}

function translatedRectangle(rect, dx, dy) {
    return new Rectangle(rect.p.translated(dx, dy), rect.s.clone());
}

class Line {
    constructor(p1 = new Vector2D(), p2 = new Vector2D()) {
        this.p1 = p1;
        this.p2 = p2;
    }

    clone() {
        return new Line(this.p1.clone(), this.p2.clone());
    }

    isNull() {
        return this.p1.x === this.p2.x && this.p1.y === this.p2.y;
    }

    translate(dx, dy) {
        this.p1.translate(dx, dy);
        this.p2.translate(dx, dy);
    }

    translated(dx, dy) {
        return new Line(this.p1.translated(dx, dy), this.p2.translated(dx, dy));
    }
}

function cloneLine(line) {
    return new Line(line.p1.clone(), line.p2.clone());
}

function isNullLine(line) {
    return line.p1.x === line.p2.x && line.p1.y === line.p2.y;
}

function translateLine(line, dx, dy) {
    line.p1.translate(dx, dy);
    line.p2.translate(dx, dy);
}

function translatedLine(line, dx, dy) {
    return new Line(line.p1.translated(dx, dy), line.p2.translated(dx, dy));
}

class Circle {
    constructor(c = new Vector2D(), r = 0) {
        this.c = c;
        this.r = r;
    }

    clone() {
        return new Circle(this.c.clone(), this.r);
    }

    isNull() {
        return this.r === 0;
    }

    translate(dx, dy) {
        this.c.translate(dx, dy);
        return this;
    }

    translated(dx, dy) {
        return new Circle(this.c.translated(dx, dy), this.r);
    }
}

function cloneCircle(circ) {
    return new Circle(circ.c.clone(), circ.r);
}

function isNullCircle(circ) {
    return circ.r === 0;
}

function translateCircle(circ, dx, dy) {
    circ.c.translate(dx, dy);
}

function translatedCircle(circ, dx, dy) {
    return new Circle(circ.c.translated(dx, dy), circ.r);
}

class Polygon {
    constructor(points = []) {
        this.points = points;
    }

    clone() {
        const points = new Array(this.points.length);
        for (let i = 0; i < points.length; i++) {
            points[i] = this.points[i].clone();
        }
        return new Polygon(points);
    }

    isNull() {
        if (this.points.length === 0)
            return true;
        let p1 = this.points[0];
        for (let i = 1; i < this.points.length; i++) {
            const p2 = this.points[i];
            if (!p1.equals(p2))
                return false;
            p1 = p2;
        }
        return true;
    }

    translate(dx, dy) {
        for (let i = 0; i < this.points.length; i++)
            this.points[i].translate(dx, dy);
    }

    translated(dx, dy) {
        const points = new Array(this.points.length);
        for (let i = 0; i < points.length; i++) {
            points[i] = this.points[i].translated(dx, dy);
        }
        return new Polygon(points);
    }
}

function clonePolygon(poly) {
    const points = new Array(poly.points.length);
    for (let i = 0; i < points.length; i++) {
        points[i] = poly.points[i].clone();
    }
    return new Polygon(points);
}

function isNullPolygon(poly) {
    if (poly.points.length === 0)
        return true;
    let p1 = poly.points[0];
    for (let i = 1; i < poly.points.length; i++) {
        const p2 = poly.points[i];
        if (!p1.equals(p2))
            return false;
        p1 = p2;
    }
    return true;
}

function translatePolygon(poly, dx, dy) {
    for (let i = 0; i < poly.points.length; i++)
        poly.points[i].translate(dx, dy);
}

function translatedPolygon(poly, dx, dy) {
    const points = new Array(poly.points.length);
    for (let i = 0; i < points.length; i++) {
        points[i] = poly.points[i].translated(dx, dy);
    }
    return new Polygon(points);
}

function switchClone(obj) {
    switch (obj.constructor) {
        case Line: return cloneLine(obj);
        case Rectangle: return cloneRectangle(obj);
        case Circle: return cloneCircle(obj);
        case Polygon: return clonePolygon(obj);
    }
}

function switchIsNull(obj) {
    switch (obj.constructor) {
        case Line: return isNullLine(obj);
        case Rectangle: return isNullRectangle(obj);
        case Circle: return isNullCircle(obj);
        case Polygon: return isNullPolygon(obj);
    }
}

function switchTranslate(obj, dx, dy) {
    switch (obj.constructor) {
        case Line: return translateLine(obj, dx, dy);
        case Rectangle: return translateRectangle(obj, dx, dy);
        case Circle: return translateCircle(obj, dx, dy);
        case Polygon: return translatePolygon(obj, dx, dy);
    }
}

function switchTranslated(obj, dx, dy) {
    switch (obj.constructor) {
        case Line: return translatedLine(obj, dx, dy);
        case Rectangle: return translatedRectangle(obj, dx, dy);
        case Circle: return translatedCircle(obj, dx, dy);
        case Polygon: return translatedPolygon(obj, dx, dy);
    }
}

function createConstructorMapDispatcher(mappings) {
    const map = new Map(mappings);

    return [
        function dispatch(...args) {
            return Reflect.apply(map.get(args[0].constructor), this, args);
        },
        function register(ctor, fn) {
            map.set(ctor, fn);
        }
    ];
}

function createPrototypeInjectionDispatcher(mappings) {
    const sym = Symbol();

    function register(ctor, fn) {
        ctor.prototype[sym] = fn;
    }

    function dispatch(...args) {
        return Reflect.apply(args[0][sym], this, args);
    }

    for (const [ctor, fn] of mappings) {
        register(ctor, fn);
    }

    return [
        dispatch,
        register
    ];
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class RandomShapes {
    constructor(min, max, maxSize) {
        this.min = min;
        this.max = max;
        this.maxSize = maxSize;
        this.randFns = [];
        this.init();
    }

    init() {
        this.regiser(this.randRectangle);
        this.regiser(this.randLine);
        this.regiser(this.randCircle);
        this.regiser(this.randPolygon);
    }

    regiser(fn) {
        if (this.randFns.indexOf(fn) === -1) {
            this.randFns.push(fn);
        }
    }

    randInt() {
        return randInt(this.min, this.max);
    }

    randVector2D() {
        return new Vector2D(this.randInt(), this.randInt());
    }

    randRectangle() {
        return new Rectangle(this.randVector2D(), this.randVector2D());
    }

    randLine() {
        return new Line(this.randVector2D(), this.randVector2D());
    }

    randCircle() {
        return new Circle(this.randVector2D(), this.randInt());
    }

    randPolygon() {
        const points = new Array(randInt(0, this.maxSize));
        for (let i = 0; i < points.length; i++) {
            points[i] = this.randVector2D();
        }
        return new Polygon(points);
    }

    randShape() {
        return this.randFns[randInt(0, this.randFns.length)].call(this);
    }

    randShapes(size) {
        const shapes = new Array(size);
        for (let i = 0; i < shapes.length; i++) {
            shapes[i] = this.randShape();
        }
        return shapes;
    }
}

suite('single dispatch', () => {
    const shapes = new RandomShapes(-1000, 1000, 2).randShapes(100);

    suite('isNull', () => {
        const [isNull] = createConstructorMapDispatcher([
            [Line, isNullLine],
            [Rectangle, isNullRectangle],
            [Circle, isNullCircle],
            [Polygon, isNullPolygon]
        ]);

        bench('method', () => {
            let count = 0;
            for (let i = 0; i < shapes.length; i++) {
                if (shapes[i].isNull())
                    ++count;
            }
            return count;
        });

        bench('constructor map dispatcher', () => {
            let count = 0;
            for (let i = 0; i < shapes.length; i++) {
                if (isNull(shapes[i]))
                    ++count;
            }
            return count;
        });

        bench('switch dispatcher', () => {
            let count = 0;
            for (let i = 0; i < shapes.length; i++) {
                if (switchIsNull(shapes[i]))
                    ++count;
            }
            return count;
        });
    });

    suite('clone', () => {
        const [clone] = createConstructorMapDispatcher([
            [Line, cloneLine],
            [Rectangle, cloneRectangle],
            [Circle, cloneCircle],
            [Polygon, clonePolygon]
        ]);

        bench('method', () => {
            const ret = new Array(shapes.length);
            for (let i = 0; i < shapes.length; i++) {
                ret[i] = shapes[i].clone();
            }
            return ret;
        });

        bench('constructor map dispatcher', () => {
            const ret = new Array(shapes.length);
            for (let i = 0; i < shapes.length; i++) {
                ret[i] = clone(shapes[i]);
            }
            return ret;
        });

        bench('switch dispatcher', () => {
            const ret = new Array(shapes.length);
            for (let i = 0; i < shapes.length; i++) {
                ret[i] = switchClone(shapes[i]);
            }
            return ret;
        });
    });

    suite('translate', () => {
        const [translate] = createConstructorMapDispatcher([
            [Line, translateLine],
            [Rectangle, translateRectangle],
            [Circle, translateCircle],
            [Polygon, translatePolygon]
        ]);

        const dx = randInt(-100, 100);
        const dy = randInt(-100, 100);

        bench('method', () => {
            for (let i = 0; i < shapes.length; i++) {
                shapes[i].translate(dx, dy);
            }
        });

        bench('constructor map dispatcher', () => {
            for (let i = 0; i < shapes.length; i++) {
                translate(shapes[i], dx, dy);
            }
        });

        bench('switch dispatcher', () => {
            for (let i = 0; i < shapes.length; i++) {
                switchTranslate(shapes[i], dx, dy);
            }
        });
    });

    suite('translated', () => {
        const [translated] = createConstructorMapDispatcher([
            [Line, translatedLine],
            [Rectangle, translatedRectangle],
            [Circle, translatedCircle],
            [Polygon, translatedPolygon]
        ]);

        const dx = randInt(-100, 100);
        const dy = randInt(-100, 100);

        bench('method', () => {
            const ret = new Array(shapes.length);
            for (let i = 0; i < shapes.length; i++) {
                ret[i] = shapes[i].translated(dx, dy);
            }
            return ret;
        });

        bench('constructor map dispatcher', () => {
            const ret = new Array(shapes.length);
            for (let i = 0; i < shapes.length; i++) {
                ret[i] = translated(shapes[i], dx, dy);
            }
            return ret;
        });

        bench('switch dispatcher', () => {
            const ret = new Array(shapes.length);
            for (let i = 0; i < shapes.length; i++) {
                ret[i] = switchTranslated(shapes[i], dx, dy);
            }
            return ret;
        });
    });
});
