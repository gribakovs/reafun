import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


window.UIkit = UIkit
// loads the Icon plugin
window.UIkit.use(Icons);

// // components can be called from the imported UIkit reference
//UIkit.notification('Hello world.');

import * as App from "./components/home.ui.js"

let params = {
    title: "my home page"
}

App.render(params)