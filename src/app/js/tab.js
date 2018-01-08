
import  '../assets/css/app.css';
import '../../../node_modules/angular-material/angular-material.css';
import $ from 'jquery';
import angular from 'angular';
import  ngMaterial from 'angular-material';

angular.module('myApp',['ngMaterial'])
	.run(function(){
		console.log("it is running... ");
	});



var allBookmarks;
browser.bookmarks.getTree().then(
	(obj)=>{
   		console.log("on success ", obj);	

   		//traverse(obj);

	},
	(error)=>{
		console.log("error happend", err);
	});

/**
 * 
 * @param {*} arr 
 */
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