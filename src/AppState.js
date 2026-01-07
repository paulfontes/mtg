import { reactive } from "vue";

export const AppState = reactive({
    /** @type {import('./models/CardTemplate').CardTemplate[]}  */
    cards: []
})