var employeeId, Employee;

Employee = require('./Employee')

module.exports = function(req,res){
	try{
		validateRequest();
		return getEmployeeById();

		function validateRequest(){
			if(!req.query.employeeId)
				return res.send("Please send an Employee Id")
			return employeeId = req.query.employeeId;
		}		

		function getEmployeeById(){
			Employee.findById(employeeId,processResponse)

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