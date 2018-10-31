var Mentor = function(mentorId, mentorFname,mentorLname, mentorAddress, mentorPhone, mentorEmail,mentorImglink, mentorDescription){

    this.mentorId = mentorId;
    this.mentorFname = mentorFname;
    this.mentorLname = mentorLname;
    this.mentorAddress = mentorAddress;
    this.mentorPhone = mentorPhone;
    this.mentorEmail = mentorEmail;
    this.mentorImglink = mentorImglink;
    this.mentorDescription = mentorDescription;

}

module.exports = Mentor;