import { Component, OnInit, AfterViewInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './app/home/component.html'
})

export class HomeComponent implements OnInit, AfterViewInit {
    public reactiveForm: FormGroup;
    public title: any;
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle("Home");
        this.title = 'Angular8';
        this.reactiveForm = this.formBuilder.group({
            exampleInputEmail1: new FormControl('', Validators.required),
            exampleInputPassword1: new FormControl('', Validators.required),
            recaptchaReactive: new FormControl(null, Validators.required)
        });
    }

    ngAfterViewInit() {}
}
