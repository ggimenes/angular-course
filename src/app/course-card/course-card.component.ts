import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input({
    required: true,
  })
  course: Course;

  @Input()
  noImageTemplate: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.image);
  }

  onViewCourse() {
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    return { beginner: this.course.category === "BEGINNER" };
  }
}
