

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
            ;

        //  $urlRouterProvider.when('','/all');
        //  $urlRouterProvider.otherwise('all');
    }