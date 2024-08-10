import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { CourseTitleComponent } from './course-title/course-title.component';



@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    FilterByCategoryPipe
  ],
  imports: [
    CommonModule,
    CourseTitleComponent
  ],
  exports:[
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    FilterByCategoryPipe,
    CourseTitleComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule { }
