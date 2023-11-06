export interface IshopProd {
    id:number,
    name: string,
    price: number,
    slideImg:string,
    imageUrl: string[],
    discount: number,
    newPrice: number,
    aditionalText: string,
    Categories: string,
    Description: string,
    Liked: boolean,
    AditionalInformation: {
        weight: string,
        dimentions: string,
        colours: string,
        material: string
    },
    Reviews: [{
        name: string ,
        stars: number,
        text: string,
        date: string
    }],
    SimilarItems: Array<IshopProd>,
    quantity:number,
    num:number
}

export interface IcartProd {
    id:number,
    name: string,
    price: number,
    imageUrl: string[],
    discount: number,
    newPrice: number,
    aditionalText: string,
    color: string,
    num:number
}
export interface IReview {
   
text: string,
name: string,
email:string,
agree: boolean,
stars:number,
date:{}
}