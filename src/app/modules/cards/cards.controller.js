export default
    /*@ngInject */

    class cardsController {
    constructor($scope, $state, $stateParams, bookmarkService) {
        var _this = this;
        _this.bookMarks = [];
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

        getBookMarks($stateParams.id);
    }
}