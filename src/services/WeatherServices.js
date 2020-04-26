import axios from 'axios'


const key= "f138b8fcb452ef2a48d7e5c45c7cfb17"


export const getAllData = async (query) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=metric`
    let response = await axios.get(url)
    return response.data
}

export const getForecast = async (query) => {
    let for_url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${key}&units=metric`
    let response = await axios.get(for_url)
    return response.data   
}
