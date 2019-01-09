export enum HttpEnum {
    // Basic urls
    BASEURL = 'http://localhost:8000/',
    AUTH    = 'http://localhost:8000/api/auth',    
    UPLOADFILE = 'http://localhost:8000/api/file/upload',

    // User operation related urls
    ADDUSER = 'http://localhost:8000/api/addUser',
    GETUSER = 'http://localhost:8000/api/profile',
    DELETEUSER = 'http://localhost:8000/api/deleteUser',

    // Student operation related urls
    UPDATESTUDENT = 'http://localhost:8000/api/profile/update',
    GETSTUDENTS = 'http://localhost:8000/api/student/getall',
    GETSTUDENTBYFNAME = 'http://localhost:8000/api/student/get/fname',
    ADDSTUDENT = 'http://localhost:8000/api/student/addStudent',
    DELSTUDENT ='http://localhost:8000/api/student/deleteStudent',

    // Company operation related urls
    GETCOMPANIES = 'http://localhost:8000/api/company/getall',
    GETCOMPANYBYNAME = 'http://localhost:8000/api/company/get/name',
    DELETECOMPANY = 'http://localhost:8000/api/company/deleteCompany',

    // Mentor operation related urls 
    GETMENTORS = 'http://localhost:8000/api/mentor/getall',
    GETMENTORBYFNAME = 'http://localhost:8000/api/mentor/get/fname',

    // Notification operation related urls
    GETNORTIFICATION =  'http://localhost:8000/api/nortify/getnortificatio'
}
