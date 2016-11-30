var factory;

factory = factory;

function factory($http){
	var headers, Token, url;
	
	headers = {"headers" : {"Content-Type" : undefined}}
	url = 'http://localhost:7770/api/user/'

	return {
		authenticate : authenticate,
		setToken : setToken,
		getToken : getToken
	}

	function authenticate(User){
		var endpoint;
		endpoint = url+'authenticate'
		return $http.post(endpoint,User,headers);
	}


	function getToken(){
		return Token;
	}

	function setToken(token){
		return Token = token;
	}

}

module.exports = factory; 