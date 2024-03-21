import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotificationModel } from '../../../../_models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  @Input()
  notification?: NotificationModel;
  @Output()
  removeNotification  = new EventEmitter<string>();
  onClick() {
    this.removeNotification.emit(this.notification?.id);
  }
}
