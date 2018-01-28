import _values from 'lodash/values';

export default class deleteController {

    /*@ngInject*/
    constructor($scope, $rootScope, $log, $stateParams, bookmarkService , events) {
        var _this = this;
        var log = $log;

        _this.bookmark = {};

        _this.loadPreviousState = () => {
            bookmarkService.loadCardState($stateParams.id);
        }


        _this.delete = (obj) => {
            bookmarkService.removeBookmark(obj)
            .then(
                () =>{
                    _this.onBookmarkUpdate({id: obj.parentId});
                    $rootScope.$broadcast(events.type.UPDATE, {});
                    _this.loadPreviousState();
                },
                (err) =>{
                    alert("Unable to delete the bookmark ");
                }
            );
        }
       
        var getBookmark = function () {
            bookmarkService.fetchBookMark($stateParams.dId)
                .then((arrObjs) => {
                    $scope.$apply(() => {
                        log.info("obj = ", arrObjs);
                        _this.bookmark = arrObjs[$stateParams.dId];
                    });
                });
        }

        getBookmark();
    }
}