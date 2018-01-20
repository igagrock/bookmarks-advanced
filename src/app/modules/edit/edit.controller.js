export default
    /*@ngInject */

    class editController {
    constructor($scope, $log, $stateParams, bookmarkService) {
        var _this = this;
        var log = $log;
        _this.bookmark = {};
        _this.isTitleEditable = false;
        _this.isUrlEditable = false;
        _this.folders = [];
        _this.selectedFolder = {};


        _this.toggleTileEdit = ()=>{
             log.info("title editable = ", _this.isTitleEditable);
            _this.isTitleEditable = !_this.isTitleEditable;
        }
        _this.toggleUrlEdit = ()=>{
            log.info("title editable = ", _this.isUrlEditable);
           _this.isUrlEditable = !_this.isUrlEditable;
       }
       _this.loadPreviousState = ()=>{
           bookmarkService.loadCardState($stateParams.id);
       }
       var getBookMarkFolders = ()=>{
           bookmarkService.getParentBookMarks()
           .then((result)=>{
               $scope.$apply(()=>{
                    _this.folders = result;
                    _this.selectedFolder = _this.folders[0];
                    log.info("folder = ",_this.folders);
               });
           });
       }

        var getBookmark = function () {
            bookmarkService.fetchBookMark($stateParams.eId)
                .then((arrObjs) => {
                    $scope.$apply(() => {
                        log.info("obj = ", arrObjs);
                        _this.bookmark = arrObjs[$stateParams.eId];
                    });
                });
        }
        getBookmark();
        getBookMarkFolders();

    }
}