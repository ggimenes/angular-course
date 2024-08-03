import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  viewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  // startDate = new Date(200, 0, 1);
  // title = COURSES[0].description;
  // price = 9.99;

  // @ViewChild('cardRef')
  // card: CourseCardComponent

  // @ViewChild('cardRef', {read: ElementRef})
  // cardDom: ElementRef

  // @ViewChild('container')
  // containerDiv: ElementRef

  // @ViewChildren(CourseCardComponent, {read: ElementRef})
  // cards: QueryList<CourseCardComponent>;

  constructor() {
    // view child not defined yet
  }

  ngAfterViewInit(): void {
    // console.log(this.card);
    // console.log(this.cards);
    // this.cards.changes.subscribe({
    //   next: (cards) => console.log(cards),
    // });
  }

  onCourseSelected(course: Course) {
    console.log(course);
    // console.log(this.card);
  }

  onCoursesEdited() {
    this.courses.push({ ...this.courses[0], id:1000 });
  }
}
