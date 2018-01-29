import deleteController from './delete.controller';
import deleteTemplate from './delete.template.html';


export default
    () => {
        return {
            template: deleteTemplate,
            controller: deleteController,
            controllerAs: 'delCtrl',
            bindings: {
                onBookmarkUpdate: '&'
            }
        }
    }