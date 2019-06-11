'use strict';
/*
Objectives:
Create a separate JS object literal for easch shop location that does the following:
1. Store the min/max hourly customers, and the average cookies per customer, in object properties

2. Use a method of that object to generate a random number of customers per hour. (Math.random())

3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

4. Store the results for each location in a separate array... perhaps as a property of the object representing that location

5. Display the values of each array as unordered lists in the browser

6. Calculate the sum of these hourly totals
*/

/*
References:
1. Min/Max inclusive random number generator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

// stores

var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  aveCust: 6.3,
  openTime: 6,
  closeTime: 20,
  salesArray: [],
  randomCust: function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    var randomNumCust = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumCust;
  },
  aveCookies: function(){
    var avePerHour = Math.floor(this.randomCust() * this.aveCust);
    return avePerHour;
  }
};

var seaTacAirport = {
  name: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  aveCust: 1.2,
  openTime: 6,
  closeTime: 20,
  salesArray: [],
  randomCust: function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    var randomNumCust = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumCust;
  },
  aveCookies: function(){
    var avePerHour = Math.floor(this.randomCust() * this.aveCust);
    return avePerHour;
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  aveCust: 3.7,
  openTime: 6,
  closeTime: 20,
  salesArray: [],
  randomCust: function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    var randomNumCust = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumCust;
  },
  aveCookies: function(){
    var avePerHour = Math.floor(this.randomCust() * this.aveCust);
    return avePerHour;
  }
};

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  aveCust: 2.3,
  openTime: 6,
  closeTime: 20,
  salesArray: [],
  randomCust: function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    var randomNumCust = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumCust;
  },
  aveCookies: function(){
    var avePerHour = Math.floor(this.randomCust() * this.aveCust);
    return avePerHour;
  }
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  aveCust: 4.6,
  openTime: 6,
  closeTime: 20,
  salesArray: [],
  randomCust: function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    var randomNumCust = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumCust;
  },
  aveCookies: function(){
    var avePerHour = Math.floor(this.randomCust() * this.aveCust);
    return avePerHour;
  }
};

// get and set sales results
function getSalesResults(location){
  var cookiesPerHour = location.salesArray;
  for(var i = location.openTime; i <= location.closeTime; i++){
    var cookies = location.aveCookies();
    cookiesPerHour.push(cookies);
  }
  return cookiesPerHour;
}

function setSalesResults(location){
  var salesContainer = document.getElementById('sales-container');
  var liEl = document.createElement('li');
  var sectionEl = document.createElement('section');
  var h2El = document.createElement('h2');
  var insideUlEl = document.createElement('ul');
  var hours = firstAndPike.openTime;
  var total = 0;

  h2El.textContent = location.name;
  sectionEl.appendChild(h2El);
  sectionEl.appendChild(insideUlEl);

  for(var i=0;i<15;i++){
    liEl.appendChild(sectionEl);
    var tempHour = hours;
    if (hours > 12){
      tempHour -= 12;
      tempHour += 'pm';
    } else if(hours === 12){
      tempHour += 'pm';
    } else {
      tempHour += 'am';
    }
    var message1 = tempHour + ': ' + firstAndPike.salesArray[i] + ' cookies';
    var hoursLiEl = document.createElement('li');
    hoursLiEl.textContent = message1;
    insideUlEl.appendChild(hoursLiEl);
    salesContainer.appendChild(liEl);
    total += firstAndPike.salesArray[i];
    console.log(total);
    hours++;
  }
  var message2 = 'Total: ' + total + 'cookies';
  hoursLiEl = document.createElement('li');
  hoursLiEl.textContent = message2;
  insideUlEl.appendChild(hoursLiEl);
}


getSalesResults(firstAndPike);
setSalesResults(firstAndPike);
getSalesResults(seaTacAirport);
setSalesResults(seaTacAirport);
getSalesResults(seattleCenter);
setSalesResults(seattleCenter);
getSalesResults(capitolHill);
setSalesResults(capitolHill);
getSalesResults(alki);
setSalesResults(alki);

