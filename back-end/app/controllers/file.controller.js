const uploadFolder = __basedir + '/uploads/';
const fs = require('fs');

exports.uploadFile = (req, res) => {
	res.send('File uploaded successfully! -> filename = ' + req.file.filename);
}