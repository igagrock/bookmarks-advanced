import bookmarkService from "../../services/bookmark.service";
import eventService from "../../services/event-name.service";
import sideNavModule from "../sidenav/side-nav.module";
import topNavModule from "../topnav/top-nav.module";
import cardsModule from "../cards/cards.module";
import editModule from "../edit/edit.module";
import moveModule from "../move/move.module";

export default
    angular.module('bookmarkModule',
        ['topNavModule', 'sideNavModule', 'cardsModule', 'editModule','moveModule']
    )
    .service('bookmarkService', bookmarkService)
    .service("events",eventService)
    .name;