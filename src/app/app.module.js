
import './assets/scss/app.scss';
import './assets/css/app.css';
import $ from 'jquery';
import angular from 'angular';
import ngAnimate from 'angular-animate';
import '@uirouter/angularjs';

import bookmarkModule from './modules/bookmark/bookmarks.module';
import config from './app.config';


import 'bootstrap';
/*@ngInject */
angular.module('app', ['ui.router', 'ngAnimate', 'bookmarkModule'])
	.config(config)
	.run(function () {
		console.log("it is running... ");
	});



