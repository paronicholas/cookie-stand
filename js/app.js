'use strict';

var companyInfo = {
  storeLoc : ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],
  storeHours : ['Open Time: 0600 (6am)', 'Close Time: 2000 (8am)']
};

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

function listItem(ulEl, liEl, item){
  liEl.textContent = item;
  return ulEl.appendChild(liEl);
}

function setH2El(){
  var h2El = document.createElement('h2');
  return h2El;
}

function h2Item(ulEl, liEl, h2El, item){
  h2El.textContent = item;
  liEl.appendChild(h2El);
  return ulEl.appendChild(liEl);
}

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

function appInitializer(){
  listCreator(companyInfo.storeLoc, companyInfo.storeLoc.length, 'Store Locations');
  listCreator(companyInfo.storeHours, companyInfo.storeHours.length, 'Hours of Operation');
}

appInitializer();
