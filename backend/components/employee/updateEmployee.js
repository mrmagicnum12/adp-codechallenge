var employee, Employee;

Employee = require('./Employee')

module.exports = function(req,res){
	try{
		validateRequest()
		return updateEmployee(employee)

		function validateRequest(){
			if(!req.body)
				return res.send("Please Send Valid Employee Object")
			return employee = JSON.parse(req.body);
		}

		function updateEmployee(updateEmployee){
			Employee.findByIdAndUpdate({_id : updateEmployee._id},updateEmployee,{new : true},processResponse)

			function processResponse(err,employee){
				if(err)
					return res.send(err.message)
				return res.send(employee);
			}

		}	

	}catch(e){
		return res.send(e.message)
	}
}