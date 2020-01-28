import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { User } from '../../../auth/shared/models/user.model';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app-header.component.scss'],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }
}
