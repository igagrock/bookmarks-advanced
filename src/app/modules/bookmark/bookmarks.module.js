import bookmarkService from "../../services/bookmark.service";
import eventService from "../../services/event-name.service";

import topNavComponent from "./components/topnav/top-nav.component";
import sideNavComponent from "./components/sidenav/side-nav.component";
import cardsComponent from "./components/cards/cards.component";
import editComponent from "./components/edit/edit.component";
import moveComponent from "./components/move/move.component";
import deleteComponent from "./components/delete/delete.component";
import contextMenuDirective from "./directives/context-menu/context-menu.directive";

export default
    angular.module('bookmarkModule', [])
        .component("topNav", topNavComponent())
        .component("sideNav", sideNavComponent())
        .component('cards', cardsComponent())
        .component('edit', editComponent())
        .component('move', moveComponent())
        .component('delete', deleteComponent())
        .directive("contextMenu", contextMenuDirective)
        .service('bookmarkService', bookmarkService)
        .service("events", eventService)
        .name;