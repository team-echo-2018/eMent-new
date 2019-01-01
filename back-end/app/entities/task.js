/* Task Entity */
var Task = function (taskId, taskResponsibleStudent, taskArchivedDate,
    taskSupposedDate, taskDescription) {

    this.taskId = taskId;
    this.taskResponsibleStudent = taskResponsibleStudent;
    this.taskArchivedDate = taskArchivedDate;
    this.taskSupposedDate = taskSupposedDate;
    this.taskDescription = taskDescription;
}

module.exports = Task;
