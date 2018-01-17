import topNavController from './top-nav.controller';
import topNavTemplate from './top-nav.template.html';


export default
     () => {
    return {
        template: topNavTemplate,
        controller: topNavController
    }
}