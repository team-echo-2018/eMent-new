/* Mentor Entity */
var Mentor = function (mentorId, mentorFname, mentorLname, mentorAddress,
    mentorPhone, mentorEmail, mentorImgLink, mentorDescription) {

    this.mentorId = mentorId;
    this.mentorFname = mentorFname;
    this.mentorLname = mentorLname;
    this.mentorAddress = mentorAddress;
    this.mentorPhone = mentorPhone;
    this.mentorEmail = mentorEmail;
    this.mentorImgLink = mentorImgLink;
    this.mentorDescription = mentorDescription;
}

module.exports = Mentor;