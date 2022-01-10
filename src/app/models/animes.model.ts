export class Animes {
    id?: string;
    title: string;
    Autor: string;
    studio: string;
    
    pictureLink: string;
    Nb_episode: string;
    
    NB_Saison :string;
    
    
    onVF: boolean;
    sortie : string;
    Resum : string;

    Finish: boolean;
    Nb_stars : number;
    genre: string;
    Statut : string;

    display : boolean;

    constructor() {

        this.title = '';
        this.Autor = '';
        this.studio = '';
        this.pictureLink = '';
        this.onVF = false;
        this.Nb_episode = '';
        this.sortie = '';
        this.Resum = '';
        this.display = true;
        
        this.Finish = false;
        this.NB_Saison = '';
        this.Nb_stars = 0;
        this.genre = '';

        this.Statut = '';

    }
}

