/**
 * Definitions for DB queries and related functions.
 * Backend-Mysql-Database will call to here and this will call to entities.
 **/


/* ---------  REQUIRES   -----------*/

var Company = require('../entities/company');
var Mentor = require('../entities/mentor');
var Milestone = require('../entities/milestone');
var Project = require('../entities/project');
var ProjectIdea = require('../entities/projectIdea');
var Skill = require('../entities/skill');
var Student = require('../entities/student');
var Task = require('../entities/task');
var User = require('../entities/user');


/* ------ UTILS FUNCTIONS ------- */

function Utils() { }



// User Entity related functions
// SQL query for select user by user name
Utils.prototype.getSqlSelectUser = function (userName) {

    var sqlSelectUser = "SELECT * FROM  users WHERE user_name like '" + userName + "'";
    return sqlSelectUser;
};

// SQL query for insert user
Utils.prototype.getInsertSqlUser = function (user) {

    var sqlUser = "INSERT INTO users (user_type, user_name, user_password) VALUES (" +
        "'" + user.userType + "', " +
        "'" + user.userName + "', " +
        "'" + user.userPassword + "')";
    return sqlUser;
};

// SQL query for update user by id
Utils.prototype.getUpdateSqlUser = function (user) {

    var sqlUser = "UPDATE users SET" + 
        " user_type='" + user.userType + "'," + 
        " user_name='" + user.userName + "'," + 
        " user_password='" + user.userPassword + "' WHERE" +
        " user_id=" + user.userId;
    return sqlUser;
};

// SQL query for delete user by id
Utils.prototype.getSqlDeleteUser = function (user) {

    var sqlDeleteUser = "DELETE FROM users WHERE user_id=" + user.userId;
    return sqlDeleteUser;
};



// Student Entity related functions
// SQL query for select student by student id
Utils.prototype.getSqlSelectStudent = function (studentId) {

    var sqlSelectStudent = "SELECT * FROM student WHERE student_id=" + studentId;
    return sqlSelectStudent;
};

// SQL query for select student by student first name
Utils.prototype.getSqlSelectStudentByFname = function (studentFname) {

    var sqlSelectStudent = "SELECT * FROM  student WHERE student_fname like '" + studentFname + "'";
    return sqlSelectStudent;
};

// SQL query for insert student
Utils.prototype.getInsertSqlStudent = function (student) {

    var sqlInsertStudent = "INSERT INTO student (student_id, student_fname, student_lname, " +
        ", student_address, student_phone, student_email, student_imglink, student_description) VALUES (" +
              student.studentId + ", " +
        "'" + student.studentFname + "', " +
        "'" + student.studentLname + "', " +
        "'" + student.studentAddress + "', " +
        "'" + student.studentPhone + "', " +
        "'" + student.studentEmail + "', " +
        "'" + student.studentImgLink + "', " +
        "'" + student.studentDescription + "')";
    return sqlInsertStudent;
};

// SQL query for update student by student id
Utils.prototype.getSqlUpdateStudent = function (student) {

    var sqlUpdateStudent = "UPDATE student SET" +
        " student_fname='" + student.studentFname + "'," +
        " student_lname='" + student.studentLname + "'," +
        " student_address='" + student.studentAddress + "'," +
        " student_phone='" + student.studentPhone + "'," +
        " student_email='" + student.studentEmail + "'," +
        " student_imglink='" + student.studentImgLink + "'," +
        " student_description='" + student.studentDescription + "' WHERE" +
        " student_id=" + student.studentId;
    return sqlUpdateStudent;
};

// SQL query for delete student by id
Utils.prototype.getSqlDeleteStudent = function (student) {

    var sqlDeleteStudent = "DELETE FROM student WHERE student_id=" + student.studentId;
    return sqlDeleteStudent;
};



// Mentor Entity related functions
// SQL query for select mentor by mentor id
Utils.prototype.getSqlSelectMentor = function (mentorId) {

    var sqlSelectMentor = "SELECT * FROM mentor WHERE mentor_id=" + mentorId;
    return sqlSelectMentor;
};

// SQL query for select mentor by mentor first name
Utils.prototype.getSqlSelectMentorByFname = function (mentorFname) {

    var sqlSelectMentor = "SELECT * FROM  mentor WHERE mentor_fname like '" + mentorFname + "'";
    return sqlSelectMentor;
};

// SQL query for insert mentor
Utils.prototype.getInsertSqlMentor = function (mentor) {

    var sqlInsertMentor = "INSERT INTO mentor (mentor_id, mentor_fname, mentor_lname, " +
        ", mentor_address, mentor_phone, mentor_email, mentor_imglink, mentor_description) VALUES (" +
              mentor.mentorId + ", " +
        "'" + mentor.mentorFname + "', " +
        "'" + mentor.mentorLname + "', " +
        "'" + mentor.mentorAddress + "', " +
        "'" + mentor.mentorPhone + "', " +
        "'" + mentor.mentorEmail + "', " +
        "'" + mentor.mentorImgLink + "', " +
        "'" + mentor.mentorDescription + "')";
    return sqlInsertMentor;
};

// SQL query for update mentor by mentor id
Utils.prototype.getSqlUpdateMentor = function (mentor) {

    var sqlUpdateMentor = "UPDATE mentor SET" +
        " mentor_fname='" + mentor.mentorFname + "'," +
        " mentor_lname='" + mentor.mentorLname + "'," +
        " mentor_address='" + mentor.mentorAddress + "'," +
        " mentor_phone='" + mentor.mentorPhone + "'," +
        " mentor_email='" + mentor.mentorEmail + "'," +
        " mentor_imglink='" + mentor.mentorImgLink + "'," +
        " mentor_description='" + mentor.mentorDescription + "' WHERE" +
        " mentor_id=" + mentor.mentorId;
    return sqlUpdateMentor;
};

// SQL query for delete mentor by id
Utils.prototype.getSqlDeleteMentor = function (mentor) {

    var sqlDeleteMentor = "DELETE FROM mentor WHERE mentor_id=" + mentor.mentorId;
    return sqlDeleteMentor;
};



// Company Entity related functions
// SQL query for select company by company id
Utils.prototype.getSqlSelectCompany = function (companyId) {

    var sqlSelectCompany = "SELECT * FROM company WHERE company_id=" + companyId;
    return sqlSelectCompany;
};

// SQL query for select company by company name
Utils.prototype.getSqlSelectCompanytByName = function (companyName) {

    var sqlSelectCompany = "SELECT * FROM  company WHERE company_name like '" + companyName + "'";
    return sqlSelectCompany;
};

// SQL query for insert company
Utils.prototype.getInsertSqlCompany = function (company) {

    var sqlInsertCompany = "INSERT INTO company (company_id, company_name, company_address, " +
        ", company_phone, company_email, company_description) VALUES (" +
              company.companyId + ", " +
        "'" + company.companyName + "', " +
        "'" + company.companyAddress + "', " +
        "'" + company.companyPhone + "', " +
        "'" + company.companyEmail + "', " +
        "'" + company.companyDescription + "')";
    return sqlInsertCompany;
};

// SQL query for update company by company id
Utils.prototype.getSqlUpdateCompany = function (company) {

    var sqlUpdateCompany = "UPDATE company SET" +
        " company_name='" + company.companyName + "'," +
        " company_address='" + company.companyAddress + "'," +
        " company_phone='" + company.companyPhone + "'," +
        " company_email='" + company.companyEmail + "'," +
        " company_description='" + company.companyDescription + "' WHERE" +
        " company_id=" + company.companyId;
    return sqlUpdateCompany;
};

// SQL query for delete company by id
Utils.prototype.getSqlDeleteCompany = function (company) {

    var sqlDeleteCompany = "DELETE FROM company WHERE company_id=" + company.companyId;
    return sqlDeleteCompany;
};



// Milestone Entity related functions
// SQL query for select milestone by id
Utils.prototype.getSqlSelectMilestone = function (milestoneId) {

    var sqlSelectMilestone = "SELECT * FROM  milestone WHERE milestone_id=" + milestoneId;
    return sqlSelectMilestone;
};

// SQL query for insert milestone
Utils.prototype.getInsertSqlMilestone = function (milestone) {

    var sqlMilestone = "INSERT INTO milestone (supposed_date, archived_date, description) VALUES (" +
        "'" + milestone.milestoneSupposedDate + "', " +
        "'" + milestone.milestoneArchivedDate + "', " +
        "'" + milestone.milestoneDescription + "')";
    return sqlMilestone;
};

// SQL query for update milestone by id
Utils.prototype.getUpdateSqlMilestone = function (milestone) {

    var sqlMilestone = "UPDATE milestone SET" + 
        " supposed_date='" + milestone.milestoneSupposedDate + "'," + 
        " archived_date='" + milestone.milestoneArchivedDate + "'," + 
        " description='" + milestone.milestoneDescription + "' WHERE" +
        " milestone_id=" + milestone.milestoneId;
    return sqlMilestone;
};

// SQL query for delete milestone by id
Utils.prototype.getSqlDeleteMilestone = function (milestone) {

    var sqlDeleteMilestone = "DELETE FROM milestone WHERE milestone_id=" + milestone.milestoneId;
    return sqlDeleteMilestone;
};



// Project Entity related functions
// SQL query for select project by id
Utils.prototype.getSqlSelectProject = function (projectId) {

    var sqlSelectProject = "SELECT * FROM  project WHERE project_id=" + projectId;
    return sqlSelectProject;
};

// SQL query for insert project
Utils.prototype.getInsertSqlProject = function (project) {

    var sqlProject = "INSERT INTO project (lead_mentor, starting_date, duration) VALUES (" +
        "'" + project.projectLeadMentor + "', " +
        "'" + project.projectStartingDate + "', " +
        "'" + project.projectDuration + "')";
    return sqlProject;
};

// SQL query for update project by id
Utils.prototype.getUpdateSqlProject = function (project) {

    var sqlProject = "UPDATE project SET" + 
        " lead_mentor='" + project.projectLeadMentor + "'," + 
        " starting_date='" + project.projectStartingDate + "'," + 
        " duration='" + project.projectDuration + "' WHERE" +
        " project_id=" + project.projectId;
    return sqlProject;
};

// SQL query for delete project by id
Utils.prototype.getSqlDeleteProject = function (project) {

    var sqlDeleteProject = "DELETE FROM project WHERE project_id=" + project.projectId;
    return sqlDeleteProject;
};




// Objects generating function definitions
// user object generating function
Utils.prototype.generateUser = function (resultUser) {
    var user = null;
    if (resultUser) {
        user = new User(
            resultUser.user_id,
            resultUser.user_name,
            resultUser.user_password,
            resultUser.user_type);
    }
    return user;
};

// student object generating function
Utils.prototype.generateStudent = function (resultStudent) {
    var student = null;
    if (resultStudent) {
        student = new Student(
            resultStudent.student_id,
            resultStudent.student_fname,
            resultStudent.student_lname,
            resultStudent.student_address,
            resultStudent.student_phone,
            resultStudent.student_email,
            resultStudent.student_imglink,
            resultStudent.student_description);
    }
    return student;
}

// mentor object generating function
Utils.prototype.generateMentor = function (resultMentor) {
    var mentor = null;
    if (resultMentor) {
        mentor = new Mentor(
            resultMentor.mentor_id,
            resultMentor.mentor_fname,
            resultMentor.mentor_lname,
            resultMentor.mentor_address,
            resultMentor.mentor_phone,
            resultMentor.mentor_email,
            resultMentor.mentor_imglink,
            resultMentor.mentor_description);
    }
    return mentor;
}

// company object generating function
Utils.prototype.generateCompany = function (resultCompany) {
    var company = null;
    if (resultCompany) {
        company = new Company(
            resultCompany.companyId,
            resultCompany.companyName,
            resultCompany.companyAddress,
            resultCompany.companyPhone,
            resultCompany.companyEmail,
            resultCompany.companyDescription);
    }
    return company;
}

// milestone object generating function
Utils.prototype.generateMilestone = function (resultMilestone) {
    var milestone = null;
    if (resultMilestone) {
        milestone = new Milestone(
            resultMilestone.milestoneId,
            resultMilestone.milestoneSupposedDate,
            resultMilestone.milestoneArchivedDate,
            resultMilestone.milestoneDescription);
    }
    return milestone;
};

// project object generating function
Utils.prototype.generateProject = function (resultProject) {
    var project = null;
    if (resultProject) {
        project = new Project(
            resultProject.projectId,
            resultProject.projectLeadMentor,
            resultProject.projectStartingDate,
            resultProject.projectDuration);
    }
    return project;
};

// export utils
module.exports = Utils;