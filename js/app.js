'use strict';
/*
Objectives:
Create a separate JS object literal for easch shop location that does the following:
1. Store the min/max hourly customers, and the average cookies per customer, in object properties

2. Use a method of that object to generate a random number of customers per hour. (Math.random())

3. Calculate and store the simulated amounts of cookies purchased for each hour at easch location using average cookies purchased and the random number of customers generated

4. Store the results for each location in a separate array... perhaps as a property of the object representing that location

5. Display the values of each array as unordered lists in the browser

6. Calculate the sum of these hourly totals
*/

// stores

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  aveCust: 6.3,
  randomCust: function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  aveCust: 1.2,
  randomCust: function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  aveCust: 3.7,
  randomCust: function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  aveCust: 2.3,
  randomCust: function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  aveCust: 4.6,
  randomCust: function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

console.log(firstAndPike);

