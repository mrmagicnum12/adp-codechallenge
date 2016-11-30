var employee, Employee;

Employee = require('./Employee')

module.exports = function(req,res){
	try{
		validateRequest()
		return removeEmployee(employeeId)

		function validateRequest(){
			if(!req.query.employeeId)
				return res.send("Please Send Valid Employee Id")
			return employeeId = req.query.employeeId;
		}

		function removeEmployee(id){
			
			Employee.remove({_id : id},processResponse)

			function processResponse(err){
				if(err)
					return res.send(err.message)
				return res.send(true);
			}

		}


	}catch(e){
		return res.send(e.message)
	}
}