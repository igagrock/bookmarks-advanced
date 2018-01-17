export default
    /*@ngInject */

    class cardsController {
    constructor($scope, bookmarkService) {
        var _this = this;
        _this.bookMarks = [];
        _this.getFolderLength = function (obj) {
            return bookmarkService.getChildrenFolderLength(obj);
        }
        _this.openBookMark = function(ele){
            if(ele.type == 'bookmark'){
                window.open(ele.url, '_blank');
            }
        }
        var getBookMarks = function () {
            bookmarkService.getBookMarkFlatArray().then(
                (arr) => {$scope.$apply(() => { _this.bookMarks = arr; });});
        }

        getBookMarks();
    }
}