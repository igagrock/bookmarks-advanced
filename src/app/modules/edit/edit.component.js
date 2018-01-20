import editController from './edit.controller';
import editTemplate from './edit.template.html';


export default
    () => {
        return {
            template: editTemplate,
            controller: editController,
            controllerAs: 'edCtrl'
        }
    }