# Benchmark Results for Node `v8.17.0` (LTS)
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
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/every.js • Array<string>(100)
  native         ⇝   35.71ms   @    84,008,093.34 op/s
  @arr/every     ⇝    5.22ms   @   575,255,940.96 op/s
  array-every    ⇝   76.24ms   @    39,350,968.73 op/s
  lodash.every   ⇝    7.57ms   @   396,349,201.09 op/s
  fastjs.every   ⇝    5.64ms   @   532,002,711.80 op/s

Benchmark: code/every.js • Array<string>(500)
  native         ⇝   162.83ms   @      92,120,135.15 op/s
  @arr/every     ⇝    13.72ms   @   1,093,576,383.36 op/s
  array-every    ⇝   100.99ms   @     148,533,013.69 op/s
  lodash.every   ⇝    13.95ms   @   1,075,011,122.78 op/s
  fastjs.every   ⇝    13.72ms   @   1,093,631,318.22 op/s

Benchmark: code/every.js • Array<string>(1000)
  native         ⇝   314.62ms   @      95,354,604.34 op/s
  @arr/every     ⇝    27.06ms   @   1,108,585,629.87 op/s
  array-every    ⇝   125.37ms   @     239,283,000.93 op/s
  lodash.every   ⇝    98.63ms   @     304,171,816.84 op/s
  fastjs.every   ⇝    61.45ms   @     488,167,820.90 op/s

Benchmark: code/every.js • Array<string>(5000)
  native         ⇝   1,586.38ms   @      94,554,979.58 op/s
  @arr/every     ⇝     134.11ms   @   1,118,480,397.34 op/s
  array-every    ⇝     178.83ms   @     838,781,747.35 op/s
  lodash.every   ⇝     135.42ms   @   1,107,698,963.43 op/s
  fastjs.every   ⇝     133.96ms   @   1,119,713,981.45 op/s

Benchmark: code/every.js • Array<string>(10000)
  native         ⇝   3,233.57ms   @      92,776,778.87 op/s
  @arr/every     ⇝     267.63ms   @   1,120,942,943.18 op/s
  array-every    ⇝     361.06ms   @     830,887,012.71 op/s
  lodash.every   ⇝     268.31ms   @   1,118,121,480.18 op/s
  fastjs.every   ⇝     267.96ms   @   1,119,588,013.70 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/every.js • Array<number>(100)
  native         ⇝   32.60ms   @    92,035,279.21 op/s
  @arr/every     ⇝    3.07ms   @   978,645,945.47 op/s
  array-every    ⇝    4.42ms   @   678,724,893.12 op/s
  lodash.every   ⇝    3.17ms   @   945,992,350.71 op/s
  fastjs.every   ⇝    3.06ms   @   978,951,562.46 op/s

Benchmark: code/every.js • Array<number>(500)
  native         ⇝   157.39ms   @      95,303,807.06 op/s
  @arr/every     ⇝    13.75ms   @   1,090,561,221.71 op/s
  array-every    ⇝    18.43ms   @     813,770,207.13 op/s
  lodash.every   ⇝    13.84ms   @   1,083,629,700.04 op/s
  fastjs.every   ⇝    13.72ms   @   1,093,053,542.72 op/s

Benchmark: code/every.js • Array<number>(1000)
  native         ⇝   314.30ms   @      95,451,362.67 op/s
  @arr/every     ⇝    27.29ms   @   1,099,376,005.17 op/s
  array-every    ⇝    36.26ms   @     827,253,092.04 op/s
  lodash.every   ⇝    27.16ms   @   1,104,651,477.49 op/s
  fastjs.every   ⇝    27.07ms   @   1,108,263,080.23 op/s

Benchmark: code/every.js • Array<number>(5000)
  native         ⇝   1,582.45ms   @      94,789,938.10 op/s
  @arr/every     ⇝     134.22ms   @   1,117,562,151.71 op/s
  array-every    ⇝     178.88ms   @     838,535,266.05 op/s
  lodash.every   ⇝     134.51ms   @   1,115,186,083.67 op/s
  fastjs.every   ⇝     134.32ms   @   1,116,777,324.91 op/s

Benchmark: code/every.js • Array<number>(10000)
  native         ⇝   3,171.76ms   @      94,584,697.12 op/s
  @arr/every     ⇝     267.41ms   @   1,121,871,953.15 op/s
  array-every    ⇝     356.95ms   @     840,453,830.95 op/s
  lodash.every   ⇝     267.40ms   @   1,121,934,605.39 op/s
  fastjs.every   ⇝     268.00ms   @   1,119,398,089.80 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/every.js • Array<object>(100)
  native         ⇝   32.91ms   @    91,171,463.04 op/s
  @arr/every     ⇝    3.20ms   @   938,653,370.33 op/s
  array-every    ⇝    6.66ms   @   450,293,996.95 op/s
  lodash.every   ⇝    3.17ms   @   947,812,196.70 op/s
  fastjs.every   ⇝    3.06ms   @   979,860,918.54 op/s

Benchmark: code/every.js • Array<object>(500)
  native         ⇝   158.03ms   @      94,916,156.51 op/s
  @arr/every     ⇝    13.73ms   @   1,092,157,009.37 op/s
  array-every    ⇝    18.45ms   @     812,959,749.06 op/s
  lodash.every   ⇝    13.86ms   @   1,082,063,868.03 op/s
  fastjs.every   ⇝    13.74ms   @   1,091,517,800.62 op/s

Benchmark: code/every.js • Array<object>(1000)
  native         ⇝   324.71ms   @      92,389,223.67 op/s
  @arr/every     ⇝    27.10ms   @   1,107,165,583.03 op/s
  array-every    ⇝    36.24ms   @     827,785,103.68 op/s
  lodash.every   ⇝    27.40ms   @   1,094,792,259.34 op/s
  fastjs.every   ⇝    27.10ms   @   1,106,953,925.15 op/s

Benchmark: code/every.js • Array<object>(5000)
  native         ⇝   1,586.79ms   @      94,530,365.00 op/s
  @arr/every     ⇝     134.02ms   @   1,119,253,639.89 op/s
  array-every    ⇝     178.56ms   @     840,050,776.03 op/s
  lodash.every   ⇝     134.13ms   @   1,118,337,526.55 op/s
  fastjs.every   ⇝     134.09ms   @   1,118,684,480.75 op/s

Benchmark: code/every.js • Array<object>(10000)
  native         ⇝   3,233.86ms   @      92,768,490.24 op/s
  @arr/every     ⇝     269.75ms   @   1,112,127,232.93 op/s
  array-every    ⇝     357.33ms   @     839,565,824.58 op/s
  lodash.every   ⇝     268.48ms   @   1,117,410,487.91 op/s
  fastjs.every   ⇝     267.40ms   @   1,121,913,383.49 op/s
```
</details>


## filter

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/filter.js • Array<string>(100)
  native               ⇝   81.46ms   @    36,827,223.71 op/s
  @arr/filter          ⇝   26.11ms   @   114,912,906.74 op/s
  @arr/filter.mutate   ⇝    5.16ms   @   581,184,613.10 op/s
  arr-filter           ⇝   34.57ms   @    86,776,707.82 op/s
  array-filter         ⇝   76.33ms   @    39,305,149.42 op/s
  lodash.filter        ⇝   30.71ms   @    97,684,649.14 op/s
  fastjs.filter        ⇝   26.67ms   @   112,490,848.87 op/s
  ramda.filter         ⇝   36.27ms   @    82,719,207.55 op/s

Benchmark: code/filter.js • Array<string>(500)
  native               ⇝   348.69ms   @      43,018,377.83 op/s
  @arr/filter          ⇝   108.13ms   @     138,717,473.91 op/s
  @arr/filter.mutate   ⇝    13.76ms   @   1,090,106,851.55 op/s
  arr-filter           ⇝   108.02ms   @     138,868,203.96 op/s
  array-filter         ⇝   351.48ms   @      42,676,884.23 op/s
  lodash.filter        ⇝   129.21ms   @     116,087,350.16 op/s
  fastjs.filter        ⇝   109.83ms   @     136,574,333.31 op/s
  ramda.filter         ⇝   116.15ms   @     129,147,148.48 op/s

Benchmark: code/filter.js • Array<string>(1000)
  native               ⇝   704.06ms   @      42,609,708.40 op/s
  @arr/filter          ⇝   238.47ms   @     125,800,905.17 op/s
  @arr/filter.mutate   ⇝    27.18ms   @   1,103,858,312.28 op/s
  arr-filter           ⇝   210.23ms   @     142,699,147.72 op/s
  array-filter         ⇝   705.28ms   @      42,536,476.34 op/s
  lodash.filter        ⇝   272.22ms   @     110,205,807.95 op/s
  fastjs.filter        ⇝   244.23ms   @     122,833,310.98 op/s
  ramda.filter         ⇝   254.09ms   @     118,068,106.82 op/s

Benchmark: code/filter.js • Array<string>(5000)
  native               ⇝   3,567.46ms   @      42,046,724.77 op/s
  @arr/filter          ⇝   1,266.93ms   @     118,396,657.03 op/s
  @arr/filter.mutate   ⇝     134.14ms   @   1,118,267,734.69 op/s
  arr-filter           ⇝   1,040.02ms   @     144,227,385.16 op/s
  array-filter         ⇝   3,605.18ms   @      41,606,783.25 op/s
  lodash.filter        ⇝   1,510.92ms   @      99,277,136.30 op/s
  fastjs.filter        ⇝   1,330.68ms   @     112,724,316.49 op/s
  ramda.filter         ⇝   1,291.68ms   @     116,128,225.41 op/s

Benchmark: code/filter.js • Array<string>(10000)
  native               ⇝   6,905.68ms   @      43,442,477.62 op/s
  @arr/filter          ⇝   2,117.74ms   @     141,660,738.26 op/s
  @arr/filter.mutate   ⇝     268.35ms   @   1,117,925,246.41 op/s
  arr-filter           ⇝   2,049.09ms   @     146,406,349.64 op/s
  array-filter         ⇝   6,732.55ms   @      44,559,614.90 op/s
  lodash.filter        ⇝   2,479.60ms   @     120,987,449.67 op/s
  fastjs.filter        ⇝   2,112.46ms   @     142,014,403.76 op/s
  ramda.filter         ⇝   2,143.78ms   @     139,939,893.79 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/filter.js • Array<number>(100)
  native               ⇝   70.70ms   @    42,433,132.81 op/s
  @arr/filter          ⇝   22.20ms   @   135,113,316.16 op/s
  @arr/filter.mutate   ⇝    3.10ms   @   967,638,616.65 op/s
  arr-filter           ⇝   24.13ms   @   124,343,141.81 op/s
  array-filter         ⇝   69.86ms   @    42,945,283.14 op/s
  lodash.filter        ⇝   25.58ms   @   117,273,031.44 op/s
  fastjs.filter        ⇝   22.71ms   @   132,089,339.42 op/s
  ramda.filter         ⇝   27.05ms   @   110,917,559.97 op/s

Benchmark: code/filter.js • Array<number>(500)
  native               ⇝   336.94ms   @      44,517,790.37 op/s
  @arr/filter          ⇝   110.34ms   @     135,948,382.03 op/s
  @arr/filter.mutate   ⇝    13.78ms   @   1,088,718,589.11 op/s
  arr-filter           ⇝   103.87ms   @     144,411,601.72 op/s
  array-filter         ⇝   335.92ms   @      44,653,044.42 op/s
  lodash.filter        ⇝   127.46ms   @     117,686,953.32 op/s
  fastjs.filter        ⇝   110.40ms   @     135,874,678.98 op/s
  ramda.filter         ⇝   118.79ms   @     126,274,799.88 op/s

Benchmark: code/filter.js • Array<number>(1000)
  native               ⇝   690.76ms   @      43,430,659.36 op/s
  @arr/filter          ⇝   245.07ms   @     122,411,719.96 op/s
  @arr/filter.mutate   ⇝    27.08ms   @   1,107,729,500.14 op/s
  arr-filter           ⇝   194.81ms   @     153,995,696.30 op/s
  array-filter         ⇝   687.50ms   @      43,636,406.61 op/s
  lodash.filter        ⇝   272.35ms   @     110,150,591.02 op/s
  fastjs.filter        ⇝   238.79ms   @     125,635,685.16 op/s
  ramda.filter         ⇝   249.60ms   @     120,191,561.31 op/s

Benchmark: code/filter.js • Array<number>(5000)
  native               ⇝   3,491.32ms   @      42,963,670.89 op/s
  @arr/filter          ⇝   1,254.12ms   @     119,605,714.12 op/s
  @arr/filter.mutate   ⇝     133.83ms   @   1,120,808,939.52 op/s
  arr-filter           ⇝     962.33ms   @     155,872,351.33 op/s
  array-filter         ⇝   3,475.31ms   @      43,161,610.06 op/s
  lodash.filter        ⇝   1,453.93ms   @     103,168,949.70 op/s
  fastjs.filter        ⇝   1,264.69ms   @     118,605,943.13 op/s
  ramda.filter         ⇝   1,271.96ms   @     117,928,086.26 op/s

Benchmark: code/filter.js • Array<number>(10000)
  native               ⇝   6,605.95ms   @      45,413,633.90 op/s
  @arr/filter          ⇝   2,118.61ms   @     141,602,491.45 op/s
  @arr/filter.mutate   ⇝     267.37ms   @   1,122,051,285.69 op/s
  arr-filter           ⇝   1,950.05ms   @     153,842,176.20 op/s
  array-filter         ⇝   6,631.12ms   @      45,241,255.10 op/s
  lodash.filter        ⇝   2,506.91ms   @     119,669,387.13 op/s
  fastjs.filter        ⇝   2,129.46ms   @     140,880,953.20 op/s
  ramda.filter         ⇝   2,153.65ms   @     139,298,197.49 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/filter.js • Array<object>(100)
  native               ⇝   76.81ms   @    39,058,845.86 op/s
  @arr/filter          ⇝   21.82ms   @   137,463,469.08 op/s
  @arr/filter.mutate   ⇝    3.08ms   @   974,137,936.63 op/s
  arr-filter           ⇝   25.36ms   @   118,306,419.94 op/s
  array-filter         ⇝   76.69ms   @    39,118,613.31 op/s
  lodash.filter        ⇝   26.06ms   @   115,120,007.62 op/s
  fastjs.filter        ⇝   21.57ms   @   139,109,157.94 op/s
  ramda.filter         ⇝   26.72ms   @   112,271,696.91 op/s

Benchmark: code/filter.js • Array<object>(500)
  native               ⇝   351.15ms   @      42,716,993.65 op/s
  @arr/filter          ⇝   110.55ms   @     135,682,640.26 op/s
  @arr/filter.mutate   ⇝    13.80ms   @   1,086,819,724.21 op/s
  arr-filter           ⇝   111.32ms   @     134,747,206.43 op/s
  array-filter         ⇝   348.13ms   @      43,087,621.50 op/s
  lodash.filter        ⇝   128.61ms   @     116,631,873.95 op/s
  fastjs.filter        ⇝   109.24ms   @     137,317,210.77 op/s
  ramda.filter         ⇝   118.15ms   @     126,959,127.46 op/s

Benchmark: code/filter.js • Array<object>(1000)
  native               ⇝   708.64ms   @      42,334,586.55 op/s
  @arr/filter          ⇝   241.89ms   @     124,023,457.38 op/s
  @arr/filter.mutate   ⇝    27.13ms   @   1,105,842,508.79 op/s
  arr-filter           ⇝   208.97ms   @     143,560,005.12 op/s
  array-filter         ⇝   703.80ms   @      42,625,448.88 op/s
  lodash.filter        ⇝   276.93ms   @     108,331,195.81 op/s
  fastjs.filter        ⇝   240.11ms   @     124,941,040.84 op/s
  ramda.filter         ⇝   258.73ms   @     115,950,352.32 op/s

Benchmark: code/filter.js • Array<object>(5000)
  native               ⇝   3,561.04ms   @      42,122,481.44 op/s
  @arr/filter          ⇝   1,259.37ms   @     119,106,738.24 op/s
  @arr/filter.mutate   ⇝     134.14ms   @   1,118,202,636.27 op/s
  arr-filter           ⇝   1,024.21ms   @     146,453,787.61 op/s
  array-filter         ⇝   3,568.85ms   @      42,030,360.68 op/s
  lodash.filter        ⇝   1,455.69ms   @     103,043,623.91 op/s
  fastjs.filter        ⇝   1,255.57ms   @     119,467,369.64 op/s
  ramda.filter         ⇝   1,279.05ms   @     117,274,871.80 op/s

Benchmark: code/filter.js • Array<object>(10000)
  native               ⇝   6,690.15ms   @      44,842,033.86 op/s
  @arr/filter          ⇝   2,134.56ms   @     140,544,201.31 op/s
  @arr/filter.mutate   ⇝     267.50ms   @   1,121,505,347.28 op/s
  arr-filter           ⇝   2,035.54ms   @     147,381,298.80 op/s
  array-filter         ⇝   6,715.62ms   @      44,671,953.63 op/s
  lodash.filter        ⇝   2,498.91ms   @     120,052,355.12 op/s
  fastjs.filter        ⇝   2,135.32ms   @     140,494,120.33 op/s
  ramda.filter         ⇝   2,166.52ms   @     138,471,067.44 op/s
```
</details>


## find

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/find.js • Array<string>(100)
  native        ⇝    4.94ms   @     607,193,051.77 op/s
  @arr/find     ⇝    2.11ms   @   1,419,192,592.95 op/s
  lodash.find   ⇝   13.66ms   @     219,622,847.54 op/s
  ramda.find    ⇝   21.82ms   @     137,480,830.59 op/s

Benchmark: code/find.js • Array<string>(500)
  native        ⇝    2.68ms   @   5,592,945,431.50 op/s
  @arr/find     ⇝    5.14ms   @   2,916,003,923.77 op/s
  lodash.find   ⇝   10.87ms   @   1,379,524,472.40 op/s
  ramda.find    ⇝   16.93ms   @     886,250,514.54 op/s

Benchmark: code/find.js • Array<string>(1000)
  native        ⇝     0.85ms   @    35,153,503,632.53 op/s
  @arr/find     ⇝     0.23ms   @   130,218,506,654.17 op/s
  lodash.find   ⇝     4.83ms   @     6,210,222,232.80 op/s
  ramda.find    ⇝   257.60ms   @       116,459,072.16 op/s

Benchmark: code/find.js • Array<string>(5000)
  native        ⇝    0.85ms   @   176,673,450,927.18 op/s
  @arr/find     ⇝    0.51ms   @   295,741,324,921.14 op/s
  lodash.find   ⇝   86.07ms   @     1,742,758,970.09 op/s
  ramda.find    ⇝   30.88ms   @     4,858,012,126.70 op/s

Benchmark: code/find.js • Array<string>(10000)
  native        ⇝    1.72ms   @   174,453,495,350.23 op/s
  @arr/find     ⇝    0.52ms   @   578,210,707,691.36 op/s
  lodash.find   ⇝    2.15ms   @   139,678,720,319.44 op/s
  ramda.find    ⇝   46.40ms   @     6,465,544,274.04 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/find.js • Array<number>(100)
  native        ⇝   94.18ms   @    31,852,594.01 op/s
  @arr/find     ⇝   17.42ms   @   172,212,383.79 op/s
  lodash.find   ⇝   28.90ms   @   103,794,336.92 op/s
  ramda.find    ⇝   27.33ms   @   109,754,954.50 op/s

Benchmark: code/find.js • Array<number>(500)
  native        ⇝   174.78ms   @    85,820,535.95 op/s
  @arr/find     ⇝    44.95ms   @   333,690,649.28 op/s
  lodash.find   ⇝    32.85ms   @   456,662,194.52 op/s
  ramda.find    ⇝    65.21ms   @   230,041,767.92 op/s

Benchmark: code/find.js • Array<number>(1000)
  native        ⇝   349.84ms   @    85,754,037.61 op/s
  @arr/find     ⇝    90.18ms   @   332,658,258.84 op/s
  lodash.find   ⇝    64.06ms   @   468,297,339.40 op/s
  ramda.find    ⇝   106.28ms   @   282,282,191.30 op/s

Benchmark: code/find.js • Array<number>(5000)
  native        ⇝   1,749.65ms   @    85,731,468.06 op/s
  @arr/find     ⇝     448.14ms   @   334,716,074.45 op/s
  lodash.find   ⇝     316.72ms   @   473,605,106.51 op/s
  ramda.find    ⇝     468.25ms   @   320,344,374.13 op/s

Benchmark: code/find.js • Array<number>(10000)
  native        ⇝   3,506.99ms   @    85,543,336.01 op/s
  @arr/find     ⇝     894.04ms   @   335,556,673.69 op/s
  lodash.find   ⇝     632.94ms   @   473,979,923.36 op/s
  ramda.find    ⇝     916.80ms   @   327,225,076.64 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/find.js • Array<object>(100)
  native        ⇝   100.06ms   @   29,983,492.29 op/s
  @arr/find     ⇝    73.90ms   @   40,597,327.42 op/s
  lodash.find   ⇝    83.93ms   @   35,743,781.57 op/s
  ramda.find    ⇝    87.02ms   @   34,473,515.76 op/s

Benchmark: code/find.js • Array<object>(500)
  native        ⇝   679.98ms   @   22,059,583.55 op/s
  @arr/find     ⇝   531.90ms   @   28,200,899.80 op/s
  lodash.find   ⇝   516.88ms   @   29,020,149.23 op/s
  ramda.find    ⇝   544.33ms   @   27,556,891.28 op/s

Benchmark: code/find.js • Array<object>(1000)
  native        ⇝   3,162.41ms   @    9,486,428.64 op/s
  @arr/find     ⇝   2,867.61ms   @   10,461,674.69 op/s
  lodash.find   ⇝   2,754.89ms   @   10,889,738.00 op/s
  ramda.find    ⇝   2,525.52ms   @   11,878,719.25 op/s

Benchmark: code/find.js • Array<object>(5000)
  native        ⇝   62,337.15ms   @   2,406,269.73 op/s
  @arr/find     ⇝   59,877.33ms   @   2,505,121.90 op/s
  lodash.find   ⇝   59,962.98ms   @   2,501,543.64 op/s
  ramda.find    ⇝   59,746.87ms   @   2,510,591.82 op/s
```
</details>


## findIndex

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/findIndex.js • Array<string>(100)
  native             ⇝    4.78ms   @     628,052,465.83 op/s
  @arr/findIndex     ⇝    2.18ms   @   1,378,218,542.28 op/s
  lodash.findindex   ⇝    8.15ms   @     368,185,078.29 op/s
  ramda.findIndex    ⇝   24.87ms   @     120,608,527.92 op/s

Benchmark: code/findIndex.js • Array<string>(500)
  native             ⇝    0.84ms   @   17,869,821,921.27 op/s
  @arr/findIndex     ⇝    0.25ms   @   60,653,357,972.08 op/s
  lodash.findindex   ⇝    0.28ms   @   53,052,086,538.56 op/s
  ramda.findIndex    ⇝   15.05ms   @      996,679,528.93 op/s

Benchmark: code/findIndex.js • Array<string>(1000)
  native             ⇝    0.84ms   @    35,806,658,367.48 op/s
  @arr/findIndex     ⇝    0.25ms   @   120,167,272,843.80 op/s
  lodash.findindex   ⇝    0.28ms   @   105,582,127,057.53 op/s
  ramda.findIndex    ⇝   14.37ms   @     2,087,907,154.94 op/s

Benchmark: code/findIndex.js • Array<string>(5000)
  native             ⇝    0.83ms   @   181,410,064,146.60 op/s
  @arr/findIndex     ⇝    0.51ms   @   296,208,530,805.69 op/s
  lodash.findindex   ⇝    0.28ms   @   527,400,198,302.47 op/s
  ramda.findIndex    ⇝   14.39ms   @    10,427,307,589.24 op/s

Benchmark: code/findIndex.js • Array<string>(10000)
  native             ⇝    0.83ms   @     362,614,450,185.84 op/s
  @arr/findIndex     ⇝    0.24ms   @   1,257,229,067,136.03 op/s
  lodash.findindex   ⇝    0.28ms   @   1,060,869,134,719.77 op/s
  ramda.findIndex    ⇝   14.39ms   @      20,852,252,408.17 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/findIndex.js • Array<number>(100)
  native             ⇝   40.07ms   @    74,860,829.97 op/s
  @arr/findIndex     ⇝   12.68ms   @   236,613,847.62 op/s
  lodash.findindex   ⇝   30.81ms   @    97,371,922.09 op/s
  ramda.findIndex    ⇝   33.79ms   @    88,784,914.52 op/s

Benchmark: code/findIndex.js • Array<number>(500)
  native             ⇝   174.61ms   @    85,906,615.90 op/s
  @arr/findIndex     ⇝    45.93ms   @   326,612,291.09 op/s
  lodash.findindex   ⇝    54.64ms   @   274,535,121.44 op/s
  ramda.findIndex    ⇝    56.86ms   @   263,782,888.96 op/s

Benchmark: code/findIndex.js • Array<number>(1000)
  native             ⇝   348.91ms   @    85,980,918.68 op/s
  @arr/findIndex     ⇝    89.77ms   @   334,201,983.70 op/s
  lodash.findindex   ⇝   107.56ms   @   278,913,708.09 op/s
  ramda.findIndex    ⇝    96.37ms   @   311,307,068.07 op/s

Benchmark: code/findIndex.js • Array<number>(5000)
  native             ⇝   1,763.04ms   @    85,080,226.49 op/s
  @arr/findIndex     ⇝     446.14ms   @   336,217,069.38 op/s
  lodash.findindex   ⇝     535.58ms   @   280,069,483.15 op/s
  ramda.findIndex    ⇝     422.56ms   @   354,976,573.72 op/s

Benchmark: code/findIndex.js • Array<number>(10000)
  native             ⇝   3,531.54ms   @    84,948,667.55 op/s
  @arr/findIndex     ⇝     892.20ms   @   336,248,932.89 op/s
  lodash.findindex   ⇝   1,074.46ms   @   279,210,345.05 op/s
  ramda.findIndex    ⇝     823.19ms   @   364,435,527.90 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/findIndex.js • Array<object>(100)
  native             ⇝   99.38ms   @   30,185,872.53 op/s
  @arr/findIndex     ⇝   70.23ms   @   42,717,476.85 op/s
  lodash.findindex   ⇝   76.46ms   @   39,234,482.41 op/s
  ramda.findIndex    ⇝   85.62ms   @   35,037,240.67 op/s

Benchmark: code/findIndex.js • Array<object>(500)
  native             ⇝   833.15ms   @   18,004,046.38 op/s
  @arr/findIndex     ⇝   658.47ms   @   22,780,238.61 op/s
  lodash.findindex   ⇝   658.89ms   @   22,765,610.12 op/s
  ramda.findIndex    ⇝   673.36ms   @   22,276,403.72 op/s

Benchmark: code/findIndex.js • Array<object>(1000)
  native             ⇝   3,517.55ms   @    8,528,658.28 op/s
  @arr/findIndex     ⇝   2,706.08ms   @   11,086,153.11 op/s
  lodash.findindex   ⇝   3,178.86ms   @    9,437,356.91 op/s
  ramda.findIndex    ⇝   3,233.32ms   @    9,278,385.21 op/s

Benchmark: code/findIndex.js • Array<object>(5000)
  native             ⇝   61,650.70ms   @   2,433,062.30 op/s
  @arr/findIndex     ⇝   59,428.20ms   @   2,524,054.17 op/s
  lodash.findindex   ⇝   60,643.65ms   @   2,473,465.80 op/s
  ramda.findIndex    ⇝   59,934.19ms   @   2,502,745.03 op/s

Benchmark: code/findIndex.js • Array<object>(10000)
  native             ⇝   223,824.20ms   @   1,340,337.66 op/s
  @arr/findIndex     ⇝   143,741.77ms   @   2,087,076.06 op/s
  lodash.findindex   ⇝   181,292.58ms   @   1,654,783.65 op/s
  ramda.findIndex    ⇝   147,148.84ms   @   2,038,752.04 op/s
```
</details>


## flatten

<details>
<summary>:wavy_dash: ↝ Arrays</summary>

```
Benchmark: code/flatten.js • Array<array>(5)
  @arr/flatten         ⇝      85.12ms   @   1,762,247.61 op/s
  arr-flatten          ⇝     124.39ms   @   1,205,923.11 op/s
  array-flatten        ⇝     127.07ms   @   1,180,448.55 op/s
  flatten              ⇝   3,594.78ms   @      41,727.12 op/s
  flatten-array        ⇝      84.72ms   @   1,770,595.40 op/s
  lodash.flattendeep   ⇝     594.33ms   @     252,385.31 op/s
  ramda.flatten        ⇝   1,386.88ms   @     108,156.57 op/s

Benchmark: code/flatten.js • Array<array>(10)
  @arr/flatten         ⇝     193.08ms   @   1,553,785.62 op/s
  arr-flatten          ⇝     268.39ms   @   1,117,781.43 op/s
  array-flatten        ⇝     199.74ms   @   1,501,919.83 op/s
  flatten              ⇝   8,014.72ms   @      37,431.13 op/s
  flatten-array        ⇝     202.12ms   @   1,484,274.47 op/s
  lodash.flattendeep   ⇝   1,290.86ms   @     232,403.46 op/s
  ramda.flatten        ⇝   2,955.76ms   @     101,496.68 op/s

Benchmark: code/flatten.js • Array<array>(100)
  @arr/flatten         ⇝     1,833.14ms   @   1,636,532.69 op/s
  arr-flatten          ⇝     1,844.92ms   @   1,626,088.44 op/s
  array-flatten        ⇝     1,648.24ms   @   1,820,125.67 op/s
  flatten              ⇝   102,203.26ms   @      29,353.27 op/s
  flatten-array        ⇝     1,817.35ms   @   1,650,754.36 op/s
  lodash.flattendeep   ⇝    11,544.79ms   @     259,857.48 op/s
  ramda.flatten        ⇝    28,037.40ms   @     106,999.93 op/s

Benchmark: code/flatten.js • Array<array>(500)
  @arr/flatten         ⇝      12,090.52ms   @   1,240,641.80 op/s
  arr-flatten          ⇝       9,138.94ms   @   1,641,328.01 op/s
  array-flatten        ⇝       9,287.71ms   @   1,615,037.29 op/s
  flatten              ⇝   1,213,334.56ms   @      12,362.62 op/s
  flatten-array        ⇝      12,373.58ms   @   1,212,260.32 op/s
  lodash.flattendeep   ⇝      60,533.49ms   @     247,796.73 op/s
  ramda.flatten        ⇝     154,728.51ms   @      96,944.00 op/s
```
</details>


## forEach

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/forEach.js • Array<string>(100)
  native           ⇝   35.32ms   @    84,935,839.04 op/s
  @arr/forEach     ⇝    5.20ms   @   577,364,094.27 op/s
  fastjs.forEach   ⇝    9.99ms   @   300,420,047.31 op/s
  lodash.foreach   ⇝    9.31ms   @   322,358,668.29 op/s
  ramda.forEach    ⇝    8.87ms   @   338,330,092.88 op/s

Benchmark: code/forEach.js • Array<string>(500)
  native           ⇝   161.96ms   @      92,616,351.55 op/s
  @arr/forEach     ⇝    13.83ms   @   1,084,836,138.76 op/s
  fastjs.forEach   ⇝    13.78ms   @   1,088,853,810.05 op/s
  lodash.foreach   ⇝    22.79ms   @     658,047,242.18 op/s
  ramda.forEach    ⇝     8.57ms   @   1,749,329,890.03 op/s

Benchmark: code/forEach.js • Array<string>(1000)
  native           ⇝   320.80ms   @      93,517,326.85 op/s
  @arr/forEach     ⇝    27.12ms   @   1,106,295,488.80 op/s
  fastjs.forEach   ⇝    27.08ms   @   1,107,676,984.26 op/s
  lodash.foreach   ⇝    45.22ms   @     663,373,870.42 op/s
  ramda.forEach    ⇝    15.72ms   @   1,908,069,952.90 op/s

Benchmark: code/forEach.js • Array<string>(5000)
  native           ⇝   1,597.03ms   @      93,924,147.17 op/s
  @arr/forEach     ⇝     135.86ms   @   1,104,103,610.85 op/s
  fastjs.forEach   ⇝     133.96ms   @   1,119,764,986.71 op/s
  lodash.foreach   ⇝     223.82ms   @     670,179,209.94 op/s
  ramda.forEach    ⇝      79.88ms   @   1,877,739,551.59 op/s

Benchmark: code/forEach.js • Array<string>(10000)
  native           ⇝   3,192.25ms   @      93,977,662.89 op/s
  @arr/forEach     ⇝     267.67ms   @   1,120,792,119.08 op/s
  fastjs.forEach   ⇝     271.70ms   @   1,104,140,435.36 op/s
  lodash.foreach   ⇝     446.81ms   @     671,421,079.90 op/s
  ramda.forEach    ⇝     149.31ms   @   2,009,263,885.28 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/forEach.js • Array<number>(100)
  native           ⇝   33.26ms   @      90,189,135.64 op/s
  @arr/forEach     ⇝    3.07ms   @     977,532,076.90 op/s
  fastjs.forEach   ⇝    3.08ms   @     974,745,323.42 op/s
  lodash.foreach   ⇝    5.00ms   @     600,587,614.92 op/s
  ramda.forEach    ⇝    2.38ms   @   1,259,927,705.35 op/s

Benchmark: code/forEach.js • Array<number>(500)
  native           ⇝   161.06ms   @      93,132,096.48 op/s
  @arr/forEach     ⇝    13.90ms   @   1,079,279,636.96 op/s
  fastjs.forEach   ⇝    13.77ms   @   1,089,390,282.78 op/s
  lodash.foreach   ⇝    22.80ms   @     657,848,110.41 op/s
  ramda.forEach    ⇝     8.27ms   @   1,812,927,843.42 op/s

Benchmark: code/forEach.js • Array<number>(1000)
  native           ⇝   320.65ms   @      93,559,461.19 op/s
  @arr/forEach     ⇝    27.08ms   @   1,107,808,569.65 op/s
  fastjs.forEach   ⇝    27.11ms   @   1,106,534,443.67 op/s
  lodash.foreach   ⇝    44.96ms   @     667,198,112.20 op/s
  ramda.forEach    ⇝    15.69ms   @   1,911,960,466.27 op/s

Benchmark: code/forEach.js • Array<number>(5000)
  native           ⇝   1,595.48ms   @      94,015,414.03 op/s
  @arr/forEach     ⇝     134.54ms   @   1,114,927,847.74 op/s
  fastjs.forEach   ⇝     134.55ms   @   1,114,802,544.39 op/s
  lodash.foreach   ⇝     223.52ms   @     671,068,185.00 op/s
  ramda.forEach    ⇝      74.98ms   @   2,000,603,808.90 op/s

Benchmark: code/forEach.js • Array<number>(10000)
  native           ⇝   3,194.48ms   @      93,912,039.80 op/s
  @arr/forEach     ⇝     268.69ms   @   1,116,510,601.87 op/s
  fastjs.forEach   ⇝     267.88ms   @   1,119,900,095.36 op/s
  lodash.foreach   ⇝     447.18ms   @     670,868,152.90 op/s
  ramda.forEach    ⇝     150.87ms   @   1,988,401,191.89 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/forEach.js • Array<object>(100)
  native           ⇝   33.19ms   @      90,395,815.25 op/s
  @arr/forEach     ⇝    3.08ms   @     972,963,295.93 op/s
  fastjs.forEach   ⇝    3.10ms   @     968,560,525.35 op/s
  lodash.foreach   ⇝    5.02ms   @     597,919,836.89 op/s
  ramda.forEach    ⇝    2.40ms   @   1,252,473,112.53 op/s

Benchmark: code/forEach.js • Array<object>(500)
  native           ⇝   161.03ms   @      93,148,988.17 op/s
  @arr/forEach     ⇝    13.83ms   @   1,084,520,437.35 op/s
  fastjs.forEach   ⇝    13.74ms   @   1,091,657,372.42 op/s
  lodash.foreach   ⇝    22.73ms   @     659,937,910.40 op/s
  ramda.forEach    ⇝     8.24ms   @   1,819,584,111.00 op/s

Benchmark: code/forEach.js • Array<object>(1000)
  native           ⇝   323.35ms   @      92,779,437.49 op/s
  @arr/forEach     ⇝    27.13ms   @   1,105,711,104.74 op/s
  fastjs.forEach   ⇝    27.48ms   @   1,091,746,281.66 op/s
  lodash.foreach   ⇝    45.00ms   @     666,665,940.74 op/s
  ramda.forEach    ⇝    15.70ms   @   1,910,440,948.24 op/s

Benchmark: code/forEach.js • Array<object>(5000)
  native           ⇝   1,596.39ms   @      93,962,164.45 op/s
  @arr/forEach     ⇝     134.10ms   @   1,118,601,440.36 op/s
  fastjs.forEach   ⇝     134.39ms   @   1,116,171,103.32 op/s
  lodash.foreach   ⇝     223.79ms   @     670,280,146.94 op/s
  ramda.forEach    ⇝      75.17ms   @   1,995,361,078.15 op/s

Benchmark: code/forEach.js • Array<object>(10000)
  native           ⇝   3,190.23ms   @      94,037,076.68 op/s
  @arr/forEach     ⇝     268.23ms   @   1,118,440,058.26 op/s
  fastjs.forEach   ⇝     267.70ms   @   1,120,642,210.47 op/s
  lodash.foreach   ⇝     446.35ms   @     672,123,498.45 op/s
  ramda.forEach    ⇝     151.10ms   @   1,985,417,268.99 op/s
```
</details>


## includes

<details>
<summary>:no_entry_sign: ↝ Strings</summary>

```
Benchmark: code/includes.js • Array<string>(100)
  native          ⇝    7.53ms   @   398,227,304.43 op/s
  @arr/includes   ⇝   16.20ms   @   185,149,892.42 op/s

Benchmark: code/includes.js • Array<string>(500)
  native          ⇝   27.62ms   @   543,017,109.49 op/s
  @arr/includes   ⇝   49.74ms   @   301,597,453.13 op/s

Benchmark: code/includes.js • Array<string>(1000)
  native          ⇝   54.68ms   @   548,601,834.28 op/s
  @arr/includes   ⇝   98.62ms   @   304,197,835.83 op/s

Benchmark: code/includes.js • Array<string>(5000)
  native          ⇝   272.21ms   @   551,050,027.66 op/s
  @arr/includes   ⇝   495.11ms   @   302,963,155.99 op/s

Benchmark: code/includes.js • Array<string>(10000)
  native          ⇝   539.57ms   @   555,996,021.78 op/s
  @arr/includes   ⇝   987.56ms   @   303,779,317.27 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Numbers</summary>

```
Benchmark: code/includes.js • Array<number>(100)
  native          ⇝    4.45ms   @   674,321,868.21 op/s
  @arr/includes   ⇝   13.25ms   @   226,332,948.29 op/s

Benchmark: code/includes.js • Array<number>(500)
  native          ⇝   18.78ms   @   798,887,479.95 op/s
  @arr/includes   ⇝   49.70ms   @   301,834,167.76 op/s

Benchmark: code/includes.js • Array<number>(1000)
  native          ⇝   36.50ms   @   821,829,613.52 op/s
  @arr/includes   ⇝   98.96ms   @   303,155,221.35 op/s

Benchmark: code/includes.js • Array<number>(5000)
  native          ⇝   180.97ms   @   828,883,284.62 op/s
  @arr/includes   ⇝   491.20ms   @   305,377,027.40 op/s

Benchmark: code/includes.js • Array<number>(10000)
  native          ⇝   358.71ms   @   836,324,412.75 op/s
  @arr/includes   ⇝   981.70ms   @   305,591,406.89 op/s
```
</details>

<details>
<summary>:no_entry_sign: ↝ Objects</summary>

```
Benchmark: code/includes.js • Array<object>(100)
  native          ⇝    6.32ms   @   474,339,573.06 op/s
  @arr/includes   ⇝   13.03ms   @   230,279,373.40 op/s

Benchmark: code/includes.js • Array<object>(500)
  native          ⇝   28.19ms   @   532,085,349.61 op/s
  @arr/includes   ⇝   63.72ms   @   235,397,973.39 op/s

Benchmark: code/includes.js • Array<object>(1000)
  native          ⇝    55.03ms   @   545,151,332.28 op/s
  @arr/includes   ⇝   126.73ms   @   236,730,378.49 op/s

Benchmark: code/includes.js • Array<object>(5000)
  native          ⇝   670.84ms   @   223,601,665.95 op/s
  @arr/includes   ⇝   955.03ms   @   157,062,647.37 op/s

Benchmark: code/includes.js • Array<object>(10000)
  native          ⇝   2,244.91ms   @   133,635,534.95 op/s
  @arr/includes   ⇝   3,482.24ms   @    86,151,345.55 op/s
```
</details>


## map

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/map.js • Array<string>(100)
  native       ⇝   58.93ms   @    50,907,728.06 op/s
  @arr/map     ⇝   13.89ms   @   215,960,068.12 op/s
  arr-map      ⇝   20.46ms   @   146,607,316.12 op/s
  array-map    ⇝   45.56ms   @    65,847,764.84 op/s
  fastjs.map   ⇝   16.67ms   @   179,991,993.96 op/s
  lodash.map   ⇝   17.39ms   @   172,520,418.65 op/s
  ramda.map    ⇝   25.03ms   @   119,832,737.47 op/s

Benchmark: code/map.js • Array<string>(500)
  native       ⇝   211.61ms   @    70,884,065.35 op/s
  @arr/map     ⇝    51.06ms   @   293,775,496.53 op/s
  arr-map      ⇝    44.49ms   @   337,134,752.42 op/s
  array-map    ⇝   213.18ms   @    70,363,243.44 op/s
  fastjs.map   ⇝    52.18ms   @   287,485,436.95 op/s
  lodash.map   ⇝    57.14ms   @   262,507,263.58 op/s
  ramda.map    ⇝    59.42ms   @   252,437,808.75 op/s

Benchmark: code/map.js • Array<string>(1000)
  native       ⇝   421.23ms   @    71,219,597.87 op/s
  @arr/map     ⇝    99.26ms   @   302,248,913.26 op/s
  arr-map      ⇝    82.31ms   @   364,483,644.53 op/s
  array-map    ⇝   420.85ms   @    71,284,632.65 op/s
  fastjs.map   ⇝   101.72ms   @   294,924,027.18 op/s
  lodash.map   ⇝   109.59ms   @   273,741,290.10 op/s
  ramda.map    ⇝   108.36ms   @   276,865,523.82 op/s

Benchmark: code/map.js • Array<string>(5000)
  native       ⇝   2,102.36ms   @    71,348,221.58 op/s
  @arr/map     ⇝     496.91ms   @   301,865,381.96 op/s
  arr-map      ⇝     389.06ms   @   385,539,848.87 op/s
  array-map    ⇝   2,106.94ms   @    71,193,428.05 op/s
  fastjs.map   ⇝     937.61ms   @   159,980,505.76 op/s
  lodash.map   ⇝     544.96ms   @   275,247,670.61 op/s
  ramda.map    ⇝     511.33ms   @   293,353,162.39 op/s

Benchmark: code/map.js • Array<string>(10000)
  native       ⇝   4,210.12ms   @    71,256,937.69 op/s
  @arr/map     ⇝   1,006.99ms   @   297,918,083.49 op/s
  arr-map      ⇝     766.23ms   @   391,526,446.82 op/s
  array-map    ⇝   4,190.51ms   @    71,590,348.74 op/s
  fastjs.map   ⇝   1,004.15ms   @   298,759,805.33 op/s
  lodash.map   ⇝   1,097.94ms   @   273,238,096.81 op/s
  ramda.map    ⇝   1,008.89ms   @   297,357,426.48 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/map.js • Array<number>(100)
  native       ⇝   42.98ms   @    69,806,968.84 op/s
  @arr/map     ⇝   11.45ms   @   261,994,661.42 op/s
  arr-map      ⇝   10.98ms   @   273,181,897.07 op/s
  array-map    ⇝   42.89ms   @    69,942,480.24 op/s
  fastjs.map   ⇝   11.93ms   @   251,489,720.32 op/s
  lodash.map   ⇝   11.74ms   @   255,627,294.04 op/s
  ramda.map    ⇝   15.82ms   @   189,659,882.30 op/s

Benchmark: code/map.js • Array<number>(500)
  native       ⇝   211.13ms   @    71,045,162.68 op/s
  @arr/map     ⇝    51.38ms   @   291,960,255.41 op/s
  arr-map      ⇝    45.45ms   @   330,021,632.26 op/s
  array-map    ⇝   211.12ms   @    71,048,455.43 op/s
  fastjs.map   ⇝    53.38ms   @   281,002,552.66 op/s
  lodash.map   ⇝    56.48ms   @   265,571,351.27 op/s
  ramda.map    ⇝    58.98ms   @   254,305,545.47 op/s

Benchmark: code/map.js • Array<number>(1000)
  native       ⇝   418.29ms   @    71,719,793.92 op/s
  @arr/map     ⇝   102.46ms   @   292,807,014.16 op/s
  arr-map      ⇝    81.95ms   @   366,078,430.69 op/s
  array-map    ⇝   420.38ms   @    71,363,595.05 op/s
  fastjs.map   ⇝   102.36ms   @   293,097,226.19 op/s
  lodash.map   ⇝   111.39ms   @   269,324,410.22 op/s
  ramda.map    ⇝   109.91ms   @   272,943,314.80 op/s

Benchmark: code/map.js • Array<number>(5000)
  native       ⇝   2,116.36ms   @    70,876,302.91 op/s
  @arr/map     ⇝     505.97ms   @   296,462,674.37 op/s
  arr-map      ⇝     390.96ms   @   383,666,223.89 op/s
  array-map    ⇝   2,120.55ms   @    70,736,280.60 op/s
  fastjs.map   ⇝     511.17ms   @   293,443,612.83 op/s
  lodash.map   ⇝     551.78ms   @   271,847,985.36 op/s
  ramda.map    ⇝     513.60ms   @   292,055,374.20 op/s

Benchmark: code/map.js • Array<number>(10000)
  native       ⇝   4,228.35ms   @    70,949,645.88 op/s
  @arr/map     ⇝   1,001.82ms   @   299,455,984.90 op/s
  arr-map      ⇝     777.89ms   @   385,661,018.93 op/s
  array-map    ⇝   4,213.02ms   @    71,207,844.73 op/s
  fastjs.map   ⇝     996.99ms   @   300,904,656.61 op/s
  lodash.map   ⇝   1,102.25ms   @   272,170,404.90 op/s
  ramda.map    ⇝   1,020.77ms   @   293,895,932.54 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/map.js • Array<object>(100)
  native       ⇝   44.25ms   @    67,793,912.20 op/s
  @arr/map     ⇝   11.69ms   @   256,572,072.25 op/s
  arr-map      ⇝   11.09ms   @   270,426,776.72 op/s
  array-map    ⇝   43.56ms   @    68,864,669.29 op/s
  fastjs.map   ⇝   12.03ms   @   249,318,197.83 op/s
  lodash.map   ⇝   11.81ms   @   254,122,179.40 op/s
  ramda.map    ⇝   16.12ms   @   186,082,124.00 op/s

Benchmark: code/map.js • Array<object>(500)
  native       ⇝   213.46ms   @    70,270,025.83 op/s
  @arr/map     ⇝    52.72ms   @   284,510,141.25 op/s
  arr-map      ⇝    45.45ms   @   330,043,779.65 op/s
  array-map    ⇝   214.94ms   @    69,785,479.95 op/s
  fastjs.map   ⇝    53.72ms   @   279,214,647.38 op/s
  lodash.map   ⇝    58.57ms   @   256,086,965.22 op/s
  ramda.map    ⇝    59.93ms   @   250,311,763.30 op/s

Benchmark: code/map.js • Array<object>(1000)
  native       ⇝   423.20ms   @    70,888,355.74 op/s
  @arr/map     ⇝   103.49ms   @   289,885,716.32 op/s
  arr-map      ⇝    90.08ms   @   333,030,712.03 op/s
  array-map    ⇝   421.91ms   @    71,105,210.33 op/s
  fastjs.map   ⇝   104.75ms   @   286,399,033.07 op/s
  lodash.map   ⇝   113.84ms   @   263,532,895.11 op/s
  ramda.map    ⇝   112.55ms   @   266,551,445.36 op/s

Benchmark: code/map.js • Array<object>(5000)
  native       ⇝   2,121.27ms   @    70,712,400.15 op/s
  @arr/map     ⇝     502.68ms   @   298,400,635.85 op/s
  arr-map      ⇝     392.42ms   @   382,244,606.53 op/s
  array-map    ⇝   2,114.55ms   @    70,937,195.29 op/s
  fastjs.map   ⇝     509.61ms   @   294,344,303.72 op/s
  lodash.map   ⇝     558.36ms   @   268,642,202.20 op/s
  ramda.map    ⇝     521.43ms   @   287,670,306.81 op/s

Benchmark: code/map.js • Array<object>(10000)
  native       ⇝   4,215.00ms   @    71,174,372.61 op/s
  @arr/map     ⇝   1,041.12ms   @   288,151,020.83 op/s
  arr-map      ⇝     774.36ms   @   387,416,452.75 op/s
  array-map    ⇝   4,258.13ms   @    70,453,442.91 op/s
  fastjs.map   ⇝   1,041.59ms   @   288,020,295.80 op/s
  lodash.map   ⇝   1,136.92ms   @   263,871,813.59 op/s
  ramda.map    ⇝   1,057.43ms   @   283,706,682.93 op/s
```
</details>


## reduce

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/reduce.js • Array<string>(100)
  native          ⇝   36.12ms   @    83,059,608.09 op/s
  @arr/reduce     ⇝    5.45ms   @   550,170,002.53 op/s
  arr-reduce      ⇝    9.18ms   @   326,854,674.20 op/s
  fastjs.reduce   ⇝    5.79ms   @   518,070,381.24 op/s
  lodash.reduce   ⇝   24.87ms   @   120,618,231.16 op/s
  ramda.reduce    ⇝   17.25ms   @   173,957,929.67 op/s

Benchmark: code/reduce.js • Array<string>(500)
  native          ⇝   164.03ms   @      91,448,631.74 op/s
  @arr/reduce     ⇝    13.78ms   @   1,088,479,683.42 op/s
  arr-reduce      ⇝    13.82ms   @   1,085,160,031.44 op/s
  fastjs.reduce   ⇝    13.81ms   @   1,086,272,799.60 op/s
  lodash.reduce   ⇝    16.16ms   @     928,487,289.94 op/s
  ramda.reduce    ⇝    15.39ms   @     974,773,131.30 op/s

Benchmark: code/reduce.js • Array<string>(1000)
  native          ⇝   320.90ms   @      93,485,928.54 op/s
  @arr/reduce     ⇝    27.11ms   @   1,106,524,934.10 op/s
  arr-reduce      ⇝    27.28ms   @   1,099,746,292.20 op/s
  fastjs.reduce   ⇝    27.17ms   @   1,104,256,459.59 op/s
  lodash.reduce   ⇝    27.39ms   @   1,095,127,522.12 op/s
  ramda.reduce    ⇝    25.51ms   @   1,175,919,289.60 op/s

Benchmark: code/reduce.js • Array<string>(5000)
  native          ⇝   1,608.29ms   @      93,267,010.26 op/s
  @arr/reduce     ⇝     136.21ms   @   1,101,279,539.99 op/s
  arr-reduce      ⇝     135.09ms   @   1,110,409,496.81 op/s
  fastjs.reduce   ⇝     134.92ms   @   1,111,746,049.87 op/s
  lodash.reduce   ⇝     134.22ms   @   1,117,564,158.35 op/s
  ramda.reduce    ⇝      97.71ms   @   1,535,211,142.19 op/s

Benchmark: code/reduce.js • Array<string>(10000)
  native          ⇝   3,214.30ms   @      93,332,799.50 op/s
  @arr/reduce     ⇝     267.88ms   @   1,119,924,824.08 op/s
  arr-reduce      ⇝     271.19ms   @   1,106,226,110.84 op/s
  fastjs.reduce   ⇝     268.24ms   @   1,118,399,017.47 op/s
  lodash.reduce   ⇝     267.30ms   @   1,122,333,758.67 op/s
  ramda.reduce    ⇝     186.59ms   @   1,607,801,016.23 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/reduce.js • Array<number>(100)
  native          ⇝   33.10ms   @    90,633,466.30 op/s
  @arr/reduce     ⇝    3.13ms   @   958,557,409.44 op/s
  arr-reduce      ⇝    3.11ms   @   963,954,527.05 op/s
  fastjs.reduce   ⇝    3.12ms   @   961,329,865.28 op/s
  lodash.reduce   ⇝    3.38ms   @   887,736,015.72 op/s
  ramda.reduce    ⇝    9.58ms   @   313,012,133.50 op/s

Benchmark: code/reduce.js • Array<number>(500)
  native          ⇝   160.80ms   @      93,283,562.95 op/s
  @arr/reduce     ⇝    13.93ms   @   1,076,869,531.66 op/s
  arr-reduce      ⇝    13.78ms   @   1,088,694,962.48 op/s
  fastjs.reduce   ⇝    13.80ms   @   1,086,927,852.05 op/s
  lodash.reduce   ⇝    14.03ms   @   1,069,085,746.38 op/s
  ramda.reduce    ⇝    16.73ms   @     896,484,061.23 op/s

Benchmark: code/reduce.js • Array<number>(1000)
  native          ⇝   320.87ms   @      93,496,868.04 op/s
  @arr/reduce     ⇝    27.13ms   @   1,105,719,907.51 op/s
  arr-reduce      ⇝    27.17ms   @   1,104,017,227.97 op/s
  fastjs.reduce   ⇝    27.10ms   @   1,106,935,708.62 op/s
  lodash.reduce   ⇝    27.38ms   @   1,095,757,839.27 op/s
  ramda.reduce    ⇝    25.49ms   @   1,176,860,013.52 op/s

Benchmark: code/reduce.js • Array<number>(5000)
  native          ⇝   1,600.66ms   @      93,711,216.97 op/s
  @arr/reduce     ⇝     134.04ms   @   1,119,033,152.97 op/s
  arr-reduce      ⇝     134.49ms   @   1,115,365,934.72 op/s
  fastjs.reduce   ⇝     133.92ms   @   1,120,041,383.59 op/s
  lodash.reduce   ⇝     134.06ms   @   1,118,898,078.14 op/s
  ramda.reduce    ⇝      98.05ms   @   1,529,866,809.49 op/s

Benchmark: code/reduce.js • Array<number>(10000)
  native          ⇝   3,219.12ms   @      93,193,212.96 op/s
  @arr/reduce     ⇝     267.90ms   @   1,119,822,931.21 op/s
  arr-reduce      ⇝     268.18ms   @   1,118,635,609.39 op/s
  fastjs.reduce   ⇝     267.69ms   @   1,120,709,531.66 op/s
  lodash.reduce   ⇝     267.43ms   @   1,121,787,000.11 op/s
  ramda.reduce    ⇝     188.04ms   @   1,595,392,913.69 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/reduce.js • Array<object>(100)
  native          ⇝   33.54ms   @    89,456,138.88 op/s
  @arr/reduce     ⇝    3.13ms   @   958,687,288.67 op/s
  arr-reduce      ⇝    3.28ms   @   914,190,708.10 op/s
  fastjs.reduce   ⇝    3.12ms   @   961,620,137.61 op/s
  lodash.reduce   ⇝    3.37ms   @   890,627,393.56 op/s
  ramda.reduce    ⇝    8.40ms   @   357,025,548.75 op/s

Benchmark: code/reduce.js • Array<object>(500)
  native          ⇝   160.24ms   @      93,608,920.24 op/s
  @arr/reduce     ⇝    13.89ms   @   1,079,835,398.53 op/s
  arr-reduce      ⇝    14.16ms   @   1,059,021,155.22 op/s
  fastjs.reduce   ⇝    13.90ms   @   1,078,833,142.70 op/s
  lodash.reduce   ⇝    15.37ms   @     975,930,369.06 op/s
  ramda.reduce    ⇝    15.68ms   @     956,868,880.07 op/s

Benchmark: code/reduce.js • Array<object>(1000)
  native          ⇝   319.98ms   @      93,754,897.81 op/s
  @arr/reduce     ⇝    27.14ms   @   1,105,559,604.97 op/s
  arr-reduce      ⇝    27.10ms   @   1,107,104,581.64 op/s
  fastjs.reduce   ⇝    27.11ms   @   1,106,772,031.86 op/s
  lodash.reduce   ⇝    28.73ms   @   1,044,366,135.55 op/s
  ramda.reduce    ⇝    24.67ms   @   1,216,093,242.90 op/s

Benchmark: code/reduce.js • Array<object>(5000)
  native          ⇝   1,608.92ms   @      93,230,447.52 op/s
  @arr/reduce     ⇝     133.99ms   @   1,119,487,681.84 op/s
  arr-reduce      ⇝     134.32ms   @   1,116,739,561.22 op/s
  fastjs.reduce   ⇝     133.99ms   @   1,119,522,999.61 op/s
  lodash.reduce   ⇝     134.28ms   @   1,117,031,061.31 op/s
  ramda.reduce    ⇝      98.23ms   @   1,526,986,415.65 op/s

Benchmark: code/reduce.js • Array<object>(10000)
  native          ⇝   3,220.84ms   @      93,143,306.33 op/s
  @arr/reduce     ⇝     268.17ms   @   1,118,701,167.06 op/s
  arr-reduce      ⇝     268.07ms   @   1,119,098,281.34 op/s
  fastjs.reduce   ⇝     269.62ms   @   1,112,665,554.34 op/s
  lodash.reduce   ⇝     267.68ms   @   1,120,729,895.82 op/s
  ramda.reduce    ⇝     187.00ms   @   1,604,258,248.98 op/s
```
</details>


## reduceRight

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/reduceRight.js • Array<string>(100)
  native               ⇝   143.05ms   @    20,972,352.06 op/s
  @arr/reduceRight     ⇝     6.13ms   @   489,213,654.28 op/s
  fastjs.reduceRight   ⇝    10.35ms   @   289,983,926.19 op/s
  lodash.reduceright   ⇝    10.05ms   @   298,539,693.09 op/s
  ramda.reduceRight    ⇝     9.22ms   @   325,548,456.91 op/s

Benchmark: code/reduceRight.js • Array<string>(500)
  native               ⇝   682.71ms   @      21,971,386.30 op/s
  @arr/reduceRight     ⇝    14.19ms   @   1,057,153,227.31 op/s
  fastjs.reduceRight   ⇝    11.71ms   @   1,281,300,024.09 op/s
  lodash.reduceright   ⇝    23.35ms   @     642,377,131.13 op/s
  ramda.reduceRight    ⇝    41.19ms   @     364,192,841.47 op/s

Benchmark: code/reduceRight.js • Array<string>(1000)
  native               ⇝   1,365.52ms   @      21,969,599.40 op/s
  @arr/reduceRight     ⇝      59.64ms   @     503,025,716.45 op/s
  fastjs.reduceRight   ⇝      23.07ms   @   1,300,157,418.73 op/s
  lodash.reduceright   ⇝     118.94ms   @     252,238,513.81 op/s
  ramda.reduceRight    ⇝     223.93ms   @     133,972,824.93 op/s

Benchmark: code/reduceRight.js • Array<string>(5000)
  native               ⇝   6,896.78ms   @      21,749,289.87 op/s
  @arr/reduceRight     ⇝     134.55ms   @   1,114,856,790.44 op/s
  fastjs.reduceRight   ⇝     115.24ms   @   1,301,578,734.31 op/s
  lodash.reduceright   ⇝     134.48ms   @   1,115,442,954.48 op/s
  ramda.reduceRight    ⇝     113.10ms   @   1,326,310,067.63 op/s

Benchmark: code/reduceRight.js • Array<string>(10000)
  native               ⇝   13,627.53ms   @      22,014,255.60 op/s
  @arr/reduceRight     ⇝      269.02ms   @   1,115,162,459.15 op/s
  fastjs.reduceRight   ⇝      223.27ms   @   1,343,679,528.35 op/s
  lodash.reduceright   ⇝      268.29ms   @   1,118,208,596.43 op/s
  ramda.reduceRight    ⇝      232.95ms   @   1,287,850,373.22 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/reduceRight.js • Array<number>(100)
  native               ⇝   139.72ms   @      21,472,136.55 op/s
  @arr/reduceRight     ⇝     3.12ms   @     962,068,832.82 op/s
  fastjs.reduceRight   ⇝     2.83ms   @   1,058,978,389.43 op/s
  lodash.reduceright   ⇝     6.27ms   @     478,633,558.63 op/s
  ramda.reduceRight    ⇝     7.51ms   @     399,477,909.00 op/s

Benchmark: code/reduceRight.js • Array<number>(500)
  native               ⇝   683.27ms   @      21,953,244.28 op/s
  @arr/reduceRight     ⇝    13.79ms   @   1,087,944,974.93 op/s
  fastjs.reduceRight   ⇝    11.72ms   @   1,280,161,785.14 op/s
  lodash.reduceright   ⇝    15.57ms   @     963,413,969.16 op/s
  ramda.reduceRight    ⇝    15.51ms   @     967,230,488.96 op/s

Benchmark: code/reduceRight.js • Array<number>(1000)
  native               ⇝   1,365.61ms   @      21,968,150.76 op/s
  @arr/reduceRight     ⇝      27.16ms   @   1,104,403,455.37 op/s
  fastjs.reduceRight   ⇝      23.29ms   @   1,288,377,269.50 op/s
  lodash.reduceright   ⇝      29.15ms   @   1,029,014,469.28 op/s
  ramda.reduceRight    ⇝      28.19ms   @   1,064,361,024.16 op/s

Benchmark: code/reduceRight.js • Array<number>(5000)
  native               ⇝   6,815.28ms   @      22,009,359.67 op/s
  @arr/reduceRight     ⇝     134.96ms   @   1,111,441,645.62 op/s
  fastjs.reduceRight   ⇝     111.69ms   @   1,343,016,061.31 op/s
  lodash.reduceright   ⇝     137.03ms   @   1,094,677,368.48 op/s
  ramda.reduceRight    ⇝     121.12ms   @   1,238,418,066.56 op/s

Benchmark: code/reduceRight.js • Array<number>(10000)
  native               ⇝   13,613.49ms   @      22,036,970.72 op/s
  @arr/reduceRight     ⇝      267.29ms   @   1,122,357,746.80 op/s
  fastjs.reduceRight   ⇝      223.61ms   @   1,341,640,653.00 op/s
  lodash.reduceright   ⇝      270.75ms   @   1,108,043,414.94 op/s
  ramda.reduceRight    ⇝      234.17ms   @   1,281,135,067.91 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/reduceRight.js • Array<object>(100)
  native               ⇝   138.64ms   @      21,638,846.14 op/s
  @arr/reduceRight     ⇝     3.13ms   @     958,498,301.54 op/s
  fastjs.reduceRight   ⇝     2.84ms   @   1,056,576,874.07 op/s
  lodash.reduceright   ⇝     6.37ms   @     471,085,701.80 op/s
  ramda.reduceRight    ⇝     7.24ms   @     414,443,121.76 op/s

Benchmark: code/reduceRight.js • Array<object>(500)
  native               ⇝   683.93ms   @      21,932,044.86 op/s
  @arr/reduceRight     ⇝    13.83ms   @   1,084,368,103.64 op/s
  fastjs.reduceRight   ⇝    11.74ms   @   1,277,244,041.15 op/s
  lodash.reduceright   ⇝    15.74ms   @     953,189,256.87 op/s
  ramda.reduceRight    ⇝    15.72ms   @     954,028,969.28 op/s

Benchmark: code/reduceRight.js • Array<object>(1000)
  native               ⇝   1,366.09ms   @      21,960,519.96 op/s
  @arr/reduceRight     ⇝      27.33ms   @   1,097,591,186.14 op/s
  fastjs.reduceRight   ⇝      22.83ms   @   1,313,802,175.03 op/s
  lodash.reduceright   ⇝      29.13ms   @   1,030,041,998.93 op/s
  ramda.reduceRight    ⇝      27.12ms   @   1,106,226,057.81 op/s

Benchmark: code/reduceRight.js • Array<object>(5000)
  native               ⇝   6,804.89ms   @      22,042,978.40 op/s
  @arr/reduceRight     ⇝     133.95ms   @   1,119,851,769.85 op/s
  fastjs.reduceRight   ⇝     112.22ms   @   1,336,658,130.83 op/s
  lodash.reduceright   ⇝     136.80ms   @   1,096,495,203.67 op/s
  ramda.reduceRight    ⇝     121.20ms   @   1,237,593,445.42 op/s

Benchmark: code/reduceRight.js • Array<object>(10000)
  native               ⇝   13,618.99ms   @      22,028,067.26 op/s
  @arr/reduceRight     ⇝      268.08ms   @   1,119,068,909.60 op/s
  fastjs.reduceRight   ⇝      229.51ms   @   1,307,144,831.87 op/s
  lodash.reduceright   ⇝      273.53ms   @   1,096,753,530.95 op/s
  ramda.reduceRight    ⇝      233.65ms   @   1,283,991,959.08 op/s
```
</details>


## reverse

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/reverse.js • Array<string>(100)
  native            ⇝   28.46ms   @   105,406,177.43 op/s
  @arr/reverse      ⇝    8.77ms   @   342,173,226.56 op/s
  compute-reverse   ⇝   12.28ms   @   244,341,260.04 op/s
  lodash.reverse    ⇝   24.96ms   @   120,184,420.59 op/s
  ramda.reverse     ⇝   48.37ms   @    62,016,347.43 op/s

Benchmark: code/reverse.js • Array<string>(500)
  native            ⇝   109.98ms   @   136,389,469.77 op/s
  @arr/reverse      ⇝    24.96ms   @   600,938,714.35 op/s
  compute-reverse   ⇝    25.07ms   @   598,353,665.79 op/s
  lodash.reverse    ⇝   111.60ms   @   134,407,380.92 op/s
  ramda.reverse     ⇝   117.95ms   @   127,171,639.08 op/s

Benchmark: code/reverse.js • Array<string>(1000)
  native            ⇝   230.24ms   @   130,296,835.08 op/s
  @arr/reverse      ⇝    49.37ms   @   607,634,354.49 op/s
  compute-reverse   ⇝    49.65ms   @   604,241,497.36 op/s
  lodash.reverse    ⇝   227.90ms   @   131,637,930.98 op/s
  ramda.reverse     ⇝   217.70ms   @   137,802,039.74 op/s

Benchmark: code/reverse.js • Array<string>(5000)
  native            ⇝   1,093.75ms   @   137,142,324.75 op/s
  @arr/reverse      ⇝     245.69ms   @   610,519,587.05 op/s
  compute-reverse   ⇝     245.27ms   @   611,559,257.66 op/s
  lodash.reverse    ⇝   1,095.73ms   @   136,895,648.57 op/s
  ramda.reverse     ⇝   1,039.45ms   @   144,306,630.25 op/s

Benchmark: code/reverse.js • Array<string>(10000)
  native            ⇝   2,173.06ms   @   138,054,193.23 op/s
  @arr/reverse      ⇝     491.64ms   @   610,196,624.80 op/s
  compute-reverse   ⇝     494.86ms   @   606,235,740.83 op/s
  lodash.reverse    ⇝   2,183.75ms   @   137,378,424.75 op/s
  ramda.reverse     ⇝   2,068.13ms   @   145,058,349.36 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/reverse.js • Array<number>(100)
  native            ⇝   23.04ms   @   130,202,953.42 op/s
  @arr/reverse      ⇝    5.09ms   @   589,613,602.62 op/s
  compute-reverse   ⇝    5.12ms   @   585,497,119.26 op/s
  lodash.reverse    ⇝   22.44ms   @   133,698,329.77 op/s
  ramda.reverse     ⇝   27.50ms   @   109,083,233.60 op/s

Benchmark: code/reverse.js • Array<number>(500)
  native            ⇝   108.62ms   @   138,094,219.31 op/s
  @arr/reverse      ⇝    24.95ms   @   601,288,513.18 op/s
  compute-reverse   ⇝    25.33ms   @   592,277,085.86 op/s
  lodash.reverse    ⇝   109.26ms   @   137,286,046.33 op/s
  ramda.reverse     ⇝   108.92ms   @   137,716,079.63 op/s

Benchmark: code/reverse.js • Array<number>(1000)
  native            ⇝   227.98ms   @   131,589,269.05 op/s
  @arr/reverse      ⇝    49.42ms   @   607,043,661.15 op/s
  compute-reverse   ⇝    49.77ms   @   602,759,154.14 op/s
  lodash.reverse    ⇝   228.57ms   @   131,252,343.76 op/s
  ramda.reverse     ⇝   202.78ms   @   147,940,325.96 op/s

Benchmark: code/reverse.js • Array<number>(5000)
  native            ⇝   1,104.48ms   @   135,810,935.12 op/s
  @arr/reverse      ⇝     246.27ms   @   609,077,669.22 op/s
  compute-reverse   ⇝     246.10ms   @   609,515,871.50 op/s
  lodash.reverse    ⇝   1,104.25ms   @   135,838,605.70 op/s
  ramda.reverse     ⇝     976.73ms   @   153,573,281.69 op/s

Benchmark: code/reverse.js • Array<number>(10000)
  native            ⇝   2,178.56ms   @   137,705,495.29 op/s
  @arr/reverse      ⇝     492.00ms   @   609,754,006.80 op/s
  compute-reverse   ⇝     490.44ms   @   611,692,641.87 op/s
  lodash.reverse    ⇝   2,182.09ms   @   137,483,050.04 op/s
  ramda.reverse     ⇝   1,925.52ms   @   155,801,898.65 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/reverse.js • Array<object>(100)
  native            ⇝   22.67ms   @   132,326,528.41 op/s
  @arr/reverse      ⇝    5.10ms   @   588,475,876.90 op/s
  compute-reverse   ⇝    5.11ms   @   587,265,729.91 op/s
  lodash.reverse    ⇝   22.90ms   @   130,991,164.73 op/s
  ramda.reverse     ⇝   28.49ms   @   105,289,025.75 op/s

Benchmark: code/reverse.js • Array<object>(500)
  native            ⇝   108.90ms   @   137,745,271.53 op/s
  @arr/reverse      ⇝    24.97ms   @   600,808,207.20 op/s
  compute-reverse   ⇝    24.92ms   @   601,828,233.81 op/s
  lodash.reverse    ⇝   108.61ms   @   138,112,657.39 op/s
  ramda.reverse     ⇝   115.81ms   @   129,518,462.01 op/s

Benchmark: code/reverse.js • Array<object>(1000)
  native            ⇝   228.47ms   @   131,309,208.88 op/s
  @arr/reverse      ⇝    49.63ms   @   604,449,510.00 op/s
  compute-reverse   ⇝    49.53ms   @   605,635,291.03 op/s
  lodash.reverse    ⇝   227.98ms   @   131,591,456.06 op/s
  ramda.reverse     ⇝   218.65ms   @   137,207,731.47 op/s

Benchmark: code/reverse.js • Array<object>(5000)
  native            ⇝   1,104.95ms   @   135,752,569.01 op/s
  @arr/reverse      ⇝     245.78ms   @   610,298,039.74 op/s
  compute-reverse   ⇝     246.19ms   @   609,286,946.61 op/s
  lodash.reverse    ⇝   1,099.73ms   @   136,396,940.16 op/s
  ramda.reverse     ⇝   1,042.09ms   @   143,941,119.70 op/s

Benchmark: code/reverse.js • Array<object>(10000)
  native            ⇝   2,183.13ms   @   137,417,585.65 op/s
  @arr/reverse      ⇝     491.26ms   @   610,669,173.34 op/s
  compute-reverse   ⇝     491.78ms   @   610,030,477.37 op/s
  lodash.reverse    ⇝   2,176.08ms   @   137,862,414.88 op/s
  ramda.reverse     ⇝   2,055.30ms   @   145,963,828.01 op/s
```
</details>


## some

<details>
<summary>:white_check_mark: ↝ Strings</summary>

```
Benchmark: code/some.js • Array<string>(100)
  native        ⇝   31.39ms   @    95,572,066.51 op/s
  @arr/some     ⇝    4.62ms   @   649,970,231.36 op/s
  fastjs.some   ⇝    8.08ms   @   371,111,310.14 op/s
  lodash.some   ⇝    7.92ms   @   379,011,983.98 op/s

Benchmark: code/some.js • Array<string>(500)
  native        ⇝   138.82ms   @     108,050,520.88 op/s
  @arr/some     ⇝    10.19ms   @   1,472,361,420.36 op/s
  fastjs.some   ⇝    10.18ms   @   1,474,190,318.17 op/s
  lodash.some   ⇝    19.77ms   @     758,847,900.93 op/s

Benchmark: code/some.js • Array<string>(1000)
  native        ⇝   274.61ms   @     109,246,174.12 op/s
  @arr/some     ⇝    19.58ms   @   1,531,998,781.96 op/s
  fastjs.some   ⇝    19.59ms   @   1,531,044,608.77 op/s
  lodash.some   ⇝    38.44ms   @     780,417,676.42 op/s

Benchmark: code/some.js • Array<string>(5000)
  native        ⇝   1,367.59ms   @     109,681,830.04 op/s
  @arr/some     ⇝      95.98ms   @   1,562,791,509.45 op/s
  fastjs.some   ⇝      95.44ms   @   1,571,636,578.28 op/s
  lodash.some   ⇝     190.01ms   @     789,411,769.40 op/s

Benchmark: code/some.js • Array<string>(10000)
  native        ⇝   2,734.51ms   @     109,708,953.72 op/s
  @arr/some     ⇝     189.98ms   @   1,579,150,904.35 op/s
  fastjs.some   ⇝     193.08ms   @   1,553,754,369.83 op/s
  lodash.some   ⇝     380.15ms   @     789,171,597.63 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Numbers</summary>

```
Benchmark: code/some.js • Array<number>(100)
  native        ⇝   28.98ms   @     103,514,878.76 op/s
  @arr/some     ⇝    2.70ms   @   1,112,371,386.69 op/s
  fastjs.some   ⇝    2.63ms   @   1,141,495,610.38 op/s
  lodash.some   ⇝    4.08ms   @     734,970,946.60 op/s

Benchmark: code/some.js • Array<number>(500)
  native        ⇝   138.53ms   @     108,281,316.85 op/s
  @arr/some     ⇝    10.26ms   @   1,461,414,990.71 op/s
  fastjs.some   ⇝    10.19ms   @   1,471,623,132.62 op/s
  lodash.some   ⇝    19.57ms   @     766,663,233.72 op/s

Benchmark: code/some.js • Array<number>(1000)
  native        ⇝   274.70ms   @     109,208,271.05 op/s
  @arr/some     ⇝    19.89ms   @   1,508,213,201.22 op/s
  fastjs.some   ⇝    19.64ms   @   1,527,746,939.92 op/s
  lodash.some   ⇝    39.07ms   @     767,924,608.23 op/s

Benchmark: code/some.js • Array<number>(5000)
  native        ⇝   1,370.02ms   @     109,487,419.09 op/s
  @arr/some     ⇝      95.32ms   @   1,573,579,062.04 op/s
  fastjs.some   ⇝      95.12ms   @   1,577,029,501.34 op/s
  lodash.some   ⇝     190.12ms   @     788,991,299.08 op/s

Benchmark: code/some.js • Array<number>(10000)
  native        ⇝   2,735.52ms   @     109,668,238.15 op/s
  @arr/some     ⇝     190.35ms   @   1,576,009,951.31 op/s
  fastjs.some   ⇝     192.00ms   @   1,562,468,726.21 op/s
  lodash.some   ⇝     379.64ms   @     790,232,323.88 op/s
```
</details>

<details>
<summary>:white_check_mark: ↝ Objects</summary>

```
Benchmark: code/some.js • Array<object>(100)
  native        ⇝   28.87ms   @     103,930,859.10 op/s
  @arr/some     ⇝    2.61ms   @   1,148,249,761.16 op/s
  fastjs.some   ⇝    2.62ms   @   1,143,693,237.08 op/s
  lodash.some   ⇝    4.08ms   @     734,939,257.27 op/s

Benchmark: code/some.js • Array<object>(500)
  native        ⇝   138.33ms   @     108,439,114.30 op/s
  @arr/some     ⇝    10.19ms   @   1,472,680,596.79 op/s
  fastjs.some   ⇝    10.36ms   @   1,448,424,919.98 op/s
  lodash.some   ⇝    19.61ms   @     765,096,189.42 op/s

Benchmark: code/some.js • Array<object>(1000)
  native        ⇝   275.28ms   @     108,980,673.36 op/s
  @arr/some     ⇝    19.59ms   @   1,531,707,181.09 op/s
  fastjs.some   ⇝    19.58ms   @   1,531,843,816.06 op/s
  lodash.some   ⇝    38.73ms   @     774,548,001.54 op/s

Benchmark: code/some.js • Array<object>(5000)
  native        ⇝   1,367.23ms   @     109,710,616.73 op/s
  @arr/some     ⇝      95.32ms   @   1,573,647,357.25 op/s
  fastjs.some   ⇝      95.40ms   @   1,572,360,221.81 op/s
  lodash.some   ⇝     190.36ms   @     787,988,342.77 op/s

Benchmark: code/some.js • Array<object>(10000)
  native        ⇝   2,733.99ms   @     109,729,574.68 op/s
  @arr/some     ⇝     189.94ms   @   1,579,443,937.28 op/s
  fastjs.some   ⇝     190.26ms   @   1,576,808,925.05 op/s
  lodash.some   ⇝     379.91ms   @     789,667,248.28 op/s
```
</details>


## unique

<details>
<summary>:mag: ↝ Strings</summary>

```
Benchmark: code/unique.js • Array<string>(5)
  native         ⇝   30.28ms   @    4,954,470.89 op/s
  @arr/unique    ⇝    7.21ms   @   20,792,216.72 op/s
  arr-uniq       ⇝   31.20ms   @    4,807,249.95 op/s
  array-unique   ⇝    5.29ms   @   28,363,601.71 op/s
  lodash.uniq    ⇝    7.68ms   @   19,523,834.50 op/s
  ramda.uniq     ⇝   63.40ms   @    2,366,104.29 op/s

Benchmark: code/unique.js • Array<string>(10)
  native         ⇝   52.06ms   @    5,762,747.12 op/s
  @arr/unique    ⇝   12.46ms   @   24,081,012.38 op/s
  arr-uniq       ⇝   57.25ms   @    5,240,145.57 op/s
  array-unique   ⇝   10.48ms   @   28,616,992.27 op/s
  lodash.uniq    ⇝   14.40ms   @   20,837,936.49 op/s
  ramda.uniq     ⇝   99.78ms   @    3,006,631.88 op/s

Benchmark: code/unique.js • Array<string>(100)
  native         ⇝     426.85ms   @   7,028,199.28 op/s
  @arr/unique    ⇝     502.30ms   @   5,972,532.70 op/s
  arr-uniq       ⇝   2,729.44ms   @   1,099,125.58 op/s
  array-unique   ⇝     850.44ms   @   3,527,594.21 op/s
  lodash.uniq    ⇝     711.29ms   @   4,217,667.12 op/s
  ramda.uniq     ⇝     624.10ms   @   4,806,955.11 op/s

Benchmark: code/unique.js • Array<string>(500)
  native         ⇝    1,915.97ms   @    7,828,936.17 op/s
  @arr/unique    ⇝   12,236.48ms   @    1,225,843.13 op/s
  arr-uniq       ⇝   63,147.73ms   @      237,538.24 op/s
  array-unique   ⇝   23,855.35ms   @      628,789.67 op/s
  lodash.uniq    ⇝    1,288.84ms   @   11,638,333.28 op/s
  ramda.uniq     ⇝    2,904.42ms   @    5,164,538.58 op/s
```
</details>


<br>

> :white_check_mark: &mdash; Denotes function **is** faster than native <br>
> :no_entry_sign: &mdash; Denotes function **is not** faster than native <br>
> :mag: &mdash; Denotes function **is sometimes** faster than native <br>
> :wavy_dash: &mdash; Denotes function has no native counterpart <br>
