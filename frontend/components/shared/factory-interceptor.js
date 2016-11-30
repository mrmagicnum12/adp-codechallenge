var factory;


factory = function intercetor(){
  return {
    // automatically attach Authorization header
    request: function(config) {
      if(/api/.test(config.url))
      	config.headers.Authorization = "adpcodechallenge";
      return config;
    },

    // If a token was sent back, save it
    response: function(res) {
      return res;
    },
  }
}

module.exports = factory;