module.exports =  function (response, respObj) {
    response.writeHead(200,{
    	'Content-type':'application/json',
    	"Access-Control-Allow-Origin":"http://localhost:8080"
	})
    response.write(respObj)
    response.end()
}
