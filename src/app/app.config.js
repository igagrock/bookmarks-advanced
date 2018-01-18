

export default
/*@ngInject */
    ($stateProvider) => {
        var bookmarkState= {
            name: 'bookmarks',
            url: '/bookmarks/{bookmarkId}',
            component: 'cards'
        }
        $stateProvider.state(bookmarkState)
    }