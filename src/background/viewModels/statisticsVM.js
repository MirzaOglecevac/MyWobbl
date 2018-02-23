StatisticsVM = function(superClass,StatisticsModel) {

    return class extends superClass {

        static get properties() {
            return {
                statisticsMenu:String
            }
        }

        constructor() {
            super();
        }

        bind(statisticsMenu, ironRequest) {
            this.statisticsMenu = statisticsMenu;

            // setup iron request
            StatisticsModel.requestIron(ironRequest);

            this.statisticItems = StatisticsModel.getCurrentStatistics();

            // console.log(StatisticsModel.getCurrentStatistics());
        }

        _onStatisticsModelChange() {
            this.statisticsMenu.render();
        }

    }

}