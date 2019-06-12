'use strict';

//allStoreArray.push(new StoreCaller('test', 29, 99, 4.3));





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

function legendItem(fieldSetEl, legendEl, item) {
  legendEl.textContent = item;
  return fieldSetEl.appendChild(legendEl);
}
function labelItem(fieldSetEl, labelEl, item) {
  labelEl.textContent = item;
  return fieldSetEl.appendChild(labelEl);
}

function inputItem(fieldSetEl, inputEl) {
  return fieldSetEl.appendChild(inputEl);
}

function formCreator() {
  var formEl = setFormEl();
  var fieldSetEl = setFieldsetEl();
  legendItem(fieldSetEl, setLegendEl(), 'Add Stores');  
  labelItem(fieldSetEl, setLabelEl(), 'label');
  inputItem(fieldSetEl, setInputEl());

  formEl.appendChild(fieldSetEl);


}

formCreator();
// startApp();

