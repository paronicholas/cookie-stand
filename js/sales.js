'use strict';

/*
References:
1. Min/Max inclusive random number generator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

// Global Variabls
var allStoreArray = [];
var hoursOpenArray = [];
var totalsPerHour = [];
var itemsForStore = ['Store Name: ', 'Minimum Customers: ', 'Maximum Customers: ', 'Average Cookies Sold: '];
var itemIds = ['newStore', 'minCust', 'maxCust', 'avgCook'];


/*
STORE CONSTRUCTOR
*/
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
    var randomNumCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return randomNumCust;
  };
  this.avgCookies = function(){
    var avgPerHour = Math.floor(this.randomCust() * this.avgCust);
    return avgPerHour;
  };
}

/*
FUNCTIONS
*/
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

function hourlyTotalSum(totals, incrementer){
  var perHour = 0;
  for(var i=0;i<totals.length;i++){
    perHour += totals[i][incrementer];
  }
  return perHour;
}

/*
DOM Manipulation Functions
*/
// set HTML elements
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

function setFormEl() {
  var formEl = document.getElementById('store-adder');
  return formEl;
}

function setFieldsetEl() {
  var fieldSetEl = document.createElement('fieldset');
  return fieldSetEl;
}

function setLegendEl() {
  var legendEl = document.createElement('legend');
  return legendEl;
}

function setLabelEl() {
  var labelEl = document.createElement('label');
  return labelEl;
}

function setInputEl() {
  var inputEl = document.createElement('input');
  return inputEl;
}

function setButtonEl() {
  var buttonEl = document.createElement('button');
  return buttonEl;
}

function setBrEl() {
  var brEl = document.createElement('br');
  return brEl;
}

// Item builders to set textContent
function tableItem(trEl, tdEl, item){
  tdEl.textContent = item;
  return trEl.appendChild(tdEl);
}

function legendItem(fieldSetEl, legendEl, item){
  legendEl.textContent = item;
  return fieldSetEl.appendChild(legendEl);
}
function labelItem(fieldSetEl, labelEl, item, itemId){
  labelEl.setAttribute('type', 'text');
  labelEl.setAttribute('for', itemId);
  labelEl.textContent = item;
  return fieldSetEl.appendChild(labelEl);
}

function inputItem(fieldSetEl, inputEl, itemId) {
  inputEl.setAttribute('name', itemId);
  return fieldSetEl.appendChild(inputEl);
}

function buttonItem(fieldSetEl, buttonEl, item){
  buttonEl.setAttribute('type', 'submit');
  buttonEl.textContent = item;
  return fieldSetEl.appendChild(buttonEl);
}

function brItem(fieldSetEl, brEl){
  return fieldSetEl.appendChild(brEl);
}

// Builders/Creators
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
    tableItem(trEl, setTdEl(), hourlyTotalSum(totalsPerHour,j));
    totalSum += hourlyTotalSum(totalsPerHour,j);
  }

  tableItem(trEl, setTdEl(), totalSum);
  tableEl.appendChild(trEl);
}

function formCreator(items) {
  var formEl = setFormEl();
  var fieldSetEl = setFieldsetEl();
  legendItem(fieldSetEl, setLegendEl(), 'Add Store');
  for(let i=0;i<items.length;i++){
    labelItem(fieldSetEl, setLabelEl(), items[i], itemIds[i]);
    inputItem(fieldSetEl, setInputEl(), itemIds[i]);
    brItem(fieldSetEl, setBrEl());
    brItem(fieldSetEl, setBrEl());
  }
  buttonItem(fieldSetEl, setButtonEl(), 'Submit');

  formEl.appendChild(fieldSetEl);

  formEl.addEventListener('submit', function(e){
    e.preventDefault();
    var name = e.target.newStore.value;
    var min = e.target.minCust.value;
    var max = e.target.maxCust.value;
    var avg = e.target.avgCook.value;
    var newStore = new StoreCaller(name, min, max, avg);
    console.log(newStore);
    allStoreArray.push(newStore);
    document.getElementById('sales-container').innerHTML = '';
    tableBuilder();
  });
}

// Combines the table building elements to build and render the table
// with data inserted added for store hours. Allows for resetting the
// table data everytime a new form is submitted.
function tableRender(){
  tableTitleBar(hoursOpenArray);

  for(var i=0; i<allStoreArray.length; i++){
    if(allStoreArray.length > 5){
      allStoreArray[i].salesArray = []; // reset the salesArray to empty when adding a new store
    }
    setSalesResults(allStoreArray[i]);
    tableBodyCreator(allStoreArray[i]);
    totalsPerHour[i] = setTotalPerHour(allStoreArray[i].salesArray); // adds salesArray for each store as an array into totalsPerHour array
  }
  tableTotalsCreator();
}

/*
APP INITIALIZER
*/
function startApp(){
  formCreator(itemsForStore);
  allStoreArray.push(new StoreCaller('1st and Pike', 23, 65, 6.3));
  allStoreArray.push(new StoreCaller('Seatac Airport', 3, 24, 1.2));
  allStoreArray.push(new StoreCaller('Seattle Center', 11, 38, 3.7));
  allStoreArray.push(new StoreCaller('Capitol Hill', 20, 38, 2.3));
  allStoreArray.push(new StoreCaller('Alki', 2, 16, 4.6));

  hoursOpen();
  tableRender();
}

startApp();
