import { Component, Inject } from '@angular/core';
import { HomeService } from '../shared/home.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    companyList = [];

    constructor(private homeService: HomeService) {
    }

    ngOnInit() {
        this.getCompanyList();
    }

    getCompanyList() {
        this.homeService.companyList().subscribe((success) => {
            this.companyList = success;
        }, (err) => {
        });
    }
}
