import _reduce from "lodash/reduce";
import _each from "lodash/each";

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
		 _this.loadEditState = (id)=>{
			 $log.info("loadEditState called..");
			 $state.go('cards.edit',{eId: id });
		 }
		_this.fetchBookmarks = function (id) {
			var log = $log;
			log.info("value for id = ", id);
			return browser.bookmarks.getChildren(id)
				.then((resultArray) => {
					return _reduce(resultArray, function (result, ele) {
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
					return _reduce(arr[0].children, (result,ele)=>{
						if(ele.type == 'folder'){
							$log.info("bkmk ",ele);
							result.push(ele);
						}
						return result;
					},[]);
				}
			);
		}
		_this.fetchBookMarkFolders = function () {
			return browser.bookmarks.getTree().then(
				(arr) => {
					console.log("arr =",arr);
					getFolders(arr[0].children);
				}
			);
		}

		/**
		 * fetch the matching bookmark and convert it into a map[id] <= bookmark 
		 * @param {*} id  bookmark id
		 */
		_this.fetchBookMark = function(id){
			return browser.bookmarks.get(id)
			.then((b) =>{
				return _reduce(b, (r , e)=>{
					r[e.id] = e;
					return r;
				},{})
			
			});
		}

		_this.getChildrenFolderLength = function (obj) {
			var len = 0;
			_each(obj.children, (ele) => {
				if (ele.type == 'folder') len++;
			});
			return len;
		}


		var getFolders = function(arr){
			return _reduce(arr, (result,ele)=>{
				if(ele.type == 'folder'){
					$log.info("bkmk ",ele);
					result.push(ele);
					getFolders(ele.children);
				}
				return result;
			},[]);
		}
	}

	

}