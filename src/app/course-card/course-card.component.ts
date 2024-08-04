import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  AttributeDecorator,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked
{
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(@Attribute("type") type: AttributeDecorator) {
    console.log(type);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit() {}

  ngAfterContentChecked(): void {
    // after checking the content projection changes using the change detection mechanism
    // can't change content data, because it's already checked and will throw an error
  }

  ngAfterViewChecked(): void {}

  ngOnDestroy(): void {}

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }
}
