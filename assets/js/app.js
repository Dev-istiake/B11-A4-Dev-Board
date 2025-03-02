document.getElementById("discoverNew").addEventListener("click", function () {
   document.location.href = "./blogs.html";
});

const date = new Date();
const currentDay = date.toLocaleString("en-GB", {
   weekday: "short",
});
const currentDate = date.toLocaleString("en-GB", {
   month: "short",
   day: "numeric",
   year: "numeric",
});

document.getElementById(
   "display-current-date"
).innerHTML = `${currentDay}, <br> <span class="font-bold"> ${currentDate} </span>`;

const totalCompletedTask = document.getElementById("total-completed-task");
let totalCompletedTaskCount = parseInt(totalCompletedTask.innerText);

const taskSummary = document.getElementById("task-summary");
const allTasks = taskSummary.querySelectorAll(".task");

let totalTask = Array.from(allTasks);
let totalTaskLengthCount = totalTask.length;

const availableTask = document.getElementById("available-task");
availableTask.innerText = `0${totalTaskLengthCount}`;

const completedBtns = taskSummary.querySelectorAll(".task>div>.completed-btn");

for (let completedBtn of completedBtns) {
   completedBtn.addEventListener("click", function (e) {
      e.currentTarget.disabled = true;

      totalTaskLengthCount--;
      availableTask.innerText = `0${totalTaskLengthCount}`;

      if (totalTaskLengthCount === 0) {
         alert("Board updated Successfully");
         alert("Congrats!!! You have completed all the current task");
      } else {
         alert("Board updated Successfully");
      }

      totalCompletedTaskCount++;
      totalCompletedTask.innerText = `${totalCompletedTaskCount}`;

      const currentTask = e.currentTarget.parentElement.parentElement;
      const currentTaskTitle =
         currentTask.querySelector(".task-title").innerText;
      const updateDate = new Date();
      const currentTime = updateDate.toLocaleTimeString();

      const activityLog = document.getElementById("activity-log");
      const notification = `<div class="p-2.5 bg-[#F4F7FF] rounded-lg text-sm text-gray-500 mb-3.5 font-medium"> <p> You have Complete The Task ${currentTaskTitle} at ${currentTime}</p> </div>`;
      activityLog.insertAdjacentHTML("beforeend", notification);
   });
}

document
   .getElementById("clear-history")
   .addEventListener("click", function (e) {
      document.getElementById("activity-log").innerHTML = " ";
   });
