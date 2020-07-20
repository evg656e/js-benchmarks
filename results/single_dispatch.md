```console
Node.js 14.4.0 on Win32 64-bit
[single dispatch]
  [isNull]
    method x 4,094,724 ops/sec ±3.15% (87 runs sampled)
    ctor-map dispatcher x 477,437 ops/sec ±4.08% (83 runs sampled)
    switch dispatcher x 2,287,477 ops/sec ±3.51% (87 runs sampled)
  [clone]
    method x 362,461 ops/sec ±1.83% (90 runs sampled)
    ctor-map dispatcher x 291,424 ops/sec ±8.27% (80 runs sampled)
    switch dispatcher x 360,862 ops/sec ±1.79% (81 runs sampled)
  [translate]
    method x 2,108,217 ops/sec ±2.82% (92 runs sampled)
    ctor-map dispatcher x 384,774 ops/sec ±5.54% (76 runs sampled)
    switch dispatcher x 2,037,176 ops/sec ±3.69% (89 runs sampled)
  [translated]
    method x 372,452 ops/sec ±1.23% (95 runs sampled)
    ctor-map dispatcher x 292,902 ops/sec ±2.96% (84 runs sampled)
    switch dispatcher x 366,887 ops/sec ±1.73% (90 runs sampled)
┌─────────────────────┬────────────┬────────────┬────────────┬────────────┐
│       (bench)       │   isNull   │   clone    │ translate  │ translated │
├─────────────────────┼────────────┼────────────┼────────────┼────────────┤
│       method        │  fastest   │  fastest   │  fastest   │  fastest   │
│ ctor-map dispatcher │ 88% slower │ 24% slower │ 82% slower │ 23% slower │
│  switch dispatcher  │ 44% slower │  fastest   │ 4% slower  │  fastest   │
└─────────────────────┴────────────┴────────────┴────────────┴────────────┘

Firefox 78.0 on Windows 10 64-bit
[single dispatch]
  [isNull]
    method x 1,675,404 ops/sec ±1.81% (62 runs sampled)
    ctor-map dispatcher x 100,231 ops/sec ±2.24% (60 runs sampled)
    switch dispatcher x 878,291 ops/sec ±2.79% (61 runs sampled)
  [clone]
    method x 323,651 ops/sec ±4.38% (55 runs sampled)
    ctor-map dispatcher x 50,687 ops/sec ±3.21% (57 runs sampled)
    switch dispatcher x 314,392 ops/sec ±4.30% (57 runs sampled)
  [translate]
    method x 1,726,276 ops/sec ±2.27% (64 runs sampled)
    ctor-map dispatcher x 96,060 ops/sec ±2.83% (62 runs sampled)
    switch dispatcher x 962,806 ops/sec ±2.59% (61 runs sampled)
  [translated]
    method x 330,664 ops/sec ±4.76% (58 runs sampled)
    ctor-map dispatcher x 64,209 ops/sec ±3.69% (57 runs sampled)
    switch dispatcher x 300,872 ops/sec ±4.74% (60 runs sampled)
┌─────────────────────┬────────────┬────────────┬────────────┬────────────┐
│       (bench)       │   isNull   │   clone    │ translate  │ translated │
├─────────────────────┼────────────┼────────────┼────────────┼────────────┤
│       method        │  fastest   │  fastest   │  fastest   │  fastest   │
│ ctor-map dispatcher │ 94% slower │ 84% slower │ 94% slower │ 80% slower │
│  switch dispatcher  │ 48% slower │ 3% slower  │ 44% slower │ 9% slower  │
└─────────────────────┴────────────┴────────────┴────────────┴────────────┘
```
