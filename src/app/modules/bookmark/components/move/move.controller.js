import _values from 'lodash/values';

export default class moveController {

    /*@ngInject*/
    constructor($scope, $rootScope, $log, $stateParams, bookmarkService) {
        var _this = this;
        var log = $log;
        _this.folderMap = {};
        _this.folders = [];
        _this.parentFolder = {};
        _this.selectFolder = {};
        _this.bookmark = {};


        _this.loadPreviousState = (id) => {
            log.info("loadPreviousState called with id = ", id);
            var parentId = id ? id : $stateParams.id;
            bookmarkService.loadCardState(parentId);
        }

        _this.selectParent =(parentId)=>{
             log.info("parent selected = ",parentId);
             log.info("parent selected title = ",_this.selectFolder.title);
             var paramObj = {
                  id: $stateParams.mId,
                  parentId: parentId
              }
             bookmarkService.moveBookmark(paramObj).then(
                 (node)=>{
                    //success message here -to be done later with snackbar implementation
                    _this.loadPreviousState(node.parentId);
                 },
                 (error)=>{
                     alert("unable to move the bookmark");
                 }
             );

        }

        var getAllFolders = () => {
            bookmarkService.fetchBookMarkFolders().then((result) => {
                log.info("all folders ", result);
                $scope.$apply(() => {
                    _this.folderMap = angular.copy(result);
                    _this.parentFolder = result[$stateParams.id];
                    //  delete result[$stateParams.id];
                    _this.folders = _values(result);
                    // _this.folders.unshift(_this.parentFolder);             
                });
            });
        }

        var getBookmark = function () {
            bookmarkService.fetchBookMark($stateParams.mId)
                .then((arrObjs) => {
                    $scope.$apply(() => {
                        log.info("obj = ", arrObjs);
                        _this.bookmark = arrObjs[$stateParams.mId];

                    });
                });
        }
        getBookmark();
        getAllFolders();
    }
}