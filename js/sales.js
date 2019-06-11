'use strict';

/*
References:
1. Min/Max inclusive random number generator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

// Constructors for the Stores
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

// Functions
function getSalesResults(location){
  var cookiesPerHour = location.salesArray;
  for(var i = location.openTime; i <= location.closeTime; i++){
    var cookies = location.avgCookies();
    cookiesPerHour.push(cookies);
  }
}

function setSalesResults(location, domManip){
  getSalesResults(location);
  domManip.htmlSetter(location);

  var total = 0;

  for(var i=location.openTime;i<=location.closeTime;i++){
    var paddedHours = i.toString();
    paddedHours = paddedHours.padStart(2, '0');
    paddedHours = paddedHours.padEnd(4, '0');
    var message1 = paddedHours + ' : ' + location.salesArray[i-location.openTime] + ' cookies';
    domManip.messageSetter(message1);
    total += location.salesArray[i-location.openTime];
  }
  var message2 = 'Total: ' + total + ' cookies';
  domManip.messageSetter(message2);
}

function startApp(){
  var firstAndPike = new StoreCaller('1st and Pike', 23, 65, 6.3);
  var seaTacAirport = new StoreCaller('Seatac Airport', 3, 24, 1.2);
  var seattleCenter = new StoreCaller('Seattle Center', 11, 38, 3.7);
  var capitolHill = new StoreCaller('Capitol Hill', 20, 38, 2.3);
  var alki = new StoreCaller('Alki', 2, 16, 4.6);

  var fAndPDom = new DomManipulator();
  var seaTacDom = new DomManipulator();
  var seattleDom = new DomManipulator();
  var capitolDom = new DomManipulator();
  var alkiDom = new DomManipulator();

  setSalesResults(firstAndPike, fAndPDom);
  setSalesResults(seaTacAirport, seaTacDom);
  setSalesResults(seattleCenter, seattleDom);
  setSalesResults(capitolHill, capitolDom);
  setSalesResults(alki, alkiDom);
}

// Initialize app
startApp();
