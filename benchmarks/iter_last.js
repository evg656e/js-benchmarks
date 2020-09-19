suite('iter last', () => {
    function* gen_n_integers(n) {
        for (let i = 0; i < n; i++) {
            yield i;
        }
    }

    function* gen_n_objects(n) {
        for (let i = 0; i < n; i++) {
            yield { value: i };
        }
    }

    const N = 10;

    suite('gen integers', () => {
        bench('loop to last', () => {
            let last;
            for (let i of gen_n_integers(N)) {
                last = i;
            }
            return last;
        });

        bench('array spread', () => {
            const ints = [...gen_n_integers(N)];
            return ints[ints.length - 1];
        });
    });

    suite('gen objects', () => {
        bench('loop to last', () => {
            let last;
            for (let i of gen_n_objects(N)) {
                last = i;
            }
            return last;
        });

        bench('array spread', () => {
            const ints = [...gen_n_objects(N)];
            return ints[ints.length - 1];
        });
    });
});
