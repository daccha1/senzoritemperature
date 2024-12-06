export const fetchData = async (url) => {

    const response = await fetch(url);
    const podaci = await response.json();
    return podaci;
    
};