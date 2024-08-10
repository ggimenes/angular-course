import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Injectable,
  Injector,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { Course } from "./model/course";
import { Observable } from "rxjs";
import { CoursesService } from "./courses/services/courses.service";
import { AppConfig, CONFIG_TOKEN } from "./config";
import { COURSES } from "src/db-data";
import { createCustomElement } from "@angular/elements";
import { CourseTitleComponent } from "./courses/course-title/course-title.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  courses = COURSES;

  coursesTotal = COURSES.length;
  // courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private injector: Injector
  ) {
    console.log(config);
  }

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();

    const htmlElement = createCustomElement(CourseTitleComponent, {
      injector: this.injector,
    });

    customElements.define("course-title", htmlElement);
  }

  onEditCourse() {
    // const newCourse = { ...this.courses$[0] };
    // newCourse.description = "New Value!";
    // this.courses$[0] = newCourse;
  }
}
