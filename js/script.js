/**
 * JavaScript code for Steelhouse coding exercise.
 * Any CSS is provided in the upper CSS directory.
 */
'use strict';

/**
Write a function that takes a single argument, lines, which is a list of
strings. Each element of lines is a line of prose from some passage. You will
return a list of strings that is read "downward", as opposed to left-to-right.
That is, the first element of lines will correspond to the first "column" of
the returned list, and so forth.

Constraints
+ lines will contain between 1 and 50 elements, inclusive.
+ Each element of lines will contain between 1 and 50 characters, inclusive.
+ Each element of lines will contain the same number of characters.
+ Each character in lines will be an uppercase letter ([A-Z]).

 * @param  {array} lines An array of lines of prose.
 * @return {array}       An array of characters.
 */
function textBlocking (lines) {
  var result = [];
  var idx, tmp, i = 0;
  var chars = lines[0].split('');
  var numChars = chars.length;

  for (; i < numChars; i++) {
    result.push(chars[i]) - 1;
    lines.forEach(function(line, idx) {
      if (idx > 0) result[i] += line.charAt(idx);
    });
  }

  console.info('Problem #1:', result);

  return result;
}

/**
There is a sailboat race from Rhode Island to Bermuda. It can take several days
to finish.

Create a class, RaceAverage, containing a method, avgMinutes, that takes a
list of strings, times, and returns the average number of minutes taken by
the competitors to complete the race. Round the returned value to the nearest
minute, with .5 rounding up.

Each finish time in times is formatted as

hh:mm xM, DAY n
where hh is exactly 2 digits giving the hour, mm is exactly 2 digits giving
the minute, x is either 'A' or 'P', and n is a positive integer less
than 100 with no leading zeros. So each string has exactly 15 or 16 characters
(depending on whether n is less than 10).

The race starts on day 1 at 8:00 AM.

Notes:
"12:00 AM, DAY d" refers to midnight between DAY d-1 and DAY d
"12:00 PM, DAY d" refers to noon on DAY d

Constraints:
+ times contains between 1 and 50 elements inclusive

+ each element of times is formatted as specified above, with hh between
01 and 12 inclusive, mm between 00 and 59 inclusive, and d
between 1 and 99 inclusive

+ each element of times represents a time later than the start of the race.
 */
var getElapsedMinutes = function(timeframe) {
  var time = timeframe.time, days = timeframe.days;
  var parts = time.split(/\:|\s/);
  var hours = parseInt(parts[0], 10);
  var mins = parseInt(parts[1], 10);
  var part = parts[2];
  const start = 480;
  const day = 1440;

  if (hours < 12 && (/PM/i).test(part)) {
    hours += 12;
  } else if (hours == 12 && (/AM/i).test(part)) {
    hours = 0;
  }
  mins += (hours * 60);

  if (days > 1) {
    mins += (day * days);
  }

  return mins - start;
};

function RaceAverage() {
  this.competitors = [];

  this.valueOf = function() {
    return this.avgMinutes(this.competitors);
  };

  this.avgMinutes = function avgMinutes(times) {
    var mins = 0;

    times.forEach(function(time){
      let arrTimes = time.split(', DAY ');
      this.competitors.push({
        time: arrTimes[0], days: arrTimes[1]
      });
    }, this);

    this.competitors.forEach(function(timeframe){
      mins += getElapsedMinutes(timeframe);
    });

    this.average = Math.round(mins / times.length);

    console.info('Problem #2:', this.average);

    return this.average;
  };
}


var $Output;
$(function(){
  var result;
  $Output = $('#Output');

  // Problem #1:
  result = 'Problem #1:\n["'+ textBlocking(['AAA', 'BBB', 'CCC']).join('","') +'"]';
  $Output.append($('<textarea/>').text(result));
  result = 'Problem #1:\n["'+ textBlocking(["AAAAAAAAAAAAA"]).join('","') +'"]';
  $Output.append($('<textarea/>').text(result));
  result = 'Problem #1:\n["'+ textBlocking(['A','A','A','A','A']).join('","') +'"]';
  $Output.append($('<textarea/>').text(result));

  $Output.append('<br>');

  // Problem #2:
  var race = new RaceAverage();

  result = race.avgMinutes(["12:00 PM, DAY 1", "12:01 PM, DAY 1"]);
  $Output.append('<textarea>Problem #2:\n'+ result +'</textarea>');

  result = race.avgMinutes(["12:00 PM, DAY 1", "12:01 PM, DAY 1"]);
  $Output.append('<textarea>Problem #2:\n'+ result +'</textarea>');
});
