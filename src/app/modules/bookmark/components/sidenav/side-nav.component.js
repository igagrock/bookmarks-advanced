import sideNavController from './side-nav.controller';
import sideNavTemplate from './side-nav.template.html';


export default
    function () {
    return {
        template: sideNavTemplate,
        controller: sideNavController
    }
}