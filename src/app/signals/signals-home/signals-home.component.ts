import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  EffectCleanupRegisterFn,
  EffectRef,
  signal,
} from "@angular/core";

@Component({
  selector: "signals-home",
  standalone: true,
  imports: [],
  templateUrl: "./signals-home.component.html",
  styleUrl: "./signals-home.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsHomeComponent {
  counter = signal(0);
  derivedCounter = computed(() => {
    // needs to be outside conditions to help Angular identifying dependent triggers
    const counter = this.counter();

    if (this.multiplier >= 10) return counter * 10;
    else return 0;
  });
  multiplier: number = 0;
  effectRef: EffectRef

  constructor() {
    // this.effectRef = effect(this.logEffect, { manualCleanup: true });
    this.effectRef = effect((onCleanup) => {
      console.log(`counter ${this.counter()}; derived ${this.derivedCounter()}`);
    }, { manualCleanup: true });
  }

  // doesn't work. Need to understand how to do it if needed
  logEffect(onCleanup: EffectCleanupRegisterFn) {
    console.log(`counter ${this.counter()}; derived ${this.derivedCounter()}`);
  }

  increment() {
    this.counter.update((v) => v + 1);
  }

  incrementMultiplier() {
    this.multiplier++;
  }

  cleanup(){
    this.effectRef.destroy();
  }
}
