export class CardTemplate {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.names = data.names;
        this.manaCost = data.manaCost;
        this.cmc = data.cmc;
        this.colors = data.colors;
        this.colorIdentity = data.colorIdentity;
        this.type = data.type;
        this.supertypes = data.supertypes;
        this.types = data.types;
        this.subtypes = data.subtypes;
        this.rarity = data.rarity;
        this.set = data.set;
        this.setName = data.setName;
        this.text = data.text;
        this.artist = data.artist;
        this.number = data.number;
        this.power = data.power;
        this.toughness = data.toughness;
        this.layout = data.layout;
        this.multiverseid = data.multiverseid;
        this.imageUrl = data.imageUrl;
        this.variations = data.variations;
        this.rulings = data.rulings;
        this.foreignNames = data.foreignNames;
        this.printings = data.printings;
        this.originalText = data.originalText;
        this.originalType  = data.originalType;
        this.legalites = data.legalites;
        this.flavor = data.flavor;
    }
}