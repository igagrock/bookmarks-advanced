import bookmarkService from '../../services/bookmark.service';
import eventService from "../../services/event-name.service";
import cardsComponent from './cards.component';


export default
    angular.module('cardsModule', [])
        .component('cards', cardsComponent())
        .service('bookmarkService', bookmarkService)
        .service("events",eventService)
        .name;