import { User } from '../entities/user';
import { Student } from '../entities/student';
import { Mentor } from '../entities/mentor';
import { Postreply } from '../entities/postreply';
import { Posts } from '../entities/posts';
import { Company } from '../entities/company';

export class Utils {

    constructor() { }

    public static convertDatabaseUserToUser(dataUser: any): User {

        const user = new User();

        user.userId = dataUser.userId;
        user.userName = dataUser.userName;
        user.userPassword = dataUser.userPassword;
        user.userType = dataUser.userType;

        return user;
    }

    public static convertDatabaseStudentToStudent(dataStudent: any): Student {

        const student = new Student();

        student.studentId = dataStudent.studentId;
        student.studentFname = dataStudent.studentFname;
        student.studentLname = dataStudent.studentLname;
        student.studentAddress = dataStudent.studentAddress;
        student.studentPhone = dataStudent.studentPhone;
        student.studentEmail = dataStudent.studentEmail;
        student.studentImgLink = dataStudent.studentImgLink;
        student.studentDescription = dataStudent.studentDescription;

        return student;

    }

    public static convertDatabaseMentorToMentor(dataMentor: any): Mentor {

        const mentor = new Mentor();

        mentor.mentorId = dataMentor.mentorId;
        mentor.mentorFname = dataMentor.mentorFname;
        mentor.mentorLname = dataMentor.mentorLname;
        mentor.mentorAddress = dataMentor.mentorAddress;
        mentor.mentorPhone = dataMentor.mentorPhone;
        mentor.mentorEmail = dataMentor.mentorEmail;
        mentor.mentorImgLink = dataMentor.mentorImgLink;
        mentor.mentorDescription = dataMentor.mentorDescription;

        return mentor;

    }

    public static convertDatabasereplytoPosts(datapost: any): Posts {

        const posts = new Posts();

        posts.postId = datapost.postId;
        posts.postAuthor = datapost.postauthor;
        posts.posttitle = datapost.postheading;
        posts.postbody = datapost.postbody;

        return posts;
    }

    public static convertDatabasetoPostsreply(datapost: any): Postreply {

        const repposts = new Postreply();

        repposts.replyid = datapost.replyid;
        repposts.postId = datapost.postId;
        repposts.Author = datapost.Author;
        repposts.body = datapost.body;

        return repposts;
    }

    public static convertDatabaseCompanyToCompany(dataCompany: any): Company {

        const company = new Company();

        company.companyId = dataCompany.companyId;
        company.companyName = dataCompany.companyName;
        company.companyAddress = dataCompany.companyAddress;
        company.companyPhone = dataCompany.companyPhone;
        company.companyEmail = dataCompany.companyEmail;
        company.companyDescription = dataCompany.companyDescription;

        return company;
    }
}
