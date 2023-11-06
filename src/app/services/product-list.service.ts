import { Injectable } from '@angular/core';

import { IshopProd, IcartProd  } from '.././Interface/product-description';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartItemsService } from './cart-items.service';



@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(
    private cartItemsService:CartItemsService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {}
  
   search: string = ""
   likedItems:number[] = []
   selectedItem = {}
   slider = [
    {
      id: '1',
      name: 'Gold big hoops',
      imageUrl: "../../../assets/photos/Img1.png",
      price: '68'
    },
    {
      id: 2,
      name: 'Lira Earrings',
      imageUrl: "../../../assets/photos/Img2.png",
      price: '25'
    },
    {
      id: 3,
      name: 'Hal Earrings',
      imageUrl: "../../../assets/photos/Img3.png",
      price: '25'
    },
    {
      id: 4,
      name: 'Kaede Hair Pin Set Of 3 ',
      imageUrl: "../../../assets/photos/Img4.png",
      price: '30'
    },
    {
      id: 5,
      name: 'Plaine Necklace',
      imageUrl: "../../../assets/photos/Img4.png",
      price: '19'
    },
  ];
  
   products:IshopProd[] = [
    {   
        id: 1,
        name: 'Gold big hoops',
        price: 20,
        slideImg:"../../../assets/photos/Img1.png",
        imageUrl:[
          "../../../assets/photos/3.png",
            "../../../assets/photos/2.png",
            "../../../assets/photos/8.png",
            "../../../assets/photos/6.png"
          ],
        discount: 5,
        newPrice: 0,
        aditionalText: 'Sold Out',
        Categories: "Fashion, Style",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        Liked: false,
        AditionalInformation: {
            weight: '0.3 kg ',
            dimentions: "15 x 10 x 1 cm",
            colours: " Black, Browns, White ",
            material: "Metal"
        },
        Reviews: [{
            name: "Scarlet withch",
            stars: 3,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
            date: "6 May, 2020"
        }],
        SimilarItems: [{
              id: 1,
              name: "Lira Earrings",
              price: 20,
              slideImg: "../../../assets/photos/Img2.png",
              imageUrl:[ "../../../assets/photos/2.png"],
              discount: 0,
              newPrice: 0,
              aditionalText: 'Sold Out',
              Categories: "Fashion, Style",
              Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
              Liked: false,
              AditionalInformation: {
                  weight: '0.3 kg ',
                  dimentions: "15 x 10 x 1 cm",
                  colours: " Black, Browns, White ",
                  material: "Metal"
              },
              Reviews: [{
                  name: "Scarlet withch",
                  stars: 3,
                  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
                  date: "6 May, 2020"
              }],
              SimilarItems: [ 
                  
              ],
              quantity:10,
              num:0
            },{
              id: 3,
              name: 'Hal Earrings',
              price: 40,
              slideImg: "../../../assets/photos/Img2.png",
              imageUrl: ["../../../assets/photos/3.png"],
              discount: 10,
              newPrice: 0,
              aditionalText: 'Sold Out',
              Categories: "Fashion, Style",
              Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
              Liked: false,
              AditionalInformation: {
                  weight: '0.3 kg ',
                  dimentions: "15 x 10 x 1 cm",
                  colours: " Black, Browns, White ",
                  material: "Metal"
              },
              Reviews: [{
                  name: "Scarlet withch",
                  stars: 3,
                  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
                  date: "6 May, 2020"
              }],
              SimilarItems: [ 
                  
              ],
              quantity:0,
              num:0
            },{
              id: 6,
              name: 'Plaine Necklace',
              price: 40,
              slideImg:  "../../../assets/photos/Img2.png",
              imageUrl: ["../../../assets/photos/6.png"],
              discount: 20,
              newPrice: 0,
              aditionalText: 'Sold Out',
              Categories: "Fashion, Style",
              Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
              Liked: false,
              AditionalInformation: {
                  weight: '0.3 kg ',
                  dimentions: "15 x 10 x 1 cm",
                  colours: " Black, Browns, White ",
                  material: "Metal"
              },
              Reviews: [{
                  name: "Scarlet withch",
                  stars: 3,
                  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
                  date: "6 May, 2020"
              }],
              SimilarItems: [ 
                  
              ],
              quantity:5,
              num:0
            }
        ],
        quantity:10,
        num:0
    },
    {
        id: 2,
        name: "Lira Earrings",
        price: 50,
        slideImg: "../../../assets/photos/Img2.png",
        imageUrl:[
            "../../../assets/photos/2.png",
            "../../../assets/photos/3.png",
            "../../../assets/photos/8.png",
            "../../../assets/photos/6.png"
          ],
        discount: 20,
        newPrice: 0,
        aditionalText: 'Sold Out',
        Categories: "Fashion, Style",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        Liked: false,
        AditionalInformation: {
            weight: '0.3 kg ',
            dimentions: "15 x 10 x 1 cm",
            colours: " Black, Browns, White ",
            material: "Metal"
        },
        Reviews: [{
            name: "Scarlet withch",
            stars: 3,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
            date: "6 May, 2020"
        }],
        SimilarItems: [],
        quantity:5,
        num:0
    },
    {
        id: 3,
        name: 'Hal Earrings',
        price: 40,
        slideImg:"../../../assets/photos/Img3.png",
        imageUrl:[
            "../../../assets/photos/8.png",
            "../../../assets/photos/2.png",
            "../../../assets/photos/3.png",
            "../../../assets/photos/6.png"
          ],
        discount: 10,
        newPrice: 0,
        aditionalText: 'Sold Out',
        Categories: "Fashion, Style",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        Liked: false,
        AditionalInformation: {
            weight: '0.3 kg ',
            dimentions: "15 x 10 x 1 cm",
            colours: " Black, Browns, White ",
            material: "Metal"
        },
        Reviews: [{
            name: "Scarlet withch",
            stars: 3,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
            date: "6 May, 2020"
        }],
        SimilarItems: [],
        quantity:0,
        num:0
    },
    { 
        id: 4,
        name: " Kaede Hair Pin Set Of 3",
        price: 25,
        slideImg:"../../../assets/photos/Img4.png",
        imageUrl:[
            "../../../assets/photos/6.png",
            "../../../assets/photos/2.png",
            "../../../assets/photos/3.png",
            "../../../assets/photos/8.png",
          ],
        discount: 10,
        newPrice: 0,
        aditionalText: 'Sold Out',
        Categories: "Fashion, Style",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        Liked: false,
        AditionalInformation: {
            weight: '0.3 kg ',
            dimentions: "15 x 10 x 1 cm",
            colours: " Black, Browns, White ",
            material: "Metal"
        },
        Reviews: [{
            name: "Scarlet withch",
            stars: 3,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
            date: "6 May, 2020"
        }],
        SimilarItems: [],
        quantity:6,
        num:0
    },
    {
        id: 5,
        name: 'Lira Earrings ',
        price: 60,
        slideImg:"../../../assets/photos/Img4.png",
        imageUrl:[
            "../../../assets/photos/2.png",
            "../../../assets/photos/3.png",
            "../../../assets/photos/8.png",
            "../../../assets/photos/6.png"
          ],
        discount: 15,
        newPrice: 0,
        aditionalText: 'Sold Out',
        Categories: "Fashion, Style",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        Liked: false,
        AditionalInformation: {
            weight: '0.3 kg ',
            dimentions: "15 x 10 x 1 cm",
            colours: " Black, Browns, White ",
            material: "Metal"
        },
        Reviews: [{
            name: "Scarlet withch",
            stars: 3,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
            date: "6 May, 2020"
        }],
        SimilarItems: [],
        quantity:15,
        num:0
    },
    {
        id: 6,
        name: 'Plaine Necklace',
        price: 40,
        slideImg:"../../../assets/photos/Img1.png",
        imageUrl:[
            "../../../assets/photos/8.png",
            "../../../assets/photos/2.png",
            "../../../assets/photos/3.png",
            "../../../assets/photos/6.png"
          ],
        discount: 20,
        newPrice: 0,
        aditionalText: 'Sold Out',
        Categories: "Fashion, Style",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        Liked: false,
        AditionalInformation: {
            weight: '0.3 kg ',
            dimentions: "15 x 10 x 1 cm",
            colours: " Black, Browns, White ",
            material: "Metal"
        },
        Reviews: [{
            name: "Scarlet withch",
            stars: 3,
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
            date: "6 May, 2020"
        }],
        SimilarItems: [],
        quantity:5,
        num:0
    },
  ]
  address = "url"
 // products = this.http.get(this.address/products).subscribe(res => 
  //  console.log(res))

  

  goTo(selectedItem:IshopProd){
   this.selectedItem = selectedItem
   console.log(this.selectedItem)
  }

  getLikedList(){
    this.likedItems = JSON.parse(localStorage.getItem('liked') || '[]')
    return this.likedItems
    //http
}

  setLikedList(product:IshopProd){
   this.products.find(el => el.id === product.id)
      if(product.Liked && product.id){
        let likedFromStorage = JSON.parse(localStorage.getItem('liked') || '[]')
        likedFromStorage.push(product.id);
        localStorage.setItem('liked', JSON.stringify(likedFromStorage))
        this.likedItems = likedFromStorage
      }else{
        let likedFromStorage = JSON.parse(localStorage.getItem('liked') || '[]')
        let elem = likedFromStorage.find((el:any) => el.id === product.id)
        likedFromStorage.splice(likedFromStorage.indexOf(elem),1)
        localStorage.setItem('liked', JSON.stringify(likedFromStorage))
        this.likedItems = likedFromStorage 
      }
    
    //this.http.post(this.address,this.likedItems)   
  //  localStorage.clear()
  }
}
