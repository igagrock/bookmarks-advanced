export default
    /*@ngInject */

    class LogBookmarkController {
    constructor($scope, bookmarkService) {
        var _this = this;
        _this.bookMarks = [];
        _this.parentBookMarks = [{id: "ddsdsd__1212", title:"parent bookmarks"}];
        _this.getFolderLength = function(obj) {
            return bookmarkService.getChildrenFolderLength(obj);
        }

        var getBookMarks = function () {
            bookmarkService.getParentBookMarks().then(
                (arr) => {
                    console.log("parents ", arr);
                    _this.parentBookMarks = arr;
                }
            );
            bookmarkService.getBookMarkFlatArray()
                .then(
                (arr) => {

                    _this.bookMarks = arr;
                    console.log("--", _this.bookMarks);
                }
                );
        }

        getBookMarks();
    }
}