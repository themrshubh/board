import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  pipeline = ["Data 1", "Data 2", "Data 3", "Data 4"]
  dataset = ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"]
  dataflow = ["Data 1", "Data 2"]

  constructor() {
  }

  ngOnInit(): void {
  }

}
