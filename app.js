function sendToLocalStorage() {

    let currentDate = new Date();
    
    let taskName = document.getElementById("taskName").value;
    let taskDate = document.getElementById("taskDate").value;
    let assignedName = document.getElementById("assignedName").value;

    if(taskName && taskDate && assignedName) {
        let taskObj = {
            taskName: taskName,
            taskDate: taskDate,
            assignedName: assignedName
        }
    
        localStorage.setItem(currentDate.getTime(), JSON.stringify(taskObj));
        updateDashboard();
    }
    else {
        alert("Please enter the correct details");
    }   
}

function updateDashboard() {
    clearFields();
    let data = window.localStorage;
    document.getElementById('output').innerHTML = "";

    let tableContent = '';
    for (var i = 0; i < data.length; i++) {
        tableContent +=
            "<tr><td  scope='row' style='font-weight: 700;'>" + (i+1) + "</td>" +
            "<td>" + JSON.parse(data.getItem(data.key(i))).taskName + "</td>" +
            "<td>" + JSON.parse(data.getItem(data.key(i))).taskDate + "</td>" +
            "<td>" + JSON.parse(data.getItem(data.key(i))).assignedName + "</td>" +
            "<td><button type='button' class='btn btn-danger' onclick='btnRemove(" + data.key(i) + ")'>Remove</button></td>";
    }
    document.getElementById('output').innerHTML += tableContent;
}

function btnRemove(key) {
    localStorage.removeItem(key);
    updateDashboard();
}

function clearFields() {
    document.getElementById("taskName").value = '';
    document.getElementById("taskDate").value = '';
    document.getElementById("assignedName").value = '';
}

updateDashboard();

// function datesAssignment(){
//      let todaysDate = new Date();
//      let lastday = todaysDate.getDate()  + 7 - (todaysDate.getDay());
//      console.log("Today's day is "+ todaysDate.toLocaleDateString('default', { weekday: 'long' }) + " and today's month is "+ todaysDate.toLocaleDateString('default', { month: 'long' }));
//      console.log("Next weekend wil come in  " + (7 - (todaysDate.getDay())) + " days and date is "+ new Date(todaysDate.setDate(lastday)));
// }

// datesAssignment();