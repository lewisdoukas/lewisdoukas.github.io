
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';

export class OpenDialog {
    constructor(private dialog: MatDialog) {}

    openDialog() {
        this.dialog.open(DialogResultComponent)
    }

}