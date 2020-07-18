suite('func vs method call', () => {
    class Vector2D {
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }

        lengthSquared() {
            return this.x * this.x + this.y * this.y;
        }

        dotProduct(other) {
            return this.x * other.x + this.y * other.y;
        }

        plus(other) {
            return new Vector2D(this.x + other.x, this.y + other.y);
        }
    }

    const Vector2D_proto_lengthSquared = Vector2D.prototype.lengthSquared;
    const Vector2D_proto_dotProduct = Vector2D.prototype.dotProduct;
    const Vector2D_proto_plus = Vector2D.prototype.plus;

    function lengthSquared(self) {
        return self.x * self.x + self.y * self.y;
    }

    function dotProduct(self, other) {
        return self.x * other.x + self.y * other.y;
    }

    function plus(self, other) {
        return new Vector2D(self.x + other.x, self.y + other.y);
    }

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randVector2D(min, max) {
        return new Vector2D(randInt(min, max), randInt(min, max));
    }

    const minInt = -60000;
    const maxInt = 60000;

    const n = 100;
    const v1 = new Array(n);
    const v2 = new Array(n);
    for (let i = 0; i < n; i++) {
        v1[i] = randVector2D(minInt, maxInt);
        v2[i] = randVector2D(minInt, maxInt);
    }

    suite('no args', () => {
        bench('method call', () => {
            let res = 0;
            for (let i = 1; i < n; i++) {
                res += v1[i].lengthSquared();
            }
            return res;
        });
    
        bench('func call', () => {
            let res = 0;
            for (let i = 1; i < n; i++) {
                res += lengthSquared(v1[i]);
            }
            return res;
        });

        bench('method call indirect', () => {
            let res = 0;
            for (let i = 1; i < n; i++) {
                res += Vector2D_proto_lengthSquared.call(v1[i]);
            }
            return res;
        });
    });

    suite('one arg', () => { 
        bench('method call', () => {
            let res = 0;
            for (let i = 1; i < n; i++) {
                res += v1[i].dotProduct(v2[i]);
            }
            return res;
        });

        bench('func call', () => {
            let res = 0;
            for (let i = 1; i < n; i++) {
                res += dotProduct(v1[i], v2[i]);
            }
            return res;
        });

        bench('method call indirect', () => {
            let res = 0;
            for (let i = 1; i < n; i++) {
                res += Vector2D_proto_dotProduct.call(v1[i], v2[i]);
            }
            return res;
        });
    });

    suite('one arg, ret obj', () => { 
        bench('method call', () => {
            let res = new Vector2D();
            for (let i = 1; i < n; i++) {
                res = res.plus(v1[i]);
            }
            return res;
        });

        bench('func call', () => {
            let res = new Vector2D();
            for (let i = 1; i < n; i++) {
                res = plus(res, v1[i]);
            }
            return res;
        });

        bench('method call indirect', () => {
            let res = new Vector2D();
            for (let i = 1; i < n; i++) {
                res = Vector2D_proto_plus.call(res, v1[i]);
            }
            return res;
        });
    });
});
