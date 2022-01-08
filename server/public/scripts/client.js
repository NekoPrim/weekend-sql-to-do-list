$(document).ready(onReady);



// call functions to preform
function onReady() {
    console.log('lets complete some tasks!');

    // call button function
    $('#taskBtn').on('click', sendTask);
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

            // call stored tasks from server side
            getTasks();
        })
        .catch(function(error) {
            console.log('ajax POST failed!', error);
        });
}


// ajax GET function
function getTasks() {
    console.log('in getTasks');


}

