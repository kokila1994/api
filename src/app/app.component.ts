import { Component } from '@angular/core';
import { ApiserviceService } from './service/apiservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apirequest';

  users=[];
  newarr: any;
  
  constructor(private api: ApiserviceService){
    
  }
  ngOnInit(){
    this.userDetails();
  }

  userDetails(){
    this.api.getUserData().subscribe((response:any)=>{
      this.newarr =response.data
        console.log(response.data);
    });
  }
}
