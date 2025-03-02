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

      console.log(totalTaskLengthCount);

      const currentTask = e.currentTarget.parentElement.parentElement;
      if (totalTaskLengthCount === 0) {
         alert("Board updated successfully");
         alert("Congrats!!! You have completed all the current task");
      } else {
         alert("Board updated successfully");
      }

      totalCompletedTaskCount++;
      totalCompletedTask.innerText = `${totalCompletedTaskCount}`;

      const currentTaskTitle =
         currentTask.querySelector(".task-title").innerText;

      const activityLog = document.getElementById("activity-log");
      const notification = `<div class="p-2.5 bg-[#F4F7FF] rounded-lg text-gray-500 mb-3.5"> <p> You have Complete The Task ${currentTaskTitle} </p> </div>`;
      activityLog.insertAdjacentHTML("beforeend", notification);
   });
}
