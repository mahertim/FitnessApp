import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./list-item.component.scss'],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  @Input()
  item: any;

  @Output()
  remove = new EventEmitter<any>();

  toggled = false;

  constructor() {}

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  getRoute(item: any) {
    return [`../meals`, item.$key];
  }
}
