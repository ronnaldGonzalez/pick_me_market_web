import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-success-modal',
  templateUrl: './order-success-modal.component.html',
  styleUrls: ['./order-success-modal.component.css']
})
export class OrderSuccessModalComponent {
  @Input() isVisible: boolean = false;
  @Input() orderNumber: string = '';
  @Output() onClose = new EventEmitter<void>();

  closeModal() {
    this.onClose.emit();
  }
}
