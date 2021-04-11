var taskNumber = 1;

function addTask() {
    // var task = $('#task').val();
    var eUrgent = $('#urgent').is(':checked');
    var divClass = "form-control";
    if (eUrgent) {
        divClass += " alert-danger";
    }
    $('#lista').append(`
    <div class="input-group" id="` + taskNumber + `">
        <button class="btn btn-default">
            <span><input type="checkbox" id="urgent"></span>
        </button>

        <input type="text" class="` + divClass + `">
        <div class="input-group-btn">
            <button type="button" class="btn btn-info" onclick="return deleteTask(` + taskNumber + `);">
                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
        </div>
    </div>
    `);
    ++taskNumber;
    return false;
}

function deleteTask(idTask) {
    $('#' + idTask).remove();
    return false;
}