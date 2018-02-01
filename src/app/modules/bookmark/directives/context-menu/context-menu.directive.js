import menuTemplate from './context-menu.template.html';

export default
     () => {
    return {
        restrict : 'E',
        template : menuTemplate,
        scope :{
            view :'&',
            edit : '&',
            move : '&',
            delete: '&',
            ele : '='
        },
        link: function(scope , element, attrs){
            console.log("link function called.");
            if(scope.hide){
                element.css('visiblity','hidden');
            }
        }

    }
}