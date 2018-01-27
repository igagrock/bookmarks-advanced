import bookmarkService from '../../services/bookmark.service';
import eventService from '../../services/event-name.service';
import moveComponent from './move.component';


/*@ngInject */
export default
    angular.module('moveModule', [])
        .component('move',moveComponent())
        .service('bookmarkService', bookmarkService)
        .service("events",eventService)
        .name;