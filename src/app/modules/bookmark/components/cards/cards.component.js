import cardsController from './cards.controller';
import cardsTemplate from './cards.template.html';

export default
     () => {
    return {
        template: cardsTemplate,
        controller: cardsController,
        controllerAs: 'lbc'
    }
}