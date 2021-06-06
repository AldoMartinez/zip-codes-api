const sql = require("./../db.js");

// constructor
const ZipCode = function(zipcode) {
  this.zipcode = zipcode.zipcode;
};

ZipCode.findById = (zipcode, result) => {
    sql.query(`SELECT * FROM \`zip-codes\`.\`zip-codes\` WHERE codigo_postal = ${zipcode}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found zipcodes: ", res[0]);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
};

module.exports = ZipCode;