import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// loads the Icon plugin

console.log("uikkit loader started")
UIkit.use(Icons);
UIkit.notification('Hello world.')

console.log("uikkit loader completed")