# Benchmark Results for Node `v4.8.3` (LTS)

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
<summary>↝ Strings</summary>

```
Array<string>(100)
  native         ⇝   232.40ms   @    12,908,986.21 op/s
  @arr/every     ⇝     5.88ms   @   509,951,360.84 op/s
  array-every    ⇝    12.95ms   @   231,704,693.91 op/s
  lodash.every   ⇝     7.64ms   @   392,572,836.00 op/s
  fastjs.every   ⇝     6.23ms   @   481,778,417.58 op/s

Array<string>(500)
  native         ⇝   1,091.85ms   @    13,738,202.33 op/s
  @arr/every     ⇝      22.90ms   @   655,113,979.13 op/s
  array-every    ⇝      33.59ms   @   446,504,596.81 op/s
  lodash.every   ⇝      27.56ms   @   544,295,552.19 op/s
  fastjs.every   ⇝      23.17ms   @   647,394,564.89 op/s

Array<string>(1000)
  native         ⇝   2,190.13ms   @    13,697,796.30 op/s
  @arr/every     ⇝      45.05ms   @   665,931,936.56 op/s
  array-every    ⇝      65.66ms   @   456,908,724.93 op/s
  lodash.every   ⇝      54.38ms   @   551,648,991.92 op/s
  fastjs.every   ⇝      45.23ms   @   663,277,642.18 op/s

Array<string>(5000)
  native         ⇝   10,943.22ms   @    13,707,123.49 op/s
  @arr/every     ⇝      222.96ms   @   672,764,098.12 op/s
  array-every    ⇝      314.63ms   @   476,752,446.24 op/s
  lodash.every   ⇝      268.27ms   @   559,132,404.24 op/s
  fastjs.every   ⇝      223.47ms   @   671,222,768.71 op/s

Array<string>(10000)
  native         ⇝   21,613.02ms   @    13,880,522.78 op/s
  @arr/every     ⇝      445.02ms   @   674,126,725.29 op/s
  array-every    ⇝      630.96ms   @   475,467,288.18 op/s
  lodash.every   ⇝      546.33ms   @   549,120,532.03 op/s
  fastjs.every   ⇝      452.56ms   @   662,893,416.94 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(100)
  native         ⇝   226.53ms   @    13,243,540.48 op/s
  @arr/every     ⇝     5.86ms   @   511,752,219.13 op/s
  array-every    ⇝     9.00ms   @   333,345,259.69 op/s
  lodash.every   ⇝    10.32ms   @   290,697,167.39 op/s
  fastjs.every   ⇝     6.60ms   @   454,813,656.78 op/s

Array<number>(500)
  native         ⇝   1,113.22ms   @    13,474,369.35 op/s
  @arr/every     ⇝      22.84ms   @   656,830,182.21 op/s
  array-every    ⇝      32.60ms   @   460,188,791.53 op/s
  lodash.every   ⇝      27.58ms   @   543,831,298.02 op/s
  fastjs.every   ⇝      23.23ms   @   645,757,720.49 op/s

Array<number>(1000)
  native         ⇝   2,223.91ms   @    13,489,765.18 op/s
  @arr/every     ⇝      45.32ms   @   662,006,830.01 op/s
  array-every    ⇝      64.10ms   @   468,008,929.80 op/s
  lodash.every   ⇝      54.49ms   @   550,603,519.27 op/s
  fastjs.every   ⇝      45.08ms   @   665,465,102.88 op/s

Array<number>(5000)
  native         ⇝   11,036.95ms   @    13,590,716.37 op/s
  @arr/every     ⇝      222.94ms   @   672,840,257.12 op/s
  array-every    ⇝      313.05ms   @   479,161,987.85 op/s
  lodash.every   ⇝      271.73ms   @   552,026,818.17 op/s
  fastjs.every   ⇝      226.97ms   @   660,877,206.11 op/s

Array<number>(10000)
  native         ⇝   22,076.29ms   @    13,589,241.61 op/s
  @arr/every     ⇝      445.17ms   @   673,897,572.65 op/s
  array-every    ⇝      624.80ms   @   480,151,223.05 op/s
  lodash.every   ⇝      534.56ms   @   561,205,912.83 op/s
  fastjs.every   ⇝      457.24ms   @   656,105,221.36 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(100)
  native         ⇝   224.34ms   @    13,372,574.11 op/s
  @arr/every     ⇝     5.86ms   @   512,236,125.83 op/s
  array-every    ⇝     8.37ms   @   358,261,785.47 op/s
  lodash.every   ⇝     7.55ms   @   397,346,309.43 op/s
  fastjs.every   ⇝     6.09ms   @   492,602,020.75 op/s

Array<object>(500)
  native         ⇝   1,082.95ms   @    13,851,048.36 op/s
  @arr/every     ⇝      22.81ms   @   657,472,195.61 op/s
  array-every    ⇝      32.23ms   @   465,450,118.66 op/s
  lodash.every   ⇝      27.43ms   @   546,861,630.37 op/s
  fastjs.every   ⇝      26.90ms   @   557,593,808.75 op/s

Array<object>(1000)
  native         ⇝   2,202.00ms   @    13,623,956.01 op/s
  @arr/every     ⇝      45.17ms   @   664,224,872.71 op/s
  array-every    ⇝      63.38ms   @   473,337,953.85 op/s
  lodash.every   ⇝      58.12ms   @   516,184,624.79 op/s
  fastjs.every   ⇝      49.20ms   @   609,712,649.34 op/s

Array<object>(5000)
  native         ⇝   10,907.63ms   @    13,751,837.27 op/s
  @arr/every     ⇝      222.96ms   @   672,759,249.18 op/s
  array-every    ⇝      316.70ms   @   473,641,073.79 op/s
  lodash.every   ⇝      267.65ms   @   560,424,295.59 op/s
  fastjs.every   ⇝      222.79ms   @   673,266,932.82 op/s

Array<object>(10000)
  native         ⇝   21,732.72ms   @    13,804,069.52 op/s
  @arr/every     ⇝      444.74ms   @   674,553,583.14 op/s
  array-every    ⇝      624.09ms   @   480,698,828.42 op/s
  lodash.every   ⇝      534.49ms   @   561,284,102.18 op/s
  fastjs.every   ⇝      445.02ms   @   674,133,373.91 op/s
```
</details>


## filter

<details>
<summary>↝ Strings</summary>

```
Array<string>(100)
  native          ⇝   271.71ms   @    11,041,250.99 op/s
  @arr/filter     ⇝     6.90ms   @   434,546,819.81 op/s
  arr-filter      ⇝    24.79ms   @   121,022,602.26 op/s
  array-filter    ⇝   254.99ms   @    11,765,230.43 op/s
  lodash.filter   ⇝    23.74ms   @   126,365,510.98 op/s
  fastjs.filter   ⇝    21.81ms   @   137,531,516.49 op/s
  ramda.filter    ⇝    42.72ms   @    70,218,012.89 op/s

Array<string>(500)
  native          ⇝   1,248.81ms   @    12,011,431.26 op/s
  @arr/filter     ⇝      27.27ms   @   550,093,614.93 op/s
  arr-filter      ⇝      89.84ms   @   166,971,623.64 op/s
  array-filter    ⇝   1,236.15ms   @    12,134,412.38 op/s
  lodash.filter   ⇝      93.80ms   @   159,910,537.09 op/s
  fastjs.filter   ⇝      84.36ms   @   177,800,544.68 op/s
  ramda.filter    ⇝     105.12ms   @   142,697,304.21 op/s

Array<string>(1000)
  native          ⇝   2,456.56ms   @    12,212,177.01 op/s
  @arr/filter     ⇝      57.96ms   @   517,633,254.46 op/s
  arr-filter      ⇝     175.23ms   @   171,203,360.74 op/s
  array-filter    ⇝   2,448.06ms   @    12,254,616.88 op/s
  lodash.filter   ⇝     194.98ms   @   153,863,979.19 op/s
  fastjs.filter   ⇝     181.52ms   @   165,273,900.75 op/s
  ramda.filter    ⇝     207.05ms   @   144,895,228.10 op/s

Array<string>(5000)
  native          ⇝   12,270.43ms   @    12,224,507.80 op/s
  @arr/filter     ⇝      267.56ms   @   560,621,765.72 op/s
  arr-filter      ⇝      885.24ms   @   169,445,191.26 op/s
  array-filter    ⇝   12,245.00ms   @    12,249,900.39 op/s
  lodash.filter   ⇝    1,000.57ms   @   149,915,240.92 op/s
  fastjs.filter   ⇝      913.72ms   @   164,164,189.53 op/s
  ramda.filter    ⇝      914.24ms   @   164,070,517.61 op/s

Array<string>(10000)
  native          ⇝   24,287.17ms   @    12,352,202.27 op/s
  @arr/filter     ⇝      541.63ms   @   553,880,344.45 op/s
  arr-filter      ⇝    1,771.77ms   @   169,322,352.21 op/s
  array-filter    ⇝   24,305.78ms   @    12,342,744.51 op/s
  lodash.filter   ⇝    2,164.95ms   @   138,571,189.80 op/s
  fastjs.filter   ⇝    1,981.03ms   @   151,436,060.51 op/s
  ramda.filter    ⇝    1,965.62ms   @   152,623,844.96 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(100)
  native          ⇝   255.00ms   @    11,764,857.03 op/s
  @arr/filter     ⇝     6.97ms   @   430,386,182.65 op/s
  arr-filter      ⇝    26.93ms   @   111,388,762.04 op/s
  array-filter    ⇝   241.62ms   @    12,415,947.09 op/s
  lodash.filter   ⇝    22.58ms   @   132,840,977.44 op/s
  fastjs.filter   ⇝    20.61ms   @   145,587,914.57 op/s
  ramda.filter    ⇝    41.22ms   @    72,773,535.53 op/s

Array<number>(500)
  native          ⇝   1,183.11ms   @    12,678,484.94 op/s
  @arr/filter     ⇝      27.51ms   @   545,249,472.17 op/s
  arr-filter      ⇝      87.68ms   @   171,078,819.84 op/s
  array-filter    ⇝   1,181.46ms   @    12,696,152.57 op/s
  lodash.filter   ⇝      92.75ms   @   161,725,412.63 op/s
  fastjs.filter   ⇝      79.55ms   @   188,566,153.03 op/s
  ramda.filter    ⇝     109.53ms   @   136,950,129.03 op/s

Array<number>(1000)
  native          ⇝   2,373.64ms   @    12,638,828.72 op/s
  @arr/filter     ⇝      58.09ms   @   516,465,007.74 op/s
  arr-filter      ⇝     175.95ms   @   170,499,851.92 op/s
  array-filter    ⇝   2,364.22ms   @    12,689,171.04 op/s
  lodash.filter   ⇝     203.75ms   @   147,238,648.11 op/s
  fastjs.filter   ⇝     180.92ms   @   165,819,587.44 op/s
  ramda.filter    ⇝     203.98ms   @   147,076,208.80 op/s

Array<number>(5000)
  native          ⇝   11,935.52ms   @    12,567,526.35 op/s
  @arr/filter     ⇝      267.64ms   @   560,448,882.49 op/s
  arr-filter      ⇝      891.16ms   @   168,319,984.10 op/s
  array-filter    ⇝   11,855.15ms   @    12,652,732.20 op/s
  lodash.filter   ⇝    1,025.77ms   @   146,231,144.93 op/s
  fastjs.filter   ⇝      895.20ms   @   167,559,650.13 op/s
  ramda.filter    ⇝      938.12ms   @   159,894,349.66 op/s

Array<number>(10000)
  native          ⇝   23,372.65ms   @    12,835,517.36 op/s
  @arr/filter     ⇝      533.94ms   @   561,858,188.34 op/s
  arr-filter      ⇝    1,765.26ms   @   169,946,961.20 op/s
  array-filter    ⇝   23,334.54ms   @    12,856,477.93 op/s
  lodash.filter   ⇝    2,180.29ms   @   137,596,527.58 op/s
  fastjs.filter   ⇝    1,940.28ms   @   154,616,770.73 op/s
  ramda.filter    ⇝    1,971.54ms   @   152,165,483.12 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(100)
  native          ⇝   266.61ms   @    11,252,583.42 op/s
  @arr/filter     ⇝     6.90ms   @   434,614,935.51 op/s
  arr-filter      ⇝    27.37ms   @   109,622,630.67 op/s
  array-filter    ⇝   248.15ms   @    12,089,704.15 op/s
  lodash.filter   ⇝    23.66ms   @   126,787,202.98 op/s
  fastjs.filter   ⇝    21.57ms   @   139,061,447.41 op/s
  ramda.filter    ⇝    41.80ms   @    71,770,420.78 op/s

Array<object>(500)
  native          ⇝   1,210.37ms   @    12,392,894.78 op/s
  @arr/filter     ⇝      27.41ms   @   547,334,649.93 op/s
  arr-filter      ⇝      89.80ms   @   167,031,891.18 op/s
  array-filter    ⇝   1,211.05ms   @    12,385,967.54 op/s
  lodash.filter   ⇝     100.80ms   @   148,815,814.53 op/s
  fastjs.filter   ⇝      88.58ms   @   169,333,190.28 op/s
  ramda.filter    ⇝     109.48ms   @   137,015,373.65 op/s

Array<object>(1000)
  native          ⇝   2,403.35ms   @    12,482,563.59 op/s
  @arr/filter     ⇝      53.85ms   @   557,102,670.94 op/s
  arr-filter      ⇝     177.11ms   @   169,383,643.35 op/s
  array-filter    ⇝   2,406.14ms   @    12,468,114.51 op/s
  lodash.filter   ⇝     203.22ms   @   147,620,587.16 op/s
  fastjs.filter   ⇝     184.39ms   @   162,698,203.49 op/s
  ramda.filter    ⇝     201.94ms   @   148,559,389.88 op/s

Array<object>(5000)
  native          ⇝   12,024.92ms   @    12,474,099.14 op/s
  @arr/filter     ⇝      281.93ms   @   532,037,937.77 op/s
  arr-filter      ⇝      894.02ms   @   167,780,853.08 op/s
  array-filter    ⇝   12,060.41ms   @    12,437,385.37 op/s
  lodash.filter   ⇝    1,060.36ms   @   141,460,817.48 op/s
  fastjs.filter   ⇝      977.13ms   @   153,511,501.61 op/s
  ramda.filter    ⇝      967.83ms   @   154,986,543.72 op/s

Array<object>(10000)
  native          ⇝   23,846.09ms   @    12,580,680.85 op/s
  @arr/filter     ⇝      538.47ms   @   557,133,890.07 op/s
  arr-filter      ⇝    1,779.57ms   @   168,580,145.25 op/s
  array-filter    ⇝   23,842.39ms   @    12,582,631.15 op/s
  lodash.filter   ⇝    2,291.46ms   @   130,921,157.38 op/s
  fastjs.filter   ⇝    2,126.34ms   @   141,087,643.67 op/s
  ramda.filter    ⇝    2,102.43ms   @   142,691,962.23 op/s
```
</details>


## find

<details>
<summary>↝ Strings</summary>

```
Array<string>(100)
  native        ⇝    3.66ms   @     819,466,592.81 op/s
  @arr/find     ⇝    1.53ms   @   1,959,741,679.92 op/s
  lodash.find   ⇝   17.04ms   @     176,083,246.52 op/s
  ramda.find    ⇝   26.48ms   @     113,278,536.48 op/s

Array<string>(500)
  native        ⇝    2.14ms   @    6,994,493,934.37 op/s
  @arr/find     ⇝    0.66ms   @   22,831,641,001.37 op/s
  lodash.find   ⇝    6.82ms   @    2,198,004,768.50 op/s
  ramda.find    ⇝   20.66ms   @      726,083,885.92 op/s

Array<string>(1000)
  native        ⇝    1.42ms   @   21,160,542,923.10 op/s
  @arr/find     ⇝    0.44ms   @   68,708,846,263.96 op/s
  lodash.find   ⇝    4.41ms   @    6,796,079,115.42 op/s
  ramda.find    ⇝   22.21ms   @    1,350,489,410.61 op/s

Array<string>(5000)
  native        ⇝    1.54ms   @    97,139,060,393.30 op/s
  @arr/find     ⇝    0.45ms   @   335,475,906,120.42 op/s
  lodash.find   ⇝    4.53ms   @    33,100,336,387.69 op/s
  ramda.find    ⇝   19.05ms   @     7,873,201,977.18 op/s

Array<string>(10000)
  native        ⇝    1.51ms   @   198,375,175,066.09 op/s
  @arr/find     ⇝    0.58ms   @   516,652,573,532.58 op/s
  lodash.find   ⇝    5.02ms   @    59,704,641,140.28 op/s
  ramda.find    ⇝   23.05ms   @    13,017,092,614.14 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(100)
  native        ⇝   257.04ms   @   11,671,422.16 op/s
  @arr/find     ⇝   212.56ms   @   14,113,628.36 op/s
  lodash.find   ⇝   222.49ms   @   13,484,011.77 op/s
  ramda.find    ⇝   252.87ms   @   11,863,803.72 op/s

Array<number>(500)
  native        ⇝   1,280.51ms   @   11,714,081.00 op/s
  @arr/find     ⇝   1,068.47ms   @   14,038,815.35 op/s
  lodash.find   ⇝   1,085.53ms   @   13,818,168.76 op/s
  ramda.find    ⇝   1,121.03ms   @   13,380,506.56 op/s

Array<number>(1000)
  native        ⇝   2,545.34ms   @   11,786,266.29 op/s
  @arr/find     ⇝   2,129.99ms   @   14,084,553.97 op/s
  lodash.find   ⇝   2,144.78ms   @   13,987,435.06 op/s
  ramda.find    ⇝   2,204.47ms   @   13,608,694.54 op/s

Array<number>(5000)
  native        ⇝   12,656.35ms   @   11,851,758.10 op/s
  @arr/find     ⇝   10,736.60ms   @   13,970,908.44 op/s
  lodash.find   ⇝   10,656.33ms   @   14,076,140.74 op/s
  ramda.find    ⇝   10,857.14ms   @   13,815,791.65 op/s

Array<number>(10000)
  native        ⇝   25,321.88ms   @   11,847,462.19 op/s
  @arr/find     ⇝   21,287.44ms   @   14,092,815.58 op/s
  lodash.find   ⇝   21,363.18ms   @   14,042,850.97 op/s
  ramda.find    ⇝   21,559.55ms   @   13,914,947.39 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(100)
  native        ⇝   84.23ms   @   35,617,156.03 op/s
  @arr/find     ⇝   40.55ms   @   73,984,498.03 op/s
  lodash.find   ⇝   56.30ms   @   53,289,399.18 op/s
  ramda.find    ⇝   62.92ms   @   47,676,478.10 op/s

Array<object>(500)
  native        ⇝   689.81ms   @   21,745,113.93 op/s
  @arr/find     ⇝   483.07ms   @   31,051,119.91 op/s
  lodash.find   ⇝   491.18ms   @   30,538,839.31 op/s
  ramda.find    ⇝   529.49ms   @   28,328,898.77 op/s

Array<object>(1000)
  native        ⇝   2,523.77ms   @   11,886,978.32 op/s
  @arr/find     ⇝   2,053.36ms   @   14,610,172.07 op/s
  lodash.find   ⇝   2,055.42ms   @   14,595,585.88 op/s
  ramda.find    ⇝   2,124.67ms   @   14,119,841.31 op/s

Array<object>(5000)
  native        ⇝   50,946.04ms   @   2,944,291.36 op/s
  @arr/find     ⇝   49,063.93ms   @   3,057,235.70 op/s
  lodash.find   ⇝   48,846.87ms   @   3,070,820.92 op/s
  ramda.find    ⇝   48,662.06ms   @   3,082,483.76 op/s

Array<object>(10000)
  native        ⇝   132,408.37ms   @   2,265,717.80 op/s
  @arr/find     ⇝   127,396.25ms   @   2,354,857.39 op/s
  lodash.find   ⇝   127,755.33ms   @   2,348,238.62 op/s
  ramda.find    ⇝   129,139.78ms   @   2,323,064.24 op/s
```
</details>


## findIndex

<details>
<summary>↝ Strings</summary>

```
Array<string>(100)
  native             ⇝    2.71ms   @   1,108,225,210.57 op/s
  @arr/findIndex     ⇝    1.04ms   @   2,877,140,352.66 op/s
  lodash.findindex   ⇝    1.70ms   @   1,763,956,719.56 op/s
  ramda.findIndex    ⇝   37.66ms   @      79,656,239.78 op/s

Array<string>(500)
  native             ⇝    1.49ms   @   10,100,221,127.51 op/s
  @arr/findIndex     ⇝    0.48ms   @   31,526,911,371.55 op/s
  lodash.findindex   ⇝    0.63ms   @   23,633,622,136.20 op/s
  ramda.findIndex    ⇝   21.77ms   @      689,018,361.05 op/s

Array<string>(1000)
  native             ⇝    1.42ms   @   21,075,452,226.52 op/s
  @arr/findIndex     ⇝    0.46ms   @   65,207,610,162.82 op/s
  lodash.findindex   ⇝    0.61ms   @   48,796,832,760.24 op/s
  ramda.findIndex    ⇝   23.25ms   @    1,290,082,375.63 op/s

Array<string>(5000)
  native             ⇝    1.77ms   @    84,670,372,594.80 op/s
  @arr/findIndex     ⇝    0.52ms   @   286,147,049,060.87 op/s
  lodash.findindex   ⇝    0.70ms   @   214,331,336,241.57 op/s
  ramda.findIndex    ⇝   22.63ms   @     6,627,879,725.37 op/s

Array<string>(10000)
  native             ⇝    1.51ms   @   198,731,036,090.88 op/s
  @arr/findIndex     ⇝    0.46ms   @   651,893,315,485.94 op/s
  lodash.findindex   ⇝    0.62ms   @   487,540,100,173.24 op/s
  ramda.findIndex    ⇝   22.98ms   @    13,056,472,857.40 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(100)
  native             ⇝   267.45ms   @   11,217,156.45 op/s
  @arr/findIndex     ⇝   215.91ms   @   13,894,681.17 op/s
  lodash.findindex   ⇝   215.97ms   @   13,890,922.17 op/s
  ramda.findIndex    ⇝   255.94ms   @   11,721,526.49 op/s

Array<number>(500)
  native             ⇝   1,280.38ms   @   11,715,283.15 op/s
  @arr/findIndex     ⇝   1,065.89ms   @   14,072,780.83 op/s
  lodash.findindex   ⇝   1,079.19ms   @   13,899,327.72 op/s
  ramda.findIndex    ⇝   1,141.31ms   @   13,142,793.08 op/s

Array<number>(1000)
  native             ⇝   2,557.26ms   @   11,731,316.43 op/s
  @arr/findIndex     ⇝   2,124.27ms   @   14,122,496.96 op/s
  lodash.findindex   ⇝   2,181.58ms   @   13,751,498.80 op/s
  ramda.findIndex    ⇝   2,232.45ms   @   13,438,130.56 op/s

Array<number>(5000)
  native             ⇝   12,700.48ms   @   11,810,573.94 op/s
  @arr/findIndex     ⇝   10,599.24ms   @   14,151,960.07 op/s
  lodash.findindex   ⇝   10,800.77ms   @   13,887,899.43 op/s
  ramda.findIndex    ⇝   10,952.33ms   @   13,695,718.03 op/s

Array<number>(10000)
  native             ⇝   25,306.10ms   @   11,854,848.17 op/s
  @arr/findIndex     ⇝   21,114.87ms   @   14,207,993.44 op/s
  lodash.findindex   ⇝   21,567.12ms   @   13,910,061.13 op/s
  ramda.findIndex    ⇝   21,723.24ms   @   13,810,095.40 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(100)
  native             ⇝   79.04ms   @   37,955,056.94 op/s
  @arr/findIndex     ⇝   42.59ms   @   70,440,638.12 op/s
  lodash.findindex   ⇝   42.67ms   @   70,299,888.31 op/s
  ramda.findIndex    ⇝   84.93ms   @   35,321,617.40 op/s

Benchmark: code/findIndex.js • Array<object>(500)
  native             ⇝   722.08ms   @   20,773,309.17 op/s
  @arr/findIndex     ⇝   493.79ms   @   30,377,554.42 op/s
  lodash.findindex   ⇝   496.22ms   @   30,228,243.55 op/s
  ramda.findIndex    ⇝   563.86ms   @   26,602,538.23 op/s

Benchmark: code/findIndex.js • Array<object>(1000)
  native             ⇝   2,748.33ms   @   10,915,737.95 op/s
  @arr/findIndex     ⇝   2,256.01ms   @   13,297,828.10 op/s
  lodash.findindex   ⇝   2,257.99ms   @   13,286,142.31 op/s
  ramda.findIndex    ⇝   2,340.02ms   @   12,820,383.10 op/s

Benchmark: code/findIndex.js • Array<object>(5000)
  native             ⇝   49,364.90ms   @   3,038,596.42 op/s
  @arr/findIndex     ⇝   46,797.22ms   @   3,205,318.49 op/s
  lodash.findindex   ⇝   47,327.92ms   @   3,169,376.56 op/s
  ramda.findIndex    ⇝   48,464.10ms   @   3,095,074.37 op/s

Benchmark: code/findIndex.js • Array<object>(10000)
  native             ⇝   130,386.17ms   @   2,300,857.58 op/s
  @arr/findIndex     ⇝   124,966.08ms   @   2,400,651.38 op/s
  lodash.findindex   ⇝   124,818.93ms   @   2,403,481.63 op/s
  ramda.findIndex    ⇝   125,415.48ms   @   2,392,049.18 op/s
```
</details>


## flatten

<details>
<summary>↝ Arrays</summary>

```
Array<array>(5)
  @arr/flatten         ⇝     105.98ms   @   1,415,377.75 op/s
  arr-flatten          ⇝     117.80ms   @   1,273,379.82 op/s
  array-flatten        ⇝     102.97ms   @   1,456,724.97 op/s
  flatten              ⇝   7,514.93ms   @      19,960.26 op/s
  flatten-array        ⇝     113.74ms   @   1,318,743.03 op/s
  lodash.flattendeep   ⇝     175.90ms   @     852,765.24 op/s
  ramda.flatten        ⇝     382.10ms   @     392,564.77 op/s

Array<array>(10)
  @arr/flatten         ⇝      237.74ms   @   1,261,864.27 op/s
  arr-flatten          ⇝      244.92ms   @   1,224,909.39 op/s
  array-flatten        ⇝      232.69ms   @   1,289,246.73 op/s
  flatten              ⇝   16,901.97ms   @      17,749.41 op/s
  flatten-array        ⇝      261.02ms   @   1,149,336.69 op/s
  lodash.flattendeep   ⇝      387.36ms   @     774,469.44 op/s
  ramda.flatten        ⇝      875.80ms   @     342,545.55 op/s

Array<array>(100)
  @arr/flatten         ⇝     2,013.70ms   @   1,489,794.46 op/s
  arr-flatten          ⇝     2,057.98ms   @   1,457,736.68 op/s
  array-flatten        ⇝     1,973.35ms   @   1,520,255.97 op/s
  flatten              ⇝   162,078.32ms   @      18,509.57 op/s
  flatten-array        ⇝     2,176.84ms   @   1,378,142.98 op/s
  lodash.flattendeep   ⇝     3,245.19ms   @     924,444.95 op/s
  ramda.flatten        ⇝     7,275.91ms   @     412,319.39 op/s

Array<array>(500)
  @arr/flatten         ⇝      10,790.40ms   @   1,390,124.24 op/s
  arr-flatten          ⇝      10,796.55ms   @   1,389,332.90 op/s
  array-flatten        ⇝      10,562.41ms   @   1,420,129.94 op/s
  flatten              ⇝   1,094,259.73ms   @      13,707.90 op/s
  flatten-array        ⇝      14,900.42ms   @   1,006,683.11 op/s
  lodash.flattendeep   ⇝      21,184.59ms   @     708,061.95 op/s
  ramda.flatten        ⇝      51,695.54ms   @     290,160.42 op/s
```
</details>


## forEach

<details>
<summary>↝ Strings</summary>

```
Array<string>(100)
  native              ⇝   229.24ms   @    13,086,553.39 op/s
  @arr/forEach        ⇝     5.95ms   @   503,835,870.43 op/s
  @arr/forEach.spec   ⇝   467.62ms   @     6,415,486.21 op/s
  fastjs.forEach      ⇝     6.21ms   @   483,072,495.66 op/s
  lodash.foreach      ⇝     8.12ms   @   369,547,556.77 op/s
  ramda.forEach       ⇝    13.09ms   @   229,228,813.14 op/s

Array<string>(500)
  native              ⇝   1,125.23ms   @    13,330,552.11 op/s
  @arr/forEach        ⇝      22.84ms   @   656,777,322.41 op/s
  @arr/forEach.spec   ⇝   2,194.90ms   @     6,834,021.89 op/s
  fastjs.forEach      ⇝      27.23ms   @   550,865,587.95 op/s
  lodash.foreach      ⇝      32.02ms   @   468,523,132.31 op/s
  ramda.forEach       ⇝      27.01ms   @   555,309,820.68 op/s

Array<string>(1000)
  native              ⇝   2,215.21ms   @    13,542,737.51 op/s
  @arr/forEach        ⇝      45.26ms   @   662,853,198.56 op/s
  @arr/forEach.spec   ⇝   4,403.80ms   @     6,812,302.27 op/s
  fastjs.forEach      ⇝      45.44ms   @   660,173,667.93 op/s
  lodash.foreach      ⇝      63.10ms   @   475,423,572.69 op/s
  ramda.forEach       ⇝      49.34ms   @   608,064,331.58 op/s

Array<string>(5000)
  native              ⇝   11,047.49ms   @    13,577,750.12 op/s
  @arr/forEach        ⇝      222.94ms   @   672,817,854.56 op/s
  @arr/forEach.spec   ⇝   22,087.64ms   @     6,791,129.20 op/s
  fastjs.forEach      ⇝      222.96ms   @   672,759,125.47 op/s
  lodash.foreach      ⇝      311.98ms   @   480,804,255.51 op/s
  ramda.forEach       ⇝      228.22ms   @   657,249,087.62 op/s

Array<string>(10000)
  native              ⇝   22,015.32ms   @    13,626,874.62 op/s
  @arr/forEach        ⇝      444.71ms   @   674,592,715.83 op/s
  @arr/forEach.spec   ⇝   44,688.63ms   @     6,713,116.96 op/s
  fastjs.forEach      ⇝      445.36ms   @   673,615,348.79 op/s
  lodash.foreach      ⇝      629.54ms   @   476,538,421.85 op/s
  ramda.forEach       ⇝      457.11ms   @   656,299,524.57 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(100)
  native              ⇝   224.41ms   @    13,368,163.76 op/s
  @arr/forEach        ⇝     5.95ms   @   503,921,347.96 op/s
  @arr/forEach.spec   ⇝   470.45ms   @     6,376,929.42 op/s
  fastjs.forEach      ⇝     6.33ms   @   474,271,333.48 op/s
  lodash.foreach      ⇝     8.08ms   @   371,215,734.00 op/s
  ramda.forEach       ⇝    10.61ms   @   282,659,676.81 op/s

Array<number>(500)
  native              ⇝   1,133.29ms   @    13,235,791.83 op/s
  @arr/forEach        ⇝      26.74ms   @   560,979,856.78 op/s
  @arr/forEach.spec   ⇝   2,174.88ms   @     6,896,943.48 op/s
  fastjs.forEach      ⇝      27.18ms   @   551,820,405.86 op/s
  lodash.foreach      ⇝      32.41ms   @   462,847,265.43 op/s
  ramda.forEach       ⇝      27.14ms   @   552,698,676.57 op/s

Array<number>(1000)
  native              ⇝   2,161.43ms   @    13,879,695.65 op/s
  @arr/forEach        ⇝      45.62ms   @   657,574,299.16 op/s
  @arr/forEach.spec   ⇝   4,351.41ms   @     6,894,315.21 op/s
  fastjs.forEach      ⇝      46.50ms   @   645,191,593.51 op/s
  lodash.foreach      ⇝      63.25ms   @   474,282,130.52 op/s
  ramda.forEach       ⇝      49.68ms   @   603,863,956.37 op/s

Array<number>(5000)
  native              ⇝   10,888.64ms   @    13,775,824.34 op/s
  @arr/forEach        ⇝      222.59ms   @   673,897,893.57 op/s
  @arr/forEach.spec   ⇝   21,758.85ms   @     6,893,746.49 op/s
  fastjs.forEach      ⇝      224.63ms   @   667,762,934.56 op/s
  lodash.foreach      ⇝      316.97ms   @   473,229,945.15 op/s
  ramda.forEach       ⇝      228.72ms   @   655,813,607.28 op/s

Array<number>(10000)
  native              ⇝   21,767.06ms   @    13,782,293.15 op/s
  @arr/forEach        ⇝      445.23ms   @   673,808,624.82 op/s
  @arr/forEach.spec   ⇝   43,347.86ms   @     6,920,757.40 op/s
  fastjs.forEach      ⇝      445.68ms   @   673,129,615.97 op/s
  lodash.foreach      ⇝      623.80ms   @   480,920,385.43 op/s
  ramda.forEach       ⇝      451.00ms   @   665,187,709.01 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(100)
  native              ⇝   225.39ms   @    13,310,433.35 op/s
  @arr/forEach        ⇝     5.89ms   @   509,122,283.37 op/s
  @arr/forEach.spec   ⇝   457.98ms   @     6,550,474.75 op/s
  fastjs.forEach      ⇝     6.27ms   @   478,245,336.99 op/s
  lodash.foreach      ⇝     7.95ms   @   377,402,687.03 op/s
  ramda.forEach       ⇝    10.33ms   @   290,374,857.49 op/s

Array<object>(500)
  native              ⇝   1,106.22ms   @    13,559,650.27 op/s
  @arr/forEach        ⇝      22.85ms   @   656,438,709.72 op/s
  @arr/forEach.spec   ⇝   2,346.60ms   @     6,392,228.04 op/s
  fastjs.forEach      ⇝      23.29ms   @   644,155,299.83 op/s
  lodash.foreach      ⇝      31.91ms   @   470,020,332.77 op/s
  ramda.forEach       ⇝      27.11ms   @   553,231,818.00 op/s

Array<object>(1000)
  native              ⇝   2,235.00ms   @    13,422,831.69 op/s
  @arr/forEach        ⇝      45.42ms   @   660,501,457.99 op/s
  @arr/forEach.spec   ⇝   4,991.96ms   @     6,009,663.89 op/s
  fastjs.forEach      ⇝      45.32ms   @   661,934,526.16 op/s
  lodash.foreach      ⇝      62.83ms   @   477,443,720.49 op/s
  ramda.forEach       ⇝      49.07ms   @   611,391,096.53 op/s

Array<object>(5000)
  native              ⇝   11,074.73ms   @    13,544,350.62 op/s
  @arr/forEach        ⇝      223.51ms   @   671,105,705.80 op/s
  @arr/forEach.spec   ⇝   26,450.26ms   @     5,671,022.05 op/s
  fastjs.forEach      ⇝      223.90ms   @   669,939,834.89 op/s
  lodash.foreach      ⇝      311.93ms   @   480,884,751.00 op/s
  ramda.forEach       ⇝      228.22ms   @   657,256,448.58 op/s

Array<object>(10000)
  native              ⇝   22,027.20ms   @    13,619,525.70 op/s
  @arr/forEach        ⇝      445.64ms   @   673,192,692.37 op/s
  @arr/forEach.spec   ⇝   53,128.37ms   @     5,646,700.64 op/s
  fastjs.forEach      ⇝      453.61ms   @   661,356,911.27 op/s
  lodash.foreach      ⇝      623.75ms   @   480,959,897.45 op/s
  ramda.forEach       ⇝      457.47ms   @   655,782,561.88 op/s
```
</details>


## includes

> Node 4 does not support `Array.prototype.includes` and there are no other libs to compare against.


## map

<details>
<summary>↝ Strings</summary>

```
Array<string>(100)
  native          ⇝   256.36ms   @    11,702,310.68 op/s
  @arr/map        ⇝    11.72ms   @   256,051,740.20 op/s
  @arr/map.spec   ⇝   933.08ms   @     3,215,144.09 op/s
  arr-map         ⇝    13.50ms   @   222,251,789.94 op/s
  array-map       ⇝   233.56ms   @    12,844,892.04 op/s
  fastjs.map      ⇝    11.87ms   @   252,758,394.49 op/s
  lodash.map      ⇝    13.03ms   @   230,221,586.74 op/s
  ramda.map       ⇝    52.74ms   @    56,878,700.54 op/s

Array<string>(500)
  native          ⇝   1,149.78ms   @    13,046,017.17 op/s
  @arr/map        ⇝      48.40ms   @   309,936,329.37 op/s
  @arr/map.spec   ⇝   4,347.23ms   @     3,450,472.60 op/s
  arr-map         ⇝      50.73ms   @   295,695,110.90 op/s
  array-map       ⇝   1,150.14ms   @    13,041,856.49 op/s
  fastjs.map      ⇝      48.83ms   @   307,195,155.66 op/s
  lodash.map      ⇝      53.27ms   @   281,608,609.20 op/s
  ramda.map       ⇝     143.27ms   @   104,699,110.36 op/s

Array<string>(1000)
  native          ⇝   2,280.77ms   @    13,153,448.22 op/s
  @arr/map        ⇝      95.85ms   @   313,004,778.89 op/s
  @arr/map.spec   ⇝   8,549.07ms   @     3,509,154.08 op/s
  arr-map         ⇝      97.96ms   @   306,241,770.77 op/s
  array-map       ⇝   2,270.39ms   @    13,213,560.17 op/s
  fastjs.map      ⇝      96.78ms   @   309,970,796.51 op/s
  lodash.map      ⇝     105.79ms   @   283,589,098.72 op/s
  ramda.map       ⇝     260.43ms   @   115,191,983.82 op/s

Array<string>(5000)
  native          ⇝   11,373.30ms   @    13,188,782.08 op/s
  @arr/map        ⇝      482.19ms   @   311,079,352.44 op/s
  @arr/map.spec   ⇝   42,600.23ms   @     3,521,107.98 op/s
  arr-map         ⇝      486.36ms   @   308,414,723.16 op/s
  array-map       ⇝   11,341.18ms   @    13,226,141.82 op/s
  fastjs.map      ⇝      483.09ms   @   310,501,059.51 op/s
  lodash.map      ⇝      527.44ms   @   284,392,214.02 op/s
  ramda.map       ⇝    1,198.17ms   @   125,190,982.08 op/s

Array<string>(10000)
  native          ⇝   22,723.23ms   @    13,202,347.05 op/s
  @arr/map        ⇝      970.34ms   @   309,170,365.28 op/s
  @arr/map.spec   ⇝   85,522.80ms   @     3,507,836.69 op/s
  arr-map         ⇝      972.67ms   @   308,429,253.05 op/s
  array-map       ⇝   22,709.26ms   @    13,210,471.76 op/s
  fastjs.map      ⇝      977.02ms   @   307,057,625.56 op/s
  lodash.map      ⇝    1,055.03ms   @   284,353,214.70 op/s
  ramda.map       ⇝    2,395.66ms   @   125,226,488.96 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(100)
  native          ⇝   243.16ms   @    12,337,605.24 op/s
  @arr/map        ⇝     9.96ms   @   301,267,190.05 op/s
  @arr/map.spec   ⇝   922.85ms   @     3,250,804.87 op/s
  arr-map         ⇝    11.83ms   @   253,620,474.54 op/s
  array-map       ⇝   228.46ms   @    13,131,393.51 op/s
  fastjs.map      ⇝    10.08ms   @   297,674,093.70 op/s
  lodash.map      ⇝    11.11ms   @   270,093,541.50 op/s
  ramda.map       ⇝    42.60ms   @    70,420,951.57 op/s

Array<number>(500)
  native          ⇝   1,148.97ms   @    13,055,141.38 op/s
  @arr/map        ⇝      38.61ms   @   388,479,641.41 op/s
  @arr/map.spec   ⇝   4,269.87ms   @     3,512,985.51 op/s
  arr-map         ⇝      40.15ms   @   373,582,227.43 op/s
  array-map       ⇝   1,139.17ms   @    13,167,501.09 op/s
  fastjs.map      ⇝      38.60ms   @   388,639,286.03 op/s
  lodash.map      ⇝      42.99ms   @   348,952,331.11 op/s
  ramda.map       ⇝     128.84ms   @   116,423,669.77 op/s

Array<number>(1000)
  native          ⇝   2,271.02ms   @    13,209,929.67 op/s
  @arr/map        ⇝      83.54ms   @   359,128,031.39 op/s
  @arr/map.spec   ⇝   8,489.23ms   @     3,533,891.43 op/s
  arr-map         ⇝      76.95ms   @   389,865,158.90 op/s
  array-map       ⇝   2,262.96ms   @    13,256,963.96 op/s
  fastjs.map      ⇝      83.54ms   @   359,128,031.39 op/s
  lodash.map      ⇝      84.96ms   @   353,087,757.74 op/s
  ramda.map       ⇝     240.22ms   @   124,884,461.58 op/s

Array<number>(5000)
  native          ⇝   11,354.77ms   @    13,210,304.11 op/s
  @arr/map        ⇝      380.26ms   @   394,469,411.57 op/s
  @arr/map.spec   ⇝   42,092.56ms   @     3,563,575.21 op/s
  arr-map         ⇝      379.49ms   @   395,270,427.02 op/s
  array-map       ⇝   11,225.57ms   @    13,362,348.66 op/s
  fastjs.map      ⇝      395.73ms   @   379,048,827.10 op/s
  lodash.map      ⇝      437.39ms   @   342,946,257.15 op/s
  ramda.map       ⇝    1,122.97ms   @   133,574,439.47 op/s

Array<number>(10000)
  native          ⇝   22,584.84ms   @    13,283,247.80 op/s
  @arr/map        ⇝      785.96ms   @   381,699,217.76 op/s
  @arr/map.spec   ⇝   85,128.21ms   @     3,524,096.28 op/s
  arr-map         ⇝      791.53ms   @   379,013,906.03 op/s
  array-map       ⇝   22,530.77ms   @    13,315,126.21 op/s
  fastjs.map      ⇝      791.33ms   @   379,108,679.40 op/s
  lodash.map      ⇝      881.60ms   @   340,291,088.26 op/s
  ramda.map       ⇝    2,263.37ms   @   132,545,939.64 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(100)
  native          ⇝   239.86ms   @    12,507,438.07 op/s
  @arr/map        ⇝    12.08ms   @   248,441,361.71 op/s
  @arr/map.spec   ⇝   938.23ms   @     3,197,514.98 op/s
  arr-map         ⇝    13.94ms   @   215,282,750.21 op/s
  array-map       ⇝   235.29ms   @    12,750,176.80 op/s
  fastjs.map      ⇝    12.67ms   @   236,862,444.27 op/s
  lodash.map      ⇝    13.19ms   @   227,434,188.32 op/s
  ramda.map       ⇝    48.62ms   @    61,708,101.22 op/s

Array<object>(500)
  native          ⇝   1,146.29ms   @    13,085,667.67 op/s
  @arr/map        ⇝      49.84ms   @   300,965,352.39 op/s
  @arr/map.spec   ⇝   4,495.21ms   @     3,336,884.83 op/s
  arr-map         ⇝      51.71ms   @   290,058,158.01 op/s
  array-map       ⇝   1,147.51ms   @    13,071,759.48 op/s
  fastjs.map      ⇝      50.04ms   @   299,763,881.99 op/s
  lodash.map      ⇝      54.44ms   @   275,532,731.98 op/s
  ramda.map       ⇝     142.47ms   @   105,286,542.59 op/s

Array<object>(1000)
  native          ⇝   2,290.73ms   @    13,096,281.86 op/s
  @arr/map        ⇝      97.46ms   @   307,827,815.08 op/s
  @arr/map.spec   ⇝   9,200.78ms   @     3,260,592.48 op/s
  arr-map         ⇝      99.89ms   @   300,328,201.66 op/s
  array-map       ⇝   2,306.13ms   @    13,008,796.36 op/s
  fastjs.map      ⇝      97.89ms   @   306,460,678.37 op/s
  lodash.map      ⇝     106.89ms   @   280,662,428.82 op/s
  ramda.map       ⇝     258.63ms   @   115,995,748.80 op/s

Array<object>(5000)
  native          ⇝   11,444.84ms   @    13,106,338.85 op/s
  @arr/map        ⇝      504.11ms   @   297,552,123.78 op/s
  @arr/map.spec   ⇝   49,593.21ms   @     3,024,607.78 op/s
  arr-map         ⇝      516.43ms   @   290,457,305.80 op/s
  array-map       ⇝   11,443.13ms   @    13,108,304.25 op/s
  fastjs.map      ⇝      506.88ms   @   295,925,567.76 op/s
  lodash.map      ⇝      549.37ms   @   273,039,706.11 op/s
  ramda.map       ⇝    1,229.57ms   @   121,993,793.16 op/s

Array<object>(10000)
  native          ⇝   22,910.27ms   @    13,094,561.97 op/s
  @arr/map        ⇝    1,038.63ms   @   288,841,142.10 op/s
  @arr/map.spec   ⇝   98,904.50ms   @     3,033,229.16 op/s
  arr-map         ⇝    1,038.59ms   @   288,853,598.06 op/s
  array-map       ⇝   22,866.87ms   @    13,119,414.30 op/s
  fastjs.map      ⇝    1,054.53ms   @   284,486,419.30 op/s
  lodash.map      ⇝    1,123.79ms   @   266,954,254.23 op/s
  ramda.map       ⇝    2,462.78ms   @   121,813,672.81 op/s
```
</details>


## reduce

<details>
<summary>↝ Strings</summary>

```
Array<string>(100)
  native          ⇝   222.02ms   @    13,512,146.35 op/s
  @arr/reduce     ⇝     6.21ms   @   483,395,135.40 op/s
  arr-reduce      ⇝     7.02ms   @   427,622,412.26 op/s
  fastjs.reduce   ⇝     6.24ms   @   480,738,414.20 op/s
  lodash.reduce   ⇝    11.02ms   @   272,278,681.22 op/s
  ramda.reduce    ⇝   278.77ms   @    10,761,748.91 op/s

Array<string>(500)
  native          ⇝   1,096.56ms   @    13,679,176.85 op/s
  @arr/reduce     ⇝      23.22ms   @   645,962,172.28 op/s
  arr-reduce      ⇝      27.31ms   @   549,272,750.06 op/s
  fastjs.reduce   ⇝      23.26ms   @   644,919,937.70 op/s
  lodash.reduce   ⇝      28.97ms   @   517,861,563.18 op/s
  ramda.reduce    ⇝   1,373.07ms   @    10,924,392.11 op/s

Array<string>(1000)
  native          ⇝   2,181.98ms   @    13,748,986.43 op/s
  @arr/reduce     ⇝      45.39ms   @   660,956,298.01 op/s
  arr-reduce      ⇝      54.08ms   @   554,772,740.40 op/s
  fastjs.reduce   ⇝      45.57ms   @   658,354,675.55 op/s
  lodash.reduce   ⇝      54.66ms   @   548,811,535.81 op/s
  ramda.reduce    ⇝   2,681.30ms   @    11,188,595.98 op/s

Array<string>(5000)
  native          ⇝   10,834.96ms   @    13,844,078.69 op/s
  @arr/reduce     ⇝      226.62ms   @   661,895,447.75 op/s
  arr-reduce      ⇝      267.25ms   @   561,262,249.76 op/s
  fastjs.reduce   ⇝      222.84ms   @   673,121,262.35 op/s
  lodash.reduce   ⇝      268.06ms   @   559,567,453.16 op/s
  ramda.reduce    ⇝   13,365.70ms   @    11,222,753.55 op/s

Array<string>(10000)
  native          ⇝   21,395.20ms   @    14,021,836.68 op/s
  @arr/reduce     ⇝      446.06ms   @   672,553,343.75 op/s
  arr-reduce      ⇝      538.16ms   @   557,450,730.09 op/s
  fastjs.reduce   ⇝      453.45ms   @   661,597,630.59 op/s
  lodash.reduce   ⇝      540.82ms   @   554,711,528.07 op/s
  ramda.reduce    ⇝   26,732.28ms   @    11,222,388.31 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(100)
  native          ⇝   226.41ms   @    13,250,259.56 op/s
  @arr/reduce     ⇝     6.10ms   @   491,548,559.84 op/s
  arr-reduce      ⇝     6.89ms   @   435,173,129.28 op/s
  fastjs.reduce   ⇝     6.27ms   @   478,738,581.29 op/s
  lodash.reduce   ⇝     7.74ms   @   387,421,158.18 op/s
  ramda.reduce    ⇝   278.22ms   @    10,782,677.81 op/s

Array<number>(500)
  native          ⇝   1,109.04ms   @    13,525,162.55 op/s
  @arr/reduce     ⇝      22.89ms   @   655,250,370.51 op/s
  arr-reduce      ⇝      27.54ms   @   544,732,685.51 op/s
  fastjs.reduce   ⇝      22.92ms   @   654,386,793.11 op/s
  lodash.reduce   ⇝      29.77ms   @   503,899,273.36 op/s
  ramda.reduce    ⇝   1,348.21ms   @    11,125,843.71 op/s

Array<number>(1000)
  native          ⇝   2,117.69ms   @    14,166,393.06 op/s
  @arr/reduce     ⇝      45.13ms   @   664,678,406.76 op/s
  arr-reduce      ⇝      54.25ms   @   552,971,896.77 op/s
  fastjs.reduce   ⇝      45.25ms   @   662,927,915.27 op/s
  lodash.reduce   ⇝      54.43ms   @   551,156,904.98 op/s
  ramda.reduce    ⇝   2,671.58ms   @    11,229,320.69 op/s

Array<number>(5000)
  native          ⇝   10,685.66ms   @    14,037,499.72 op/s
  @arr/reduce     ⇝      222.68ms   @   673,607,542.74 op/s
  arr-reduce      ⇝      271.26ms   @   552,974,367.47 op/s
  fastjs.reduce   ⇝      223.38ms   @   671,488,001.25 op/s
  lodash.reduce   ⇝      275.16ms   @   545,135,316.20 op/s
  ramda.reduce    ⇝   13,253.36ms   @    11,317,882.00 op/s

Array<number>(10000)
  native          ⇝   21,128.64ms   @    14,198,734.73 op/s
  @arr/reduce     ⇝      450.36ms   @   666,140,282.62 op/s
  arr-reduce      ⇝      533.78ms   @   562,027,398.89 op/s
  fastjs.reduce   ⇝      456.95ms   @   656,533,189.23 op/s
  lodash.reduce   ⇝      548.76ms   @   546,691,687.87 op/s
  ramda.reduce    ⇝   26,362.92ms   @    11,379,620.98 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(100)
  native          ⇝   217.61ms   @    13,786,173.53 op/s
  @arr/reduce     ⇝     6.19ms   @   484,563,659.31 op/s
  arr-reduce      ⇝     6.95ms   @   431,801,426.61 op/s
  fastjs.reduce   ⇝     6.24ms   @   481,086,331.42 op/s
  lodash.reduce   ⇝    16.25ms   @   184,564,819.53 op/s
  ramda.reduce    ⇝   246.72ms   @    12,159,440.72 op/s

Array<object>(500)
  native          ⇝   1,058.82ms   @    14,166,748.78 op/s
  @arr/reduce     ⇝      22.94ms   @   653,814,219.21 op/s
  arr-reduce      ⇝      27.25ms   @   550,514,312.49 op/s
  fastjs.reduce   ⇝      23.03ms   @   651,365,200.67 op/s
  lodash.reduce   ⇝      27.90ms   @   537,558,206.35 op/s
  ramda.reduce    ⇝   1,163.36ms   @    12,893,648.68 op/s

Array<object>(1000)
  native          ⇝   2,139.77ms   @    14,020,229.08 op/s
  @arr/reduce     ⇝      45.06ms   @   665,705,476.72 op/s
  arr-reduce      ⇝      53.91ms   @   556,522,451.48 op/s
  fastjs.reduce   ⇝      45.47ms   @   659,790,781.66 op/s
  lodash.reduce   ⇝      54.66ms   @   548,832,780.86 op/s
  ramda.reduce    ⇝   2,326.06ms   @    12,897,332.40 op/s

Array<object>(5000)
  native          ⇝   10,652.91ms   @    14,080,657.12 op/s
  @arr/reduce     ⇝      222.76ms   @   673,374,370.23 op/s
  arr-reduce      ⇝      267.28ms   @   561,204,066.17 op/s
  fastjs.reduce   ⇝      223.49ms   @   671,169,831.43 op/s
  lodash.reduce   ⇝      268.23ms   @   559,221,332.16 op/s
  ramda.reduce    ⇝   11,782.20ms   @    12,731,066.41 op/s

Array<object>(10000)
  native          ⇝   21,206.25ms   @    14,146,771.76 op/s
  @arr/reduce     ⇝      448.65ms   @   668,673,388.20 op/s
  arr-reduce      ⇝      534.11ms   @   561,677,463.37 op/s
  fastjs.reduce   ⇝      452.59ms   @   662,845,657.52 op/s
  lodash.reduce   ⇝      534.95ms   @   560,800,167.03 op/s
  ramda.reduce    ⇝   23,388.02ms   @    12,827,078.01 op/s
```
</details>


## reduceRight

<details>
<summary>↝ Strings</summary>

```
Array<string>(100)
  native               ⇝   225.59ms   @    13,298,311.31 op/s
  @arr/reduceRight     ⇝     7.10ms   @   422,810,156.97 op/s
  fastjs.reduceRight   ⇝     6.38ms   @   470,235,503.34 op/s
  lodash.reduceright   ⇝     7.92ms   @   378,927,153.65 op/s
  ramda.reduceRight    ⇝     8.42ms   @   356,320,308.68 op/s

Array<string>(500)
  native               ⇝   1,096.56ms   @    13,679,144.26 op/s
  @arr/reduceRight     ⇝      27.43ms   @   546,910,341.23 op/s
  fastjs.reduceRight   ⇝      23.35ms   @   642,336,914.19 op/s
  lodash.reduceright   ⇝      28.16ms   @   532,578,444.81 op/s
  ramda.reduceRight    ⇝      23.95ms   @   626,273,657.96 op/s

Array<string>(1000)
  native               ⇝   2,170.89ms   @    13,819,231.83 op/s
  @arr/reduceRight     ⇝      53.90ms   @   556,591,981.36 op/s
  fastjs.reduceRight   ⇝      45.40ms   @   660,775,457.00 op/s
  lodash.reduceright   ⇝      59.16ms   @   507,088,539.99 op/s
  ramda.reduceRight    ⇝      46.27ms   @   648,414,336.24 op/s

Array<string>(5000)
  native               ⇝   10,951.34ms   @    13,696,957.45 op/s
  @arr/reduceRight     ⇝      267.42ms   @   560,922,983.96 op/s
  fastjs.reduceRight   ⇝      223.31ms   @   671,716,993.27 op/s
  lodash.reduceright   ⇝      268.31ms   @   559,060,506.72 op/s
  ramda.reduceRight    ⇝      224.25ms   @   668,904,684.99 op/s

Array<string>(10000)
  native               ⇝   21,636.02ms   @    13,865,767.66 op/s
  @arr/reduceRight     ⇝      550.05ms   @   545,408,860.03 op/s
  fastjs.reduceRight   ⇝      445.74ms   @   673,038,478.99 op/s
  lodash.reduceright   ⇝      543.63ms   @   551,841,153.63 op/s
  ramda.reduceRight    ⇝      446.52ms   @   671,855,786.64 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(100)
  native               ⇝   223.19ms   @    13,441,341.44 op/s
  @arr/reduceRight     ⇝     5.99ms   @   500,661,206.57 op/s
  fastjs.reduceRight   ⇝     5.29ms   @   567,066,480.04 op/s
  lodash.reduceright   ⇝     6.73ms   @   445,956,401.82 op/s
  ramda.reduceRight    ⇝    10.14ms   @   295,740,654.37 op/s

Array<number>(500)
  native               ⇝   1,095.45ms   @    13,693,056.20 op/s
  @arr/reduceRight     ⇝      27.26ms   @   550,229,961.28 op/s
  fastjs.reduceRight   ⇝      23.35ms   @   642,456,341.88 op/s
  lodash.reduceright   ⇝      29.23ms   @   513,144,715.02 op/s
  ramda.reduceRight    ⇝      25.49ms   @   588,483,611.12 op/s

Array<number>(1000)
  native               ⇝   2,168.00ms   @    13,837,626.90 op/s
  @arr/reduceRight     ⇝      53.96ms   @   556,015,802.78 op/s
  fastjs.reduceRight   ⇝      45.36ms   @   661,425,530.76 op/s
  lodash.reduceright   ⇝      56.36ms   @   532,318,596.87 op/s
  ramda.reduceRight    ⇝      47.53ms   @   631,205,579.30 op/s

Array<number>(5000)
  native               ⇝   10,845.39ms   @    13,830,763.06 op/s
  @arr/reduceRight     ⇝      267.35ms   @   561,057,644.23 op/s
  fastjs.reduceRight   ⇝      223.57ms   @   670,934,024.74 op/s
  lodash.reduceright   ⇝      271.52ms   @   552,443,060.66 op/s
  ramda.reduceRight    ⇝      225.39ms   @   665,513,742.49 op/s

Array<number>(10000)
  native               ⇝   21,627.33ms   @    13,871,338.25 op/s
  @arr/reduceRight     ⇝      533.66ms   @   562,153,031.42 op/s
  fastjs.reduceRight   ⇝      445.52ms   @   673,364,089.55 op/s
  lodash.reduceright   ⇝      546.38ms   @   549,063,785.30 op/s
  ramda.reduceRight    ⇝      465.34ms   @   644,696,475.26 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(100)
  native               ⇝   220.55ms   @    13,602,657.67 op/s
  @arr/reduceRight     ⇝     5.99ms   @   500,541,920.05 op/s
  fastjs.reduceRight   ⇝     5.21ms   @   575,871,778.69 op/s
  lodash.reduceright   ⇝     8.17ms   @   367,015,216.94 op/s
  ramda.reduceRight    ⇝     7.37ms   @   407,287,292.85 op/s

Array<object>(500)
  native               ⇝   1,086.85ms   @    13,801,340.37 op/s
  @arr/reduceRight     ⇝      27.44ms   @   546,689,646.58 op/s
  fastjs.reduceRight   ⇝      22.97ms   @   653,163,768.54 op/s
  lodash.reduceright   ⇝      29.52ms   @   508,191,177.86 op/s
  ramda.reduceRight    ⇝      25.15ms   @   596,325,584.86 op/s

Array<object>(1000)
  native               ⇝   2,170.24ms   @    13,823,360.66 op/s
  @arr/reduceRight     ⇝      54.19ms   @   553,568,981.01 op/s
  fastjs.reduceRight   ⇝      46.09ms   @   650,918,588.25 op/s
  lodash.reduceright   ⇝      59.04ms   @   508,161,832.81 op/s
  ramda.reduceRight    ⇝      46.85ms   @   640,406,007.16 op/s

Array<object>(5000)
  native               ⇝   11,024.51ms   @    13,606,042.33 op/s
  @arr/reduceRight     ⇝      330.88ms   @   453,343,144.57 op/s
  fastjs.reduceRight   ⇝      242.15ms   @   619,462,283.36 op/s
  lodash.reduceright   ⇝      284.67ms   @   526,927,117.37 op/s
  ramda.reduceRight    ⇝      227.53ms   @   659,266,717.14 op/s

Array<object>(10000)
  native               ⇝   22,182.58ms   @    13,524,123.50 op/s
  @arr/reduceRight     ⇝      548.94ms   @   546,510,413.51 op/s
  fastjs.reduceRight   ⇝      448.14ms   @   669,438,709.72 op/s
  lodash.reduceright   ⇝      544.19ms   @   551,275,201.71 op/s
  ramda.reduceRight    ⇝      454.10ms   @   660,650,469.32 op/s
```
</details>


## reverse

<details>
<summary>↝ Strings</summary>

```
Array<string>(100)
  native            ⇝   12.88ms   @   232,895,603.46 op/s
  @arr/reverse      ⇝    7.02ms   @   427,383,972.73 op/s
  compute-reverse   ⇝    7.85ms   @   381,932,115.64 op/s
  lodash.reverse    ⇝   12.36ms   @   242,712,751.89 op/s
  ramda.reverse     ⇝   33.82ms   @    88,697,066.70 op/s

Array<string>(500)
  native            ⇝    55.06ms   @   272,424,574.35 op/s
  @arr/reverse      ⇝    27.83ms   @   538,991,082.00 op/s
  compute-reverse   ⇝    27.92ms   @   537,314,908.45 op/s
  lodash.reverse    ⇝    50.39ms   @   297,651,139.61 op/s
  ramda.reverse     ⇝   113.61ms   @   132,032,810.15 op/s

Array<string>(1000)
  native            ⇝   118.19ms   @   253,831,263.52 op/s
  @arr/reverse      ⇝    54.70ms   @   548,459,966.46 op/s
  compute-reverse   ⇝    54.98ms   @   545,620,275.13 op/s
  lodash.reverse    ⇝   111.83ms   @   268,265,174.19 op/s
  ramda.reverse     ⇝   225.38ms   @   133,111,085.15 op/s

Array<string>(5000)
  native            ⇝     518.40ms   @   289,353,122.24 op/s
  @arr/reverse      ⇝     267.94ms   @   559,831,413.11 op/s
  compute-reverse   ⇝     268.47ms   @   558,719,699.02 op/s
  lodash.reverse    ⇝     512.38ms   @   292,750,695.90 op/s
  ramda.reverse     ⇝   1,093.85ms   @   137,129,727.92 op/s

Array<string>(10000)
  native            ⇝   1,024.40ms   @   292,854,582.47 op/s
  @arr/reverse      ⇝     540.95ms   @   554,580,919.64 op/s
  compute-reverse   ⇝     543.51ms   @   551,963,213.37 op/s
  lodash.reverse    ⇝   1,014.12ms   @   295,821,584.61 op/s
  ramda.reverse     ⇝   2,185.67ms   @   137,257,764.51 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(100)
  native            ⇝   10.49ms   @   286,035,053.60 op/s
  @arr/reverse      ⇝    5.28ms   @   567,989,798.90 op/s
  compute-reverse   ⇝    5.92ms   @   507,012,147.00 op/s
  lodash.reverse    ⇝   10.42ms   @   287,850,216.56 op/s
  ramda.reverse     ⇝   27.78ms   @   108,007,592.93 op/s

Array<number>(500)
  native            ⇝    52.70ms   @   284,648,248.20 op/s
  @arr/reverse      ⇝    24.01ms   @   624,630,739.13 op/s
  compute-reverse   ⇝    30.78ms   @   487,276,559.33 op/s
  lodash.reverse    ⇝    47.95ms   @   312,840,050.62 op/s
  ramda.reverse     ⇝   109.80ms   @   136,614,721.80 op/s

Array<number>(1000)
  native            ⇝   111.58ms   @   268,862,236.32 op/s
  @arr/reverse      ⇝    45.72ms   @   656,112,456.28 op/s
  compute-reverse   ⇝    49.22ms   @   609,525,085.08 op/s
  lodash.reverse    ⇝   105.74ms   @   283,712,153.37 op/s
  ramda.reverse     ⇝   215.03ms   @   139,516,187.25 op/s

Array<number>(5000)
  native            ⇝     494.89ms   @   303,100,054.62 op/s
  @arr/reverse      ⇝     224.26ms   @   668,853,314.62 op/s
  compute-reverse   ⇝     224.63ms   @   667,760,253.18 op/s
  lodash.reverse    ⇝     487.44ms   @   307,731,058.45 op/s
  ramda.reverse     ⇝   1,067.29ms   @   140,542,397.66 op/s

Array<number>(10000)
  native            ⇝     961.90ms   @   311,882,568.68 op/s
  @arr/reverse      ⇝     445.19ms   @   673,873,696.43 op/s
  compute-reverse   ⇝     450.47ms   @   665,972,371.23 op/s
  lodash.reverse    ⇝     952.19ms   @   315,063,606.27 op/s
  ramda.reverse     ⇝   2,119.90ms   @   141,515,780.48 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(100)
  native            ⇝   11.00ms   @   272,821,966.75 op/s
  @arr/reverse      ⇝    6.28ms   @   477,452,618.40 op/s
  compute-reverse   ⇝    6.78ms   @   442,522,781.07 op/s
  lodash.reverse    ⇝   13.67ms   @   219,534,662.62 op/s
  ramda.reverse     ⇝   29.72ms   @   100,955,534.03 op/s

Array<object>(500)
  native            ⇝    50.97ms   @   294,307,631.29 op/s
  @arr/reverse      ⇝    30.88ms   @   485,777,141.58 op/s
  compute-reverse   ⇝    34.21ms   @   438,531,903.94 op/s
  lodash.reverse    ⇝    50.64ms   @   296,196,160.05 op/s
  ramda.reverse     ⇝   113.38ms   @   132,298,830.57 op/s

Array<object>(1000)
  native            ⇝   117.36ms   @   255,627,736.21 op/s
  @arr/reverse      ⇝    54.38ms   @   551,624,323.09 op/s
  compute-reverse   ⇝    54.86ms   @   546,875,826.01 op/s
  lodash.reverse    ⇝   111.19ms   @   269,797,007.43 op/s
  ramda.reverse     ⇝   220.48ms   @   136,066,669.62 op/s

Array<object>(5000)
  native            ⇝     528.38ms   @   283,888,840.99 op/s
  @arr/reverse      ⇝     281.85ms   @   532,205,866.79 op/s
  compute-reverse   ⇝     281.28ms   @   533,269,689.85 op/s
  lodash.reverse    ⇝     535.44ms   @   280,141,722.05 op/s
  ramda.reverse     ⇝   1,123.34ms   @   133,530,326.05 op/s

Array<object>(10000)
  native            ⇝   1,058.79ms   @   283,342,867.82 op/s
  @arr/reverse      ⇝     574.61ms   @   522,092,791.55 op/s
  compute-reverse   ⇝     591.46ms   @   507,222,077.32 op/s
  lodash.reverse    ⇝   1,054.45ms   @   284,507,939.00 op/s
  ramda.reverse     ⇝   2,271.08ms   @   132,095,595.32 op/s
```
</details>


## some

<details>
<summary>↝ Strings</summary>

```
Array<string>(100)
  native        ⇝   4.59ms   @     653,876,123.17 op/s
  @arr/some     ⇝   0.86ms   @   3,471,647,632.39 op/s
  fastjs.some   ⇝   1.02ms   @   2,955,662,112.65 op/s
  lodash.some   ⇝   2.11ms   @   1,422,581,682.27 op/s

Array<string>(500)
  native        ⇝   4.83ms   @    3,103,269,356.33 op/s
  @arr/some     ⇝   0.68ms   @   22,038,599,873.06 op/s
  fastjs.some   ⇝   0.68ms   @   21,933,031,144.90 op/s
  lodash.some   ⇝   1.04ms   @   14,409,595,637.93 op/s

Array<string>(1000)
  native        ⇝   3.90ms   @    7,700,697,503.51 op/s
  @arr/some     ⇝   0.48ms   @   62,345,046,582.14 op/s
  fastjs.some   ⇝   0.49ms   @   61,803,805,878.37 op/s
  lodash.some   ⇝   0.73ms   @   41,162,822,287.75 op/s

Array<string>(5000)
  native        ⇝   3.53ms   @    42,498,082,628.17 op/s
  @arr/some     ⇝   0.50ms   @   301,858,239,321.26 op/s
  fastjs.some   ⇝   0.50ms   @   297,973,778,307.51 op/s
  lodash.some   ⇝   0.73ms   @   205,693,598,815.20 op/s

Array<string>(10000)
  native        ⇝   5.12ms   @    58,549,494,815.44 op/s
  @arr/some     ⇝   0.68ms   @   438,494,560,474.98 op/s
  fastjs.some   ⇝   0.68ms   @   439,095,930,751.64 op/s
  lodash.some   ⇝   1.03ms   @   289,922,300,823.38 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(100)
  native        ⇝   4.62ms   @     649,160,959.46 op/s
  @arr/some     ⇝   0.81ms   @   3,706,595,763.61 op/s
  fastjs.some   ⇝   0.96ms   @   3,140,443,786.58 op/s
  lodash.some   ⇝   1.61ms   @   1,864,755,499.47 op/s

Array<number>(500)
  native        ⇝   3.69ms   @    4,060,637,774.60 op/s
  @arr/some     ⇝   0.45ms   @   33,655,679,956.92 op/s
  fastjs.some   ⇝   0.45ms   @   33,402,662,414.88 op/s
  lodash.some   ⇝   0.68ms   @   22,120,598,553.90 op/s

Array<number>(1000)
  native        ⇝   3.51ms   @    8,554,302,857.11 op/s
  @arr/some     ⇝   0.44ms   @   67,927,706,805.90 op/s
  fastjs.some   ⇝   0.44ms   @   67,887,894,456.95 op/s
  lodash.some   ⇝   0.67ms   @   44,826,298,094.88 op/s

Array<number>(5000)
  native        ⇝   3.61ms   @    41,605,402,711.17 op/s
  @arr/some     ⇝   0.44ms   @   339,178,509,649.63 op/s
  fastjs.some   ⇝   0.44ms   @   339,693,143,860.05 op/s
  lodash.some   ⇝   0.69ms   @   217,255,598,314.68 op/s

Array<number>(10000)
  native        ⇝   6.32ms   @    47,465,327,764.70 op/s
  @arr/some     ⇝   0.61ms   @   493,548,498,543.21 op/s
  fastjs.some   ⇝   0.64ms   @   468,365,062,464.29 op/s
  lodash.some   ⇝   0.92ms   @   325,315,746,041.18 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(100)
  native        ⇝   4.85ms   @     618,834,347.12 op/s
  @arr/some     ⇝   0.94ms   @   3,182,267,556.57 op/s
  fastjs.some   ⇝   1.20ms   @   2,503,371,206.56 op/s
  lodash.some   ⇝   1.81ms   @   1,661,769,063.95 op/s

Array<object>(500)
  native        ⇝   3.55ms   @    4,220,335,263.43 op/s
  @arr/some     ⇝   0.50ms   @   29,803,594,313.47 op/s
  fastjs.some   ⇝   0.50ms   @   29,855,321,113.88 op/s
  lodash.some   ⇝   0.74ms   @   20,162,374,321.20 op/s

Array<object>(1000)
  native        ⇝   6.66ms   @    4,503,126,520.74 op/s
  @arr/some     ⇝   0.67ms   @   44,718,652,597.18 op/s
  fastjs.some   ⇝   0.67ms   @   44,782,937,103.86 op/s
  lodash.some   ⇝   1.00ms   @   30,135,670,789.90 op/s

Array<object>(5000)
  native        ⇝   4.36ms   @    34,438,432,004.42 op/s
  @arr/some     ⇝   0.56ms   @   270,227,910,219.48 op/s
  fastjs.some   ⇝   0.56ms   @   265,539,833,630.44 op/s
  lodash.some   ⇝   0.70ms   @   213,498,210,884.99 op/s

Array<object>(10000)
  native        ⇝   3.92ms   @    76,544,808,182.54 op/s
  @arr/some     ⇝   0.51ms   @   589,041,472,446.60 op/s
  fastjs.some   ⇝   0.50ms   @   595,229,828,157.15 op/s
  lodash.some   ⇝   0.82ms   @   364,941,749,214.46 op/s
```
</details>


## unique

<details>
<summary>↝ Strings</summary>

```
Array<string>(10)
  @arr/unique    ⇝    7.70ms   @   38,972,801.66 op/s
  arr-uniq       ⇝   88.44ms   @    3,392,066.47 op/s
  array-unique   ⇝   28.62ms   @   10,481,077.62 op/s
  lodash.uniq    ⇝   35.21ms   @    8,521,421.95 op/s
  ramda.uniq     ⇝   56.13ms   @    5,345,063.59 op/s

Array<string>(50)
  @arr/unique    ⇝      41.26ms   @   36,358,005.06 op/s
  arr-uniq       ⇝   1,175.12ms   @    1,276,465.66 op/s
  array-unique   ⇝     699.28ms   @    2,145,074.75 op/s
  lodash.uniq    ⇝     629.14ms   @    2,384,198.00 op/s
  ramda.uniq     ⇝     216.07ms   @    6,942,071.03 op/s

Array<string>(100)
  @arr/unique    ⇝      58.71ms   @   51,101,482.23 op/s
  arr-uniq       ⇝   5,128.84ms   @      584,927.34 op/s
  array-unique   ⇝   3,113.97ms   @      963,401.19 op/s
  lodash.uniq    ⇝   2,787.19ms   @    1,076,352.44 op/s
  ramda.uniq     ⇝     439.56ms   @    6,825,064.51 op/s

Array<string>(500)
  @arr/unique    ⇝       235.07ms   @   63,810,174.16 op/s
  arr-uniq       ⇝   124,080.12ms   @      120,889.64 op/s
  array-unique   ⇝    78,791.25ms   @      190,376.47 op/s
  lodash.uniq    ⇝     2,965.39ms   @    5,058,358.18 op/s
  ramda.uniq     ⇝     2,038.87ms   @    7,357,018.66 op/s

Array<string>(1000)
  @arr/unique    ⇝       475.73ms   @   63,060,685.43 op/s
  arr-uniq       ⇝   491,311.69ms   @       61,061.03 op/s
  array-unique   ⇝   313,261.34ms   @       95,766.69 op/s
  lodash.uniq    ⇝     5,886.91ms   @    5,096,055.16 op/s
  ramda.uniq     ⇝     4,082.19ms   @    7,349,003.86 op/s
```
</details>

<details>
<summary>↝ Numbers</summary>

```
Array<number>(10)
  @arr/unique    ⇝    7.26ms   @   41,345,578.06 op/s
  arr-uniq       ⇝   57.00ms   @    5,263,421.90 op/s
  array-unique   ⇝    7.72ms   @   38,844,304.26 op/s
  lodash.uniq    ⇝   10.32ms   @   29,063,309.87 op/s
  ramda.uniq     ⇝   46.39ms   @    6,467,217.26 op/s

Array<number>(50)
  @arr/unique    ⇝    42.24ms   @   35,509,470.47 op/s
  arr-uniq       ⇝   603.53ms   @    2,485,384.64 op/s
  array-unique   ⇝   138.20ms   @   10,853,586.46 op/s
  lodash.uniq    ⇝    90.67ms   @   16,543,723.64 op/s
  ramda.uniq     ⇝   173.03ms   @    8,668,897.94 op/s

Array<number>(100)
  @arr/unique    ⇝      59.96ms   @   50,037,382.93 op/s
  arr-uniq       ⇝   2,126.50ms   @    1,410,767.93 op/s
  array-unique   ⇝     510.16ms   @    5,880,493.67 op/s
  lodash.uniq    ⇝     317.26ms   @    9,455,959.71 op/s
  ramda.uniq     ⇝     324.91ms   @    9,233,299.33 op/s

Array<number>(500)
  @arr/unique    ⇝      244.12ms   @   61,445,728.78 op/s
  arr-uniq       ⇝   49,270.21ms   @      304,443.58 op/s
  array-unique   ⇝   11,589.13ms   @    1,294,316.50 op/s
  lodash.uniq    ⇝    2,590.45ms   @    5,790,494.95 op/s
  ramda.uniq     ⇝    1,539.32ms   @    9,744,549.01 op/s

Array<number>(1000)
  @arr/unique    ⇝       500.55ms   @   59,934,264.70 op/s
  arr-uniq       ⇝   194,176.54ms   @      154,498.58 op/s
  array-unique   ⇝    45,136.62ms   @      664,648.76 op/s
  lodash.uniq    ⇝     5,044.51ms   @    5,947,059.11 op/s
  ramda.uniq     ⇝     2,963.35ms   @   10,123,694.15 op/s
```
</details>

<details>
<summary>↝ Objects</summary>

```
Array<object>(10)
  @arr/unique    ⇝       6.82ms   @   43,988,734.19 op/s
  arr-uniq       ⇝      58.77ms   @    5,104,506.17 op/s
  array-unique   ⇝       7.94ms   @   37,805,673.04 op/s
  lodash.uniq    ⇝      10.25ms   @   29,267,201.94 op/s
  ramda.uniq     ⇝   4,615.90ms   @       64,992.68 op/s

Array<object>(50)
  @arr/unique    ⇝        39.01ms   @   38,453,027.52 op/s
  arr-uniq       ⇝       587.82ms   @    2,551,789.51 op/s
  array-unique   ⇝       138.47ms   @   10,832,761.85 op/s
  lodash.uniq    ⇝        98.42ms   @   15,240,467.14 op/s
  ramda.uniq     ⇝   109,704.86ms   @       13,673.05 op/s

Array<object>(100)
  @arr/unique    ⇝        72.21ms   @   41,548,193.72 op/s
  arr-uniq       ⇝     2,101.99ms   @    1,427,221.10 op/s
  array-unique   ⇝       530.23ms   @    5,657,908.62 op/s
  lodash.uniq    ⇝       333.78ms   @    8,987,969.71 op/s
  ramda.uniq     ⇝   458,581.06ms   @        6,541.92 op/s

Array<object>(500)
  @arr/unique    ⇝      251.74ms   @   59,585,393.16 op/s
  arr-uniq       ⇝   48,604.02ms   @      308,616.46 op/s
  array-unique   ⇝   15,006.70ms   @      999,553.57 op/s
  lodash.uniq    ⇝    5,829.91ms   @    2,572,937.69 op/s
  ramda.uniq     ⇝     (removed)

Array<object>(1000)
  @arr/unique    ⇝       491.72ms   @   61,010,942.16 op/s
  arr-uniq       ⇝   207,778.57ms   @      144,384.48 op/s
  array-unique   ⇝    80,340.59ms   @      373,410.26 op/s
  lodash.uniq    ⇝    12,211.40ms   @    2,456,720.15 op/s
  ramda.uniq     ⇝     (removed)
```
</details>
