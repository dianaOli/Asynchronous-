const oneTimeTasks = [];
let monitoringTaskId = null;
let countdownIntervalId = null;

function addOneTimeTask(func, delay) {
  oneTimeTasks.push({ func, delay });
}

function runOneTimeTasks() {
  oneTimeTasks.forEach(task => {
    setTimeout(task.func, task.delay);
  });
}

function startMonitoring() {
  monitoringTaskId = setInterval(() => {
    console.log("monitoring system.....");
  }, 300);
}

function stopMonitoring() {
  clearInterval(monitoringTaskId);
  console.log("Monitoring stopped....");
}

function countDown(duration) {
  let timeLeft = duration;
  countdownIntervalId = setInterval(() => {
    if (timeLeft > 0) {
      console.log(`countdown: ${timeLeft} seconds remaining...`);
      timeLeft--;
    } else {
      clearInterval(countdownIntervalId);
      console.log("liftoff!!!!");
    }
  }, 300);
}

// Schedule tasks
addOneTimeTask(() => console.log("[Pre-Launch] System check complete."), 1000);

addOneTimeTask(() => {
  console.log("[Pre-Launch] Starting monitoring...");
  startMonitoring();
}, 600);

addOneTimeTask(() => {
  stopMonitoring();
}, 1600);

addOneTimeTask(() => {
  console.log("[Pre-Launch] Starting countdown...");
  countDown(3);
}, 1800);

runOneTimeTasks();