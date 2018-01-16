export default
    /*@ngInject */

    class parentBookmarkController {
    constructor($scope, bookmarkService) {
        var _this = this;
        _this.parentBookMarks = [];
        _this.getFolderLength = function (obj) {
            return bookmarkService.getChildrenFolderLength(obj);
        }

        var getParentBookmarks = function () {
            bookmarkService.getParentBookMarks().then(
                (arr) => { $scope.$apply(() => { _this.parentBookMarks = arr; }); });
        }

        getParentBookmarks();
    }
}