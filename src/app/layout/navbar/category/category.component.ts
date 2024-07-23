import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Category } from '../../category.model';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryService: CategoryService = inject(CategoryService);
  
  categories: Category[] | undefined;

  currentActivateCategory: Category = this.categoryService.getCategoryByDefault();

  ngOnInit(): void {
    this.fetchCategories()
  }

  private fetchCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

}
