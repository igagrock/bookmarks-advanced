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
        _this.loadPreviousState = (id) => {
            var parentId = id ? id : $stateParams.id;
            bookmarkService.loadCardState(id);
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


        getAllFolders();
    }
}