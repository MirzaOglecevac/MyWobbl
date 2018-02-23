var StatisticsModel = (function(){

    var statisticsModel = function(requestHandler){

        var main = this;

        var ironAjax;
        var statistics = [
            {
                "color":"#3F51B5",
                "subColor":"#ffffff",
                "icon":"icons:apps",
                "description":"bbbbbb bbbbbbbbbb",
                "number":456
            },
            {
                "color":"#F44336",
                "subColor":"#ffffff",
                "icon":"icons:announcement",
                "description":"description",
                "number":234
            },
            {
                "color":"#9C27B0",
                "subColor":"#ffffff",
                "icon":"icons:announcement",
                "description":"description",
                "number":123
            },
            {
                "color":"#F44336",
                "subColor":"#ffffff",
                "icon":"icons:announcement",
                "description":"description",
                "number":234
            },
            {
                "color":"#9C27B0",
                "subColor":"#ffffff",
                "icon":"icons:announcement",
                "description":"description",
                "number":123
            }
        ];

        this.requestIron = function(ironAjax){
            main.ironAjax = ironAjax;
        }

        this.getCurrentStatistics = function(){
            //console.log(requestHandler.getRequest(this.ironAjax));
            //return statistics;
            return requestHandler.getRequest(this.ironAjax).data
            //return requestHandler.getRequest(this.ironAjax);
        };

    }

    return new statisticsModel(RequestHandler);
})();