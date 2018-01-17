import bookmarkService from '../../services/bookmark.service'
import sideNavComponent from './side-nav.component';


/*@ngInject */
export default
    angular.module('sideNavModule', [])
        .component("sideNav", sideNavComponent())
        .service('bookmarkService', bookmarkService)
        .name;