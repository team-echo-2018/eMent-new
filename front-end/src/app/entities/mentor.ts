// Entity class for Mentor

export class Mentor {

    mentorId: string;
    mentorFname: string;
    mentorLname: string;
    mentorAddress: string;
    mentorPhone: string;
    mentorEmail: string;
    mentorImgLink: string;
    mentorDescription: string;

    // getters
    public getId(): string {
        return this.mentorId;
    }

    public getFirstName(): string {
        return this.mentorFname;
    }

    public getLastName(): string {
        return this.mentorLname;
    }

    public getAddress(): string {
        return this.mentorAddress;
    }

    public getPhone(): string {
        return this.mentorPhone;
    }

    public getEmail(): string {
        return this.mentorEmail;
    }

    public getImgLink(): string {
        return this.mentorImgLink;
    }

    public getDescription(): string {
        return this.mentorDescription;
    }

    // setters
    public setId(id: string) {
        this.mentorId = id;
    }

    public setFirstName(fname: string) {
        this.mentorFname = fname;
    }

    public setLastName(lname: string) {
        this.mentorLname = lname;
    }

    public setAddress(address: string) {
        this.mentorAddress = address;
    }

    public setPhone(phone: string) {
        this.mentorPhone = phone;
    }

    public setEmail(email: string) {
        this.mentorEmail = email;
    }

    public setImgLink(imglink: string) {
        this.mentorImgLink = imglink;
    }

    public setDescription(des: string) {
        this.mentorDescription = des;
    }
    
}