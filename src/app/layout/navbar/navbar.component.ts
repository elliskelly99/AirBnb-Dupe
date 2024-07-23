import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AvatarComponent } from './avatar/avatar.component';
import { CategoryComponent } from './category/category.component';
import {ToolbarModule} from "primeng/toolbar";
import {MenuModule} from "primeng/menu";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule,
  FontAwesomeModule,
  ToolbarModule,
  MenuModule,
  CategoryComponent,
  AvatarComponent 
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  location: string = "Anywhere";
  guests: string = "Add Guests";
  dates: string = "Any week";

  currentMenuItems: MenuItem[] | undefined = [];

  ngOnInit(): void{
    this.fetchMenu();
  }
  
  private fetchMenu() {
      return [
        {
          label: "Sign up",
          styleClass: "font-bold"
          
        },
        {
          label: "Log in",
        }
      ]
    } 
}


