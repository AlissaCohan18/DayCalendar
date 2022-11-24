//Display current day
var now = moment().format("dddd, MMM Do YYYY");
$(currentDay).text(now);

var tasks = {};

//create elements for hour blocks, text area, and task save buttons
var startTime = moment().startOf('day').add(8, 'hours');
var i = 0;
var hr
while (i < 10) {
  var timeContainer = document.createElement("section");
  timeContainer.setAttribute("class", "row");
  timeContainer.setAttribute("id", "section" + i);
  document.querySelector(".container").appendChild(timeContainer);

  //set time for each block
  hr = moment(startTime)
  .add(i, 'hours')
  .format('hh:mm A'); 
    
  var hrBlock = document.createElement("p");
  hrBlock.innerText = hr;
  hrBlock.setAttribute("class", "hour col-1");
  hrBlock.setAttribute("id", "hr" + i);
  document.getElementById("section" + i).appendChild(hrBlock);

  var textEl = document.createElement("textarea");
  textEl.innerText = "tasks placeholder";
  textEl.setAttribute("class", "description col-10");
  textEl.setAttribute("id", "text" + i);
  document.getElementById("section" + i).appendChild(textEl);

  var saveEl = document.createElement("button");
  saveEl.innerText = "save";
  saveEl.setAttribute("class", "saveBtn col-1");
  saveEl.setAttribute("id", "save" + i);
   document.getElementById("section" + i).appendChild(saveEl);
  i++;
}

//event listeners for adding tasks
