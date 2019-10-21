import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InfoDialog } from '../info-dialog/info-dialog.component';
import { Router } from '@angular/router';

@Component({
    selector: 'card-component',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {

    @Input()
    data: any;

    company: any;

    constructor(public dialog: MatDialog, private router: Router) {
    }


    ngOnInit() {
        this.company = this.data;
    }

    favorite(company) {
        company.isFavourite = !company.isFavourite;
    }

    info(company) {
        const dialogRef = this.dialog.open(InfoDialog, {
            data: { company: company }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }

    open(company) {
        this.router.navigate(['/detail'], { queryParams: { data: JSON.stringify(company) } });
    }
}
