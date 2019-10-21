import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'info-dialog.component.html',
})
export class InfoDialog implements OnInit {

    company: any;

    constructor(
        public dialogRef: MatDialogRef<InfoDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.company = this.data.company;
    }

    onNoClick(val): void {
        this.dialogRef.close(val);
    }

}