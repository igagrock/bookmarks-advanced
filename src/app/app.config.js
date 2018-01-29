

export default
    /*@ngInject */
    ($stateProvider, $urlRouterProvider) => {

        $stateProvider
            .state("all", {
                url: "/all",
                component: 'cards'
            })
            .state("cards", {
                url: "/cards/:id",
                component: 'cards'
            })
            .state("cards.edit",{
                url:"/edit/:eId",
                component: 'edit'
            })
            .state("cards.move",{
                url:"/move/:mId",
                component: 'move'
            })
            .state("cards.del",{
                url:"/del/:dId",
                component: 'delete'
            })
            ;

          $urlRouterProvider.when('','/cards/');
    }