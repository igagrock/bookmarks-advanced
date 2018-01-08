
import  '../assets/css/app.css'
import $ from 'jquery'


var allBookmarks;
browser.bookmarks.getTree().then(
	(obj)=>{
   		console.log("on success ", obj);	

   		traverse(obj);

	},
	(error)=>{
		console.log("error happend", err);
	});


var traverse = function(arr){

	if(arr && arr.length > 0 ){
     
       for (var i = 0; i < arr.length; i++) {
       	
       	    if(arr[i].children && arr[i].children.length > 0){
       	    	//console.log("folder name ", arr[i].title, arr[i].children.length);
       	    	appendElement("Folder : "+ arr[i].title +" "+arr[i].children.length);
       	    	traverse(arr[i].children);
       	    }
       	    else {
       	    	//console.log("LEAVES: ", arr[i].title , arr[i].url);
       	    	appendElement("LEAF "+arr[i].title +" "+ arr[i].url);
       	    }
       }

	}

	
}


var appendElement = function(element){
		$('body').append( element +"<br><hr/>");
}