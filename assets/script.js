//Display current day
var now = moment().format("dddd, MMM Do YYYY");
$(currentDay).text(now);
//set variables
var allTasks = [];
var tasks = {};
var timeStamp;
var taskDescription;
var timeKeeper;

//create elements for hour blocks
var startTime = moment().startOf("day").add(8, "hours");
var i = 0;
var hr;
while (i < 10) {
  var timeContainer = document.createElement("section");
  timeContainer.setAttribute("class", "row");
  timeContainer.setAttribute("id", "section" + i);
  document.querySelector(".container").appendChild(timeContainer);
  //set time for each block
  hr = moment(startTime).add(i, "hours").format("hh:mm A");
  hr2 = moment(startTime).add(i, "hours").format("HH:mm");

  var hrBlock = document.createElement("p");
  hrBlock.innerText = hr;
  hrBlock.setAttribute("class", "hour col-1");
  hrBlock.setAttribute("id", "hr" + i);
  document.getElementById("section" + i).appendChild(hrBlock);
  //text fields for each block
  var textEl = document.createElement("textarea");
  textEl.setAttribute("id", hr2);
  document.getElementById("section" + i).appendChild(textEl);
  //set class for past/present/future
  var now = moment().format("HH");
  var nowObjEl = moment(now, "HH");
  var timeStamp = moment(hr2, "HH");
  if (nowObjEl.isAfter(timeStamp) === true) {
    textEl.setAttribute("class", "description col-10 tOD past");
  } else if (nowObjEl.isBefore(timeStamp) === true) {
    textEl.setAttribute("class", "description col-10 tOD future");
  } else {
    textEl.setAttribute("class", "description col-10 tOD present");
  }
  //save buttons
  var saveEl = document.createElement("button");
  saveEl.innerText = "save";
  saveEl.setAttribute("class", "saveBtn col-1");
  saveEl.setAttribute("type", "submit");
  saveEl.setAttribute("id", i);
  document.getElementById("section" + i).appendChild(saveEl);
  i++;
}

//recall tasks from local storage
//var loadTasks = function () {
allTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(allTasks);
//if nothing in localStorage, create a new object to track all task status arrays
if (!allTasks) {
  console.log("no tasks");
  allTasks =[]
} else {
  j = 0;
  while (j < allTasks.length) {
    console.log(allTasks[j].timeStamp);
    //document.getElementById((allTasks[j].timeStamp))
    textEl = document.getElementById(allTasks[j].timeStamp);
    textEl.innerText = allTasks[j].taskDescription;
    console.log(allTasks[j].taskDescription);
    j++;
  }
}

//event listeners; load tasks
$(".description").change(function () {
     newTasks = {
    timeStamp: $(this).attr("id"),
    taskDescription: $(this).val(),
  };
  allTasks.push(newTasks);
  console.log(allTasks);
  localStorage.setItem("tasks", JSON.stringify(allTasks));
   });

$(".saveBtn").click(function () {
    console.log($(this).attr("id"))
    
});
