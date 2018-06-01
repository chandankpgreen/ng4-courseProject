import { Directive, HostListener, HostBinding, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirecive implements OnInit {

    // constructor(private elementRef: ElementRef){
    //     var x= elementRef;
    // }
    ngOnInit() {
        //this.backgroundColor = this.defaultColor; // while reloading, we don't get the required default color as dom is not ready yet in line no 10.
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      }
    @HostBinding('class.open') isOpen = false;
    @HostBinding('style') cssClass: string;

    @HostListener('click') toggleOpen() {
     this.isOpen = !this.isOpen;
     console.log(this.cssClass);
    }
    // ngOnInit() {
    // //  this.cssClass = "";
    // }
}