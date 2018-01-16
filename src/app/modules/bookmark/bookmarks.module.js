import bookmarkService from  "./bookmark.service";
import logBookmarkCtrl from "./log-bookmark.controller";
import sideNavComponent from "./side-nav.component";

export default
angular.module('bookmarkModule', [] )
.controller('logBookmarkCtrl', logBookmarkCtrl)
.service('bookmarkService',bookmarkService)
.component("sideNav", sideNavComponent() )
.name;