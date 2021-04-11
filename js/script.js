var numarTask = 1;

function adaugareTask() {
    // var task = $('#task').val();
    var eUrgent = $('#urgent').is(':checked');
    var divClass = "form-control";
    if (eUrgent) {
        divClass += " alert-danger";
    }
    $('#lista').append(`
    <div class="input-group" id="` + numarTask + `">
    <button class="btn btn-default">
    <span><input type="checkbox" id="urgent"></span>
  </button>

        <input type="text" class="` + divClass + `">
        <div class="input-group-btn">
                <button type="button" class="btn btn-info" onclick="return stergereTask(` + numarTask + `);">
                  <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                </button>
        </div>
    </div>
    `);
    ++numarTask;
    return false;
}

function stergereTask(idTask) {
    $('#' + idTask).remove();
    return false;
}