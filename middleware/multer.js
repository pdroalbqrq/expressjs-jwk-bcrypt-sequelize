const multer = require('multer');
const path = require('path');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'static','assets','images'),
    storage: multer.diskStorage({
      destination:(req,file,cb) => cb(null,path.resolve(__dirname, '..', '..', 'static','assets','images')),
      filename: function(req, file, cb) {
          cb(
            null,
            file.fieldname + "-" + 'foto' + path.extname(file.originalname)
          );
        }
      })
  }