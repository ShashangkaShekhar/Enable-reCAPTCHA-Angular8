"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, formBuilder, titleService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Home");
        this.title = 'Angular8';
        this.reactiveForm = this.formBuilder.group({
            exampleInputEmail1: new forms_1.FormControl('', forms_1.Validators.required),
            exampleInputPassword1: new forms_1.FormControl('', forms_1.Validators.required),
            recaptchaReactive: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () { };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './app/home/component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            platform_browser_1.Title])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
