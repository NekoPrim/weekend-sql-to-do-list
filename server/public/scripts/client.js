$(document).ready(onReady);



// call functions to preform
function onReady() {
    console.log('lets complete some tasks!');

    // call button function on click
    $('#taskBtn').on('click', sendTask);

    // GET stored tasks from database
    getTasks();
}



// function to send input to server side
function sendTask() {
    console.log('in onAdd');

    // capture input value
    let newTask = $('#taskInput').val();
    console.log('new task:', newTask);

    // ajax POST function
    $.ajax({
        method: 'POST',
        url: '/to-do',
        data: { task: newTask }
    })
        .then(function(response) {
            console.log('sending:', response);

            // clear input value
            $('#taskInput').val('');

            // call tasks from server side
            getTasks();
        })
        .catch(function(err) {

            // tell client of failure
            console.log('ajax POST failed!', err);
        });
}



// function to receive tasks from the server side
function getTasks() {
    console.log('in getTasks');

    // ajax GET function
    $.ajax({
        method: 'GET',
        url: '/to-do'
    })
        .then(function(response) {
            console.log('ajax GET response', response);

            // call render function
            render(response);
        })
        .catch((err) => {

            // tell client of failure
            console.log('ajax GET failure!', err);
        })
}



// function to render tasks to DOM
function render() {
    console.log('in render');
}

