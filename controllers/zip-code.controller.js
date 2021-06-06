const zipCode = require("../models/zip-code.model.js");

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
    zipCode.findById(req.params.zipCode, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.zipCode}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving zipCode with id " + req.params.zipCode
            });
          }
        } else res.send(data);
    });
};