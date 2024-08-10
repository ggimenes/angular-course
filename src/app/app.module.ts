import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { CoursesModule } from "./courses/courses.module";
import { CourseTitleComponent } from "./courses/course-title/course-title.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CoursesModule, BrowserAnimationsModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  // entryComponents: [CourseTitleComponent]
})
export class AppModule {}
