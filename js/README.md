# Basic Coding Test

Below are two simple programming problems that may be solved using any
programming language. Please read through the requirements and ask any
clarifying questions prior to starting the test — it typically takes 2-3 hours
to complete.

Package your submission as you would package any code that you'd like to hand
off to another developer.

Thank you, good luck, and have fun!


## 1. Text Blocking

Write a function that takes a single argument, `lines`, which is a list of
strings. Each element of `lines` is a line of prose from some passage. You will
return a list of strings that is read "downward", as opposed to left-to-right.
That is, the first element of `lines` will correspond to the first "column" of
the returned list, and so forth.

#### Constraints

 * `lines` will contain between 1 and 50 elements, inclusive.

 * Each element of `lines` will contain between 1 and 50 characters, inclusive.

 * Each element of `lines` will contain the same number of characters.

 * Each character in `lines` will be an uppercase letter (`[A-Z]`).

#### Examples

Input:

```python
["AAA",
 "BBB",
 "CCC"]
```

Output:

```python
["ABC",
 "ABC",
 "ABC"]
```

So, rows of the input become columns of the output.

Input:

```python
["AAAAAAAAAAAAA"]
```

Output:

```python
["A",
 "A",
 "A",
 "A",
 "A",
 "A",
 "A",
 "A",
 "A",
 "A",
 "A",
 "A",
 "A"]
```

Input:

```python
["A",
 "A",
 "A",
 "A",
 "A"]
```

Output:

```python
["AAAAA"]
```


## 2. Race Average

There is a sailboat race from Rhode Island to Bermuda. It can take several days
to finish.

Create a class, `RaceAverage`, containing a method, `avgMinutes`, that takes a
list of strings, `times`, and returns the average number of minutes taken by
the competitors to complete the race. Round the returned value to the nearest
minute, with .5 rounding up.

Each finish time in `times` is formatted as

    hh:mm xM, DAY n

where `hh` is exactly 2 digits giving the hour, `mm` is exactly 2 digits giving
the minute, `x` is either `'A'` or `'P'`, and `n` is a positive integer less
than 100 with no leading zeros. So each string has exactly 15 or 16 characters
(depending on whether n is less than 10).

The race starts on day 1 at 8:00 AM.


#### Notes

 * `"12:00 AM, DAY d"` refers to midnight between DAY `d-1` and DAY `d`

 * `"12:00 PM, DAY d"` refers to noon on DAY `d`

#### Constraints

 * `times` contains between 1 and 50 elements inclusive

 * each element of `times` is formatted as specified above, with `hh` between
   `01` and `12` inclusive, `mm` between `00` and `59` inclusive, and `d`
   between `1` and `99` inclusive

 * each element of `times` represents a time later than the start of the race.

#### Examples

Input:

```python
["12:00 PM, DAY 1",
 "12:01 PM, DAY 1"]
```

Output:

```python
241
```

From 8:00 AM to noon is 4 hours, so we have 4 hours for one competitor, and 4
hours, 1 minute for the other. These two values average to 240.5 minutes,
which is rounded up.

Input:

```python
["12:00 AM, DAY 2"]
```

Output:

```python
960
```

The one competitor finished in 16 hours, just at the start of DAY 2.

Input:

```python
["02:00 PM, DAY 19",
 "02:00 PM, DAY 20",
 "01:58 PM, DAY 20"]
```

Output:

```python
27239
```
