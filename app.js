
import * as Dispatcher from "/modules/dispatcher.js"
import * as Model from "/modules/model.js"
import {html,span,div,append} from "/modules/html.js"

let props = {
        title: {
            value: "title",
            set: (value) => {                    
                let id = "title"
                let el = document.getElementById(id)
                el.textContent = value            
            }
        },
        description: {
            value: "description",
            set: (value) => {                    
                let id = "description"
                let el = document.getElementById(id)
                el.textContent = value            
            }
        },
        model: {
            value: "model",
            set: (value) => {                    
                let id = "model"
                let el = document.getElementById(id)
                el.textContent = value            
            }
        }
    }

let model = Model.create(props)

let render = (model) => {

        append(
            document.body, 
            [
                div ({},
                    [ 
                        span ({
                            id: "title",
                            textContent: "title"
                        },[]),
                        div({}, [
                            span ({
                                id: "description",
                                textContent: "description"
                            }, []),
                        div ({
                            id: "model",
                            textContent: "model"
                        }, [])
                        ])
                    ])                
            ]
        ) 


            //document.body.innerHTML = html`
            // <h1>${e.data.cmd}</h1>        
            // `
 
    }

let update = (e) => {
    console.log (`message received from worker`)

    model.title = e.data.title
    model.description = e.data.description
    model.model = JSON.stringify(e.data)
}

let dispatcher = Dispatcher.create (
        "app.dispatcher.js", update     
    )

let message = {
            cmd: "updateTitle",
            params: {
                title: "my home page"
            },
            status: status
    }

render(model)


Dispatcher.dispatch (dispatcher, message)


// let dispatch = (message) => {
//     console.log (message)
// }

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

// // dispatch (message)