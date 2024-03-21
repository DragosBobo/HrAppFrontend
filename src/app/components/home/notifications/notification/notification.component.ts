import { Component, Input } from '@angular/core';
import { NotificationModel } from '../../../../_models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  @Input()
  notification?: NotificationModel;
}
