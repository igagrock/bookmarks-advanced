export default
    /*@ngInject */

    class sideNavController {
    constructor($scope, $state, bookmarkService) {
        var _this = this;
        _this.parentBookMarks = [];
        _this.getFolderLength = (obj) => {
            return bookmarkService.getChildrenFolderLength(obj);
        }
        _this.routeTo = (id) => {
            bookmarkService.loadCardState(id);
        }
        var getParentBookmarks = function () {
            bookmarkService.getParentBookMarks().then(
                (arr) => {
                    $scope.$apply(() => {
                        _this.parentBookMarks = [];
                        _this.parentBookMarks = arr;
                    }
                    );
                });
        }

        getParentBookmarks();
    }
}