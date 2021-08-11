import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EPSGValidators } from './epsg.validators';
import { Transformation } from './transformer.func';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';



@Component({
  selector: 'transformer',
  templateUrl: './transformer.component.html',
  styleUrls: ['./transformer.component.css']
})
export class TransformerComponent implements OnInit {
  form!: FormGroup;
  result: any;
  allEPSG: any = require('epsg-index/all.json');
  fromEPSG: any;
  toEPSG: any;

  myControl = new FormControl();
  options: string[] = EPSGValidators.allEPSGs();
  filteredOptions: Observable<string[]> | undefined;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog) {

    this.form = this.fb.group({
      epsgFROM: ['', 
        Validators.required, 
        EPSGValidators.validEPSG
      ],
      epsgTO: ['', 
        Validators.required, 
        EPSGValidators.validEPSG
      ],
      xValue: ['', Validators.required],
      yValue: ['', Validators.required],
      zValue: ['', ],
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  get epsgFROM() { return this.form.get('epsgFROM'); }
  get epsgTO() { return this.form.get('epsgTO'); }
  get xValue() { return this.form.get('xValue'); }
  get yValue() { return this.form.get('yValue'); }
  get zValue() { return this.form.get('zValue'); }

  onSubmitEPSG(val:any) {
    if (val.id === 'mat-autocomplete-0') this.fromEPSG = this.myControl.value.split(',')[0].split(':')[1];
    else this.toEPSG = this.myControl.value.split(',')[0].split(':')[1];
  }

  openDialog() {
    this.dialog.open(DialogResultComponent, {
      data: { x: this.result.x, y: this.result.y, z: this.result.z }
    })
}

  reproject() {
    // let fromEPSG = this.epsgFROM?.value.split(',')[0].split(':')[1];
    // let toEPSG = this.epsgTO?.value.split(',')[0].split(':')[1];
    let x = this.xValue?.value;
    let y = this.yValue?.value;
    let z = this.zValue?.value;

    this.result = Transformation.transform(this.fromEPSG, this.toEPSG, x, y, z) 
    this.openDialog()
  }

}

