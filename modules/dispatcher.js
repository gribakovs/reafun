
let create = (path, onmessage) => {
    let worker = new Worker (path)
    worker.onmessage = onmessage
    return worker
}
let dispatch = (worker, message) => {
    worker.postMessage(message)
}

export {dispatch,create}