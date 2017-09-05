import {Component, OnInit} from '@angular/core';
import {ToastrService, GlobalConfig} from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html'
})
export class ToastrComponent implements OnInit {
  message: string = 'Empty Message';
  title: string = 'Empty Title';
  closeButton: boolean = false;
  progressbar: boolean = false;
  autoDismiss: boolean = false;
  prevent: boolean = false;
  timeout: number = 5000;
  maxMessage: number = 5;
  type: string = 'default';
  position: string = 'toast-top-right';
  options: GlobalConfig;
  idlastOne: number;

  constructor(private toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;
  }

  ngOnInit() {
  }

  showToastr() {

    this.options = {
      closeButton: this.closeButton,
      timeOut: this.timeout,
      progressBar: this.progressbar,
      tapToDismiss: this.autoDismiss,
      positionClass: this.position,
      maxOpened: this.maxMessage,
      preventDuplicates: this.prevent
    };
    this.throwToastr();
  }

  throwToastr(): void {
    const type = this.type;
    let objectToastr;
    switch (type) {
      case 'success':
        objectToastr = this.toastr.success(this.message, this.title, this.options);
        break;
      case 'info':
        objectToastr = this.toastr.info(this.message, this.title, this.options);
        break;
      case 'warning':
        objectToastr = this.toastr.warning(this.message, this.title, this.options);
        break;
      case 'error':
        objectToastr = this.toastr.error(this.message, this.title, this.options);
        break;
      default:
        objectToastr = this.toastr.show(this.message, this.title, this.options);
    }
    this.idlastOne = objectToastr.toastId;
  }

  clearLastOne(): void {
    this.toastr.clear(this.idlastOne);
  }

  clearAll(): void {
    this.toastr.clear();
  }


}
