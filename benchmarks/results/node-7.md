# Benchmark Results for Node `v7.9.0`

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
  native         ⇝   58.41ms   @    51,363,468.09 op/s
  @arr/every     ⇝    6.03ms   @   497,405,450.27 op/s
  array-every    ⇝    9.95ms   @   301,566,517.43 op/s
  lodash.every   ⇝    7.64ms   @   392,675,862.18 op/s
  fastjs.every   ⇝    8.66ms   @   346,561,909.47 op/s

Array<string>(500)
  native         ⇝   289.76ms   @    51,767,710.63 op/s
  @arr/every     ⇝    23.11ms   @   649,153,402.26 op/s
  array-every    ⇝    32.61ms   @   460,018,941.13 op/s
  lodash.every   ⇝    31.37ms   @   478,192,767.98 op/s
  fastjs.every   ⇝    23.62ms   @   635,125,299.85 op/s

Array<string>(1000)
  native         ⇝   577.41ms   @    51,956,558.61 op/s
  @arr/every     ⇝    45.45ms   @   660,014,338.15 op/s
  array-every    ⇝    72.15ms   @   415,818,028.27 op/s
  lodash.every   ⇝    54.28ms   @   552,680,195.90 op/s
  fastjs.every   ⇝    45.15ms   @   664,383,328.81 op/s

Array<string>(5000)
  native         ⇝   2,828.80ms   @    53,026,053.72 op/s
  @arr/every     ⇝     223.32ms   @   671,676,775.38 op/s
  array-every    ⇝     318.54ms   @   470,891,300.20 op/s
  lodash.every   ⇝     268.06ms   @   559,578,854.98 op/s
  fastjs.every   ⇝     223.56ms   @   670,954,525.31 op/s

Array<string>(10000)
  native         ⇝   5,671.45ms   @    52,896,535.40 op/s
  @arr/every     ⇝     449.61ms   @   667,241,600.58 op/s
  array-every    ⇝     629.47ms   @   476,588,789.43 op/s
  lodash.every   ⇝     539.38ms   @   556,192,522.68 op/s
  fastjs.every   ⇝     454.38ms   @   660,235,334.81 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native         ⇝   57.66ms   @    52,032,266.73 op/s
  @arr/every     ⇝    7.18ms   @   417,921,184.80 op/s
  array-every    ⇝    7.86ms   @   381,705,419.10 op/s
  lodash.every   ⇝    7.79ms   @   384,937,399.56 op/s
  fastjs.every   ⇝    6.30ms   @   476,240,519.24 op/s

Array<number>(500)
  native         ⇝   291.89ms   @    51,388,768.45 op/s
  @arr/every     ⇝    22.92ms   @   654,469,022.08 op/s
  array-every    ⇝    32.27ms   @   464,825,896.21 op/s
  lodash.every   ⇝    27.78ms   @   539,910,975.16 op/s
  fastjs.every   ⇝    23.03ms   @   651,195,336.33 op/s

Array<number>(1000)
  native         ⇝   570.40ms   @    52,594,496.60 op/s
  @arr/every     ⇝    45.27ms   @   662,723,828.07 op/s
  array-every    ⇝    63.54ms   @   472,172,564.97 op/s
  lodash.every   ⇝    54.12ms   @   554,299,676.73 op/s
  fastjs.every   ⇝    45.56ms   @   658,459,264.58 op/s

Array<number>(5000)
  native         ⇝   2,826.25ms   @    53,073,926.04 op/s
  @arr/every     ⇝     223.76ms   @   670,357,176.58 op/s
  array-every    ⇝     317.05ms   @   473,117,477.54 op/s
  lodash.every   ⇝     272.85ms   @   549,747,674.98 op/s
  fastjs.every   ⇝     227.41ms   @   659,590,097.47 op/s

Array<number>(10000)
  native         ⇝   6,738.48ms   @    44,520,405.41 op/s
  @arr/every     ⇝     449.13ms   @   667,950,727.72 op/s
  array-every    ⇝     629.20ms   @   476,796,502.71 op/s
  lodash.every   ⇝     534.59ms   @   561,178,540.63 op/s
  fastjs.every   ⇝     446.23ms   @   672,299,579.49 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native         ⇝   64.13ms   @    46,781,481.63 op/s
  @arr/every     ⇝    5.16ms   @   581,156,241.34 op/s
  array-every    ⇝    9.46ms   @   317,290,659.29 op/s
  lodash.every   ⇝    6.30ms   @   476,301,915.72 op/s
  fastjs.every   ⇝    5.33ms   @   562,788,640.22 op/s

Array<object>(500)
  native         ⇝   288.31ms   @    52,028,144.30 op/s
  @arr/every     ⇝    22.86ms   @   656,072,380.70 op/s
  array-every    ⇝    34.73ms   @   431,866,471.03 op/s
  lodash.every   ⇝    27.62ms   @   543,071,114.95 op/s
  fastjs.every   ⇝    22.94ms   @   653,882,764.57 op/s

Array<object>(1000)
  native         ⇝   576.90ms   @    52,001,842.29 op/s
  @arr/every     ⇝    45.03ms   @   666,234,043.89 op/s
  array-every    ⇝    69.54ms   @   431,391,347.53 op/s
  lodash.every   ⇝    54.25ms   @   553,044,090.17 op/s
  fastjs.every   ⇝    45.06ms   @   665,766,727.59 op/s

Array<object>(5000)
  native         ⇝   2,830.97ms   @    52,985,398.78 op/s
  @arr/every     ⇝     223.20ms   @   672,043,092.05 op/s
  array-every    ⇝     314.79ms   @   476,503,118.21 op/s
  lodash.every   ⇝     275.69ms   @   544,093,662.34 op/s
  fastjs.every   ⇝     223.75ms   @   670,387,232.38 op/s

Array<object>(10000)
  native         ⇝   5,670.54ms   @    52,904,973.38 op/s
  @arr/every     ⇝     445.04ms   @   674,094,183.92 op/s
  array-every    ⇝     629.55ms   @   476,534,365.32 op/s
  lodash.every   ⇝     534.83ms   @   560,927,199.05 op/s
  fastjs.every   ⇝     446.42ms   @   672,006,958.12 op/s
```
</details>


## filter

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native               ⇝   399.46ms   @     7,510,160.23 op/s
  @arr/filter          ⇝    24.40ms   @   122,960,827.88 op/s
  @arr/filter.mutate   ⇝     6.86ms   @   437,607,140.81 op/s
  arr-filter           ⇝    30.77ms   @    97,482,149.80 op/s
  array-filter         ⇝   391.18ms   @     7,669,175.41 op/s
  lodash.filter        ⇝    26.67ms   @   112,498,648.61 op/s
  fastjs.filter        ⇝    32.22ms   @    93,102,816.14 op/s
  ramda.filter         ⇝    37.37ms   @    80,287,220.57 op/s

Array<string>(500)
  native               ⇝   1,868.70ms   @     8,026,954.32 op/s
  @arr/filter          ⇝     102.46ms   @   146,399,480.46 op/s
  @arr/filter.mutate   ⇝      27.56ms   @   544,182,405.30 op/s
  arr-filter           ⇝      95.76ms   @   156,645,687.01 op/s
  array-filter         ⇝   1,855.01ms   @     8,086,211.60 op/s
  lodash.filter        ⇝     112.45ms   @   133,391,987.87 op/s
  fastjs.filter        ⇝     103.11ms   @   145,481,682.28 op/s
  ramda.filter         ⇝     116.21ms   @   129,071,323.65 op/s

Array<string>(1000)
  native               ⇝   3,737.02ms   @     8,027,790.54 op/s
  @arr/filter          ⇝     222.43ms   @   134,873,711.00 op/s
  @arr/filter.mutate   ⇝      54.39ms   @   551,522,465.82 op/s
  arr-filter           ⇝     186.84ms   @   160,561,594.79 op/s
  array-filter         ⇝   3,730.01ms   @     8,042,871.62 op/s
  lodash.filter        ⇝     238.38ms   @   125,849,522.56 op/s
  fastjs.filter        ⇝     220.34ms   @   136,151,252.17 op/s
  ramda.filter         ⇝     227.30ms   @   131,983,841.96 op/s

Array<string>(5000)
  native               ⇝   18,746.54ms   @     8,001,476.68 op/s
  @arr/filter          ⇝    1,139.04ms   @   131,690,243.41 op/s
  @arr/filter.mutate   ⇝      268.02ms   @   559,662,562.58 op/s
  arr-filter           ⇝      906.95ms   @   165,389,807.55 op/s
  array-filter         ⇝   18,719.09ms   @     8,013,208.45 op/s
  lodash.filter        ⇝    1,225.86ms   @   122,363,264.57 op/s
  fastjs.filter        ⇝    1,144.29ms   @   131,085,357.18 op/s
  ramda.filter         ⇝    1,142.85ms   @   131,250,757.73 op/s

Array<string>(10000)
  native               ⇝   36,867.70ms   @     8,137,203.53 op/s
  @arr/filter          ⇝    1,940.73ms   @   154,581,072.61 op/s
  @arr/filter.mutate   ⇝      543.18ms   @   552,304,605.75 op/s
  arr-filter           ⇝    1,798.63ms   @   166,793,382.47 op/s
  array-filter         ⇝   36,911.30ms   @     8,127,593.45 op/s
  lodash.filter        ⇝    2,110.98ms   @   142,114,291.90 op/s
  fastjs.filter        ⇝    1,937.96ms   @   154,801,874.50 op/s
  ramda.filter         ⇝    1,888.60ms   @   158,847,587.69 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native               ⇝   386.01ms   @     7,771,722.34 op/s
  @arr/filter          ⇝    22.68ms   @   132,256,903.22 op/s
  @arr/filter.mutate   ⇝     6.02ms   @   498,314,699.69 op/s
  arr-filter           ⇝    23.71ms   @   126,508,593.90 op/s
  array-filter         ⇝   379.20ms   @     7,911,470.12 op/s
  lodash.filter        ⇝    24.20ms   @   123,972,454.31 op/s
  fastjs.filter        ⇝    23.49ms   @   127,711,196.96 op/s
  ramda.filter         ⇝    34.87ms   @    86,043,665.78 op/s

Array<number>(500)
  native               ⇝   1,863.16ms   @     8,050,823.24 op/s
  @arr/filter          ⇝      97.65ms   @   153,612,047.51 op/s
  @arr/filter.mutate   ⇝      27.39ms   @   547,633,989.33 op/s
  arr-filter           ⇝      89.94ms   @   166,771,582.67 op/s
  array-filter         ⇝   1,841.70ms   @     8,144,663.11 op/s
  lodash.filter        ⇝     106.93ms   @   140,283,226.22 op/s
  fastjs.filter        ⇝      97.85ms   @   153,300,186.63 op/s
  ramda.filter         ⇝     111.87ms   @   134,080,578.10 op/s

Array<number>(1000)
  native               ⇝   3,697.08ms   @     8,114,522.90 op/s
  @arr/filter          ⇝     210.70ms   @   142,384,584.69 op/s
  @arr/filter.mutate   ⇝      54.13ms   @   554,217,776.48 op/s
  arr-filter           ⇝     170.29ms   @   176,169,099.69 op/s
  array-filter         ⇝   3,681.91ms   @     8,147,939.58 op/s
  lodash.filter        ⇝     235.13ms   @   127,586,828.80 op/s
  fastjs.filter        ⇝     212.01ms   @   141,499,544.35 op/s
  ramda.filter         ⇝     220.13ms   @   136,280,526.92 op/s

Array<number>(5000)
  native               ⇝   18,523.06ms   @     8,098,014.81 op/s
  @arr/filter          ⇝    1,088.55ms   @   137,797,687.12 op/s
  @arr/filter.mutate   ⇝      267.67ms   @   560,391,807.42 op/s
  arr-filter           ⇝      831.67ms   @   180,360,006.15 op/s
  array-filter         ⇝   18,349.92ms   @     8,174,423.10 op/s
  lodash.filter        ⇝    1,193.71ms   @   125,658,678.29 op/s
  fastjs.filter        ⇝    1,092.10ms   @   137,349,550.54 op/s
  ramda.filter         ⇝    1,083.45ms   @   138,447,051.53 op/s

Array<number>(10000)
  native               ⇝   36,294.12ms   @     8,265,802.63 op/s
  @arr/filter          ⇝    1,851.95ms   @   161,991,490.29 op/s
  @arr/filter.mutate   ⇝      535.06ms   @   560,679,920.84 op/s
  arr-filter           ⇝    1,689.80ms   @   177,535,438.70 op/s
  array-filter         ⇝   36,271.65ms   @     8,270,923.21 op/s
  lodash.filter        ⇝    2,028.00ms   @   147,929,189.72 op/s
  fastjs.filter        ⇝    1,842.97ms   @   162,781,110.76 op/s
  ramda.filter         ⇝    1,806.21ms   @   166,093,868.98 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native               ⇝   391.66ms   @     7,659,662.09 op/s
  @arr/filter          ⇝    23.24ms   @   129,071,495.80 op/s
  @arr/filter.mutate   ⇝     6.02ms   @   498,443,858.27 op/s
  arr-filter           ⇝    25.43ms   @   117,975,832.02 op/s
  array-filter         ⇝   388.24ms   @     7,727,267.10 op/s
  lodash.filter        ⇝    24.81ms   @   120,941,130.01 op/s
  fastjs.filter        ⇝    23.42ms   @   128,093,511.68 op/s
  ramda.filter         ⇝    34.64ms   @    86,605,498.36 op/s

Array<object>(500)
  native               ⇝   1,890.16ms   @     7,935,846.99 op/s
  @arr/filter          ⇝     101.61ms   @   147,618,869.26 op/s
  @arr/filter.mutate   ⇝      27.29ms   @   549,744,693.07 op/s
  arr-filter           ⇝      96.28ms   @   155,796,594.58 op/s
  array-filter         ⇝   1,873.74ms   @     8,005,378.25 op/s
  lodash.filter        ⇝     119.63ms   @   125,383,344.95 op/s
  fastjs.filter        ⇝     102.96ms   @   145,683,320.18 op/s
  ramda.filter         ⇝     116.41ms   @   128,860,165.18 op/s

Array<object>(1000)
  native               ⇝   3,790.15ms   @     7,915,262.79 op/s
  @arr/filter          ⇝     224.04ms   @   133,902,590.14 op/s
  @arr/filter.mutate   ⇝      54.00ms   @   555,544,845.89 op/s
  arr-filter           ⇝     192.17ms   @   156,112,360.12 op/s
  array-filter         ⇝   3,823.31ms   @     7,846,607.33 op/s
  lodash.filter        ⇝     241.50ms   @   124,224,590.62 op/s
  fastjs.filter        ⇝     224.12ms   @   133,857,891.47 op/s
  ramda.filter         ⇝     233.35ms   @   128,563,609.15 op/s

Array<object>(5000)
  native               ⇝   20,269.19ms   @     7,400,396.11 op/s
  @arr/filter          ⇝    1,205.19ms   @   124,461,374.73 op/s
  @arr/filter.mutate   ⇝      267.65ms   @   560,431,502.67 op/s
  arr-filter           ⇝      951.77ms   @   157,600,819.61 op/s
  array-filter         ⇝   19,868.70ms   @     7,549,564.55 op/s
  lodash.filter        ⇝    1,309.43ms   @   114,554,005.35 op/s
  fastjs.filter        ⇝    1,244.75ms   @   120,506,020.30 op/s
  ramda.filter         ⇝    1,193.22ms   @   125,710,015.93 op/s

Array<object>(10000)
  native               ⇝   38,785.31ms   @     7,734,887.95 op/s
  @arr/filter          ⇝    2,061.96ms   @   145,492,416.30 op/s
  @arr/filter.mutate   ⇝      537.66ms   @   557,975,881.34 op/s
  arr-filter           ⇝    1,893.51ms   @   158,436,146.09 op/s
  array-filter         ⇝   38,897.36ms   @     7,712,605.11 op/s
  lodash.filter        ⇝    2,229.66ms   @   134,549,666.14 op/s
  fastjs.filter        ⇝    2,072.31ms   @   144,766,194.31 op/s
  ramda.filter         ⇝    2,059.35ms   @   145,677,104.33 op/s
```
</details>


## find

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native        ⇝    2.26ms   @   1,328,305,843.31 op/s
  @arr/find     ⇝    0.94ms   @   3,181,079,785.72 op/s
  lodash.find   ⇝    9.67ms   @     310,210,902.05 op/s
  ramda.find    ⇝   40.26ms   @      74,507,361.05 op/s

Array<string>(500)
  native        ⇝    1.34ms   @   11,217,435,783.92 op/s
  @arr/find     ⇝    0.53ms   @   28,537,563,995.49 op/s
  lodash.find   ⇝    3.90ms   @    3,844,444,546.96 op/s
  ramda.find    ⇝   28.13ms   @      533,178,924.72 op/s

Array<string>(1000)
  native        ⇝    1.37ms   @   21,956,226,602.90 op/s
  @arr/find     ⇝    0.56ms   @   53,972,948,758.08 op/s
  lodash.find   ⇝    3.95ms   @    7,601,701,260.74 op/s
  ramda.find    ⇝   29.20ms   @    1,027,263,927.05 op/s

Array<string>(5000)
  native        ⇝    2.04ms   @    73,380,743,816.57 op/s
  @arr/find     ⇝    0.73ms   @   205,888,973,684.64 op/s
  lodash.find   ⇝    6.06ms   @    24,757,663,734.81 op/s
  ramda.find    ⇝   29.18ms   @     5,140,450,824.39 op/s

Array<string>(10000)
  native        ⇝    1.41ms   @   213,391,299,894.44 op/s
  @arr/find     ⇝    0.55ms   @   550,165,966,733.30 op/s
  lodash.find   ⇝    3.91ms   @    76,718,710,082.30 op/s
  ramda.find    ⇝   28.02ms   @    10,704,885,677.71 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native        ⇝   334.13ms   @    8,978,509.71 op/s
  @arr/find     ⇝   287.83ms   @   10,422,893.01 op/s
  lodash.find   ⇝   303.12ms   @    9,897,225.30 op/s
  ramda.find    ⇝   326.72ms   @    9,182,270.09 op/s

Array<number>(500)
  native        ⇝   1,608.55ms   @    9,325,144.73 op/s
  @arr/find     ⇝   1,394.19ms   @   10,758,898.20 op/s
  lodash.find   ⇝   1,408.26ms   @   10,651,479.40 op/s
  ramda.find    ⇝   1,422.91ms   @   10,541,801.79 op/s

Array<number>(1000)
  native        ⇝   3,197.71ms   @    9,381,721.22 op/s
  @arr/find     ⇝   2,770.44ms   @   10,828,618.93 op/s
  lodash.find   ⇝   2,843.48ms   @   10,550,452.87 op/s
  ramda.find    ⇝   2,836.42ms   @   10,576,707.38 op/s

Array<number>(5000)
  native        ⇝   16,035.87ms   @    9,354,031.68 op/s
  @arr/find     ⇝   13,832.32ms   @   10,844,169.14 op/s
  lodash.find   ⇝   14,084.22ms   @   10,650,216.78 op/s
  ramda.find    ⇝   13,867.79ms   @   10,816,434.84 op/s

Array<number>(10000)
  native        ⇝   32,103.50ms   @    9,344,774.08 op/s
  @arr/find     ⇝   27,724.05ms   @   10,820,928.51 op/s
  lodash.find   ⇝   28,186.21ms   @   10,643,504.42 op/s
  ramda.find    ⇝   27,877.50ms   @   10,761,366.21 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native        ⇝   183.65ms   @   16,335,845.11 op/s
  @arr/find     ⇝   132.08ms   @   22,713,991.75 op/s
  lodash.find   ⇝   140.36ms   @   21,374,205.07 op/s
  ramda.find    ⇝   174.40ms   @   17,201,824.60 op/s

Array<object>(500)
  native        ⇝   1,232.32ms   @   12,172,147.45 op/s
  @arr/find     ⇝     999.29ms   @   15,010,623.92 op/s
  lodash.find   ⇝   1,046.98ms   @   14,326,946.51 op/s
  ramda.find    ⇝   1,085.87ms   @   13,813,794.31 op/s

Array<object>(1000)
  native        ⇝   4,141.24ms   @   7,244,205.16 op/s
  @arr/find     ⇝   3,780.68ms   @   7,935,083.01 op/s
  lodash.find   ⇝   3,881.48ms   @   7,729,008.23 op/s
  ramda.find    ⇝   3,982.42ms   @   7,533,100.81 op/s

Array<object>(5000)
  native        ⇝   46,390.04ms   @   3,233,452.46 op/s
  @arr/find     ⇝   44,107.26ms   @   3,400,800.78 op/s
  lodash.find   ⇝   44,357.61ms   @   3,381,606.90 op/s
  ramda.find    ⇝   44,896.28ms   @   3,341,034.35 op/s

Array<object>(10000)
  native        ⇝   150,708.27ms   @   1,990,600.80 op/s
  @arr/find     ⇝   147,405.44ms   @   2,035,203.10 op/s
  lodash.find   ⇝   147,642.71ms   @   2,031,932.36 op/s
  ramda.find    ⇝   148,599.63ms   @   2,018,847.60 op/s
```
</details>


## findIndex

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native             ⇝    2.48ms   @   1,211,764,781.91 op/s
  @arr/findIndex     ⇝    1.06ms   @   2,826,314,495.32 op/s
  lodash.findindex   ⇝    1.84ms   @   1,632,321,711.02 op/s
  ramda.findIndex    ⇝   41.77ms   @      71,813,539.88 op/s

Array<string>(500)
  native             ⇝    1.33ms   @   11,266,040,024.48 op/s
  @arr/findIndex     ⇝    0.55ms   @   27,352,147,964.18 op/s
  lodash.findindex   ⇝    0.69ms   @   21,661,619,509.32 op/s
  ramda.findIndex    ⇝   36.91ms   @      406,431,777.46 op/s

Array<string>(1000)
  native             ⇝    1.31ms   @   22,878,356,540.88 op/s
  @arr/findIndex     ⇝    0.51ms   @   58,307,451,303.56 op/s
  lodash.findindex   ⇝    0.66ms   @   45,424,468,950.10 op/s
  ramda.findIndex    ⇝   32.29ms   @      929,061,738.69 op/s

Array<string>(5000)
  native             ⇝    1.39ms   @   107,785,412,178.60 op/s
  @arr/findIndex     ⇝    0.59ms   @   253,941,596,818.62 op/s
  lodash.findindex   ⇝    0.69ms   @   217,842,459,238.05 op/s
  ramda.findIndex    ⇝   33.98ms   @     4,414,254,345.33 op/s

Array<string>(10000)
  native             ⇝    1.44ms   @   208,659,073,331.14 op/s
  @arr/findIndex     ⇝    0.58ms   @   512,833,662,401.60 op/s
  lodash.findindex   ⇝    0.76ms   @   396,018,169,313.61 op/s
  ramda.findIndex    ⇝   31.95ms   @     9,390,905,846.78 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native             ⇝   343.06ms   @    8,744,857.05 op/s
  @arr/findIndex     ⇝   301.25ms   @    9,958,444.94 op/s
  lodash.findindex   ⇝   287.99ms   @   10,417,112.36 op/s
  ramda.findIndex    ⇝   318.20ms   @    9,427,895.65 op/s

Array<number>(500)
  native             ⇝   1,626.82ms   @    9,220,456.26 op/s
  @arr/findIndex     ⇝   1,406.63ms   @   10,663,762.89 op/s
  lodash.findindex   ⇝   1,397.69ms   @   10,731,965.53 op/s
  ramda.findIndex    ⇝   1,492.11ms   @   10,052,909.80 op/s

Array<number>(1000)
  native             ⇝   3,257.34ms   @    9,209,971.20 op/s
  @arr/findIndex     ⇝   2,855.40ms   @   10,506,393.21 op/s
  lodash.findindex   ⇝   2,807.12ms   @   10,687,094.21 op/s
  ramda.findIndex    ⇝   2,847.85ms   @   10,534,253.45 op/s

Array<number>(5000)
  native             ⇝   16,258.23ms   @    9,226,094.22 op/s
  @arr/findIndex     ⇝   14,052.58ms   @   10,674,198.44 op/s
  lodash.findindex   ⇝   14,073.30ms   @   10,658,480.46 op/s
  ramda.findIndex    ⇝   14,080.21ms   @   10,653,253.29 op/s

Array<number>(10000)
  native             ⇝   32,426.24ms   @    9,251,767.60 op/s
  @arr/findIndex     ⇝   28,136.20ms   @   10,662,422.51 op/s
  lodash.findindex   ⇝   28,104.55ms   @   10,674,428.77 op/s
  ramda.findIndex    ⇝   28,118.35ms   @   10,669,188.66 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native             ⇝   188.84ms   @   15,886,277.47 op/s
  @arr/findIndex     ⇝   129.87ms   @   23,100,672.70 op/s
  lodash.findindex   ⇝   130.20ms   @   23,041,255.04 op/s
  ramda.findIndex    ⇝   173.78ms   @   17,262,956.72 op/s

Array<object>(500)
  native             ⇝   1,203.98ms   @   12,458,628.51 op/s
  @arr/findIndex     ⇝   1,011.32ms   @   14,832,085.38 op/s
  lodash.findindex   ⇝   1,015.98ms   @   14,764,092.51 op/s
  ramda.findIndex    ⇝   1,093.14ms   @   13,721,935.12 op/s

Array<object>(1000)
  native             ⇝   4,294.35ms   @   6,985,916.25 op/s
  @arr/findIndex     ⇝   3,953.35ms   @   7,588,499.93 op/s
  lodash.findindex   ⇝   3,895.20ms   @   7,701,780.01 op/s
  ramda.findIndex    ⇝   4,125.94ms   @   7,271,069.80 op/s

Array<object>(5000)
  native             ⇝   45,012.20ms   @   3,332,429.94 op/s
  @arr/findIndex     ⇝   43,856.45ms   @   3,420,249.38 op/s
  lodash.findindex   ⇝   43,433.11ms   @   3,453,586.38 op/s
  ramda.findIndex    ⇝   44,473.01ms   @   3,372,832.39 op/s

Array<object>(10000)
  native             ⇝   148,255.73ms   @   2,023,530.58 op/s
  @arr/findIndex     ⇝   145,271.82ms   @   2,065,094.18 op/s
  lodash.findindex   ⇝   144,900.21ms   @   2,070,390.31 op/s
  ramda.findIndex    ⇝   147,068.33ms   @   2,039,868.08 op/s
```
</details>


## flatten

<details>
<summary>:wavy_dash: ↝ Arrays</summary>

```
Array<array>(5)
  @arr/flatten         ⇝     159.87ms   @     938,242.57 op/s
  arr-flatten          ⇝     158.31ms   @     947,504.44 op/s
  array-flatten        ⇝     127.82ms   @   1,173,551.45 op/s
  flatten              ⇝   4,316.50ms   @      34,750.37 op/s
  flatten-array        ⇝     132.68ms   @   1,130,510.39 op/s
  lodash.flattendeep   ⇝     769.63ms   @     194,898.97 op/s
  ramda.flatten        ⇝     442.93ms   @     338,654.08 op/s

Array<array>(10)
  @arr/flatten         ⇝     272.60ms   @   1,100,529.58 op/s
  arr-flatten          ⇝     228.63ms   @   1,312,137.72 op/s
  array-flatten        ⇝     218.34ms   @   1,374,028.11 op/s
  flatten              ⇝   7,610.36ms   @      39,419.92 op/s
  flatten-array        ⇝     233.04ms   @   1,287,307.62 op/s
  lodash.flattendeep   ⇝   1,364.42ms   @     219,872.93 op/s
  ramda.flatten        ⇝     772.48ms   @     388,361.37 op/s

Array<array>(100)
  @arr/flatten         ⇝    2,278.78ms   @   1,316,494.57 op/s
  arr-flatten          ⇝    2,213.52ms   @   1,355,306.62 op/s
  array-flatten        ⇝    2,191.77ms   @   1,368,755.16 op/s
  flatten              ⇝   89,584.53ms   @      33,487.92 op/s
  flatten-array        ⇝    2,324.15ms   @   1,290,792.47 op/s
  lodash.flattendeep   ⇝   12,966.90ms   @     231,358.22 op/s
  ramda.flatten        ⇝    7,478.40ms   @     401,155.48 op/s

Array<array>(500)
  @arr/flatten         ⇝      11,684.47ms   @   1,283,755.06 op/s
  arr-flatten          ⇝      11,599.19ms   @   1,293,194.27 op/s
  array-flatten        ⇝      11,572.31ms   @   1,296,198.09 op/s
  flatten              ⇝   1,003,580.80ms   @      14,946.48 op/s
  flatten-array        ⇝      16,160.71ms   @     928,177.14 op/s
  lodash.flattendeep   ⇝      71,211.86ms   @     210,639.06 op/s
  ramda.flatten        ⇝      53,101.65ms   @     282,477.10 op/s
```
</details>


## forEach

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native              ⇝    61.93ms   @    48,440,482.87 op/s
  @arr/forEach        ⇝     5.98ms   @   501,535,199.24 op/s
  @arr/forEach.spec   ⇝   110.94ms   @    27,042,153.82 op/s
  fastjs.forEach      ⇝     8.87ms   @   338,396,038.87 op/s
  lodash.foreach      ⇝     9.73ms   @   308,347,902.77 op/s
  ramda.forEach       ⇝     9.62ms   @   311,808,337.65 op/s

Array<string>(500)
  native              ⇝   280.01ms   @    53,570,064.26 op/s
  @arr/forEach        ⇝    23.08ms   @   649,930,522.43 op/s
  @arr/forEach.spec   ⇝   473.28ms   @    31,693,953.98 op/s
  fastjs.forEach      ⇝    23.32ms   @   643,313,224.36 op/s
  lodash.foreach      ⇝    32.47ms   @   462,013,852.47 op/s
  ramda.forEach       ⇝    26.62ms   @   563,473,103.96 op/s

Array<string>(1000)
  native              ⇝   560.42ms   @    53,530,916.28 op/s
  @arr/forEach        ⇝    45.33ms   @   661,863,888.13 op/s
  @arr/forEach.spec   ⇝   935.37ms   @    32,073,023.00 op/s
  fastjs.forEach      ⇝    45.37ms   @   661,285,842.55 op/s
  lodash.foreach      ⇝    63.17ms   @   474,924,064.79 op/s
  ramda.forEach       ⇝    48.36ms   @   620,316,776.34 op/s

Array<string>(5000)
  native              ⇝   2,783.48ms   @    53,889,402.51 op/s
  @arr/forEach        ⇝     227.88ms   @   658,248,120.81 op/s
  @arr/forEach.spec   ⇝   4,620.83ms   @    32,461,715.80 op/s
  fastjs.forEach      ⇝     225.78ms   @   664,354,117.89 op/s
  lodash.foreach      ⇝     316.87ms   @   473,374,141.99 op/s
  ramda.forEach       ⇝     226.97ms   @   660,871,161.42 op/s

Array<string>(10000)
  native              ⇝   5,462.68ms   @    54,918,120.48 op/s
  @arr/forEach        ⇝     445.87ms   @   672,840,519.70 op/s
  @arr/forEach.spec   ⇝   9,281.61ms   @    32,321,972.56 op/s
  fastjs.forEach      ⇝     449.83ms   @   666,922,100.80 op/s
  lodash.foreach      ⇝     622.71ms   @   481,763,080.21 op/s
  ramda.forEach       ⇝     448.54ms   @   668,841,989.03 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native              ⇝   65.71ms   @    45,652,785.06 op/s
  @arr/forEach        ⇝    5.36ms   @   559,224,065.42 op/s
  @arr/forEach.spec   ⇝   99.86ms   @    30,041,670.20 op/s
  fastjs.forEach      ⇝    5.62ms   @   533,982,276.06 op/s
  lodash.foreach      ⇝    7.22ms   @   415,495,028.39 op/s
  ramda.forEach       ⇝    8.01ms   @   374,689,195.31 op/s

Array<number>(500)
  native              ⇝   281.20ms   @    53,342,954.60 op/s
  @arr/forEach        ⇝    22.99ms   @   652,598,130.20 op/s
  @arr/forEach.spec   ⇝   468.89ms   @    31,990,404.18 op/s
  fastjs.forEach      ⇝    23.18ms   @   647,060,754.56 op/s
  lodash.foreach      ⇝    32.02ms   @   468,493,777.82 op/s
  ramda.forEach       ⇝    26.39ms   @   568,446,016.39 op/s

Array<number>(1000)
  native              ⇝   549.22ms   @    54,622,720.57 op/s
  @arr/forEach        ⇝    49.19ms   @   609,897,068.08 op/s
  @arr/forEach.spec   ⇝   938.14ms   @    31,978,114.52 op/s
  fastjs.forEach      ⇝    45.66ms   @   657,025,992.87 op/s
  lodash.foreach      ⇝    63.11ms   @   475,382,273.51 op/s
  ramda.forEach       ⇝    49.02ms   @   611,953,533.14 op/s

Array<number>(5000)
  native              ⇝   2,721.28ms   @    55,121,072.87 op/s
  @arr/forEach        ⇝     227.48ms   @   659,392,851.37 op/s
  @arr/forEach.spec   ⇝   4,651.54ms   @    32,247,413.50 op/s
  fastjs.forEach      ⇝     222.91ms   @   672,924,490.58 op/s
  lodash.foreach      ⇝     313.20ms   @   478,920,462.70 op/s
  ramda.forEach       ⇝     226.43ms   @   662,446,341.74 op/s

Array<number>(10000)
  native              ⇝   5,441.35ms   @    55,133,365.13 op/s
  @arr/forEach        ⇝     450.04ms   @   666,613,786.42 op/s
  @arr/forEach.spec   ⇝   9,299.29ms   @    32,260,522.65 op/s
  fastjs.forEach      ⇝     454.29ms   @   660,375,474.97 op/s
  lodash.foreach      ⇝     623.84ms   @   480,890,092.17 op/s
  ramda.forEach       ⇝     450.82ms   @   665,452,489.45 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native              ⇝    56.24ms   @    53,342,327.09 op/s
  @arr/forEach        ⇝     5.33ms   @   562,782,833.55 op/s
  @arr/forEach.spec   ⇝   105.68ms   @    28,386,275.71 op/s
  fastjs.forEach      ⇝     5.20ms   @   577,186,695.85 op/s
  lodash.foreach      ⇝     7.21ms   @   415,840,472.51 op/s
  ramda.forEach       ⇝     8.05ms   @   372,495,480.08 op/s

Array<object>(500)
  native              ⇝   285.01ms   @    52,629,144.16 op/s
  @arr/forEach        ⇝    23.05ms   @   650,650,485.65 op/s
  @arr/forEach.spec   ⇝   468.82ms   @    31,994,979.57 op/s
  fastjs.forEach      ⇝    23.14ms   @   648,122,471.30 op/s
  lodash.foreach      ⇝    32.28ms   @   464,736,952.84 op/s
  ramda.forEach       ⇝    25.95ms   @   577,999,801.63 op/s

Array<object>(1000)
  native              ⇝   555.98ms   @    53,959,163.51 op/s
  @arr/forEach        ⇝    45.07ms   @   665,694,648.93 op/s
  @arr/forEach.spec   ⇝   937.75ms   @    31,991,303.79 op/s
  fastjs.forEach      ⇝    45.27ms   @   662,698,940.84 op/s
  lodash.foreach      ⇝    63.38ms   @   473,344,436.42 op/s
  ramda.forEach       ⇝    48.15ms   @   622,997,931.25 op/s

Array<object>(5000)
  native              ⇝   2,736.81ms   @    54,808,362.11 op/s
  @arr/forEach        ⇝     223.43ms   @   671,336,558.36 op/s
  @arr/forEach.spec   ⇝   4,640.48ms   @    32,324,210.68 op/s
  fastjs.forEach      ⇝     223.63ms   @   670,740,350.05 op/s
  lodash.foreach      ⇝     311.93ms   @   480,872,750.96 op/s
  ramda.forEach       ⇝     226.68ms   @   661,716,991.22 op/s

Array<object>(10000)
  native              ⇝   5,431.92ms   @    55,229,131.55 op/s
  @arr/forEach        ⇝     451.00ms   @   665,191,077.73 op/s
  @arr/forEach.spec   ⇝   9,281.87ms   @    32,321,067.34 op/s
  fastjs.forEach      ⇝     453.40ms   @   661,672,173.95 op/s
  lodash.foreach      ⇝     630.41ms   @   475,880,486.13 op/s
  ramda.forEach       ⇝     454.50ms   @   660,065,084.40 op/s
```
</details>


## includes

<details>
<summary>:no_entry_sign: ↝ Strings (`true`)</summary>

```
Array<string>(100)
  native          ⇝   10.23ms   @   293,166,236.40 op/s
  @arr/includes   ⇝   17.95ms   @   167,141,487.78 op/s

Array<string>(500)
  native          ⇝   48.11ms   @   311,791,648.35 op/s
  @arr/includes   ⇝   63.54ms   @   236,073,437.73 op/s

Array<string>(1000)
  native          ⇝   166.76ms   @   179,902,869.36 op/s
  @arr/includes   ⇝   195.24ms   @   153,658,229.04 op/s

Array<string>(5000)
  native          ⇝     984.52ms   @   152,358,611.09 op/s
  @arr/includes   ⇝   1,119.56ms   @   133,981,199.84 op/s

Array<string>(10000)
  native          ⇝   1,832.39ms   @   163,720,177.35 op/s
  @arr/includes   ⇝   2,099.99ms   @   142,857,771.91 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Strings (`false`)</summary>

```
Array<string>(100)
  native          ⇝   11.90ms   @   252,194,088.57 op/s
  @arr/includes   ⇝   15.67ms   @   191,439,269.78 op/s

Array<string>(500)
  native          ⇝   52.12ms   @   287,774,554.19 op/s
  @arr/includes   ⇝   69.47ms   @   215,931,734.13 op/s

Array<string>(1000)
  native          ⇝   101.71ms   @   294,960,299.47 op/s
  @arr/includes   ⇝   134.52ms   @   223,014,583.12 op/s

Array<string>(5000)
  native          ⇝   514.43ms   @   291,582,700.24 op/s
  @arr/includes   ⇝   677.83ms   @   221,295,017.41 op/s

Array<string>(10000)
  native          ⇝   1,009.06ms   @   297,306,648.53 op/s
  @arr/includes   ⇝   1,345.66ms   @   222,939,162.20 op/s
```
</details>

<details>
<summary>:mag: ↝ Numbers (`true`)</summary>

```
Array<number>(100)
  native          ⇝   6.07ms   @   494,352,516.85 op/s
  @arr/includes   ⇝   6.05ms   @   495,937,199.80 op/s

Array<number>(500)
  native          ⇝   22.85ms   @   656,371,063.54 op/s
  @arr/includes   ⇝   22.09ms   @   678,929,952.08 op/s

Array<number>(1000)
  native          ⇝   45.09ms   @   665,283,188.10 op/s
  @arr/includes   ⇝   43.54ms   @   688,995,463.22 op/s

Array<number>(5000)
  native          ⇝   222.87ms   @   673,026,038.86 op/s
  @arr/includes   ⇝   214.54ms   @   699,180,857.42 op/s

Array<number>(10000)
  native          ⇝   453.39ms   @   661,675,639.96 op/s
  @arr/includes   ⇝   437.49ms   @   685,735,622.67 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Numbers (`false`)</summary>

```
Array<number>(100)
  native          ⇝    6.88ms   @   435,838,601.41 op/s
  @arr/includes   ⇝   18.43ms   @   162,795,339.23 op/s

Array<number>(500)
  native          ⇝   31.44ms   @   477,046,342.76 op/s
  @arr/includes   ⇝   85.16ms   @   176,138,240.24 op/s

Array<number>(1000)
  native          ⇝    57.66ms   @   520,319,617.08 op/s
  @arr/includes   ⇝   169.84ms   @   176,633,160.36 op/s

Array<number>(5000)
  native          ⇝   275.56ms   @   544,342,742.23 op/s
  @arr/includes   ⇝   863.61ms   @   173,688,826.81 op/s

Array<number>(10000)
  native          ⇝     571.23ms   @   525,180,270.49 op/s
  @arr/includes   ⇝   1,708.78ms   @   175,563,381.19 op/s
```
</details>


## map

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native          ⇝   329.10ms   @     9,115,759.62 op/s
  @arr/map        ⇝    12.21ms   @   245,740,638.94 op/s
  @arr/map.spec   ⇝   486.00ms   @     6,172,833.22 op/s
  arr-map         ⇝    14.33ms   @   209,328,150.83 op/s
  array-map       ⇝   321.75ms   @     9,323,934.18 op/s
  fastjs.map      ⇝    12.63ms   @   237,522,206.35 op/s
  lodash.map      ⇝    13.06ms   @   229,727,047.51 op/s
  ramda.map       ⇝    47.51ms   @    63,146,016.64 op/s

Array<string>(500)
  native          ⇝   1,645.68ms   @     9,114,777.52 op/s
  @arr/map        ⇝      52.99ms   @   283,094,587.71 op/s
  @arr/map.spec   ⇝   2,250.29ms   @     6,665,820.80 op/s
  arr-map         ⇝      54.32ms   @   276,143,809.29 op/s
  array-map       ⇝   1,632.97ms   @     9,185,734.56 op/s
  fastjs.map      ⇝      54.11ms   @   277,204,360.03 op/s
  lodash.map      ⇝      58.97ms   @   254,384,632.89 op/s
  ramda.map       ⇝     166.88ms   @    89,883,110.61 op/s

Array<string>(1000)
  native          ⇝   3,254.22ms   @     9,218,799.99 op/s
  @arr/map        ⇝     104.96ms   @   285,816,463.74 op/s
  @arr/map.spec   ⇝   4,409.21ms   @     6,803,946.74 op/s
  arr-map         ⇝     106.35ms   @   282,088,998.80 op/s
  array-map       ⇝   3,248.89ms   @     9,233,934.81 op/s
  fastjs.map      ⇝     103.75ms   @   289,167,688.74 op/s
  lodash.map      ⇝     111.77ms   @   268,417,615.61 op/s
  ramda.map       ⇝     321.30ms   @    93,370,040.83 op/s

Array<string>(5000)
  native          ⇝   16,295.78ms   @     9,204,837.71 op/s
  @arr/map        ⇝      512.21ms   @   292,849,823.23 op/s
  @arr/map.spec   ⇝   21,942.57ms   @     6,836,028.25 op/s
  arr-map         ⇝      518.79ms   @   289,135,006.17 op/s
  array-map       ⇝   16,307.62ms   @     9,198,155.21 op/s
  fastjs.map      ⇝      516.52ms   @   290,402,580.37 op/s
  lodash.map      ⇝      556.48ms   @   269,553,767.70 op/s
  ramda.map       ⇝    1,513.40ms   @    99,114,679.47 op/s

Array<string>(10000)
  native          ⇝   32,583.24ms   @     9,207,187.07 op/s
  @arr/map        ⇝    1,022.29ms   @   293,457,555.72 op/s
  @arr/map.spec   ⇝   43,796.35ms   @     6,849,886.65 op/s
  arr-map         ⇝    1,022.59ms   @   293,372,249.44 op/s
  array-map       ⇝   32,552.30ms   @     9,215,939.84 op/s
  fastjs.map      ⇝    1,024.63ms   @   292,788,862.41 op/s
  lodash.map      ⇝    1,112.77ms   @   269,597,701.73 op/s
  ramda.map       ⇝    3,022.78ms   @    99,246,311.30 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native          ⇝   326.54ms   @     9,187,303.05 op/s
  @arr/map        ⇝     9.45ms   @   317,330,698.78 op/s
  @arr/map.spec   ⇝   472.39ms   @     6,350,719.80 op/s
  arr-map         ⇝    11.08ms   @   270,875,909.76 op/s
  array-map       ⇝   322.11ms   @     9,313,668.68 op/s
  fastjs.map      ⇝     9.59ms   @   312,687,221.47 op/s
  lodash.map      ⇝    10.97ms   @   273,408,681.73 op/s
  ramda.map       ⇝    44.80ms   @    66,963,862.71 op/s

Array<number>(500)
  native          ⇝   1,625.32ms   @     9,228,967.72 op/s
  @arr/map        ⇝      48.41ms   @   309,838,135.39 op/s
  @arr/map.spec   ⇝   2,198.05ms   @     6,824,244.60 op/s
  arr-map         ⇝      50.37ms   @   297,775,007.28 op/s
  array-map       ⇝   1,613.93ms   @     9,294,105.36 op/s
  fastjs.map      ⇝      48.41ms   @   309,830,404.41 op/s
  lodash.map      ⇝      52.48ms   @   285,809,615.47 op/s
  ramda.map       ⇝     162.59ms   @    92,258,504.61 op/s

Array<number>(1000)
  native          ⇝   3,206.77ms   @     9,355,201.83 op/s
  @arr/map        ⇝      94.28ms   @   318,214,759.20 op/s
  @arr/map.spec   ⇝   4,362.99ms   @     6,876,021.81 op/s
  arr-map         ⇝      96.29ms   @   311,559,114.19 op/s
  array-map       ⇝   3,203.83ms   @     9,363,787.27 op/s
  fastjs.map      ⇝      94.31ms   @   318,093,859.45 op/s
  lodash.map      ⇝     103.35ms   @   290,274,489.65 op/s
  ramda.map       ⇝     307.16ms   @    97,669,166.68 op/s

Array<number>(5000)
  native          ⇝   16,194.43ms   @     9,262,444.24 op/s
  @arr/map        ⇝      468.88ms   @   319,912,132.85 op/s
  @arr/map.spec   ⇝   21,614.64ms   @     6,939,740.06 op/s
  arr-map         ⇝      469.89ms   @   319,220,805.68 op/s
  array-map       ⇝   16,046.00ms   @     9,348,124.06 op/s
  fastjs.map      ⇝      468.99ms   @   319,835,879.67 op/s
  lodash.map      ⇝      512.37ms   @   292,755,493.63 op/s
  ramda.map       ⇝    1,472.49ms   @   101,868,476.49 op/s

Array<number>(10000)
  native          ⇝   32,349.41ms   @     9,273,739.52 op/s
  @arr/map        ⇝      936.24ms   @   320,431,256.38 op/s
  @arr/map.spec   ⇝   43,238.52ms   @     6,938,258.02 op/s
  arr-map         ⇝      932.13ms   @   321,842,138.23 op/s
  array-map       ⇝   32,260.26ms   @     9,299,367.55 op/s
  fastjs.map      ⇝      941.10ms   @   318,776,735.84 op/s
  lodash.map      ⇝    1,031.09ms   @   290,954,936.38 op/s
  ramda.map       ⇝    2,917.02ms   @   102,844,575.12 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native          ⇝   333.77ms   @     8,988,292.83 op/s
  @arr/map        ⇝    11.03ms   @   272,108,275.87 op/s
  @arr/map.spec   ⇝   479.68ms   @     6,254,173.04 op/s
  arr-map         ⇝    13.34ms   @   224,946,372.78 op/s
  array-map       ⇝   332.72ms   @     9,016,492.37 op/s
  fastjs.map      ⇝    11.13ms   @   269,577,722.67 op/s
  lodash.map      ⇝    11.39ms   @   263,498,709.52 op/s
  ramda.map       ⇝    45.78ms   @    65,531,903.13 op/s

Array<object>(500)
  native          ⇝   1,628.00ms   @     9,213,771.73 op/s
  @arr/map        ⇝      52.58ms   @   285,300,730.08 op/s
  @arr/map.spec   ⇝   2,227.37ms   @     6,734,395.12 op/s
  arr-map         ⇝      54.53ms   @   275,101,362.47 op/s
  array-map       ⇝   1,629.01ms   @     9,208,053.87 op/s
  fastjs.map      ⇝      52.25ms   @   287,083,229.79 op/s
  lodash.map      ⇝      56.73ms   @   264,397,520.19 op/s
  ramda.map       ⇝     166.12ms   @    90,296,060.56 op/s

Array<object>(1000)
  native          ⇝   3,273.46ms   @     9,164,613.80 op/s
  @arr/map        ⇝     103.76ms   @   289,115,528.91 op/s
  @arr/map.spec   ⇝   4,448.58ms   @     6,743,720.03 op/s
  arr-map         ⇝     105.39ms   @   284,661,809.67 op/s
  array-map       ⇝   3,272.14ms   @     9,168,322.76 op/s
  fastjs.map      ⇝     102.92ms   @   291,482,802.55 op/s
  lodash.map      ⇝     112.65ms   @   266,314,192.14 op/s
  ramda.map       ⇝     319.37ms   @    93,936,135.33 op/s

Array<object>(5000)
  native          ⇝   17,254.61ms   @     8,693,329.02 op/s
  @arr/map        ⇝      544.31ms   @   275,577,372.07 op/s
  @arr/map.spec   ⇝   22,588.48ms   @     6,640,553.00 op/s
  arr-map         ⇝      549.93ms   @   272,762,470.49 op/s
  array-map       ⇝   17,224.98ms   @     8,708,283.14 op/s
  fastjs.map      ⇝      545.00ms   @   275,229,108.32 op/s
  lodash.map      ⇝      595.23ms   @   252,001,799.82 op/s
  ramda.map       ⇝    1,566.92ms   @    95,728,954.36 op/s

Array<object>(10000)
  native          ⇝   34,365.57ms   @     8,729,668.00 op/s
  @arr/map        ⇝    1,093.38ms   @   274,378,517.07 op/s
  @arr/map.spec   ⇝   44,985.69ms   @     6,668,787.79 op/s
  arr-map         ⇝    1,098.47ms   @   273,107,778.65 op/s
  array-map       ⇝   34,300.57ms   @     8,746,211.05 op/s
  fastjs.map      ⇝    1,084.82ms   @   276,542,508.23 op/s
  lodash.map      ⇝    1,177.47ms   @   254,783,692.49 op/s
  ramda.map       ⇝    3,075.81ms   @    97,535,364.79 op/s
```
</details>


## reduce

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native          ⇝    57.22ms   @    52,430,001.23 op/s
  @arr/reduce     ⇝     6.07ms   @   494,578,512.77 op/s
  arr-reduce      ⇝     7.26ms   @   412,940,111.57 op/s
  fastjs.reduce   ⇝     6.64ms   @   451,562,337.95 op/s
  lodash.reduce   ⇝     7.83ms   @   383,234,022.49 op/s
  ramda.reduce    ⇝   200.92ms   @    14,931,587.87 op/s

Array<string>(500)
  native          ⇝   276.39ms   @    54,270,652.43 op/s
  @arr/reduce     ⇝    23.11ms   @   648,940,412.26 op/s
  arr-reduce      ⇝    27.45ms   @   546,350,819.07 op/s
  fastjs.reduce   ⇝    24.43ms   @   614,015,342.28 op/s
  lodash.reduce   ⇝    35.79ms   @   419,081,484.02 op/s
  ramda.reduce    ⇝   956.00ms   @    15,690,443.84 op/s

Array<string>(1000)
  native          ⇝     531.18ms   @    56,477,795.60 op/s
  @arr/reduce     ⇝      45.42ms   @   660,556,431.60 op/s
  arr-reduce      ⇝      54.00ms   @   555,585,886.43 op/s
  fastjs.reduce   ⇝      49.52ms   @   605,788,270.58 op/s
  lodash.reduce   ⇝      54.98ms   @   545,634,227.77 op/s
  ramda.reduce    ⇝   1,922.96ms   @    15,600,917.43 op/s

Array<string>(5000)
  native          ⇝   2,661.88ms   @    56,351,076.31 op/s
  @arr/reduce     ⇝     228.16ms   @   657,424,525.48 op/s
  arr-reduce      ⇝     268.59ms   @   558,469,920.49 op/s
  fastjs.reduce   ⇝     227.99ms   @   657,912,382.17 op/s
  lodash.reduce   ⇝     272.36ms   @   550,743,764.40 op/s
  ramda.reduce    ⇝   9,582.54ms   @    15,653,467.15 op/s

Array<string>(10000)
  native          ⇝    5,290.38ms   @    56,706,678.63 op/s
  @arr/reduce     ⇝      455.88ms   @   658,065,966.76 op/s
  arr-reduce      ⇝      536.73ms   @   558,937,656.26 op/s
  fastjs.reduce   ⇝      450.56ms   @   665,844,851.36 op/s
  lodash.reduce   ⇝      534.37ms   @   561,408,303.66 op/s
  ramda.reduce    ⇝   19,155.89ms   @    15,660,979.51 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native          ⇝    58.27ms   @    51,485,160.68 op/s
  @arr/reduce     ⇝     5.42ms   @   553,633,115.82 op/s
  arr-reduce      ⇝     6.14ms   @   488,325,838.35 op/s
  fastjs.reduce   ⇝     5.70ms   @   526,303,047.40 op/s
  lodash.reduce   ⇝     6.74ms   @   445,220,645.42 op/s
  ramda.reduce    ⇝   199.29ms   @    15,053,558.15 op/s

Array<number>(500)
  native          ⇝   272.89ms   @    54,967,557.82 op/s
  @arr/reduce     ⇝    23.13ms   @   648,570,792.11 op/s
  arr-reduce      ⇝    27.51ms   @   545,228,919.81 op/s
  fastjs.reduce   ⇝    23.15ms   @   647,930,671.42 op/s
  lodash.reduce   ⇝    30.73ms   @   488,119,862.19 op/s
  ramda.reduce    ⇝   958.86ms   @    15,643,638.27 op/s

Array<number>(1000)
  native          ⇝     531.16ms   @    56,480,414.82 op/s
  @arr/reduce     ⇝      45.63ms   @   657,414,953.68 op/s
  arr-reduce      ⇝      54.91ms   @   546,350,112.63 op/s
  fastjs.reduce   ⇝      45.32ms   @   661,903,287.02 op/s
  lodash.reduce   ⇝      57.04ms   @   525,912,718.89 op/s
  ramda.reduce    ⇝   1,913.86ms   @    15,675,157.33 op/s

Array<number>(5000)
  native          ⇝   2,631.48ms   @    57,002,113.30 op/s
  @arr/reduce     ⇝     230.72ms   @   650,126,125.99 op/s
  arr-reduce      ⇝     268.24ms   @   559,196,435.91 op/s
  fastjs.reduce   ⇝     231.29ms   @   648,547,968.76 op/s
  lodash.reduce   ⇝     273.61ms   @   548,219,437.36 op/s
  ramda.reduce    ⇝   9,561.54ms   @    15,687,853.65 op/s

Array<number>(10000)
  native          ⇝    5,275.75ms   @    56,863,972.81 op/s
  @arr/reduce     ⇝      449.62ms   @   667,228,430.01 op/s
  arr-reduce      ⇝      538.46ms   @   557,145,166.03 op/s
  fastjs.reduce   ⇝      457.19ms   @   656,188,230.13 op/s
  lodash.reduce   ⇝      543.41ms   @   552,073,396.57 op/s
  ramda.reduce    ⇝   19,121.49ms   @    15,689,155.20 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native          ⇝    60.37ms   @    49,694,070.05 op/s
  @arr/reduce     ⇝     5.35ms   @   560,314,388.67 op/s
  arr-reduce      ⇝     6.10ms   @   491,605,508.21 op/s
  fastjs.reduce   ⇝     5.37ms   @   558,485,744.09 op/s
  lodash.reduce   ⇝     9.37ms   @   320,010,752.36 op/s
  ramda.reduce    ⇝   199.40ms   @    15,045,325.93 op/s

Array<object>(500)
  native          ⇝   271.73ms   @    55,202,198.31 op/s
  @arr/reduce     ⇝    23.12ms   @   648,732,415.78 op/s
  arr-reduce      ⇝    27.45ms   @   546,493,937.18 op/s
  fastjs.reduce   ⇝    24.20ms   @   619,863,552.33 op/s
  lodash.reduce   ⇝    29.05ms   @   516,300,039.71 op/s
  ramda.reduce    ⇝   966.84ms   @    15,514,498.45 op/s

Array<object>(1000)
  native          ⇝     534.25ms   @    56,152,989.25 op/s
  @arr/reduce     ⇝      45.32ms   @   661,991,520.73 op/s
  arr-reduce      ⇝      54.14ms   @   554,169,485.31 op/s
  fastjs.reduce   ⇝      45.62ms   @   657,579,214.18 op/s
  lodash.reduce   ⇝      55.86ms   @   537,082,234.16 op/s
  ramda.reduce    ⇝   1,910.29ms   @    15,704,433.33 op/s

Array<object>(5000)
  native          ⇝   2,644.12ms   @    56,729,726.42 op/s
  @arr/reduce     ⇝     223.12ms   @   672,271,583.09 op/s
  arr-reduce      ⇝     268.39ms   @   558,881,215.49 op/s
  fastjs.reduce   ⇝     224.21ms   @   669,029,139.39 op/s
  lodash.reduce   ⇝     269.27ms   @   557,071,623.92 op/s
  ramda.reduce    ⇝   9,652.43ms   @    15,540,134.01 op/s

Array<object>(10000)
  native          ⇝    5,265.70ms   @    56,972,510.77 op/s
  @arr/reduce     ⇝      465.58ms   @   644,358,291.02 op/s
  arr-reduce      ⇝      534.85ms   @   560,899,794.25 op/s
  fastjs.reduce   ⇝      445.63ms   @   673,206,949.98 op/s
  lodash.reduce   ⇝      537.26ms   @   558,391,923.88 op/s
  ramda.reduce    ⇝   19,220.20ms   @    15,608,580.87 op/s
```
</details>


## reduceRight

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native               ⇝   29.69ms   @   101,028,095.58 op/s
  @arr/reduceRight     ⇝    7.01ms   @   427,860,263.69 op/s
  fastjs.reduceRight   ⇝    9.32ms   @   321,715,990.20 op/s
  lodash.reduceright   ⇝    8.96ms   @   334,804,015.77 op/s
  ramda.reduceRight    ⇝    8.19ms   @   366,153,010.95 op/s

Array<string>(500)
  native               ⇝   139.54ms   @   107,499,555.26 op/s
  @arr/reduceRight     ⇝    28.22ms   @   531,629,020.48 op/s
  fastjs.reduceRight   ⇝    23.87ms   @   628,355,312.64 op/s
  lodash.reduceright   ⇝    30.92ms   @   485,171,524.79 op/s
  ramda.reduceRight    ⇝    23.96ms   @   626,088,376.38 op/s

Array<string>(1000)
  native               ⇝   269.29ms   @   111,405,152.22 op/s
  @arr/reduceRight     ⇝    53.94ms   @   556,150,925.42 op/s
  fastjs.reduceRight   ⇝    45.29ms   @   662,332,290.56 op/s
  lodash.reduceright   ⇝    54.97ms   @   545,780,008.96 op/s
  ramda.reduceRight    ⇝    51.63ms   @   581,085,492.88 op/s

Array<string>(5000)
  native               ⇝   1,349.14ms   @   111,181,935.98 op/s
  @arr/reduceRight     ⇝     267.24ms   @   561,296,220.97 op/s
  fastjs.reduceRight   ⇝     223.79ms   @   670,256,366.13 op/s
  lodash.reduceright   ⇝     268.29ms   @   559,097,562.86 op/s
  ramda.reduceRight    ⇝     224.42ms   @   668,378,181.19 op/s

Array<string>(10000)
  native               ⇝   2,876.62ms   @   104,289,043.52 op/s
  @arr/reduceRight     ⇝     564.36ms   @   531,571,283.68 op/s
  fastjs.reduceRight   ⇝     477.84ms   @   627,830,403.34 op/s
  lodash.reduceright   ⇝     562.81ms   @   533,038,243.36 op/s
  ramda.reduceRight    ⇝     465.28ms   @   644,768,135.67 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native               ⇝   34.95ms   @    85,827,899.78 op/s
  @arr/reduceRight     ⇝    6.49ms   @   461,962,258.61 op/s
  fastjs.reduceRight   ⇝    5.73ms   @   523,729,850.37 op/s
  lodash.reduceright   ⇝    8.31ms   @   361,049,411.78 op/s
  ramda.reduceRight    ⇝    7.34ms   @   408,841,218.61 op/s

Array<number>(500)
  native               ⇝   145.92ms   @   102,799,048.82 op/s
  @arr/reduceRight     ⇝    28.93ms   @   518,411,398.08 op/s
  fastjs.reduceRight   ⇝    24.28ms   @   617,751,865.88 op/s
  lodash.reduceright   ⇝    31.46ms   @   476,848,709.07 op/s
  ramda.reduceRight    ⇝    25.02ms   @   599,434,972.59 op/s

Array<number>(1000)
  native               ⇝   286.84ms   @   104,587,772.26 op/s
  @arr/reduceRight     ⇝    57.15ms   @   524,942,438.75 op/s
  fastjs.reduceRight   ⇝    48.31ms   @   621,053,489.72 op/s
  lodash.reduceright   ⇝    57.55ms   @   521,292,351.16 op/s
  ramda.reduceRight    ⇝    49.44ms   @   606,749,886.19 op/s

Array<number>(5000)
  native               ⇝   1,413.66ms   @   106,107,531.62 op/s
  @arr/reduceRight     ⇝     288.37ms   @   520,164,371.25 op/s
  fastjs.reduceRight   ⇝     234.24ms   @   640,360,935.43 op/s
  lodash.reduceright   ⇝     291.49ms   @   514,596,486.46 op/s
  ramda.reduceRight    ⇝     241.16ms   @   622,001,243.89 op/s

Array<number>(10000)
  native               ⇝   2,794.02ms   @   107,372,182.46 op/s
  @arr/reduceRight     ⇝     538.08ms   @   557,533,859.14 op/s
  fastjs.reduceRight   ⇝     456.32ms   @   657,435,081.59 op/s
  lodash.reduceright   ⇝     552.93ms   @   542,566,166.84 op/s
  ramda.reduceRight    ⇝     454.63ms   @   659,880,096.09 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native               ⇝   28.32ms   @   105,918,971.00 op/s
  @arr/reduceRight     ⇝    6.40ms   @   468,679,551.60 op/s
  fastjs.reduceRight   ⇝    8.07ms   @   371,785,864.73 op/s
  lodash.reduceright   ⇝    7.73ms   @   388,132,461.85 op/s
  ramda.reduceRight    ⇝    6.74ms   @   444,999,804.20 op/s

Array<object>(500)
  native               ⇝   142.70ms   @   105,114,559.10 op/s
  @arr/reduceRight     ⇝    27.60ms   @   543,549,887.35 op/s
  fastjs.reduceRight   ⇝    23.03ms   @   651,444,069.10 op/s
  lodash.reduceright   ⇝    28.35ms   @   529,021,521.09 op/s
  ramda.reduceRight    ⇝    24.19ms   @   620,005,801.60 op/s

Array<object>(1000)
  native               ⇝   277.41ms   @   108,144,947.15 op/s
  @arr/reduceRight     ⇝    54.13ms   @   554,172,781.58 op/s
  fastjs.reduceRight   ⇝    45.36ms   @   661,321,790.48 op/s
  lodash.reduceright   ⇝    55.76ms   @   537,990,784.11 op/s
  ramda.reduceRight    ⇝    46.14ms   @   650,199,257.90 op/s

Array<object>(5000)
  native               ⇝   1,401.93ms   @   106,995,305.73 op/s
  @arr/reduceRight     ⇝     275.07ms   @   545,311,265.42 op/s
  fastjs.reduceRight   ⇝     235.41ms   @   637,186,091.07 op/s
  lodash.reduceright   ⇝     280.24ms   @   535,258,816.78 op/s
  ramda.reduceRight    ⇝     236.38ms   @   634,566,432.70 op/s

Array<object>(10000)
  native               ⇝   2,846.28ms   @   105,400,859.46 op/s
  @arr/reduceRight     ⇝     562.03ms   @   533,780,044.13 op/s
  fastjs.reduceRight   ⇝     466.17ms   @   643,543,859.78 op/s
  lodash.reduceright   ⇝     567.29ms   @   528,833,085.99 op/s
  ramda.reduceRight    ⇝     470.63ms   @   637,448,652.40 op/s
```
</details>


## reverse

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native            ⇝   35.06ms   @    85,564,738.11 op/s
  @arr/reverse      ⇝    7.49ms   @   400,583,035.26 op/s
  compute-reverse   ⇝    8.85ms   @   338,947,777.30 op/s
  lodash.reverse    ⇝   31.32ms   @    95,797,653.90 op/s
  ramda.reverse     ⇝   33.38ms   @    89,869,628.83 op/s

Array<string>(500)
  native            ⇝   147.23ms   @   101,883,551.09 op/s
  @arr/reverse      ⇝    27.91ms   @   537,505,407.30 op/s
  compute-reverse   ⇝    28.34ms   @   529,257,663.55 op/s
  lodash.reverse    ⇝   151.65ms   @    98,911,038.92 op/s
  ramda.reverse     ⇝    92.39ms   @   162,353,820.41 op/s

Array<string>(1000)
  native            ⇝   313.06ms   @    95,829,276.08 op/s
  @arr/reverse      ⇝    56.03ms   @   535,452,248.77 op/s
  compute-reverse   ⇝    56.34ms   @   532,524,057.71 op/s
  lodash.reverse    ⇝   314.50ms   @    95,388,301.53 op/s
  ramda.reverse     ⇝   172.32ms   @   174,094,002.34 op/s

Array<string>(5000)
  native            ⇝   1,470.12ms   @   102,032,623.18 op/s
  @arr/reverse      ⇝     278.93ms   @   537,762,025.89 op/s
  compute-reverse   ⇝     288.25ms   @   520,374,229.56 op/s
  lodash.reverse    ⇝   1,529.93ms   @    98,043,987.87 op/s
  ramda.reverse     ⇝     844.47ms   @   177,627,195.39 op/s

Array<string>(10000)
  native            ⇝   2,960.99ms   @   101,317,578.75 op/s
  @arr/reverse      ⇝     540.12ms   @   555,432,715.44 op/s
  compute-reverse   ⇝     568.63ms   @   527,583,197.03 op/s
  lodash.reverse    ⇝   2,975.22ms   @   100,832,747.82 op/s
  ramda.reverse     ⇝   1,612.75ms   @   186,017,428.77 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native            ⇝   30.79ms   @    97,441,396.80 op/s
  @arr/reverse      ⇝    5.98ms   @   501,827,824.21 op/s
  compute-reverse   ⇝    7.26ms   @   413,058,201.69 op/s
  lodash.reverse    ⇝   33.67ms   @    89,108,912.66 op/s
  ramda.reverse     ⇝   24.78ms   @   121,051,472.46 op/s

Array<number>(500)
  native            ⇝   149.90ms   @   100,065,655.75 op/s
  @arr/reverse      ⇝    24.47ms   @   613,060,694.07 op/s
  compute-reverse   ⇝    24.88ms   @   602,906,733.95 op/s
  lodash.reverse    ⇝   148.33ms   @   101,124,415.86 op/s
  ramda.reverse     ⇝    80.64ms   @   186,020,975.13 op/s

Array<number>(1000)
  native            ⇝   302.70ms   @    99,107,984.86 op/s
  @arr/reverse      ⇝    45.42ms   @   660,529,103.63 op/s
  compute-reverse   ⇝    45.95ms   @   652,829,254.27 op/s
  lodash.reverse    ⇝   294.76ms   @   101,776,409.87 op/s
  ramda.reverse     ⇝   143.68ms   @   208,799,885.08 op/s

Array<number>(5000)
  native            ⇝   1,450.16ms   @   103,437,020.42 op/s
  @arr/reverse      ⇝     233.06ms   @   643,615,403.63 op/s
  compute-reverse   ⇝     237.17ms   @   632,446,112.21 op/s
  lodash.reverse    ⇝   1,469.81ms   @   102,053,663.01 op/s
  ramda.reverse     ⇝     715.91ms   @   209,524,822.13 op/s

Array<number>(10000)
  native            ⇝   2,891.15ms   @   103,764,894.65 op/s
  @arr/reverse      ⇝     450.71ms   @   665,616,573.69 op/s
  compute-reverse   ⇝     456.62ms   @   657,007,265.55 op/s
  lodash.reverse    ⇝   2,831.14ms   @   105,964,350.44 op/s
  ramda.reverse     ⇝   1,382.85ms   @   216,943,462.77 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native            ⇝   32.95ms   @    91,047,604.66 op/s
  @arr/reverse      ⇝    6.50ms   @   461,410,757.24 op/s
  compute-reverse   ⇝    7.25ms   @   413,900,203.69 op/s
  lodash.reverse    ⇝   30.42ms   @    98,630,495.84 op/s
  ramda.reverse     ⇝   25.25ms   @   118,804,715.26 op/s

Array<object>(500)
  native            ⇝   148.95ms   @   100,702,891.41 op/s
  @arr/reverse      ⇝    27.83ms   @   538,990,772.12 op/s
  compute-reverse   ⇝    28.00ms   @   535,630,842.08 op/s
  lodash.reverse    ⇝   143.36ms   @   104,633,855.38 op/s
  ramda.reverse     ⇝    94.50ms   @   158,737,154.92 op/s

Array<object>(1000)
  native            ⇝   304.52ms   @    98,514,563.59 op/s
  @arr/reverse      ⇝    54.99ms   @   545,528,062.80 op/s
  compute-reverse   ⇝    55.27ms   @   542,741,469.66 op/s
  lodash.reverse    ⇝   298.20ms   @   100,603,980.69 op/s
  ramda.reverse     ⇝   169.84ms   @   176,640,462.33 op/s

Array<object>(5000)
  native            ⇝   1,457.93ms   @   102,885,482.41 op/s
  @arr/reverse      ⇝     295.87ms   @   506,973,064.69 op/s
  compute-reverse   ⇝     298.34ms   @   502,786,639.64 op/s
  lodash.reverse    ⇝   1,475.46ms   @   101,662,951.18 op/s
  ramda.reverse     ⇝     891.32ms   @   168,289,419.08 op/s

Array<object>(10000)
  native            ⇝   2,972.28ms   @   100,932,605.06 op/s
  @arr/reverse      ⇝     588.80ms   @   509,512,382.18 op/s
  compute-reverse   ⇝     597.01ms   @   502,502,952.97 op/s
  lodash.reverse    ⇝   2,962.23ms   @   101,274,928.20 op/s
  ramda.reverse     ⇝   1,825.02ms   @   164,381,768.22 op/s
```
</details>


## some

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Array<string>(100)
  native        ⇝   2.33ms   @   1,290,141,128.54 op/s
  @arr/some     ⇝   0.94ms   @   3,204,272,363.15 op/s
  fastjs.some   ⇝   1.00ms   @   3,014,445,221.50 op/s
  lodash.some   ⇝   1.77ms   @   1,696,766,359.23 op/s

Array<string>(500)
  native        ⇝   1.55ms   @    9,685,517,697.38 op/s
  @arr/some     ⇝   0.54ms   @   27,684,113,194.80 op/s
  fastjs.some   ⇝   0.55ms   @   27,207,034,650.88 op/s
  lodash.some   ⇝   0.80ms   @   18,786,751,582.78 op/s

Array<string>(1000)
  native        ⇝   1.52ms   @   19,732,376,356.93 op/s
  @arr/some     ⇝   0.56ms   @   53,453,258,688.83 op/s
  fastjs.some   ⇝   0.57ms   @   52,722,687,451.12 op/s
  lodash.some   ⇝   0.82ms   @   36,534,084,474.11 op/s

Array<string>(5000)
  native        ⇝   1.62ms   @    92,725,212,541.64 op/s
  @arr/some     ⇝   0.54ms   @   276,651,192,643.29 op/s
  fastjs.some   ⇝   0.55ms   @   272,428,591,925.58 op/s
  lodash.some   ⇝   1.31ms   @   114,393,527,461.69 op/s

Array<string>(10000)
  native        ⇝   1.96ms   @   152,799,749,815.88 op/s
  @arr/some     ⇝   0.75ms   @   399,970,668,817.62 op/s
  fastjs.some   ⇝   0.76ms   @   395,820,139,328.69 op/s
  lodash.some   ⇝   1.11ms   @   270,281,471,124.03 op/s

```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Array<number>(100)
  native        ⇝   2.39ms   @   1,257,593,770.38 op/s
  @arr/some     ⇝   0.59ms   @   5,110,453,944.59 op/s
  fastjs.some   ⇝   0.69ms   @   4,368,879,018.46 op/s
  lodash.some   ⇝   0.81ms   @   3,689,469,638.74 op/s

Array<number>(500)
  native        ⇝   1.50ms   @   10,004,788,958.98 op/s
  @arr/some     ⇝   0.55ms   @   27,354,691,876.75 op/s
  fastjs.some   ⇝   0.55ms   @   27,335,798,414.89 op/s
  lodash.some   ⇝   0.81ms   @   18,474,294,251.17 op/s

Array<number>(1000)
  native        ⇝   1.49ms   @   20,199,639,773.09 op/s
  @arr/some     ⇝   0.53ms   @   56,361,737,143.89 op/s
  fastjs.some   ⇝   0.52ms   @   57,227,772,256.36 op/s
  lodash.some   ⇝   0.77ms   @   39,194,167,907.82 op/s

Array<number>(5000)
  native        ⇝   1.48ms   @   101,172,795,040.10 op/s
  @arr/some     ⇝   0.53ms   @   282,070,472,486.85 op/s
  fastjs.some   ⇝   0.53ms   @   281,611,871,254.56 op/s
  lodash.some   ⇝   0.79ms   @   190,444,026,596.14 op/s

Array<number>(10000)
  native        ⇝   1.50ms   @   200,438,023,894.88 op/s
  @arr/some     ⇝   0.53ms   @   563,353,833,153.37 op/s
  fastjs.some   ⇝   0.53ms   @   563,481,867,153.52 op/s
  lodash.some   ⇝   0.79ms   @   380,922,390,872.08 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Array<object>(100)
  native        ⇝   2.03ms   @   1,476,674,450.38 op/s
  @arr/some     ⇝   0.54ms   @   5,537,711,817.48 op/s
  fastjs.some   ⇝   0.55ms   @   5,425,916,346.84 op/s
  lodash.some   ⇝   0.81ms   @   3,723,206,872.54 op/s

Array<object>(500)
  native        ⇝   1.74ms   @    8,620,139,749.71 op/s
  @arr/some     ⇝   0.59ms   @   25,430,625,254.31 op/s
  fastjs.some   ⇝   0.60ms   @   25,091,206,535.76 op/s
  lodash.some   ⇝   0.89ms   @   16,817,368,978.68 op/s

Array<object>(1000)
  native        ⇝   1.59ms   @   18,898,447,303.57 op/s
  @arr/some     ⇝   0.58ms   @   51,468,923,064.25 op/s
  fastjs.some   ⇝   0.58ms   @   51,675,224,658.04 op/s
  lodash.some   ⇝   0.82ms   @   36,792,841,584.74 op/s

Array<object>(5000)
  native        ⇝   1.50ms   @   100,122,750,492.10 op/s
  @arr/some     ⇝   0.54ms   @   275,359,711,569.88 op/s
  fastjs.some   ⇝   0.55ms   @   272,130,070,917.10 op/s
  lodash.some   ⇝   0.81ms   @   186,007,983,462.65 op/s

Array<object>(10000)
  native        ⇝   1.48ms   @   202,454,285,822.26 op/s
  @arr/some     ⇝   0.54ms   @   553,801,849,698.18 op/s
  fastjs.some   ⇝   0.56ms   @   532,997,899,988.27 op/s
  lodash.some   ⇝   0.81ms   @   372,445,027,114.00 op/s
```
</details>


## unique

<details>
<summary>:wavy_dash: ↝ Strings</summary>

```
Array<string>(5)
  @arr/unique        ⇝   10.37ms   @   14,462,269.67 op/s
  arr-uniq           ⇝   36.06ms   @    4,159,256.03 op/s
  array-unique       ⇝    8.14ms   @   18,435,658.20 op/s
  lodash.uniq        ⇝   12.32ms   @   12,175,036.11 op/s
  ramda.uniq         ⇝   65.89ms   @    2,276,522.93 op/s

Array<string>(10)
  @arr/unique        ⇝    15.42ms   @   19,451,983.17 op/s
  arr-uniq           ⇝    84.52ms   @    3,549,516.31 op/s
  array-unique       ⇝    14.25ms   @   21,055,088.74 op/s
  lodash.uniq        ⇝    21.89ms   @   13,705,665.71 op/s
  ramda.uniq         ⇝   131.97ms   @    2,273,280.70 op/s

Array<string>(100)
  @arr/unique        ⇝     998.74ms   @   3,003,798.75 op/s
  arr-uniq           ⇝   3,430.27ms   @     874,567.08 op/s
  array-unique       ⇝   1,303.98ms   @   2,300,656.21 op/s
  lodash.uniq        ⇝   1,029.80ms   @   2,913,194.87 op/s
  ramda.uniq         ⇝     818.79ms   @   3,663,960.96 op/s

Array<string>(500)
  @arr/unique        ⇝   24,819.65ms   @     604,359.88 op/s
  arr-uniq           ⇝   78,680.13ms   @     190,645.34 op/s
  array-unique       ⇝   32,085.84ms   @     467,495.89 op/s
  lodash.uniq        ⇝    4,902.48ms   @   3,059,673.57 op/s
  ramda.uniq         ⇝    3,847.64ms   @   3,898,489.16 op/s
```
</details>

<details>
<summary>:wavy_dash: ↝ Numbers</summary>

```
Array<number>(5)
  @arr/unique        ⇝    6.50ms   @   23,065,830.19 op/s
  arr-uniq           ⇝   31.12ms   @    4,820,503.41 op/s
  array-unique       ⇝    3.22ms   @   46,596,845.95 op/s
  lodash.uniq        ⇝    7.63ms   @   19,657,482.78 op/s
  ramda.uniq         ⇝   32.56ms   @    4,607,405.86 op/s

Array<number>(10)
  @arr/unique        ⇝    9.34ms   @   32,104,700.71 op/s
  arr-uniq           ⇝   62.03ms   @    4,836,148.08 op/s
  array-unique       ⇝    7.44ms   @   40,343,158.91 op/s
  lodash.uniq        ⇝   11.60ms   @   25,863,261.80 op/s
  ramda.uniq         ⇝   46.26ms   @    6,484,663.77 op/s

Array<number>(100)
  @arr/unique        ⇝     176.16ms   @   17,030,379.66 op/s
  arr-uniq           ⇝   2,473.84ms   @    1,212,690.60 op/s
  array-unique       ⇝     538.29ms   @    5,573,152.79 op/s
  lodash.uniq        ⇝     322.75ms   @    9,295,004.06 op/s
  ramda.uniq         ⇝     328.42ms   @    9,134,553.07 op/s

Array<number>(500)
  @arr/unique        ⇝    3,613.77ms   @    4,150,791.51 op/s
  arr-uniq           ⇝   56,159.63ms   @      267,095.79 op/s
  array-unique       ⇝   12,502.84ms   @    1,199,727.12 op/s
  lodash.uniq        ⇝    2,436.70ms   @    6,155,859.86 op/s
  ramda.uniq         ⇝    1,487.51ms   @   10,083,947.81 op/s
```
</details>

<br>

> :white_check_mark: &mdash; Denotes function **is** faster than native <br>
> :no_entry_sign: &mdash; Denotes function **is not** faster than native <br>
> :mag: &mdash; Denotes function **is sometimes** faster than native <br>
> :wavy_dash: &mdash; Denotes function has no native counterpart <br>

