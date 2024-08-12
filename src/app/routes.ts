import { Routes } from "@angular/router";
import { SignalsHomeComponent } from "./signals/signals-home/signals-home.component";

const routeConfig: Routes = [
  {
    path: "signals/signal-home",
    component: SignalsHomeComponent,
    title: "Signals",
  },
];
export default routeConfig;
