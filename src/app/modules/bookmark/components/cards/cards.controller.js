export default
    /*@ngInject */

    class cardsController {
    constructor($scope, $log,$timeout, $window, $state, $stateParams, bookmarkService) {
        var _this = this;
        var log = $log;
        _this.bookMarks = [];
        _this.parentBookmark = {};

        _this.getFolderLength = function (obj) {
            return bookmarkService.getChildrenFolderLength(obj);
        }
        _this.openBookMark = function (ele) {
            if (ele.type == 'bookmark') {
                _this.viewBookmark(ele.url);
            }
            else if (ele.type == "folder") {
                bookmarkService.loadCardState(ele.id);
            }
        }
        _this.editBookmark = (id) => {
            bookmarkService.loadEditState(id);
        }
        _this.viewBookmark = (url) => {
            $window.open(url, '_blank');
        }
        _this.moveBookmark = (id) =>{
            bookmarkService.loadMoveState(id);
        }
        _this.deleteBookmark = ( id) =>{
            bookmarkService.loadDeleteState(id);
        }

        _this.refreshBookmarks = (id)=>{
            log.info("refreshBookmarks called.. ");
            _this.bookMarks.splice(0, _this.bookMarks.length);
            $timeout(()=>{
                getBookMarks(id);
            },300);
          
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