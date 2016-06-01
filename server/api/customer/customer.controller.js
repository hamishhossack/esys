'use strict';

var fs = require('fs');
var _ = require('lodash');

function handleError(res, err) {
  return res.status(500).send(err);
}

/**
 * Get list of Customers
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  fs.readFile('server/api/customer/customer.data.json', 'utf-8', function (err, customers) {
    if (err) return handleError(res, err);

    var filteredCustomers = _.filter(JSON.parse(customers), function (customer) {
      return customer.customer_cli !== 0;
    });

    res.status(200).json(filteredCustomers);
  });
};
