import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageSrc]'
})
export class ImageSrcDirective {

  constructor(private elementRef: ElementRef) { }
  @HostListener('click')
  changePic(){
   let src: any = this.elementRef.nativeElement.src;
   let prev: any= document.getElementById("preview")
   prev.src = src
   console.log(prev)
 }
}
