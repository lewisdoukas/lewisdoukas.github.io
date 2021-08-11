import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-result',
  templateUrl: './dialog-result.component.html',
  styleUrls: ['./dialog-result.component.css']
})
export class DialogResultComponent implements OnInit {
  result: any

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.result = data
  }


  ngOnInit(): void {
  }

}
