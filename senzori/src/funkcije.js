export const fetchData = async (url) => {

    const response = await fetch(url);
    const podaci = await response.json();
    return podaci;
    
};

export const fetchPost = async (url, senzor) => {

    try{
        const response = await fetch(url, {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(senzor)
        });

    }
    catch(error){
        console.log("POST REQUEST ERROR");
    }


}