# Benchmark Results for Node `v10.18.1` (LTS)
All benchmarks were run on the same Google Cloud instance:

```
Machine type
  n2-standard-4 (4 vCPUs, 16 GB memory)
CPU platform
  Intel Cascade Lake
Image OS
  debian-9-stretch-v20191210
```

In search for utmost consistency, no other user processes were running.<br>
Please note that numbers will vary per machine.

> Don't forget to view results for other Node versions!


## every

<details>
<summary>:no_entry_sign: ↝ Strings</summary>

```
Benchmark: code/every.js • Array<string>(100)
  native         ⇝   13.32ms   @   225,141,963.26 op/s
  @arr/every     ⇝    4.49ms   @   667,711,561.07 op/s
  array-every    ⇝   10.30ms   @   291,241,749.00 op/s
  lodash.every   ⇝    7.68ms   @   390,665,083.87 op/s
  fastjs.every   ⇝    3.73ms   @   804,812,996.33 op/s

Benchmark: code/every.js • Array<string>(500)
  native         ⇝    4.96ms   @   3,025,008,959.07 op/s
  @arr/every     ⇝    9.48ms   @   1,582,153,143.78 op/s
  array-every    ⇝   18.63ms   @     805,224,641.03 op/s
  lodash.every   ⇝   14.10ms   @   1,063,857,704.07 op/s
  fastjs.every   ⇝    9.50ms   @   1,578,629,150.02 op/s

Benchmark: code/every.js • Array<string>(1000)
  native         ⇝    9.43ms   @   3,181,864,222.43 op/s
  @arr/every     ⇝   18.29ms   @   1,639,893,043.99 op/s
  array-every    ⇝   36.40ms   @     824,232,682.64 op/s
  lodash.every   ⇝   27.44ms   @   1,093,459,794.63 op/s
  fastjs.every   ⇝   18.35ms   @   1,635,238,384.23 op/s

Benchmark: code/every.js • Array<string>(5000)
  native         ⇝    45.01ms   @   3,332,549,295.57 op/s
  @arr/every     ⇝    89.57ms   @   1,674,616,237.41 op/s
  array-every    ⇝   179.28ms   @     836,657,270.41 op/s
  lodash.every   ⇝   138.60ms   @   1,082,284,355.08 op/s
  fastjs.every   ⇝    89.91ms   @   1,668,379,220.86 op/s

Benchmark: code/every.js • Array<string>(10000)
  native         ⇝    89.85ms   @   3,338,866,614.38 op/s
  @arr/every     ⇝   182.07ms   @   1,647,722,435.66 op/s
  array-every    ⇝   357.61ms   @     838,910,233.79 op/s
  lodash.every   ⇝   268.02ms   @   1,119,338,172.05 op/s
  fastjs.every   ⇝   179.41ms   @   1,672,192,137.60 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Numbers</summary>

```
Benchmark: code/every.js • Array<number>(100)
  native         ⇝   1.40ms   @   2,142,779,084.48 op/s
  @arr/every     ⇝   2.34ms   @   1,280,778,713.46 op/s
  array-every    ⇝   4.24ms   @     707,430,543.88 op/s
  lodash.every   ⇝   3.41ms   @     880,141,198.12 op/s
  fastjs.every   ⇝   2.36ms   @   1,269,318,498.67 op/s

Benchmark: code/every.js • Array<number>(500)
  native         ⇝    5.00ms   @   2,997,841,554.08 op/s
  @arr/every     ⇝    9.64ms   @   1,555,675,446.28 op/s
  array-every    ⇝   18.53ms   @     809,553,421.19 op/s
  lodash.every   ⇝   14.08ms   @   1,065,363,532.93 op/s
  fastjs.every   ⇝    9.83ms   @   1,525,658,525.07 op/s

Benchmark: code/every.js • Array<number>(1000)
  native         ⇝    9.46ms   @   3,172,796,191.63 op/s
  @arr/every     ⇝   18.40ms   @   1,630,285,753.23 op/s
  array-every    ⇝   39.99ms   @     750,216,043.47 op/s
  lodash.every   ⇝   27.46ms   @   1,092,643,732.37 op/s
  fastjs.every   ⇝   18.72ms   @   1,602,829,100.22 op/s

Benchmark: code/every.js • Array<number>(5000)
  native         ⇝    45.04ms   @   3,330,517,713.66 op/s
  @arr/every     ⇝    90.19ms   @   1,663,109,036.21 op/s
  array-every    ⇝   178.73ms   @     839,260,235.74 op/s
  lodash.every   ⇝   134.14ms   @   1,118,221,158.83 op/s
  fastjs.every   ⇝    89.91ms   @   1,668,397,146.72 op/s

Benchmark: code/every.js • Array<number>(10000)
  native         ⇝    90.16ms   @   3,327,281,894.84 op/s
  @arr/every     ⇝   179.16ms   @   1,674,448,844.42 op/s
  array-every    ⇝   360.57ms   @     832,023,811.06 op/s
  lodash.every   ⇝   268.08ms   @   1,119,050,730.45 op/s
  fastjs.every   ⇝   178.50ms   @   1,680,714,225.56 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Objects</summary>

```
Benchmark: code/every.js • Array<object>(100)
  native         ⇝   1.43ms   @   2,099,887,446.03 op/s
  @arr/every     ⇝   2.36ms   @   1,271,332,428.43 op/s
  array-every    ⇝   4.23ms   @     708,808,146.19 op/s
  lodash.every   ⇝   3.38ms   @     887,205,957.77 op/s
  fastjs.every   ⇝   2.39ms   @   1,253,158,481.52 op/s

Benchmark: code/every.js • Array<object>(500)
  native         ⇝    5.00ms   @   3,000,998,131.98 op/s
  @arr/every     ⇝    9.47ms   @   1,584,536,947.60 op/s
  array-every    ⇝   18.50ms   @     810,800,599.11 op/s
  lodash.every   ⇝   14.36ms   @   1,044,732,739.60 op/s
  fastjs.every   ⇝    9.58ms   @   1,565,953,907.09 op/s

Benchmark: code/every.js • Array<object>(1000)
  native         ⇝    9.66ms   @   3,104,323,266.84 op/s
  @arr/every     ⇝   18.33ms   @   1,636,404,635.74 op/s
  array-every    ⇝   36.37ms   @     824,745,714.40 op/s
  lodash.every   ⇝   27.56ms   @   1,088,448,682.35 op/s
  fastjs.every   ⇝   18.39ms   @   1,631,364,837.89 op/s

Benchmark: code/every.js • Array<object>(5000)
  native         ⇝    45.38ms   @   3,305,641,679.15 op/s
  @arr/every     ⇝    89.53ms   @   1,675,439,659.66 op/s
  array-every    ⇝   179.23ms   @     836,934,485.74 op/s
  lodash.every   ⇝   134.63ms   @   1,114,131,049.98 op/s
  fastjs.every   ⇝    89.51ms   @   1,675,841,227.05 op/s

Benchmark: code/every.js • Array<object>(10000)
  native         ⇝    89.68ms   @   3,345,392,133.82 op/s
  @arr/every     ⇝   178.42ms   @   1,681,403,250.73 op/s
  array-every    ⇝   359.63ms   @     834,181,480.40 op/s
  lodash.every   ⇝   270.01ms   @   1,111,050,805.74 op/s
  fastjs.every   ⇝   179.48ms   @   1,671,501,000.43 op/s
```
</details>


## filter

<details>
<summary>:mag: ↝ Strings</summary>

```
Benchmark: code/filter.js • Array<string>(100)
  native               ⇝   40.67ms   @    73,772,183.73 op/s
  @arr/filter          ⇝   21.81ms   @   137,581,350.13 op/s
  @arr/filter.mutate   ⇝    5.38ms   @   557,252,906.63 op/s
  arr-filter           ⇝   17.84ms   @   168,179,968.71 op/s
  array-filter         ⇝   32.69ms   @    91,781,482.24 op/s
  lodash.filter        ⇝   28.38ms   @   105,707,299.17 op/s
  fastjs.filter        ⇝   25.86ms   @   116,027,133.49 op/s
  ramda.filter         ⇝   33.39ms   @    89,849,245.54 op/s

Benchmark: code/filter.js • Array<string>(500)
  native               ⇝    84.68ms   @     177,130,350.86 op/s
  @arr/filter          ⇝    96.67ms   @     155,165,384.27 op/s
  @arr/filter.mutate   ⇝    13.80ms   @   1,086,895,561.08 op/s
  arr-filter           ⇝    37.60ms   @     398,896,185.11 op/s
  array-filter         ⇝    86.32ms   @     173,770,867.68 op/s
  lodash.filter        ⇝   111.05ms   @     135,069,712.72 op/s
  fastjs.filter        ⇝    99.90ms   @     150,146,633.20 op/s
  ramda.filter         ⇝   109.63ms   @     136,818,826.38 op/s

Benchmark: code/filter.js • Array<string>(1000)
  native               ⇝   184.13ms   @     162,931,039.90 op/s
  @arr/filter          ⇝   196.54ms   @     152,640,707.13 op/s
  @arr/filter.mutate   ⇝    27.69ms   @   1,083,555,061.81 op/s
  arr-filter           ⇝    69.94ms   @     428,929,235.21 op/s
  array-filter         ⇝   180.31ms   @     166,380,474.69 op/s
  lodash.filter        ⇝   243.77ms   @     123,065,444.04 op/s
  fastjs.filter        ⇝   208.48ms   @     143,896,434.17 op/s
  ramda.filter         ⇝   225.00ms   @     133,331,428.77 op/s

Benchmark: code/filter.js • Array<string>(5000)
  native               ⇝     924.79ms   @     162,198,109.65 op/s
  @arr/filter          ⇝   1,011.55ms   @     148,287,959.90 op/s
  @arr/filter.mutate   ⇝     134.59ms   @   1,114,514,201.80 op/s
  arr-filter           ⇝     326.52ms   @     459,393,909.00 op/s
  array-filter         ⇝     924.83ms   @     162,191,527.77 op/s
  lodash.filter        ⇝   1,248.82ms   @     120,113,544.58 op/s
  fastjs.filter        ⇝   1,057.33ms   @     141,867,127.43 op/s
  ramda.filter         ⇝   1,133.73ms   @     132,306,882.43 op/s

Benchmark: code/filter.js • Array<string>(10000)
  native               ⇝   1,537.17ms   @     195,163,677.15 op/s
  @arr/filter          ⇝   1,754.76ms   @     170,964,015.99 op/s
  @arr/filter.mutate   ⇝     267.92ms   @   1,119,756,539.85 op/s
  arr-filter           ⇝     653.88ms   @     458,799,260.55 op/s
  array-filter         ⇝   1,544.35ms   @     194,256,713.37 op/s
  lodash.filter        ⇝   2,203.90ms   @     136,122,621.05 op/s
  fastjs.filter        ⇝   1,800.72ms   @     166,599,876.41 op/s
  ramda.filter         ⇝   1,951.61ms   @     153,719,611.63 op/s
```
</details>

<details>
<summary>:mag: ↝ Numbers</summary>

```
Benchmark: code/filter.js • Array<number>(100)
  native               ⇝   20.90ms   @   143,525,809.10 op/s
  @arr/filter          ⇝   19.97ms   @   150,217,537.53 op/s
  @arr/filter.mutate   ⇝    3.11ms   @   963,216,681.37 op/s
  arr-filter           ⇝    8.51ms   @   352,639,275.76 op/s
  array-filter         ⇝   19.02ms   @   157,726,210.54 op/s
  lodash.filter        ⇝   23.31ms   @   128,677,821.23 op/s
  fastjs.filter        ⇝   20.26ms   @   148,051,757.32 op/s
  ramda.filter         ⇝   26.66ms   @   112,520,315.54 op/s

Benchmark: code/filter.js • Array<number>(500)
  native               ⇝    89.96ms   @     166,746,306.56 op/s
  @arr/filter          ⇝    94.64ms   @     158,497,780.86 op/s
  @arr/filter.mutate   ⇝    13.79ms   @   1,087,902,208.33 op/s
  arr-filter           ⇝    38.61ms   @     388,520,614.52 op/s
  array-filter         ⇝    86.97ms   @     172,465,663.64 op/s
  lodash.filter        ⇝   112.93ms   @     132,819,923.53 op/s
  fastjs.filter        ⇝    97.82ms   @     153,336,220.48 op/s
  ramda.filter         ⇝   108.22ms   @     138,606,620.36 op/s

Benchmark: code/filter.js • Array<number>(1000)
  native               ⇝   179.42ms   @     167,210,097.63 op/s
  @arr/filter          ⇝   193.35ms   @     155,158,810.11 op/s
  @arr/filter.mutate   ⇝    27.11ms   @   1,106,521,791.49 op/s
  arr-filter           ⇝    65.87ms   @     455,449,141.55 op/s
  array-filter         ⇝   175.49ms   @     170,945,055.78 op/s
  lodash.filter        ⇝   238.62ms   @     125,725,316.16 op/s
  fastjs.filter        ⇝   202.42ms   @     148,208,032.24 op/s
  ramda.filter         ⇝   224.41ms   @     133,686,302.01 op/s

Benchmark: code/filter.js • Array<number>(5000)
  native               ⇝     924.87ms   @     162,184,158.54 op/s
  @arr/filter          ⇝   1,017.88ms   @     147,365,505.59 op/s
  @arr/filter.mutate   ⇝     133.76ms   @   1,121,374,604.31 op/s
  arr-filter           ⇝     328.64ms   @     456,429,230.65 op/s
  array-filter         ⇝     936.63ms   @     160,148,501.31 op/s
  lodash.filter        ⇝   1,271.12ms   @     118,006,266.75 op/s
  fastjs.filter        ⇝   1,099.44ms   @     136,433,621.97 op/s
  ramda.filter         ⇝   1,132.71ms   @     132,425,557.55 op/s

Benchmark: code/filter.js • Array<number>(10000)
  native               ⇝   1,527.07ms   @     196,455,115.18 op/s
  @arr/filter          ⇝   1,732.57ms   @     173,153,332.28 op/s
  @arr/filter.mutate   ⇝     268.00ms   @   1,119,421,860.70 op/s
  arr-filter           ⇝     659.73ms   @     454,728,944.56 op/s
  array-filter         ⇝   1,543.03ms   @     194,422,462.07 op/s
  lodash.filter        ⇝   2,173.07ms   @     138,053,656.22 op/s
  fastjs.filter        ⇝   1,813.16ms   @     165,457,432.15 op/s
  ramda.filter         ⇝   1,951.34ms   @     153,740,142.06 op/s
```
</details>

<details>
<summary>:mag: ↝ Objects</summary>

```
Benchmark: code/filter.js • Array<object>(100)
  native               ⇝   20.95ms   @   143,183,464.79 op/s
  @arr/filter          ⇝   19.61ms   @   152,974,863.94 op/s
  @arr/filter.mutate   ⇝    3.12ms   @   962,732,311.32 op/s
  arr-filter           ⇝    8.49ms   @   353,316,148.82 op/s
  array-filter         ⇝   19.23ms   @   155,998,460.61 op/s
  lodash.filter        ⇝   22.54ms   @   133,082,540.76 op/s
  fastjs.filter        ⇝   19.97ms   @   150,243,093.32 op/s
  ramda.filter         ⇝   25.87ms   @   115,955,612.04 op/s

Benchmark: code/filter.js • Array<object>(500)
  native               ⇝    85.53ms   @     175,378,984.05 op/s
  @arr/filter          ⇝    94.72ms   @     158,357,325.26 op/s
  @arr/filter.mutate   ⇝    14.00ms   @   1,071,732,101.27 op/s
  arr-filter           ⇝    38.32ms   @     391,446,650.60 op/s
  array-filter         ⇝    85.22ms   @     176,010,498.86 op/s
  lodash.filter        ⇝   112.29ms   @     133,585,245.42 op/s
  fastjs.filter        ⇝    98.46ms   @     152,353,615.02 op/s
  ramda.filter         ⇝   109.60ms   @     136,864,273.43 op/s

Benchmark: code/filter.js • Array<object>(1000)
  native               ⇝   181.15ms   @     165,613,064.87 op/s
  @arr/filter          ⇝   192.07ms   @     156,195,487.77 op/s
  @arr/filter.mutate   ⇝    27.13ms   @   1,105,859,751.77 op/s
  arr-filter           ⇝    68.89ms   @     435,472,390.65 op/s
  array-filter         ⇝   178.03ms   @     168,511,382.30 op/s
  lodash.filter        ⇝   237.77ms   @     126,172,496.30 op/s
  fastjs.filter        ⇝   204.45ms   @     146,737,863.94 op/s
  ramda.filter         ⇝   224.80ms   @     133,453,894.99 op/s

Benchmark: code/filter.js • Array<object>(5000)
  native               ⇝     917.85ms   @     163,426,278.56 op/s
  @arr/filter          ⇝   1,020.13ms   @     147,039,627.51 op/s
  @arr/filter.mutate   ⇝     134.24ms   @   1,117,382,432.43 op/s
  arr-filter           ⇝     324.17ms   @     462,722,177.48 op/s
  array-filter         ⇝     939.98ms   @     159,577,570.68 op/s
  lodash.filter        ⇝   1,264.48ms   @     118,625,986.98 op/s
  fastjs.filter        ⇝   1,074.83ms   @     139,556,795.44 op/s
  ramda.filter         ⇝   1,123.10ms   @     133,558,397.63 op/s

Benchmark: code/filter.js • Array<object>(10000)
  native               ⇝   1,517.37ms   @     197,710,426.01 op/s
  @arr/filter          ⇝   1,749.22ms   @     171,504,575.79 op/s
  @arr/filter.mutate   ⇝     267.51ms   @   1,121,459,473.94 op/s
  arr-filter           ⇝     651.42ms   @     460,529,774.51 op/s
  array-filter         ⇝   1,548.69ms   @     193,711,708.06 op/s
  lodash.filter        ⇝   2,176.71ms   @     137,822,671.20 op/s
  fastjs.filter        ⇝   1,811.77ms   @     165,584,231.05 op/s
  ramda.filter         ⇝   1,948.61ms   @     153,955,696.17 op/s
```
</details>


## find

<details>
<summary>:mag: ↝ Strings</summary>

```
Benchmark: code/find.js • Array<string>(100)
  native        ⇝    2.73ms   @   1,098,351,520.81 op/s
  @arr/find     ⇝    1.60ms   @   1,875,371,557.99 op/s
  lodash.find   ⇝   10.70ms   @     280,475,484.48 op/s
  ramda.find    ⇝   22.36ms   @     134,155,101.90 op/s

Benchmark: code/find.js • Array<string>(500)
  native        ⇝    0.28ms   @   53,010,276,925.69 op/s
  @arr/find     ⇝    0.27ms   @   54,784,514,243.97 op/s
  lodash.find   ⇝    1.15ms   @   13,045,679,010.20 op/s
  ramda.find    ⇝   12.55ms   @    1,195,161,984.29 op/s

Benchmark: code/find.js • Array<string>(1000)
  native        ⇝    0.29ms   @   103,171,136,842.76 op/s
  @arr/find     ⇝    0.27ms   @   109,575,831,954.50 op/s
  lodash.find   ⇝    1.20ms   @    25,059,516,351.33 op/s
  ramda.find    ⇝   11.71ms   @     2,561,442,604.47 op/s

Benchmark: code/find.js • Array<string>(5000)
  native        ⇝    0.29ms   @   516,838,601,641.48 op/s
  @arr/find     ⇝    0.27ms   @   547,853,146,138.00 op/s
  lodash.find   ⇝    1.51ms   @    99,117,785,629.37 op/s
  ramda.find    ⇝   12.17ms   @    12,326,388,974.49 op/s

Benchmark: code/find.js • Array<string>(10000)
  native        ⇝    0.30ms   @   996,989,092,939.32 op/s
  @arr/find     ⇝    0.32ms   @   933,195,635,132.95 op/s
  lodash.find   ⇝    1.17ms   @   256,694,595,038.61 op/s
  ramda.find    ⇝   11.53ms   @    26,030,328,108.82 op/s
```
</details>

<details>
<summary>:mag: ↝ Numbers</summary>

```
Benchmark: code/find.js • Array<number>(100)
  native        ⇝   14.55ms   @   206,201,439.56 op/s
  @arr/find     ⇝   11.53ms   @   260,117,125.54 op/s
  lodash.find   ⇝   18.91ms   @   158,662,018.01 op/s
  ramda.find    ⇝   22.02ms   @   136,251,674.65 op/s

Benchmark: code/find.js • Array<number>(500)
  native        ⇝   44.96ms   @   333,611,127.61 op/s
  @arr/find     ⇝   46.01ms   @   326,011,995.02 op/s
  lodash.find   ⇝   59.21ms   @   253,349,281.73 op/s
  ramda.find    ⇝   52.98ms   @   283,100,283.29 op/s

Benchmark: code/find.js • Array<number>(1000)
  native        ⇝    91.08ms   @   329,375,184.17 op/s
  @arr/find     ⇝    89.65ms   @   334,619,140.84 op/s
  lodash.find   ⇝   117.50ms   @   255,315,776.60 op/s
  ramda.find    ⇝    94.03ms   @   319,034,457.10 op/s

Benchmark: code/find.js • Array<number>(5000)
  native        ⇝   447.97ms   @   334,843,040.90 op/s
  @arr/find     ⇝   450.02ms   @   333,314,886.95 op/s
  lodash.find   ⇝   586.37ms   @   255,810,880.58 op/s
  ramda.find    ⇝   420.74ms   @   356,512,055.75 op/s

Benchmark: code/find.js • Array<number>(10000)
  native        ⇝     891.80ms   @   336,398,117.54 op/s
  @arr/find     ⇝     895.52ms   @   335,001,616.82 op/s
  lodash.find   ⇝   1,160.44ms   @   258,523,520.47 op/s
  ramda.find    ⇝     821.35ms   @   365,251,712.58 op/s
```
</details>

<details>
<summary>:mag: ↝ Objects</summary>

```
Benchmark: code/find.js • Array<object>(100)
  native        ⇝   76.90ms   @   39,012,895.21 op/s
  @arr/find     ⇝   71.28ms   @   42,089,451.70 op/s
  lodash.find   ⇝   75.39ms   @   39,794,521.78 op/s
  ramda.find    ⇝   85.96ms   @   34,900,682.26 op/s

Benchmark: code/find.js • Array<object>(500)
  native        ⇝   543.85ms   @   27,581,253.48 op/s
  @arr/find     ⇝   550.93ms   @   27,226,745.95 op/s
  lodash.find   ⇝   549.96ms   @   27,274,637.94 op/s
  ramda.find    ⇝   562.78ms   @   26,653,212.13 op/s

Benchmark: code/find.js • Array<object>(1000)
  native        ⇝   2,565.71ms   @   11,692,688.55 op/s
  @arr/find     ⇝   2,563.85ms   @   11,701,160.51 op/s
  lodash.find   ⇝   2,600.88ms   @   11,534,562.43 op/s
  ramda.find    ⇝   2,358.63ms   @   12,719,223.65 op/s

Benchmark: code/find.js • Array<object>(5000)
  native        ⇝   44,536.84ms   @   3,367,998.08 op/s
  @arr/find     ⇝   45,040.33ms   @   3,330,348.57 op/s
  lodash.find   ⇝   44,578.59ms   @   3,364,844.20 op/s
  ramda.find    ⇝   44,711.08ms   @   3,354,873.37 op/s

Benchmark: code/find.js • Array<object>(10000)
  native        ⇝   93,574.67ms   @   3,205,995.66 op/s
  @arr/find     ⇝   95,099.74ms   @   3,154,582.82 op/s
  lodash.find   ⇝   93,539.27ms   @   3,207,209.19 op/s
  ramda.find    ⇝   92,871.81ms   @   3,230,259.16 op/s
```
</details>


## findIndex

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/findIndex.js • Array<string>(100)
  native             ⇝    3.06ms   @     980,816,856.97 op/s
  @arr/findIndex     ⇝    1.66ms   @   1,806,250,711.21 op/s
  lodash.findindex   ⇝    6.75ms   @     444,257,987.72 op/s
  ramda.findIndex    ⇝   20.55ms   @     146,010,894.75 op/s

Benchmark: code/findIndex.js • Array<string>(500)
  native             ⇝    0.28ms   @   53,216,399,165.57 op/s
  @arr/findIndex     ⇝    0.23ms   @   66,005,438,848.16 op/s
  lodash.findindex   ⇝    0.34ms   @   43,547,558,288.41 op/s
  ramda.findIndex    ⇝   13.48ms   @    1,112,981,579.71 op/s

Benchmark: code/findIndex.js • Array<string>(1000)
  native             ⇝    0.27ms   @   109,515,030,938.00 op/s
  @arr/findIndex     ⇝    0.24ms   @   127,455,645,435.39 op/s
  lodash.findindex   ⇝    0.35ms   @    85,704,735,758.02 op/s
  ramda.findIndex    ⇝   12.62ms   @     2,377,850,418.47 op/s

Benchmark: code/findIndex.js • Array<string>(5000)
  native             ⇝    0.27ms   @   547,395,310,646.84 op/s
  @arr/findIndex     ⇝    0.23ms   @   653,065,489,407.28 op/s
  lodash.findindex   ⇝    0.36ms   @   413,347,258,543.20 op/s
  ramda.findIndex    ⇝   13.07ms   @    11,474,543,915.57 op/s

Benchmark: code/findIndex.js • Array<string>(10000)
  native             ⇝    0.28ms   @   1,065,182,039,610.57 op/s
  @arr/findIndex     ⇝    0.23ms   @   1,283,115,061,204.59 op/s
  lodash.findindex   ⇝    0.36ms   @     828,440,929,400.26 op/s
  ramda.findIndex    ⇝   12.36ms   @      24,280,800,661.02 op/s
```
</details>

<details>
<summary>:mag: ↝ Numbers</summary>

```
Benchmark: code/findIndex.js • Array<number>(100)
  native             ⇝   13.62ms   @   220,327,827.24 op/s
  @arr/findIndex     ⇝   11.67ms   @   257,117,857.94 op/s
  lodash.findindex   ⇝   12.34ms   @   243,158,039.35 op/s
  ramda.findIndex    ⇝   23.32ms   @   128,622,844.63 op/s

Benchmark: code/findIndex.js • Array<number>(500)
  native             ⇝   36.19ms   @   414,499,490.62 op/s
  @arr/findIndex     ⇝   45.05ms   @   332,991,292.08 op/s
  lodash.findindex   ⇝   40.91ms   @   366,629,804.89 op/s
  ramda.findIndex    ⇝   54.14ms   @   277,041,345.45 op/s

Benchmark: code/findIndex.js • Array<number>(1000)
  native             ⇝   71.90ms   @   417,259,343.00 op/s
  @arr/findIndex     ⇝   92.74ms   @   323,496,812.48 op/s
  lodash.findindex   ⇝   80.67ms   @   371,890,364.34 op/s
  ramda.findIndex    ⇝   95.63ms   @   313,706,954.83 op/s

Benchmark: code/findIndex.js • Array<number>(5000)
  native             ⇝   356.89ms   @   420,301,415.80 op/s
  @arr/findIndex     ⇝   446.68ms   @   335,814,240.14 op/s
  lodash.findindex   ⇝   402.21ms   @   372,936,534.69 op/s
  ramda.findIndex    ⇝   419.90ms   @   357,225,947.90 op/s

Benchmark: code/findIndex.js • Array<number>(10000)
  native             ⇝   713.53ms   @   420,445,398.08 op/s
  @arr/findIndex     ⇝   891.71ms   @   336,430,500.56 op/s
  lodash.findindex   ⇝   803.55ms   @   373,344,616.11 op/s
  ramda.findIndex    ⇝   822.51ms   @   364,737,017.05 op/s
```
</details>

<details>
<summary>:mag: ↝ Objects</summary>

```
Benchmark: code/findIndex.js • Array<object>(100)
  native             ⇝   78.00ms   @   38,463,490.24 op/s
  @arr/findIndex     ⇝   72.40ms   @   41,434,110.81 op/s
  lodash.findindex   ⇝   73.28ms   @   40,940,447.94 op/s
  ramda.findIndex    ⇝   86.61ms   @   34,639,863.94 op/s

Benchmark: code/findIndex.js • Array<object>(500)
  native             ⇝   592.44ms   @   25,318,940.11 op/s
  @arr/findIndex     ⇝   590.42ms   @   25,405,481.43 op/s
  lodash.findindex   ⇝   589.26ms   @   25,455,514.42 op/s
  ramda.findIndex    ⇝   614.74ms   @   24,400,613.37 op/s

Benchmark: code/findIndex.js • Array<object>(1000)
  native             ⇝   2,401.40ms   @   12,492,729.50 op/s
  @arr/findIndex     ⇝   2,434.19ms   @   12,324,443.13 op/s
  lodash.findindex   ⇝   2,168.35ms   @   13,835,436.57 op/s
  ramda.findIndex    ⇝   2,503.01ms   @   11,985,585.15 op/s

Benchmark: code/findIndex.js • Array<object>(5000)
  native             ⇝   42,624.73ms   @   3,519,084.07 op/s
  @arr/findIndex     ⇝   42,416.19ms   @   3,536,385.42 op/s
  lodash.findindex   ⇝   42,277.65ms   @   3,547,974.27 op/s
  ramda.findIndex    ⇝   42,951.78ms   @   3,492,288.68 op/s

Benchmark: code/findIndex.js • Array<object>(10000)
  native             ⇝   90,025.99ms   @   3,332,371.16 op/s
  @arr/findIndex     ⇝   88,851.88ms   @   3,376,405.73 op/s
  lodash.findindex   ⇝   91,029.64ms   @   3,295,629.79 op/s
  ramda.findIndex    ⇝   90,506.85ms   @   3,314,666.06 op/s
```
</details>


## flatten

<details>
<summary>:wavy_dash: ↝ Arrays</summary>

```
Benchmark: code/flatten.js • Array<array>(5)
  @arr/flatten         ⇝      85.05ms   @   1,763,669.01 op/s
  arr-flatten          ⇝      93.36ms   @   1,606,736.48 op/s
  array-flatten        ⇝      81.75ms   @   1,834,758.81 op/s
  flatten              ⇝   2,638.95ms   @      56,840.69 op/s
  flatten-array        ⇝      93.68ms   @   1,601,131.31 op/s
  lodash.flattendeep   ⇝     198.96ms   @     753,921.55 op/s
  ramda.flatten        ⇝   1,353.97ms   @     110,785.54 op/s

Benchmark: code/flatten.js • Array<array>(10)
  @arr/flatten         ⇝     221.75ms   @   1,352,870.27 op/s
  arr-flatten          ⇝     221.60ms   @   1,353,820.88 op/s
  array-flatten        ⇝     188.58ms   @   1,590,822.74 op/s
  flatten              ⇝   6,911.35ms   @      43,406.86 op/s
  flatten-array        ⇝     226.05ms   @   1,327,157.61 op/s
  lodash.flattendeep   ⇝     488.65ms   @     613,930.44 op/s
  ramda.flatten        ⇝   3,363.78ms   @      89,185.43 op/s

Benchmark: code/flatten.js • Array<array>(100)
  @arr/flatten         ⇝    1,875.79ms   @   1,599,324.20 op/s
  arr-flatten          ⇝    1,984.97ms   @   1,511,357.40 op/s
  array-flatten        ⇝    1,672.00ms   @   1,794,256.14 op/s
  flatten              ⇝   80,742.06ms   @      37,155.35 op/s
  flatten-array        ⇝    1,777.38ms   @   1,687,879.40 op/s
  lodash.flattendeep   ⇝    3,704.82ms   @     809,755.87 op/s
  ramda.flatten        ⇝   27,375.45ms   @     109,587.24 op/s

Benchmark: code/flatten.js • Array<array>(500)
  @arr/flatten         ⇝     9,471.80ms   @   1,583,648.56 op/s
  arr-flatten          ⇝    10,165.86ms   @   1,475,526.92 op/s
  array-flatten        ⇝     9,346.85ms   @   1,604,818.30 op/s
  flatten              ⇝   947,453.81ms   @      15,831.91 op/s
  flatten-array        ⇝    10,088.49ms   @   1,486,842.78 op/s
  lodash.flattendeep   ⇝    18,516.13ms   @     810,104.53 op/s
  ramda.flatten        ⇝   135,704.14ms   @     110,534.58 op/s
```
</details>


## forEach

<details>
<summary>:no_entry_sign: ↝ Strings</summary>

```
Benchmark: code/forEach.js • Array<string>(100)
  native           ⇝   13.29ms   @   225,660,536.60 op/s
  @arr/forEach     ⇝    4.40ms   @   681,697,800.18 op/s
  fastjs.forEach   ⇝    8.76ms   @   342,500,433.55 op/s
  lodash.foreach   ⇝    8.63ms   @   347,650,588.91 op/s
  ramda.forEach    ⇝    9.48ms   @   316,449,420.62 op/s

Benchmark: code/forEach.js • Array<string>(500)
  native           ⇝    8.00ms   @   1,874,369,274.74 op/s
  @arr/forEach     ⇝    9.45ms   @   1,586,909,645.81 op/s
  fastjs.forEach   ⇝    9.62ms   @   1,559,673,741.21 op/s
  lodash.foreach   ⇝   22.99ms   @     652,527,412.68 op/s
  ramda.forEach    ⇝   15.52ms   @     966,228,634.43 op/s

Benchmark: code/forEach.js • Array<string>(1000)
  native           ⇝   15.41ms   @   1,946,787,294.80 op/s
  @arr/forEach     ⇝   18.30ms   @   1,639,421,395.73 op/s
  fastjs.forEach   ⇝   18.64ms   @   1,609,633,160.85 op/s
  lodash.foreach   ⇝   45.18ms   @     664,032,111.88 op/s
  ramda.forEach    ⇝   15.83ms   @   1,895,687,040.27 op/s

Benchmark: code/forEach.js • Array<string>(5000)
  native           ⇝    74.87ms   @   2,003,577,293.76 op/s
  @arr/forEach     ⇝    92.84ms   @   1,615,604,098.93 op/s
  fastjs.forEach   ⇝    89.88ms   @   1,668,954,562.30 op/s
  lodash.foreach   ⇝   223.63ms   @     670,745,055.96 op/s
  ramda.forEach    ⇝    75.20ms   @   1,994,599,316.51 op/s

Benchmark: code/forEach.js • Array<string>(10000)
  native           ⇝   148.79ms   @   2,016,230,304.47 op/s
  @arr/forEach     ⇝   178.54ms   @   1,680,274,707.44 op/s
  fastjs.forEach   ⇝   178.69ms   @   1,678,913,970.99 op/s
  lodash.foreach   ⇝   449.05ms   @     668,070,380.52 op/s
  ramda.forEach    ⇝   149.22ms   @   2,010,476,647.42 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Numbers</summary>

```
Benchmark: code/forEach.js • Array<number>(100)
  native           ⇝   2.04ms   @   1,469,373,841.03 op/s
  @arr/forEach     ⇝   2.28ms   @   1,317,942,112.47 op/s
  fastjs.forEach   ⇝   2.50ms   @   1,198,790,659.98 op/s
  lodash.foreach   ⇝   5.19ms   @     578,196,109.09 op/s
  ramda.forEach    ⇝   2.40ms   @   1,247,853,172.60 op/s

Benchmark: code/forEach.js • Array<number>(500)
  native           ⇝    8.08ms   @   1,857,447,124.67 op/s
  @arr/forEach     ⇝    9.41ms   @   1,594,518,597.83 op/s
  fastjs.forEach   ⇝    9.58ms   @   1,565,797,308.16 op/s
  lodash.foreach   ⇝   23.16ms   @     647,599,411.58 op/s
  ramda.forEach    ⇝    8.38ms   @   1,790,865,796.46 op/s

Benchmark: code/forEach.js • Array<number>(1000)
  native           ⇝   15.36ms   @   1,953,157,298.30 op/s
  @arr/forEach     ⇝   18.23ms   @   1,645,364,046.94 op/s
  fastjs.forEach   ⇝   18.48ms   @   1,623,674,033.37 op/s
  lodash.foreach   ⇝   45.44ms   @     660,229,269.90 op/s
  ramda.forEach    ⇝   17.42ms   @   1,721,678,404.59 op/s

Benchmark: code/forEach.js • Array<number>(5000)
  native           ⇝    74.87ms   @   2,003,465,969.41 op/s
  @arr/forEach     ⇝    89.80ms   @   1,670,385,241.17 op/s
  fastjs.forEach   ⇝    89.74ms   @   1,671,492,711.86 op/s
  lodash.foreach   ⇝   222.97ms   @     672,726,877.41 op/s
  ramda.forEach    ⇝    75.26ms   @   1,993,102,351.11 op/s

Benchmark: code/forEach.js • Array<number>(10000)
  native           ⇝   148.83ms   @   2,015,679,595.31 op/s
  @arr/forEach     ⇝   178.96ms   @   1,676,316,428.75 op/s
  fastjs.forEach   ⇝   178.72ms   @   1,678,600,189.79 op/s
  lodash.foreach   ⇝   446.39ms   @     672,057,275.41 op/s
  ramda.forEach    ⇝   149.39ms   @   2,008,165,441.67 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Objects</summary>

```
Benchmark: code/forEach.js • Array<object>(100)
  native           ⇝   2.03ms   @   1,478,603,862.80 op/s
  @arr/forEach     ⇝   2.27ms   @   1,319,616,941.59 op/s
  fastjs.forEach   ⇝   2.48ms   @   1,210,891,728.92 op/s
  lodash.foreach   ⇝   5.18ms   @     579,706,896.33 op/s
  ramda.forEach    ⇝   2.41ms   @   1,244,358,906.29 op/s

Benchmark: code/forEach.js • Array<object>(500)
  native           ⇝    8.10ms   @   1,851,139,734.39 op/s
  @arr/forEach     ⇝    9.37ms   @   1,601,156,419.21 op/s
  fastjs.forEach   ⇝    9.62ms   @   1,559,921,579.62 op/s
  lodash.foreach   ⇝   22.98ms   @     652,791,453.76 op/s
  ramda.forEach    ⇝    8.36ms   @   1,794,716,712.94 op/s

Benchmark: code/forEach.js • Array<object>(1000)
  native           ⇝   15.37ms   @   1,952,382,941.95 op/s
  @arr/forEach     ⇝   18.26ms   @   1,642,520,070.36 op/s
  fastjs.forEach   ⇝   18.46ms   @   1,625,513,540.37 op/s
  lodash.foreach   ⇝   45.38ms   @     661,026,436.56 op/s
  ramda.forEach    ⇝   16.96ms   @   1,768,944,481.44 op/s

Benchmark: code/forEach.js • Array<object>(5000)
  native           ⇝    74.72ms   @   2,007,374,075.28 op/s
  @arr/forEach     ⇝    89.39ms   @   1,677,972,115.66 op/s
  fastjs.forEach   ⇝    90.01ms   @   1,666,456,711.64 op/s
  lodash.foreach   ⇝   223.62ms   @     670,784,202.45 op/s
  ramda.forEach    ⇝    74.99ms   @   2,000,148,357.67 op/s

Benchmark: code/forEach.js • Array<object>(10000)
  native           ⇝   148.90ms   @   2,014,818,817.79 op/s
  @arr/forEach     ⇝   178.27ms   @   1,682,821,170.26 op/s
  fastjs.forEach   ⇝   179.11ms   @   1,674,933,075.54 op/s
  lodash.foreach   ⇝   448.32ms   @     669,166,946.51 op/s
  ramda.forEach    ⇝   149.44ms   @   2,007,449,229.22 op/s
```
</details>


## includes

<details>
<summary>:no_entry_sign: ↝ Strings</summary>

```
Benchmark: code/includes.js • Array<string>(100)
  native          ⇝    7.04ms   @   426,291,681.56 op/s
  @arr/includes   ⇝   15.42ms   @   194,508,304.40 op/s

Benchmark: code/includes.js • Array<string>(500)
  native          ⇝   40.68ms   @   368,721,801.54 op/s
  @arr/includes   ⇝   45.67ms   @   328,468,575.05 op/s

Benchmark: code/includes.js • Array<string>(1000)
  native          ⇝   80.94ms   @   370,666,871.83 op/s
  @arr/includes   ⇝   89.83ms   @   333,982,431.90 op/s

Benchmark: code/includes.js • Array<string>(5000)
  native          ⇝   402.00ms   @   373,130,546.00 op/s
  @arr/includes   ⇝   451.34ms   @   332,343,600.80 op/s

Benchmark: code/includes.js • Array<string>(10000)
  native          ⇝   805.00ms   @   372,669,773.70 op/s
  @arr/includes   ⇝   893.92ms   @   335,601,488.91 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Numbers</summary>

```
Benchmark: code/includes.js • Array<number>(100)
  native          ⇝    3.66ms   @   820,183,289.09 op/s
  @arr/includes   ⇝   12.43ms   @   241,382,795.14 op/s

Benchmark: code/includes.js • Array<number>(500)
  native          ⇝   14.41ms   @   1,040,764,092.92 op/s
  @arr/includes   ⇝   49.93ms   @     300,412,364.04 op/s

Benchmark: code/includes.js • Array<number>(1000)
  native          ⇝   27.66ms   @   1,084,456,339.08 op/s
  @arr/includes   ⇝   98.85ms   @     303,482,421.33 op/s

Benchmark: code/includes.js • Array<number>(5000)
  native          ⇝   134.30ms   @   1,116,940,606.15 op/s
  @arr/includes   ⇝   491.02ms   @     305,486,523.92 op/s

Benchmark: code/includes.js • Array<number>(10000)
  native          ⇝   268.60ms   @   1,116,883,670.59 op/s
  @arr/includes   ⇝   981.25ms   @     305,732,514.61 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Objects</summary>

```
Benchmark: code/includes.js • Array<object>(100)
  native          ⇝    7.76ms   @   386,815,023.12 op/s
  @arr/includes   ⇝   16.60ms   @   180,679,702.59 op/s

Benchmark: code/includes.js • Array<object>(500)
  native          ⇝   36.44ms   @   411,680,020.88 op/s
  @arr/includes   ⇝   81.48ms   @   184,099,351.30 op/s

Benchmark: code/includes.js • Array<object>(1000)
  native          ⇝    72.16ms   @   415,740,345.21 op/s
  @arr/includes   ⇝   160.71ms   @   186,674,880.69 op/s

Benchmark: code/includes.js • Array<object>(5000)
  native          ⇝   652.49ms   @   229,888,256.53 op/s
  @arr/includes   ⇝   974.97ms   @   153,850,691.89 op/s

Benchmark: code/includes.js • Array<object>(10000)
  native          ⇝   2,128.97ms   @   140,913,014.84 op/s
  @arr/includes   ⇝   3,299.77ms   @    90,915,481.96 op/s
```
</details>


## map

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/map.js • Array<string>(100)
  native       ⇝   28.82ms   @   104,102,654.38 op/s
  @arr/map     ⇝   11.29ms   @   265,821,401.87 op/s
  arr-map      ⇝   20.04ms   @   149,702,727.81 op/s
  array-map    ⇝   24.15ms   @   124,226,184.74 op/s
  fastjs.map   ⇝   14.96ms   @   200,567,673.37 op/s
  lodash.map   ⇝   15.83ms   @   189,564,283.97 op/s
  ramda.map    ⇝   22.68ms   @   132,254,122.06 op/s

Benchmark: code/map.js • Array<string>(500)
  native       ⇝   71.72ms   @   209,155,424.54 op/s
  @arr/map     ⇝   44.31ms   @   338,506,051.83 op/s
  arr-map      ⇝   44.81ms   @   334,725,732.88 op/s
  array-map    ⇝   70.77ms   @   211,940,522.76 op/s
  fastjs.map   ⇝   46.06ms   @   325,681,468.93 op/s
  lodash.map   ⇝   48.02ms   @   312,398,021.57 op/s
  ramda.map    ⇝   50.08ms   @   299,533,434.74 op/s

Benchmark: code/map.js • Array<string>(1000)
  native       ⇝   144.80ms   @   207,186,273.87 op/s
  @arr/map     ⇝    88.72ms   @   338,150,291.75 op/s
  arr-map      ⇝    94.57ms   @   317,238,475.45 op/s
  array-map    ⇝   143.70ms   @   208,769,069.18 op/s
  fastjs.map   ⇝    88.02ms   @   340,849,984.42 op/s
  lodash.map   ⇝    98.17ms   @   305,606,737.61 op/s
  ramda.map    ⇝    93.99ms   @   319,181,740.58 op/s

Benchmark: code/map.js • Array<string>(5000)
  native       ⇝   718.70ms   @   208,708,750.52 op/s
  @arr/map     ⇝   443.30ms   @   338,368,511.69 op/s
  arr-map      ⇝   451.19ms   @   332,456,822.00 op/s
  array-map    ⇝   725.20ms   @   206,839,197.35 op/s
  fastjs.map   ⇝   449.80ms   @   333,482,294.69 op/s
  lodash.map   ⇝   492.96ms   @   304,281,748.09 op/s
  ramda.map    ⇝   456.24ms   @   328,773,778.03 op/s

Benchmark: code/map.js • Array<string>(10000)
  native       ⇝   1,452.87ms   @   206,488,098.47 op/s
  @arr/map     ⇝     869.49ms   @   345,031,618.87 op/s
  arr-map      ⇝     898.99ms   @   333,707,934.95 op/s
  array-map    ⇝   1,437.29ms   @   208,725,801.62 op/s
  fastjs.map   ⇝     900.78ms   @   333,042,903.64 op/s
  lodash.map   ⇝     979.44ms   @   306,297,813.85 op/s
  ramda.map    ⇝     891.31ms   @   336,583,488.59 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/map.js • Array<number>(100)
  native       ⇝    9.42ms   @   318,417,220.17 op/s
  @arr/map     ⇝    9.10ms   @   329,816,608.77 op/s
  arr-map      ⇝   10.57ms   @   283,800,926.89 op/s
  array-map    ⇝    9.44ms   @   317,664,227.64 op/s
  fastjs.map   ⇝    9.41ms   @   318,794,429.98 op/s
  lodash.map   ⇝    9.70ms   @   309,143,092.44 op/s
  ramda.map    ⇝   14.10ms   @   212,825,427.81 op/s

Benchmark: code/map.js • Array<number>(500)
  native       ⇝   47.25ms   @   317,454,808.19 op/s
  @arr/map     ⇝   41.75ms   @   359,272,470.37 op/s
  arr-map      ⇝   44.23ms   @   339,165,832.49 op/s
  array-map    ⇝   46.79ms   @   320,614,834.95 op/s
  fastjs.map   ⇝   43.05ms   @   348,466,902.44 op/s
  lodash.map   ⇝   46.66ms   @   321,447,084.48 op/s
  ramda.map    ⇝   48.48ms   @   309,385,519.11 op/s

Benchmark: code/map.js • Array<number>(1000)
  native       ⇝   94.52ms   @   317,407,725.18 op/s
  @arr/map     ⇝   85.98ms   @   348,904,771.06 op/s
  arr-map      ⇝   88.41ms   @   339,320,016.71 op/s
  array-map    ⇝   96.68ms   @   310,289,157.43 op/s
  fastjs.map   ⇝   85.59ms   @   350,512,930.11 op/s
  lodash.map   ⇝   94.21ms   @   318,431,891.91 op/s
  ramda.map    ⇝   91.85ms   @   326,621,721.49 op/s

Benchmark: code/map.js • Array<number>(5000)
  native       ⇝   479.87ms   @   312,586,619.05 op/s
  @arr/map     ⇝   435.27ms   @   344,616,650.71 op/s
  arr-map      ⇝   434.16ms   @   345,495,633.39 op/s
  array-map    ⇝   479.86ms   @   312,594,253.68 op/s
  fastjs.map   ⇝   438.23ms   @   342,284,327.88 op/s
  lodash.map   ⇝   487.87ms   @   307,456,047.74 op/s
  ramda.map    ⇝   440.11ms   @   340,825,721.84 op/s

Benchmark: code/map.js • Array<number>(10000)
  native       ⇝   964.03ms   @   311,192,332.22 op/s
  @arr/map     ⇝   869.77ms   @   344,918,019.75 op/s
  arr-map      ⇝   877.51ms   @   341,875,997.81 op/s
  array-map    ⇝   959.17ms   @   312,769,933.81 op/s
  fastjs.map   ⇝   867.28ms   @   345,908,605.87 op/s
  lodash.map   ⇝   957.07ms   @   313,456,105.45 op/s
  ramda.map    ⇝   886.63ms   @   338,360,885.47 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/map.js • Array<object>(100)
  native       ⇝   14.30ms   @   209,838,516.67 op/s
  @arr/map     ⇝    9.23ms   @   325,011,134.34 op/s
  arr-map      ⇝   10.37ms   @   289,295,795.21 op/s
  array-map    ⇝   13.63ms   @   220,140,621.43 op/s
  fastjs.map   ⇝    9.05ms   @   331,542,304.96 op/s
  lodash.map   ⇝    9.55ms   @   314,245,700.33 op/s
  ramda.map    ⇝   13.92ms   @   215,528,373.92 op/s

Benchmark: code/map.js • Array<object>(500)
  native       ⇝   69.52ms   @   215,765,008.43 op/s
  @arr/map     ⇝   42.46ms   @   353,244,193.50 op/s
  arr-map      ⇝   43.91ms   @   341,597,417.47 op/s
  array-map    ⇝   69.81ms   @   214,854,858.67 op/s
  fastjs.map   ⇝   42.29ms   @   354,684,521.83 op/s
  lodash.map   ⇝   47.31ms   @   317,039,811.96 op/s
  ramda.map    ⇝   48.04ms   @   312,259,410.63 op/s

Benchmark: code/map.js • Array<object>(1000)
  native       ⇝   141.85ms   @   211,493,857.89 op/s
  @arr/map     ⇝    86.19ms   @   348,084,811.84 op/s
  arr-map      ⇝    87.25ms   @   343,855,372.69 op/s
  array-map    ⇝   139.82ms   @   214,559,598.08 op/s
  fastjs.map   ⇝    86.73ms   @   345,882,827.00 op/s
  lodash.map   ⇝    95.47ms   @   314,245,453.46 op/s
  ramda.map    ⇝    92.49ms   @   324,362,164.24 op/s

Benchmark: code/map.js • Array<object>(5000)
  native       ⇝   710.10ms   @   211,238,605.85 op/s
  @arr/map     ⇝   441.13ms   @   340,034,626.95 op/s
  arr-map      ⇝   438.91ms   @   341,754,927.36 op/s
  array-map    ⇝   704.99ms   @   212,767,667.74 op/s
  fastjs.map   ⇝   431.52ms   @   347,610,608.68 op/s
  lodash.map   ⇝   482.56ms   @   310,842,110.65 op/s
  ramda.map    ⇝   443.74ms   @   338,033,688.01 op/s

Benchmark: code/map.js • Array<object>(10000)
  native       ⇝   1,429.47ms   @   209,868,096.39 op/s
  @arr/map     ⇝     874.88ms   @   342,902,511.41 op/s
  arr-map      ⇝     879.83ms   @   340,974,181.72 op/s
  array-map    ⇝   1,429.00ms   @   209,936,338.84 op/s
  fastjs.map   ⇝     881.01ms   @   340,516,432.51 op/s
  lodash.map   ⇝     976.71ms   @   307,153,894.01 op/s
  ramda.map    ⇝     885.50ms   @   338,790,952.55 op/s
```
</details>


## reduce

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/reduce.js • Array<string>(100)
  native          ⇝   12.63ms   @   237,442,384.61 op/s
  @arr/reduce     ⇝    4.57ms   @   657,092,536.37 op/s
  arr-reduce      ⇝    8.64ms   @   347,183,204.29 op/s
  fastjs.reduce   ⇝    5.15ms   @   582,389,474.13 op/s
  lodash.reduce   ⇝   17.28ms   @   173,647,177.07 op/s
  ramda.reduce    ⇝   15.95ms   @   188,033,191.62 op/s

Benchmark: code/reduce.js • Array<string>(500)
  native          ⇝   18.20ms   @     823,981,147.31 op/s
  @arr/reduce     ⇝    7.98ms   @   1,880,630,608.04 op/s
  arr-reduce      ⇝    8.03ms   @   1,868,075,045.81 op/s
  fastjs.reduce   ⇝    9.62ms   @   1,559,755,642.44 op/s
  lodash.reduce   ⇝   14.20ms   @   1,055,978,326.26 op/s
  ramda.reduce    ⇝   16.94ms   @     885,383,452.49 op/s

Benchmark: code/reduce.js • Array<string>(1000)
  native          ⇝   36.06ms   @     831,963,690.00 op/s
  @arr/reduce     ⇝   15.44ms   @   1,943,237,765.76 op/s
  arr-reduce      ⇝   15.44ms   @   1,942,878,088.93 op/s
  fastjs.reduce   ⇝   18.81ms   @   1,594,622,761.95 op/s
  lodash.reduce   ⇝   27.60ms   @   1,086,763,818.04 op/s
  ramda.reduce    ⇝   23.64ms   @   1,269,233,703.11 op/s

Benchmark: code/reduce.js • Array<string>(5000)
  native          ⇝   178.20ms   @     841,738,702.20 op/s
  @arr/reduce     ⇝    74.70ms   @   2,008,062,988.71 op/s
  arr-reduce      ⇝    78.49ms   @   1,911,132,979.00 op/s
  fastjs.reduce   ⇝    90.02ms   @   1,666,388,879.64 op/s
  lodash.reduce   ⇝   136.33ms   @   1,100,301,835.53 op/s
  ramda.reduce    ⇝    97.85ms   @   1,533,015,026.95 op/s

Benchmark: code/reduce.js • Array<string>(10000)
  native          ⇝   356.83ms   @     840,727,767.58 op/s
  @arr/reduce     ⇝   148.74ms   @   2,016,926,233.20 op/s
  arr-reduce      ⇝   148.69ms   @   2,017,627,893.85 op/s
  fastjs.reduce   ⇝   178.44ms   @   1,681,224,727.83 op/s
  lodash.reduce   ⇝   268.06ms   @   1,119,169,446.15 op/s
  ramda.reduce    ⇝   187.10ms   @   1,603,463,138.31 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/reduce.js • Array<number>(100)
  native          ⇝   3.99ms   @     752,459,224.86 op/s
  @arr/reduce     ⇝   2.08ms   @   1,439,171,958.02 op/s
  arr-reduce      ⇝   2.10ms   @   1,426,021,566.20 op/s
  fastjs.reduce   ⇝   2.58ms   @   1,160,877,948.78 op/s
  lodash.reduce   ⇝   3.71ms   @     809,654,536.60 op/s
  ramda.reduce    ⇝   7.71ms   @     389,155,835.38 op/s

Benchmark: code/reduce.js • Array<number>(500)
  native          ⇝   18.22ms   @     823,156,828.39 op/s
  @arr/reduce     ⇝    8.19ms   @   1,832,151,697.27 op/s
  arr-reduce      ⇝    8.03ms   @   1,867,356,210.77 op/s
  fastjs.reduce   ⇝    9.62ms   @   1,559,997,179.53 op/s
  lodash.reduce   ⇝   15.49ms   @     968,267,611.09 op/s
  ramda.reduce    ⇝   14.77ms   @   1,015,241,962.96 op/s

Benchmark: code/reduce.js • Array<number>(1000)
  native          ⇝   36.01ms   @     833,013,039.82 op/s
  @arr/reduce     ⇝   15.44ms   @   1,943,250,730.71 op/s
  arr-reduce      ⇝   15.44ms   @   1,943,487,276.96 op/s
  fastjs.reduce   ⇝   18.49ms   @   1,622,864,209.27 op/s
  lodash.reduce   ⇝   27.53ms   @   1,089,732,021.82 op/s
  ramda.reduce    ⇝   24.90ms   @   1,205,040,781.99 op/s

Benchmark: code/reduce.js • Array<number>(5000)
  native          ⇝   178.27ms   @     841,438,428.22 op/s
  @arr/reduce     ⇝    75.14ms   @   1,996,159,920.62 op/s
  arr-reduce      ⇝    74.67ms   @   2,008,789,713.84 op/s
  fastjs.reduce   ⇝    89.84ms   @   1,669,720,139.54 op/s
  lodash.reduce   ⇝   134.56ms   @   1,114,764,259.65 op/s
  ramda.reduce    ⇝    96.46ms   @   1,555,061,509.06 op/s

Benchmark: code/reduce.js • Array<number>(10000)
  native          ⇝   357.14ms   @     840,014,535.95 op/s
  @arr/reduce     ⇝   148.95ms   @   2,014,057,395.56 op/s
  arr-reduce      ⇝   148.71ms   @   2,017,399,967.12 op/s
  fastjs.reduce   ⇝   178.39ms   @   1,681,701,338.23 op/s
  lodash.reduce   ⇝   269.81ms   @   1,111,892,264.84 op/s
  ramda.reduce    ⇝   185.01ms   @   1,621,495,837.37 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/reduce.js • Array<object>(100)
  native          ⇝   3.98ms   @     753,686,279.59 op/s
  @arr/reduce     ⇝   2.08ms   @   1,440,089,400.75 op/s
  arr-reduce      ⇝   2.10ms   @   1,428,953,843.84 op/s
  fastjs.reduce   ⇝   2.55ms   @   1,177,718,045.66 op/s
  lodash.reduce   ⇝   3.51ms   @     854,217,528.20 op/s
  ramda.reduce    ⇝   9.04ms   @     331,719,517.88 op/s

Benchmark: code/reduce.js • Array<object>(500)
  native          ⇝   18.43ms   @     814,066,593.14 op/s
  @arr/reduce     ⇝    7.98ms   @   1,880,271,340.70 op/s
  arr-reduce      ⇝    8.04ms   @   1,865,404,823.94 op/s
  fastjs.reduce   ⇝    9.61ms   @   1,560,525,447.64 op/s
  lodash.reduce   ⇝   14.20ms   @   1,056,259,403.79 op/s
  ramda.reduce    ⇝   14.72ms   @   1,018,933,620.75 op/s

Benchmark: code/reduce.js • Array<object>(1000)
  native          ⇝   36.00ms   @     833,354,421.83 op/s
  @arr/reduce     ⇝   15.42ms   @   1,946,011,794.78 op/s
  arr-reduce      ⇝   15.40ms   @   1,947,530,793.87 op/s
  fastjs.reduce   ⇝   18.49ms   @   1,622,804,865.67 op/s
  lodash.reduce   ⇝   27.55ms   @   1,088,922,026.00 op/s
  ramda.reduce    ⇝   24.90ms   @   1,204,756,958.76 op/s

Benchmark: code/reduce.js • Array<object>(5000)
  native          ⇝   178.18ms   @     841,850,895.40 op/s
  @arr/reduce     ⇝    74.75ms   @   2,006,672,748.76 op/s
  arr-reduce      ⇝    74.60ms   @   2,010,658,204.24 op/s
  fastjs.reduce   ⇝    90.36ms   @   1,659,986,401.83 op/s
  lodash.reduce   ⇝   135.13ms   @   1,110,017,242.56 op/s
  ramda.reduce    ⇝    97.11ms   @   1,544,688,979.81 op/s

Benchmark: code/reduce.js • Array<object>(10000)
  native          ⇝   356.57ms   @     841,344,989.58 op/s
  @arr/reduce     ⇝   149.14ms   @   2,011,521,701.28 op/s
  arr-reduce      ⇝   148.67ms   @   2,017,916,515.73 op/s
  fastjs.reduce   ⇝   178.63ms   @   1,679,481,173.33 op/s
  lodash.reduce   ⇝   268.57ms   @   1,117,014,541.24 op/s
  ramda.reduce    ⇝   185.10ms   @   1,620,702,893.33 op/s
```
</details>


## reduceRight

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/reduceRight.js • Array<string>(100)
  native               ⇝   44.92ms   @    66,786,893.46 op/s
  @arr/reduceRight     ⇝    5.15ms   @   582,624,279.59 op/s
  fastjs.reduceRight   ⇝    9.79ms   @   306,499,568.55 op/s
  lodash.reduceright   ⇝    9.19ms   @   326,407,545.50 op/s
  ramda.reduceRight    ⇝   17.85ms   @   168,055,062.91 op/s

Benchmark: code/reduceRight.js • Array<string>(500)
  native               ⇝   22.66ms   @     661,977,921.18 op/s
  @arr/reduceRight     ⇝   17.11ms   @     876,619,693.68 op/s
  fastjs.reduceRight   ⇝   14.00ms   @   1,071,241,410.25 op/s
  lodash.reduceright   ⇝   18.62ms   @     805,523,095.96 op/s
  ramda.reduceRight    ⇝   14.75ms   @   1,017,170,102.58 op/s

Benchmark: code/reduceRight.js • Array<string>(1000)
  native               ⇝   44.88ms   @     668,402,776.04 op/s
  @arr/reduceRight     ⇝   27.37ms   @   1,095,909,666.94 op/s
  fastjs.reduceRight   ⇝   27.30ms   @   1,098,953,510.53 op/s
  lodash.reduceright   ⇝   36.47ms   @     822,571,606.16 op/s
  ramda.reduceRight    ⇝   28.10ms   @   1,067,448,133.58 op/s

Benchmark: code/reduceRight.js • Array<string>(5000)
  native               ⇝   223.63ms   @     670,763,337.35 op/s
  @arr/reduceRight     ⇝   134.17ms   @   1,118,015,486.14 op/s
  fastjs.reduceRight   ⇝   134.39ms   @   1,116,174,849.15 op/s
  lodash.reduceright   ⇝   178.98ms   @     838,094,262.82 op/s
  ramda.reduceRight    ⇝   137.33ms   @   1,092,254,422.67 op/s

Benchmark: code/reduceRight.js • Array<string>(10000)
  native               ⇝   445.74ms   @     673,035,054.47 op/s
  @arr/reduceRight     ⇝   267.88ms   @   1,119,896,934.84 op/s
  fastjs.reduceRight   ⇝   269.51ms   @   1,113,135,946.63 op/s
  lodash.reduceright   ⇝   357.38ms   @     839,448,007.87 op/s
  ramda.reduceRight    ⇝   268.87ms   @   1,115,766,875.69 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/reduceRight.js • Array<number>(100)
  native               ⇝   4.86ms   @   617,543,674.75 op/s
  @arr/reduceRight     ⇝   3.16ms   @   948,002,385.17 op/s
  fastjs.reduceRight   ⇝   3.30ms   @   908,905,272.07 op/s
  lodash.reduceright   ⇝   4.46ms   @   672,285,328.65 op/s
  ramda.reduceRight    ⇝   4.11ms   @   729,917,417.14 op/s

Benchmark: code/reduceRight.js • Array<number>(500)
  native               ⇝   22.86ms   @     656,296,769.35 op/s
  @arr/reduceRight     ⇝   13.78ms   @   1,088,820,219.01 op/s
  fastjs.reduceRight   ⇝   13.97ms   @   1,073,592,781.10 op/s
  lodash.reduceright   ⇝   18.67ms   @     803,364,791.67 op/s
  ramda.reduceRight    ⇝   14.71ms   @   1,019,483,900.55 op/s

Benchmark: code/reduceRight.js • Array<number>(1000)
  native               ⇝   44.83ms   @     669,235,549.63 op/s
  @arr/reduceRight     ⇝   27.14ms   @   1,105,489,940.43 op/s
  fastjs.reduceRight   ⇝   27.26ms   @   1,100,572,315.95 op/s
  lodash.reduceright   ⇝   36.44ms   @     823,279,060.67 op/s
  ramda.reduceRight    ⇝   29.63ms   @   1,012,601,624.70 op/s

Benchmark: code/reduceRight.js • Array<number>(5000)
  native               ⇝   223.23ms   @     671,958,681.74 op/s
  @arr/reduceRight     ⇝   134.40ms   @   1,116,090,511.73 op/s
  fastjs.reduceRight   ⇝   133.89ms   @   1,120,329,405.53 op/s
  lodash.reduceright   ⇝   178.85ms   @     838,705,170.06 op/s
  ramda.reduceRight    ⇝   135.50ms   @   1,107,008,463.94 op/s

Benchmark: code/reduceRight.js • Array<number>(10000)
  native               ⇝   445.67ms   @     673,139,620.64 op/s
  @arr/reduceRight     ⇝   267.42ms   @   1,121,819,937.76 op/s
  fastjs.reduceRight   ⇝   267.26ms   @   1,122,519,765.92 op/s
  lodash.reduceright   ⇝   358.15ms   @     837,639,776.71 op/s
  ramda.reduceRight    ⇝   268.58ms   @   1,116,998,304.46 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/reduceRight.js • Array<object>(100)
  native               ⇝   4.89ms   @   613,191,214.69 op/s
  @arr/reduceRight     ⇝   3.12ms   @   962,109,868.46 op/s
  fastjs.reduceRight   ⇝   3.31ms   @   906,685,171.10 op/s
  lodash.reduceright   ⇝   4.45ms   @   674,491,062.77 op/s
  ramda.reduceRight    ⇝   4.11ms   @   729,816,380.63 op/s

Benchmark: code/reduceRight.js • Array<object>(500)
  native               ⇝   22.69ms   @     661,143,648.93 op/s
  @arr/reduceRight     ⇝   14.06ms   @   1,067,183,543.97 op/s
  fastjs.reduceRight   ⇝   13.98ms   @   1,072,938,272.22 op/s
  lodash.reduceright   ⇝   20.33ms   @     737,766,684.83 op/s
  ramda.reduceRight    ⇝   14.97ms   @   1,001,871,495.95 op/s

Benchmark: code/reduceRight.js • Array<object>(1000)
  native               ⇝   45.79ms   @     655,103,464.53 op/s
  @arr/reduceRight     ⇝   27.17ms   @   1,104,189,925.97 op/s
  fastjs.reduceRight   ⇝   27.72ms   @   1,082,366,893.95 op/s
  lodash.reduceright   ⇝   36.70ms   @     817,525,657.23 op/s
  ramda.reduceRight    ⇝   28.10ms   @   1,067,613,112.81 op/s

Benchmark: code/reduceRight.js • Array<object>(5000)
  native               ⇝   223.58ms   @     670,894,341.65 op/s
  @arr/reduceRight     ⇝   135.60ms   @   1,106,180,136.98 op/s
  fastjs.reduceRight   ⇝   133.89ms   @   1,120,311,741.83 op/s
  lodash.reduceright   ⇝   178.85ms   @     838,679,434.82 op/s
  ramda.reduceRight    ⇝   135.64ms   @   1,105,899,359.68 op/s

Benchmark: code/reduceRight.js • Array<object>(10000)
  native               ⇝   446.95ms   @     671,213,597.34 op/s
  @arr/reduceRight     ⇝   267.64ms   @   1,120,902,066.11 op/s
  fastjs.reduceRight   ⇝   267.60ms   @   1,121,067,762.34 op/s
  lodash.reduceright   ⇝   357.47ms   @     839,224,251.65 op/s
  ramda.reduceRight    ⇝   270.69ms   @   1,108,284,902.51 op/s
```
</details>


## reverse

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/reverse.js • Array<string>(100)
  native            ⇝   34.07ms   @    88,058,919.87 op/s
  @arr/reverse      ⇝    8.01ms   @   374,314,629.91 op/s
  compute-reverse   ⇝   11.01ms   @   272,566,953.80 op/s
  lodash.reverse    ⇝   30.44ms   @    98,567,796.77 op/s
  ramda.reverse     ⇝   51.96ms   @    57,732,769.48 op/s

Benchmark: code/reverse.js • Array<string>(500)
  native            ⇝   143.89ms   @   104,243,016.71 op/s
  @arr/reverse      ⇝    22.74ms   @   659,501,548.73 op/s
  compute-reverse   ⇝    22.80ms   @   657,768,924.11 op/s
  lodash.reverse    ⇝   144.02ms   @   104,150,533.46 op/s
  ramda.reverse     ⇝   178.24ms   @    84,156,124.96 op/s

Benchmark: code/reverse.js • Array<string>(1000)
  native            ⇝   297.83ms   @   100,728,445.62 op/s
  @arr/reverse      ⇝    45.08ms   @   665,522,662.79 op/s
  compute-reverse   ⇝    48.61ms   @   617,212,450.49 op/s
  lodash.reverse    ⇝   297.88ms   @   100,712,250.80 op/s
  ramda.reverse     ⇝   358.32ms   @    83,725,097.25 op/s

Benchmark: code/reverse.js • Array<string>(5000)
  native            ⇝   1,441.29ms   @   104,073,782.12 op/s
  @arr/reverse      ⇝     223.65ms   @   670,683,764.33 op/s
  compute-reverse   ⇝     223.15ms   @   672,179,349.93 op/s
  lodash.reverse    ⇝   1,442.21ms   @   104,007,181.19 op/s
  ramda.reverse     ⇝   1,696.15ms   @    88,435,744.45 op/s

Benchmark: code/reverse.js • Array<string>(10000)
  native            ⇝   2,872.10ms   @   104,453,323.51 op/s
  @arr/reverse      ⇝     445.76ms   @   673,003,454.83 op/s
  compute-reverse   ⇝     446.03ms   @   672,598,846.50 op/s
  lodash.reverse    ⇝   2,875.54ms   @   104,328,330.44 op/s
  ramda.reverse     ⇝   3,375.55ms   @    88,874,393.44 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/reverse.js • Array<number>(100)
  native            ⇝   29.53ms   @   101,579,149.46 op/s
  @arr/reverse      ⇝    4.68ms   @   640,829,831.91 op/s
  compute-reverse   ⇝    4.74ms   @   632,556,413.49 op/s
  lodash.reverse    ⇝   29.56ms   @   101,498,376.55 op/s
  ramda.reverse     ⇝   41.97ms   @    71,471,568.38 op/s

Benchmark: code/reverse.js • Array<number>(500)
  native            ⇝   143.86ms   @   104,266,309.78 op/s
  @arr/reverse      ⇝    22.73ms   @   659,976,586.67 op/s
  compute-reverse   ⇝    22.78ms   @   658,350,211.24 op/s
  lodash.reverse    ⇝   143.91ms   @   104,230,786.70 op/s
  ramda.reverse     ⇝   176.58ms   @    84,947,893.10 op/s

Benchmark: code/reverse.js • Array<number>(1000)
  native            ⇝   298.70ms   @   100,434,242.51 op/s
  @arr/reverse      ⇝    45.74ms   @   655,920,903.98 op/s
  compute-reverse   ⇝    44.97ms   @   667,080,849.75 op/s
  lodash.reverse    ⇝   297.45ms   @   100,856,041.88 op/s
  ramda.reverse     ⇝   356.65ms   @    84,115,837.27 op/s

Benchmark: code/reverse.js • Array<number>(5000)
  native            ⇝   1,441.48ms   @   104,059,537.16 op/s
  @arr/reverse      ⇝     225.16ms   @   666,180,609.45 op/s
  compute-reverse   ⇝     223.57ms   @   670,926,378.24 op/s
  lodash.reverse    ⇝   1,440.86ms   @   104,104,677.68 op/s
  ramda.reverse     ⇝   1,693.17ms   @    88,590,997.39 op/s

Benchmark: code/reverse.js • Array<number>(10000)
  native            ⇝   2,871.49ms   @   104,475,346.01 op/s
  @arr/reverse      ⇝     446.02ms   @   672,613,241.83 op/s
  compute-reverse   ⇝     446.49ms   @   671,904,589.98 op/s
  lodash.reverse    ⇝   2,868.96ms   @   104,567,367.22 op/s
  ramda.reverse     ⇝   3,345.24ms   @    89,679,548.54 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/reverse.js • Array<object>(100)
  native            ⇝   29.51ms   @   101,671,217.24 op/s
  @arr/reverse      ⇝    4.67ms   @   641,865,414.94 op/s
  compute-reverse   ⇝    4.77ms   @   629,486,930.38 op/s
  lodash.reverse    ⇝   29.81ms   @   100,643,247.90 op/s
  ramda.reverse     ⇝   40.31ms   @    74,430,707.43 op/s

Benchmark: code/reverse.js • Array<object>(500)
  native            ⇝   143.89ms   @   104,246,647.01 op/s
  @arr/reverse      ⇝    22.73ms   @   659,808,006.43 op/s
  compute-reverse   ⇝    22.89ms   @   655,256,267.01 op/s
  lodash.reverse    ⇝   144.38ms   @   103,895,767.83 op/s
  ramda.reverse     ⇝   177.74ms   @    84,394,477.61 op/s

Benchmark: code/reverse.js • Array<object>(1000)
  native            ⇝   297.58ms   @   100,813,782.97 op/s
  @arr/reverse      ⇝    44.98ms   @   666,981,748.84 op/s
  compute-reverse   ⇝    45.05ms   @   665,973,506.64 op/s
  lodash.reverse    ⇝   297.10ms   @   100,977,514.85 op/s
  ramda.reverse     ⇝   358.25ms   @    83,741,429.75 op/s

Benchmark: code/reverse.js • Array<object>(5000)
  native            ⇝   1,441.34ms   @   104,069,748.46 op/s
  @arr/reverse      ⇝     223.29ms   @   671,780,257.99 op/s
  compute-reverse   ⇝     223.27ms   @   671,820,801.21 op/s
  lodash.reverse    ⇝   1,442.58ms   @   103,980,020.15 op/s
  ramda.reverse     ⇝   1,683.07ms   @    89,122,996.01 op/s

Benchmark: code/reverse.js • Array<object>(10000)
  native            ⇝   2,878.55ms   @   104,219,043.07 op/s
  @arr/reverse      ⇝     446.36ms   @   672,107,728.22 op/s
  compute-reverse   ⇝     446.09ms   @   672,502,551.15 op/s
  lodash.reverse    ⇝   2,874.96ms   @   104,349,426.83 op/s
  ramda.reverse     ⇝   3,366.55ms   @    89,111,913.30 op/s
```
</details>


## some

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/some.js • Array<string>(100)
  native        ⇝   15.60ms   @   192,291,680.33 op/s
  @arr/some     ⇝    7.69ms   @   389,921,617.96 op/s
  fastjs.some   ⇝    8.09ms   @   370,792,982.82 op/s
  lodash.some   ⇝    7.21ms   @   416,040,814.16 op/s

Benchmark: code/some.js • Array<string>(500)
  native        ⇝   31.26ms   @     479,779,470.33 op/s
  @arr/some     ⇝   11.86ms   @   1,264,760,706.01 op/s
  fastjs.some   ⇝   11.88ms   @   1,262,892,235.38 op/s
  lodash.some   ⇝   19.91ms   @     753,457,427.77 op/s

Benchmark: code/some.js • Array<string>(1000)
  native        ⇝   61.95ms   @     484,226,679.10 op/s
  @arr/some     ⇝   23.27ms   @   1,289,224,771.10 op/s
  fastjs.some   ⇝   23.26ms   @   1,289,975,868.42 op/s
  lodash.some   ⇝   38.67ms   @     775,865,252.69 op/s

Benchmark: code/some.js • Array<string>(5000)
  native        ⇝   306.71ms   @     489,061,608.93 op/s
  @arr/some     ⇝   116.12ms   @   1,291,810,702.12 op/s
  fastjs.some   ⇝   114.18ms   @   1,313,746,114.46 op/s
  lodash.some   ⇝   190.21ms   @     788,586,279.77 op/s

Benchmark: code/some.js • Array<string>(10000)
  native        ⇝   611.88ms   @     490,294,158.09 op/s
  @arr/some     ⇝   227.56ms   @   1,318,350,050.63 op/s
  fastjs.some   ⇝   227.72ms   @   1,317,425,010.61 op/s
  lodash.some   ⇝   379.69ms   @     790,108,380.35 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/some.js • Array<number>(100)
  native        ⇝   6.88ms   @     436,281,774.04 op/s
  @arr/some     ⇝   2.53ms   @   1,184,494,960.96 op/s
  fastjs.some   ⇝   2.55ms   @   1,176,307,289.11 op/s
  lodash.some   ⇝   4.27ms   @     702,869,276.39 op/s

Benchmark: code/some.js • Array<number>(500)
  native        ⇝   31.22ms   @     480,520,422.84 op/s
  @arr/some     ⇝   11.93ms   @   1,257,805,943.69 op/s
  fastjs.some   ⇝   11.86ms   @   1,264,547,992.38 op/s
  lodash.some   ⇝   20.06ms   @     747,711,330.39 op/s

Benchmark: code/some.js • Array<number>(1000)
  native        ⇝   63.02ms   @     476,072,667.10 op/s
  @arr/some     ⇝   23.18ms   @   1,294,438,226.11 op/s
  fastjs.some   ⇝   23.41ms   @   1,281,767,868.93 op/s
  lodash.some   ⇝   39.40ms   @     761,513,087.92 op/s

Benchmark: code/some.js • Array<number>(5000)
  native        ⇝   306.69ms   @     489,088,515.11 op/s
  @arr/some     ⇝   114.01ms   @   1,315,673,463.60 op/s
  fastjs.some   ⇝   114.50ms   @   1,310,033,668.39 op/s
  lodash.some   ⇝   190.22ms   @     788,549,752.92 op/s

Benchmark: code/some.js • Array<number>(10000)
  native        ⇝   615.07ms   @     487,745,756.13 op/s
  @arr/some     ⇝   227.83ms   @   1,316,756,215.31 op/s
  fastjs.some   ⇝   231.61ms   @   1,295,303,448.60 op/s
  lodash.some   ⇝   382.79ms   @     783,717,413.86 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/some.js • Array<object>(100)
  native        ⇝   6.85ms   @     438,238,980.48 op/s
  @arr/some     ⇝   2.53ms   @   1,184,241,067.27 op/s
  fastjs.some   ⇝   2.55ms   @   1,176,186,919.63 op/s
  lodash.some   ⇝   4.36ms   @     688,588,414.41 op/s

Benchmark: code/some.js • Array<object>(500)
  native        ⇝   31.57ms   @     475,164,302.31 op/s
  @arr/some     ⇝   12.29ms   @   1,220,411,727.86 op/s
  fastjs.some   ⇝   12.46ms   @   1,203,799,866.51 op/s
  lodash.some   ⇝   20.56ms   @     729,683,069.46 op/s

Benchmark: code/some.js • Array<object>(1000)
  native        ⇝   63.54ms   @     472,159,924.22 op/s
  @arr/some     ⇝   23.16ms   @   1,295,366,990.42 op/s
  fastjs.some   ⇝   23.31ms   @   1,286,896,723.19 op/s
  lodash.some   ⇝   38.68ms   @     775,549,248.50 op/s

Benchmark: code/some.js • Array<object>(5000)
  native        ⇝   306.95ms   @     488,683,140.98 op/s
  @arr/some     ⇝   115.76ms   @   1,295,736,339.84 op/s
  fastjs.some   ⇝   117.91ms   @   1,272,108,525.31 op/s
  lodash.some   ⇝   192.16ms   @     780,597,713.04 op/s

Benchmark: code/some.js • Array<object>(10000)
  native        ⇝   623.40ms   @     481,229,188.70 op/s
  @arr/some     ⇝   228.72ms   @   1,311,631,526.96 op/s
  fastjs.some   ⇝   233.76ms   @   1,283,386,651.35 op/s
  lodash.some   ⇝   383.18ms   @     782,920,703.85 op/s
```
</details>


## unique

<details>
<summary>:mag: ↝ Strings</summary>

```
Benchmark: code/unique.js • Array<string>(5)
  native         ⇝   16.26ms   @    9,225,327.71 op/s
  @arr/unique    ⇝    6.77ms   @   22,157,011.67 op/s
  arr-uniq       ⇝   19.95ms   @    7,517,550.47 op/s
  array-unique   ⇝    6.55ms   @   22,906,729.60 op/s
  lodash.uniq    ⇝    9.63ms   @   15,572,894.07 op/s
  ramda.uniq     ⇝   46.19ms   @    3,247,221.63 op/s

Benchmark: code/unique.js • Array<string>(10)
  native         ⇝   22.67ms   @   13,235,654.21 op/s
  @arr/unique    ⇝   11.88ms   @   25,244,992.13 op/s
  arr-uniq       ⇝   40.24ms   @    7,456,095.16 op/s
  array-unique   ⇝   13.09ms   @   22,923,858.71 op/s
  lodash.uniq    ⇝   15.68ms   @   19,132,640.86 op/s
  ramda.uniq     ⇝   71.78ms   @    4,179,318.63 op/s

Benchmark: code/unique.js • Array<string>(100)
  native         ⇝     136.17ms   @   22,030,682.09 op/s
  @arr/unique    ⇝     599.74ms   @    5,002,147.00 op/s
  arr-uniq       ⇝   2,243.32ms   @    1,337,306.29 op/s
  array-unique   ⇝     978.89ms   @    3,064,689.93 op/s
  lodash.uniq    ⇝     720.74ms   @    4,162,366.83 op/s
  ramda.uniq     ⇝     652.45ms   @    4,598,068.76 op/s

Benchmark: code/unique.js • Array<string>(500)
  native         ⇝      698.15ms   @   21,485,337.38 op/s
  @arr/unique    ⇝   14,947.39ms   @    1,003,519.54 op/s
  arr-uniq       ⇝   53,945.97ms   @      278,056.01 op/s
  array-unique   ⇝   29,208.68ms   @      513,545.90 op/s
  lodash.uniq    ⇝      892.80ms   @   16,801,068.48 op/s
  ramda.uniq     ⇝    2,897.51ms   @    5,176,861.23 op/s
```
</details>


<br>

> :white_check_mark: &mdash; Denotes function **is** faster than native <br>
> :no_entry_sign: &mdash; Denotes function **is not** faster than native <br>
> :mag: &mdash; Denotes function **is sometimes** faster than native <br>
> :wavy_dash: &mdash; Denotes function has no native counterpart <br>
