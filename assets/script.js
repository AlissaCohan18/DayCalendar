//Display current day
var now = moment().format("dddd, MMM Do YYYY");
$(currentDay).text(now);

var tasks = {};
var timeStamp;
var taskDescription;
var timeKeeper;

//create elements for hour blocks, text area, and task save buttons
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

  var textEl = document.createElement("textarea");
  textEl.innerText = "tasks placeholder";
  textEl.setAttribute("id", hr2);
  document.getElementById("section" + i).appendChild(textEl);
  //set class past/present/future
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

  var saveEl = document.createElement("button");
  saveEl.innerText = "save";
  saveEl.setAttribute("class", "saveBtn col-1");
  saveEl.setAttribute("id", "save" + i);
  document.getElementById("section" + i).appendChild(saveEl);
  i++;
}

//recall tasks from local storage
var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(tasks);
  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    console.log("no tasks");
    tasks = {
      timeStamp: [],
      taskDescription: [],
    };
  }
  // loop over object properties
  // $.each(tasks, function (list, arr) {
  // then loop over sub-array
  //  arr.forEach(function (task) {
  //    createTask(task.text, task.date, list);
  //  });
  // });
};

loadTasks();

//event listeners for adding tasks
