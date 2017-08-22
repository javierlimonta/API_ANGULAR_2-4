import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styles: [`
    .popup {
      position: absolute;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #ddd;
      height: 251px;
    }
  `]
})
export class DatepickerComponent implements OnInit, AfterViewInit {
  @Input()
  dateModel: Date;
  @Input()
  label: string;
  @Output()
  dateModelChange: EventEmitter<any> = new EventEmitter();
  public dt: Date = new Date();
  @Input() value: string;
  @Input() id: string;
  private showDatepicker: boolean = false;

  showPopup() {
    this.showDatepicker = true;
  }

  hidePopup(event) {
    this.showDatepicker = false;
    this.dateModel = event;
    this.dateModelChange.emit(event)
  }

  today(): void {
    this.dt = new Date();
    this.apply();
    this.close();
  }

  clear(): void {
    this.dt = this.value = void 0;
    this.dateModelChange.emit(this.value);
    this.close();
  }

  private transformDate(date: Date): string {
    const d = new DatePipe('pt-PT').transform(date, 'dd/MM/yyyy');
    return d;
  }

  private apply(): void {
    this.value = this.transformDate(this.dt);
    this.dateModelChange.emit(this.value);
  }

  open() {
    this.showDatepicker = true;
  }

  close() {
    this.showDatepicker = false;
  }

  constructor(private datePipe: DatePipe) {
  }

  onSelectionDone(event) {
    this.dt = event;
    this.apply();
    this.close();
  }

  onClickedOutside(event) {
    console.log('onClickedOutside', event);
    if (this.showDatepicker)
      this.close();
  }

  ngAfterViewInit() {
    // this.dt = new Date(this.value);
  }

  ngOnInit() {
  }

}
