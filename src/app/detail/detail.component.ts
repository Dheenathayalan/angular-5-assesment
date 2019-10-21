import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'detail-component',
    templateUrl: './detail.component.html'
})
export class DetailComponent {
    detail: any;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.detail = JSON.parse(params.data);
        });
    }

}
