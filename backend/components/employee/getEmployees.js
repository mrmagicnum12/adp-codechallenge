var employee, EmployeeDb;

Employee = require('./Employee')

module.exports = function(req,res){
	try{
		return getEmployees()
	
		function getEmployees(){
			Employee.find(processResponse)
		
			function processResponse(err,employees){
				if(err)
					return res.send(err.message)
				return res.send(employees);
			}
		}

	}catch(e){
		return res.send(e.message)
	}
}