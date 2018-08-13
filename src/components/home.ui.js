
import {html,aClass} from "../modules/html.js"
import {attr,img,style,header,nav,ul,li,main,footer, span,div,a,h3,button,section,p,h1,strong,append,assign, h2} from "../modules/elements.js"
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

//     <section class="section">
//     <div class="container">
//       <h1 class="title">
//         Hello World
//       </h1>
//       <p class="subtitle">
//         My first website with <strong>Bulma</strong>!
//       </p>
//     </div>
//   </section>


let onrender = (model) => {

           
    // let bulma = div () ()
    //     bulma.innerHTML = html`
    //      <section class="section">
    //         <div class="container">
    //         <h1 class="title">
    //             Hello World
    //         </h1>
    //         <p class="subtitle">
    //             My first website with <strong>Bulma</strong>!
    //         </p>
    //         </div>
    //     </section>
    // `

    let title = 
        h1  ( attr ("class","title") 
            )
            ( "Hello World",":", "Hello World")

    let subtitle = 
        p   ( attr ("class","subtitle") )
            ( "My first website with "
            , strong () ("Bulma")
            )

    let mybulma = 
        div 
            () 
            ( section 
                ( attr ("class","section") )
                ( div ( attr ("class","container") )
                      ( title, subtitle )
                )
            )
    let styles = `
            main {
                font-size: 28px;
            }

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: #333;
                position: -webkit-sticky; /* Safari */
                position: sticky;
                top: 0;
            }

            li {
                float: left;
            }

            li a {
                display: block;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }

            li a:hover {
                background-color: #111;
            }

            .active {
                background-color: #4CAF50;
            }
        `
    let appStyle = style () (styles)
 
    let appHeaderTitle = "REAFUN"
    let appHeaderSubtitle = "reactive web framework"
    let appHeader = 
            header  
                () 
                ( h1 () 
                        ( appHeaderTitle
                        , h2 () (appHeaderSubtitle) 
                        ) 
                )

    let appNavMenuItems = 
        Object.entries (
            {
                "item1": ["active","#home","Home"],
                "item2": ["","#contacts","Contacts"]
            }
        )
        .map (
            ([key,value]) => 
                li  ()
                    ( a ( attr ("class",value[0])
                        , attr ("href",`#${key}`)
                        )
                        ( value[2]
                        )
                    )

        )

    console.log (appNavMenuItems)

    let appNavMenu = 
        ul () (appNavMenuItems)


    let appNavLogo = 
        a ( attr ("class", "navbar-item")
          , attr ("href","https://bulma.io") 
          )
          ( img ( attr ("src","https://bulma.io/images/bulma-logo.png")
                , attr ("alt","Bulma: a modern CSS framework based on Flexbox")
                , attr ("width","112")
                , attr ("height", "28")
                )
                ()
          )

    let appNavBurger = 
        a   ( attr  ("role","button") 
            , attr  ("class","navbar-burger") 
            , attr  ("aria-label","menu")
            , attr  ("aria-expanded","false")
            )   
            ( span  ( attr ("aria-hidden","true") )
                    ()
            , span  ( attr ("aria-hidden","true") )
                    ()
            , span  ( attr ("aria-hidden","true") )
                    ()
            )
        // appNavBurger.setAttribute ("isActive", false)
        // appNavBurger.onclick = () => {
        //     appNavBurger.setAttribute ("isActive", !appNavBurger.getAttribute ("isActive") )
        //     appNavBurger.isActive
        //         ? appNavBurger.className = "navbar-burger is-active"
        //         : appNavBurger.className = "navbar-burger"
        // }

    let appNavBrand = 
        div ( attr ( "class", "navbar-brand") )
            () // appNavLogo, appNavBurger )
    
    let appNav =  
        nav ( attr ("class", "navbar")
            , attr ("role", "navigation")
            , attr ("aria-label", "main navigation")
            )
            ()
            // ( appNavBrand , appNavMenu )

    let appMain = main () ()
    // ("Main")

    let appFooter = footer () ()
    // ("Footer")



    let children = 
        [ //appStyle
        //   appHeader
        // , appNav
        // , appMain
        // , appFooter
        // // , bulma
        // , mybulma
        // , div (
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
        // // , div (   
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
        // ,
         div 
            ()
            ( span 
                ( attr ("id", "title") )
                ( "title" )
            , div 
                ()
                ( span 
                    ( attr ("id", "description") )
                    ( "description" )
                , div 
                    ( attr ("id", "model") )
                    ( "model")
                )
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
            app () ()
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
