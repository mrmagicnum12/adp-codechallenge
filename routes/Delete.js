module.exports = function (app) {
  app.delete('/api/:component/:apiTitle', function (req, res) {
    try {
      require("../backend/components/"+req.params.component+"/"+req.params.apiTitle)(req, res);
    } catch (e) {
      res.status(500).send("Error in DELETE "+req.params.component+""+req.params.apiTitle+":"+e.message);
      console.error(e);
    }
  });
}
