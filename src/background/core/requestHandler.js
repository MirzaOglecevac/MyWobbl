var RequestHandler = (function(){

    var requestHandler = function(){

        // make get request
        this.getRequest = function(ironAjax) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", "http://wobbl-admin:8888/statistics", false );
            xmlHttp.send( null );
            return JSON.parse(xmlHttp.responseText)
        }

        // make post request
        this.postRequest = function(ironAjax) {
            console.log('post request');
        }

        // make put request
        this.putRequest = function(ironAjax) {
            console.log('put request');
        }

        // make delete request
        this.deleteRequest = function (ironAjax) {
            console.log('delete request');
        }

    }

    return new requestHandler();
})();