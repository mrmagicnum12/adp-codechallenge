var employee, EmployeeDb;

Employee = require('./Employee')

module.exports = function(req,res){
	try{
		validateRequest()
		return addEmployee(employee)

		function validateRequest(){
			if(!req.body)
				return res.send("Please Send Valid Employee Object")
			return employee = JSON.parse(req.body);
		}

		function addEmployee(newEmployee){
			var employee = new Employee(newEmployee)
			
			employee.save(newEmployee,processResponse)

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