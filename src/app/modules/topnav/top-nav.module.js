import bookmarkService from '../../services/bookmark.service'
import topNavComponent from './top-nav.component';


/*@ngInject */
export default
angular.module('topNavModule', [] )
.component("topNav", topNavComponent() )
.service('bookmarkService',bookmarkService)
.name;