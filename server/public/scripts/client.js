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

    // call complete button function on click
    $(document).on('click', '#completedBtn', updateTask);
}// end onReady



// function to send input to server side
function postTask() {
    console.log('in onAdd');

    // capture input value
    let newTask = $('#taskInput').val();
    console.log('new task:', newTask);

    // ajax POST function
    // send task to server side
    $.ajax({
        method: 'POST',
        url: '/to-do',
        data: { task: newTask }
    })
        .then(function(response) {
            console.log('ajax POST task:', response);

            // clear input value
            $('#taskInput').val('');

            // call tasks from server side
            getTasks();
        })
        .catch(function(err) {
            // tell client of failure
            console.log('ajax POST failed!', err);
        });
}// end postTask



// function to receive tasks from the server side
function getTasks() {
    console.log('in getTasks');

    // ajax GET function
    // receive tasks from server side
    $.ajax({
        method: 'GET',
        url: '/to-do'
    })
        .then(function(response) {
            console.log('ajax GET task:', response);

            // call render function
            render(response);
        })
        .catch((err) => {
            // tell client of failure
            console.log('ajax GET failed!', err);
        })
}// end getTasks



// function to render tasks to DOM
function render(response) {
    console.log('in render');

    // empty table body
    $('#taskList').empty();

    // append all tasks to DOM
    for (let i = 0; i < response.length; i ++) {
        let chore = response[i];
        $('#taskList').append(`
            <tr data-id="${chore.id}" data-completed="${chore.completed}">

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
}// end render



// function to update task on server side
function updateTask() {
    console.log('in updateTask');

    // capture id and completed where clicked
    let taskId = $(this).parents("tr").data("id");
    let taskCompleted = $(this).parents("tr").data("completed");

    // check data sent
    console.log('update:', taskId, taskCompleted)

    // ajax PUT function
    // send id and completed true to server side
    $.ajax({
        method: 'PUT',
        url: `/to-do/${taskId}`,
        data: { completed: !taskCompleted }
    })
        .then(() => {
            console.log('ajax PUT task:', taskId, taskCompleted);

            // reload task table
            getTasks();
        })
        .catch((err) => {
            // tell client of failure
            console.log('ajax PUT failed!', err);
        });
}// end updateTask



// function to send task id to server side
function deleteTask() {
    console.log('in deleteTask');

    // capture id where clicked
    let taskId = $(this).parents("tr").data("id");
    console.log('task id:', taskId);

    // ajax GET function
    // send task id to server side
    $.ajax({
        method: 'DELETE',
        url: `/to-do/${taskId}`
    })
        .then((res) => {
            console.log('ajax DELETE task:', res);

            // reload task table
            getTasks();
        })
        .catch((err) => {
            // tell client of failure
            console.log('ajax DELETE failed!');
        });
}// end deleteTask