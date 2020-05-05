class Browser{
    switchToTab(title){
        browser.pause(2000)
        var allWindowHandles = browser.getWindowHandles()
        for(var i in allWindowHandles){
			browser.switchToWindow(allWindowHandles[i])
			if(browser.getTitle().includes(title)) break
		}
    }
}
module.exports = new Browser()