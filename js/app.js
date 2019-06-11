'use strict';

/*
References:
1. Min/Max inclusive random number generator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

// stores
// constructors
function StoreCaller(name, minCust, maxCust, avgCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.openTime = 6;
  this.closeTime = 20;
  this.salesArray = [];
  this.randomCust = function(){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    var randomNumCust = Math.floor(Math.random() * (max-min+1)) + min;
    return randomNumCust;
  };
  this.avgCookies = function(){
    var avgPerHour = Math.floor(this.randomCust() * this.avgCust);
    return avgPerHour;
  };
}

function DomManipulator(){
  this.salesContainer = document.getElementById('sales-container');
  this.ulEl = document.createElement('ul');
  this.liOfh2El = document.createElement('li');
  this.h2El = document.createElement('h2');
  this.liEl = document.createElement('li');
  this.htmlSetter = function(location){
    this.h2El.textContent = location.name;
    this.salesContainer.appendChild(this.ulEl);
    this.ulEl.appendChild(this.liOfh2El);
    this.liOfh2El.appendChild(this.h2El);
    this.ulEl.appendChild(this.liEl);
  };
  this.messageSetter = function(message){
    this.liEl.textContent = message;
    this.liEl = document.createElement('li');
    this.ulEl.appendChild(this.liEl);
  };
}

//functions
// get and set sales results
function getSalesResults(location){
  var cookiesPerHour = location.salesArray;
  for(var i = location.openTime; i <= location.closeTime; i++){
    var cookies = location.avgCookies();
    cookiesPerHour.push(cookies);
  }
  return cookiesPerHour;
}

function setSalesResults(location, domManip){
  domManip.htmlSetter(location);

  // sales results
  var hours = location.openTime;
  var total = 0;

  for(var i=0;i<15;i++){
    var tempHour = hours;
    if(hours>12){
      tempHour -= 12;
      tempHour += 'pm';
    } else if(hours === 12){
      tempHour += 'pm';
    } else{
      tempHour += 'am';
    }
    var message1 = tempHour + ': ' + location.salesArray[i] + ' cookies';
    domManip.messageSetter(message1);
    total += location.salesArray[i];
    hours++;
  }
  var message2 = 'Total: ' + total + ' cookies';
  domManip.messageSetter(message2);
}

// Calls for main execution
var firstAndPike = new StoreCaller('1st and Pike', 23, 65, 6.3);
var fAndPDom = new DomManipulator();
var seaTacAirport = new StoreCaller('Seatac Airport', 3, 24, 1.2);
var seaTacDom = new DomManipulator();
var seattleCenter = new StoreCaller('Seattle Center', 11, 38, 3.7);
var seattleDom = new DomManipulator();
var capitolHill = new StoreCaller('Capitol Hill', 20, 38, 2.3);
var capitolDom = new DomManipulator();
var alki = new StoreCaller('Alki', 2, 16, 4.6);
var alkiDom = new DomManipulator();

getSalesResults(firstAndPike);
setSalesResults(firstAndPike, fAndPDom);
getSalesResults(seaTacAirport);
setSalesResults(seaTacAirport, seaTacDom);
getSalesResults(seattleCenter);
setSalesResults(seattleCenter, seattleDom);
getSalesResults(capitolHill);
setSalesResults(capitolHill, capitolDom);
getSalesResults(alki);
setSalesResults(alki, alkiDom);
