import _ from "lodash";
window._ = _;

export default
	class BookMarkService {
	/*@ngInject */
	constructor($state, $log) {
		var _this = this;
		var flattenArray = [];
		 _this.loadCardState = (id)=>{		
				$log.info("loadCardState called.. ", id);
				$state.go('cards', { id: id });
		 }
		_this.fetchBookmarks = function (id) {
			var log = $log;
			log.info("value for id = ", id);
			return browser.bookmarks.getChildren(id)
				.then((resultArray) => {
					return _.reduce(resultArray, function (result, ele) {
						if (ele.type == 'folder' || ele.type == 'bookmark') {
							result.push(ele);
						}
						return result;
					}, []);
				}
				);
		}
		_this.getParentBookMarks = function () {
			return browser.bookmarks.getTree().then(
				(arr) => {
					return _.reduce(arr[0].children, (result,ele)=>{
						if(ele.type == 'folder'){
							result.push(ele);
						}
						return result;
					},[]);
				}
			);
		}
		_this.getChildrenFolderLength = function (obj) {
			var len = 0;
			_.each(obj.children, (ele) => {
				if (ele.type == 'folder') len++;
			});
			return len;
		}

	}

}