export default
    /*@ngInject */

    class cardsController {
    constructor($scope, $log,$timeout, $state, $stateParams, bookmarkService) {
        var _this = this;
        var log = $log;
        _this.bookMarks = [];
        _this.parentBookmark = {};

        _this.getFolderLength = function (obj) {
            return bookmarkService.getChildrenFolderLength(obj);
        }
        _this.openBookMark = function (ele) {
            if (ele.type == 'bookmark') {
                window.open(ele.url, '_blank');
            }
            else if (ele.type == "folder") {
                bookmarkService.loadCardState(ele.id);
            }
        }
        _this.editBookmark = (event,id) => {
            event.stopPropagation();
            bookmarkService.loadEditState(id);
        }
        _this.moveBookmark = (event,id) =>{
            event.stopPropagation();
            bookmarkService.loadMoveState(id);
        }
        _this.deleteBookmark = (event, id) =>{
            event.stopPropagation();
            bookmarkService.loadDeleteState(id);
        }

        _this.refreshBookmarks = (id)=>{
            log.info("refreshBookmarks called.. ");
            _this.bookMarks.splice(0, _this.bookMarks.length);
            $timeout(()=>{
                getBookMarks(id);
            },100);
          
        }

        var getParentBookmark = (parentId)=>{
            bookmarkService.fetchBookMark(parentId).then(
                (result)=>{
                    $scope.$apply(() => {
                       _this.parentBookmark = result[parentId];
                    });
                })
        }

        var getBookMarks = function (id) {

            console.log("controller called.. id= ", id);
            bookmarkService.fetchBookmarks(id).then(
                (arr) => {
                    $scope.$apply(() => {
                        _this.bookMarks.splice(0, _this.bookMarks.length);
                        _this.bookMarks = arr;
                        console.log("size of bookmark", _this.bookMarks.length);

                    });
                });
        }

        getParentBookmark($stateParams.id);
        getBookMarks($stateParams.id);
        
        // browser.bookmarks.onChanged.addListener(()=>{
        //     _this.refreshBookmarks($stateParams.id);
        // });
    }
}