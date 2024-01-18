class Serializer
{
    constructor()
    {
    }

    SaveValue(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    GetInt(key) {
        if(!localStorage.hasOwnProperty(key)) return 0;
        return parseInt(localStorage.getItem(key));
    }

    GetFloat(key) {
        if(!localStorage.hasOwnProperty(key)) return 0.0;
        return parseFloat(localStorage.getItem(key));
    }

    GetValue(key) {
        if(!localStorage.hasOwnProperty(key)) return 0;
        return localStorage.getItem(key);
    }

    GetArray(key) {
        if(!localStorage.hasOwnProperty(key)) return [];
        return JSON.parse(localStorage.getItem(key));
    }
}


const highscoreSerializerInstance = new Serializer();
