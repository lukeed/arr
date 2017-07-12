# Benchmarks

**Process**

Every new benchmark instance generates its own set of unique fixture data! This data is passed & cloned to _each_ function being benchmarked. In this way, every snippet is working with the _same data_ and is not able to introduce side effects to other codes' execution. It is also important to note that cloning the data-array **is not** tracked as execution time.

Each fixture entry is completely randomized.

* Strings (`--type string`) can consist of any 8-16 character string
* Numbers (`--type number`) can be positive or negative, and are usually 9 digits
* Arrays (`--type array`) are nested every 3rd index; values are Strings (see above) when not another Array
* Objects (`--type object`) are nested every 3rd index; keys are 8 random alpha-chars; and values are Strings (see above) when not another object

Any number of fixtures can be generated. By default, arrays with type `x` and length of 100, 500, 1000, 5000, and 10000 are created. You may use the `--size` flag to pass any number you'd like.

Together, the combination of `--type`s & `--size`s _should_ serve as a good basis for testing & benchmarking these functions (and their competitors) in a fair and wide variety of cases.

Please let me know if there is a way in which I can improve the fairness of these benchmarks. Thanks!


## Setup

```
$ npm install
```

## Usage

Commands should be run from the root `arr` repo; aka `cd ..`

```sh
# run ALL benchmarks -- CAUTION!
$ npm run bench

# run 'map' benchmarks -- string, number, object
$ npm run bench -- map

# specify 'type' and 'size'
$ npm run bench -- map --type string --size 100

# special case: 'flatten'
$ npm run bench -- flatten --type array
```

> **Note:** The `--type` flag defaults to string, number, object. The `--size` flag defaults to 100, 500, 1000, 5000, 10000.

## Results:

* [Node 4](/results/node-4.md)
* [Node 6](/results/node-6.md)
* [Node 7](/results/node-7.md)
* [Node 8](/results/node-8.md)
