```console
Node.js 14.4.0 on Win32 64-bit
[array create]
  [10 elements]
    literal, push x 21,534,341 ops/sec ±3.19% (78 runs sampled)
    literal, set index x 23,044,051 ops/sec ±2.91% (82 runs sampled)
    literal, set index back x 14,118,044 ops/sec ±1.79% (83 runs sampled)
    constructor, push x 14,625,109 ops/sec ±1.43% (87 runs sampled)
    constructor len, set index x 42,278,382 ops/sec ±1.75% (86 runs sampled)
    constructor len, set index back x 42,264,839 ops/sec ±1.86% (89 runs sampled)
    array-like create, set index x 3,410,770 ops/sec ±3.82% (85 runs sampled)
    array-like literal, set index x 3,516,649 ops/sec ±3.39% (81 runs sampled)
  [100 elements]
    literal, push x 1,736,651 ops/sec ±1.55% (91 runs sampled)
    literal, set index x 1,681,856 ops/sec ±2.58% (84 runs sampled)
    literal, set index back x 2,702,680 ops/sec ±2.70% (90 runs sampled)
    constructor, push x 1,420,166 ops/sec ±2.48% (89 runs sampled)
    constructor len, set index x 4,920,633 ops/sec ±1.82% (85 runs sampled)
    constructor len, set index back x 5,045,266 ops/sec ±1.24% (77 runs sampled)
    array-like create, set index x 492,455 ops/sec ±3.51% (84 runs sampled)
    array-like literal, set index x 469,835 ops/sec ±3.81% (81 runs sampled)
  [1000 elements]
    literal, push x 132,060 ops/sec ±1.78% (91 runs sampled)
    literal, set index x 138,433 ops/sec ±1.45% (91 runs sampled)
    literal, set index back x 258,995 ops/sec ±1.81% (92 runs sampled)
    constructor, push x 117,064 ops/sec ±2.18% (87 runs sampled)
    constructor len, set index x 464,441 ops/sec ±1.46% (89 runs sampled)
    constructor len, set index back x 467,992 ops/sec ±1.22% (93 runs sampled)
    array-like create, set index x 71,689 ops/sec ±3.77% (87 runs sampled)
    array-like literal, set index x 66,052 ops/sec ±3.35% (83 runs sampled)
  [10000 elements]
    literal, push x 12,888 ops/sec ±1.57% (77 runs sampled)
    literal, set index x 14,143 ops/sec ±0.69% (75 runs sampled)
    literal, set index back x 1,773 ops/sec ±3.19% (88 runs sampled)
    constructor, push x 12,111 ops/sec ±1.51% (71 runs sampled)
    constructor len, set index x 40,356 ops/sec ±1.08% (89 runs sampled)
    constructor len, set index back x 41,074 ops/sec ±1.63% (92 runs sampled)
    array-like create, set index x 6,837 ops/sec ±4.39% (82 runs sampled)
    array-like literal, set index x 6,484 ops/sec ±4.25% (84 runs sampled)
┌─────────────────────────────────┬─────────────┬──────────────┬───────────────┬────────────────┐
│             (bench)             │ 10 elements │ 100 elements │ 1000 elements │ 10000 elements │
├─────────────────────────────────┼─────────────┼──────────────┼───────────────┼────────────────┤
│          literal, push          │ 50% slower  │  66% slower  │  72% slower   │   69% slower   │
│       literal, set index        │ 46% slower  │  67% slower  │  70% slower   │   65% slower   │
│     literal, set index back     │ 67% slower  │  47% slower  │  45% slower   │   96% slower   │
│        constructor, push        │ 65% slower  │  72% slower  │  75% slower   │   70% slower   │
│   constructor len, set index    │   fastest   │   fastest    │    fastest    │   1% slower    │
│ constructor len, set index back │   fastest   │   fastest    │    fastest    │    fastest     │
│  array-like create, set index   │ 92% slower  │  90% slower  │  85% slower   │   84% slower   │
│  array-like literal, set index  │ 92% slower  │  91% slower  │  86% slower   │   85% slower   │
└─────────────────────────────────┴─────────────┴──────────────┴───────────────┴────────────────┘

Firefox 78.0 on Windows 10 64-bit
[array create]
  [10 elements]
    literal, push x 10,622,005 ops/sec ±1.57% (63 runs sampled)
    literal, set index x 10,830,580 ops/sec ±2.25% (59 runs sampled)
    literal, set index back x 11,875,412 ops/sec ±2.61% (61 runs sampled)
    constructor, push x 10,336,536 ops/sec ±2.55% (63 runs sampled)
    constructor len, set index x 21,134,736 ops/sec ±2.08% (64 runs sampled)
    constructor len, set index back x 17,476,224 ops/sec ±3.05% (63 runs sampled)
    array-like create, set index x 7,510,924 ops/sec ±2.25% (62 runs sampled)
    array-like literal, set index x 6,693,042 ops/sec ±2.30% (63 runs sampled)
  [100 elements]
    literal, push x 1,404,037 ops/sec ±2.97% (62 runs sampled)
    literal, set index x 1,557,235 ops/sec ±2.79% (61 runs sampled)
    literal, set index back x 3,013,435 ops/sec ±2.65% (61 runs sampled)
    constructor, push x 1,404,798 ops/sec ±3.45% (61 runs sampled)
    constructor len, set index x 2,671,096 ops/sec ±2.04% (60 runs sampled)
    constructor len, set index back x 2,647,397 ops/sec ±3.07% (58 runs sampled)
    array-like create, set index x 1,436,429 ops/sec ±2.90% (61 runs sampled)
    array-like literal, set index x 1,381,043 ops/sec ±2.82% (62 runs sampled)
  [1000 elements]
    literal, push x 99,228 ops/sec ±0.59% (61 runs sampled)
    literal, set index x 107,555 ops/sec ±1.80% (61 runs sampled)
    literal, set index back x 119,720 ops/sec ±3.42% (63 runs sampled)
    constructor, push x 95,266 ops/sec ±1.48% (67 runs sampled)
    constructor len, set index x 119,500 ops/sec ±0.88% (65 runs sampled)
    constructor len, set index back x 123,600 ops/sec ±0.31% (64 runs sampled)
    array-like create, set index x 97,704 ops/sec ±1.02% (66 runs sampled)
    array-like literal, set index x 94,921 ops/sec ±0.80% (66 runs sampled)
  [10000 elements]
    literal, push x 7,512 ops/sec ±5.67% (42 runs sampled)
    literal, set index x 8,012 ops/sec ±5.33% (44 runs sampled)
    literal, set index back x 519 ops/sec ±5.50% (37 runs sampled)
    constructor, push x 8,170 ops/sec ±5.91% (45 runs sampled)
    constructor len, set index x 15,435 ops/sec ±3.14% (61 runs sampled)
    constructor len, set index back x 506 ops/sec ±6.30% (56 runs sampled)
    array-like create, set index x 8,282 ops/sec ±5.17% (53 runs sampled)
    array-like literal, set index x 5,656 ops/sec ±3.67% (33 runs sampled)
┌─────────────────────────────────┬─────────────┬──────────────┬───────────────┬────────────────┐
│             (bench)             │ 10 elements │ 100 elements │ 1000 elements │ 10000 elements │
├─────────────────────────────────┼─────────────┼──────────────┼───────────────┼────────────────┤
│          literal, push          │ 49% slower  │  54% slower  │  20% slower   │   52% slower   │
│       literal, set index        │ 49% slower  │  48% slower  │  14% slower   │   49% slower   │
│     literal, set index back     │ 44% slower  │   fastest    │   6% slower   │   97% slower   │
│        constructor, push        │ 51% slower  │  54% slower  │  24% slower   │   48% slower   │
│   constructor len, set index    │   fastest   │  11% slower  │   4% slower   │    fastest     │
│ constructor len, set index back │ 18% slower  │  13% slower  │    fastest    │   97% slower   │
│  array-like create, set index   │ 65% slower  │  52% slower  │  22% slower   │   47% slower   │
│  array-like literal, set index  │ 68% slower  │  54% slower  │  24% slower   │   64% slower   │
└─────────────────────────────────┴─────────────┴──────────────┴───────────────┴────────────────┘
```
