'use strict';

/*
References:
1. Min/Max inclusive random number generator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

// Global Variabls
var hoursOpenArray = [];
var totalsPerHour = [];

// Constructors for the Stores
function StoreCaller(name, minCust, maxCust, avgCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.openTime = 6;
  this.closeTime = 20;
  this.salesArray = [];
  this.totalPerHour = 0;
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

// Functions
function hoursOpen(){
  for(var i=6; i<21; i++){
    var paddedHours = i.toString();
    paddedHours = paddedHours.padStart(2, '0');
    paddedHours = paddedHours.padEnd(4, '0');
    hoursOpenArray.push(paddedHours);
  }
}

function setSalesResults(location){
  var cookiesPerHour = location.salesArray;
  for(var i = location.openTime; i <= location.closeTime; i++){
    var cookies = location.avgCookies();
    cookiesPerHour.push(cookies);
    location.totalPerHour += cookies;
  }
}

function setTotalPerHour(totalInOneHour){
  var randomArray = [];
  randomArray = totalInOneHour;
  return randomArray;
}

function sum(totals, incrementer){
  var perHour = 0;
  for(var i=0;i<5;i++){
    perHour += totals[i][incrementer];
  }
  return perHour;
}

// DOM Manipulation Functions
function setTableEl(){
  var tableEl = document.getElementById('sales-container');
  return tableEl;
}

function setTrEl(){
  var trEl = document.createElement('tr');
  return trEl;
}

function setTdEl(){
  var tdEl = document.createElement('td');
  return tdEl;
}

function tableItem(trEl, tdEl, item){
  tdEl.textContent = item;
  return trEl.appendChild(tdEl);
}

function tableTitleBar(openHours){
  var tableEl = setTableEl();
  var trEl = setTrEl();

  tableItem(trEl, setTdEl(), 'Store');

  for(var i =0; i< openHours.length; i++){
    tableItem(trEl, setTdEl(), openHours[i]);
  }

  tableItem(trEl, setTdEl(), 'Daily Location Total');
  tableEl.appendChild(trEl);
}

function tableBodyCreator(location){
  var tableEl = setTableEl();
  var trEl = setTrEl();

  tableItem(trEl, setTdEl(), location.name);

  for(var i=0; i<location.salesArray.length; i++){
    tableItem(trEl, setTdEl(), location.salesArray[i]);
  }

  tableItem(trEl, setTdEl(), location.totalPerHour);
  tableEl.appendChild(trEl);

}

function tableTotalsCreator(){
  var tableEl = setTableEl();
  var trEl = setTrEl();

  tableItem(trEl, setTdEl(), 'Totals:');

  var totalSum = 0;
  for(var j=0; j<15; j++){
    tableItem(trEl, setTdEl(), sum(totalsPerHour,j));
    totalSum += sum(totalsPerHour,j);
  }

  tableItem(trEl, setTdEl(), totalSum);
  tableEl.appendChild(trEl);
}

// App initialization
function startApp(){
  var allStoreArray = [];

  allStoreArray.push(new StoreCaller('1st and Pike', 23, 65, 6.3));
  allStoreArray.push(new StoreCaller('Seatac Airport', 3, 24, 1.2));
  allStoreArray.push(new StoreCaller('Seattle Center', 11, 38, 3.7));
  allStoreArray.push(new StoreCaller('Capitol Hill', 20, 38, 2.3));
  allStoreArray.push(new StoreCaller('Alki', 2, 16, 4.6));

  hoursOpen();
  tableTitleBar(hoursOpenArray);
  for(var i=0; i<allStoreArray.length; i++){
    setSalesResults(allStoreArray[i]);
    tableBodyCreator(allStoreArray[i]);
    totalsPerHour[i] = setTotalPerHour(allStoreArray[i].salesArray);
  }
  tableTotalsCreator();
}

startApp();
