/* Milestone Entity */
var Milestone = function (milestoneId, milestoneSupposedDate,
    milestoneArchivedDate, milestoneDescription) {

    this.milestoneId = milestoneId;
    this.milestoneSupposedDate = milestoneSupposedDate;
    this.milestoneArchivedDate = milestoneArchivedDate;
    this.milestoneDescription = milestoneDescription;
}

module.exports = Milestone;
