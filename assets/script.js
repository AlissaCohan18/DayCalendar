//Display current day at top of page
var now = moment().format("dddd, MMM Do YYYY");
$(currentDay).text(now);
//set variables
var allTasks = [];
var timeStamp;
var taskId;
var saveId;

//create elements for hour blocks
var startTime = moment().startOf("day").add(8, "hours");
var i = 0;
var hr;
while (i < 10) {
  var timeContainer = document.createElement("section");
  timeContainer.setAttribute("class", "time-block row");
  timeContainer.setAttribute("id", "section" + i);
  document.querySelector(".container").appendChild(timeContainer);
  //set a.m. & p.m. for time blocks and military time for id comparisons
  hr = moment(startTime).add(i, "hours").format("hh:mm A");
  hr2 = moment(startTime).add(i, "hours").format("HH:mm");
  var hrBlock = document.createElement("p");
  hrBlock.innerText = hr;
  hrBlock.setAttribute("class", "hour col-1");
  hrBlock.setAttribute("id", "hr" + i);
  document.getElementById("section" + i).appendChild(hrBlock);
  //create text fields for each block
  var textEl = document.createElement("textarea");
  textEl.setAttribute("id", hr2);
  textEl.setAttribute("id", "cd" + i);
  document.getElementById("section" + i).appendChild(textEl);
  //set class for past/present/future
  now = moment().format("HH");
  var nowObjEl = moment(now, "HH");
  var timeStamp = moment(hr2, "HH");
  if (nowObjEl.isAfter(timeStamp) === true) {
    textEl.setAttribute("class", "description col-10 past");
  } else if (nowObjEl.isBefore(timeStamp) === true) {
    textEl.setAttribute("class", "description col-10 future");
  } else {
    textEl.setAttribute("class", "description col-10 present");
  }
  //save buttons
  var saveEl = document.createElement("button");
  saveEl.innerText = "save";
  saveEl.setAttribute("class", "saveBtn col-1");
  saveEl.setAttribute("id", i);
  document.getElementById("section" + i).appendChild(saveEl);
  i++;
}

//recalls and loads from local storage, or creates empty object if nothing stored
allTasks = JSON.parse(localStorage.getItem("tasks"));
if (!allTasks) {
  allTasks = [];
} else {
  j = 0;
  while (j < allTasks.length) {
    textEl = document.getElementById(allTasks[j].timeStamp);
    textEl.innerText = allTasks[j].taskDescription;
    j++;
  }
}

//update task description when saved
$(".description").change(function () {
  var newTasks = {
    timeStamp: $(this).attr("id"),
    taskDescription: $(this).val(),
  };
  //event listener for saving
  $(".saveBtn").click(function () {
    if ("cd" + $(this).attr("id") === newTasks.timeStamp) {
      allTasks.push(newTasks);
      localStorage.setItem("tasks", JSON.stringify(allTasks));
    }
  });
});
