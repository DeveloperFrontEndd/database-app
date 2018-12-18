import { Component, OnInit, Input } from '@angular/core';

import { Recovery } from '../../../shared/recovery-model';

@Component({
  selector: 'app-deleted-item',
  templateUrl: './deleted-item.component.html',
  styleUrls: ['./deleted-item.component.css']
})
export class DeletedItemComponent implements OnInit {
  @Input() recoveryModel: Recovery;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
