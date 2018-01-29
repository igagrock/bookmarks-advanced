import _values from 'lodash/values';
export default
    /*@ngInject */

    class sideNavController {
    constructor($scope, $rootScope, $timeout, $log, $state, bookmarkService, events) {
        var _this = this;
        var log = $log;
        _this.parentObj = {};
        _this.parentBookMarks = [];
        _this.selectedMenu = {}
        _this.getFolderLength = (obj) => {
            return bookmarkService.getChildrenFolderLength(obj);
        }
        _this.routeTo = (id, isChild) => {
            bookmarkService.loadCardState(id);
            if(!isChild){
                _this.selectMenu(id);
            }
        }
        _this.selectMenu = (id)=>{
            _this.selectedMenu = _this.parentObj[id];
            log.info("selected one is ", _this.selectedMenu);
        }

        $rootScope.$on(events.type.UPDATE, function () {
            log.info("bookmark update happned somewhere..");
            refreshParentBookmarks();
        });
        var getParentBookmarks = function () {
            bookmarkService.getParentBookMarks().then(
                (result) => {
                    $scope.$apply(() => {
                        _this.parentObj = angular.copy(result);
                        _this.parentBookMarks.splice(0, _this.parentBookMarks.length);
                        _this.parentBookMarks = _values(result);
                    }
                    );
                });
        }
        var refreshParentBookmarks = () =>{
            _this.parentBookMarks.splice(0, _this.parentBookMarks.length);
            $timeout(()=>{
                getParentBookmarks();
            },100);
        }


        getParentBookmarks();


    }
}