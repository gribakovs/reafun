
import {html,span,div,append} from "../modules/html.js"
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

let onrender = (model) => {
    let children = [
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

    let app = define("rf-app", oninit, onrender, onupdate, onevent, "/components/home.api.js", message)
    console.log (app)

    append(
        document.body, 
        [
            app ({},[])
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