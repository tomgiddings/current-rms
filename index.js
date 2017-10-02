module.exports = function (subdomain, key) {
  var module = {};

  const request = require('request');

  var options = {
    headers: {
      'X-SUBDOMAIN': subdomain,
      'X-AUTH-TOKEN': key
    }
  };

  function query(method, url, callback, params) {
    options.method = method;
    options.url = url;
    if(typeof params !== 'undefined' && params) {
      options.qs = params;
    }
    request(options, function(err, res, body) {
      callback(err,res,body);
    });
  }

  module.listProducts = function(callback, params) {
    query("GET", "https://api.current-rms.com/api/v1/products/", function(err, res, body) {
      callback(res,JSON.parse(body));
    }, params);
  };
  module.products = function(callback, id) {
    query("GET", "https://api.current-rms.com/api/v1/products/" + id, function(err, res, body) {
      callback(res,JSON.parse(body));
    });
  };
  module.productGroups = function(callback, params) {
    query("GET", "https://api.current-rms.com/api/v1/product_groups/", function(err, res, body) {
      callback(res,JSON.parse(body));
    }, params);
  };
  module.stockLevels = function(callback, id) {
   query("GET", "https://api.current-rms.com/api/v1/products/" + id + "/stock_levels/", function(err, res, body) {
      callback(res,JSON.parse(body));
    });    
  };

  return module;
};





