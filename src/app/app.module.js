
import  './assets/scss/app.scss';
import  './assets/css/app.css';
import $ from 'jquery';
import angular from 'angular';
import bookmarkModule from './modules/bookmark/bookmarks.module';


import 'bootstrap';

angular.module('app',['bookmarkModule'])
	
	.run(function(){
		console.log("it is running... ");
	});



