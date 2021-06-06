module.exports = app => {
    const zipCode = require("../controllers/zip-code.controller.js");
  
    // Retrieve a single Customer with customerId
    app.get("/zipCode/:zipCode", zipCode.findOne);
  
};