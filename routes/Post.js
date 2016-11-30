module.exports = function (app) {
  app.post('/api/:component/:apiTitle', function (req, res) {
    try {
      return require("../backend/components/"+req.params.component+"/"+req.params.apiTitle)(req, res);
    } catch (e) {
      res.status(500).send("Error in GET "+req.params.component+""+req.params.apiTitle+":"+e.message);
      return console.error(e);
    }
  });
}
