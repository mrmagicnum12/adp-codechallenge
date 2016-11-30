var factory;

factory = factory;

function factory($http){
	var headers, url;
	
	headers = {"headers" : {"Content-Type" : undefined}}
	url = 'http://localhost:7770/api/employee/'

	return {
		addEmployee : addEmployee,
		updateEmployee : updateEmployee,
		removeEmployee : removeEmployee,
		getEmployeeById : getEmployeeById,
		getEmployees : getEmployees
	}

	function addEmployee(Employee){
		var endpoint;
		endpoint = url+'addEmployee'
		return $http.post(endpoint,Employee,headers);
	}

	function updateEmployee(Employee){
		var endpoint;
		endpoint = url+'updateEmployee'
		return $http.put(endpoint,Employee,headers);
	}

	function removeEmployee(Employee){
		var endpoint;
		endpoint = url+'removeEmployee?employeeId='+Employee._id;
		return $http.delete(endpoint);
	}

	function getEmployeeById(Employee){
		var endpoint;
		endpoint = url+'getEmployeeById?employeeId='+Employee._id
		return $http.get(endpoint);
	}

	function getEmployees(){
		var endpoint;
		endpoint = url+'getEmployees'
		return $http.get(endpoint);
	}
}

module.exports = factory; 