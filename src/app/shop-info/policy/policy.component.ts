import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent  implements OnInit{
ngOnInit(): void {
  window.scroll(0,0)
}
}
