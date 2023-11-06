import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { MainService } from '../../services/main.service';


@Component({
  selector: 'app-blog1',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  tab =1
  myItems = this.mainService.blogItems
  activeTab = 'none'
  value: string = ""
  

  constructor(public router: Router, private mainService: MainService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      console.log(res);

    })
  }
  onTabClick(tab:string){
    this.activeTab = tab;

  }
  items = {
    id: 0,
    image: "",
    category: "",
    date: " ",
    title: "",
    info: "",
  }
  itemPage(selectedItem:any) {

    console.log(selectedItem);
    this.mainService.selectedItem=selectedItem
    console.log();
    
    this.router.navigate(["blogsItem/" + selectedItem.id])
  }

  search(){
    let categName = this.value
    this.myItems = this.mainService.blogItems.filter(el=>
      (el.category.toLowerCase().includes(categName.toLowerCase())
  ))
   this.value =""
  }
}

