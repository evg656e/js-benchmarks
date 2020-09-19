suite('mut vs immut', () => {
    class Vector2D {
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
    
        translate(dx, dy) {
            this.x += dx;
            this.y += dy;
            return this;
        }
    
        translated(dx, dy) {
            return new Vector2D(this.x + dx, this.y + dy);
        }
    }

    suite('vec translation', () => {
        const dx = 1;
        const dy = 1;
        const n = 1000;

        bench('mut', () => {
            const vec = new Vector2D();
            for (let i = 0; i < n; i++) {
                vec.translate(dx, dy);
                if (i === n - 1) {
                    return vec;
                }
            }
        });

        bench('immut', () => {
            const vec = new Vector2D();
            for (let i = 0; i < n; i++){
                const next = vec.translated(dx, dy);
                if (i === n - 1) {
                    return next;
                }
            }
        });
    });
});
