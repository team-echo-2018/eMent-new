// Entity class for Student

export class Student {

    studentId: string;
    studentFname: string;
    studentLname: string;
    studentAddress: string;
    studentPhone: string;
    studentEmail: string;
    studentImgLink: string;
    studentDescription: string;

    public getId(): string {
        return this.studentId;
    }

    public getFirstName(): string {
        return this.studentFname;
    }

    public getLastName(): string {
        return this.studentLname;
    }

    public getAddress(): string {
        return this.studentAddress;
    }

    public getPhone(): string {
        return this.studentPhone;
    }

    public getEmail(): string {
        return this.studentEmail;
    }

    public getImgLink(): string {
        return this.studentImgLink;
    }

    public getDescription(): string {
        return this.studentDescription;
    }
}