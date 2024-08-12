import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "src/app/model/course";

@Pipe({
    name: "filterByCategory",
    standalone: true,
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(courses: Course[], category: string) {
    return courses.filter((course) => course.category === category);
  }
}