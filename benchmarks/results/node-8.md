# Benchmark Results for Node `v8.1.4` (Current)
All benchmarks were run on the same machine:

```
MacBook Pro (Retina, 15-inch, Early 2013)
- 2.4 GHz Intel Core i7
- 8 GB 1600 MHz DDR3
```

In search for utmost consistency, no other applications were running during testing. Please note that numbers will vary per machine.

> Don't forget to view results for other Node versions!


## every

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native         ⇝   59.03ms   @    50,819,588.68 op/s
  @arr/every     ⇝    6.04ms   @   496,602,987.27 op/s
  array-every    ⇝    8.71ms   @   344,285,554.11 op/s
  lodash.every   ⇝    7.63ms   @   393,137,908.85 op/s
  fastjs.every   ⇝    6.28ms   @   477,679,623.46 op/s

Array<string>(500)
  native         ⇝   284.34ms   @    52,753,326.96 op/s
  @arr/every     ⇝    23.02ms   @   651,588,107.01 op/s
  array-every    ⇝    32.17ms   @   466,238,997.03 op/s
  lodash.every   ⇝    27.77ms   @   540,061,296.96 op/s
  fastjs.every   ⇝    23.27ms   @   644,491,296.57 op/s

Array<string>(1000)
  native         ⇝   574.88ms   @    52,184,496.42 op/s
  @arr/every     ⇝    45.44ms   @   660,173,391.90 op/s
  array-every    ⇝    63.71ms   @   470,870,735.58 op/s
  lodash.every   ⇝    54.27ms   @   552,825,844.86 op/s
  fastjs.every   ⇝    45.28ms   @   662,549,934.73 op/s

Array<string>(5000)
  native         ⇝   2,830.39ms   @    52,996,226.40 op/s
  @arr/every     ⇝     225.24ms   @   665,941,562.86 op/s
  array-every    ⇝     320.79ms   @   467,593,537.43 op/s
  lodash.every   ⇝     281.02ms   @   533,761,530.59 op/s
  fastjs.every   ⇝     225.77ms   @   664,400,911.91 op/s

Array<string>(10000)
  native         ⇝   5,661.47ms   @    52,989,745.38 op/s
  @arr/every     ⇝     445.82ms   @   672,911,950.52 op/s
  array-every    ⇝     628.64ms   @   477,218,067.58 op/s
  lodash.every   ⇝     547.43ms   @   548,013,848.84 op/s
  fastjs.every   ⇝     450.50ms   @   665,923,608.39 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native         ⇝   62.31ms   @    48,148,707.86 op/s
  @arr/every     ⇝    5.20ms   @   576,518,959.31 op/s
  array-every    ⇝    7.32ms   @   409,632,200.80 op/s
  lodash.every   ⇝    6.23ms   @   481,830,802.87 op/s
  fastjs.every   ⇝    5.22ms   @   574,358,895.81 op/s

Array<number>(500)
  native         ⇝   288.68ms   @    51,961,015.30 op/s
  @arr/every     ⇝    22.87ms   @   655,824,947.55 op/s
  array-every    ⇝    32.35ms   @   463,690,054.73 op/s
  lodash.every   ⇝    27.62ms   @   543,116,635.71 op/s
  fastjs.every   ⇝    22.98ms   @   652,808,812.19 op/s

Array<number>(1000)
  native         ⇝   575.28ms   @    52,148,607.18 op/s
  @arr/every     ⇝    45.25ms   @   662,974,810.40 op/s
  array-every    ⇝    63.35ms   @   473,568,560.10 op/s
  lodash.every   ⇝    54.19ms   @   553,636,507.88 op/s
  fastjs.every   ⇝    45.08ms   @   665,419,183.14 op/s

Array<number>(5000)
  native         ⇝   2,813.22ms   @    53,319,604.14 op/s
  @arr/every     ⇝     223.06ms   @   672,461,328.70 op/s
  array-every    ⇝     313.77ms   @   478,064,714.49 op/s
  lodash.every   ⇝     268.81ms   @   558,012,490.75 op/s
  fastjs.every   ⇝     226.86ms   @   661,208,953.92 op/s

Array<number>(10000)
  native         ⇝   5,631.21ms   @    53,274,532.46 op/s
  @arr/every     ⇝     451.80ms   @   664,008,838.49 op/s
  array-every    ⇝     628.99ms   @   476,951,377.92 op/s
  lodash.every   ⇝     538.90ms   @   556,691,446.31 op/s
  fastjs.every   ⇝     445.70ms   @   673,102,243.59 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native         ⇝   60.59ms   @    49,515,085.56 op/s
  @arr/every     ⇝    5.52ms   @   543,751,909.93 op/s
  array-every    ⇝    9.83ms   @   305,322,100.06 op/s
  lodash.every   ⇝    6.83ms   @   439,149,472.87 op/s
  fastjs.every   ⇝    5.55ms   @   540,633,763.34 op/s

Array<object>(500)
  native         ⇝   287.62ms   @    52,151,887.17 op/s
  @arr/every     ⇝    22.85ms   @   656,513,869.34 op/s
  array-every    ⇝    34.07ms   @   440,262,072.16 op/s
  lodash.every   ⇝    28.06ms   @   534,566,514.13 op/s
  fastjs.every   ⇝    22.92ms   @   654,313,318.46 op/s

Array<object>(1000)
  native         ⇝   575.68ms   @    52,112,355.48 op/s
  @arr/every     ⇝    45.08ms   @   665,424,614.66 op/s
  array-every    ⇝    64.92ms   @   462,125,083.12 op/s
  lodash.every   ⇝    54.20ms   @   553,528,963.02 op/s
  fastjs.every   ⇝    45.22ms   @   663,452,035.15 op/s

Array<object>(5000)
  native         ⇝   2,814.51ms   @    53,295,257.31 op/s
  @arr/every     ⇝     227.14ms   @   660,399,426.22 op/s
  array-every    ⇝     318.31ms   @   471,238,498.59 op/s
  lodash.every   ⇝     268.73ms   @   558,174,153.10 op/s
  fastjs.every   ⇝     223.21ms   @   672,019,240.18 op/s

Array<object>(10000)
  native         ⇝   5,621.59ms   @    53,365,664.72 op/s
  @arr/every     ⇝     449.67ms   @   667,157,869.80 op/s
  array-every    ⇝     634.48ms   @   472,831,686.29 op/s
  lodash.every   ⇝     545.43ms   @   550,025,359.19 op/s
  fastjs.every   ⇝     447.77ms   @   669,989,352.31 op/s
```
</details>


## filter

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native               ⇝   387.27ms   @     7,746,577.33 op/s
  @arr/filter          ⇝    23.37ms   @   128,352,272.57 op/s
  @arr/filter.mutate   ⇝     6.96ms   @   430,939,812.22 op/s
  arr-filter           ⇝    31.87ms   @    94,119,436.44 op/s
  array-filter         ⇝   382.67ms   @     7,839,585.87 op/s
  lodash.filter        ⇝    29.78ms   @   100,752,104.38 op/s
  fastjs.filter        ⇝    23.61ms   @   127,050,618.15 op/s
  ramda.filter         ⇝    36.69ms   @    81,771,192.37 op/s

Array<string>(500)
  native               ⇝   1,828.66ms   @     8,202,743.30 op/s
  @arr/filter          ⇝      97.93ms   @   153,174,719.14 op/s
  @arr/filter.mutate   ⇝      27.51ms   @   545,174,405.11 op/s
  arr-filter           ⇝      96.70ms   @   155,115,076.31 op/s
  array-filter         ⇝   1,824.81ms   @     8,220,031.52 op/s
  lodash.filter        ⇝     105.89ms   @   141,654,371.78 op/s
  fastjs.filter        ⇝      96.33ms   @   155,710,191.69 op/s
  ramda.filter         ⇝     107.34ms   @   139,748,641.94 op/s

Array<string>(1000)
  native               ⇝   3,681.80ms   @     8,148,186.36 op/s
  @arr/filter          ⇝     211.66ms   @   141,740,089.21 op/s
  @arr/filter.mutate   ⇝      54.22ms   @   553,263,885.31 op/s
  arr-filter           ⇝     186.65ms   @   160,732,726.92 op/s
  array-filter         ⇝   3,685.71ms   @     8,139,538.57 op/s
  lodash.filter        ⇝     237.11ms   @   126,524,409.85 op/s
  fastjs.filter        ⇝     215.01ms   @   139,525,672.43 op/s
  ramda.filter         ⇝     222.73ms   @   134,690,070.60 op/s

Array<string>(5000)
  native               ⇝   18,501.60ms   @     8,107,406.87 op/s
  @arr/filter          ⇝    1,098.17ms   @   136,590,351.02 op/s
  @arr/filter.mutate   ⇝      267.80ms   @   560,110,509.06 op/s
  arr-filter           ⇝      909.37ms   @   164,949,322.45 op/s
  array-filter         ⇝   18,473.31ms   @     8,119,824.45 op/s
  lodash.filter        ⇝    1,174.97ms   @   127,663,236.61 op/s
  fastjs.filter        ⇝    1,104.26ms   @   135,837,411.25 op/s
  ramda.filter         ⇝    1,087.64ms   @   137,912,738.95 op/s

Array<string>(10000)
  native               ⇝   36,542.30ms   @     8,209,664.91 op/s
  @arr/filter          ⇝    1,866.15ms   @   160,758,703.83 op/s
  @arr/filter.mutate   ⇝      538.38ms   @   557,227,840.68 op/s
  arr-filter           ⇝    1,799.39ms   @   166,723,101.23 op/s
  array-filter         ⇝   36,407.34ms   @     8,240,095.99 op/s
  lodash.filter        ⇝    2,044.47ms   @   146,737,287.39 op/s
  fastjs.filter        ⇝    1,856.76ms   @   161,571,548.46 op/s
  ramda.filter         ⇝    1,812.10ms   @   165,553,928.40 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native               ⇝   370.20ms   @     8,103,630.39 op/s
  @arr/filter          ⇝    20.84ms   @   143,941,515.99 op/s
  @arr/filter.mutate   ⇝     6.00ms   @   499,820,231.32 op/s
  arr-filter           ⇝    22.68ms   @   132,293,220.51 op/s
  array-filter         ⇝   371.84ms   @     8,068,091.10 op/s
  lodash.filter        ⇝    23.96ms   @   125,183,383.22 op/s
  fastjs.filter        ⇝    21.05ms   @   142,540,993.72 op/s
  ramda.filter         ⇝    33.57ms   @    89,369,104.17 op/s

Array<number>(500)
  native               ⇝   1,778.83ms   @     8,432,503.60 op/s
  @arr/filter          ⇝      90.89ms   @   165,035,000.46 op/s
  @arr/filter.mutate   ⇝      27.27ms   @   550,120,648.79 op/s
  arr-filter           ⇝      82.26ms   @   182,339,682.15 op/s
  array-filter         ⇝   1,780.88ms   @     8,422,796.54 op/s
  lodash.filter        ⇝     102.61ms   @   146,180,248.71 op/s
  fastjs.filter        ⇝      91.59ms   @   163,766,328.59 op/s
  ramda.filter         ⇝     103.44ms   @   145,012,444.87 op/s

Array<number>(1000)
  native               ⇝   3,595.53ms   @     8,343,693.62 op/s
  @arr/filter          ⇝     204.08ms   @   147,003,475.28 op/s
  @arr/filter.mutate   ⇝      54.12ms   @   554,281,221.97 op/s
  arr-filter           ⇝     159.20ms   @   188,437,019.57 op/s
  array-filter         ⇝   3,611.58ms   @     8,306,612.17 op/s
  lodash.filter        ⇝     221.12ms   @   135,675,716.08 op/s
  fastjs.filter        ⇝     200.99ms   @   149,260,434.70 op/s
  ramda.filter         ⇝     210.85ms   @   142,281,703.48 op/s

Array<number>(5000)
  native               ⇝   17,969.84ms   @     8,347,321.77 op/s
  @arr/filter          ⇝    1,052.17ms   @   142,562,633.44 op/s
  @arr/filter.mutate   ⇝      267.87ms   @   559,981,437.29 op/s
  arr-filter           ⇝      773.74ms   @   193,863,014.01 op/s
  array-filter         ⇝   17,994.10ms   @     8,336,064.55 op/s
  lodash.filter        ⇝    1,150.91ms   @   130,331,429.78 op/s
  fastjs.filter        ⇝    1,056.60ms   @   141,965,345.89 op/s
  ramda.filter         ⇝    1,043.77ms   @   143,709,419.65 op/s

Array<number>(10000)
  native               ⇝   35,587.32ms   @     8,429,968.71 op/s
  @arr/filter          ⇝    1,786.84ms   @   167,893,903.29 op/s
  @arr/filter.mutate   ⇝      534.24ms   @   561,544,653.91 op/s
  arr-filter           ⇝    1,549.91ms   @   193,559,494.29 op/s
  array-filter         ⇝   35,602.40ms   @     8,426,398.97 op/s
  lodash.filter        ⇝    1,962.76ms   @   152,845,745.68 op/s
  fastjs.filter        ⇝    1,790.90ms   @   167,513,170.65 op/s
  ramda.filter         ⇝    1,729.57ms   @   173,453,927.02 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native               ⇝   381.80ms   @     7,857,424.99 op/s
  @arr/filter          ⇝    22.41ms   @   133,850,549.70 op/s
  @arr/filter.mutate   ⇝     6.03ms   @   497,798,899.20 op/s
  arr-filter           ⇝    25.22ms   @   118,975,445.33 op/s
  array-filter         ⇝   367.02ms   @     8,173,858.74 op/s
  lodash.filter        ⇝    24.57ms   @   122,075,473.49 op/s
  fastjs.filter        ⇝    24.73ms   @   121,289,731.94 op/s
  ramda.filter         ⇝    38.86ms   @    77,205,023.73 op/s

Array<object>(500)
  native               ⇝   1,825.34ms   @     8,217,641.82 op/s
  @arr/filter          ⇝      96.25ms   @   155,847,237.17 op/s
  @arr/filter.mutate   ⇝      27.32ms   @   549,142,928.83 op/s
  arr-filter           ⇝      97.07ms   @   154,520,793.21 op/s
  array-filter         ⇝   1,820.08ms   @     8,241,376.05 op/s
  lodash.filter        ⇝     109.46ms   @   137,035,662.99 op/s
  fastjs.filter        ⇝      95.88ms   @   156,440,949.22 op/s
  ramda.filter         ⇝     110.33ms   @   135,951,615.22 op/s

Array<object>(1000)
  native               ⇝   3,739.46ms   @     8,022,551.63 op/s
  @arr/filter          ⇝     220.54ms   @   136,028,232.17 op/s
  @arr/filter.mutate   ⇝      53.98ms   @   555,749,357.71 op/s
  arr-filter           ⇝     193.94ms   @   154,684,268.91 op/s
  array-filter         ⇝   3,738.49ms   @     8,024,633.92 op/s
  lodash.filter        ⇝     236.66ms   @   126,764,092.96 op/s
  fastjs.filter        ⇝     220.67ms   @   135,948,586.56 op/s
  ramda.filter         ⇝     231.63ms   @   129,518,695.19 op/s

Array<object>(5000)
  native               ⇝   19,528.91ms   @     7,680,921.62 op/s
  @arr/filter          ⇝    1,184.11ms   @   126,677,172.73 op/s
  @arr/filter.mutate   ⇝      268.19ms   @   559,298,935.04 op/s
  arr-filter           ⇝      955.09ms   @   157,053,762.88 op/s
  array-filter         ⇝   19,461.93ms   @     7,707,356.28 op/s
  lodash.filter        ⇝    1,266.54ms   @   118,433,260.23 op/s
  fastjs.filter        ⇝    1,175.52ms   @   127,603,019.07 op/s
  ramda.filter         ⇝    1,155.00ms   @   129,870,245.01 op/s

Array<object>(10000)
  native               ⇝   38,201.38ms   @     7,853,118.65 op/s
  @arr/filter          ⇝    1,999.73ms   @   150,020,150.86 op/s
  @arr/filter.mutate   ⇝      538.05ms   @   557,567,548.38 op/s
  arr-filter           ⇝    1,916.09ms   @   156,568,873.80 op/s
  array-filter         ⇝   38,152.18ms   @     7,863,247.21 op/s
  lodash.filter        ⇝    2,183.24ms   @   137,410,183.30 op/s
  fastjs.filter        ⇝    2,016.21ms   @   148,794,113.88 op/s
  ramda.filter         ⇝    1,956.23ms   @   153,356,555.81 op/s
```
</details>


## find

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native        ⇝    2.09ms   @   1,433,125,355.00 op/s
  @arr/find     ⇝    1.14ms   @   2,620,945,724.58 op/s
  lodash.find   ⇝    7.30ms   @     410,818,269.20 op/s
  ramda.find    ⇝   23.40ms   @     128,202,460.06 op/s

Array<string>(500)
  native        ⇝    1.26ms   @   11,901,446,501.81 op/s
  @arr/find     ⇝    0.48ms   @   31,198,457,548.26 op/s
  lodash.find   ⇝    4.15ms   @    3,617,984,276.24 op/s
  ramda.find    ⇝   18.98ms   @      790,129,907.89 op/s

Array<string>(1000)
  native        ⇝    1.26ms   @   23,826,202,151.03 op/s
  @arr/find     ⇝    0.47ms   @   63,986,486,054.15 op/s
  lodash.find   ⇝    3.97ms   @    7,551,421,404.05 op/s
  ramda.find    ⇝   16.53ms   @    1,815,396,120.34 op/s

Array<string>(5000)
  native        ⇝    1.35ms   @   110,822,889,507.36 op/s
  @arr/find     ⇝    0.46ms   @   329,627,586,752.49 op/s
  lodash.find   ⇝    3.95ms   @    37,974,443,199.73 op/s
  ramda.find    ⇝   16.38ms   @     9,159,314,179.86 op/s

Array<string>(10000)
  native        ⇝    1.30ms   @   230,008,786,335.64 op/s
  @arr/find     ⇝    0.48ms   @   620,184,525,569.17 op/s
  lodash.find   ⇝    5.63ms   @    53,260,416,272.76 op/s
  ramda.find    ⇝   17.61ms   @    17,038,767,797.21 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native        ⇝   168.76ms   @   17,776,843.80 op/s
  @arr/find     ⇝   132.41ms   @   22,657,630.38 op/s
  lodash.find   ⇝   139.19ms   @   21,552,635.94 op/s
  ramda.find    ⇝   153.09ms   @   19,596,271.73 op/s

Array<number>(500)
  native        ⇝   830.91ms   @   18,052,487.10 op/s
  @arr/find     ⇝   631.89ms   @   23,738,388.79 op/s
  lodash.find   ⇝   632.32ms   @   23,722,209.10 op/s
  ramda.find    ⇝   659.10ms   @   22,758,369.49 op/s

Array<number>(1000)
  native        ⇝   1,616.05ms   @   18,563,734.67 op/s
  @arr/find     ⇝   1,257.54ms   @   23,856,006.27 op/s
  lodash.find   ⇝   1,264.06ms   @   23,733,135.81 op/s
  ramda.find    ⇝   1,262.54ms   @   23,761,584.83 op/s

Array<number>(5000)
  native        ⇝   8,052.47ms   @   18,627,829.65 op/s
  @arr/find     ⇝   6,272.03ms   @   23,915,712.59 op/s
  lodash.find   ⇝   6,336.82ms   @   23,671,191.01 op/s
  ramda.find    ⇝   6,273.33ms   @   23,910,744.93 op/s

Array<number>(10000)
  native        ⇝   16,096.74ms   @   18,637,316.77 op/s
  @arr/find     ⇝   12,485.91ms   @   24,027,075.73 op/s
  lodash.find   ⇝   12,624.75ms   @   23,762,838.51 op/s
  ramda.find    ⇝   12,564.44ms   @   23,876,913.88 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native        ⇝   170.61ms   @   17,583,998.78 op/s
  @arr/find     ⇝   125.89ms   @   23,830,613.33 op/s
  lodash.find   ⇝   134.78ms   @   22,258,626.29 op/s
  ramda.find    ⇝   152.27ms   @   19,702,373.06 op/s

Array<object>(500)
  native        ⇝   1,238.96ms   @   12,106,915.67 op/s
  @arr/find     ⇝   1,083.60ms   @   13,842,691.52 op/s
  lodash.find   ⇝   1,359.37ms   @   11,034,557.70 op/s
  ramda.find    ⇝   1,120.94ms   @   13,381,658.94 op/s

Array<object>(1000)
  native        ⇝   5,063.88ms   @   5,924,312.04 op/s
  @arr/find     ⇝   4,739.17ms   @   6,330,222.97 op/s
  lodash.find   ⇝   5,278.32ms   @   5,683,622.36 op/s
  ramda.find    ⇝   4,893.86ms   @   6,130,130.04 op/s

Array<object>(5000)
  native        ⇝   61,053.94ms   @   2,456,844.00 op/s
  @arr/find     ⇝   59,999.15ms   @   2,500,035.62 op/s
  lodash.find   ⇝   60,093.62ms   @   2,496,105.34 op/s
  ramda.find    ⇝   59,817.84ms   @   2,507,612.96 op/s

Array<object>(10000)
  native        ⇝   194,712.20ms   @   1,540,735.50 op/s
  @arr/find     ⇝   189,739.20ms   @   1,581,117.62 op/s
  lodash.find   ⇝   189,781.93ms   @   1,580,761.71 op/s
  ramda.find    ⇝   189,332.31ms   @   1,584,515.58 op/s
```
</details>


## findIndex

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native             ⇝    2.72ms   @   1,102,224,325.43 op/s
  @arr/findIndex     ⇝    1.56ms   @   1,924,868,531.48 op/s
  lodash.findindex   ⇝    2.26ms   @   1,328,260,558.68 op/s
  ramda.findIndex    ⇝   23.29ms   @     128,808,408.44 op/s

Array<string>(500)
  native             ⇝    1.27ms   @   11,805,390,498.71 op/s
  @arr/findIndex     ⇝    0.51ms   @   29,296,703,339.63 op/s
  lodash.findindex   ⇝    0.67ms   @   22,324,750,706.95 op/s
  ramda.findIndex    ⇝   18.75ms   @      800,206,474.61 op/s

Array<string>(1000)
  native             ⇝    1.56ms   @   19,237,280,310.26 op/s
  @arr/findIndex     ⇝    0.79ms   @   37,898,023,997.03 op/s
  lodash.findindex   ⇝    1.02ms   @   29,277,547,244.20 op/s
  ramda.findIndex    ⇝   16.66ms   @    1,800,960,488.25 op/s

Array<string>(5000)
  native             ⇝    1.31ms   @   114,304,961,063.92 op/s
  @arr/findIndex     ⇝    0.50ms   @   302,048,492,878.70 op/s
  lodash.findindex   ⇝    0.65ms   @   230,357,068,813.80 op/s
  ramda.findIndex    ⇝   13.80ms   @    10,870,720,034.46 op/s

Array<string>(10000)
  native             ⇝    1.25ms   @   239,224,911,287.43 op/s
  @arr/findIndex     ⇝    0.50ms   @   604,680,224,941.04 op/s
  lodash.findindex   ⇝    0.65ms   @   460,569,140,639.39 op/s
  ramda.findIndex    ⇝   17.41ms   @    17,235,426,154.53 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native             ⇝   173.64ms   @   17,277,311.15 op/s
  @arr/findIndex     ⇝   129.30ms   @   23,202,452.99 op/s
  lodash.findindex   ⇝   131.95ms   @   22,735,461.28 op/s
  ramda.findIndex    ⇝   158.06ms   @   18,980,137.01 op/s

Array<number>(500)
  native             ⇝   813.27ms   @   18,443,984.42 op/s
  @arr/findIndex     ⇝   630.40ms   @   23,794,302.63 op/s
  lodash.findindex   ⇝   631.06ms   @   23,769,704.99 op/s
  ramda.findIndex    ⇝   655.83ms   @   22,871,920.23 op/s

Array<number>(1000)
  native             ⇝   1,636.00ms   @   18,337,445.73 op/s
  @arr/findIndex     ⇝   1,265.89ms   @   23,698,653.87 op/s
  lodash.findindex   ⇝   1,272.53ms   @   23,575,154.07 op/s
  ramda.findIndex    ⇝   1,283.30ms   @   23,377,288.32 op/s

Array<number>(5000)
  native             ⇝   8,013.77ms   @   18,717,791.23 op/s
  @arr/findIndex     ⇝   6,262.75ms   @   23,951,135.84 op/s
  lodash.findindex   ⇝   6,339.46ms   @   23,661,337.05 op/s
  ramda.findIndex    ⇝   6,354.30ms   @   23,606,068.49 op/s

Array<number>(10000)
  native             ⇝   16,060.34ms   @   18,679,558.42 op/s
  @arr/findIndex     ⇝   12,563.91ms   @   23,877,910.18 op/s
  lodash.findindex   ⇝   12,584.47ms   @   23,838,903.38 op/s
  ramda.findIndex    ⇝   12,666.56ms   @   23,684,411.90 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native             ⇝   168.03ms   @   17,854,058.46 op/s
  @arr/findIndex     ⇝   123.42ms   @   24,307,966.77 op/s
  lodash.findindex   ⇝   127.15ms   @   23,594,218.33 op/s
  ramda.findIndex    ⇝   148.96ms   @   20,139,074.68 op/s

Array<object>(500)
  native             ⇝   1,106.76ms   @   13,553,033.51 op/s
  @arr/findIndex     ⇝     903.52ms   @   16,601,714.12 op/s
  lodash.findindex   ⇝   1,250.89ms   @   11,991,448.88 op/s
  ramda.findIndex    ⇝     985.08ms   @   15,227,137.10 op/s

Array<object>(1000)
  native             ⇝   4,768.84ms   @   6,290,838.51 op/s
  @arr/findIndex     ⇝   4,444.62ms   @   6,749,734.77 op/s
  lodash.findindex   ⇝   4,711.01ms   @   6,368,060.05 op/s
  ramda.findIndex    ⇝   4,506.90ms   @   6,656,453.95 op/s

Array<object>(5000)
  native             ⇝   58,492.25ms   @   2,564,442.27 op/s
  @arr/findIndex     ⇝   56,926.82ms   @   2,634,961.79 op/s
  lodash.findindex   ⇝   57,122.81ms   @   2,625,921.27 op/s
  ramda.findIndex    ⇝   56,773.14ms   @   2,642,094.70 op/s

Array<object>(10000)
  native             ⇝   186,362.38ms   @   1,609,766.97 op/s
  @arr/findIndex     ⇝   183,374.48ms   @   1,635,996.50 op/s
  lodash.findindex   ⇝   183,014.78ms   @   1,639,211.83 op/s
  ramda.findIndex    ⇝   182,830.82ms   @   1,640,861.24 op/s
```
</details>


## flatten

<details>
<summary>:wavy_dash: ↝ Arrays</summary>

```
Array<array>(5)
  @arr/flatten         ⇝     145.16ms   @   1,033,356.91 op/s
  arr-flatten          ⇝     153.01ms   @     980,297.37 op/s
  array-flatten        ⇝     109.97ms   @   1,364,021.28 op/s
  flatten              ⇝   3,660.67ms   @      40,976.08 op/s
  flatten-array        ⇝     116.60ms   @   1,286,422.82 op/s
  lodash.flattendeep   ⇝     708.13ms   @     211,826.64 op/s
  ramda.flatten        ⇝     366.38ms   @     409,408.46 op/s

Array<array>(10)
  @arr/flatten         ⇝     334.62ms   @     896,543.83 op/s
  arr-flatten          ⇝     279.24ms   @   1,074,356.92 op/s
  array-flatten        ⇝     270.31ms   @   1,109,832.85 op/s
  flatten              ⇝   9,452.27ms   @      31,738.41 op/s
  flatten-array        ⇝     296.27ms   @   1,012,589.13 op/s
  lodash.flattendeep   ⇝   1,726.12ms   @     173,800.15 op/s
  ramda.flatten        ⇝     946.02ms   @     317,116.36 op/s

Array<array>(100)
  @arr/flatten         ⇝    2,264.01ms   @   1,325,083.71 op/s
  arr-flatten          ⇝    2,194.24ms   @   1,367,215.88 op/s
  array-flatten        ⇝    2,184.70ms   @   1,373,186.57 op/s
  flatten              ⇝   90,392.18ms   @      33,188.71 op/s
  flatten-array        ⇝    2,317.33ms   @   1,294,594.04 op/s
  lodash.flattendeep   ⇝   13,527.14ms   @     221,776.41 op/s
  ramda.flatten        ⇝    7,386.24ms   @     406,160.77 op/s

Array<array>(500)
  @arr/flatten         ⇝    11,248.87ms   @   1,333,467.33 op/s
  arr-flatten          ⇝    11,193.05ms   @   1,340,117.56 op/s
  array-flatten        ⇝    11,038.48ms   @   1,358,882.14 op/s
  flatten              ⇝   969,664.19ms   @      15,469.27 op/s
  flatten-array        ⇝    15,837.16ms   @     947,139.70 op/s
  lodash.flattendeep   ⇝    71,680.07ms   @     209,263.18 op/s
  ramda.flatten        ⇝    51,041.16ms   @     293,880.48 op/s
```
</details>


## forEach

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native              ⇝    54.78ms   @    54,763,044.05 op/s
  @arr/forEach        ⇝     6.44ms   @   466,179,674.66 op/s
  @arr/forEach.spec   ⇝   105.77ms   @    28,363,854.59 op/s
  fastjs.forEach      ⇝     6.44ms   @   465,740,732.69 op/s
  lodash.foreach      ⇝     8.28ms   @   362,206,066.76 op/s
  ramda.forEach       ⇝     9.47ms   @   316,672,991.33 op/s

Array<string>(500)
  native              ⇝   266.94ms   @    56,191,395.11 op/s
  @arr/forEach        ⇝    23.03ms   @   651,446,813.43 op/s
  @arr/forEach.spec   ⇝   435.38ms   @    34,453,052.17 op/s
  fastjs.forEach      ⇝    23.25ms   @   645,069,288.18 op/s
  lodash.foreach      ⇝    32.33ms   @   463,909,969.30 op/s
  ramda.forEach       ⇝    25.92ms   @   578,744,787.44 op/s

Array<string>(1000)
  native              ⇝   542.45ms   @    55,304,918.07 op/s
  @arr/forEach        ⇝    49.16ms   @   610,218,164.18 op/s
  @arr/forEach.spec   ⇝   877.65ms   @    34,182,360.07 op/s
  fastjs.forEach      ⇝    45.43ms   @   660,400,973.02 op/s
  lodash.foreach      ⇝    63.11ms   @   475,351,307.59 op/s
  ramda.forEach       ⇝    48.02ms   @   624,696,644.71 op/s

Array<string>(5000)
  native              ⇝   2,678.06ms   @    56,010,783.89 op/s
  @arr/forEach        ⇝     223.47ms   @   671,217,413.33 op/s
  @arr/forEach.spec   ⇝   4,379.61ms   @    34,249,622.48 op/s
  fastjs.forEach      ⇝     223.72ms   @   670,468,089.62 op/s
  lodash.foreach      ⇝     313.20ms   @   478,931,723.25 op/s
  ramda.forEach       ⇝     231.40ms   @   648,216,424.94 op/s

Array<string>(10000)
  native              ⇝   5,239.60ms   @    57,256,294.80 op/s
  @arr/forEach        ⇝     445.75ms   @   673,018,223.81 op/s
  @arr/forEach.spec   ⇝   8,691.61ms   @    34,516,047.28 op/s
  fastjs.forEach      ⇝     448.63ms   @   668,707,366.88 op/s
  lodash.foreach      ⇝     637.12ms   @   470,871,648.32 op/s
  ramda.forEach       ⇝     457.60ms   @   655,592,250.85 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native              ⇝    53.87ms   @    55,691,077.73 op/s
  @arr/forEach        ⇝     7.19ms   @   417,473,898.84 op/s
  @arr/forEach.spec   ⇝   100.39ms   @    29,882,805.32 op/s
  fastjs.forEach      ⇝     5.18ms   @   579,405,383.29 op/s
  lodash.foreach      ⇝     7.91ms   @   379,457,871.07 op/s
  ramda.forEach       ⇝     8.03ms   @   373,593,188.15 op/s

Array<number>(500)
  native              ⇝   272.68ms   @    55,009,802.89 op/s
  @arr/forEach        ⇝    23.10ms   @   649,441,852.35 op/s
  @arr/forEach.spec   ⇝   449.94ms   @    33,337,453.69 op/s
  fastjs.forEach      ⇝    23.38ms   @   641,652,376.36 op/s
  lodash.foreach      ⇝    32.01ms   @   468,647,190.52 op/s
  ramda.forEach       ⇝    26.68ms   @   562,266,476.68 op/s

Array<number>(1000)
  native              ⇝   531.76ms   @    56,416,904.62 op/s
  @arr/forEach        ⇝    45.13ms   @   664,674,121.36 op/s
  @arr/forEach.spec   ⇝   871.09ms   @    34,439,431.80 op/s
  fastjs.forEach      ⇝    45.33ms   @   661,772,053.50 op/s
  lodash.foreach      ⇝    63.23ms   @   474,467,316.33 op/s
  ramda.forEach       ⇝    49.25ms   @   609,107,719.73 op/s

Array<number>(5000)
  native              ⇝   2,618.78ms   @    57,278,523.21 op/s
  @arr/forEach        ⇝     223.78ms   @   670,288,776.13 op/s
  @arr/forEach.spec   ⇝   4,338.05ms   @    34,577,737.43 op/s
  fastjs.forEach      ⇝     223.82ms   @   670,182,629.41 op/s
  lodash.foreach      ⇝     312.95ms   @   479,310,202.83 op/s
  ramda.forEach       ⇝     235.21ms   @   637,728,039.27 op/s

Array<number>(10000)
  native              ⇝   5,268.12ms   @    56,946,313.91 op/s
  @arr/forEach        ⇝     446.87ms   @   671,332,165.64 op/s
  @arr/forEach.spec   ⇝   8,711.01ms   @    34,439,186.73 op/s
  fastjs.forEach      ⇝     459.64ms   @   652,691,439.18 op/s
  lodash.foreach      ⇝     641.12ms   @   467,934,263.36 op/s
  ramda.forEach       ⇝     451.74ms   @   664,104,726.25 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native              ⇝   54.11ms   @    55,442,552.34 op/s
  @arr/forEach        ⇝    7.19ms   @   417,042,004.47 op/s
  @arr/forEach.spec   ⇝   94.33ms   @    31,803,570.29 op/s
  fastjs.forEach      ⇝    5.20ms   @   577,139,615.27 op/s
  lodash.foreach      ⇝    7.83ms   @   383,268,050.01 op/s
  ramda.forEach       ⇝    8.29ms   @   361,868,384.37 op/s

Array<object>(500)
  native              ⇝   279.92ms   @    53,586,633.01 op/s
  @arr/forEach        ⇝    23.06ms   @   650,410,677.97 op/s
  @arr/forEach.spec   ⇝   438.56ms   @    34,202,684.55 op/s
  fastjs.forEach      ⇝    23.76ms   @   631,401,596.63 op/s
  lodash.foreach      ⇝    37.78ms   @   397,031,958.48 op/s
  ramda.forEach       ⇝    26.08ms   @   575,254,308.42 op/s

Array<object>(1000)
  native              ⇝   532.57ms   @    56,330,669.74 op/s
  @arr/forEach        ⇝    45.16ms   @   664,260,581.99 op/s
  @arr/forEach.spec   ⇝   878.07ms   @    34,165,850.60 op/s
  fastjs.forEach      ⇝    49.01ms   @   612,147,466.57 op/s
  lodash.foreach      ⇝    64.01ms   @   468,677,874.87 op/s
  ramda.forEach       ⇝    48.85ms   @   614,086,468.08 op/s

Array<object>(5000)
  native              ⇝   2,639.69ms   @    56,824,853.96 op/s
  @arr/forEach        ⇝     234.16ms   @   640,598,170.41 op/s
  @arr/forEach.spec   ⇝   4,360.00ms   @    34,403,639.72 op/s
  fastjs.forEach      ⇝     223.30ms   @   671,753,416.41 op/s
  lodash.foreach      ⇝     315.97ms   @   474,725,037.68 op/s
  ramda.forEach       ⇝     227.32ms   @   659,872,040.52 op/s

Array<object>(10000)
  native              ⇝   5,221.88ms   @    57,450,585.19 op/s
  @arr/forEach        ⇝     446.37ms   @   672,084,599.00 op/s
  @arr/forEach.spec   ⇝   8,685.29ms   @    34,541,158.05 op/s
  fastjs.forEach      ⇝     450.31ms   @   666,202,388.74 op/s
  lodash.foreach      ⇝     638.09ms   @   470,151,455.37 op/s
  ramda.forEach       ⇝     458.40ms   @   654,453,328.46 op/s
```
</details>


## includes

<details>
<summary>:no_entry_sign: ↝ Strings (`true`)</summary>

```
Array<string>(100)
  native          ⇝   14.32ms   @   209,471,403.10 op/s
  @arr/includes   ⇝   18.70ms   @   160,441,689.55 op/s

Array<string>(500)
  native          ⇝   49.13ms   @   305,317,345.83 op/s
  @arr/includes   ⇝   66.30ms   @   226,238,403.00 op/s

Array<string>(1000)
  native          ⇝   178.20ms   @   168,352,194.81 op/s
  @arr/includes   ⇝   204.41ms   @   146,767,295.48 op/s

Array<string>(5000)
  native          ⇝     971.96ms   @   154,328,100.40 op/s
  @arr/includes   ⇝   1,105.11ms   @   135,733,675.28 op/s

Array<string>(10000)
  native          ⇝   1,743.72ms   @   172,045,926.38 op/s
  @arr/includes   ⇝   1,996.57ms   @   150,257,852.24 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Strings (`false`)</summary>

```
Array<string>(100)
  native          ⇝   12.64ms   @   237,416,922.87 op/s
  @arr/includes   ⇝   18.31ms   @   163,828,152.79 op/s

Array<string>(500)
  native          ⇝   53.28ms   @   281,521,381.33 op/s
  @arr/includes   ⇝   67.73ms   @   221,471,483.11 op/s

Array<string>(1000)
  native          ⇝   105.01ms   @   285,689,534.12 op/s
  @arr/includes   ⇝   135.04ms   @   222,152,744.36 op/s

Array<string>(5000)
  native          ⇝   497.80ms   @   301,328,793.69 op/s
  @arr/includes   ⇝   669.26ms   @   224,127,855.87 op/s

Array<string>(10000)
  native          ⇝   1,021.57ms   @   293,666,734.17 op/s
  @arr/includes   ⇝   1,367.52ms   @   219,375,743.14 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers (`true`)</summary>

```
Array<number>(100)
  native          ⇝   5.92ms   @   506,756,414.35 op/s
  @arr/includes   ⇝   5.74ms   @   522,399,807.20 op/s

Array<number>(500)
  native          ⇝   23.37ms   @   641,890,849.54 op/s
  @arr/includes   ⇝   22.18ms   @   676,371,576.72 op/s

Array<number>(1000)
  native          ⇝   43.94ms   @   682,798,820.59 op/s
  @arr/includes   ⇝   43.65ms   @   687,362,856.79 op/s

Array<number>(5000)
  native          ⇝   217.84ms   @   688,570,197.89 op/s
  @arr/includes   ⇝   221.46ms   @   677,309,192.90 op/s

Array<number>(10000)
  native          ⇝   453.95ms   @   660,871,280.80 op/s
  @arr/includes   ⇝   432.01ms   @   694,430,033.41 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Numbers (`false`)</summary>

```
Array<number>(100)
  native          ⇝    6.80ms   @   440,977,447.09 op/s
  @arr/includes   ⇝   18.95ms   @   158,335,075.02 op/s

Array<number>(500)
  native          ⇝   31.87ms   @   470,674,440.70 op/s
  @arr/includes   ⇝   93.56ms   @   160,317,106.38 op/s

Array<number>(1000)
  native          ⇝    64.68ms   @   463,839,533.79 op/s
  @arr/includes   ⇝   169.72ms   @   176,760,444.17 op/s

Array<number>(5000)
  native          ⇝   275.26ms   @   544,944,087.41 op/s
  @arr/includes   ⇝   856.95ms   @   175,040,322.03 op/s

Array<number>(10000)
  native          ⇝     553.38ms   @   542,118,555.84 op/s
  @arr/includes   ⇝   1,707.94ms   @   175,650,630.53 op/s
```
</details>


## map

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native          ⇝   332.37ms   @     9,025,964.35 op/s
  @arr/map        ⇝    11.69ms   @   256,635,547.33 op/s
  @arr/map.spec   ⇝   141.83ms   @    21,152,253.65 op/s
  arr-map         ⇝    18.33ms   @   163,641,016.99 op/s
  array-map       ⇝   327.02ms   @     9,173,816.15 op/s
  fastjs.map      ⇝    11.77ms   @   254,889,113.04 op/s
  lodash.map      ⇝    13.42ms   @   223,509,521.17 op/s
  ramda.map       ⇝    46.90ms   @    63,971,284.91 op/s

Array<string>(500)
  native          ⇝   1,613.33ms   @     9,297,537.01 op/s
  @arr/map        ⇝      52.21ms   @   287,294,256.37 op/s
  @arr/map.spec   ⇝     690.01ms   @    21,738,858.57 op/s
  arr-map         ⇝      54.98ms   @   272,838,213.71 op/s
  array-map       ⇝   1,639.40ms   @     9,149,679.40 op/s
  fastjs.map      ⇝      52.36ms   @   286,497,022.87 op/s
  lodash.map      ⇝      57.28ms   @   261,861,601.71 op/s
  ramda.map       ⇝     170.74ms   @    87,852,978.63 op/s

Array<string>(1000)
  native          ⇝   3,222.15ms   @     9,310,547.98 op/s
  @arr/map        ⇝     104.89ms   @   286,025,184.19 op/s
  @arr/map.spec   ⇝   1,374.35ms   @    21,828,560.48 op/s
  arr-map         ⇝     106.22ms   @   282,444,977.04 op/s
  array-map       ⇝   3,219.98ms   @     9,316,828.26 op/s
  fastjs.map      ⇝     105.20ms   @   285,161,786.11 op/s
  lodash.map      ⇝     113.16ms   @   265,102,943.41 op/s
  ramda.map       ⇝     328.81ms   @    91,237,147.62 op/s

Array<string>(5000)
  native          ⇝   16,079.98ms   @     9,328,367.50 op/s
  @arr/map        ⇝      523.02ms   @   286,794,832.50 op/s
  @arr/map.spec   ⇝    6,821.91ms   @    21,987,987.10 op/s
  arr-map         ⇝      519.31ms   @   288,843,713.13 op/s
  array-map       ⇝   16,064.01ms   @     9,337,642.71 op/s
  fastjs.map      ⇝      521.00ms   @   287,908,220.94 op/s
  lodash.map      ⇝      559.52ms   @   268,088,225.81 op/s
  ramda.map       ⇝    1,585.68ms   @    94,596,441.63 op/s

Array<string>(10000)
  native          ⇝   32,182.85ms   @     9,321,735.91 op/s
  @arr/map        ⇝    1,034.77ms   @   289,920,761.23 op/s
  @arr/map.spec   ⇝   13,597.66ms   @    22,062,619.88 op/s
  arr-map         ⇝    1,037.62ms   @   289,123,920.81 op/s
  array-map       ⇝   32,255.65ms   @     9,300,697.59 op/s
  fastjs.map      ⇝    1,035.69ms   @   289,662,944.77 op/s
  lodash.map      ⇝    1,120.60ms   @   267,714,033.93 op/s
  ramda.map       ⇝    3,098.16ms   @    96,831,774.66 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native          ⇝   330.24ms   @     9,084,369.12 op/s
  @arr/map        ⇝    10.27ms   @   292,203,627.36 op/s
  @arr/map.spec   ⇝   142.18ms   @    21,100,141.99 op/s
  arr-map         ⇝    10.97ms   @   273,358,806.12 op/s
  array-map       ⇝   322.36ms   @     9,306,464.52 op/s
  fastjs.map      ⇝    11.72ms   @   256,032,509.98 op/s
  lodash.map      ⇝    10.51ms   @   285,402,354.53 op/s
  ramda.map       ⇝    44.06ms   @    68,084,903.96 op/s

Array<number>(500)
  native          ⇝   1,622.36ms   @     9,245,788.50 op/s
  @arr/map        ⇝      47.49ms   @   315,837,381.23 op/s
  @arr/map.spec   ⇝     689.35ms   @    21,759,502.31 op/s
  arr-map         ⇝      49.30ms   @   304,288,798.47 op/s
  array-map       ⇝   1,619.41ms   @     9,262,640.07 op/s
  fastjs.map      ⇝      47.84ms   @   313,526,262.90 op/s
  lodash.map      ⇝      52.40ms   @   286,271,588.34 op/s
  ramda.map       ⇝     166.28ms   @    90,206,584.99 op/s

Array<number>(1000)
  native          ⇝   3,229.20ms   @     9,290,227.25 op/s
  @arr/map        ⇝      95.62ms   @   313,739,171.68 op/s
  @arr/map.spec   ⇝   1,380.83ms   @    21,726,071.84 op/s
  arr-map         ⇝      96.74ms   @   310,097,945.78 op/s
  array-map       ⇝   3,238.68ms   @     9,263,021.65 op/s
  fastjs.map      ⇝      99.13ms   @   302,635,012.79 op/s
  lodash.map      ⇝     104.67ms   @   286,603,948.04 op/s
  ramda.map       ⇝     316.33ms   @    94,837,074.41 op/s

Array<number>(5000)
  native          ⇝   16,146.21ms   @     9,290,108.27 op/s
  @arr/map        ⇝      470.08ms   @   319,094,717.23 op/s
  @arr/map.spec   ⇝    6,873.57ms   @    21,822,719.40 op/s
  arr-map         ⇝      472.30ms   @   317,592,122.56 op/s
  array-map       ⇝   16,202.01ms   @     9,258,108.19 op/s
  fastjs.map      ⇝      479.09ms   @   313,090,319.40 op/s
  lodash.map      ⇝      517.40ms   @   289,911,994.93 op/s
  ramda.map       ⇝    1,524.32ms   @    98,404,488.13 op/s

Array<number>(10000)
  native          ⇝   32,447.27ms   @     9,245,769.97 op/s
  @arr/map        ⇝      938.88ms   @   319,530,461.32 op/s
  @arr/map.spec   ⇝   13,701.76ms   @    21,894,994.58 op/s
  arr-map         ⇝      940.10ms   @   319,113,798.35 op/s
  array-map       ⇝   32,281.69ms   @     9,293,194.03 op/s
  fastjs.map      ⇝      954.70ms   @   314,235,940.81 op/s
  lodash.map      ⇝    1,049.36ms   @   285,888,517.88 op/s
  ramda.map       ⇝    3,024.23ms   @    99,198,661.77 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native          ⇝   335.34ms   @     8,946,058.23 op/s
  @arr/map        ⇝    10.68ms   @   280,817,996.61 op/s
  @arr/map.spec   ⇝   140.83ms   @    21,301,814.22 op/s
  arr-map         ⇝    11.91ms   @   251,967,361.16 op/s
  array-map       ⇝   325.70ms   @     9,211,024.05 op/s
  fastjs.map      ⇝    12.84ms   @   233,593,411.05 op/s
  lodash.map      ⇝    12.08ms   @   248,435,765.61 op/s
  ramda.map       ⇝    44.88ms   @    66,842,081.08 op/s

Array<object>(500)
  native          ⇝   1,612.74ms   @     9,300,944.69 op/s
  @arr/map        ⇝      53.51ms   @   280,340,887.79 op/s
  @arr/map.spec   ⇝     689.17ms   @    21,765,397.07 op/s
  arr-map         ⇝      55.79ms   @   268,863,272.43 op/s
  array-map       ⇝   1,608.57ms   @     9,325,052.16 op/s
  fastjs.map      ⇝      53.50ms   @   280,376,892.34 op/s
  lodash.map      ⇝      57.11ms   @   262,648,149.97 op/s
  ramda.map       ⇝     170.79ms   @    87,829,669.84 op/s

Array<object>(1000)
  native          ⇝   3,269.37ms   @     9,176,069.62 op/s
  @arr/map        ⇝     108.01ms   @   277,761,734.47 op/s
  @arr/map.spec   ⇝   1,367.24ms   @    21,941,989.41 op/s
  arr-map         ⇝     109.86ms   @   273,082,331.89 op/s
  array-map       ⇝   3,252.22ms   @     9,224,464.06 op/s
  fastjs.map      ⇝     108.22ms   @   277,202,039.41 op/s
  lodash.map      ⇝     115.34ms   @   260,096,053.13 op/s
  ramda.map       ⇝     328.49ms   @    91,326,703.29 op/s

Array<object>(5000)
  native          ⇝   17,005.28ms   @     8,820,790.97 op/s
  @arr/map        ⇝      552.82ms   @   271,334,844.96 op/s
  @arr/map.spec   ⇝    6,802.65ms   @    22,050,236.83 op/s
  arr-map         ⇝      559.45ms   @   268,119,114.86 op/s
  array-map       ⇝   16,930.80ms   @     8,859,594.27 op/s
  fastjs.map      ⇝      561.12ms   @   267,320,809.00 op/s
  lodash.map      ⇝      596.48ms   @   251,474,220.68 op/s
  ramda.map       ⇝    1,616.13ms   @    92,814,448.00 op/s

Array<object>(10000)
  native          ⇝   33,800.59ms   @     8,875,585.67 op/s
  @arr/map        ⇝    1,118.13ms   @   268,304,068.20 op/s
  @arr/map.spec   ⇝   13,751.84ms   @    21,815,269.10 op/s
  arr-map         ⇝    1,197.52ms   @   250,518,568.64 op/s
  array-map       ⇝   36,293.21ms   @     8,266,008.40 op/s
  fastjs.map      ⇝    1,118.18ms   @   268,292,229.25 op/s
  lodash.map      ⇝    1,210.11ms   @   247,910,893.74 op/s
  ramda.map       ⇝    3,194.17ms   @    93,921,163.72 op/s
```
</details>


## reduce

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native          ⇝   58.84ms   @    50,988,921.64 op/s
  @arr/reduce     ⇝    6.51ms   @   460,735,859.67 op/s
  arr-reduce      ⇝    7.24ms   @   414,166,081.43 op/s
  fastjs.reduce   ⇝    6.52ms   @   460,065,685.11 op/s
  lodash.reduce   ⇝    8.03ms   @   373,695,941.30 op/s
  ramda.reduce    ⇝   58.64ms   @    51,159,504.59 op/s

Array<string>(500)
  native          ⇝   263.13ms   @    57,006,072.10 op/s
  @arr/reduce     ⇝    24.09ms   @   622,708,717.33 op/s
  arr-reduce      ⇝    27.51ms   @   545,245,191.13 op/s
  fastjs.reduce   ⇝    23.74ms   @   631,758,712.65 op/s
  lodash.reduce   ⇝    28.25ms   @   531,047,591.21 op/s
  ramda.reduce    ⇝   207.63ms   @    72,244,517.17 op/s

Array<string>(1000)
  native          ⇝   540.68ms   @    55,485,887.27 op/s
  @arr/reduce     ⇝    46.05ms   @   651,533,979.20 op/s
  arr-reduce      ⇝    54.34ms   @   552,038,264.20 op/s
  fastjs.reduce   ⇝    49.78ms   @   602,674,488.58 op/s
  lodash.reduce   ⇝    59.59ms   @   503,453,472.66 op/s
  ramda.reduce    ⇝   407.03ms   @    73,704,003.36 op/s

Array<string>(5000)
  native          ⇝   2,663.76ms   @    56,311,392.11 op/s
  @arr/reduce     ⇝     223.56ms   @   670,955,746.81 op/s
  arr-reduce      ⇝     281.74ms   @   532,407,795.62 op/s
  fastjs.reduce   ⇝     226.29ms   @   662,864,227.04 op/s
  lodash.reduce   ⇝     270.74ms   @   554,029,661.43 op/s
  ramda.reduce    ⇝   2,047.60ms   @    73,256,587.14 op/s

Array<string>(10000)
  native          ⇝   5,384.49ms   @    55,715,566.72 op/s
  @arr/reduce     ⇝     449.61ms   @   667,245,080.67 op/s
  arr-reduce      ⇝     539.15ms   @   556,428,728.25 op/s
  fastjs.reduce   ⇝     450.49ms   @   665,940,839.99 op/s
  lodash.reduce   ⇝     540.03ms   @   555,529,424.07 op/s
  ramda.reduce    ⇝   4,059.51ms   @    73,900,555.42 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native          ⇝   53.36ms   @    56,217,237.65 op/s
  @arr/reduce     ⇝    5.39ms   @   556,110,945.62 op/s
  arr-reduce      ⇝    8.88ms   @   337,706,558.22 op/s
  fastjs.reduce   ⇝    5.72ms   @   524,846,220.06 op/s
  lodash.reduce   ⇝    7.81ms   @   384,357,273.92 op/s
  ramda.reduce    ⇝   48.87ms   @    61,384,212.77 op/s

Array<number>(500)
  native          ⇝   265.33ms   @    56,532,544.07 op/s
  @arr/reduce     ⇝    23.51ms   @   637,931,943.72 op/s
  arr-reduce      ⇝    27.40ms   @   547,505,561.01 op/s
  fastjs.reduce   ⇝    23.80ms   @   630,358,069.86 op/s
  lodash.reduce   ⇝    28.04ms   @   535,028,741.92 op/s
  ramda.reduce    ⇝   211.69ms   @    70,859,485.07 op/s

Array<number>(1000)
  native          ⇝   529.39ms   @    56,669,110.07 op/s
  @arr/reduce     ⇝    45.32ms   @   661,967,725.54 op/s
  arr-reduce      ⇝    54.01ms   @   555,498,010.08 op/s
  fastjs.reduce   ⇝    45.34ms   @   661,618,210.96 op/s
  lodash.reduce   ⇝    54.96ms   @   545,885,487.31 op/s
  ramda.reduce    ⇝   404.73ms   @    74,123,068.32 op/s

Array<number>(5000)
  native          ⇝   2,660.11ms   @    56,388,731.79 op/s
  @arr/reduce     ⇝     232.35ms   @   645,585,955.38 op/s
  arr-reduce      ⇝     283.80ms   @   528,540,213.09 op/s
  fastjs.reduce   ⇝     223.45ms   @   671,293,342.71 op/s
  lodash.reduce   ⇝     269.26ms   @   557,088,597.35 op/s
  ramda.reduce    ⇝   2,037.07ms   @    73,635,270.73 op/s

Array<number>(10000)
  native          ⇝   5,283.18ms   @    56,783,938.26 op/s
  @arr/reduce     ⇝     458.29ms   @   654,608,230.28 op/s
  arr-reduce      ⇝     543.24ms   @   552,243,410.25 op/s
  fastjs.reduce   ⇝     446.17ms   @   672,384,660.18 op/s
  lodash.reduce   ⇝     536.44ms   @   559,241,978.22 op/s
  ramda.reduce    ⇝   4,043.44ms   @    74,194,294.09 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native          ⇝   56.51ms   @    53,086,875.27 op/s
  @arr/reduce     ⇝    5.42ms   @   553,951,353.47 op/s
  arr-reduce      ⇝    6.78ms   @   442,708,959.74 op/s
  fastjs.reduce   ⇝    5.81ms   @   515,956,114.84 op/s
  lodash.reduce   ⇝    9.33ms   @   321,662,592.45 op/s
  ramda.reduce    ⇝   44.68ms   @    67,149,734.39 op/s

Array<object>(500)
  native          ⇝   270.25ms   @    55,503,285.64 op/s
  @arr/reduce     ⇝    23.06ms   @   650,339,362.25 op/s
  arr-reduce      ⇝    27.42ms   @   546,952,499.18 op/s
  fastjs.reduce   ⇝    23.90ms   @   627,661,178.79 op/s
  lodash.reduce   ⇝    28.95ms   @   518,200,837.09 op/s
  ramda.reduce    ⇝   204.58ms   @    73,321,837.64 op/s

Array<object>(1000)
  native          ⇝   531.44ms   @    56,450,629.21 op/s
  @arr/reduce     ⇝    45.67ms   @   656,852,084.99 op/s
  arr-reduce      ⇝    54.92ms   @   546,200,436.77 op/s
  fastjs.reduce   ⇝    45.57ms   @   658,336,226.36 op/s
  lodash.reduce   ⇝    55.55ms   @   540,053,509.58 op/s
  ramda.reduce    ⇝   417.34ms   @    71,883,732.20 op/s

Array<object>(5000)
  native          ⇝   2,670.08ms   @    56,178,136.79 op/s
  @arr/reduce     ⇝     227.95ms   @   658,032,747.67 op/s
  arr-reduce      ⇝     268.43ms   @   558,801,961.08 op/s
  fastjs.reduce   ⇝     223.63ms   @   670,745,085.95 op/s
  lodash.reduce   ⇝     277.22ms   @   541,094,650.71 op/s
  ramda.reduce    ⇝   2,058.92ms   @    72,853,854.05 op/s

Array<object>(10000)
  native          ⇝   5,253.43ms   @    57,105,556.89 op/s
  @arr/reduce     ⇝     446.33ms   @   672,146,497.82 op/s
  arr-reduce      ⇝     534.36ms   @   561,423,635.45 op/s
  fastjs.reduce   ⇝     445.50ms   @   673,406,511.10 op/s
  lodash.reduce   ⇝     545.89ms   @   549,565,371.37 op/s
  ramda.reduce    ⇝   4,042.55ms   @    74,210,652.00 op/s
```
</details>


## reduceRight

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native               ⇝   30.08ms   @    99,720,503.37 op/s
  @arr/reduceRight     ⇝    7.29ms   @   411,361,700.47 op/s
  fastjs.reduceRight   ⇝    6.58ms   @   455,824,040.98 op/s
  lodash.reduceright   ⇝    8.09ms   @   371,011,533.26 op/s
  ramda.reduceRight    ⇝    8.26ms   @   363,143,544.83 op/s

Array<string>(500)
  native               ⇝   136.35ms   @   110,009,263.22 op/s
  @arr/reduceRight     ⇝    27.39ms   @   547,552,967.54 op/s
  fastjs.reduceRight   ⇝    22.96ms   @   653,378,629.61 op/s
  lodash.reduceright   ⇝    35.89ms   @   417,896,838.88 op/s
  ramda.reduceRight    ⇝    23.90ms   @   627,540,598.11 op/s

Array<string>(1000)
  native               ⇝   272.04ms   @   110,276,226.95 op/s
  @arr/reduceRight     ⇝    54.53ms   @   550,180,011.56 op/s
  fastjs.reduceRight   ⇝    45.17ms   @   664,209,872.43 op/s
  lodash.reduceright   ⇝    54.97ms   @   545,721,393.29 op/s
  ramda.reduceRight    ⇝    46.08ms   @   651,070,207.50 op/s

Array<string>(5000)
  native               ⇝   1,348.45ms   @   111,238,919.03 op/s
  @arr/reduceRight     ⇝     268.44ms   @   558,794,119.31 op/s
  fastjs.reduceRight   ⇝     231.16ms   @   648,892,654.74 op/s
  lodash.reduceright   ⇝     277.12ms   @   541,286,653.97 op/s
  ramda.reduceRight    ⇝     229.01ms   @   654,992,390.87 op/s

Array<string>(10000)
  native               ⇝   2,750.80ms   @   109,059,293.71 op/s
  @arr/reduceRight     ⇝     549.24ms   @   546,213,624.49 op/s
  fastjs.reduceRight   ⇝     459.62ms   @   652,714,290.95 op/s
  lodash.reduceright   ⇝     552.73ms   @   542,762,937.67 op/s
  ramda.reduceRight    ⇝     455.89ms   @   658,057,513.72 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native               ⇝   31.99ms   @    93,786,928.60 op/s
  @arr/reduceRight     ⇝    6.13ms   @   489,288,496.24 op/s
  fastjs.reduceRight   ⇝    5.38ms   @   557,678,140.52 op/s
  lodash.reduceright   ⇝    7.28ms   @   412,034,370.26 op/s
  ramda.reduceRight    ⇝    6.36ms   @   471,572,434.70 op/s

Array<number>(500)
  native               ⇝   149.58ms   @   100,282,075.43 op/s
  @arr/reduceRight     ⇝    27.86ms   @   538,459,254.84 op/s
  fastjs.reduceRight   ⇝    23.15ms   @   647,869,132.51 op/s
  lodash.reduceright   ⇝    28.43ms   @   527,666,393.27 op/s
  ramda.reduceRight    ⇝    24.07ms   @   623,057,747.28 op/s

Array<number>(1000)
  native               ⇝   275.04ms   @   109,075,180.05 op/s
  @arr/reduceRight     ⇝    54.25ms   @   552,979,887.88 op/s
  fastjs.reduceRight   ⇝    49.36ms   @   607,732,201.10 op/s
  lodash.reduceright   ⇝    55.21ms   @   543,369,114.55 op/s
  ramda.reduceRight    ⇝    46.37ms   @   646,963,494.09 op/s

Array<number>(5000)
  native               ⇝   1,368.96ms   @   109,572,611.89 op/s
  @arr/reduceRight     ⇝     267.73ms   @   560,270,574.83 op/s
  fastjs.reduceRight   ⇝     223.22ms   @   671,987,087.10 op/s
  lodash.reduceright   ⇝     269.68ms   @   556,216,111.63 op/s
  ramda.reduceRight    ⇝     231.19ms   @   648,806,519.76 op/s

Array<number>(10000)
  native               ⇝   2,704.90ms   @   110,909,750.56 op/s
  @arr/reduceRight     ⇝     548.12ms   @   547,321,785.47 op/s
  fastjs.reduceRight   ⇝     445.80ms   @   672,941,438.83 op/s
  lodash.reduceright   ⇝     557.50ms   @   538,112,699.18 op/s
  ramda.reduceRight    ⇝     448.16ms   @   669,405,003.20 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native               ⇝   27.73ms   @   108,185,568.98 op/s
  @arr/reduceRight     ⇝    6.06ms   @   494,914,179.41 op/s
  fastjs.reduceRight   ⇝    5.71ms   @   525,454,965.18 op/s
  lodash.reduceright   ⇝    7.04ms   @   426,129,826.42 op/s
  ramda.reduceRight    ⇝    8.90ms   @   337,089,824.89 op/s

Array<object>(500)
  native               ⇝   147.76ms   @   101,513,890.87 op/s
  @arr/reduceRight     ⇝    27.39ms   @   547,620,454.05 op/s
  fastjs.reduceRight   ⇝    23.12ms   @   648,843,427.94 op/s
  lodash.reduceright   ⇝    28.06ms   @   534,515,253.46 op/s
  ramda.reduceRight    ⇝    25.00ms   @   600,054,941.03 op/s

Array<object>(1000)
  native               ⇝   274.23ms   @   109,397,860.39 op/s
  @arr/reduceRight     ⇝    54.21ms   @   553,367,560.72 op/s
  fastjs.reduceRight   ⇝    45.43ms   @   660,298,440.37 op/s
  lodash.reduceright   ⇝    54.86ms   @   546,820,503.07 op/s
  ramda.reduceRight    ⇝    46.19ms   @   649,527,540.16 op/s

Array<object>(5000)
  native               ⇝   1,371.37ms   @   109,379,384.85 op/s
  @arr/reduceRight     ⇝     268.69ms   @   558,270,208.54 op/s
  fastjs.reduceRight   ⇝     231.42ms   @   648,169,314.48 op/s
  lodash.reduceright   ⇝     272.23ms   @   551,000,376.26 op/s
  ramda.reduceRight    ⇝     228.83ms   @   655,502,841.47 op/s

Array<object>(10000)
  native               ⇝   2,711.96ms   @   110,620,994.84 op/s
  @arr/reduceRight     ⇝     548.10ms   @   547,343,856.03 op/s
  fastjs.reduceRight   ⇝     455.64ms   @   658,409,082.84 op/s
  lodash.reduceright   ⇝     553.60ms   @   541,911,689.40 op/s
  ramda.reduceRight    ⇝     462.86ms   @   648,150,071.99 op/s
```
</details>


## reverse

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native            ⇝   34.52ms   @    86,914,205.86 op/s
  @arr/reverse      ⇝    7.56ms   @   396,659,964.44 op/s
  compute-reverse   ⇝    8.14ms   @   368,591,393.59 op/s
  lodash.reverse    ⇝   29.55ms   @   101,531,511.47 op/s
  ramda.reverse     ⇝   36.16ms   @    82,956,521.77 op/s

Array<string>(500)
  native            ⇝   143.39ms   @   104,612,342.85 op/s
  @arr/reverse      ⇝    27.63ms   @   542,841,896.75 op/s
  compute-reverse   ⇝    31.79ms   @   471,774,487.27 op/s
  lodash.reverse    ⇝   141.56ms   @   105,962,574.84 op/s
  ramda.reverse     ⇝    88.39ms   @   169,707,518.03 op/s

Array<string>(1000)
  native            ⇝   296.95ms   @   101,025,622.22 op/s
  @arr/reverse      ⇝    54.52ms   @   550,227,085.14 op/s
  compute-reverse   ⇝    54.64ms   @   549,046,316.61 op/s
  lodash.reverse    ⇝   295.61ms   @   101,483,429.98 op/s
  ramda.reverse     ⇝   174.31ms   @   172,110,846.36 op/s

Array<string>(5000)
  native            ⇝   1,433.92ms   @   104,608,300.83 op/s
  @arr/reverse      ⇝     267.70ms   @   560,328,041.74 op/s
  compute-reverse   ⇝     277.80ms   @   539,958,836.56 op/s
  lodash.reverse    ⇝   1,438.71ms   @   104,260,367.85 op/s
  ramda.reverse     ⇝     870.48ms   @   172,318,812.36 op/s

Array<string>(10000)
  native            ⇝   2,885.05ms   @   103,984,443.68 op/s
  @arr/reverse      ⇝     535.17ms   @   560,573,006.82 op/s
  compute-reverse   ⇝     536.43ms   @   559,251,601.75 op/s
  lodash.reverse    ⇝   2,855.47ms   @   105,061,386.76 op/s
  ramda.reverse     ⇝   1,702.49ms   @   176,212,534.31 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native            ⇝   28.77ms   @   104,280,114.74 op/s
  @arr/reverse      ⇝    5.77ms   @   520,096,980.75 op/s
  compute-reverse   ⇝    8.51ms   @   352,590,991.39 op/s
  lodash.reverse    ⇝   29.86ms   @   100,483,031.98 op/s
  ramda.reverse     ⇝   21.60ms   @   138,889,448.30 op/s

Array<number>(500)
  native            ⇝   152.09ms   @    98,628,390.10 op/s
  @arr/reverse      ⇝    23.16ms   @   647,722,678.31 op/s
  compute-reverse   ⇝    23.93ms   @   626,952,093.71 op/s
  lodash.reverse    ⇝   145.83ms   @   102,856,320.71 op/s
  ramda.reverse     ⇝    70.91ms   @   211,531,790.96 op/s

Array<number>(1000)
  native            ⇝   292.68ms   @   102,502,274.94 op/s
  @arr/reverse      ⇝    45.49ms   @   659,542,218.34 op/s
  compute-reverse   ⇝    45.82ms   @   654,744,925.56 op/s
  lodash.reverse    ⇝   285.83ms   @   104,957,910.09 op/s
  ramda.reverse     ⇝   134.51ms   @   223,030,599.11 op/s

Array<number>(5000)
  native            ⇝   1,393.13ms   @   107,671,322.30 op/s
  @arr/reverse      ⇝     223.38ms   @   671,494,404.04 op/s
  compute-reverse   ⇝     223.85ms   @   670,104,235.88 op/s
  lodash.reverse    ⇝   1,380.58ms   @   108,650,030.66 op/s
  ramda.reverse     ⇝     719.61ms   @   208,447,073.35 op/s

Array<number>(10000)
  native            ⇝   2,755.19ms   @   108,885,547.35 op/s
  @arr/reverse      ⇝     446.98ms   @   671,177,432.43 op/s
  compute-reverse   ⇝     457.63ms   @   655,555,108.10 op/s
  lodash.reverse    ⇝   2,775.11ms   @   108,103,665.53 op/s
  ramda.reverse     ⇝   1,385.45ms   @   216,536,227.11 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native            ⇝   29.28ms   @   102,472,105.39 op/s
  @arr/reverse      ⇝    6.42ms   @   467,641,616.30 op/s
  compute-reverse   ⇝    6.51ms   @   461,131,176.29 op/s
  lodash.reverse    ⇝   33.01ms   @    90,885,077.97 op/s
  ramda.reverse     ⇝   27.29ms   @   109,919,502.28 op/s

Array<object>(500)
  native            ⇝   152.23ms   @    98,534,442.06 op/s
  @arr/reverse      ⇝    27.59ms   @   543,589,440.67 op/s
  compute-reverse   ⇝    28.04ms   @   534,899,404.68 op/s
  lodash.reverse    ⇝   141.17ms   @   106,254,595.29 op/s
  ramda.reverse     ⇝    89.26ms   @   168,049,002.28 op/s

Array<object>(1000)
  native            ⇝   300.36ms   @    99,878,871.23 op/s
  @arr/reverse      ⇝    54.24ms   @   553,106,685.95 op/s
  compute-reverse   ⇝    59.41ms   @   504,955,498.61 op/s
  lodash.reverse    ⇝   299.05ms   @   100,316,900.42 op/s
  ramda.reverse     ⇝   173.76ms   @   172,655,832.77 op/s

Array<object>(5000)
  native            ⇝   1,448.71ms   @   103,540,440.28 op/s
  @arr/reverse      ⇝     299.28ms   @   501,203,174.98 op/s
  compute-reverse   ⇝     309.24ms   @   485,066,886.07 op/s
  lodash.reverse    ⇝   1,437.29ms   @   104,363,385.27 op/s
  ramda.reverse     ⇝     907.23ms   @   165,338,068.19 op/s

Array<object>(10000)
  native            ⇝   2,907.40ms   @   103,184,994.62 op/s
  @arr/reverse      ⇝     585.79ms   @   512,128,056.16 op/s
  compute-reverse   ⇝     595.94ms   @   503,408,064.20 op/s
  lodash.reverse    ⇝   2,881.51ms   @   104,112,092.48 op/s
  ramda.reverse     ⇝   1,841.84ms   @   162,880,474.48 op/s
```
</details>


## some

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native        ⇝   3.16ms   @     950,138,625.23 op/s
  @arr/some     ⇝   1.57ms   @   1,915,900,891.72 op/s
  fastjs.some   ⇝   1.28ms   @   2,340,239,640.54 op/s
  lodash.some   ⇝   2.26ms   @   1,326,544,374.01 op/s

Array<string>(500)
  native        ⇝   1.72ms   @    8,708,389,139.59 op/s
  @arr/some     ⇝   0.55ms   @   27,353,394,921.02 op/s
  fastjs.some   ⇝   0.63ms   @   23,905,296,776.29 op/s
  lodash.some   ⇝   0.82ms   @   18,216,617,441.32 op/s

Array<string>(1000)
  native        ⇝   1.52ms   @   19,800,333,437.62 op/s
  @arr/some     ⇝   0.52ms   @   57,365,764,111.98 op/s
  fastjs.some   ⇝   0.54ms   @   55,604,363,830.47 op/s
  lodash.some   ⇝   0.77ms   @   38,829,020,292.05 op/s

Array<string>(5000)
  native        ⇝   1.56ms   @    96,129,875,306.73 op/s
  @arr/some     ⇝   0.52ms   @   290,749,513,479.15 op/s
  fastjs.some   ⇝   0.53ms   @   284,499,338,064.87 op/s
  lodash.some   ⇝   0.80ms   @   188,359,862,773.56 op/s

Array<string>(10000)
  native        ⇝   1.52ms   @   196,727,632,560.00 op/s
  @arr/some     ⇝   0.52ms   @   576,402,098,103.64 op/s
  fastjs.some   ⇝   0.53ms   @   563,526,322,314.52 op/s
  lodash.some   ⇝   0.80ms   @   376,624,664,647.12 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native        ⇝   1.72ms   @   1,749,129,370.86 op/s
  @arr/some     ⇝   0.50ms   @   5,979,752,557.84 op/s
  fastjs.some   ⇝   0.50ms   @   5,943,607,056.25 op/s
  lodash.some   ⇝   0.80ms   @   3,761,580,967.40 op/s

Array<number>(500)
  native        ⇝   1.44ms   @   10,417,773,555.11 op/s
  @arr/some     ⇝   0.48ms   @   31,207,544,736.02 op/s
  fastjs.some   ⇝   0.49ms   @   30,630,122,888.05 op/s
  lodash.some   ⇝   0.76ms   @   19,864,129,355.21 op/s

Array<number>(1000)
  native        ⇝   1.45ms   @   20,709,150,338.08 op/s
  @arr/some     ⇝   0.50ms   @   60,520,964,462.09 op/s
  fastjs.some   ⇝   0.50ms   @   59,447,023,784.75 op/s
  lodash.some   ⇝   0.78ms   @   38,560,163,495.09 op/s

Array<number>(5000)
  native        ⇝   1.46ms   @   102,699,068,450.98 op/s
  @arr/some     ⇝   0.50ms   @   301,805,399,902.22 op/s
  fastjs.some   ⇝   0.50ms   @   297,486,241,261.34 op/s
  lodash.some   ⇝   0.78ms   @   192,759,193,649.74 op/s

Array<number>(10000)
  native        ⇝   1.43ms   @   210,033,143,230.00 op/s
  @arr/some     ⇝   0.50ms   @   595,337,318,124.45 op/s
  fastjs.some   ⇝   0.50ms   @   594,212,371,501.57 op/s
  lodash.some   ⇝   0.78ms   @   385,371,305,252.61 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native        ⇝   1.78ms   @   1,683,675,531.03 op/s
  @arr/some     ⇝   0.51ms   @   5,827,777,518.77 op/s
  fastjs.some   ⇝   0.58ms   @   5,195,326,976.56 op/s
  lodash.some   ⇝   0.83ms   @   3,628,236,386.86 op/s

Array<object>(500)
  native        ⇝   1.55ms   @    9,656,293,875.79 op/s
  @arr/some     ⇝   0.56ms   @   26,619,107,195.14 op/s
  fastjs.some   ⇝   0.59ms   @   25,333,601,306.54 op/s
  lodash.some   ⇝   0.79ms   @   18,904,616,129.17 op/s

Array<object>(1000)
  native        ⇝   1.46ms   @   20,590,465,927.93 op/s
  @arr/some     ⇝   0.52ms   @   58,041,898,511.81 op/s
  fastjs.some   ⇝   0.53ms   @   56,865,354,214.29 op/s
  lodash.some   ⇝   0.76ms   @   39,434,094,455.17 op/s

Array<object>(5000)
  native        ⇝   1.44ms   @   104,316,476,717.95 op/s
  @arr/some     ⇝   0.53ms   @   285,477,203,693.69 op/s
  fastjs.some   ⇝   0.52ms   @   286,800,851,224.93 op/s
  lodash.some   ⇝   0.76ms   @   198,087,007,737.28 op/s

Array<object>(10000)
  native        ⇝   1.42ms   @   210,953,255,571.28 op/s
  @arr/some     ⇝   0.51ms   @   585,997,015,321.87 op/s
  fastjs.some   ⇝   0.52ms   @   573,430,663,631.31 op/s
  lodash.some   ⇝   0.77ms   @   387,856,472,419.53 op/s
```
</details>


## unique

<details>
<summary>:wavy_dash: ↝ Strings</summary>

```
Array<string>(5)
  @arr/unique        ⇝    7.99ms   @   18,774,867.31 op/s
  arr-uniq           ⇝   29.49ms   @    5,085,886.38 op/s
  array-unique       ⇝    4.38ms   @   34,245,738.75 op/s
  lodash.uniq        ⇝    8.22ms   @   18,258,383.88 op/s
  ramda.uniq         ⇝   35.36ms   @    4,241,681.15 op/s

Array<string>(10)
  @arr/unique        ⇝    17.38ms   @   17,258,644.90 op/s
  arr-uniq           ⇝    72.62ms   @    4,130,986.87 op/s
  array-unique       ⇝    17.09ms   @   17,550,499.07 op/s
  lodash.uniq        ⇝    20.40ms   @   14,707,924.88 op/s
  ramda.uniq         ⇝   114.22ms   @    2,626,613.20 op/s

Array<string>(100)
  @arr/unique        ⇝   1,076.89ms   @   2,785,789.69 op/s
  arr-uniq           ⇝   3,455.44ms   @     868,196.65 op/s
  array-unique       ⇝   1,313.16ms   @   2,284,568.70 op/s
  lodash.uniq        ⇝     990.43ms   @   3,028,989.99 op/s
  ramda.uniq         ⇝     404.17ms   @   7,422,613.06 op/s

Array<string>(500)
  @arr/unique        ⇝   24,596.78ms   @     609,836.02 op/s
  arr-uniq           ⇝   78,978.35ms   @     189,925.46 op/s
  array-unique       ⇝   31,874.69ms   @     470,592.75 op/s
  lodash.uniq        ⇝    3,674.44ms   @   4,082,254.96 op/s
  ramda.uniq         ⇝    3,726.72ms   @   4,024,985.17 op/s
```
</details>

<details>
<summary>:wavy_dash: ↝ Numbers</summary>

```
Array<number>(5)
  @arr/unique        ⇝    4.71ms   @   31,836,008.05 op/s
  arr-uniq           ⇝   25.28ms   @    5,934,676.54 op/s
  array-unique       ⇝    3.21ms   @   46,674,649.07 op/s
  lodash.uniq        ⇝    5.83ms   @   25,738,607.96 op/s
  ramda.uniq         ⇝   27.49ms   @    5,455,610.98 op/s

Array<number>(10)
  @arr/unique        ⇝    5.86ms   @   51,200,847.61 op/s
  arr-uniq           ⇝   61.61ms   @    4,869,291.97 op/s
  array-unique       ⇝    7.65ms   @   39,210,109.73 op/s
  lodash.uniq        ⇝   11.70ms   @   25,631,979.96 op/s
  ramda.uniq         ⇝   44.95ms   @    6,673,587.03 op/s

Array<number>(100)
  @arr/unique        ⇝     180.63ms   @   16,608,857.42 op/s
  arr-uniq           ⇝   2,510.76ms   @    1,194,858.85 op/s
  array-unique       ⇝     541.65ms   @    5,538,654.99 op/s
  lodash.uniq        ⇝     318.45ms   @    9,420,585.21 op/s
  ramda.uniq         ⇝     317.58ms   @    9,446,487.59 op/s

Array<number>(500)
  @arr/unique        ⇝    3,573.92ms   @    4,197,069.82 op/s
  arr-uniq           ⇝   56,750.85ms   @      264,313.21 op/s
  array-unique       ⇝   12,640.04ms   @    1,186,705.13 op/s
  lodash.uniq        ⇝    1,509.79ms   @    9,935,129.60 op/s
  ramda.uniq         ⇝    1,471.19ms   @   10,195,835.39 op/s
```
</details>


<br>

> :white_check_mark: &mdash; Denotes function **is** faster than native <br>
> :no_entry_sign: &mdash; Denotes function **is not** faster than native <br>
> :mag: &mdash; Denotes function **is sometimes** faster than native <br>
> :wavy_dash: &mdash; Denotes function has no native counterpart <br>
