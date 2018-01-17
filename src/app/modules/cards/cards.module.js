import bookmarkService from '../../services/bookmark.service';
import cardsComponent from './cards.component';


export default
    angular.module('cardsModule', [])
        .component('cards', cardsComponent())
        .service('bookmarkService', bookmarkService)
        .name;