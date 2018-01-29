import _reduce from "lodash/reduce";
import _each from "lodash/each";
import _map from "lodash/map";
import _keys from "lodash/keys";

export default
	class BookMarkService {
	/*@ngInject */
	constructor($state, $log) {
		var _this = this;
		var log = $log;
		var bmkApi = browser.bookmarks;

		_this.shouldNavBeUpdated = false;

		var flattenArray = [];
		var folders = {};
		_this.loadCardState = (id) => {
			log.info("loadCardState called.. ", id);
			$state.go('cards', { id: id });
		}
		_this.loadEditState = (id) => {
			log.info("loadEditState called..");
			$state.go('cards.edit', { eId: id });
		}
		_this.loadMoveState = (id) =>{
			log.info("loadMoveState called..");
			$state.go('cards.move',{ mId: id });
		}
		_this.loadDeleteState = (id) => {
			log.info("loadDeleteState called ..");
			$state.go('cards.del',{dId: id});
		}
		_this.fetchBookmarks = function (id) {

			log.info("value for id = ", id);
			return bmkApi.getChildren(id)
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
			return bmkApi.getTree().then(
				(arr) => {
					return _reduce(arr[0].children, (result, ele) => {
						if (ele.type == 'folder') {
							log.info("bkmk ", ele);
							result[ele.id] = ele;
						}
						return result;
					}, {});
				}
			);
		}
		_this.fetchBookMarkFolders = function () {
			return bmkApi.getTree().then(
				(arr) => {
					log.info("arr =", arr);
					return getFolders(arr[0].children);
				}
			);
		}

		/**
		 * fetch the matching bookmark and convert it into a map[id] <= bookmark 
		 * @param {*} id  bookmark id
		 */
		_this.fetchBookMark =  (id) =>{
			return bmkApi.get(id)
				.then((b) => {
					return _reduce(b, (r, e) => {
						r[e.id] = e;
						return r;
					}, {})

				});
		}

		_this.updateBookMark =  (bookmark)=> {
			return bmkApi.update(bookmark.id, {
				title: bookmark.title,
				url: bookmark.url
			});
		}
		/**
		 * keeping the index = = o so that the bookmark will be at top of the new parent
		 * @param {*} obj 
		 */
		_this.moveBookmark = (obj)=>{
			return bmkApi.move(obj.id , { parentId: obj.parentId , index : 0 });
		}

		_this.removeBookmark = (obj) =>{
			if(obj.type === 'folder'){
			 return	bmkApi.removeTree(obj.id);
			}
			else return bmkApi.remove(obj.id);
		}

		_this.getChildrenFolderLength = function (obj) {
			var len = 0;
			_each(obj.children, (ele) => {
				if (ele.type == 'folder') len++;
			});
			return len;
		}


		var getFolders = (arr) => {
			_each(arr ,(ele)=>{
					if(ele.type === 'folder'){
						folders[ele.id] = ele;
						getFolders(ele.children);
						delete(ele.children);
					}
			});
			return folders;
		}
	}



}