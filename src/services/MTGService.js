import { AppState } from "@/AppState";
import { CardTemplate } from "@/models/CardTemplate";
import axios from "axios";

const mtgApi = axios.create({
    baseURL: 'https://api.magicthegathering.io'})

class MTGService {
    async getAllCards(){
        const response = await mtgApi.get('v1/cards')
        console.log(response.data)
        const cards = response.data.cards.map((c)=> new CardTemplate(c))
        console.log(cards)
        AppState.cards = cards
    }
}

export const mtgService = new MTGService()