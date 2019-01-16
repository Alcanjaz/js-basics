import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }
    async getResults() {
        const key = '8d0b48a4a0be186aeaffe8869a95b141';
        try{
            const res = await axios.get(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch(error) {
            alert(error);
        }
    }
}