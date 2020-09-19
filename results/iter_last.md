```console
Node.js 14.8.0 on Win32 64-bit
[iter last]
  [gen integers]
    loop to last x 3,561,733 ops/sec ±3.02% (86 runs sampled)
    array spread x 1,650,604 ops/sec ±2.60% (89 runs sampled)
  [gen objects]
    loop to last x 3,367,918 ops/sec ±2.34% (89 runs sampled)
    array spread x 1,570,850 ops/sec ±1.45% (93 runs sampled)
┌──────────────┬──────────────┬─────────────┐
│   (bench)    │ gen integers │ gen objects │
├──────────────┼──────────────┼─────────────┤
│ loop to last │   fastest    │   fastest   │
│ array spread │  53% slower  │ 53% slower  │
└──────────────┴──────────────┴─────────────┘

Firefox 80.0 on Windows 10 64-bit
[iter last]
  [gen integers]
    loop to last x 578,904 ops/sec ±1.57% (64 runs sampled)
    array spread x 394,575 ops/sec ±2.17% (50 runs sampled)
  [gen objects]
    loop to last x 545,313 ops/sec ±1.83% (63 runs sampled)
    array spread x 503,926 ops/sec ±1.58% (64 runs sampled)
┌──────────────┬──────────────┬─────────────┐
│   (bench)    │ gen integers │ gen objects │
├──────────────┼──────────────┼─────────────┤
│ loop to last │   fastest    │   fastest   │
│ array spread │  32% slower  │  7% slower  │
└──────────────┴──────────────┴─────────────┘
```
