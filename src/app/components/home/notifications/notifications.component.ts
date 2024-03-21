import { Component } from '@angular/core';
import { Notifications } from '../../../test/notifications';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notifications = Notifications;
  removeItem(item: string) {
    this.notifications = this.notifications.filter(i => i.id !== item);
  }
}
