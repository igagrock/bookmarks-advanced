export default
    /*@ngInject */

    class LogBookmarkController {
    constructor($scope, bookmarkService) {
        var _this = this;
        _this.bookMarks = [];
        _this.parentBookMarks = [];
        _this.getFolderLength = function (obj) {
            return bookmarkService.getChildrenFolderLength(obj);
        }

        var getBookMarks = function () {
            bookmarkService.getParentBookMarks().then(
                (arr) => { $scope.$apply(() => { _this.parentBookMarks = arr; }); });
            bookmarkService.getBookMarkFlatArray().then(
                (arr) => {$scope.$apply(() => { _this.bookMarks = arr; });});
        }

        getBookMarks();
    }
}