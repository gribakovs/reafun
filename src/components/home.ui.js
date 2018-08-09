
import {span,div,a,h3,button,append,assign} from "../modules/html.js"
import {define} from "../modules/component.js"

let oninit = (host) => {
    let props = {
        title: {
            value: "title",
            set: (value) => {                    
                let id = "title"
                let el = host.getElementById(id)
                el.textContent = value            
            }
        },
        description: {
            value: "description",
            set: (value) => {                    
                let id = "description"
                let el = host.getElementById(id)
                el.textContent = value            
            }
        },
        model: {
            value: "model",
            set: (value) => {                    
                let id = "model"
                let el = host.getElementById(id)
                el.textContent = value            
            }
        }
    }

    return props
}



    // <div class="uk-navbar-container" uk-navbar>
    //     <div class="uk-navbar-left">
    //         <a class="uk-navbar-toggle" uk-navbar-toggle-icon href=""></a>
    //     </div>
    // </div>

    // <div class="uk-container">
    //     <div class="uk-card uk-card-body uk-card-primary">
    //         <h3 class="uk-card-title">Example headline</h3>

    //         <button class="uk-button uk-button-default" uk-tooltip="title: Hello World">Hover</button>
    //     </div>
    // </div>

let onrender = (model) => {
    let children = 
        // [ div (
        //     [ ["class","uk-container"]
        //     ],[ div (
        //           [ ["class","uk-card uk-card-body uk-card-primary"]
        //           ],[ assign (
        //                 h3 (
        //                     [ ["class","uk-card-title"]
        //                     ],[]
        //                 ), { textContent: "Example headline" }
        //             )
        //             , assign (
        //                 button (
        //                     [ ["class","uk-button uk-button-default"] 
        //                     , ["uk-tooltip", "title: Hello World"]                          
        //                     ],[]
        //                 ), { textContent: "Hover" }
        //               )
        //             ]                
        //         )
        //       ]
        //   )
        // , div (   
        //     [ ["class", "uk-navbar-container"]
        //     , ["uk-navbar", ""]
        //     ],[]
        //   )
        // , div (   
        //     [ ["class", "uk-navbar-left"]
        //     ],[ a (
        //         [ [ "class", "uk-navbar-toggle"]
        //         , [ "uk-navbar-toggle-icon", ""]
        //         , [ "href", ""]                   
        //         ], []
        //         )
        //     ]
        //   )
        [ div (   
            [],
            [ span (
                [ ["id", "title"]
                , ["text", "title"]
                ], []
              )
            , div (
                [], 
                [ span (  
                    [ ["id", "description"]
                    , ["textContent", "description"]
                    ]
                    , []
                  )
                , div (
                    [ ["id", "model"]
                    , ["text", "model"]
                    ]
                    , []
                  )
                ]
              )
            ]
          )                           
        ]
    return children
}

let onupdate = (e) => {
    console.log (`message received from worker`)
    let newmodel = { 
            title: e.data.title,
            description: e.data.description,
            model: JSON.stringify(e.data)
    }
    return newmodel
}

let onevent = (e) => {

}



let render = (params) => {

    let message = {
        cmd: "updateTitle",
        params: params,
        status: status
    }

    let app = define("rf-app", oninit, onrender, onupdate, onevent, "./scripts/homeapi.js", message)
    console.log (app)

    append(
        document.body, 
        [
            app ([],[])
        ]
    ) 

    console.log(document.body.innerHTML)


}

export {render}


// let createWorker = (fn) => {
//     return new Worker(URL.createObjectURL(new Blob(['('+fn+')()'])));
//   }
  
// const worker = createWorker  (     
//     () => {    
//         postMessage('I am a cool worker!');   
//         self.close();
//     }
// );
  
// worker.onmessage = (event) => console.log(event.data);
