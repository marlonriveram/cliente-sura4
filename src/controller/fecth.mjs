export async function Get (url){

    const options = {
        method: 'GET'
    };
    const res = await fetch(url, options);
    const data = await res.json();
    
    return data
}

export async function Post (url,fromData){

    const options = {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(fromData)
    };
    const res = await fetch(url, options);
    const data = await res.json();
    
    return data
}