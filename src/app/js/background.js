
var log = console.log;
const TAB_URL = browser.runtime.getURL("../templates/tab.html");

log("background started on load");

var clicks = 0;
var isTabCreated = false;

function increment() {
  browser.browserAction.setBadgeText({text: (++clicks).toString()});
}

browser.browserAction.onClicked.addListener(increment);



browser.browserAction.onClicked.addListener((id)=>{


	//log(browser.runtime.getURL("../tab/html/app.html")) ;

	log("Message from backgroundjs.");
	if(!isTabCreated){
		browser.tabs.create({  url: TAB_URL  });
		isTabCreated = true;
	}

	
});

browser.bookmarks.onCreated.addListener((id, cf)=>{

	   browser.notifications.create({
	    "type": "basic",
	    "title": "Bookmark has been added",
	    "message": `ID: ${id} URL: ${cf.url}`
	  });
	});


browser.windows.onCreated.addListener((window) => {
  console.log("New window: " + window.id);
});

browser.tabs.onActivated.addListener((tab) => {
	console.log("New tab activated ", tab );
});

//this to be our one more entry point

browser.tabs.onCreated.addListener((tab) => {
	console.log("New tab created ", tab );
	// if(tab.url == 'about:newtab'){
	// 	browser.tabs.update(tab.id,{url: TAB_URL });
	// }
	// isTabCreated = true;
});
