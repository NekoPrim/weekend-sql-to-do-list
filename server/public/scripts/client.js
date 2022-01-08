$(document).ready(onReady);



// call functions to preform
function onReady() {
    console.log('lets complete some tasks!');

    // call task button function on click
    $('#taskBtn').on('click', postTask);

    // GET stored tasks from database
    getTasks();

    // call delete button function on click
    $(document).on('click', '#deleteBtn', deleteTask);
}



// function to send input to server side
function postTask() {
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
function render(response) {
    console.log('in render');

    // empty table body
    $('#taskList').empty();

    // append all tasks to DOM
    for (let i = 0; i < response.length; i ++) {
        let chore = response[i];
        $('#taskList').append(`
            <tr data-id="${chore.id}">

                <td>${chore.task}</td>
                <td>${chore.completed}</td>
                <td>
                    <button id="completedBtn">
                        Complete
                    </button>
                </td>
                <td>
                    <button id="deleteBtn">
                        Delete
                    </button>
                </td>

            </tr>
        `);
    }
}



// function to send task id to server side
function deleteTask() {
    console.log('in deleteTask');

    // capture id of row of button clicked on
    let todo = $(this).parents("tr").data("id");
    console.log('task id:', todo);
}