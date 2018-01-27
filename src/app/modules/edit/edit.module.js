import bookmarkService from '../../services/bookmark.service';
import eventService from '../../services/event-name.service';
import editComponent from './edit.component';


/*@ngInject */
export default
    angular.module('editModule', [])
        .component('edit',editComponent())
        .service('bookmarkService', bookmarkService)
        .service("events",eventService)
        .name;