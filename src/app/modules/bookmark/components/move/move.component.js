/**
 * future improvements:
 *  include the new folder feature
 */


import moveController from './move.controller';
import moveTemplate from './move.template.html';


export default
    () => {
        return {
            template: moveTemplate,
            controller: moveController,
            controllerAs: 'mvCtrl',
            bindings: {
                onBookmarkUpdate: '&'
            }
        }
    }