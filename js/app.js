'use strict';

var companyInfo = {
  storeHours : ['Open Time: 0600 (6am)', 'Close Time: 2000 (8am)']
};

/*
DOM MANIPULTATION
*/
function setSectionEl(){
  var sectionEl = document.getElementById('section-container');
  return sectionEl;
}

function setUlEl() {
  var ulEl = document.createElement('ul');
  return ulEl;
}

function setLiEl(){
  var liEl = document.createElement('li');
  return liEl;
}

function setH2El(){
  var h2El = document.createElement('h2');
  return h2El;
}

// function listItem and h2Item add the text to the HTML element and appends
function listItem(ulEl, liEl, text){
  liEl.textContent = text;
  return ulEl.appendChild(liEl);
}

function h2Item(ulEl, liEl, h2El, text){
  h2El.textContent = text;
  liEl.appendChild(h2El);
  return ulEl.appendChild(liEl);
}

// function creates the list and appends it to the section element
function listCreator(insertItem, numLiItems, h2Name){
  var sectionEl = setSectionEl();
  var ulEl = setUlEl();

  if(h2Item !== null){
    h2Item(ulEl, setLiEl(), setH2El(), h2Name);
  }

  for(let i=0;i<numLiItems;i++){
    listItem(ulEl, setLiEl(), insertItem[i]);
  }

  sectionEl.appendChild(ulEl);
}

/*
APP INITIALIZER
*/
function appInitializer(){
  listCreator(companyInfo.storeHours, companyInfo.storeHours.length, 'Hours of Operation');
}

appInitializer();
