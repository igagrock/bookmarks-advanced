
import  './assets/scss/app.scss';
import  './assets/css/app.css';
import $ from 'jquery';
import angular from 'angular';
import userListModule from './modules/user-list/user-list.module'


import 'bootstrap';

angular.module('myApp',['userListModule'])
	
	.run(function(){
		console.log("it is running... ");
	});



