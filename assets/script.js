var now = moment().format("dddd, MMM Do YYYY");
$(currentDay).text(now);

var tasks = {};

var i = 0;
while (i < 10) {
  var timeContainer = document.createElement("section"); 
  timeContainer.setAttribute('class',"time-block")
  timeContainer.setAttribute('id',"section" + i)
  document.querySelector(".container").appendChild(timeContainer); 
  i++;

}

var hr = 9;
var j = 0;
while (j < 10) {
  var hrBlock = document.createElement("p");
  hrBlock.innerText = hr;  
  hrBlock.setAttribute('class',"hour")
  hrBlock.setAttribute('id',"hr"+j)
  document.getElementById("section"+j).appendChild(hrBlock);
    hr++;
    j++;
}

var k = 0;
while (k < 10) {
  var textEl = document.createElement("textarea");
  textEl.innerText = "tasks placeholder";  
  textEl.setAttribute('class',"row")
  textEl.setAttribute('id',"text"+j)
  document.getElementById("section"+k).appendChild(textEl);
    k++;
}