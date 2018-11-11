/**
 * File Controller for assets based functions
 */

exports.uploadFile = (req, res) => {
	res.send('File uploaded successfully! -> filename = ' + req.file.filename);
}