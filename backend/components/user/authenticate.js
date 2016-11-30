var user;
module.exports = function(req,res){
	try{
		validateRequest()
		return hasAccess(user)

		function validateRequest(){
			if(!req.body)
				return res.send("Please Send Valid User")
			return user = JSON.parse(req.body);
		}

		function hasAccess(user){ 
			return res.send(true)
		}


	}catch(e){
		return res.send(e.message)
	}
}