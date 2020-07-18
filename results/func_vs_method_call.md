```console
Node.js 14.4.0 on Win32 64-bit
[func vs method call]
  [no args]
    method call x 5,269,102 ops/sec ±4.51% (81 runs sampled)
    func call x 5,306,136 ops/sec ±3.71% (86 runs sampled)
    method call indirect x 5,375,015 ops/sec ±3.58% (88 runs sampled)
  [one arg]
    method call x 3,370,503 ops/sec ±3.40% (89 runs sampled)
    func call x 3,418,912 ops/sec ±2.98% (90 runs sampled)
    method call indirect x 3,410,457 ops/sec ±2.94% (90 runs sampled)
  [one arg, ret obj]
    method call x 1,056,109 ops/sec ±1.04% (88 runs sampled)
    func call x 1,071,518 ops/sec ±0.93% (89 runs sampled)
    method call indirect x 1,051,376 ops/sec ±1.80% (90 runs sampled)
┌──────────────────────┬─────────┬──────────────┬──────────────────┐
│       (bench)        │ no args │   one arg    │ one arg, ret obj │
├──────────────────────┼─────────┼──────────────┼──────────────────┤
│     method call      │ fastest │   fastest    │    2% slower     │
│      func call       │ fastest │   fastest    │     fastest      │
│ method call indirect │ fastest │ 0.21% slower │     fastest      │
└──────────────────────┴─────────┴──────────────┴──────────────────┘

Firefox 78.0 on Windows 10 64-bit
[func vs method call]
  [no args]
    method call x 3,685,581 ops/sec ±1.76% (64 runs sampled)
    func call x 4,747,888 ops/sec ±2.28% (63 runs sampled)
    method call indirect x 4,673,958 ops/sec ±2.91% (62 runs sampled)
  [one arg]
    method call x 2,721,607 ops/sec ±2.72% (64 runs sampled)
    func call x 3,131,648 ops/sec ±3.39% (59 runs sampled)
    method call indirect x 3,205,567 ops/sec ±1.76% (65 runs sampled)
  [one arg, ret obj]
    method call x 1,149,313 ops/sec ±4.04% (58 runs sampled)
    func call x 1,334,302 ops/sec ±3.52% (61 runs sampled)
    method call indirect x 1,281,155 ops/sec ±3.55% (59 runs sampled)
┌──────────────────────┬────────────┬────────────┬──────────────────┐
│       (bench)        │  no args   │  one arg   │ one arg, ret obj │
├──────────────────────┼────────────┼────────────┼──────────────────┤
│     method call      │ 22% slower │ 16% slower │    14% slower    │
│      func call       │  fastest   │ 4% slower  │     fastest      │
│ method call indirect │  fastest   │  fastest   │    4% slower     │
└──────────────────────┴────────────┴────────────┴──────────────────┘
```
