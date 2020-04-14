const minimist = require('minimist');

class BrowserSettings{

browserProperties(){
let settings = {};  // default settings
const args = minimist(process.argv.slice(2));
delete args._
//console.log(args)
 Object.assign(settings, args);
//console.log(settings.browserName)
settings.browserName = 'chrome';
if (args.browserName ==='ff') settings.browserName = 'firefox';
if (args.browserName === 'firefox') settings.browserName = 'firefox';
if (args.browserName ==='IE') settings.browserName = 'internet explorer';
if (args.browserName ==='internet explorer') settings.browserName = 'internet explorer';

return settings
    }
}
module.exports = new BrowserSettings()
