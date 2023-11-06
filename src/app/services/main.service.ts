import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  blogItems  = [
    {
      id:1,
      image: "../../assets/photos/Img 01.png",
      category: "Fashion",
      date: " October 8, 2020",
      title: "Top Trends From Spring",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...",

    },
    {
      id:2,
      image: "../../assets/photos/Img 02.png",
      category: "Style",
      date: "October 8, 2020",
      title: "Top Trends From Spring",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...",

    },
    {
      id:3,
      image: "../../assets/photos/Img 03.png",
      category: "Accessories",
      date: "Top Trends From Spring",
      title: "Top Trends From Spring",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...",

    },
    {
      id:4,
      image: "../../assets/photos/Img 04.png",
      category: "Season",
      date: "Top Trends From Spring",
      title: "Top Trends From Spring",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...",

    },
    {
      id:5,
      image: "../../assets/photos/Img 01.png",
      category: "Fashion",
      date: " October 8, 2020",
      title: "Top Trends From Spring",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...",

    },
    {
      id:6,
      image: "../../assets/photos/Img 02.png",
      category: "Style",
      date: "October 8, 2020",
      title: "Top Trends From Spring",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...",

    },
    {
      id:7,
      image: "../../assets/photos/Img 03.png",
      category: "Accessories",
      date: "Top Trends From Spring",
      title: "Top Trends From Spring",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...",

    },
    {
      id:8,
      image: "../../assets/photos/Img 04.png",
      category: "Season",
      date: "Top Trends From Spring",
      title: "Top Trends From Spring",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...",

    },

  ]
  usersComment =[
    {
      id:1,
      image:'../../../assets/photos/user1.png',
      name:'Scarlet withch',
      comment:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
      time:'09 September 2022',
      reply:'Reply',
    },
    {
      id:2,
      image:'../../../assets/photos/user2.png',
      name:'Kate moss',
      comment:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
      time:'09 September 2022',
      reply:'Reply',
    },
    
  ]

  orders=[
    {
      orderNumber:"7643980998990",
      date: "October 8,2021",
      status:"delivered",
      total:"$ 105",
      actions:"View Order"
    },
    {
      orderNumber:"7643980998990",
      date: "October 8,2021",
      status:"delivered",
      total:"$ 105",
      actions:"View Order"
    }
  ]
  downloads=[
    {

      orderNumber:"7643980998990",
      date: "October 8,2021",
      status:"delivered",
      total:"$ 105",
      actions:"View Order"
    }
  ]
  adresses=[
    {}
  ]
  account=[
    {}
  ]


  selectedItem={
    id:0,
    image:'',
    category:'',
    date:'',
    title:'',
    info:''
  }
}


//user [] set anel localum get anel u popoxutyun
