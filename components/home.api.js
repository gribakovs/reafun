let api = {
    updateTitle: async (e) => { 
        console.log ("execute updateTitle")

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

        console.log (data)

        return data                  
    }
}

onmessage = async (e) => {
    console.log ("message received from main script")
    let model = await api[e.data.cmd](e)

    console.log ("posting message back to main script")
    postMessage (model)
    close()
}