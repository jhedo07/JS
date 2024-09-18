// setTimeout() = function in javascript that allows you to schedule
//                  the execution of a function after an amount of time (milliseconds)
//                  Times are approximate (variables based on the workload of the Javascript runtime env.)
//                   setTimeout(callback, delay);
//                   clearTimeout(timeoutId) = can cancel a timeout before it triggers 



function startTimer() {
    setTimeout(() => window.alert("Hello"), 3000);
}