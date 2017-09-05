import {Component, OnInit} from '@angular/core';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-toasty',
  templateUrl: './toasty.component.html',
  styles: [`
    p {
      color: blue;
    }
  `]
})
export class ToastyComponent implements OnInit {
  message: string = 'Message';
  title: string = 'Title';
  timeout: number = 5000;
  closebutton: boolean = true;
  position: string = 'bottom-right' || 'bottom-left' || 'top-right' || 'top-left' || 'top-center' || 'bottom-center' || 'center-center';
  private toastOptions: ToastOptions;
  private type: string = 'default';
  private theme: string = 'default';

  constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
  }

  ngOnInit() {
  }

  addToast(): void {
    this.toastOptions = {
      title: this.title,
      msg: this.message,
      showClose: this.closebutton,
      timeout: this.timeout,
      theme: this.theme,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };
    this.showToast(this.type);
  }

  removeAll(): void {
    this.toastyService.clearAll();
  }

  showToast(type: string): void {
    switch (type) {
      case 'info':
        this.toastyService.info(this.toastOptions);
        break;
      case 'success':
        this.toastyService.success(this.toastOptions);
        break;
      case 'wait':
        this.toastyService.wait(this.toastOptions);
        break;
      case 'error':
        this.toastyService.error(this.toastOptions);
        break;
      case 'warning':
        this.toastyService.warning(this.toastOptions);
        break;
      default:
        this.toastyService.default(this.toastOptions);

    }
  }

}
