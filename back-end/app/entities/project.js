/* Project Entity */
var Project = function (projectId, projectLeadMentor, projectStartingDate, projectDuration) {

    this.projectId = projectId;
    this.projectLeadMentor = projectLeadMentor;
    this.projectStartingDate = projectStartingDate;
    this.projectDuration = projectDuration;
}

module.exports = Project;