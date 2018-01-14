import bookmarkService from  "./bookmark.service";
import logBookmarkCtrl from "./log-bookmark.controller";

export default
angular.module('bookmarkModule', [] )
.controller('logBookmarkCtrl', logBookmarkCtrl)
.service('bookmarkService',bookmarkService)
.name;