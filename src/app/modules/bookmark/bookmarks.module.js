import bookmarkService from "../../services/bookmark.service";
import sideNavModule from "../sidenav/side-nav.module";
import topNavModule from "../topnav/top-nav.module";
import cardsModule from "../cards/cards.module";

export default
    angular.module('bookmarkModule', ['topNavModule', 'sideNavModule', 'cardsModule'])
        .name;