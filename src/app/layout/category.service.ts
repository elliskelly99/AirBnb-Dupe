import {Injectable} from '@angular/core';
import {Category, CategoryName} from "./category.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //array of categories
  private categories: Category[] = [
    {
      icon: "eye",
      displayName: "All",
      technicalName: "ALL",
      activated: false
    },
    {
      icon: "eye",
      displayName: "Amazing views",
      technicalName: "AMAZING_VIEWS",
      activated: false
    },
    {
      icon: "exclamation",
      displayName: "OMG!",
      technicalName: "OMG",
      activated: false
    },
    {
      icon: "tree",
      displayName: "Treehouses",
      technicalName: "TREEHOUSES",
      activated: false
    },
    {
      icon: "umbrella-beach",
      displayName: "Beach",
      technicalName: "BEACH",
      activated: false
    },
    {
      icon: "tractor",
      displayName: "Farms",
      technicalName: "FARMS",
      activated: false
    },
    {
      icon: "house",
      displayName: "Tiny homes",
      technicalName: "TINY_HOMES",
      activated: false
    },
    {
      icon: "water",
      displayName: "Lake",
      technicalName: "LAKE",
      activated: false
    },
    {
      icon: "box",
      displayName: "Containers",
      technicalName: "CONTAINERS",
      activated: false
    },
    {
      icon: "tent",
      displayName: "Camping",
      technicalName: "CAMPING",
      activated: false
    },
    {
      icon: "chess-rook",
      displayName: "Castle",
      technicalName: "CASTLE",
      activated: false
    },
    {
      icon: "person-skiing",
      displayName: "Skiing",
      technicalName: "SKIING",
      activated: false
    },
    {
      icon: "fire",
      displayName: "Campers",
      technicalName: "CAMPERS",
      activated: false
    },
    {
      icon: "snowflake",
      displayName: "Artic",
      technicalName: "ARTIC",
      activated: false
    },
    {
      icon: "sailboat",
      displayName: "Boat",
      technicalName: "BOAT",
      activated: false
    },
    {
      icon: "mug-saucer",
      displayName: "Bed & breakfasts",
      technicalName: "BED_AND_BREAKFASTS",
      activated: false
    },
    {
      icon: "lightbulb",
      displayName: "Rooms",
      technicalName: "ROOMS",
      activated: false
    },
    {
      icon: "earth-europe",
      displayName: "Earth homes",
      technicalName: "EARTH_HOMES",
      activated: false
    },
    {
      icon: "tower-observation",
      displayName: "Tower",
      technicalName: "TOWER",
      activated: false
    },
    {
      icon: "hill-rockslide",
      displayName: "Caves",
      technicalName: "CAVES",
      activated: false
    },
    {
      icon: "champagne-glasses",
      displayName: "Luxes",
      technicalName: "LUXES",
      activated: false
    },
    {
      icon: "kitchen-set",
      displayName: "Chef's kitchen",
      technicalName: "CHEFS_KITCHEN",
      activated: false
    },
  ];



  private changeCategory$: BehaviorSubject<Category> = new BehaviorSubject<Category>(this.getCategoryByDefault())
  changCategoryObs: Observable<Category>  = this.changeCategory$.asObservable()//NEEDED TO MODIFY THE COMPONENT WWHEN THE OBSERVABLE IS CLICKED BY THE USER
  
  changeCategory(category: Category): void{
    this.changeCategory$.next(category);

  }
  
  getCategories(): Category[]{
    return this.categories;  
  }

  getCategoryByDefault(): Category {
    return this.categories[0];
  }
  

  getCategoryByTechnicalName(technicalName: CategoryName): Category | undefined {
    return this.categories.find(category => category.technicalName === technicalName);
  }

  constructor() { }
}


//12:13 time stamp