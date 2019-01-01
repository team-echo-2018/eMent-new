/* Student Entity */
var Student = function (studentId, studentFname, studentLname, studentAddress,
    studentPhone, studentEmail, studentImgLink, studentDescription) {

    this.studentId = studentId;
    this.studentFname = studentFname;
    this.studentLname = studentLname;
    this.studentAddress = studentAddress;
    this.studentPhone = studentPhone;
    this.studentEmail = studentEmail;
    this.studentImgLink = studentImgLink;
    this.studentDescription = studentDescription;
}

module.exports = Student;
