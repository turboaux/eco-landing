import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-calories-meter',
  templateUrl: './calories-meter.component.html',
  styleUrls: ['./calories-meter.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaloriesMeterComponent implements OnInit {

  consumedPercentage: string = '0%';

  @Input() consumed: number = 0;
  @Input() threshold: number = 0;

  ngOnInit(): void {
    
    this.consumedPercentage = `calc(${ (this.consumed / this.threshold) * 100 }% - 20px)`;
  }
}
