let api = {
    updateTitle: async (e) => { 
        let  getData = async (url) => {            
            let request = {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type":"application/json; charset=utf-8"
                }
            }
            let response = await fetch(url, request)
            return await response.json()
        }

        let url = '/data/app.json'
        let data = await getData(url)

        return data                  
    }
}

onmessage = async (e) => {
    let model = await api[e.data.cmd](e)
    postMessage (model)
    close()
}