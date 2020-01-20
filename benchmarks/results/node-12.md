# Benchmark Results for Node `v12.14.1` (LTS)
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
    native         ⇝   16.19ms   @   185,351,188.91 op/s
    @arr/every     ⇝    3.31ms   @   906,297,590.06 op/s
    array-every    ⇝    9.13ms   @   328,455,693.30 op/s
    lodash.every   ⇝    7.71ms   @   388,889,025.72 op/s
    fastjs.every   ⇝    3.11ms   @   964,046,837.25 op/s

  Benchmark: code/every.js • Array<string>(500)
    native         ⇝    4.97ms   @   3,016,574,872.29 op/s
    @arr/every     ⇝    5.00ms   @   2,998,557,693.75 op/s
    array-every    ⇝   16.14ms   @     929,302,448.85 op/s
    lodash.every   ⇝   14.23ms   @   1,053,912,618.98 op/s
    fastjs.every   ⇝    4.99ms   @   3,008,823,072.78 op/s

  Benchmark: code/every.js • Array<string>(1000)
    native         ⇝    9.49ms   @   3,161,563,148.48 op/s
    @arr/every     ⇝    9.47ms   @   3,167,597,253.95 op/s
    array-every    ⇝   31.67ms   @     947,193,369.75 op/s
    lodash.every   ⇝   27.71ms   @   1,082,806,704.28 op/s
    fastjs.every   ⇝    9.48ms   @   3,165,327,926.39 op/s

  Benchmark: code/every.js • Array<string>(5000)
    native         ⇝    45.01ms   @   3,332,636,293.94 op/s
    @arr/every     ⇝    45.16ms   @   3,321,697,721.48 op/s
    array-every    ⇝   156.30ms   @     959,713,879.35 op/s
    lodash.every   ⇝   135.04ms   @   1,110,777,589.85 op/s
    fastjs.every   ⇝    44.95ms   @   3,336,690,637.30 op/s

  Benchmark: code/every.js • Array<string>(10000)
    native         ⇝    89.43ms   @   3,354,583,164.02 op/s
    @arr/every     ⇝    89.80ms   @   3,340,682,872.77 op/s
    array-every    ⇝   312.33ms   @     960,512,787.81 op/s
    lodash.every   ⇝   268.68ms   @   1,116,558,298.67 op/s
    fastjs.every   ⇝    89.41ms   @   3,355,242,245.02 op/s
  ```
</details>

<details>
  <summary>:no_entry_sign: ↝ Numbers</summary>

  ```
  Benchmark: code/every.js • Array<number>(100)
    native         ⇝   1.41ms   @   2,127,297,481.28 op/s
    @arr/every     ⇝   1.46ms   @   2,061,386,722.33 op/s
    array-every    ⇝   3.70ms   @     810,722,726.88 op/s
    lodash.every   ⇝   3.55ms   @     845,417,400.89 op/s
    fastjs.every   ⇝   1.43ms   @   2,104,781,642.94 op/s

  Benchmark: code/every.js • Array<number>(500)
    native         ⇝    4.97ms   @   3,020,381,534.60 op/s
    @arr/every     ⇝    5.01ms   @   2,994,380,147.34 op/s
    array-every    ⇝   16.15ms   @     928,841,916.18 op/s
    lodash.every   ⇝   14.31ms   @   1,047,852,635.59 op/s
    fastjs.every   ⇝    5.06ms   @   2,962,927,846.78 op/s

  Benchmark: code/every.js • Array<number>(1000)
    native         ⇝    9.42ms   @   3,185,815,898.07 op/s
    @arr/every     ⇝    9.52ms   @   3,151,532,621.83 op/s
    array-every    ⇝   34.43ms   @     871,209,808.99 op/s
    lodash.every   ⇝   27.66ms   @   1,084,648,656.63 op/s
    fastjs.every   ⇝    9.44ms   @   3,176,990,792.45 op/s

  Benchmark: code/every.js • Array<number>(5000)
    native         ⇝    45.04ms   @   3,330,129,009.20 op/s
    @arr/every     ⇝    45.18ms   @   3,319,858,837.83 op/s
    array-every    ⇝   156.21ms   @     960,222,992.97 op/s
    lodash.every   ⇝   134.95ms   @   1,111,524,359.40 op/s
    fastjs.every   ⇝    44.97ms   @   3,335,469,812.93 op/s

  Benchmark: code/every.js • Array<number>(10000)
    native         ⇝    89.38ms   @   3,356,331,288.25 op/s
    @arr/every     ⇝    89.56ms   @   3,349,883,282.81 op/s
    array-every    ⇝   312.90ms   @     958,784,365.74 op/s
    lodash.every   ⇝   270.43ms   @   1,109,358,681.85 op/s
    fastjs.every   ⇝    89.41ms   @   3,355,440,316.31 op/s
  ```
</details>

<details>
<summary>:no_entry_sign: ↝ Objects</summary>

```
Benchmark: code/every.js • Array<object>(100)
  native         ⇝   1.41ms   @   2,129,970,819.40 op/s
  @arr/every     ⇝   1.47ms   @   2,038,324,578.73 op/s
  array-every    ⇝   3.71ms   @     809,430,622.22 op/s
  lodash.every   ⇝   3.56ms   @     843,354,018.93 op/s
  fastjs.every   ⇝   1.44ms   @   2,078,685,162.35 op/s

Benchmark: code/every.js • Array<object>(500)
  native         ⇝    4.96ms   @   3,022,646,879.48 op/s
  @arr/every     ⇝    5.01ms   @   2,994,656,335.24 op/s
  array-every    ⇝   16.15ms   @     928,837,372.40 op/s
  lodash.every   ⇝   14.19ms   @   1,057,194,132.07 op/s
  fastjs.every   ⇝    4.99ms   @   3,004,401,448.12 op/s

Benchmark: code/every.js • Array<object>(1000)
  native         ⇝    9.40ms   @   3,190,358,481.44 op/s
  @arr/every     ⇝    9.43ms   @   3,181,575,707.18 op/s
  array-every    ⇝   31.85ms   @     941,880,953.22 op/s
  lodash.every   ⇝   27.56ms   @   1,088,511,160.20 op/s
  fastjs.every   ⇝    9.44ms   @   3,177,197,044.99 op/s

Benchmark: code/every.js • Array<object>(5000)
  native         ⇝    44.97ms   @   3,335,446,820.68 op/s
  @arr/every     ⇝    45.01ms   @   3,332,253,535.09 op/s
  array-every    ⇝   158.32ms   @     947,463,011.77 op/s
  lodash.every   ⇝   134.65ms   @   1,114,034,279.30 op/s
  fastjs.every   ⇝    45.00ms   @   3,333,614,690.41 op/s

Benchmark: code/every.js • Array<object>(10000)
  native         ⇝    89.56ms   @   3,349,600,033.19 op/s
  @arr/every     ⇝    89.62ms   @   3,347,355,591.87 op/s
  array-every    ⇝   312.06ms   @     961,352,030.11 op/s
  lodash.every   ⇝   268.20ms   @   1,118,557,314.01 op/s
  fastjs.every   ⇝    89.66ms   @   3,346,074,814.44 op/s
```
</details>


## filter

<details>
<summary>:mag: ↝ Strings</summary>

```
Benchmark: code/filter.js • Array<string>(100)
  native               ⇝   44.33ms   @    67,673,122.40 op/s
  @arr/filter          ⇝   22.99ms   @   130,511,909.47 op/s
  @arr/filter.mutate   ⇝    5.64ms   @   532,040,451.39 op/s
  arr-filter           ⇝   16.00ms   @   187,445,172.29 op/s
  array-filter         ⇝   34.11ms   @    87,951,680.99 op/s
  lodash.filter        ⇝   28.25ms   @   106,195,013.55 op/s
  fastjs.filter        ⇝   26.95ms   @   111,328,775.36 op/s
  ramda.filter         ⇝   30.98ms   @    96,834,862.15 op/s

Benchmark: code/filter.js • Array<string>(500)
  native               ⇝    96.06ms   @     156,155,911.18 op/s
  @arr/filter          ⇝    99.40ms   @     150,905,095.56 op/s
  @arr/filter.mutate   ⇝    14.08ms   @   1,065,407,648.41 op/s
  arr-filter           ⇝    39.77ms   @     377,180,755.40 op/s
  array-filter         ⇝    93.04ms   @     161,226,958.65 op/s
  lodash.filter        ⇝   114.70ms   @     130,772,167.98 op/s
  fastjs.filter        ⇝   100.05ms   @     149,931,831.99 op/s
  ramda.filter         ⇝   108.47ms   @     138,285,578.36 op/s

Benchmark: code/filter.js • Array<string>(1000)
  native               ⇝   212.63ms   @     141,087,926.46 op/s
  @arr/filter          ⇝   223.45ms   @     134,258,645.11 op/s
  @arr/filter.mutate   ⇝    27.41ms   @   1,094,553,755.91 op/s
  arr-filter           ⇝    78.59ms   @     381,727,197.49 op/s
  array-filter         ⇝   203.63ms   @     147,326,085.33 op/s
  lodash.filter        ⇝   252.68ms   @     118,726,980.35 op/s
  fastjs.filter        ⇝   223.66ms   @     134,129,953.78 op/s
  ramda.filter         ⇝   230.69ms   @     130,045,962.14 op/s

Benchmark: code/filter.js • Array<string>(5000)
  native               ⇝   1,086.53ms   @     138,054,661.38 op/s
  @arr/filter          ⇝   1,149.56ms   @     130,484,857.59 op/s
  @arr/filter.mutate   ⇝     135.04ms   @   1,110,750,980.96 op/s
  arr-filter           ⇝     408.85ms   @     366,885,958.40 op/s
  array-filter         ⇝   1,023.27ms   @     146,589,221.37 op/s
  lodash.filter        ⇝   1,330.29ms   @     112,756,988.12 op/s
  fastjs.filter        ⇝   1,146.94ms   @     130,782,321.96 op/s
  ramda.filter         ⇝   1,204.94ms   @     124,487,849.83 op/s

Benchmark: code/filter.js • Array<string>(10000)
  native               ⇝   1,803.12ms   @     166,378,328.49 op/s
  @arr/filter          ⇝   1,937.74ms   @     154,819,530.91 op/s
  @arr/filter.mutate   ⇝     268.77ms   @   1,116,189,180.72 op/s
  arr-filter           ⇝     841.94ms   @     356,320,239.69 op/s
  array-filter         ⇝   1,711.77ms   @     175,257,111.30 op/s
  lodash.filter        ⇝   2,266.87ms   @     132,340,845.87 op/s
  fastjs.filter        ⇝   1,923.35ms   @     155,978,077.32 op/s
  ramda.filter         ⇝   2,007.90ms   @     149,410,114.82 op/s
```
</details>

<details>
<summary>:mag: ↝ Numbers</summary>

```
Benchmark: code/filter.js • Array<number>(100)
  native               ⇝   22.04ms   @   136,134,633.16 op/s
  @arr/filter          ⇝   21.16ms   @   141,779,376.55 op/s
  @arr/filter.mutate   ⇝    3.42ms   @   876,539,934.58 op/s
  arr-filter           ⇝    8.09ms   @   370,709,959.00 op/s
  array-filter         ⇝   21.21ms   @   141,430,793.10 op/s
  lodash.filter        ⇝   23.74ms   @   126,354,243.73 op/s
  fastjs.filter        ⇝   22.92ms   @   130,894,883.82 op/s
  ramda.filter         ⇝   25.94ms   @   115,637,064.44 op/s

Benchmark: code/filter.js • Array<number>(500)
  native               ⇝    99.33ms   @     151,008,219.97 op/s
  @arr/filter          ⇝   102.02ms   @     147,032,906.82 op/s
  @arr/filter.mutate   ⇝    14.04ms   @   1,068,610,492.90 op/s
  arr-filter           ⇝    40.14ms   @     373,684,285.66 op/s
  array-filter         ⇝    95.03ms   @     157,847,464.02 op/s
  lodash.filter        ⇝   117.72ms   @     127,424,377.26 op/s
  fastjs.filter        ⇝   103.62ms   @     144,761,579.32 op/s
  ramda.filter         ⇝   111.43ms   @     134,612,529.28 op/s

Benchmark: code/filter.js • Array<number>(1000)
  native               ⇝   213.67ms   @     140,400,208.08 op/s
  @arr/filter          ⇝   228.02ms   @     131,569,309.34 op/s
  @arr/filter.mutate   ⇝    27.53ms   @   1,089,792,746.85 op/s
  arr-filter           ⇝    81.86ms   @     366,497,773.90 op/s
  array-filter         ⇝   206.06ms   @     145,591,961.68 op/s
  lodash.filter        ⇝   266.08ms   @     112,746,365.18 op/s
  fastjs.filter        ⇝   236.89ms   @     126,639,736.59 op/s
  ramda.filter         ⇝   237.58ms   @     126,270,715.35 op/s

Benchmark: code/filter.js • Array<number>(5000)
  native               ⇝   1,099.50ms   @     136,426,053.76 op/s
  @arr/filter          ⇝   1,223.07ms   @     122,641,709.59 op/s
  @arr/filter.mutate   ⇝     135.23ms   @   1,109,241,578.92 op/s
  arr-filter           ⇝     413.93ms   @     362,383,322.05 op/s
  array-filter         ⇝   1,053.08ms   @     142,439,881.91 op/s
  lodash.filter        ⇝   1,319.61ms   @     113,669,681.43 op/s
  fastjs.filter        ⇝   1,136.66ms   @     131,965,399.01 op/s
  ramda.filter         ⇝   1,251.91ms   @     119,816,978.89 op/s

Benchmark: code/filter.js • Array<number>(10000)
  native               ⇝   1,888.44ms   @     158,861,404.39 op/s
  @arr/filter          ⇝   1,923.97ms   @     155,927,607.73 op/s
  @arr/filter.mutate   ⇝     268.00ms   @   1,119,421,727.03 op/s
  arr-filter           ⇝     878.29ms   @     341,572,373.22 op/s
  array-filter         ⇝   1,818.22ms   @     164,996,973.02 op/s
  lodash.filter        ⇝   2,399.55ms   @     125,023,474.88 op/s
  fastjs.filter        ⇝   1,972.38ms   @     152,100,829.97 op/s
  ramda.filter         ⇝   2,014.02ms   @     148,955,514.92 op/s
```
</details>

<details>
<summary>:mag: ↝ Objects</summary>

```
Benchmark: code/filter.js • Array<object>(100)
  native               ⇝   22.12ms   @   135,595,169.23 op/s
  @arr/filter          ⇝   21.44ms   @   139,911,447.25 op/s
  @arr/filter.mutate   ⇝    3.39ms   @   884,228,545.96 op/s
  arr-filter           ⇝    9.09ms   @   330,048,507.23 op/s
  array-filter         ⇝   20.15ms   @   148,897,725.03 op/s
  lodash.filter        ⇝   23.39ms   @   128,277,824.45 op/s
  fastjs.filter        ⇝   23.12ms   @   129,759,996.78 op/s
  ramda.filter         ⇝   24.68ms   @   121,545,676.93 op/s

Benchmark: code/filter.js • Array<object>(500)
  native               ⇝   100.14ms   @     149,792,229.19 op/s
  @arr/filter          ⇝   103.28ms   @     145,237,924.41 op/s
  @arr/filter.mutate   ⇝    14.07ms   @   1,066,333,477.74 op/s
  arr-filter           ⇝    37.77ms   @     397,167,317.96 op/s
  array-filter         ⇝    93.05ms   @     161,204,904.78 op/s
  lodash.filter        ⇝   115.87ms   @     129,460,110.09 op/s
  fastjs.filter        ⇝   102.01ms   @     147,040,991.21 op/s
  ramda.filter         ⇝   112.32ms   @     133,544,608.03 op/s

Benchmark: code/filter.js • Array<object>(1000)
  native               ⇝   217.43ms   @     137,973,317.12 op/s
  @arr/filter          ⇝   229.06ms   @     130,968,851.38 op/s
  @arr/filter.mutate   ⇝    27.45ms   @   1,092,937,423.79 op/s
  arr-filter           ⇝    82.80ms   @     362,332,318.64 op/s
  array-filter         ⇝   210.63ms   @     142,430,321.24 op/s
  lodash.filter        ⇝   261.44ms   @     114,750,698.10 op/s
  fastjs.filter        ⇝   232.31ms   @     129,137,771.68 op/s
  ramda.filter         ⇝   235.78ms   @     127,236,712.19 op/s

Benchmark: code/filter.js • Array<object>(5000)
  native               ⇝   1,107.18ms   @     135,478,951.30 op/s
  @arr/filter          ⇝   1,156.74ms   @     129,674,923.53 op/s
  @arr/filter.mutate   ⇝     134.65ms   @   1,114,013,082.18 op/s
  arr-filter           ⇝     410.48ms   @     365,427,619.84 op/s
  array-filter         ⇝   1,044.56ms   @     143,601,539.46 op/s
  lodash.filter        ⇝   1,323.81ms   @     113,309,724.92 op/s
  fastjs.filter        ⇝   1,143.30ms   @     131,198,604.91 op/s
  ramda.filter         ⇝   1,186.75ms   @     126,395,145.19 op/s

Benchmark: code/filter.js • Array<object>(10000)
  native               ⇝   1,807.43ms   @     165,981,723.35 op/s
  @arr/filter          ⇝   1,932.44ms   @     155,244,227.23 op/s
  @arr/filter.mutate   ⇝     268.02ms   @   1,119,300,802.93 op/s
  arr-filter           ⇝     835.38ms   @     359,119,704.66 op/s
  array-filter         ⇝   1,727.41ms   @     173,670,584.24 op/s
  lodash.filter        ⇝   2,255.16ms   @     133,028,213.61 op/s
  fastjs.filter        ⇝   1,928.58ms   @     155,554,585.69 op/s
  ramda.filter         ⇝   2,003.26ms   @     149,756,239.37 op/s
```
</details>


## find

<details>
<summary>:no_entry_sign: ↝ Strings</summary>

```
Benchmark: code/find.js • Array<string>(100)
  native        ⇝    3.29ms   @     911,881,820.12 op/s
  @arr/find     ⇝    1.78ms   @   1,687,087,928.77 op/s
  lodash.find   ⇝   11.38ms   @     263,722,051.73 op/s
  ramda.find    ⇝   16.34ms   @     183,625,884.05 op/s

Benchmark: code/find.js • Array<string>(500)
  native        ⇝   0.23ms   @   66,253,831,679.93 op/s
  @arr/find     ⇝   0.24ms   @   62,609,044,085.11 op/s
  lodash.find   ⇝   1.26ms   @   11,917,331,852.41 op/s
  ramda.find    ⇝   8.67ms   @    1,730,799,120.34 op/s

Benchmark: code/find.js • Array<string>(1000)
  native        ⇝   0.22ms   @   135,138,787,534.80 op/s
  @arr/find     ⇝   0.23ms   @   130,237,727,264.83 op/s
  lodash.find   ⇝   1.24ms   @    24,275,045,980.98 op/s
  ramda.find    ⇝   8.37ms   @     3,584,665,803.40 op/s

Benchmark: code/find.js • Array<string>(5000)
  native        ⇝   0.22ms   @   675,900,976,001.01 op/s
  @arr/find     ⇝   0.41ms   @   362,713,093,942.69 op/s
  lodash.find   ⇝   1.23ms   @   122,321,066,704.94 op/s
  ramda.find    ⇝   8.30ms   @    18,075,656,019.78 op/s

Benchmark: code/find.js • Array<string>(10000)
  native        ⇝   0.22ms   @   1,341,729,578,875.81 op/s
  @arr/find     ⇝   0.21ms   @   1,408,874,027,876.92 op/s
  lodash.find   ⇝   1.23ms   @     244,876,569,964.91 op/s
  ramda.find    ⇝   8.32ms   @      36,058,624,111.08 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/find.js • Array<number>(100)
  native        ⇝   13.89ms   @   215,973,392.08 op/s
  @arr/find     ⇝    8.81ms   @   340,644,472.09 op/s
  lodash.find   ⇝   15.47ms   @   193,867,705.97 op/s
  ramda.find    ⇝   15.61ms   @   192,153,784.52 op/s

Benchmark: code/find.js • Array<number>(500)
  native        ⇝   36.11ms   @   415,374,827.88 op/s
  @arr/find     ⇝   27.29ms   @   549,749,427.88 op/s
  lodash.find   ⇝   42.02ms   @   356,968,996.24 op/s
  ramda.find    ⇝   36.15ms   @   414,935,325.97 op/s

Benchmark: code/find.js • Array<number>(1000)
  native        ⇝   71.85ms   @   417,524,261.50 op/s
  @arr/find     ⇝   53.99ms   @   555,631,954.95 op/s
  lodash.find   ⇝   81.78ms   @   366,855,599.34 op/s
  ramda.find    ⇝   63.29ms   @   474,015,579.85 op/s

Benchmark: code/find.js • Array<number>(5000)
  native        ⇝   352.54ms   @   425,477,937.74 op/s
  @arr/find     ⇝   267.50ms   @   560,743,580.08 op/s
  lodash.find   ⇝   404.59ms   @   370,745,465.00 op/s
  ramda.find    ⇝   277.76ms   @   540,028,093.77 op/s

Benchmark: code/find.js • Array<number>(10000)
  native        ⇝   706.47ms   @   424,645,241.17 op/s
  @arr/find     ⇝   535.62ms   @   560,100,233.75 op/s
  lodash.find   ⇝   806.56ms   @   371,950,768.98 op/s
  ramda.find    ⇝   546.99ms   @   548,458,288.96 op/s
```
</details>

<details>
<summary>:mag: ↝ Objects</summary>

```
Benchmark: code/find.js • Array<object>(100)
  native        ⇝   76.45ms   @   39,239,702.51 op/s
  @arr/find     ⇝   66.85ms   @   44,876,657.18 op/s
  lodash.find   ⇝   75.34ms   @   39,820,022.52 op/s
  ramda.find    ⇝   77.43ms   @   38,744,943.82 op/s

Benchmark: code/find.js • Array<object>(500)
  native        ⇝   396.76ms   @   37,806,430.57 op/s
  @arr/find     ⇝   400.02ms   @   37,498,167.37 op/s
  lodash.find   ⇝   411.14ms   @   36,484,144.78 op/s
  ramda.find    ⇝   408.04ms   @   36,761,293.66 op/s

Benchmark: code/find.js • Array<object>(1000)
  native        ⇝   1,224.41ms   @   24,501,536.79 op/s
  @arr/find     ⇝   1,241.72ms   @   24,159,946.66 op/s
  lodash.find   ⇝   1,250.32ms   @   23,993,776.94 op/s
  ramda.find    ⇝   1,244.60ms   @   24,104,192.61 op/s

Benchmark: code/find.js • Array<object>(5000)
  native        ⇝   34,537.00ms   @   4,343,168.00 op/s
  @arr/find     ⇝   34,319.48ms   @   4,370,696.23 op/s
  lodash.find   ⇝   34,734.21ms   @   4,318,508.86 op/s
  ramda.find    ⇝   34,409.35ms   @   4,359,280.50 op/s

Benchmark: code/find.js • Array<object>(10000)
  native        ⇝   86,944.84ms   @   3,450,463.43 op/s
  @arr/find     ⇝   83,957.77ms   @   3,573,225.15 op/s
  lodash.find   ⇝   86,186.90ms   @   3,480,807.41 op/s
  ramda.find    ⇝   85,079.53ms   @   3,526,112.63 op/s
```
</details>


## findIndex

<details>
<summary>:no_entry_sign: ↝ Strings</summary>

```
Benchmark: code/findIndex.js • Array<string>(100)
  native             ⇝    3.40ms   @     881,457,743.06 op/s
  @arr/findIndex     ⇝    1.82ms   @   1,644,561,927.08 op/s
  lodash.findindex   ⇝    6.79ms   @     442,122,808.45 op/s
  ramda.findIndex    ⇝   26.37ms   @     113,783,687.65 op/s

Benchmark: code/findIndex.js • Array<string>(500)
  native             ⇝    0.25ms   @   61,088,350,044.39 op/s
  @arr/findIndex     ⇝    0.25ms   @   60,452,669,589.89 op/s
  lodash.findindex   ⇝    0.32ms   @   46,713,982,740.74 op/s
  ramda.findIndex    ⇝   10.42ms   @    1,439,063,158.37 op/s

Benchmark: code/findIndex.js • Array<string>(1000)
  native             ⇝   0.23ms   @   130,575,577,144.05 op/s
  @arr/findIndex     ⇝   0.24ms   @   125,316,947,446.25 op/s
  lodash.findindex   ⇝   0.32ms   @    94,230,575,937.28 op/s
  ramda.findIndex    ⇝   8.12ms   @     3,695,843,420.42 op/s

Benchmark: code/findIndex.js • Array<string>(5000)
  native             ⇝   0.25ms   @   605,933,298,862.46 op/s
  @arr/findIndex     ⇝   0.23ms   @   648,292,613,353.96 op/s
  lodash.findindex   ⇝   0.32ms   @   463,509,446,322.52 op/s
  ramda.findIndex    ⇝   8.06ms   @    18,612,375,442.88 op/s

Benchmark: code/findIndex.js • Array<string>(10000)
  native             ⇝   0.25ms   @   1,219,913,874,080.49 op/s
  @arr/findIndex     ⇝   0.25ms   @   1,222,807,811,296.30 op/s
  lodash.findindex   ⇝   0.31ms   @     968,126,062,921.74 op/s
  ramda.findIndex    ⇝   8.10ms   @      37,053,235,247.66 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Numbers</summary>

```
Benchmark: code/findIndex.js • Array<number>(100)
  native             ⇝   10.94ms   @   274,237,147.67 op/s
  @arr/findIndex     ⇝   11.54ms   @   259,870,194.84 op/s
  lodash.findindex   ⇝   13.09ms   @   229,183,387.50 op/s
  ramda.findIndex    ⇝   19.06ms   @   157,405,892.13 op/s

Benchmark: code/findIndex.js • Array<number>(500)
  native             ⇝   22.87ms   @   655,872,864.90 op/s
  @arr/findIndex     ⇝   40.80ms   @   367,609,550.04 op/s
  lodash.findindex   ⇝   42.86ms   @   349,971,426.00 op/s
  ramda.findIndex    ⇝   44.68ms   @   335,732,447.56 op/s

Benchmark: code/findIndex.js • Array<number>(1000)
  native             ⇝   45.20ms   @   663,762,264.25 op/s
  @arr/findIndex     ⇝   80.74ms   @   371,542,900.13 op/s
  lodash.findindex   ⇝   85.46ms   @   351,052,785.07 op/s
  ramda.findIndex    ⇝   81.00ms   @   370,362,757.36 op/s

Benchmark: code/findIndex.js • Array<number>(5000)
  native             ⇝   223.56ms   @   670,948,024.78 op/s
  @arr/findIndex     ⇝   402.02ms   @   373,113,376.46 op/s
  lodash.findindex   ⇝   424.73ms   @   353,163,554.84 op/s
  ramda.findIndex    ⇝   370.47ms   @   404,887,161.88 op/s

Benchmark: code/findIndex.js • Array<number>(10000)
  native             ⇝   446.23ms   @   672,299,174.21 op/s
  @arr/findIndex     ⇝   802.86ms   @   373,665,384.02 op/s
  lodash.findindex   ⇝   847.63ms   @   353,929,935.96 op/s
  ramda.findIndex    ⇝   726.87ms   @   412,728,479.16 op/s
```
</details>

<details>
<summary>:mag: ↝ Objects</summary>

```
Benchmark: code/findIndex.js • Array<object>(100)
  native             ⇝   75.12ms   @   39,937,684.43 op/s
  @arr/findIndex     ⇝   64.49ms   @   46,519,409.27 op/s
  lodash.findindex   ⇝   68.18ms   @   43,998,312.64 op/s
  ramda.findIndex    ⇝   74.27ms   @   40,395,263.89 op/s

Benchmark: code/findIndex.js • Array<object>(500)
  native             ⇝   405.90ms   @   36,955,091.81 op/s
  @arr/findIndex     ⇝   401.58ms   @   37,352,046.68 op/s
  lodash.findindex   ⇝   410.17ms   @   36,570,077.87 op/s
  ramda.findIndex    ⇝   413.72ms   @   36,256,711.32 op/s

Benchmark: code/findIndex.js • Array<object>(1000)
  native             ⇝   1,466.54ms   @   20,456,314.86 op/s
  @arr/findIndex     ⇝   1,284.44ms   @   23,356,412.74 op/s
  lodash.findindex   ⇝   1,291.09ms   @   23,236,108.53 op/s
  ramda.findIndex    ⇝   1,296.30ms   @   23,142,721.66 op/s

Benchmark: code/findIndex.js • Array<object>(5000)
  native             ⇝   34,754.13ms   @   4,316,034.20 op/s
  @arr/findIndex     ⇝   34,537.23ms   @   4,343,138.87 op/s
  lodash.findindex   ⇝   34,843.94ms   @   4,304,909.86 op/s
  ramda.findIndex    ⇝   34,821.83ms   @   4,307,642.44 op/s

Benchmark: code/findIndex.js • Array<object>(10000)
  native             ⇝   83,876.74ms   @   3,576,677.13 op/s
  @arr/findIndex     ⇝   83,734.01ms   @   3,582,773.61 op/s
  lodash.findindex   ⇝   83,693.08ms   @   3,584,525.59 op/s
  ramda.findIndex    ⇝   83,956.88ms   @   3,573,262.70 op/s
```
</details>


## flatten

```js
// Requires Node 11.x
const native = arr => arr.flat(Infinity);
```

<details>
<summary>:white_check_mark: ↝ Arrays</summary>

```
Benchmark: code/flatten.js • Array<array>(5)
  native               ⇝   1,055.78ms   @     142,075.08 op/s
  @arr/flatten         ⇝      84.24ms   @   1,780,688.76 op/s
  arr-flatten          ⇝      87.76ms   @   1,709,143.54 op/s
  array-flatten        ⇝      93.76ms   @   1,599,888.29 op/s
  flatten              ⇝   2,130.88ms   @      70,393.37 op/s
  flatten-array        ⇝     111.59ms   @   1,344,261.34 op/s
  lodash.flattendeep   ⇝     167.90ms   @     893,374.43 op/s
  ramda.flatten        ⇝   1,156.24ms   @     129,730.68 op/s

Benchmark: code/flatten.js • Array<array>(10)
  native               ⇝   1,993.57ms   @     150,483.91 op/s
  @arr/flatten         ⇝     302.01ms   @     993,337.09 op/s
  arr-flatten          ⇝     276.99ms   @   1,083,064.28 op/s
  array-flatten        ⇝     292.98ms   @   1,023,948.12 op/s
  flatten              ⇝   4,318.39ms   @      69,470.40 op/s
  flatten-array        ⇝     205.20ms   @   1,461,982.17 op/s
  lodash.flattendeep   ⇝     315.88ms   @     949,722.56 op/s
  ramda.flatten        ⇝   2,190.59ms   @     136,949.50 op/s

Benchmark: code/flatten.js • Array<array>(100)
  native               ⇝   22,899.59ms   @     131,006.70 op/s
  @arr/flatten         ⇝    3,445.75ms   @     870,636.88 op/s
  arr-flatten          ⇝    3,215.73ms   @     932,912.73 op/s
  array-flatten        ⇝    3,547.17ms   @     845,745.34 op/s
  flatten              ⇝   63,488.69ms   @      47,252.51 op/s
  flatten-array        ⇝    2,490.46ms   @   1,204,597.25 op/s
  lodash.flattendeep   ⇝    3,634.83ms   @     825,347.28 op/s
  ramda.flatten        ⇝   25,770.58ms   @     116,411.83 op/s

Benchmark: code/flatten.js • Array<array>(500)
  native               ⇝     113,209.34ms   @   132,497.90 op/s
  @arr/flatten         ⇝      24,814.11ms   @   604,494.72 op/s
  arr-flatten          ⇝      23,856.92ms   @   628,748.41 op/s
  array-flatten        ⇝      25,151.59ms   @   596,383.76 op/s
  flatten              ⇝   1,004,954.71ms   @    14,926.05 op/s
  flatten-array        ⇝      20,131.80ms   @   745,090.04 op/s
  lodash.flattendeep   ⇝      25,424.48ms   @   589,982.59 op/s
  ramda.flatten        ⇝     126,749.39ms   @   118,343.77 op/s
```
</details>


## forEach

<details>
<summary>:mag: ↝ Strings</summary>

```
Benchmark: code/forEach.js • Array<string>(100)
  native           ⇝   14.96ms   @   200,549,519.05 op/s
  @arr/forEach     ⇝    3.23ms   @   929,586,891.59 op/s
  fastjs.forEach   ⇝    6.27ms   @   478,747,519.89 op/s
  lodash.foreach   ⇝    8.30ms   @   361,497,960.79 op/s
  ramda.forEach    ⇝    8.72ms   @   343,908,441.48 op/s

Benchmark: code/forEach.js • Array<string>(500)
  native           ⇝    4.98ms   @   3,013,498,060.51 op/s
  @arr/forEach     ⇝    4.98ms   @   3,011,661,151.98 op/s
  fastjs.forEach   ⇝    5.02ms   @   2,987,673,456.85 op/s
  lodash.foreach   ⇝   18.52ms   @     809,755,677.28 op/s
  ramda.forEach    ⇝    9.66ms   @   1,552,507,833.18 op/s

Benchmark: code/forEach.js • Array<string>(1000)
  native           ⇝    9.43ms   @   3,182,875,282.21 op/s
  @arr/forEach     ⇝    9.43ms   @   3,180,776,236.63 op/s
  fastjs.forEach   ⇝    9.48ms   @   3,166,184,474.36 op/s
  lodash.foreach   ⇝   36.30ms   @     826,424,220.25 op/s
  ramda.forEach    ⇝   18.67ms   @   1,607,046,319.57 op/s

Benchmark: code/forEach.js • Array<string>(5000)
  native           ⇝    45.19ms   @   3,319,518,015.72 op/s
  @arr/forEach     ⇝    45.14ms   @   3,322,893,466.64 op/s
  fastjs.forEach   ⇝    45.01ms   @   3,332,568,990.12 op/s
  lodash.foreach   ⇝   180.02ms   @     833,218,099.27 op/s
  ramda.forEach    ⇝    89.99ms   @   1,666,836,332.08 op/s

Benchmark: code/forEach.js • Array<string>(10000)
  native           ⇝    89.38ms   @   3,356,634,568.36 op/s
  @arr/forEach     ⇝    89.80ms   @   3,340,665,797.81 op/s
  fastjs.forEach   ⇝    89.67ms   @   3,345,536,213.85 op/s
  lodash.foreach   ⇝   357.45ms   @     839,267,448.43 op/s
  ramda.forEach    ⇝   179.34ms   @   1,672,820,462.01 op/s
```
</details>

<details>
<summary>:mag: ↝ Numbers</summary>

```
Benchmark: code/forEach.js • Array<number>(100)
  native           ⇝   1.40ms   @   2,140,669,073.25 op/s
  @arr/forEach     ⇝   1.42ms   @   2,109,430,207.74 op/s
  fastjs.forEach   ⇝   1.47ms   @   2,035,436,957.43 op/s
  lodash.foreach   ⇝   4.29ms   @     699,196,064.37 op/s
  ramda.forEach    ⇝   2.57ms   @   1,168,169,256.82 op/s

Benchmark: code/forEach.js • Array<number>(500)
  native           ⇝    4.96ms   @   3,021,294,080.68 op/s
  @arr/forEach     ⇝    4.97ms   @   3,016,367,412.86 op/s
  fastjs.forEach   ⇝    5.05ms   @   2,969,258,671.13 op/s
  lodash.foreach   ⇝   18.50ms   @     810,808,356.47 op/s
  ramda.forEach    ⇝    9.66ms   @   1,553,169,174.40 op/s

Benchmark: code/forEach.js • Array<number>(1000)
  native           ⇝    9.43ms   @   3,182,747,978.24 op/s
  @arr/forEach     ⇝    9.43ms   @   3,181,933,743.87 op/s
  fastjs.forEach   ⇝    9.70ms   @   3,092,854,290.07 op/s
  lodash.foreach   ⇝   36.30ms   @     826,427,316.42 op/s
  ramda.forEach    ⇝   18.77ms   @   1,598,607,037.77 op/s

Benchmark: code/forEach.js • Array<number>(5000)
  native           ⇝    44.94ms   @   3,337,812,529.40 op/s
  @arr/forEach     ⇝    44.99ms   @   3,334,286,050.00 op/s
  fastjs.forEach   ⇝    45.22ms   @   3,317,211,537.83 op/s
  lodash.foreach   ⇝   179.16ms   @     837,250,825.29 op/s
  ramda.forEach    ⇝    90.16ms   @   1,663,675,931.90 op/s

Benchmark: code/forEach.js • Array<number>(10000)
  native           ⇝    89.73ms   @   3,343,348,109.71 op/s
  @arr/forEach     ⇝    89.63ms   @   3,347,196,080.62 op/s
  fastjs.forEach   ⇝    89.54ms   @   3,350,470,655.69 op/s
  lodash.foreach   ⇝   358.15ms   @     837,633,092.46 op/s
  ramda.forEach    ⇝   179.41ms   @   1,672,192,622.28 op/s
```
</details>

<details>
<summary>:mag: ↝ Objects</summary>

```
Benchmark: code/forEach.js • Array<object>(100)
  native           ⇝   1.41ms   @   2,127,131,563.09 op/s
  @arr/forEach     ⇝   1.42ms   @   2,113,597,406.19 op/s
  fastjs.forEach   ⇝   1.48ms   @   2,033,730,091.48 op/s
  lodash.foreach   ⇝   4.30ms   @     698,432,624.07 op/s
  ramda.forEach    ⇝   2.57ms   @   1,166,631,991.77 op/s

Benchmark: code/forEach.js • Array<object>(500)
  native           ⇝    4.95ms   @   3,030,307,927.77 op/s
  @arr/forEach     ⇝    4.97ms   @   3,019,647,639.33 op/s
  fastjs.forEach   ⇝    5.05ms   @   2,971,532,127.91 op/s
  lodash.foreach   ⇝   18.51ms   @     810,488,849.59 op/s
  ramda.forEach    ⇝    9.67ms   @   1,551,953,666.53 op/s

Benchmark: code/forEach.js • Array<object>(1000)
  native           ⇝    9.41ms   @   3,188,816,522.83 op/s
  @arr/forEach     ⇝    9.43ms   @   3,180,196,281.71 op/s
  fastjs.forEach   ⇝    9.48ms   @   3,165,341,953.47 op/s
  lodash.foreach   ⇝   36.54ms   @     821,029,386.94 op/s
  ramda.forEach    ⇝   18.55ms   @   1,616,966,419.00 op/s

Benchmark: code/forEach.js • Array<object>(5000)
  native           ⇝    45.13ms   @   3,324,058,103.21 op/s
  @arr/forEach     ⇝    45.00ms   @   3,333,659,142.95 op/s
  fastjs.forEach   ⇝    45.13ms   @   3,324,030,038.06 op/s
  lodash.foreach   ⇝   179.41ms   @     836,090,089.58 op/s
  ramda.forEach    ⇝    90.06ms   @   1,665,519,623.30 op/s

Benchmark: code/forEach.js • Array<object>(10000)
  native           ⇝    89.55ms   @   3,350,027,076.59 op/s
  @arr/forEach     ⇝    89.59ms   @   3,348,670,504.70 op/s
  fastjs.forEach   ⇝    89.64ms   @   3,346,898,648.24 op/s
  lodash.foreach   ⇝   357.72ms   @     838,650,697.91 op/s
  ramda.forEach    ⇝   179.43ms   @   1,671,974,721.97 op/s
```
</details>


## includes

<details>
<summary>:no_entry_sign: ↝ Strings</summary>

```
Benchmark: code/includes.js • Array<string>(100)
  native          ⇝    6.48ms   @   462,894,243.17 op/s
  @arr/includes   ⇝   15.18ms   @   197,689,875.19 op/s

Benchmark: code/includes.js • Array<string>(500)
  native          ⇝   22.96ms   @   653,276,217.25 op/s
  @arr/includes   ⇝   49.68ms   @   301,950,047.76 op/s

Benchmark: code/includes.js • Array<string>(1000)
  native          ⇝   45.44ms   @   660,212,182.95 op/s
  @arr/includes   ⇝   99.00ms   @   303,035,926.03 op/s

Benchmark: code/includes.js • Array<string>(5000)
  native          ⇝   224.24ms   @   668,924,071.35 op/s
  @arr/includes   ⇝   491.87ms   @   304,959,084.84 op/s

Benchmark: code/includes.js • Array<string>(10000)
  native          ⇝   448.46ms   @   668,952,255.02 op/s
  @arr/includes   ⇝   985.99ms   @   304,261,398.12 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Numbers</summary>

```
Benchmark: code/includes.js • Array<number>(100)
  native          ⇝    3.34ms   @   897,708,509.26 op/s
  @arr/includes   ⇝   12.61ms   @   237,967,528.85 op/s

Benchmark: code/includes.js • Array<number>(500)
  native          ⇝   14.16ms   @   1,059,379,267.31 op/s
  @arr/includes   ⇝   45.32ms   @     330,981,686.39 op/s

Benchmark: code/includes.js • Array<number>(1000)
  native          ⇝   27.36ms   @   1,096,543,249.75 op/s
  @arr/includes   ⇝   89.80ms   @     334,065,248.02 op/s

Benchmark: code/includes.js • Array<number>(5000)
  native          ⇝   134.18ms   @   1,117,872,809.07 op/s
  @arr/includes   ⇝   448.43ms   @     334,501,351.10 op/s

Benchmark: code/includes.js • Array<number>(10000)
  native          ⇝   268.42ms   @   1,117,672,136.32 op/s
  @arr/includes   ⇝   891.50ms   @     336,513,299.51 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Objects</summary>

```
Benchmark: code/includes.js • Array<object>(100)
  native          ⇝    4.24ms   @   708,081,069.62 op/s
  @arr/includes   ⇝   11.36ms   @   264,133,706.60 op/s

Benchmark: code/includes.js • Array<object>(500)
  native          ⇝   19.03ms   @   788,385,131.81 op/s
  @arr/includes   ⇝   54.42ms   @   275,649,006.86 op/s

Benchmark: code/includes.js • Array<object>(1000)
  native          ⇝    38.31ms   @   783,043,679.82 op/s
  @arr/includes   ⇝   107.95ms   @   277,906,837.20 op/s

Benchmark: code/includes.js • Array<object>(5000)
  native          ⇝   656.41ms   @   228,514,649.34 op/s
  @arr/includes   ⇝   962.66ms   @   155,819,055.46 op/s

Benchmark: code/includes.js • Array<object>(10000)
  native          ⇝   1,994.78ms   @   150,392,851.47 op/s
  @arr/includes   ⇝   3,201.93ms   @    93,693,467.18 op/s
```
</details>


## map

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/map.js • Array<string>(100)
  native       ⇝   37.78ms   @    79,401,637.73 op/s
  @arr/map     ⇝   11.38ms   @   263,677,362.27 op/s
  arr-map      ⇝   19.74ms   @   151,984,892.30 op/s
  array-map    ⇝   23.99ms   @   125,064,204.84 op/s
  fastjs.map   ⇝   12.74ms   @   235,465,148.45 op/s
  lodash.map   ⇝   14.12ms   @   212,535,815.83 op/s
  ramda.map    ⇝   20.39ms   @   147,120,368.88 op/s

Benchmark: code/map.js • Array<string>(500)
  native       ⇝   67.11ms   @   223,523,253.39 op/s
  @arr/map     ⇝   40.27ms   @   372,521,419.42 op/s
  arr-map      ⇝   40.88ms   @   366,963,436.52 op/s
  array-map    ⇝   67.89ms   @   220,953,969.35 op/s
  fastjs.map   ⇝   40.27ms   @   372,496,571.60 op/s
  lodash.map   ⇝   45.85ms   @   327,167,819.42 op/s
  ramda.map    ⇝   43.20ms   @   347,211,243.27 op/s

Benchmark: code/map.js • Array<string>(1000)
  native       ⇝   136.02ms   @   220,554,890.96 op/s
  @arr/map     ⇝    79.69ms   @   376,451,455.64 op/s
  arr-map      ⇝    82.33ms   @   364,372,086.09 op/s
  array-map    ⇝   134.19ms   @   223,557,381.42 op/s
  fastjs.map   ⇝    80.63ms   @   372,078,712.36 op/s
  lodash.map   ⇝    93.37ms   @   321,292,603.84 op/s
  ramda.map    ⇝    84.13ms   @   356,571,273.39 op/s

Benchmark: code/map.js • Array<string>(5000)
  native       ⇝   679.65ms   @   220,701,097.62 op/s
  @arr/map     ⇝   417.93ms   @   358,908,659.55 op/s
  arr-map      ⇝   409.11ms   @   366,650,898.89 op/s
  array-map    ⇝   693.05ms   @   216,435,616.26 op/s
  fastjs.map   ⇝   408.19ms   @   367,473,144.05 op/s
  lodash.map   ⇝   463.89ms   @   323,352,181.55 op/s
  ramda.map    ⇝   424.51ms   @   353,348,635.67 op/s

Benchmark: code/map.js • Array<string>(10000)
  native       ⇝   1,365.12ms   @   219,761,387.44 op/s
  @arr/map     ⇝     821.44ms   @   365,212,658.66 op/s
  arr-map      ⇝     815.74ms   @   367,762,155.76 op/s
  array-map    ⇝   1,359.28ms   @   220,704,482.13 op/s
  fastjs.map   ⇝     822.11ms   @   364,916,331.78 op/s
  lodash.map   ⇝     935.67ms   @   320,625,416.90 op/s
  ramda.map    ⇝     826.79ms   @   362,847,127.15 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/map.js • Array<number>(100)
  native       ⇝   10.82ms   @   277,237,062.82 op/s
  @arr/map     ⇝    8.02ms   @   374,292,773.80 op/s
  arr-map      ⇝    9.38ms   @   319,898,656.11 op/s
  array-map    ⇝   10.91ms   @   274,906,431.01 op/s
  fastjs.map   ⇝    8.04ms   @   372,984,067.74 op/s
  lodash.map   ⇝   10.37ms   @   289,294,037.69 op/s
  ramda.map    ⇝   11.36ms   @   264,031,003.58 op/s

Benchmark: code/map.js • Array<number>(500)
  native       ⇝   49.91ms   @   300,551,192.85 op/s
  @arr/map     ⇝   40.81ms   @   367,573,048.71 op/s
  arr-map      ⇝   41.36ms   @   362,664,081.02 op/s
  array-map    ⇝   49.66ms   @   302,026,799.16 op/s
  fastjs.map   ⇝   41.84ms   @   358,515,210.69 op/s
  lodash.map   ⇝   46.15ms   @   325,032,022.70 op/s
  ramda.map    ⇝   43.29ms   @   346,501,827.28 op/s

Benchmark: code/map.js • Array<number>(1000)
  native       ⇝   100.32ms   @   299,033,320.96 op/s
  @arr/map     ⇝    81.10ms   @   369,935,166.77 op/s
  arr-map      ⇝    81.46ms   @   368,275,835.65 op/s
  array-map    ⇝    99.71ms   @   300,868,559.39 op/s
  fastjs.map   ⇝    82.06ms   @   365,570,934.00 op/s
  lodash.map   ⇝    90.79ms   @   330,442,712.28 op/s
  ramda.map    ⇝    82.79ms   @   362,384,327.98 op/s

Benchmark: code/map.js • Array<number>(5000)
  native       ⇝   502.78ms   @   298,340,160.06 op/s
  @arr/map     ⇝   409.22ms   @   366,555,161.08 op/s
  arr-map      ⇝   407.55ms   @   368,056,037.64 op/s
  array-map    ⇝   499.63ms   @   300,222,868.04 op/s
  fastjs.map   ⇝   408.88ms   @   366,857,096.81 op/s
  lodash.map   ⇝   466.99ms   @   321,206,885.45 op/s
  ramda.map    ⇝   414.86ms   @   361,569,679.56 op/s

Benchmark: code/map.js • Array<number>(10000)
  native       ⇝   1,008.52ms   @   297,466,567.38 op/s
  @arr/map     ⇝     828.00ms   @   362,318,863.77 op/s
  arr-map      ⇝     822.20ms   @   364,875,177.22 op/s
  array-map    ⇝   1,005.75ms   @   298,286,043.03 op/s
  fastjs.map   ⇝     817.70ms   @   366,882,537.21 op/s
  lodash.map   ⇝     939.76ms   @   319,230,010.74 op/s
  ramda.map    ⇝     834.60ms   @   359,455,768.87 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/map.js • Array<object>(100)
  native       ⇝   13.31ms   @   225,427,212.75 op/s
  @arr/map     ⇝    8.28ms   @   362,455,505.57 op/s
  arr-map      ⇝   10.11ms   @   296,701,216.53 op/s
  array-map    ⇝   14.17ms   @   211,701,578.96 op/s
  fastjs.map   ⇝    8.04ms   @   373,112,609.86 op/s
  lodash.map   ⇝   10.38ms   @   289,143,695.16 op/s
  ramda.map    ⇝   11.77ms   @   254,812,559.88 op/s

Benchmark: code/map.js • Array<object>(500)
  native       ⇝   67.09ms   @   223,565,819.68 op/s
  @arr/map     ⇝   41.31ms   @   363,085,380.47 op/s
  arr-map      ⇝   42.10ms   @   356,309,897.92 op/s
  array-map    ⇝   67.24ms   @   223,075,806.10 op/s
  fastjs.map   ⇝   41.07ms   @   365,272,225.34 op/s
  lodash.map   ⇝   46.54ms   @   322,307,252.37 op/s
  ramda.map    ⇝   42.34ms   @   354,252,201.35 op/s

Benchmark: code/map.js • Array<object>(1000)
  native       ⇝   135.26ms   @   221,794,567.79 op/s
  @arr/map     ⇝    82.01ms   @   365,796,344.49 op/s
  arr-map      ⇝    83.08ms   @   361,101,914.05 op/s
  array-map    ⇝   137.02ms   @   218,948,625.63 op/s
  fastjs.map   ⇝    81.35ms   @   368,784,097.93 op/s
  lodash.map   ⇝    92.44ms   @   324,549,266.79 op/s
  ramda.map    ⇝    83.19ms   @   360,616,348.15 op/s

Benchmark: code/map.js • Array<object>(5000)
  native       ⇝   687.84ms   @   218,074,967.79 op/s
  @arr/map     ⇝   411.08ms   @   364,891,650.18 op/s
  arr-map      ⇝   413.37ms   @   362,874,281.90 op/s
  array-map    ⇝   698.59ms   @   214,719,083.96 op/s
  fastjs.map   ⇝   412.16ms   @   363,937,421.49 op/s
  lodash.map   ⇝   472.25ms   @   317,630,806.22 op/s
  ramda.map    ⇝   412.38ms   @   363,744,289.43 op/s

Benchmark: code/map.js • Array<object>(10000)
  native       ⇝   1,378.45ms   @   217,636,117.70 op/s
  @arr/map     ⇝     827.21ms   @   362,665,739.12 op/s
  arr-map      ⇝     826.59ms   @   362,935,069.70 op/s
  array-map    ⇝   1,374.86ms   @   218,204,152.13 op/s
  fastjs.map   ⇝     814.46ms   @   368,343,614.20 op/s
  lodash.map   ⇝     930.36ms   @   322,457,508.69 op/s
  ramda.map    ⇝     823.17ms   @   364,442,961.61 op/s
```
</details>


## reduce

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/reduce.js • Array<string>(100)
  native          ⇝   13.88ms   @   216,154,586.84 op/s
  @arr/reduce     ⇝    3.83ms   @   782,946,588.17 op/s
  arr-reduce      ⇝    7.54ms   @   397,986,981.85 op/s
  fastjs.reduce   ⇝    5.60ms   @   535,484,218.74 op/s
  lodash.reduce   ⇝   20.22ms   @   148,395,070.22 op/s
  ramda.reduce    ⇝   13.97ms   @   214,709,059.21 op/s

Benchmark: code/reduce.js • Array<string>(500)
  native          ⇝    9.41ms   @   1,594,222,537.52 op/s
  @arr/reduce     ⇝    5.05ms   @   2,970,671,746.12 op/s
  arr-reduce      ⇝    9.79ms   @   1,531,834,273.51 op/s
  fastjs.reduce   ⇝    9.60ms   @   1,562,723,990.44 op/s
  lodash.reduce   ⇝   10.99ms   @   1,364,990,682.57 op/s
  ramda.reduce    ⇝    9.25ms   @   1,620,760,253.25 op/s

Benchmark: code/reduce.js • Array<string>(1000)
  native          ⇝   18.40ms   @   1,630,399,161.93 op/s
  @arr/reduce     ⇝    9.54ms   @   3,145,235,989.68 op/s
  arr-reduce      ⇝   18.53ms   @   1,619,201,047.34 op/s
  fastjs.reduce   ⇝   18.69ms   @   1,604,779,418.25 op/s
  lodash.reduce   ⇝   21.36ms   @   1,404,306,220.77 op/s
  ramda.reduce    ⇝   16.31ms   @   1,838,910,688.15 op/s

Benchmark: code/reduce.js • Array<string>(5000)
  native          ⇝    93.89ms   @   1,597,593,470.40 op/s
  @arr/reduce     ⇝    45.14ms   @   3,323,066,166.57 op/s
  arr-reduce      ⇝    89.89ms   @   1,668,660,029.40 op/s
  fastjs.reduce   ⇝    90.30ms   @   1,661,071,200.68 op/s
  lodash.reduce   ⇝   104.86ms   @   1,430,532,429.67 op/s
  ramda.reduce    ⇝    49.90ms   @   3,005,962,386.51 op/s

Benchmark: code/reduce.js • Array<string>(10000)
  native          ⇝   186.78ms   @   1,606,173,901.19 op/s
  @arr/reduce     ⇝    90.20ms   @   3,326,046,925.38 op/s
  arr-reduce      ⇝   179.02ms   @   1,675,744,425.58 op/s
  fastjs.reduce   ⇝   179.34ms   @   1,672,824,892.71 op/s
  lodash.reduce   ⇝   208.46ms   @   1,439,153,434.69 op/s
  ramda.reduce    ⇝    95.68ms   @   3,135,399,499.59 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/reduce.js • Array<number>(100)
  native          ⇝   2.31ms   @   1,299,863,297.71 op/s
  @arr/reduce     ⇝   1.49ms   @   2,014,067,590.77 op/s
  arr-reduce      ⇝   2.52ms   @   1,189,605,229.50 op/s
  fastjs.reduce   ⇝   2.42ms   @   1,240,592,176.00 op/s
  lodash.reduce   ⇝   2.68ms   @   1,119,838,384.92 op/s
  ramda.reduce    ⇝   5.74ms   @     522,202,119.37 op/s

Benchmark: code/reduce.js • Array<number>(500)
  native          ⇝    9.42ms   @   1,592,994,562.15 op/s
  @arr/reduce     ⇝    5.06ms   @   2,963,003,347.60 op/s
  arr-reduce      ⇝    9.62ms   @   1,558,676,695.95 op/s
  fastjs.reduce   ⇝    9.53ms   @   1,573,405,007.88 op/s
  lodash.reduce   ⇝   11.13ms   @   1,348,060,504.91 op/s
  ramda.reduce    ⇝    9.26ms   @   1,620,419,533.10 op/s

Benchmark: code/reduce.js • Array<number>(1000)
  native          ⇝   18.41ms   @   1,629,498,617.94 op/s
  @arr/reduce     ⇝    9.53ms   @   3,148,933,865.46 op/s
  arr-reduce      ⇝   18.52ms   @   1,619,974,676.56 op/s
  fastjs.reduce   ⇝   18.42ms   @   1,628,763,706.45 op/s
  lodash.reduce   ⇝   21.34ms   @   1,405,638,503.32 op/s
  ramda.reduce    ⇝   15.44ms   @   1,943,365,282.91 op/s

Benchmark: code/reduce.js • Array<number>(5000)
  native          ⇝    93.80ms   @   1,599,226,281.53 op/s
  @arr/reduce     ⇝    45.23ms   @   3,316,352,796.35 op/s
  arr-reduce      ⇝    89.94ms   @   1,667,769,395.79 op/s
  fastjs.reduce   ⇝    89.73ms   @   1,671,754,186.16 op/s
  lodash.reduce   ⇝   104.53ms   @   1,435,016,415.30 op/s
  ramda.reduce    ⇝    49.56ms   @   3,026,406,425.04 op/s

Benchmark: code/reduce.js • Array<number>(10000)
  native          ⇝   188.15ms   @   1,594,474,842.78 op/s
  @arr/reduce     ⇝    89.47ms   @   3,352,957,035.96 op/s
  arr-reduce      ⇝   179.11ms   @   1,674,963,495.99 op/s
  fastjs.reduce   ⇝   179.70ms   @   1,669,490,860.88 op/s
  lodash.reduce   ⇝   207.93ms   @   1,442,769,649.11 op/s
  ramda.reduce    ⇝    95.62ms   @   3,137,451,925.74 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/reduce.js • Array<object>(100)
  native          ⇝   2.30ms   @   1,306,233,914.27 op/s
  @arr/reduce     ⇝   1.53ms   @   1,958,020,050.13 op/s
  arr-reduce      ⇝   2.51ms   @   1,193,934,336.00 op/s
  fastjs.reduce   ⇝   2.42ms   @   1,240,879,022.15 op/s
  lodash.reduce   ⇝   2.68ms   @   1,120,725,692.30 op/s
  ramda.reduce    ⇝   5.73ms   @     523,984,609.52 op/s

Benchmark: code/reduce.js • Array<object>(500)
  native          ⇝    9.45ms   @   1,586,685,886.02 op/s
  @arr/reduce     ⇝    5.07ms   @   2,957,002,813.49 op/s
  arr-reduce      ⇝    9.89ms   @   1,516,598,717.99 op/s
  fastjs.reduce   ⇝    9.57ms   @   1,567,126,123.67 op/s
  lodash.reduce   ⇝   10.97ms   @   1,367,365,667.03 op/s
  ramda.reduce    ⇝    9.38ms   @   1,598,462,747.72 op/s

Benchmark: code/reduce.js • Array<object>(1000)
  native          ⇝   18.48ms   @   1,623,781,778.02 op/s
  @arr/reduce     ⇝    9.50ms   @   3,158,420,697.00 op/s
  arr-reduce      ⇝   18.54ms   @   1,618,487,704.51 op/s
  fastjs.reduce   ⇝   18.51ms   @   1,620,975,772.30 op/s
  lodash.reduce   ⇝   21.49ms   @   1,395,935,389.78 op/s
  ramda.reduce    ⇝   15.18ms   @   1,976,857,587.18 op/s

Benchmark: code/reduce.js • Array<object>(5000)
  native          ⇝    94.14ms   @   1,593,392,494.51 op/s
  @arr/reduce     ⇝    45.07ms   @   3,327,997,591.77 op/s
  arr-reduce      ⇝    89.77ms   @   1,670,935,163.37 op/s
  fastjs.reduce   ⇝    90.09ms   @   1,665,062,212.72 op/s
  lodash.reduce   ⇝   104.70ms   @   1,432,671,529.82 op/s
  ramda.reduce    ⇝    49.48ms   @   3,031,336,624.23 op/s

Benchmark: code/reduce.js • Array<object>(10000)
  native          ⇝   186.60ms   @   1,607,690,436.51 op/s
  @arr/reduce     ⇝    89.84ms   @   3,339,348,167.25 op/s
  arr-reduce      ⇝   179.54ms   @   1,670,949,709.94 op/s
  fastjs.reduce   ⇝   179.10ms   @   1,675,049,685.46 op/s
  lodash.reduce   ⇝   208.35ms   @   1,439,863,185.35 op/s
  ramda.reduce    ⇝    95.81ms   @   3,131,047,128.30 op/s
```
</details>


## reduceRight

<details>
<summary>:no_entry_sign: ↝ Strings</summary>

```
Benchmark: code/reduceRight.js • Array<string>(100)
  native               ⇝   17.51ms   @   171,333,241.61 op/s
  @arr/reduceRight     ⇝    5.22ms   @   574,896,015.68 op/s
  fastjs.reduceRight   ⇝    8.37ms   @   358,394,207.59 op/s
  lodash.reduceright   ⇝    8.71ms   @   344,293,179.87 op/s
  ramda.reduceRight    ⇝    9.73ms   @   308,342,800.31 op/s

Benchmark: code/reduceRight.js • Array<string>(500)
  native               ⇝    9.51ms   @   1,576,713,745.94 op/s
  @arr/reduceRight     ⇝   10.82ms   @   1,385,826,212.96 op/s
  fastjs.reduceRight   ⇝   13.95ms   @   1,075,083,779.49 op/s
  lodash.reduceright   ⇝   11.01ms   @   1,362,668,744.95 op/s
  ramda.reduceRight    ⇝   14.54ms   @   1,031,306,335.11 op/s

Benchmark: code/reduceRight.js • Array<string>(1000)
  native               ⇝   18.38ms   @   1,632,286,451.91 op/s
  @arr/reduceRight     ⇝   21.36ms   @   1,404,456,246.04 op/s
  fastjs.reduceRight   ⇝   27.25ms   @   1,101,093,727.41 op/s
  lodash.reduceright   ⇝   21.34ms   @   1,405,840,922.26 op/s
  ramda.reduceRight    ⇝   27.89ms   @   1,075,794,221.22 op/s

Benchmark: code/reduceRight.js • Array<string>(5000)
  native               ⇝    89.96ms   @   1,667,323,480.96 op/s
  @arr/reduceRight     ⇝   104.37ms   @   1,437,166,354.05 op/s
  fastjs.reduceRight   ⇝   134.26ms   @   1,117,274,352.31 op/s
  lodash.reduceright   ⇝   104.38ms   @   1,437,057,940.02 op/s
  ramda.reduceRight    ⇝   134.93ms   @   1,111,727,535.21 op/s

Benchmark: code/reduceRight.js • Array<string>(10000)
  native               ⇝   180.30ms   @   1,663,892,624.88 op/s
  @arr/reduceRight     ⇝   208.77ms   @   1,437,008,784.59 op/s
  fastjs.reduceRight   ⇝   269.70ms   @   1,112,346,507.86 op/s
  lodash.reduceright   ⇝   208.26ms   @   1,440,490,091.61 op/s
  ramda.reduceRight    ⇝   268.15ms   @   1,118,778,376.95 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Numbers</summary>

```
Benchmark: code/reduceRight.js • Array<number>(100)
  native               ⇝   2.39ms   @   1,256,408,731.54 op/s
  @arr/reduceRight     ⇝   2.58ms   @   1,160,901,308.30 op/s
  fastjs.reduceRight   ⇝   3.24ms   @     924,511,765.34 op/s
  lodash.reduceright   ⇝   2.68ms   @   1,118,079,229.33 op/s
  ramda.reduceRight    ⇝   3.85ms   @     778,746,047.54 op/s

Benchmark: code/reduceRight.js • Array<number>(500)
  native               ⇝    9.49ms   @   1,580,566,367.51 op/s
  @arr/reduceRight     ⇝   10.83ms   @   1,385,290,852.44 op/s
  fastjs.reduceRight   ⇝   13.89ms   @   1,079,721,837.74 op/s
  lodash.reduceright   ⇝   11.05ms   @   1,357,672,847.37 op/s
  ramda.reduceRight    ⇝   14.66ms   @   1,023,283,869.38 op/s

Benchmark: code/reduceRight.js • Array<number>(1000)
  native               ⇝   18.47ms   @   1,624,219,143.11 op/s
  @arr/reduceRight     ⇝   21.22ms   @   1,413,598,858.72 op/s
  fastjs.reduceRight   ⇝   27.33ms   @   1,097,540,229.42 op/s
  lodash.reduceright   ⇝   21.65ms   @   1,385,810,913.03 op/s
  ramda.reduceRight    ⇝   27.86ms   @   1,076,790,372.17 op/s

Benchmark: code/reduceRight.js • Array<number>(5000)
  native               ⇝    90.37ms   @   1,659,811,883.34 op/s
  @arr/reduceRight     ⇝   104.05ms   @   1,441,557,403.26 op/s
  fastjs.reduceRight   ⇝   134.53ms   @   1,114,962,372.84 op/s
  lodash.reduceright   ⇝   104.40ms   @   1,436,734,378.62 op/s
  ramda.reduceRight    ⇝   134.89ms   @   1,111,979,385.80 op/s

Benchmark: code/reduceRight.js • Array<number>(10000)
  native               ⇝   179.26ms   @   1,673,559,397.70 op/s
  @arr/reduceRight     ⇝   207.74ms   @   1,444,102,357.46 op/s
  fastjs.reduceRight   ⇝   268.74ms   @   1,116,330,971.37 op/s
  lodash.reduceright   ⇝   208.59ms   @   1,438,260,130.97 op/s
  ramda.reduceRight    ⇝   268.77ms   @   1,116,208,002.10 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Objects</summary>

```
Benchmark: code/reduceRight.js • Array<object>(100)
  native               ⇝   2.38ms   @   1,259,418,878.94 op/s
  @arr/reduceRight     ⇝   2.57ms   @   1,167,306,091.00 op/s
  fastjs.reduceRight   ⇝   3.24ms   @     926,410,861.98 op/s
  lodash.reduceright   ⇝   2.67ms   @   1,122,075,450.60 op/s
  ramda.reduceRight    ⇝   3.87ms   @     775,690,280.32 op/s

Benchmark: code/reduceRight.js • Array<object>(500)
  native               ⇝    9.50ms   @   1,579,735,739.70 op/s
  @arr/reduceRight     ⇝   10.81ms   @   1,387,568,771.38 op/s
  fastjs.reduceRight   ⇝   14.14ms   @   1,060,613,195.64 op/s
  lodash.reduceright   ⇝   11.10ms   @   1,351,330,777.04 op/s
  ramda.reduceRight    ⇝   14.53ms   @   1,032,539,448.17 op/s

Benchmark: code/reduceRight.js • Array<object>(1000)
  native               ⇝   18.40ms   @   1,630,108,140.83 op/s
  @arr/reduceRight     ⇝   21.31ms   @   1,407,985,540.18 op/s
  fastjs.reduceRight   ⇝   27.45ms   @   1,092,697,896.97 op/s
  lodash.reduceright   ⇝   21.34ms   @   1,405,639,688.82 op/s
  ramda.reduceRight    ⇝   28.06ms   @   1,069,187,325.68 op/s

Benchmark: code/reduceRight.js • Array<object>(5000)
  native               ⇝    90.06ms   @   1,665,519,382.89 op/s
  @arr/reduceRight     ⇝   104.35ms   @   1,437,482,037.46 op/s
  fastjs.reduceRight   ⇝   134.38ms   @   1,116,238,864.40 op/s
  lodash.reduceright   ⇝   104.62ms   @   1,433,707,885.06 op/s
  ramda.reduceRight    ⇝   134.92ms   @   1,111,789,591.00 op/s

Benchmark: code/reduceRight.js • Array<object>(10000)
  native               ⇝   178.79ms   @   1,677,944,842.42 op/s
  @arr/reduceRight     ⇝   210.16ms   @   1,427,488,916.14 op/s
  fastjs.reduceRight   ⇝   270.18ms   @   1,110,369,663.82 op/s
  lodash.reduceright   ⇝   208.46ms   @   1,439,114,463.37 op/s
  ramda.reduceRight    ⇝   268.76ms   @   1,116,220,864.30 op/s
```
</details>


## reverse

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/reverse.js • Array<string>(100)
  native            ⇝   152.71ms   @    19,644,601.01 op/s
  @arr/reverse      ⇝     8.74ms   @   343,079,105.24 op/s
  compute-reverse   ⇝    10.47ms   @   286,576,690.50 op/s
  lodash.reverse    ⇝   152.14ms   @    19,719,312.03 op/s
  ramda.reverse     ⇝   174.50ms   @    17,192,410.88 op/s

Benchmark: code/reverse.js • Array<string>(500)
  native            ⇝   749.63ms   @    20,009,835.26 op/s
  @arr/reverse      ⇝    23.01ms   @   651,814,451.54 op/s
  compute-reverse   ⇝    22.84ms   @   656,845,800.19 op/s
  lodash.reverse    ⇝   749.69ms   @    20,008,242.01 op/s
  ramda.reverse     ⇝   784.12ms   @    19,129,719.16 op/s

Benchmark: code/reverse.js • Array<string>(1000)
  native            ⇝   1,497.34ms   @    20,035,511.70 op/s
  @arr/reverse      ⇝      45.31ms   @   662,036,413.42 op/s
  compute-reverse   ⇝      45.18ms   @   663,959,482.54 op/s
  lodash.reverse    ⇝   1,496.84ms   @    20,042,189.33 op/s
  ramda.reverse     ⇝   1,570.62ms   @    19,100,781.42 op/s

Benchmark: code/reverse.js • Array<string>(5000)
  native            ⇝   7,502.80ms   @    19,992,536.71 op/s
  @arr/reverse      ⇝     223.38ms   @   671,504,206.85 op/s
  compute-reverse   ⇝     223.64ms   @   670,716,773.51 op/s
  lodash.reverse    ⇝   7,507.02ms   @    19,981,297.29 op/s
  ramda.reverse     ⇝   7,835.28ms   @    19,144,171.69 op/s

Benchmark: code/reverse.js • Array<string>(10000)
  native            ⇝   14,996.86ms   @    20,004,188.37 op/s
  @arr/reverse      ⇝      445.65ms   @   673,170,681.73 op/s
  compute-reverse   ⇝      446.40ms   @   672,035,953.17 op/s
  lodash.reverse    ⇝   15,005.33ms   @    19,992,894.40 op/s
  ramda.reverse     ⇝   16,541.54ms   @    18,136,157.68 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/reverse.js • Array<number>(100)
  native            ⇝   151.09ms   @    19,856,031.72 op/s
  @arr/reverse      ⇝     4.76ms   @   629,853,414.21 op/s
  compute-reverse   ⇝     4.74ms   @   632,252,462.62 op/s
  lodash.reverse    ⇝   150.95ms   @    19,873,824.14 op/s
  ramda.reverse     ⇝   176.77ms   @    16,971,331.10 op/s

Benchmark: code/reverse.js • Array<number>(500)
  native            ⇝   757.11ms   @    19,812,138.29 op/s
  @arr/reverse      ⇝    22.81ms   @   657,527,127.27 op/s
  compute-reverse   ⇝    22.90ms   @   655,050,782.16 op/s
  lodash.reverse    ⇝   748.29ms   @    20,045,629.22 op/s
  ramda.reverse     ⇝   839.01ms   @    17,878,276.77 op/s

Benchmark: code/reverse.js • Array<number>(1000)
  native            ⇝   1,497.53ms   @    20,033,041.34 op/s
  @arr/reverse      ⇝      45.39ms   @   660,946,250.31 op/s
  compute-reverse   ⇝      45.18ms   @   663,956,264.40 op/s
  lodash.reverse    ⇝   1,496.79ms   @    20,042,854.03 op/s
  ramda.reverse     ⇝   1,680.64ms   @    17,850,365.64 op/s

Benchmark: code/reverse.js • Array<number>(5000)
  native            ⇝   7,512.20ms   @    19,967,531.51 op/s
  @arr/reverse      ⇝     224.79ms   @   667,277,085.81 op/s
  compute-reverse   ⇝     224.48ms   @   668,222,103.59 op/s
  lodash.reverse    ⇝   7,504.58ms   @    19,987,794.64 op/s
  ramda.reverse     ⇝   8,276.38ms   @    18,123,876.18 op/s

Benchmark: code/reverse.js • Array<number>(10000)
  native            ⇝   14,993.72ms   @    20,008,372.24 op/s
  @arr/reverse      ⇝      446.38ms   @   672,073,308.25 op/s
  compute-reverse   ⇝      446.56ms   @   671,804,420.86 op/s
  lodash.reverse    ⇝   15,007.29ms   @    19,990,278.21 op/s
  ramda.reverse     ⇝   16,524.42ms   @    18,154,949.04 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/reverse.js • Array<object>(100)
  native            ⇝   150.63ms   @    19,916,901.11 op/s
  @arr/reverse      ⇝     4.75ms   @   631,390,726.47 op/s
  compute-reverse   ⇝     4.83ms   @   621,684,478.96 op/s
  lodash.reverse    ⇝   150.66ms   @    19,912,768.80 op/s
  ramda.reverse     ⇝   176.15ms   @    17,030,571.18 op/s

Benchmark: code/reverse.js • Array<object>(500)
  native            ⇝   751.21ms   @    19,967,742.30 op/s
  @arr/reverse      ⇝    22.81ms   @   657,562,523.57 op/s
  compute-reverse   ⇝    23.04ms   @   651,056,304.13 op/s
  lodash.reverse    ⇝   750.76ms   @    19,979,634.20 op/s
  ramda.reverse     ⇝   833.87ms   @    17,988,430.28 op/s

Benchmark: code/reverse.js • Array<object>(1000)
  native            ⇝   1,498.22ms   @    20,023,714.14 op/s
  @arr/reverse      ⇝      45.25ms   @   663,036,439.02 op/s
  compute-reverse   ⇝      45.23ms   @   663,271,028.53 op/s
  lodash.reverse    ⇝   1,500.10ms   @    19,998,725.25 op/s
  ramda.reverse     ⇝   1,648.30ms   @    18,200,585.17 op/s

Benchmark: code/reverse.js • Array<object>(5000)
  native            ⇝   7,495.95ms   @    20,010,808.93 op/s
  @arr/reverse      ⇝     225.68ms   @   664,649,237.63 op/s
  compute-reverse   ⇝     223.68ms   @   670,597,737.43 op/s
  lodash.reverse    ⇝   7,501.36ms   @    19,996,369.80 op/s
  ramda.reverse     ⇝   8,257.49ms   @    18,165,315.90 op/s

Benchmark: code/reverse.js • Array<object>(10000)
  native            ⇝   14,994.33ms   @    20,007,558.89 op/s
  @arr/reverse      ⇝      446.33ms   @   672,155,495.91 op/s
  compute-reverse   ⇝      446.45ms   @   671,975,122.30 op/s
  lodash.reverse    ⇝   15,020.09ms   @    19,973,250.57 op/s
  ramda.reverse     ⇝   16,546.20ms   @    18,131,046.34 op/s
```
</details>


## some

<details>
<summary>:no_entry_sign: ↝ Strings</summary>

```
Benchmark: code/some.js • Array<string>(100)
  native        ⇝   3.33ms   @     902,038,878.48 op/s
  @arr/some     ⇝   2.06ms   @   1,453,653,880.17 op/s
  fastjs.some   ⇝   4.10ms   @     731,380,336.55 op/s
  lodash.some   ⇝   4.56ms   @     658,508,333.75 op/s

Benchmark: code/some.js • Array<string>(500)
  native        ⇝   0.23ms   @   63,840,382,020.85 op/s
  @arr/some     ⇝   0.24ms   @   62,781,995,797.79 op/s
  fastjs.some   ⇝   0.24ms   @   62,062,459,659.40 op/s
  lodash.some   ⇝   0.38ms   @   39,416,840,976.70 op/s

Benchmark: code/some.js • Array<string>(1000)
  native        ⇝   0.24ms   @   124,595,583,501.88 op/s
  @arr/some     ⇝   0.26ms   @   115,624,759,115.09 op/s
  fastjs.some   ⇝   0.24ms   @   125,537,194,578.47 op/s
  lodash.some   ⇝   0.43ms   @    69,267,907,485.78 op/s

Benchmark: code/some.js • Array<string>(5000)
  native        ⇝   0.22ms   @   677,103,082,173.23 op/s
  @arr/some     ⇝   0.25ms   @   603,796,673,482.86 op/s
  fastjs.some   ⇝   0.24ms   @   614,980,935,591.00 op/s
  lodash.some   ⇝   0.46ms   @   326,495,075,365.95 op/s

Benchmark: code/some.js • Array<string>(10000)
  native        ⇝   0.24ms   @   1,231,117,731,788.69 op/s
  @arr/some     ⇝   0.27ms   @   1,101,802,916,839.59 op/s
  fastjs.some   ⇝   0.24ms   @   1,254,364,141,910.40 op/s
  lodash.some   ⇝   0.44ms   @     679,104,849,261.36 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Numbers</summary>

```
Benchmark: code/some.js • Array<number>(100)
  native        ⇝   7.09ms   @     422,957,752.02 op/s
  @arr/some     ⇝   2.60ms   @   1,153,195,485.47 op/s
  fastjs.some   ⇝   2.59ms   @   1,159,414,016.70 op/s
  lodash.some   ⇝   3.49ms   @     859,804,812.84 op/s

    ➤ Fastest is: fastjs.some!


Benchmark: code/some.js • Array<number>(500)
  native        ⇝   34.86ms   @     430,345,139.10 op/s
  @arr/some     ⇝   11.99ms   @   1,250,834,097.87 op/s
  fastjs.some   ⇝   11.95ms   @   1,254,949,520.91 op/s
  lodash.some   ⇝   15.90ms   @     943,491,821.72 op/s

    ➤ Fastest is: fastjs.some!


Benchmark: code/some.js • Array<number>(1000)
  native        ⇝   69.07ms   @     434,336,978.96 op/s
  @arr/some     ⇝   23.61ms   @   1,270,602,179.03 op/s
  fastjs.some   ⇝   23.30ms   @   1,287,315,632.80 op/s
  lodash.some   ⇝   30.97ms   @     968,526,629.51 op/s

    ➤ Fastest is: fastjs.some!


Benchmark: code/some.js • Array<number>(5000)
  native        ⇝   341.27ms   @     439,532,828.53 op/s
  @arr/some     ⇝   114.48ms   @   1,310,223,128.64 op/s
  fastjs.some   ⇝   114.49ms   @   1,310,116,840.15 op/s
  lodash.some   ⇝   152.52ms   @     983,494,484.15 op/s

    ➤ Fastest is: @arr/some!


Benchmark: code/some.js • Array<number>(10000)
  native        ⇝   682.58ms   @     439,506,888.62 op/s
  @arr/some     ⇝   227.88ms   @   1,316,480,158.07 op/s
  fastjs.some   ⇝   228.09ms   @   1,315,276,538.91 op/s
  lodash.some   ⇝   303.87ms   @     987,280,162.12 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/some.js • Array<object>(100)
  native        ⇝   7.07ms   @     424,556,038.21 op/s
  @arr/some     ⇝   2.61ms   @   1,148,912,458.62 op/s
  fastjs.some   ⇝   2.58ms   @   1,160,793,502.96 op/s
  lodash.some   ⇝   3.50ms   @     857,313,340.02 op/

Benchmark: code/some.js • Array<object>(500)
  native        ⇝   34.82ms   @     430,805,450.24 op/s
  @arr/some     ⇝   12.00ms   @   1,249,799,719.59 op/s
  fastjs.some   ⇝   11.95ms   @   1,254,710,811.74 op/s
  lodash.some   ⇝   15.89ms   @     944,239,033.99 op/s

Benchmark: code/some.js • Array<object>(1000)
  native        ⇝   68.76ms   @     436,286,215.39 op/s
  @arr/some     ⇝   23.28ms   @   1,288,452,689.43 op/s
  fastjs.some   ⇝   23.25ms   @   1,290,109,227.10 op/s
  lodash.some   ⇝   30.98ms   @     968,235,954.45 op/s

Benchmark: code/some.js • Array<object>(5000)
  native        ⇝   342.26ms   @     438,261,062.61 op/s
  @arr/some     ⇝   114.98ms   @   1,304,559,720.62 op/s
  fastjs.some   ⇝   115.82ms   @   1,295,153,441.71 op/s
  lodash.some   ⇝   153.15ms   @     979,446,120.74 op/s

Benchmark: code/some.js • Array<object>(10000)
  native        ⇝   683.94ms   @     438,633,222.27 op/s
  @arr/some     ⇝   228.20ms   @   1,314,628,241.80 op/s
  fastjs.some   ⇝   227.69ms   @   1,317,587,182.70 op/s
  lodash.some   ⇝   303.38ms   @     988,867,070.82 op/s
```
</details>


## unique

<details>
<summary>:mag: ↝ Strings</summary>

```
Benchmark: code/unique.js • Array<string>(5)
  native         ⇝   12.06ms   @   12,436,365.19 op/s
  @arr/unique    ⇝    5.62ms   @   26,667,832.94 op/s
  arr-uniq       ⇝   19.25ms   @    7,793,986.04 op/s
  array-unique   ⇝    5.48ms   @   27,377,928.21 op/s
  lodash.uniq    ⇝    9.60ms   @   15,632,181.03 op/s
  ramda.uniq     ⇝   42.04ms   @    3,568,003.71 op/s

Benchmark: code/unique.js • Array<string>(10)
  native         ⇝   19.84ms   @   15,124,641.41 op/s
  @arr/unique    ⇝    7.96ms   @   37,710,869.76 op/s
  arr-uniq       ⇝   39.94ms   @    7,511,653.02 op/s
  array-unique   ⇝    9.89ms   @   30,331,891.56 op/s
  lodash.uniq    ⇝   14.73ms   @   20,364,935.57 op/s
  ramda.uniq     ⇝   73.63ms   @    4,074,347.44 op/s

Benchmark: code/unique.js • Array<string>(100)
  native         ⇝     125.06ms   @   23,988,341.86 op/s
  @arr/unique    ⇝     344.40ms   @    8,710,765.33 op/s
  arr-uniq       ⇝   2,455.87ms   @    1,221,563.51 op/s
  array-unique   ⇝     862.88ms   @    3,476,732.14 op/s
  lodash.uniq    ⇝     664.08ms   @    4,517,510.95 op/s
  ramda.uniq     ⇝     559.73ms   @    5,359,705.50 op/s

Benchmark: code/unique.js • Array<string>(500)
  native         ⇝      607.48ms   @   24,692,171.71 op/s
  @arr/unique    ⇝    8,649.72ms   @    1,734,160.16 op/s
  arr-uniq       ⇝   63,814.20ms   @      235,057.39 op/s
  array-unique   ⇝   22,143.12ms   @      677,411.26 op/s
  lodash.uniq    ⇝      775.97ms   @   19,330,636.95 op/s
  ramda.uniq     ⇝    2,672.13ms   @    5,613,500.94 op/s
```
</details>


<br>

> :white_check_mark: &mdash; Denotes function **is** faster than native <br>
> :no_entry_sign: &mdash; Denotes function **is not** faster than native <br>
> :mag: &mdash; Denotes function **is sometimes** faster than native <br>
> :wavy_dash: &mdash; Denotes function has no native counterpart <br>
