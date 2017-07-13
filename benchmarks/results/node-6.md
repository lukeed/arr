# Benchmark Results for Node `v6.11.0` (LTS)

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
  native         ⇝   185.85ms   @    16,142,148.27 op/s
  @arr/every     ⇝     6.14ms   @   488,651,954.23 op/s
  array-every    ⇝    16.10ms   @   186,323,668.81 op/s
  lodash.every   ⇝     7.82ms   @   383,579,277.97 op/s
  fastjs.every   ⇝     8.12ms   @   369,335,910.64 op/s

Array<string>(500)
  native         ⇝   936.64ms   @    16,014,692.52 op/s
  @arr/every     ⇝    22.72ms   @   660,247,185.98 op/s
  array-every    ⇝    32.17ms   @   466,334,851.80 op/s
  lodash.every   ⇝    31.74ms   @   472,591,013.00 op/s
  fastjs.every   ⇝    22.72ms   @   660,216,440.08 op/s

Array<string>(1000)
  native         ⇝   1,808.68ms   @    16,586,674.92 op/s
  @arr/every     ⇝      44.92ms   @   667,839,660.25 op/s
  array-every    ⇝      63.05ms   @   475,818,967.31 op/s
  lodash.every   ⇝      54.50ms   @   550,485,714.65 op/s
  fastjs.every   ⇝      45.00ms   @   666,630,624.17 op/s

Array<string>(5000)
  native         ⇝   9,067.05ms   @    16,543,423.93 op/s
  @arr/every     ⇝     222.73ms   @   673,453,681.99 op/s
  array-every    ⇝     317.16ms   @   472,953,589.33 op/s
  lodash.every   ⇝     271.82ms   @   551,837,690.14 op/s
  fastjs.every   ⇝     222.95ms   @   672,789,391.00 op/s

Array<string>(10000)
  native         ⇝   18,166.12ms   @    16,514,257.16 op/s
  @arr/every     ⇝      450.09ms   @   666,534,695.76 op/s
  array-every    ⇝      637.31ms   @   470,725,663.56 op/s
  lodash.every   ⇝      540.76ms   @   554,774,717.33 op/s
  fastjs.every   ⇝      445.41ms   @   673,539,917.01 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```Array<number>(100)
  native         ⇝   186.90ms   @    16,051,689.18 op/s
  @arr/every     ⇝     5.00ms   @   599,889,980.18 op/s
  array-every    ⇝    10.17ms   @   295,118,823.20 op/s
  lodash.every   ⇝     6.45ms   @   464,912,294.30 op/s
  fastjs.every   ⇝     5.05ms   @   594,143,644.92 op/s

Array<number>(500)
  native         ⇝   911.82ms   @    16,450,662.29 op/s
  @arr/every     ⇝    22.76ms   @   658,985,936.63 op/s
  array-every    ⇝    33.49ms   @   447,923,128.27 op/s
  lodash.every   ⇝    27.92ms   @   537,247,667.31 op/s
  fastjs.every   ⇝    22.77ms   @   658,640,155.73 op/s

Array<number>(1000)
  native         ⇝   1,824.22ms   @    16,445,344.26 op/s
  @arr/every     ⇝      49.76ms   @   602,925,381.89 op/s
  array-every    ⇝      64.77ms   @   463,188,774.64 op/s
  lodash.every   ⇝      54.39ms   @   551,538,141.52 op/s
  fastjs.every   ⇝      44.86ms   @   668,802,643.96 op/s

Array<number>(5000)
  native         ⇝   9,137.45ms   @    16,415,957.10 op/s
  @arr/every     ⇝     226.87ms   @   661,162,669.63 op/s
  array-every    ⇝     313.72ms   @   478,137,706.42 op/s
  lodash.every   ⇝     268.76ms   @   558,126,490.82 op/s
  fastjs.every   ⇝     231.33ms   @   648,414,358.67 op/s

Array<number>(10000)
  native         ⇝   18,089.40ms   @    16,584,297.67 op/s
  @arr/every     ⇝      445.09ms   @   674,021,738.67 op/s
  array-every    ⇝      625.85ms   @   479,351,772.21 op/s
  lodash.every   ⇝      538.89ms   @   556,696,099.06 op/s
  fastjs.every   ⇝      448.96ms   @   668,210,888.67 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```Array<object>(100)
  native         ⇝   187.36ms   @    16,012,278.30 op/s
  @arr/every     ⇝     4.99ms   @   601,479,398.73 op/s
  array-every    ⇝     8.66ms   @   346,589,856.19 op/s
  lodash.every   ⇝     6.47ms   @   463,932,208.99 op/s
  fastjs.every   ⇝     5.04ms   @   594,694,610.44 op/s

Array<object>(500)
  native         ⇝   929.27ms   @    16,141,689.84 op/s
  @arr/every     ⇝    22.78ms   @   658,453,440.36 op/s
  array-every    ⇝    33.73ms   @   444,664,840.10 op/s
  lodash.every   ⇝    27.87ms   @   538,153,794.52 op/s
  fastjs.every   ⇝    23.00ms   @   652,178,251.45 op/s

Array<object>(1000)
  native         ⇝   1,865.08ms   @    16,085,109.07 op/s
  @arr/every     ⇝      46.45ms   @   645,806,958.40 op/s
  array-every    ⇝      72.12ms   @   415,944,817.54 op/s
  lodash.every   ⇝      60.45ms   @   496,305,690.69 op/s
  fastjs.every   ⇝      50.21ms   @   597,444,705.10 op/s

Array<object>(5000)
  native         ⇝   10,334.30ms   @    14,514,773.59 op/s
  @arr/every     ⇝      628.77ms   @   238,562,364.03 op/s
  array-every    ⇝      884.33ms   @   169,619,251.02 op/s
  lodash.every   ⇝      755.95ms   @   198,425,978.26 op/s
  fastjs.every   ⇝      628.72ms   @   238,578,707.24 op/s

Array<object>(10000)
  native         ⇝   18,952.13ms   @    15,829,354.60 op/s
  @arr/every     ⇝      445.21ms   @   673,841,745.55 op/s
  array-every    ⇝      624.53ms   @   480,359,911.78 op/s
  lodash.every   ⇝      541.10ms   @   554,421,562.23 op/s
  fastjs.every   ⇝      444.85ms   @   674,391,647.65 op/
```
</details>


## filter

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native               ⇝   1,827.69ms   @     1,641,417.45 op/s
  @arr/filter          ⇝      21.11ms   @   142,126,033.01 op/s
  @arr/filter.mutate   ⇝       7.12ms   @   421,603,408.35 op/s
  arr-filter           ⇝      27.03ms   @   110,990,756.02 op/s
  array-filter         ⇝   1,818.93ms   @     1,649,322.15 op/s
  lodash.filter        ⇝      23.32ms   @   128,645,149.59 op/s
  fastjs.filter        ⇝      21.27ms   @   141,027,207.39 op/s
  ramda.filter         ⇝      50.89ms   @    58,948,829.19 op/s

Array<string>(500)
  native               ⇝   8,986.99ms   @     1,669,080.14 op/s
  @arr/filter          ⇝      89.51ms   @   167,572,923.38 op/s
  @arr/filter.mutate   ⇝      27.23ms   @   550,792,708.21 op/s
  arr-filter           ⇝      82.53ms   @   181,750,462.70 op/s
  array-filter         ⇝   8,982.13ms   @     1,669,983.44 op/s
  lodash.filter        ⇝      96.20ms   @   155,928,927.72 op/s
  fastjs.filter        ⇝      88.62ms   @   169,257,777.56 op/s
  ramda.filter         ⇝     106.83ms   @   140,412,256.56 op/s

Array<string>(1000)
  native               ⇝   17,954.16ms   @     1,670,921.54 op/s
  @arr/filter          ⇝      189.80ms   @   158,057,870.03 op/s
  @arr/filter.mutate   ⇝       53.97ms   @   555,866,645.29 op/s
  arr-filter           ⇝      156.99ms   @   191,092,078.43 op/s
  array-filter         ⇝   17,992.64ms   @     1,667,348.84 op/s
  lodash.filter        ⇝      206.45ms   @   145,313,827.42 op/s
  fastjs.filter        ⇝      193.87ms   @   154,744,716.74 op/s
  ramda.filter         ⇝      203.95ms   @   147,092,126.20 op/s

Array<string>(5000)
  native               ⇝   89,705.94ms   @     1,672,130.05 op/s
  @arr/filter          ⇝      962.71ms   @   155,809,810.51 op/s
  @arr/filter.mutate   ⇝      267.43ms   @   560,895,943.47 op/s
  arr-filter           ⇝      772.61ms   @   194,147,410.77 op/s
  array-filter         ⇝   89,720.75ms   @     1,671,854.13 op/s
  lodash.filter        ⇝    1,075.37ms   @   139,487,038.11 op/s
  fastjs.filter        ⇝      986.13ms   @   152,109,786.47 op/s
  ramda.filter         ⇝      978.86ms   @   153,238,887.94 op/s

Array<string>(10000)
  native               ⇝   178,872.52ms   @     1,677,172.11 op/s
  @arr/filter          ⇝     2,082.06ms   @   144,088,365.59 op/s
  @arr/filter.mutate   ⇝       533.91ms   @   561,890,169.01 op/s
  arr-filter           ⇝     1,536.13ms   @   195,296,592.36 op/s
  array-filter         ⇝   179,286.60ms   @     1,673,298.55 op/s
  lodash.filter        ⇝     2,280.58ms   @   131,545,277.26 op/s
  fastjs.filter        ⇝     2,104.06ms   @   142,581,665.64 op/s
  ramda.filter         ⇝     2,074.10ms   @   144,640,836.15 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native               ⇝   1,781.89ms   @     1,683,604.13 op/s
  @arr/filter          ⇝      18.85ms   @   159,191,375.73 op/s
  @arr/filter.mutate   ⇝       5.94ms   @   505,283,667.09 op/s
  arr-filter           ⇝      23.23ms   @   129,126,917.81 op/s
  array-filter         ⇝   1,783.54ms   @     1,682,047.22 op/s
  lodash.filter        ⇝      20.85ms   @   143,862,598.56 op/s
  fastjs.filter        ⇝      18.58ms   @   161,472,256.67 op/s
  ramda.filter         ⇝      37.23ms   @    80,587,658.10 op/s

Array<number>(500)
  native               ⇝   8,848.37ms   @     1,695,227.65 op/s
  @arr/filter          ⇝      84.53ms   @   177,458,356.94 op/s
  @arr/filter.mutate   ⇝      27.31ms   @   549,223,496.84 op/s
  arr-filter           ⇝      77.13ms   @   194,466,661.18 op/s
  array-filter         ⇝   8,859.42ms   @     1,693,113.94 op/s
  lodash.filter        ⇝      93.29ms   @   160,793,026.06 op/s
  fastjs.filter        ⇝      83.81ms   @   178,973,445.54 op/s
  ramda.filter         ⇝     104.15ms   @   144,022,223.67 op/s

Array<number>(1000)
  native               ⇝   17,673.90ms   @     1,697,418.17 op/s
  @arr/filter          ⇝      181.03ms   @   165,717,985.52 op/s
  @arr/filter.mutate   ⇝       54.12ms   @   554,316,084.26 op/s
  arr-filter           ⇝      146.94ms   @   204,164,972.24 op/s
  array-filter         ⇝   17,664.58ms   @     1,698,313.70 op/s
  lodash.filter        ⇝      197.49ms   @   151,904,146.58 op/s
  fastjs.filter        ⇝      180.51ms   @   166,196,471.92 op/s
  ramda.filter         ⇝      194.06ms   @   154,591,358.72 op/s

Array<number>(5000)
  native               ⇝   88,419.56ms   @     1,696,457.21 op/s
  @arr/filter          ⇝      952.84ms   @   157,424,880.91 op/s
  @arr/filter.mutate   ⇝      267.39ms   @   560,980,572.20 op/s
  arr-filter           ⇝      723.61ms   @   207,294,546.96 op/s
  array-filter         ⇝   88,380.39ms   @     1,697,209.12 op/s
  lodash.filter        ⇝    1,037.51ms   @   144,576,488.87 op/s
  fastjs.filter        ⇝      956.19ms   @   156,872,603.34 op/s
  ramda.filter         ⇝      930.69ms   @   161,171,501.40 op/s

Array<number>(10000)
  native               ⇝   178,724.64ms   @     1,678,559.84 op/s
  @arr/filter          ⇝     2,019.15ms   @   148,577,478.80 op/s
  @arr/filter.mutate   ⇝       533.48ms   @   562,344,194.46 op/s
  arr-filter           ⇝     1,457.71ms   @   205,802,107.33 op/s
  array-filter         ⇝   176,750.64ms   @     1,697,306.41 op/s
  lodash.filter        ⇝     2,188.72ms   @   137,066,438.11 op/s
  fastjs.filter        ⇝     1,995.79ms   @   150,316,417.03 op/s
  ramda.filter         ⇝     1,999.46ms   @   150,040,446.40 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native               ⇝   1,814.98ms   @     1,652,910.51 op/s
  @arr/filter          ⇝      19.58ms   @   153,233,220.96 op/s
  @arr/filter.mutate   ⇝       5.93ms   @   505,882,571.17 op/s
  arr-filter           ⇝      22.64ms   @   132,522,665.68 op/s
  array-filter         ⇝   1,802.55ms   @     1,664,306.39 op/s
  lodash.filter        ⇝      21.35ms   @   140,513,912.77 op/s
  fastjs.filter        ⇝      19.41ms   @   154,596,167.24 op/s
  ramda.filter         ⇝      38.43ms   @    78,065,042.39 op/s

Array<object>(500)
  native               ⇝   8,986.12ms   @     1,669,241.77 op/s
  @arr/filter          ⇝      89.33ms   @   167,919,792.37 op/s
  @arr/filter.mutate   ⇝      31.59ms   @   474,782,707.78 op/s
  arr-filter           ⇝      82.94ms   @   180,858,653.22 op/s
  array-filter         ⇝   8,985.56ms   @     1,669,344.91 op/s
  lodash.filter        ⇝      96.42ms   @   155,569,972.86 op/s
  fastjs.filter        ⇝      88.10ms   @   170,268,681.71 op/s
  ramda.filter         ⇝     105.24ms   @   142,527,479.51 op/s

Array<object>(1000)
  native               ⇝   17,991.19ms   @     1,667,482.93 op/s
  @arr/filter          ⇝      190.20ms   @   157,730,954.00 op/s
  @arr/filter.mutate   ⇝       53.87ms   @   556,875,360.47 op/s
  arr-filter           ⇝      158.46ms   @   189,320,546.61 op/s
  array-filter         ⇝   18,014.86ms   @     1,665,291.55 op/s
  lodash.filter        ⇝      207.79ms   @   144,379,853.92 op/s
  fastjs.filter        ⇝      190.87ms   @   157,177,450.93 op/s
  ramda.filter         ⇝      206.11ms   @   145,552,135.60 op/s

Array<object>(5000)
  native               ⇝   90,442.86ms   @     1,658,505.77 op/s
  @arr/filter          ⇝    1,011.29ms   @   148,325,376.83 op/s
  @arr/filter.mutate   ⇝      267.33ms   @   561,101,222.35 op/s
  arr-filter           ⇝      804.46ms   @   186,460,569.96 op/s
  array-filter         ⇝   90,761.14ms   @     1,652,689.60 op/s
  lodash.filter        ⇝    1,098.84ms   @   136,507,187.57 op/s
  fastjs.filter        ⇝    1,022.79ms   @   146,657,352.19 op/s
  ramda.filter         ⇝    1,010.77ms   @   148,401,354.28 op/s

Array<object>(10000)
  native               ⇝   182,683.86ms   @     1,642,181.16 op/s
  @arr/filter          ⇝     2,174.28ms   @   137,976,700.71 op/s
  @arr/filter.mutate   ⇝       533.59ms   @   562,232,775.68 op/s
  arr-filter           ⇝     1,625.52ms   @   184,556,589.88 op/s
  array-filter         ⇝   181,858.39ms   @     1,649,635.17 op/s
  lodash.filter        ⇝     2,375.83ms   @   126,271,635.39 op/s
  fastjs.filter        ⇝     2,190.89ms   @   136,930,788.32 op/s
  ramda.filter         ⇝     2,172.22ms   @   138,107,824.24 op/s
```
</details>


## find

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native        ⇝    2.04ms   @   1,471,723,049.19 op/s
  @arr/find     ⇝    1.15ms   @   2,602,212,748.24 op/s
  lodash.find   ⇝   26.41ms   @     113,576,624.05 op/s
  ramda.find    ⇝   32.32ms   @      92,814,648.78 op/s

Array<string>(500)
  native        ⇝    1.24ms   @   12,143,674,238.65 op/s
  @arr/find     ⇝    0.37ms   @   40,820,769,607.58 op/s
  lodash.find   ⇝   10.81ms   @    1,388,135,182.90 op/s
  ramda.find    ⇝   26.74ms   @      560,905,786.56 op/s

Array<string>(1000)
  native        ⇝    1.20ms   @   24,923,339,960.17 op/s
  @arr/find     ⇝    0.36ms   @   84,220,219,028.72 op/s
  lodash.find   ⇝   10.20ms   @    2,942,151,995.89 op/s
  ramda.find    ⇝   25.38ms   @    1,181,815,033.89 op/s

Array<string>(5000)
  native        ⇝    1.77ms   @    84,936,798,528.22 op/s
  @arr/find     ⇝    0.53ms   @   280,935,177,017.26 op/s
  lodash.find   ⇝   13.13ms   @    11,423,146,630.63 op/s
  ramda.find    ⇝   22.62ms   @     6,632,762,050.59 op/s

Array<string>(10000)
  native        ⇝    1.64ms   @   183,404,127,326.48 op/s
  @arr/find     ⇝    0.49ms   @   612,776,387,683.19 op/s
  lodash.find   ⇝   11.75ms   @    25,527,678,385.29 op/s
  ramda.find    ⇝   22.69ms   @    13,223,576,473.18 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native        ⇝   370.39ms   @   8,099,621.81 op/s
  @arr/find     ⇝   333.65ms   @   8,991,535.14 op/s
  lodash.find   ⇝   361.91ms   @   8,289,269.26 op/s
  ramda.find    ⇝   359.46ms   @   8,345,938.97 op/s

Array<number>(500)
  native        ⇝   1,844.61ms   @   8,131,793.76 op/s
  @arr/find     ⇝   1,580.84ms   @   9,488,643.43 op/s
  lodash.find   ⇝   1,657.99ms   @   9,047,084.47 op/s
  ramda.find    ⇝   1,645.44ms   @   9,116,075.92 op/s

Array<number>(1000)
  native        ⇝   3,582.64ms   @   8,373,724.51 op/s
  @arr/find     ⇝   3,129.45ms   @   9,586,337.68 op/s
  lodash.find   ⇝   3,309.32ms   @   9,065,307.38 op/s
  ramda.find    ⇝   3,276.34ms   @   9,156,561.29 op/s

Array<number>(5000)
  native        ⇝   17,729.41ms   @   8,460,517.23 op/s
  @arr/find     ⇝   15,362.32ms   @   9,764,148.92 op/s
  lodash.find   ⇝   15,939.25ms   @   9,410,731.31 op/s
  ramda.find    ⇝   15,550.31ms   @   9,646,108.62 op/s

Array<number>(10000)
  native        ⇝   34,952.85ms   @   8,582,991.26 op/s
  @arr/find     ⇝   30,461.60ms   @   9,848,464.55 op/s
  lodash.find   ⇝   31,522.71ms   @   9,516,948.96 op/s
  ramda.find    ⇝   30,990.38ms   @   9,680,424.86 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native        ⇝   176.65ms   @   16,982,863.05 op/s
  @arr/find     ⇝   133.19ms   @   22,523,455.42 op/s
  lodash.find   ⇝   150.44ms   @   19,941,172.08 op/s
  ramda.find    ⇝   163.28ms   @   18,373,735.75 op/s

Array<object>(500)
  native        ⇝   1,037.56ms   @   14,457,041.59 op/s
  @arr/find     ⇝     845.59ms   @   17,739,182.70 op/s
  lodash.find   ⇝     879.59ms   @   17,053,473.05 op/s
  ramda.find    ⇝     894.11ms   @   16,776,432.53 op/s

Array<object>(1000)
  native        ⇝   4,235.12ms   @   7,083,631.61 op/s
  @arr/find     ⇝   3,934.61ms   @   7,624,635.93 op/s
  lodash.find   ⇝   4,011.60ms   @   7,478,314.43 op/s
  ramda.find    ⇝   4,019.14ms   @   7,464,289.74 op/s

Array<object>(5000)
  native        ⇝   44,786.41ms   @   3,349,230.20 op/s
  @arr/find     ⇝   43,606.32ms   @   3,439,868.68 op/s
  lodash.find   ⇝   44,014.77ms   @   3,407,946.81 op/s
  ramda.find    ⇝   43,446.10ms   @   3,452,553.53 op/s

Array<object>(10000)
  native        ⇝   150,279.13ms   @   1,996,285.22 op/s
  @arr/find     ⇝   146,698.80ms   @   2,045,006.52 op/s
  lodash.find   ⇝   149,285.14ms   @   2,009,577.09 op/s
  ramda.find    ⇝   147,734.71ms   @   2,030,666.99 op/
```
</details>


## findIndex

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native             ⇝    2.81ms   @   1,068,330,032.79 op/s
  @arr/findIndex     ⇝    1.68ms   @   1,783,595,204.74 op/s
  lodash.findindex   ⇝    6.84ms   @     438,757,048.08 op/s
  ramda.findIndex    ⇝   37.66ms   @      79,661,072.94 op/s

Array<string>(500)
  native             ⇝    1.18ms   @   12,663,132,808.40 op/s
  @arr/findIndex     ⇝    0.38ms   @   38,990,915,116.78 op/s
  lodash.findindex   ⇝    0.55ms   @   27,472,930,006.30 op/s
  ramda.findIndex    ⇝   25.18ms   @      595,618,369.20 op/s

Array<string>(1000)
  native             ⇝    1.18ms   @   25,495,483,475.10 op/s
  @arr/findIndex     ⇝    0.38ms   @   79,257,306,202.68 op/s
  lodash.findindex   ⇝    0.55ms   @   54,730,243,750.26 op/s
  ramda.findIndex    ⇝   25.02ms   @    1,198,817,630.15 op/s

Array<string>(5000)
  native             ⇝    1.15ms   @   130,444,764,468.93 op/s
  @arr/findIndex     ⇝    0.38ms   @   398,362,993,671.34 op/s
  lodash.findindex   ⇝    0.63ms   @   238,031,762,958.45 op/s
  ramda.findIndex    ⇝   23.78ms   @     6,309,005,765.04 op/s

Array<string>(10000)
  native             ⇝    1.15ms   @   261,846,137,463.99 op/s
  @arr/findIndex     ⇝    0.37ms   @   821,580,172,531.84 op/s
  lodash.findindex   ⇝    0.53ms   @   566,410,711,959.38 op/s
  ramda.findIndex    ⇝   27.27ms   @    11,001,399,451.35 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native             ⇝   353.34ms   @   8,490,328.83 op/s
  @arr/findIndex     ⇝   320.02ms   @   9,374,534.09 op/s
  lodash.findindex   ⇝   324.73ms   @   9,238,462.68 op/s
  ramda.findIndex    ⇝   338.02ms   @   8,875,181.66 op/s

Array<number>(500)
  native             ⇝   1,737.09ms   @   8,635,106.93 op/s
  @arr/findIndex     ⇝   1,538.47ms   @   9,749,935.28 op/s
  lodash.findindex   ⇝   1,521.70ms   @   9,857,370.51 op/s
  ramda.findIndex    ⇝   1,566.48ms   @   9,575,606.13 op/s

Array<number>(1000)
  native             ⇝   3,459.21ms   @   8,672,501.21 op/s
  @arr/findIndex     ⇝   3,078.74ms   @   9,744,238.13 op/s
  lodash.findindex   ⇝   3,034.64ms   @   9,885,865.89 op/s
  ramda.findIndex    ⇝   3,073.85ms   @   9,759,748.37 op/s

Array<number>(5000)
  native             ⇝   17,314.36ms   @   8,663,331.35 op/s
  @arr/findIndex     ⇝   15,375.05ms   @   9,756,065.26 op/s
  lodash.findindex   ⇝   15,148.51ms   @   9,901,960.74 op/s
  ramda.findIndex    ⇝   15,288.00ms   @   9,811,617.99 op/s

Array<number>(10000)
  native             ⇝   34,804.60ms   @   8,619,551.15 op/s
  @arr/findIndex     ⇝   30,782.60ms   @   9,745,766.05 op/s
  lodash.findindex   ⇝   31,801.30ms   @   9,433,577.40 op/s
  ramda.findIndex    ⇝   32,156.49ms   @   9,329,374.99 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native             ⇝   197.85ms   @   15,163,375.90 op/s
  @arr/findIndex     ⇝   140.46ms   @   21,357,946.50 op/s
  lodash.findindex   ⇝   140.92ms   @   21,288,279.69 op/s
  ramda.findIndex    ⇝   173.73ms   @   17,268,119.39 op/s

Array<object>(500)
  native             ⇝   1,274.93ms   @   11,765,310.23 op/s
  @arr/findIndex     ⇝   1,031.90ms   @   14,536,294.59 op/s
  lodash.findindex   ⇝   1,034.52ms   @   14,499,533.52 op/s
  ramda.findIndex    ⇝   1,096.29ms   @   13,682,527.53 op/s

Array<object>(1000)
  native             ⇝   4,280.88ms   @   7,007,909.66 op/s
  @arr/findIndex     ⇝   3,904.01ms   @   7,684,409.59 op/s
  lodash.findindex   ⇝   3,915.72ms   @   7,661,435.59 op/s
  ramda.findIndex    ⇝   4,004.47ms   @   7,491,628.50 op/s

Array<object>(5000)
  native             ⇝   56,849.11ms   @   2,638,563.79 op/s
  @arr/findIndex     ⇝   47,072.89ms   @   3,186,547.66 op/s
  lodash.findindex   ⇝   46,083.54ms   @   3,254,958.24 op/s
  ramda.findIndex    ⇝   46,461.19ms   @   3,228,500.76 op/s

Array<object>(10000)
  native             ⇝   164,800.44ms   @   1,820,383.54 op/s
  @arr/findIndex     ⇝   158,953.09ms   @   1,887,349.34 op/s
  lodash.findindex   ⇝   153,196.69ms   @   1,958,266.87 op/s
  ramda.findIndex    ⇝   150,908.70ms   @   1,987,956.99 op/
```
</details>


## flatten

<details>
<summary>:wavy_dash: ↝ Strings</summary>

```
Array<array>(5)
  @arr/flatten         ⇝     180.54ms   @   830,853.95 op/s
  arr-flatten          ⇝     187.08ms   @   801,794.15 op/s
  array-flatten        ⇝     205.26ms   @   730,763.55 op/s
  flatten              ⇝   5,192.32ms   @    28,888.84 op/s
  flatten-array        ⇝     199.87ms   @   750,499.28 op/s
  lodash.flattendeep   ⇝     705.09ms   @   212,739.46 op/s
  ramda.flatten        ⇝     413.01ms   @   363,189.40 op/s

Array<array>(10)
  @arr/flatten         ⇝      398.74ms   @   752,361.08 op/s
  arr-flatten          ⇝      408.56ms   @   734,289.16 op/s
  array-flatten        ⇝      419.64ms   @   714,898.57 op/s
  flatten              ⇝   11,752.43ms   @    25,526.64 op/s
  flatten-array        ⇝      441.96ms   @   678,793.69 op/s
  lodash.flattendeep   ⇝    1,532.52ms   @   195,756.62 op/s
  ramda.flatten        ⇝      938.61ms   @   319,620.59 op/s

Array<array>(100)
  @arr/flatten         ⇝     4,040.62ms   @   742,460.99 op/s
  arr-flatten          ⇝     4,056.03ms   @   739,640.17 op/s
  array-flatten        ⇝     4,123.31ms   @   727,570.25 op/s
  flatten              ⇝   129,177.77ms   @    23,223.81 op/s
  flatten-array        ⇝     4,437.43ms   @   676,066.45 op/s
  lodash.flattendeep   ⇝    15,404.95ms   @   194,742.65 op/s
  ramda.flatten        ⇝     9,212.24ms   @   325,653.57 op/s

Array<array>(500)
  @arr/flatten         ⇝      21,442.65ms   @   699,540.34 op/s
  arr-flatten          ⇝      21,558.20ms   @   695,791.07 op/s
  array-flatten        ⇝      21,788.35ms   @   688,441.35 op/s
  flatten              ⇝   1,078,364.60ms   @    13,909.95 op/s
  flatten-array        ⇝      26,877.55ms   @   558,086.53 op/s
  lodash.flattendeep   ⇝      87,046.96ms   @   172,320.77 op/s
  ramda.flatten        ⇝      63,049.71ms   @   237,907.53 op/
```
</details>


## forEach

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native              ⇝   193.97ms   @    15,466,430.98 op/s
  @arr/forEach        ⇝     6.04ms   @   496,470,344.09 op/s
  @arr/forEach.spec   ⇝   188.05ms   @    15,952,992.02 op/s
  fastjs.forEach      ⇝     6.31ms   @   475,394,680.59 op/s
  lodash.foreach      ⇝     8.40ms   @   356,948,787.49 op/s
  ramda.forEach       ⇝     9.22ms   @   325,426,905.86 op/s

Array<string>(500)
  native              ⇝   931.31ms   @    16,106,371.10 op/s
  @arr/forEach        ⇝    22.74ms   @   659,671,858.11 op/s
  @arr/forEach.spec   ⇝   832.37ms   @    18,020,726.30 op/s
  fastjs.forEach      ⇝    22.76ms   @   659,009,735.07 op/s
  lodash.foreach      ⇝    32.23ms   @   465,342,457.15 op/s
  ramda.forEach       ⇝    27.96ms   @   536,460,329.60 op/s

Array<string>(1000)
  native              ⇝   1,863.07ms   @    16,102,470.64 op/s
  @arr/forEach        ⇝      45.06ms   @   665,805,144.40 op/s
  @arr/forEach.spec   ⇝   1,660.44ms   @    18,067,464.34 op/s
  fastjs.forEach      ⇝      45.15ms   @   664,432,843.45 op/s
  lodash.foreach      ⇝      63.38ms   @   473,341,941.95 op/s
  ramda.forEach       ⇝      47.43ms   @   632,532,580.12 op/s

Array<string>(5000)
  native              ⇝   9,283.21ms   @    16,158,201.76 op/s
  @arr/forEach        ⇝     225.34ms   @   665,650,771.17 op/s
  @arr/forEach.spec   ⇝   8,388.41ms   @    17,881,808.79 op/s
  fastjs.forEach      ⇝     227.69ms   @   658,804,791.87 op/s
  lodash.foreach      ⇝     312.58ms   @   479,877,828.48 op/s
  ramda.forEach       ⇝     225.61ms   @   664,860,306.22 op/s

Array<string>(10000)
  native              ⇝   18,510.11ms   @    16,207,358.82 op/s
  @arr/forEach        ⇝      449.94ms   @   666,757,151.54 op/s
  @arr/forEach.spec   ⇝   16,800.60ms   @    17,856,500.64 op/s
  fastjs.forEach      ⇝      452.61ms   @   662,819,955.70 op/s
  lodash.foreach      ⇝      627.90ms   @   477,780,496.31 op/s
  ramda.forEach       ⇝      452.79ms   @   662,564,579.18 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native              ⇝   192.62ms   @    15,574,954.99 op/s
  @arr/forEach        ⇝     4.99ms   @   601,346,776.24 op/s
  @arr/forEach.spec   ⇝   172.10ms   @    17,431,360.81 op/s
  fastjs.forEach      ⇝     5.05ms   @   594,614,929.35 op/s
  lodash.foreach      ⇝     7.42ms   @   404,164,293.32 op/s
  ramda.forEach       ⇝     7.73ms   @   388,212,722.97 op/s

Array<number>(500)
  native              ⇝   931.44ms   @    16,104,015.88 op/s
  @arr/forEach        ⇝    23.29ms   @   644,185,812.91 op/s
  @arr/forEach.spec   ⇝   849.74ms   @    17,652,379.79 op/s
  fastjs.forEach      ⇝    22.80ms   @   657,973,578.24 op/s
  lodash.foreach      ⇝    32.25ms   @   465,181,447.75 op/s
  ramda.forEach       ⇝    25.44ms   @   589,650,061.16 op/s

Array<number>(1000)
  native              ⇝   1,858.55ms   @    16,141,655.55 op/s
  @arr/forEach        ⇝      44.88ms   @   668,389,313.87 op/s
  @arr/forEach.spec   ⇝   1,683.36ms   @    17,821,481.36 op/s
  fastjs.forEach      ⇝      44.99ms   @   666,742,497.51 op/s
  lodash.foreach      ⇝      63.36ms   @   473,502,978.51 op/s
  ramda.forEach       ⇝      47.60ms   @   630,228,917.42 op/s

Array<number>(5000)
  native              ⇝   9,245.68ms   @    16,223,797.69 op/s
  @arr/forEach        ⇝     223.02ms   @   672,572,960.28 op/s
  @arr/forEach.spec   ⇝   8,395.91ms   @    17,865,833.86 op/s
  fastjs.forEach      ⇝     223.11ms   @   672,302,609.32 op/s
  lodash.foreach      ⇝     317.97ms   @   471,748,105.16 op/s
  ramda.forEach       ⇝     235.99ms   @   635,616,062.12 op/s

Array<number>(10000)
  native              ⇝   18,557.52ms   @    16,165,955.00 op/s
  @arr/forEach        ⇝      449.71ms   @   667,094,383.87 op/s
  @arr/forEach.spec   ⇝   16,741.90ms   @    17,919,115.41 op/s
  fastjs.forEach      ⇝      445.73ms   @   673,052,953.55 op/s
  lodash.foreach      ⇝      623.91ms   @   480,841,879.50 op/s
  ramda.forEach       ⇝      456.68ms   @   656,919,463.55 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native              ⇝   195.11ms   @    15,376,261.26 op/s
  @arr/forEach        ⇝     4.99ms   @   601,545,128.82 op/s
  @arr/forEach.spec   ⇝   172.02ms   @    17,440,148.29 op/s
  fastjs.forEach      ⇝     5.22ms   @   574,620,506.25 op/s
  lodash.foreach      ⇝     7.59ms   @   395,449,640.08 op/s
  ramda.forEach       ⇝     7.48ms   @   401,337,631.57 op/s

Array<object>(500)
  native              ⇝   928.07ms   @    16,162,643.59 op/s
  @arr/forEach        ⇝    22.98ms   @   652,677,155.51 op/s
  @arr/forEach.spec   ⇝   871.20ms   @    17,217,661.64 op/s
  fastjs.forEach      ⇝    23.00ms   @   652,128,575.93 op/s
  lodash.foreach      ⇝    32.54ms   @   460,953,136.15 op/s
  ramda.forEach       ⇝    25.57ms   @   586,614,122.73 op/s

Array<object>(1000)
  native              ⇝   1,855.76ms   @    16,165,899.61 op/s
  @arr/forEach        ⇝      45.37ms   @   661,262,200.09 op/s
  @arr/forEach.spec   ⇝   1,758.61ms   @    17,058,940.42 op/s
  fastjs.forEach      ⇝      50.04ms   @   599,483,724.62 op/s
  lodash.foreach      ⇝      65.46ms   @   458,286,040.76 op/s
  ramda.forEach       ⇝      49.89ms   @   601,318,077.20 op/s

Array<object>(5000)
  native              ⇝   9,344.34ms   @    16,052,494.68 op/s
  @arr/forEach        ⇝     223.46ms   @   671,265,807.05 op/s
  @arr/forEach.spec   ⇝   8,399.54ms   @    17,858,123.19 op/s
  fastjs.forEach      ⇝     230.06ms   @   652,008,067.70 op/s
  lodash.foreach      ⇝     312.76ms   @   479,607,774.46 op/s
  ramda.forEach       ⇝     226.88ms   @   661,135,099.15 op/s

Array<object>(10000)
  native              ⇝   18,500.62ms   @    16,215,676.37 op/s
  @arr/forEach        ⇝      445.83ms   @   672,897,116.77 op/s
  @arr/forEach.spec   ⇝   16,779.80ms   @    17,878,639.08 op/s
  fastjs.forEach      ⇝      445.84ms   @   672,887,867.90 op/s
  lodash.foreach      ⇝      630.86ms   @   475,540,481.04 op/s
  ramda.forEach       ⇝      448.81ms   @   668,438,801.91 op/
```
</details>


## includes

<details>
<summary>:white_check_mark: ↝ Strings (`true`)</summary>

```
Array<string>(100)
  native          ⇝   45.70ms   @     65,652,475.97 op/s
  @arr/includes   ⇝   15.28ms   @    196,270,905.14 op/s

Array<string>(500)
  native          ⇝   212.75ms   @    70,505,909.61 op/s
  @arr/includes   ⇝    60.48ms   @   248,023,484.32 op/s

Array<string>(1000)
  native          ⇝   456.73ms   @    65,683,793.21 op/s
  @arr/includes   ⇝   181.25ms   @   165,519,191.99 op/s

Array<string>(5000)
  native          ⇝   2,696.85ms   @    55,620,400.66 op/s
  @arr/includes   ⇝   1,215.12ms   @   123,444,613.00 op/s

Array<string>(10000)
  native          ⇝   4,913.47ms   @    61,056,628.74 op/s
  @arr/includes   ⇝   2,171.36ms   @   138,162,554.33 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Strings (`false`)</summary>

```
Array<string>(100)
  native          ⇝   52.20ms   @    57,467,680.89 op/s
  @arr/includes   ⇝   13.73ms   @   218,429,557.01 op/s

Array<string>(500)
  native          ⇝   250.72ms   @    59,828,648.12 op/s
  @arr/includes   ⇝    62.52ms   @   239,930,888.39 op/s

Array<string>(1000)
  native          ⇝   500.24ms   @    59,971,487.52 op/s
  @arr/includes   ⇝   125.52ms   @   238,999,877.29 op/s

Array<string>(5000)
  native          ⇝   2,485.52ms   @    60,349,641.81 op/s
  @arr/includes   ⇝     623.87ms   @   240,434,099.73 op/s

Array<string>(10000)
  native          ⇝   4,983.92ms   @    60,193,630.34 op/s
  @arr/includes   ⇝   1,319.31ms   @   227,390,846.31 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers (`true`)</summary>

```
Array<number>(100)
  native          ⇝   41.05ms   @    73,076,046.54 op/s
  @arr/includes   ⇝    5.54ms   @   541,203,051.09 op/s

Array<number>(500)
  native          ⇝   197.56ms   @    75,926,888.50 op/s
  @arr/includes   ⇝    22.65ms   @   662,141,883.32 op/s

Array<number>(1000)
  native          ⇝   374.11ms   @     80,189,501.26 op/s
  @arr/includes   ⇝    43.66ms   @    687,190,984.53 op/s

Array<number>(5000)
  native          ⇝   1,882.33ms   @    79,688,634.28 op/s
  @arr/includes   ⇝     218.56ms   @   686,325,619.08 op/s

Array<number>(10000)
  native          ⇝   3,745.05ms   @    80,105,757.78 op/s
  @arr/includes   ⇝     431.94ms   @   694,535,927.04 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers (`false`)</summary>

```
Array<number>(100)
  native          ⇝   49.22ms   @    60,955,885.82 op/s
  @arr/includes   ⇝   18.66ms   @   160,807,114.49 op/s

Array<number>(500)
  native          ⇝   234.18ms   @    64,053,326.26 op/s
  @arr/includes   ⇝    89.86ms   @   166,934,925.53 op/s

Array<number>(1000)
  native          ⇝   474.11ms   @    63,275,988.11 op/s
  @arr/includes   ⇝   178.37ms   @   168,189,936.76 op/s

Array<number>(5000)
  native          ⇝   2,348.27ms   @    63,876,814.19 op/s
  @arr/includes   ⇝     897.98ms   @   167,041,060.81 op/s

Array<number>(10000)
  native          ⇝   4,709.20ms   @    63,705,153.10 op/s
  @arr/includes   ⇝   1,784.61ms   @   168,104,137.00 op/s
```
</details>


## map

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native          ⇝   1,376.57ms   @     2,179,325.77 op/s
  @arr/map        ⇝      12.18ms   @   246,389,490.54 op/s
  @arr/map.spec   ⇝     555.15ms   @     5,403,922.70 op/s
  arr-map         ⇝      15.51ms   @   193,409,194.87 op/s
  array-map       ⇝   1,346.20ms   @     2,228,488.80 op/s
  fastjs.map      ⇝      12.28ms   @   244,320,485.28 op/s
  lodash.map      ⇝      13.77ms   @   217,928,181.48 op/s
  ramda.map       ⇝      58.35ms   @    51,411,740.69 op/s

Array<string>(500)
  native          ⇝   6,820.39ms   @     2,199,287.98 op/s
  @arr/map        ⇝      50.24ms   @   298,579,335.63 op/s
  @arr/map.spec   ⇝   2,557.68ms   @     5,864,688.64 op/s
  arr-map         ⇝      52.61ms   @   285,121,406.98 op/s
  array-map       ⇝   6,749.42ms   @     2,222,414.52 op/s
  fastjs.map      ⇝      50.50ms   @   297,057,549.91 op/s
  lodash.map      ⇝      55.28ms   @   271,347,033.97 op/s
  ramda.map       ⇝     168.76ms   @    88,881,133.71 op/s

Array<string>(1000)
  native          ⇝   13,603.17ms   @     2,205,368.91 op/s
  @arr/map        ⇝      101.20ms   @   296,435,704.52 op/s
  @arr/map.spec   ⇝    5,064.89ms   @     5,923,133.63 op/s
  arr-map         ⇝      102.32ms   @   293,209,723.15 op/s
  array-map       ⇝   13,554.43ms   @     2,213,298.65 op/s
  fastjs.map      ⇝       99.74ms   @   300,786,231.15 op/s
  lodash.map      ⇝      112.64ms   @   266,334,380.79 op/s
  ramda.map       ⇝      312.90ms   @    95,877,840.59 op/s

Array<string>(5000)
  native          ⇝   68,068.55ms   @     2,203,660.71 op/s
  @arr/map        ⇝      500.28ms   @   299,834,895.91 op/s
  @arr/map.spec   ⇝   24,976.11ms   @     6,005,739.53 op/s
  arr-map         ⇝      502.63ms   @   298,430,425.47 op/s
  array-map       ⇝   67,906.77ms   @     2,208,910.94 op/s
  fastjs.map      ⇝      509.04ms   @   294,670,247.95 op/s
  lodash.map      ⇝      548.38ms   @   273,531,153.93 op/s
  ramda.map       ⇝    1,428.35ms   @   105,016,488.53 op/s

Array<string>(10000)
  native          ⇝   135,292.68ms   @     2,217,414.94 op/s
  @arr/map        ⇝       999.06ms   @   300,280,901.07 op/s
  @arr/map.spec   ⇝    49,802.39ms   @     6,023,807.10 op/s
  arr-map         ⇝     1,007.79ms   @   297,682,509.22 op/s
  array-map       ⇝   134,698.22ms   @     2,227,200.92 op/s
  fastjs.map      ⇝     1,001.28ms   @   299,617,955.05 op/s
  lodash.map      ⇝     1,097.57ms   @   273,330,641.67 op/s
  ramda.map       ⇝     2,825.55ms   @   106,173,868.57 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native          ⇝   1,328.54ms   @     2,258,114.80 op/s
  @arr/map        ⇝       9.89ms   @   303,254,558.24 op/s
  @arr/map.spec   ⇝     541.52ms   @     5,539,929.15 op/s
  arr-map         ⇝      11.09ms   @   270,412,322.00 op/s
  array-map       ⇝   1,327.00ms   @     2,260,740.55 op/s
  fastjs.map      ⇝      10.29ms   @   291,533,998.45 op/s
  lodash.map      ⇝      11.48ms   @   261,232,496.66 op/s
  ramda.map       ⇝      50.42ms   @    59,502,389.84 op/s

Array<number>(500)
  native          ⇝   6,990.96ms   @     2,145,627.92 op/s
  @arr/map        ⇝      48.19ms   @   311,238,705.15 op/s
  @arr/map.spec   ⇝   2,713.30ms   @     5,528,324.57 op/s
  arr-map         ⇝      52.69ms   @   284,685,756.74 op/s
  array-map       ⇝   7,071.44ms   @     2,121,207.48 op/s
  fastjs.map      ⇝      48.57ms   @   308,863,645.35 op/s
  lodash.map      ⇝      52.81ms   @   284,058,549.01 op/s
  ramda.map       ⇝     180.59ms   @    83,059,488.97 op/s

Array<number>(1000)
  native          ⇝   14,088.41ms   @     2,129,410.02 op/s
  @arr/map        ⇝       97.50ms   @   307,694,605.15 op/s
  @arr/map.spec   ⇝    5,387.97ms   @     5,567,959.87 op/s
  arr-map         ⇝       99.60ms   @   301,214,012.96 op/s
  array-map       ⇝   13,841.13ms   @     2,167,453.06 op/s
  fastjs.map      ⇝       93.42ms   @   321,116,165.54 op/s
  lodash.map      ⇝      103.56ms   @   289,698,914.95 op/s
  ramda.map       ⇝      318.25ms   @    94,265,614.35 op/s

Array<number>(5000)
  native          ⇝   65,995.85ms   @     2,272,870.11 op/s
  @arr/map        ⇝      454.62ms   @   329,946,475.29 op/s
  @arr/map.spec   ⇝   24,682.37ms   @     6,077,212.52 op/s
  arr-map         ⇝      457.48ms   @   327,882,144.77 op/s
  array-map       ⇝   65,695.30ms   @     2,283,268.47 op/s
  fastjs.map      ⇝      462.18ms   @   324,547,660.13 op/s
  lodash.map      ⇝      514.87ms   @   291,334,498.32 op/s
  ramda.map       ⇝    1,448.93ms   @   103,524,963.01 op/s

Array<number>(10000)
  native          ⇝   131,583.06ms   @     2,279,928.79 op/s
  @arr/map        ⇝       912.33ms   @   328,827,760.93 op/s
  @arr/map.spec   ⇝    49,317.14ms   @     6,083,077.22 op/s
  arr-map         ⇝       912.80ms   @   328,660,787.03 op/s
  array-map       ⇝   131,159.79ms   @     2,287,286.35 op/s
  fastjs.map      ⇝       905.84ms   @   331,183,476.40 op/s
  lodash.map      ⇝       998.56ms   @   300,433,298.12 op/s
  ramda.map       ⇝     2,812.48ms   @   106,667,604.13 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native          ⇝   1,370.67ms   @     2,188,707.73 op/s
  @arr/map        ⇝      10.76ms   @   278,695,874.24 op/s
  @arr/map.spec   ⇝     541.39ms   @     5,541,308.92 op/s
  arr-map         ⇝      12.20ms   @   245,911,314.54 op/s
  array-map       ⇝   1,354.02ms   @     2,215,628.73 op/s
  fastjs.map      ⇝      10.79ms   @   278,095,605.00 op/s
  lodash.map      ⇝      11.99ms   @   250,110,152.68 op/s
  ramda.map       ⇝      50.28ms   @    59,666,572.45 op/s

Array<object>(500)
  native          ⇝   6,824.93ms   @     2,197,825.59 op/s
  @arr/map        ⇝      50.49ms   @   297,066,350.96 op/s
  @arr/map.spec   ⇝   2,550.89ms   @     5,880,309.33 op/s
  arr-map         ⇝      52.38ms   @   286,359,554.70 op/s
  array-map       ⇝   6,777.05ms   @     2,213,351.80 op/s
  fastjs.map      ⇝      50.54ms   @   296,807,038.92 op/s
  lodash.map      ⇝      55.52ms   @   270,171,669.78 op/s
  ramda.map       ⇝     166.46ms   @    90,114,407.99 op/s

Array<object>(1000)
  native          ⇝   13,643.59ms   @     2,198,835.55 op/s
  @arr/map        ⇝      101.44ms   @   295,736,357.11 op/s
  @arr/map.spec   ⇝    5,118.31ms   @     5,861,311.37 op/s
  arr-map         ⇝      100.24ms   @   299,274,152.44 op/s
  array-map       ⇝   13,562.84ms   @     2,211,925.64 op/s
  fastjs.map      ⇝       99.86ms   @   300,427,042.02 op/s
  lodash.map      ⇝      109.93ms   @   272,912,024.24 op/s
  ramda.map       ⇝      307.59ms   @    97,533,930.96 op/s

Array<object>(5000)
  native          ⇝   68,516.65ms   @     2,189,248.74 op/s
  @arr/map        ⇝      515.00ms   @   291,262,148.36 op/s
  @arr/map.spec   ⇝   26,132.49ms   @     5,739,980.49 op/s
  arr-map         ⇝      520.98ms   @   287,919,123.20 op/s
  array-map       ⇝   68,231.78ms   @     2,198,389.08 op/s
  fastjs.map      ⇝      516.47ms   @   290,431,251.59 op/s
  lodash.map      ⇝      559.62ms   @   268,037,240.91 op/s
  ramda.map       ⇝    1,447.03ms   @   103,660,440.33 op/s

Array<object>(10000)
  native          ⇝   137,962.99ms   @     2,174,496.17 op/s
  @arr/map        ⇝     1,050.50ms   @   285,578,195.47 op/s
  @arr/map.spec   ⇝    52,668.05ms   @     5,696,052.80 op/s
  arr-map         ⇝     1,054.50ms   @   284,494,615.57 op/s
  array-map       ⇝   137,488.20ms   @     2,182,005.40 op/s
  fastjs.map      ⇝     1,054.22ms   @   284,571,605.24 op/s
  lodash.map      ⇝     1,141.07ms   @   262,911,778.41 op/s
  ramda.map       ⇝     2,887.03ms   @   103,913,012.80 op/
```
</details>


## reduce

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native          ⇝   199.75ms   @    15,018,656.17 op/s
  @arr/reduce     ⇝     6.43ms   @   466,603,841.05 op/s
  arr-reduce      ⇝    10.51ms   @   285,396,245.57 op/s
  fastjs.reduce   ⇝     6.48ms   @   462,839,967.53 op/s
  lodash.reduce   ⇝    17.61ms   @   170,398,652.76 op/s
  ramda.reduce    ⇝   212.80ms   @    14,097,607.96 op/s

Array<string>(500)
  native          ⇝     961.24ms   @    15,604,798.48 op/s
  @arr/reduce     ⇝      22.91ms   @   654,819,983.66 op/s
  arr-reduce      ⇝      27.29ms   @   549,583,013.05 op/s
  fastjs.reduce   ⇝      22.94ms   @   653,769,565.58 op/s
  lodash.reduce   ⇝      28.52ms   @   525,886,020.66 op/s
  ramda.reduce    ⇝   1,039.42ms   @    14,431,147.35 op/s

Array<string>(1000)
  native          ⇝   1,914.56ms   @    15,669,362.76 op/s
  @arr/reduce     ⇝      45.19ms   @   663,854,887.16 op/s
  arr-reduce      ⇝      53.80ms   @   557,625,129.59 op/s
  fastjs.reduce   ⇝      45.32ms   @   661,980,711.16 op/s
  lodash.reduce   ⇝      55.17ms   @   543,778,600.04 op/s
  ramda.reduce    ⇝   2,094.20ms   @    14,325,293.50 op/s

Array<string>(5000)
  native          ⇝    9,537.07ms   @    15,728,106.08 op/s
  @arr/reduce     ⇝      222.53ms   @   674,072,724.66 op/s
  arr-reduce      ⇝      267.69ms   @   560,345,639.12 op/s
  fastjs.reduce   ⇝      222.82ms   @   673,174,139.35 op/s
  lodash.reduce   ⇝      268.13ms   @   559,436,361.45 op/s
  ramda.reduce    ⇝   10,417.76ms   @    14,398,483.21 op/s

Array<string>(10000)
  native          ⇝   18,975.08ms   @    15,810,213.72 op/s
  @arr/reduce     ⇝      446.59ms   @   671,754,251.23 op/s
  arr-reduce      ⇝      534.07ms   @   561,724,559.26 op/s
  fastjs.reduce   ⇝      449.69ms   @   667,120,722.37 op/s
  lodash.reduce   ⇝      539.69ms   @   555,869,558.03 op/s
  ramda.reduce    ⇝   20,934.31ms   @    14,330,540.75 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native          ⇝   195.96ms   @    15,309,135.46 op/s
  @arr/reduce     ⇝     5.09ms   @   588,983,649.81 op/s
  arr-reduce      ⇝     5.96ms   @   503,132,502.96 op/s
  fastjs.reduce   ⇝     5.17ms   @   580,538,941.39 op/s
  lodash.reduce   ⇝     8.51ms   @   352,417,442.69 op/s
  ramda.reduce    ⇝   212.29ms   @    14,131,864.71 op/s

Array<number>(500)
  native          ⇝     969.77ms   @    15,467,597.92 op/s
  @arr/reduce     ⇝      22.88ms   @   655,547,417.06 op/s
  arr-reduce      ⇝      27.23ms   @   550,915,783.63 op/s
  fastjs.reduce   ⇝      23.07ms   @   650,084,907.59 op/s
  lodash.reduce   ⇝      28.94ms   @   518,272,222.76 op/s
  ramda.reduce    ⇝   1,033.96ms   @    14,507,368.88 op/s

Array<number>(1000)
  native          ⇝   1,904.09ms   @    15,755,582.22 op/s
  @arr/reduce     ⇝      45.03ms   @   666,283,745.99 op/s
  arr-reduce      ⇝      54.11ms   @   554,382,154.39 op/s
  fastjs.reduce   ⇝      46.71ms   @   642,214,355.10 op/s
  lodash.reduce   ⇝      55.32ms   @   542,306,887.82 op/s
  ramda.reduce    ⇝   2,082.23ms   @    14,407,662.68 op/s

Array<number>(5000)
  native          ⇝    9,504.84ms   @    15,781,433.92 op/s
  @arr/reduce     ⇝      222.81ms   @   673,212,164.93 op/s
  arr-reduce      ⇝      267.27ms   @   561,229,555.18 op/s
  fastjs.reduce   ⇝      224.34ms   @   668,614,334.28 op/s
  lodash.reduce   ⇝      280.02ms   @   535,667,673.06 op/s
  ramda.reduce    ⇝   10,412.75ms   @    14,405,418.73 op/s

Array<number>(10000)
  native          ⇝   18,970.40ms   @    15,814,107.41 op/s
  @arr/reduce     ⇝      449.40ms   @   667,550,016.32 op/s
  arr-reduce      ⇝      538.25ms   @   557,356,999.43 op/s
  fastjs.reduce   ⇝      445.57ms   @   673,290,704.10 op/s
  lodash.reduce   ⇝      546.29ms   @   549,162,092.51 op/s
  ramda.reduce    ⇝   20,811.86ms   @    14,414,855.57 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native          ⇝   195.40ms   @    15,353,224.81 op/s
  @arr/reduce     ⇝     5.09ms   @   589,178,557.44 op/s
  arr-reduce      ⇝     5.98ms   @   501,805,076.49 op/s
  fastjs.reduce   ⇝     5.14ms   @   583,442,826.10 op/s
  lodash.reduce   ⇝     8.56ms   @   350,501,152.39 op/s
  ramda.reduce    ⇝   216.22ms   @    13,874,897.40 op/s

Array<object>(500)
  native          ⇝     953.51ms   @    15,731,402.32 op/s
  @arr/reduce     ⇝      23.02ms   @   651,748,208.12 op/s
  arr-reduce      ⇝      27.19ms   @   551,671,319.52 op/s
  fastjs.reduce   ⇝      23.70ms   @   632,804,322.98 op/s
  lodash.reduce   ⇝      28.89ms   @   519,138,759.87 op/s
  ramda.reduce    ⇝   1,034.63ms   @    14,497,990.00 op/s

Array<object>(1000)
  native          ⇝   1,898.55ms   @    15,801,567.73 op/s
  @arr/reduce     ⇝      45.11ms   @   665,102,921.02 op/s
  arr-reduce      ⇝      53.97ms   @   555,900,491.81 op/s
  fastjs.reduce   ⇝      47.74ms   @   628,373,185.81 op/s
  lodash.reduce   ⇝      55.52ms   @   540,328,429.99 op/s
  ramda.reduce    ⇝   2,076.14ms   @    14,449,911.34 op/s

Array<object>(5000)
  native          ⇝    9,470.18ms   @    15,839,185.20 op/s
  @arr/reduce     ⇝      222.92ms   @   672,873,478.92 op/s
  arr-reduce      ⇝      271.42ms   @   552,642,205.97 op/s
  fastjs.reduce   ⇝      223.16ms   @   672,169,937.04 op/s
  lodash.reduce   ⇝      269.79ms   @   555,987,277.62 op/s
  ramda.reduce    ⇝   10,404.64ms   @    14,416,646.21 op/s

Array<object>(10000)
  native          ⇝   18,984.00ms   @    15,802,778.78 op/s
  @arr/reduce     ⇝      444.81ms   @   674,449,221.67 op/s
  arr-reduce      ⇝      534.13ms   @   561,658,841.11 op/s
  fastjs.reduce   ⇝      445.93ms   @   672,749,964.87 op/s
  lodash.reduce   ⇝      541.15ms   @   554,375,607.11 op/s
  ramda.reduce    ⇝   20,861.96ms   @    14,380,243.53 op/
```
</details>


## reduceRight

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native               ⇝   149.89ms   @    20,015,057.73 op/s
  @arr/reduceRight     ⇝     7.51ms   @   399,487,324.60 op/s
  fastjs.reduceRight   ⇝    13.70ms   @   219,019,620.00 op/s
  lodash.reduceright   ⇝     8.88ms   @   337,816,914.49 op/s
  ramda.reduceRight    ⇝     9.35ms   @   320,996,750.55 op/s

Array<string>(500)
  native               ⇝   741.10ms   @    20,240,053.65 op/s
  @arr/reduceRight     ⇝    27.31ms   @   549,326,960.95 op/s
  fastjs.reduceRight   ⇝    22.84ms   @   656,737,208.71 op/s
  lodash.reduceright   ⇝    28.52ms   @   525,920,076.14 op/s
  ramda.reduceRight    ⇝    30.32ms   @   494,777,964.92 op/s

Array<string>(1000)
  native               ⇝   1,462.67ms   @    20,510,430.18 op/s
  @arr/reduceRight     ⇝      54.44ms   @   551,043,974.85 op/s
  fastjs.reduceRight   ⇝      45.04ms   @   666,125,299.23 op/s
  lodash.reduceright   ⇝      55.63ms   @   539,249,741.83 op/s
  ramda.reduceRight    ⇝      45.99ms   @   652,282,347.89 op/s

Array<string>(5000)
  native               ⇝   7,371.77ms   @    20,347,897.15 op/s
  @arr/reduceRight     ⇝     271.99ms   @   551,485,762.20 op/s
  fastjs.reduceRight   ⇝     223.05ms   @   672,486,939.51 op/s
  lodash.reduceright   ⇝     272.07ms   @   551,324,635.17 op/s
  ramda.reduceRight    ⇝     225.02ms   @   666,596,422.22 op/s

Array<string>(10000)
  native               ⇝   14,707.78ms   @    20,397,364.55 op/s
  @arr/reduceRight     ⇝      534.90ms   @   560,853,634.49 op/s
  fastjs.reduceRight   ⇝      445.50ms   @   673,404,846.85 op/s
  lodash.reduceright   ⇝      535.58ms   @   560,140,753.66 op/s
  ramda.reduceRight    ⇝      446.60ms   @   671,738,875.86 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native               ⇝   156.36ms   @    19,185,993.67 op/s
  @arr/reduceRight     ⇝     5.97ms   @   502,591,024.26 op/s
  fastjs.reduceRight   ⇝     5.13ms   @   584,588,379.63 op/s
  lodash.reduceright   ⇝    11.91ms   @   251,800,562.87 op/s
  ramda.reduceRight    ⇝     7.26ms   @   412,960,404.39 op/s

Array<number>(500)
  native               ⇝   738.21ms   @    20,319,331.46 op/s
  @arr/reduceRight     ⇝    27.28ms   @   549,930,620.75 op/s
  fastjs.reduceRight   ⇝    22.88ms   @   655,489,321.03 op/s
  lodash.reduceright   ⇝    30.19ms   @   496,853,476.62 op/s
  ramda.reduceRight    ⇝    24.97ms   @   600,725,845.02 op/s

Array<number>(1000)
  native               ⇝   1,469.26ms   @    20,418,456.31 op/s
  @arr/reduceRight     ⇝      54.03ms   @   555,196,004.45 op/s
  fastjs.reduceRight   ⇝      45.20ms   @   663,659,213.83 op/s
  lodash.reduceright   ⇝      56.41ms   @   531,860,142.20 op/s
  ramda.reduceRight    ⇝      46.58ms   @   643,986,216.29 op/s

Array<number>(5000)
  native               ⇝   7,308.04ms   @    20,525,329.39 op/s
  @arr/reduceRight     ⇝     267.06ms   @   561,667,504.85 op/s
  fastjs.reduceRight   ⇝     222.98ms   @   672,693,347.29 op/s
  lodash.reduceright   ⇝     273.76ms   @   547,915,526.97 op/s
  ramda.reduceRight    ⇝     226.80ms   @   661,387,667.25 op/s

Array<number>(10000)
  native               ⇝   14,659.39ms   @    20,464,697.20 op/s
  @arr/reduceRight     ⇝      549.31ms   @   546,134,993.91 op/s
  fastjs.reduceRight   ⇝      446.48ms   @   671,921,076.04 op/s
  lodash.reduceright   ⇝      542.02ms   @   553,483,161.88 op/s
  ramda.reduceRight    ⇝      447.70ms   @   670,089,813.03 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native               ⇝   156.59ms   @    19,158,769.96 op/s
  @arr/reduceRight     ⇝     5.19ms   @   577,561,393.33 op/s
  fastjs.reduceRight   ⇝     5.98ms   @   501,285,044.21 op/s
  lodash.reduceright   ⇝     8.90ms   @   337,220,852.79 op/s
  ramda.reduceRight    ⇝     7.37ms   @   407,035,306.79 op/s

Array<object>(500)
  native               ⇝   738.75ms   @    20,304,554.15 op/s
  @arr/reduceRight     ⇝    27.26ms   @   550,167,641.58 op/s
  fastjs.reduceRight   ⇝    22.83ms   @   656,972,641.16 op/s
  lodash.reduceright   ⇝    30.27ms   @   495,586,750.43 op/s
  ramda.reduceRight    ⇝    24.72ms   @   606,918,826.06 op/s

Array<object>(1000)
  native               ⇝   1,473.52ms   @    20,359,466.76 op/s
  @arr/reduceRight     ⇝      53.83ms   @   557,318,601.99 op/s
  fastjs.reduceRight   ⇝      48.37ms   @   620,163,076.84 op/s
  lodash.reduceright   ⇝      56.75ms   @   528,630,271.92 op/s
  ramda.reduceRight    ⇝      46.28ms   @   648,160,699.26 op/s

Array<object>(5000)
  native               ⇝   7,378.51ms   @    20,329,299.04 op/s
  @arr/reduceRight     ⇝     268.41ms   @   558,837,167.45 op/s
  fastjs.reduceRight   ⇝     222.95ms   @   672,787,031.22 op/s
  lodash.reduceright   ⇝     269.88ms   @   555,797,420.07 op/s
  ramda.reduceRight    ⇝     225.38ms   @   665,553,996.45 op/s

Array<object>(10000)
  native               ⇝   14,665.38ms   @    20,456,343.86 op/s
  @arr/reduceRight     ⇝      545.22ms   @   550,238,591.89 op/s
  fastjs.reduceRight   ⇝      450.93ms   @   665,294,735.78 op/s
  lodash.reduceright   ⇝      537.82ms   @   557,803,536.86 op/s
  ramda.reduceRight    ⇝      447.57ms   @   670,289,334.75 op/
```
</details>


## reverse

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native            ⇝   152.29ms   @    19,698,868.78 op/s
  @arr/reverse      ⇝     7.40ms   @   405,250,041.30 op/s
  compute-reverse   ⇝    11.97ms   @   250,568,351.66 op/s
  lodash.reverse    ⇝   147.56ms   @    20,330,447.30 op/s
  ramda.reverse     ⇝    41.52ms   @    72,261,545.75 op/s

Array<string>(500)
  native            ⇝   755.28ms   @    19,860,070.45 op/s
  @arr/reverse      ⇝    27.38ms   @   547,894,048.69 op/s
  compute-reverse   ⇝    28.18ms   @   532,232,383.45 op/s
  lodash.reverse    ⇝   736.71ms   @    20,360,839.11 op/s
  ramda.reverse     ⇝    84.00ms   @   178,564,507.07 op/s

Array<string>(1000)
  native            ⇝   1,498.04ms   @    20,026,221.47 op/s
  @arr/reverse      ⇝      54.68ms   @   548,635,524.25 op/s
  compute-reverse   ⇝      55.04ms   @   545,103,043.19 op/s
  lodash.reverse    ⇝   1,492.87ms   @    20,095,496.90 op/s
  ramda.reverse     ⇝     154.88ms   @   193,702,810.73 op/s

Array<string>(5000)
  native            ⇝   7,458.48ms   @    20,111,331.34 op/s
  @arr/reverse      ⇝     268.21ms   @   559,269,598.68 op/s
  compute-reverse   ⇝     269.10ms   @   557,409,306.91 op/s
  lodash.reverse    ⇝   7,463.76ms   @    20,097,116.51 op/s
  ramda.reverse     ⇝     673.06ms   @   222,862,883.68 op/s

Array<string>(10000)
  native            ⇝   15,023.98ms   @    19,968,077.25 op/s
  @arr/reverse      ⇝      551.03ms   @   544,435,843.63 op/s
  compute-reverse   ⇝      539.25ms   @   556,325,639.02 op/s
  lodash.reverse    ⇝   14,958.15ms   @    20,055,958.08 op/s
  ramda.reverse     ⇝    1,509.53ms   @   198,737,464.61 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native            ⇝   156.50ms   @    19,169,079.45 op/s
  @arr/reverse      ⇝     5.36ms   @   560,040,546.94 op/s
  compute-reverse   ⇝     6.09ms   @   492,916,866.78 op/s
  lodash.reverse    ⇝   150.81ms   @    19,892,768.43 op/s
  ramda.reverse     ⇝    32.29ms   @    92,906,527.76 op/s

Array<number>(500)
  native            ⇝   731.65ms   @    20,501,643.03 op/s
  @arr/reverse      ⇝    23.03ms   @   651,291,441.46 op/s
  compute-reverse   ⇝    27.70ms   @   541,488,350.04 op/s
  lodash.reverse    ⇝   725.73ms   @    20,668,851.10 op/s
  ramda.reverse     ⇝    83.88ms   @   178,834,912.01 op/s

Array<number>(1000)
  native            ⇝   1,478.38ms   @    20,292,438.17 op/s
  @arr/reverse      ⇝      45.19ms   @   663,817,018.22 op/s
  compute-reverse   ⇝      45.88ms   @   653,813,435.51 op/s
  lodash.reverse    ⇝   1,491.47ms   @    20,114,333.91 op/s
  ramda.reverse     ⇝     157.29ms   @   190,727,086.81 op/s

Array<number>(5000)
  native            ⇝   7,387.10ms   @    20,305,680.85 op/s
  @arr/reverse      ⇝     225.69ms   @   664,638,788.74 op/s
  compute-reverse   ⇝     226.44ms   @   662,422,156.95 op/s
  lodash.reverse    ⇝   7,401.13ms   @    20,267,161.75 op/s
  ramda.reverse     ⇝     656.47ms   @   228,495,736.16 op/s

Array<number>(10000)
  native            ⇝   14,785.96ms   @    20,289,519.46 op/s
  @arr/reverse      ⇝      463.70ms   @   646,970,962.72 op/s
  compute-reverse   ⇝      447.20ms   @   670,839,098.02 op/s
  lodash.reverse    ⇝   14,769.77ms   @    20,311,764.41 op/s
  ramda.reverse     ⇝    1,278.61ms   @   234,628,955.60 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native            ⇝   152.36ms   @    19,690,433.70 op/s
  @arr/reverse      ⇝     6.12ms   @   489,971,908.28 op/s
  compute-reverse   ⇝     7.03ms   @   426,527,448.11 op/s
  lodash.reverse    ⇝   146.97ms   @    20,412,718.22 op/s
  ramda.reverse     ⇝    34.03ms   @    88,166,288.44 op/s

Array<object>(500)
  native            ⇝   754.31ms   @    19,885,814.43 op/s
  @arr/reverse      ⇝    27.53ms   @   544,921,394.36 op/s
  compute-reverse   ⇝    28.17ms   @   532,574,833.15 op/s
  lodash.reverse    ⇝   747.98ms   @    20,054,102.49 op/s
  ramda.reverse     ⇝    93.55ms   @   160,347,561.68 op/s

Array<object>(1000)
  native            ⇝   1,504.68ms   @    19,937,830.15 op/s
  @arr/reverse      ⇝      54.05ms   @   555,027,344.25 op/s
  compute-reverse   ⇝      54.97ms   @   545,781,587.71 op/s
  lodash.reverse    ⇝   1,495.22ms   @    20,063,893.04 op/s
  ramda.reverse     ⇝     161.34ms   @   185,942,918.65 op/s

Array<object>(5000)
  native            ⇝   7,462.22ms   @    20,101,251.73 op/s
  @arr/reverse      ⇝     288.61ms   @   519,736,494.43 op/s
  compute-reverse   ⇝     289.51ms   @   518,125,390.56 op/s
  lodash.reverse    ⇝   7,476.18ms   @    20,063,724.21 op/s
  ramda.reverse     ⇝     799.44ms   @   187,631,110.76 op/s

Array<object>(10000)
  native            ⇝   15,795.40ms   @    18,992,875.75 op/s
  @arr/reverse      ⇝      595.22ms   @   504,015,007.91 op/s
  compute-reverse   ⇝      610.31ms   @   491,556,638.94 op/s
  lodash.reverse    ⇝   15,095.78ms   @    19,873,104.22 op/s
  ramda.reverse     ⇝    1,642.32ms   @   182,667,953.02 op/
```
</details>


## some

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native        ⇝   3.81ms   @     786,796,092.88 op/s
  @arr/some     ⇝   1.15ms   @   2,619,471,931.92 op/s
  fastjs.some   ⇝   4.98ms   @     602,879,715.25 op/s
  lodash.some   ⇝   2.64ms   @   1,135,621,181.00 op/s

Array<string>(500)
  native        ⇝   4.01ms   @    3,744,931,235.57 op/s
  @arr/some     ⇝   0.59ms   @   25,439,725,658.00 op/s
  fastjs.some   ⇝   0.60ms   @   24,914,874,179.89 op/s
  lodash.some   ⇝   1.48ms   @   10,115,526,051.19 op/s

Array<string>(1000)
  native        ⇝   3.29ms   @    9,111,913,431.96 op/s
  @arr/some     ⇝   0.49ms   @   61,269,003,602.62 op/s
  fastjs.some   ⇝   0.44ms   @   68,533,519,744.51 op/s
  lodash.some   ⇝   1.08ms   @   27,728,149,524.97 op/s

Array<string>(5000)
  native        ⇝   2.92ms   @    51,333,771,153.36 op/s
  @arr/some     ⇝   0.43ms   @   347,515,840,930.42 op/s
  fastjs.some   ⇝   0.49ms   @   303,401,740,312.38 op/s
  lodash.some   ⇝   1.04ms   @   143,677,335,187.73 op/s

Array<string>(10000)
  native        ⇝   2.93ms   @   102,432,358,791.87 op/s
  @arr/some     ⇝   0.43ms   @   699,788,430,631.14 op/s
  fastjs.some   ⇝   0.47ms   @   639,799,358,921.04 op/s
  lodash.some   ⇝   1.14ms   @   263,127,427,350.52 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native        ⇝   3.88ms   @     773,697,782.81 op/s
  @arr/some     ⇝   0.40ms   @   7,411,122,118.00 op/s
  fastjs.some   ⇝   0.41ms   @   7,401,248,837.39 op/s
  lodash.some   ⇝   1.04ms   @   2,872,886,273.92 op/s

Array<number>(500)
  native        ⇝   2.99ms   @    5,019,220,267.48 op/s
  @arr/some     ⇝   0.40ms   @   37,362,319,851.35 op/s
  fastjs.some   ⇝   0.41ms   @   36,433,411,867.58 op/s
  lodash.some   ⇝   1.04ms   @   14,431,624,885.51 op/s

Array<number>(1000)
  native        ⇝   5.35ms   @    5,602,686,600.28 op/s
  @arr/some     ⇝   0.48ms   @   62,479,043,487.50 op/s
  fastjs.some   ⇝   0.43ms   @   70,179,214,320.30 op/s
  lodash.some   ⇝   1.08ms   @   27,703,823,958.82 op/s

Array<number>(5000)
  native        ⇝   3.00ms   @    50,022,860,447.22 op/s
  @arr/some     ⇝   0.39ms   @   385,170,425,074.08 op/s
  fastjs.some   ⇝   0.39ms   @   385,101,204,596.57 op/s
  lodash.some   ⇝   1.01ms   @   148,705,223,617.96 op/s

Array<number>(10000)
  native        ⇝   3.08ms   @    97,417,937,564.84 op/s
  @arr/some     ⇝   0.40ms   @   744,834,572,241.51 op/s
  fastjs.some   ⇝   0.40ms   @   742,965,969,682.04 op/s
  lodash.some   ⇝   1.05ms   @   286,131,765,585.60 op/
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native        ⇝   3.73ms   @     803,786,585.02 op/s
  @arr/some     ⇝   0.43ms   @   7,051,092,214.18 op/s
  fastjs.some   ⇝   0.44ms   @   6,887,447,626.70 op/s
  lodash.some   ⇝   1.11ms   @   2,707,600,776.90 op/s

Array<object>(500)
  native        ⇝   3.03ms   @    4,956,952,174.99 op/s
  @arr/some     ⇝   0.43ms   @   35,253,472,467.04 op/s
  fastjs.some   ⇝   0.44ms   @   34,390,891,457.76 op/s
  lodash.some   ⇝   1.11ms   @   13,565,122,081.58 op/s

Array<object>(1000)
  native        ⇝   3.04ms   @    9,862,646,213.73 op/s
  @arr/some     ⇝   0.43ms   @   70,313,269,051.38 op/s
  fastjs.some   ⇝   0.43ms   @   69,029,468,680.18 op/s
  lodash.some   ⇝   1.12ms   @   26,843,739,905.64 op/s

Array<object>(5000)
  native        ⇝   3.05ms   @    49,219,106,069.47 op/s
  @arr/some     ⇝   0.43ms   @   350,078,767,722.74 op/s
  fastjs.some   ⇝   0.44ms   @   343,654,421,114.13 op/s
  lodash.some   ⇝   1.09ms   @   137,114,650,700.43 op/s

Array<object>(10000)
  native        ⇝   2.88ms   @   104,231,087,269.22 op/s
  @arr/some     ⇝   0.41ms   @   730,177,506,151.75 op/s
  fastjs.some   ⇝   0.44ms   @   680,830,976,901.67 op/s
  lodash.some   ⇝   1.06ms   @   283,584,431,592.82 op/
```
</details>


## unique

<details>
<summary>:wavy_dash: ↝ Strings</summary>

```
Array<string>(5)
  @arr/unique        ⇝    8.19ms   @   18,320,431.68 op/s
  arr-uniq           ⇝   49.18ms   @    3,049,942.38 op/s
  array-unique       ⇝    5.16ms   @   29,086,430.13 op/s
  lodash.uniq        ⇝    8.32ms   @   18,018,699.81 op/s
  ramda.uniq         ⇝   28.90ms   @    5,190,427.26 op/s

Array<string>(10)
  @arr/unique        ⇝   13.75ms   @   21,811,421.07 op/s
  arr-uniq           ⇝   76.43ms   @    3,925,054.02 op/s
  array-unique       ⇝   10.65ms   @   28,181,742.18 op/s
  lodash.uniq        ⇝   12.46ms   @   24,073,713.71 op/s
  ramda.uniq         ⇝   51.30ms   @    5,848,019.68 op/s

Array<string>(100)
  @arr/unique        ⇝     917.68ms   @   3,269,106.45 op/s
  arr-uniq           ⇝   3,288.39ms   @     912,301.67 op/s
  array-unique       ⇝   1,231.99ms   @   2,435,081.39 op/s
  lodash.uniq        ⇝     955.08ms   @   3,141,104.72 op/s
  ramda.uniq         ⇝     398.74ms   @   7,523,667.78 op/s

Array<string>(500)
  @arr/unique        ⇝   23,623.02ms   @     634,973.80 op/s
  arr-uniq           ⇝   77,511.53ms   @     193,519.59 op/s
  array-unique       ⇝   30,616.37ms   @     489,934.04 op/s
  lodash.uniq        ⇝    2,791.87ms   @   5,372,750.25 op/s
  ramda.uniq         ⇝    1,942.64ms   @   7,721,446.13 op/s
```
</details>

<details>
<summary>:wavy_dash: ↝ Numbers</summary>

```
Array<number>(5)
  @arr/unique        ⇝    6.54ms   @   22,942,066.08 op/s
  arr-uniq           ⇝   35.56ms   @    4,218,480.86 op/s
  array-unique       ⇝    3.14ms   @   47,814,281.68 op/s
  lodash.uniq        ⇝    5.02ms   @   29,896,414.90 op/s
  ramda.uniq         ⇝   28.29ms   @    5,302,871.57 op/s

Array<number>(10)
  @arr/unique        ⇝    8.31ms   @   36,107,022.66 op/s
  arr-uniq           ⇝   66.70ms   @    4,497,480.53 op/s
  array-unique       ⇝    7.33ms   @   40,933,664.13 op/s
  lodash.uniq        ⇝    7.92ms   @   37,890,461.20 op/s
  ramda.uniq         ⇝   41.60ms   @    7,212,201.08 op/s

Array<number>(100)
  @arr/unique        ⇝     190.06ms   @   15,784,484.62 op/s
  arr-uniq           ⇝   2,484.60ms   @    1,207,436.39 op/s
  array-unique       ⇝     499.80ms   @    6,002,421.21 op/s
  lodash.uniq        ⇝     320.82ms   @    9,350,950.73 op/s
  ramda.uniq         ⇝     313.89ms   @    9,557,531.19 op/s

Array<number>(500)
  @arr/unique        ⇝    3,585.22ms   @   4,183,845.21 op/s
  arr-uniq           ⇝   59,928.83ms   @     250,296.89 op/s
  array-unique       ⇝   11,430.98ms   @   1,312,223.06 op/s
  lodash.uniq        ⇝    3,074.10ms   @   4,879,474.34 op/s
  ramda.uniq         ⇝    2,119.91ms   @   7,075,759.55 op/s
```
</details>

<br>

> :white_check_mark: &mdash; Denotes function **is** faster than native <br>
> :no_entry_sign: &mdash; Denotes function **is not** faster than native <br>
> :mag: &mdash; Denotes function **is sometimes** faster than native <br>
> :wavy_dash: &mdash; Denotes function has no native counterpart <br>
