import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  // instance variables declarations
  @Input() private _itemName: string;

  constructor() { }

  ngOnInit() {
  }

  // getters and setters start
  public get itemName(): string {
    return this._itemName;
  }
  public set itemName(value: string) {
    this._itemName = value;
  }
  // getters and setters end

}
