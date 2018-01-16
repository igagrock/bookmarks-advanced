import parentBookmarkController from './parent-bookmark.controller';
import sideNavTemplate from './side-nav.template.html'


export default
    function () {
    return {
        template: sideNavTemplate,
        controller: parentBookmarkController
    }
}