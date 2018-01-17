import _ from "lodash";
window._ = _;
/*@ngInject */
export default
	class BookMarkService {

	constructor() {
		var _this = this;
		var flattenArray = [];
		_this.getBookMarkFlatArray = function () {
			return browser.bookmarks.getTree()
				.then(
					(arr) => { return getFlattenArray(arr[0].children); }
				);
		}
		_this.getParentBookMarks = function () {
			return browser.bookmarks.getTree().then(
				(arr) => {
					return arr[0].children;
				}
			);
		}
		_this.getChildrenFolderLength = function(obj){
			var len = 0;
			_.each(obj.children, (ele) => {
				if(ele.type == 'folder') len++;
			});
			return len;
		}

		function getFlattenArray(arr) {
			_.each(arr, function (obj, k) {

				if (obj.type === "folder") {
					flattenArray.push(obj);
					getFlattenArray(obj.children);
				}
				else if (obj.type == "bookmark") {
					flattenArray.push(obj);
				}
			});
			return flattenArray;
		}


	}

}