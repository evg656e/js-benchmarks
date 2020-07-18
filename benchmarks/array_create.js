suite('array create', () => {
    [10, 100, 1000, 10000].forEach((n) => {
        suite(`${n} elements`, () => {
            bench('literal, push', () => {
                const arr = [];
                for (let i = 0; i < n; i++) {
                    arr.push(i);
                }
                return arr;
            });

            bench('literal, set index', () => {
                const arr = [];
                for (let i = 0; i < n; i++) {
                    arr[i] = i;
                }
                return arr;
            });

            bench('literal, set index back', () => {
                const arr = [];
                for (let i = n - 1; i >= 0; i--) {
                    arr[i] = i;
                }
                return arr;
            });

            bench('constructor, push', () => {
                const arr = new Array();
                for (let i = 0; i < n; i++) {
                    arr.push(i);
                }
                return arr;
            });

            bench('constructor len, set index', () => {
                const arr = new Array(n);
                for (let i = 0; i < n; i++) {
                    arr[i] = i;
                }
                return arr;
            });

            bench('constructor len, set index back', () => {
                const arr = new Array(n);
                for (let i = n - 1; i >= 0; i--) {
                    arr[i] = i;
                }
                return arr;
            });

            bench('array-like create, set index', () => {
                const arr = Object.create(null);
                arr.length = n;
                for (let i = 0; i < n; i++) {
                    arr[i] = i;
                }
                return arr;
            });

            bench('array-like literal, set index', () => {
                const arr = {};
                arr.length = n;
                for (let i = 0; i < n; i++) {
                    arr[i] = i;
                }
                return arr;
            });
        });
    });
});
