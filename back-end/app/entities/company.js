/* Company Entity */
var Company = function (companyId, companyName, companyAddress,
    companyPhone, companyEmail, companyDescription) {

    this.companyId = companyId;
    this.companyName = companyName;
    this.companyAddress = companyAddress;
    this.companyPhone = companyPhone;
    this.companyEmail = companyEmail;
    this.companyDescription = companyDescription;
}

module.exports = Company;
