(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-default\">\r\n    <a href=\"/jobs\"><img src=\"assets/logo.jpg\"></a>\r\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#idnav\">\r\n        <span class=\"navbar-toggler-icon btn-sample\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"idnav\">\r\n\r\n        <ul class=\"navbar-nav ml-auto nav-icon\">\r\n\r\n            <li class=\"nav-item\">\r\n                <a href=\"/jobs\" class=\"nav-link\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>&nbsp;Home</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\" *ngIf= \"signinServ.loggedIn()\">\r\n                <a href=\"#\" class=\"nav-link\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;My profile</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n                <a href=\"#\" class=\"nav-link\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>&nbsp;About us</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\" *ngIf= \"! signinServ.loggedIn()\" >\r\n                <a href=\"/sign-in\" class=\"nav-link\"><i class=\"fa fa-sign-in\"></i>&nbsp;Login</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\" *ngIf= \"signinServ.loggedIn()\">\r\n                <a href=\"\" class=\"nav-link\" (click)=\"signinServ.logout()\"><i class=\"fa fa-sign-out\"></i>&nbsp;Logout</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n                <a href=\"/postJobs\" class=\"pull-right\"><button type=\"button\" class=\"btn navpost-btn\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>&nbsp;Post your job</button> </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n<!-- <section id=\"footer\">\r\n\t\t<div class=\"container-fluid\">\r\n\t\t\t<div class=\"row text-center text-xs-center text-sm-left text-md-left\" style=\"margin-left: 0.8rem\">\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-3 col-md-3\">\r\n\t\t\t\t\t<h5>Search Your Job</h5>\r\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\r\n\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\r\n\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Find Jobs</a></li>\r\n\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Post Jobs</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n\t\t\t\t\t<h5>Stay Connected</h5>\r\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\r\n\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Contact us</a></li>\r\n\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>About us</a></li>\r\n\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\r\n\t\t\t\t\t</ul>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-sm-4 col-md-4 footeradd\">\r\n\t\t\t\t\t<h5>ChakriPao Job search</h5>\r\n\t\t\t\t\t<P>Address:- BN- A240/356, Minto Bypass Road ABC Nagar,</P><p>District- Jarvisgunj</p>\r\n        </div>\r\n        \r\n      </div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\r\n\t\t\t\t\t<ul class=\"list-unstyled list-inline social text-center\">\r\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr>\r\n\t\t\t</div>\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white\">\r\n\t\t\t\t\t<p><u><a href=\"\">ChakriPao JOB search</a></u> is a job search portal, Inc. Jarvis [a wholly owned subsidiary of Aakash Jaj]</p>\r\n\t\t\t\t\t<p class=\"h6\">© 2019 ChakriPao JOB portal. All rights reserved | Design by Aakash Jaj<a class=\"text-green ml-2\" href=\"https://www.linkedin.com/in/akash-kumar-a5232b126/\" target=\"_blank\">ShivaTech</a></p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr>\r\n\t\t\t</div>\t\r\n\t\t</div>\r\n\t</section>\r\n\t ./Footer -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/job-apply/job-apply.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/job-apply/job-apply.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner *ngIf=\"showSpinner\"></ng4-loading-spinner>\r\n\r\n<div class=\"container-fluid col-lg-10\" >\r\n    <div class=\"row\">\r\n        <div class=\"card col-md-10\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"jt-24 jt-black jt-light pb4 display-flex \">{{jobDetails.title}}</h4>\r\n                <h6 class=\"cn pb4 display-flex\" style=\"margin-top: 1px\"><i class=\"fa fa-building-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;{{jobDetails.companyname}}</h6>\r\n                <p class=\"loc\"><i class=\"fa fa-black-tie \" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;{{jobDetails.experience[0]+\" - \"+jobDetails.experience[1]}}&nbsp;Years</p>\r\n                \r\n                <p class=\"loc\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;{{jobDetails.location}}</p>\r\n                <p class=\"pos\" *ngIf=\"jobDetails.noOfDays==1\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posted:&nbsp;{{jobDetails.noOfDays}} day ago</p>\r\n                <p class=\"pos\" *ngIf=\"jobDetails.noOfWeeks==1\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posted:&nbsp;{{jobDetails?.noOfWeeks}} week ago</p>\r\n                <p class=\"pos\" *ngIf=\"jobDetails.noOfDays>1 && jobDetails.noOfDays<7\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posted:&nbsp;{{jobDetails.noOfDays}} days ago</p>\r\n                <p class=\"pos\" *ngIf=\"jobDetails.noOfWeeks>1 && jobDetails.noOfDays<30\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posted:&nbsp;{{jobDetails?.noOfWeeks}} weeks ago</p>\r\n                <p class=\"pos\" *ngIf=\"jobDetails.noOfMonths==1\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posted:&nbsp;{{jobDetails.noOfMonths}} Month ago</p>\r\n                <p class=\"pos\" *ngIf=\"jobDetails.noOfMonths>1\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posted:&nbsp;{{jobDetails.noOfMonths}} Months ago</p>\r\n                <hr>\r\n\r\n                <h6 class=\"jd-t\"><u>Job Description</u></h6>\r\n                <!-- <p ng-bind-html=\"jobDetails.jd\"></p> -->\r\n                <p class=\"des\" id=\"jdesc\"></p>\r\n                <!-- <ckeditor data=\"{{jobDetails.jd}}\" [editor]=\"Editor\" disabled=\"false\"></ckeditor> -->\r\n                <h6 class=\"jd-t\"><u>Experience Required</u>&nbsp;&nbsp;{{jobDetails.experience[0]+\" - \"+jobDetails.experience[1]}}&nbsp;Years</h6><br>\r\n                <h6 class=\"jd-t\"><u>Salary</u>&nbsp;&nbsp;<i class=\"fa fa-rupee\"></i>&nbsp;&nbsp;{{jobDetails.salary}}</h6><br>\r\n                <h6 class=\"jd-t\"><u>Skills</u></h6>\r\n                <ul *ngFor=\"let skill of jobDetails.skills\"><li>{{skill}}</li></ul>\r\n                 <a href=\"{{jobDetails.applylink}}\" class=\"btn pull-right\" role=\"button\">Apply Job</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section id=\"footer\" *ngIf=\"showSpinner\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row text-center text-xs-center text-sm-left text-md-left\" style=\"margin-left: 0.8rem\">\r\n            <div class=\"col-xs-12 col-sm-3 col-md-3\">\r\n                <h5>Search Your Job</h5>\r\n                <ul class=\"list-unstyled quick-links\">\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Find Jobs</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Post Jobs</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n                <h5>Stay Connected</h5>\r\n                <ul class=\"list-unstyled quick-links\">\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Contact us</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>About us</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\r\n                </ul>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-sm-4 col-md-4 footeradd\">\r\n                <h5>ChakriPao Job search</h5>\r\n                <P>Address:- BN- A240/356, Minto Bypass Road ABC Nagar,</P><p>District- Jarvisgunj</p>\r\n    </div>\r\n    \r\n  </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\r\n                <ul class=\"list-unstyled list-inline social text-center\">\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\r\n                </ul>\r\n            </div>\r\n            <hr>\r\n        </div>\t\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white\">\r\n                <p><u><a href=\"\">ChakriPao JOB search</a></u> is a job search portal, Inc. Jarvis [a wholly owned subsidiary of Aakash Jaj]</p>\r\n                <p class=\"h6\">© 2019 ChakriPao JOB portal. All rights reserved | Design by Aakash Jaj<a class=\"text-green ml-2\" href=\"https://www.linkedin.com/in/akash-kumar-a5232b126/\" target=\"_blank\">ShivaTech</a></p>\r\n            </div>\r\n            <hr>\r\n        </div>\t\r\n    </div>\r\n</section>\r\n<!-- ./Footer -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jobpost/jobpost.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jobpost/jobpost.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <!-- <nav class=\"navbar navbar-default\" style=\"border: 1px solid whitesmoke\">\r\n    <div class=\"container-fluid\" >\r\n      <div class=\"navbar-header\" >\r\n        <a href=\"jobs\" class=\"pull-left\"><img src=\"assets/logobyjus.png\"></a> \r\n      </div>\r\n    </div>    \r\n  </nav> -->\r\n\r\n\r\n  <div class=\"container-fluid cont\">\r\n    <div class=\"row\">\r\n      <h2 class=\"page__header\" style=\"margin-left:5%\">Post your job and find talented candidates.</h2>\r\n      <div class=\"col-md-6\" style=\"margin-left:5%\">\r\n        <div class=\"card bg border-secondary lg-2\" style=\"max-width: 70rem; margin-top: 20px;\">\r\n          <div class=\"card-body text-secondary\">\r\n            <form [formGroup]=\"jobdataForm\">\r\n              <div class=\"form-group active-white-4 rowh\">\r\n                <label class=\"labtxt\" for=\"companyname\">Company Name *</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"\" formControlName=\"companyname\">\r\n                <div *ngIf=\"(jobdataForm.controls['companyname'].errors && (jobdataForm.controls['companyname'].dirty || jobdataForm.controls['companyname'].touched))\" class=\"red\">\r\n                  <div *ngIf=\"jobdataForm.controls.companyname.errors.required\">Please Enter Company Name</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group rowh active-white-4\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label class=\"labtxt\" for=\"title\">Title *</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"\" formControlName=\"title\">\r\n                    <div *ngIf=\"(jobdataForm.controls['title'].errors && (jobdataForm.controls['title'].dirty || jobdataForm.controls['title'].touched))\" class=\"red\">\r\n                      <div *ngIf=\"jobdataForm.controls.title.errors.required\">Please Enter title</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col\">\r\n                    <label class=\"labtxt\" for=\"formGroupExampleInput\">Type *</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"\" formControlName=\"type\">\r\n                    <div *ngIf=\"(jobdataForm.controls['type'].errors && (jobdataForm.controls['type'].dirty || jobdataForm.controls['type'].touched))\" class=\"red\">\r\n                      <div *ngIf=\"jobdataForm.controls.type.errors.required\">Type Require</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group rowh active-white-4\">\r\n                <label class=\"labtxt\" for=\"formGroupExampleInput\">Skills *</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" id=\"formGroupExampleInput\" placeholder=\"BCA,B.E,B.Tech\" formControlName=\"skills\">\r\n                <div *ngIf=\"(jobdataForm.controls['skills'].errors && (jobdataForm.controls['skills'].dirty || jobdataForm.controls['skills'].touched))\" class=\"red\">\r\n                  <div *ngIf=\"jobdataForm.controls.skills.errors.required\">Skills Required</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group rowh active-white-4 \">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label class=\"labtxt\" for=\"experience\">Experience *</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"\" formControlName=\"experience\">\r\n                    <div *ngIf=\"(jobdataForm.controls['experience'].errors && (jobdataForm.controls['experience'].dirty || jobdataForm.controls['experience'].touched))\" class=\"red\">\r\n                      <div *ngIf=\"jobdataForm.controls.experience.errors.required\">Experience require</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col\">\r\n                    <label class=\"labtxt\" for=\"salary\">Salary *</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"\" formControlName=\"salary\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group rowh active-white-4\">\r\n                <label class=\"labtxt\" for=\"formGroupExampleInput\">Job link *</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" id=\"formGroupExampleInput\" placeholder=\"Paste Your Job Link Here\" formControlName=\"applylink\">\r\n                <div *ngIf=\"(jobdataForm.controls['applylink'].errors && (jobdataForm.controls['applylink'].dirty || jobdataForm.controls['applylink'].touched))\" class=\"red\">\r\n                  <div *ngIf=\"jobdataForm.controls.applylink.errors.required\">link require</div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group rowh active-white-4\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label class=\"labtxt\" for=\"location\">City/District *</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"\" formControlName=\"location\">\r\n                    <div *ngIf=\"(jobdataForm.controls['location'].errors && (jobdataForm.controls['location'].dirty || jobdataForm.controls['location'].touched))\" class=\"red\">\r\n                      <div *ngIf=\"jobdataForm.controls.location.errors.required\">Job location require</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col\">\r\n                    <label class=\"labtxt\" for=\"source\">Source *</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"\" formControlName=\"source\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group rowh active-white-4\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col\">\r\n                          \r\n                        <label class=\"labtxt\" for=\"formGroupExampleInput\">Start Date *</label>\r\n                        <input type=\"date\" class=\"form-control form-control-sm ta-cl\" placeholder=\"\" formControlName=\"startdate\">\r\n                      </div>\r\n                      <div class=\"col\">\r\n                        <label class=\"labtxt \" for=\"formGroupExampleInput\">End date *</label>\r\n                        <input type=\"date\" class=\"form-control ta-cl form-control-sm\" placeholder=\"\" formControlName=\"enddate\">\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              \r\n              <div class=\"form-group rowh active-white-5\">\r\n                <label class=\"labtxt\" >Job Description *</label>\r\n                <ckeditor [editor]=\"Editor\" (change)=\"onChange($event)\" tagName=\"textarea\"></ckeditor>\r\n              </div>\r\n\r\n              <button class=\"btn-lg btn-block subtn\" id=\"submit\" (click)=\"postJobs()\" [disabled]=\"!jobdataForm.valid\">Post job requirements</button>\r\n              <a href = \"jobs\" class=\"btn-lg btn-block subtn\" id=\"submit\" >View jobs</a>\r\n            \r\n              \r\n          \r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"footercopy\">\r\n          <p>© 2019 BYJU'S JOB portal. All rights reserved | Design by <a href=\"https://www.linkedin.com/in/akash-kumar-a5232b126/\" target=\"_blank\">Aakash Jaj</a></p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n    \r\n    \r\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jobs-view/jobs-view.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jobs-view/jobs-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<nav class=\"navbar navbar-default\" style=\"border: 1px solid whitesmoke\">\r\n    <div class=\"container-fluid\" >\r\n      <div class=\"navbar-header\" >\r\n          <a href=\"jobs\" class=\"pull-left\"><img src=\"assets/logobyjus.png\"></a> \r\n      </div>\r\n    </div>\r\n</nav> -->\r\n<!-- <mat-spinner class=\"spin spinner\" *ngIf=\"!showSpinner\"></mat-spinner> -->\r\n<ng4-loading-spinner *ngIf=\"showSpinner\"> </ng4-loading-spinner>\r\n<div class=\"alert alert-light\" role=\"alert\" *ngIf=\"jobList?.length >0 && !showSpinner\">\r\n    <strong>Congratulation!</strong>&nbsp;{{jobList.length}} Jobs found for You!!\r\n  </div>\r\n\r\n<div class=\"container-fluid col-md-11\" *ngIf=\"jobList?.length >2 && !showSpinner\">\r\n  <div class=\"row\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n          <div class=\"row\" >\r\n              <div class=\"col-md-4 viewcard\" *ngFor=\"let item of jobList\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"company-title\"><h5 class=\"card-title\">{{item.title}}</h5><br></div>\r\n                        <div><h6 class=\"card-subtitle mb-2 text-muted cardicon\"><i class=\"fa fa-building-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;{{item.companyname}}</h6></div>\r\n                        <p class=\"loc-sal\"><i class=\"fa fa-map-marker cardicon\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;{{item.location}}</p>\r\n                        <p class=\"loc-sal\"><i class=\"fa fa-money cardicon\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;<i class=\"fa fa-rupee\"></i>&nbsp;{{item.salary}} </p>\r\n                        <div>\r\n                          <button class=\"btn btn-footer\" type=\"submit\" [disabled]=\"! item.jobValid\" (click)=\"applyJob(item._id)\">Apply</button>\r\n                          <div class=\"create pull-right\" *ngIf=\"item.noOfWeeks==1 && item.jobValid\">Posted:&nbsp;{{item.noOfWeeks}} week ago</div>\r\n                          <div class=\"create pull-right\" *ngIf=\"item.noOfWeeks>1 && item.noOfDays<30 && item.jobValid\">Posted:&nbsp;{{item.noOfWeeks}} weeks ago</div>\r\n                          <div class=\"create pull-right\" *ngIf=\"item.noOfMonths==1 && item.jobValid\">Posted:&nbsp;{{item.noOfMonths}} Month ago</div>\r\n                          <div class=\"create pull-right\" *ngIf=\"item.noOfMonths>1 && item.jobValid\">Posted:&nbsp;{{item.noOfMonths}} Months ago</div>\r\n                          <div class=\"create pull-right\" *ngIf=\"item.noOfDays==1 && item.jobValid\">Posted:&nbsp;{{item.noOfDays}} day ago</div>\r\n                          <div class=\"create pull-right\" *ngIf=\"item.noOfDays>1 && item.noOfDays<7 && item.jobValid\">Posted:&nbsp;{{item.noOfDays}} days ago</div>\r\n                          <div class=\"create pull-right jb-to\" *ngIf=\"item.noOfDays==0 && item.jobValid\">Posted:&nbsp;Today </div>\r\n                          <div class=\"create pull-right jb-end\" *ngIf=\"! item.jobValid\">No longer accepting applications  </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid col-md-9\" *ngIf=\"jobList?.length <=2 && !showSpinner\">\r\n    <div class=\"row\" >\r\n      <div class=\"card col-lg-6\" *ngFor=\"let item of jobList\">\r\n        \r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{item.title}}</h5><br>\r\n              <div><h6 class=\"card-subtitle mb-2 text-muted cardicon\"><i class=\"fa fa-building-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;{{item.companyname}}</h6></div>\r\n              <p class=\"loc-sal\"><i class=\"fa fa-map-marker cardicon\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;{{item.location}}</p>\r\n              <p class=\"loc-sal\"><i class=\"fa fa-money cardicon\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;<i class=\"fa fa-rupee\"></i>&nbsp;{{item.salary}}</p>\r\n              <!-- <p class=\"loc-sal\"><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;{{item.skills}}</p> -->\r\n              <div>\r\n                <button class=\"btn btn-footer\" type=\"submit\" [disabled]=\"! item.jobValid\" (click)=\"applyJob(item._id)\">Apply</button>\r\n                <div class=\"create pull-right\" *ngIf=\"item.noOfWeeks==1 && item.jobValid\">Posted:&nbsp;{{item.noOfWeeks}} week ago</div>\r\n                <div class=\"create pull-right\" *ngIf=\"item.noOfWeeks>1 && item.noOfDays<30 && item.jobValid\">Posted:&nbsp;{{item.noOfWeeks}} weeks ago</div>\r\n                <div class=\"create pull-right\" *ngIf=\"item.noOfMonths==1 && item.jobValid\">Posted:&nbsp;{{item.noOfMonths}} Month ago</div>\r\n                <div class=\"create pull-right\" *ngIf=\"item.noOfMonths>1 && item.jobValid\">Posted:&nbsp;{{item.noOfMonths}} Months ago</div>\r\n                <div class=\"create pull-right\" *ngIf=\"item.noOfDays==1 && item.jobValid\">Posted:&nbsp;{{item.noOfDays}} day ago</div>\r\n                <div class=\"create pull-right\" *ngIf=\"item.noOfDays>1 && item.noOfDays<7 && item.jobValid\">Posted:&nbsp;{{item.noOfDays}} days ago</div>\r\n                <div class=\"create pull-right jb-to\" *ngIf=\"item.noOfDays==0 && item.jobValid\">Posted:&nbsp;Today </div>\r\n                <div class=\"create pull-right jb-end\" *ngIf=\"! item.jobValid\">No longer accepting applications  </div>\r\n              </div>\r\n            </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  \r\n  <section id=\"footer\" *ngIf=\"!showSpinner\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row text-center text-xs-center text-sm-left text-md-left\" style=\"margin-left: 0.8rem\">\r\n            <div class=\"col-xs-12 col-sm-3 col-md-3\">\r\n                <h5>Search Your Job</h5>\r\n                <ul class=\"list-unstyled quick-links\">\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Find Jobs</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Post Jobs</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n                <h5>Stay Connected</h5>\r\n                <ul class=\"list-unstyled quick-links\">\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Contact us</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>About us</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\r\n                </ul>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-sm-4 col-md-4 footeradd\">\r\n                <h5>ChakriPao Job search</h5>\r\n                <P>Address:- BN- A240/356, Minto Bypass Road ABC Nagar,</P><p>District- Jarvisgunj</p>\r\n    </div>\r\n    \r\n  </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\r\n                <ul class=\"list-unstyled list-inline social text-center\">\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\r\n                </ul>\r\n            </div>\r\n            <hr>\r\n        </div>\t\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white\">\r\n                <p><u><a href=\"\">ChakriPao JOB search</a></u> is a job search portal, Inc. Jarvis [a wholly owned subsidiary of Aakash Jaj]</p>\r\n                <p class=\"h6\">© 2019 ChakriPao JOB portal. All rights reserved | Design by Aakash Jaj<a class=\"text-green ml-2\" href=\"https://www.linkedin.com/in/akash-kumar-a5232b126/\" target=\"_blank\">ShivaTech</a></p>\r\n            </div>\r\n            <hr>\r\n        </div>\t\r\n    </div>\r\n</section>\r\n<!-- ./Footer -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jobsearch/jobsearch.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jobsearch/jobsearch.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid col-md-10\">\r\n    <div class=\"row\">\r\n        <div class=\"card\" style=\"margin-top: 15px;width: 100% \">\r\n            <div class=\"card-body\" style=\"margin-left:0%\">\r\n                <h4 class=\"t-24 t-black t-light display-flex justify-center pb4\">\r\n                    Search your dream Jobs...\r\n                </h4>\r\n                \r\n                <form [formGroup]=\"jobsearchForm\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col form-group\">\r\n                            <div class=\"active-purple-3 active-purple-4 mb-4\">\r\n                                <i class=\"fa fa-search fa-lg icon\" aria-hidden=\"true\"></i>\r\n                                <input class=\"form-control\" type=\"text\" placeholder=\"Search jobs by Skills\" formControlName=\"skills\" aria-label=\"Search\" style=\"padding-left: 40px;width: 300px;\">\r\n                            </div>                            \r\n                        </div>\r\n\r\n                        <div class=\"col form-group\">\r\n                            <div class=\"active-purple-3 active-purple-4 mb-4\">\r\n                                <i class=\"fa fa-map-marker fa-lg icon\" aria-hidden=\"true\"></i>\r\n                                <input class=\"form-control\" type=\"text\" placeholder=\"Search location\" formControlName=\"location\" aria-label=\"Search\" style=\"padding-left: 40px; width: 300px;\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col form-group\">\r\n                            <div class=\"active-purple-3 active-purple-4 mb-4\">\r\n                                <i class=\"fa fa-black-tie fa-lg icon\" aria-hidden=\"true\"></i>\r\n                                <input class=\"form-control\" type=\"number\" placeholder=\"Search Experience in Years\" formControlName=\"experience\" aria-label=\"Search\" style=\"padding-left: 40px; width: 300px;\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col\">\r\n                            <div class=\"active-purple-3 active-purple-4 mb-4\">\r\n                                <button type=\"button\" class=\"btn  btn btn-footer pull-right\" id=\"submit\" (click)=\"getJob()\">Search</button>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        \r\n        <!-- <mat-spinner class=\"spin spinner\" *ngIf=\"showSpinner\"></mat-spinner> -->\r\n        <!-- <ng4-loading-spinner *ngIf=\"showSpinner\"></ng4-loading-spinner> -->\r\n        <ng4-loading-spinner *ngIf=\"showSpinner\"> </ng4-loading-spinner>\r\n        \r\n        <div class=\"card\" style=\"margin-top: 1.5rem\" *ngIf=\"!showSpinner\">\r\n                <div class=\"card-body\" >\r\n                    <div class=\"row\">\r\n                        \r\n                            <div class=\"col-sm-12 col-lg-6 viewcard\" *ngFor=\"let item of filterjob | paginate: { itemsPerPage: count, currentPage: p }\">\r\n                                \r\n                                <div class=\"card h-100\" >\r\n                                    <div class=\"card-body\">\r\n                                        <h5 class=\"card-title\"><h5 class=\"card-title\">{{item.title}}</h5></h5><br>\r\n                                        <div><h6 class=\"card-subtitle mb-2 text-muted cardicon\"><i class=\"fa fa-building-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;{{item.companyname}}</h6></div>\r\n                                        <p class=\"loc-sal\"><i class=\"fa fa-map-marker cardicon\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;{{item.location}}</p>\r\n                                        <p class=\"loc-sal\"><i class=\"fa fa-money cardicon\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;<i class=\"fa fa-rupee\"></i>&nbsp;{{item.salary}} </p>\r\n                                        <div>\r\n                                            <button class=\"btn btn-footer\" [disabled]=\"! item.jobValid\" type=\"submit\" id=\"submit\" (click)=\"applyJob(item._id)\">Apply</button>\r\n                                            \r\n                                            <div class=\"create pull-right\" *ngIf=\"item.noOfWeeks==1 && item.jobValid\">Posted:&nbsp;{{item.noOfWeeks}} week ago</div>\r\n                                            <div class=\"create pull-right\" *ngIf=\"item.noOfWeeks>1 && item.noOfDays<30 && item.jobValid\">Posted:&nbsp;{{item.noOfWeeks}} weeks ago</div>\r\n                                            <div class=\"create pull-right\" *ngIf=\"item.noOfMonths==1 && item.jobValid\">Posted:&nbsp;{{item.noOfMonths}} Month ago</div>\r\n                                            <div class=\"create pull-right\" *ngIf=\"item.noOfMonths>1 && item.jobValid\">Posted:&nbsp;{{item.noOfMonths}} Months ago</div>\r\n                                            <div class=\"create pull-right\" *ngIf=\"item.noOfDays==1 && item.jobValid\">Posted:&nbsp;{{item.noOfDays}} day ago</div>\r\n                                            <div class=\"create pull-right\" *ngIf=\"item.noOfDays>1 && item.noOfDays<7 && item.jobValid\">Posted:&nbsp;{{item.noOfDays}} days ago</div>\r\n                                            <div class=\"create pull-right jb-to\" *ngIf=\"item.noOfDays==0 && item.jobValid\">Posted:&nbsp;Today </div>\r\n                                            <div class=\"create pull-right jb-end\" *ngIf=\"! item.jobValid\">No longer accepting applications </div>\r\n                                        </div>\r\n                                        \r\n                                    </div>\r\n                                        \r\n                                </div>\r\n                            </div>\r\n                            \r\n                    </div>\r\n                    <!--Including the pagination control.-->\r\n                    <footer class=\"foot\">\r\n                        <div class=\"text-right\">\r\n                            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n                        </div>\r\n                    </footer>\r\n                    \r\n                </div>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n\r\n<section id=\"footer\" *ngIf=\"!showSpinner\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row text-center text-xs-center text-sm-left text-md-left\" style=\"margin-left: 0.8rem\">\r\n            <div class=\"col-xs-12 col-sm-3 col-md-3\">\r\n                <h5>Search Your Job</h5>\r\n                <ul class=\"list-unstyled quick-links\">\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Find Jobs</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Post Jobs</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n                <h5>Stay Connected</h5>\r\n                <ul class=\"list-unstyled quick-links\">\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Contact us</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>About us</a></li>\r\n                    <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\r\n                </ul>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-sm-4 col-md-4 footeradd\">\r\n                <h5>ChakriPao Job search</h5>\r\n                <P>Address:- BN- A240/356, Minto Bypass Road ABC Nagar,</P><p>District- Jarvisgunj</p>\r\n    </div>\r\n    \r\n  </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\r\n                <ul class=\"list-unstyled list-inline social text-center\">\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n                    <li class=\"list-inline-item\"><a href=\"\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\r\n                </ul>\r\n            </div>\r\n            <hr>\r\n        </div>\t\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white\">\r\n                <p><u><a href=\"\">ChakriPao JOB search</a></u> is a job search portal, Inc. Jarvis [a wholly owned subsidiary of Aakash Jaj]</p>\r\n                <p class=\"h6\">© 2019 ChakriPao JOB portal. All rights reserved | Design by Aakash Jaj<a class=\"text-green ml-2\" href=\"https://www.linkedin.com/in/akash-kumar-a5232b126/\" target=\"_blank\">ShivaTech</a></p>\r\n            </div>\r\n            <hr>\r\n        </div>\t\r\n    </div>\r\n</section>\r\n<!-- ./Footer -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/respost/respost.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/respost/respost.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container col-sm-10\" style=\"margin-top: 20px;\" *ngIf=\"searchjob==true\">\r\n    <div class=\"alert alert-success alt-ht\" role=\"alert\" style=\"height: 170px;\">\r\n        <h3 class=\"alert-heading\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i>&nbsp;Successfully submitted</h3>\r\n        <p>Aww yeah, you have successfully submitted the job details & posted your job.</p>\r\n        <hr>\r\n        <button type=\"button\" class=\"btn pull-right\" type=\"submit\" (click)=\"view()\">View jobs</button>\r\n    </div>\r\n      \r\n</div>\r\n\r\n<div class=\"row\" style=\"background-color: blanchedalmond\" *ngIf=\"searchjob==false\">\r\n  <img src=\"./assets/not-found.png\" class=\"noData img-fluid\" alt=\"Responsive image\">\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signin-auth/signin-auth.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin-auth/signin-auth.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n          <div class=\"card card-signin my-5\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title text-center\">Login to ChakriPao</h5>\r\n              <form [formGroup]=\"signinForm\" class=\"form-signin\">\r\n\r\n                <div class=\"col form-group\">\r\n                    <div class=\"active-purple-3 active-purple-4 mb-4\">\r\n                        <i class=\"fa fa-user fa-lg icon\" aria-hidden=\"true\"></i>\r\n                        <input class=\"form-control\" type=\"email\" placeholder=\"Email address\" formControlName=\"email\" aria-label=\"Search\" style=\"padding-left: 40px;\">\r\n                    </div>                            \r\n                </div>\r\n\r\n                <div class=\"col form-group\">\r\n                  <div class=\"active-purple-3 active-purple-4 mb-4\">\r\n                      <i class=\"fa fa-lock fa-lg icon\" aria-hidden=\"true\"></i>\r\n                      <input class=\"form-control\" type=\"password\" placeholder=\"Password\" formControlName=\"password\" aria-label=\"Search\" style=\"padding-left: 40px;\">\r\n                  </div>                            \r\n                </div>\r\n  \r\n                <div class=\"custom-control custom-checkbox mb-3 rem-pwd\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                  <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\r\n                </div>\r\n\r\n                <button class=\"btn btn-lg btn-loc btn-block text-uppercase\" type=\"submit\" (click)=\"socialLogIn('google')\">Sign in</button>\r\n                <hr class=\"my-4\">\r\n                <button class=\"btn btn-lg btn-google btn-block text-uppercase\" role=\"button\" type=\"submit\" (click)=\"socialLogIn('google')\"> <i class=\"fa fa-google mr-2\"></i> Sign in with Google</button>\r\n                <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fa fa-facebook-f mr-2\"></i> Sign in with Facebook</button>\r\n                <div class=\"rdrct-reg\">\r\n                  <p class=\"pull-left\"><a href=\"\">Forgot password</a></p>\r\n                  <!-- <p class=\"pull-right\">New to ChakriPao?&nbsp; <a href=\"/sign-up\" (click)=\"createAccount()\">Create Account</a></p> -->\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <section id=\"footer\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row text-center text-xs-center text-sm-left text-md-left\" style=\"margin-left: 0.8rem\">\r\n              <div class=\"col-xs-12 col-sm-3 col-md-3\">\r\n                  <h5>Search Your Job</h5>\r\n                  <ul class=\"list-unstyled quick-links\">\r\n                      <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\r\n                      <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Find Jobs</a></li>\r\n                      <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Post Jobs</a></li>\r\n                  </ul>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n                  <h5>Stay Connected</h5>\r\n                  <ul class=\"list-unstyled quick-links\">\r\n                      <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>Contact us</a></li>\r\n                      <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>About us</a></li>\r\n                      <li><a href=\"\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\r\n                  </ul>\r\n      </div>\r\n  \r\n      <div class=\"col-xs-12 col-sm-4 col-md-4 footeradd\">\r\n                  <h5>ChakriPao Job search</h5>\r\n                  <P>Address:- BN- A240/356, Minto Bypass Road ABC Nagar,</P><p>District- Jarvisgunj</p>\r\n      </div>\r\n      \r\n    </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\r\n                  <ul class=\"list-unstyled list-inline social text-center\">\r\n                      <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                      <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                      <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                      <li class=\"list-inline-item\"><a href=\"\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n                      <li class=\"list-inline-item\"><a href=\"\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\r\n                  </ul>\r\n              </div>\r\n              <hr>\r\n          </div>\t\r\n          <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white\">\r\n                  <p><u><a href=\"\">ChakriPao JOB search</a></u> is a job search portal, Inc. Jarvis [a wholly owned subsidiary of Aakash Jaj]</p>\r\n                  <p class=\"h6\">© 2019 ChakriPao JOB portal. All rights reserved | Design by Aakash Jaj<a class=\"text-green ml-2\" href=\"https://www.linkedin.com/in/akash-kumar-a5232b126/\" target=\"_blank\">ShivaTech</a></p>\r\n              </div>\r\n              <hr>\r\n          </div>\t\r\n      </div>\r\n  </section>\r\n  </body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup-auth/signup-auth.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup-auth/signup-auth.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>signup-auth works!</p>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _jobpost_jobpost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobpost/jobpost.component */ "./src/app/jobpost/jobpost.component.ts");
/* harmony import */ var _jobsearch_jobsearch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobsearch/jobsearch.component */ "./src/app/jobsearch/jobsearch.component.ts");
/* harmony import */ var _jobs_view_jobs_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jobs-view/jobs-view.component */ "./src/app/jobs-view/jobs-view.component.ts");
/* harmony import */ var _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-apply/job-apply.component */ "./src/app/job-apply/job-apply.component.ts");
/* harmony import */ var _respost_respost_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./respost/respost.component */ "./src/app/respost/respost.component.ts");
/* harmony import */ var _signin_auth_signin_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin-auth/signin-auth.component */ "./src/app/signin-auth/signin-auth.component.ts");
/* harmony import */ var _signup_auth_signup_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup-auth/signup-auth.component */ "./src/app/signup-auth/signup-auth.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");











const routes = [
    { path: 'postJobs', component: _jobpost_jobpost_component__WEBPACK_IMPORTED_MODULE_3__["JobpostComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'jobs', component: _jobsearch_jobsearch_component__WEBPACK_IMPORTED_MODULE_4__["JobsearchComponent"] },
    { path: 'jobs-view', component: _jobs_view_jobs_view_component__WEBPACK_IMPORTED_MODULE_5__["JobsViewComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'apply', component: _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_6__["JobApplyComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'sign-in', component: _signin_auth_signin_auth_component__WEBPACK_IMPORTED_MODULE_8__["SigninAuthComponent"] },
    { path: 'sign-up', component: _signup_auth_signup_auth_component__WEBPACK_IMPORTED_MODULE_9__["SignupAuthComponent"] },
    { path: 'applied', component: _respost_respost_component__WEBPACK_IMPORTED_MODULE_7__["RespostComponent"] },
    { path: '', redirectTo: '/jobs', pathMatch: 'full' }
];
// , canActivate: [AuthGuard]
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\r\n    background-color: rgba(129,53,136,.98);\r\n    /* border-color:black; */\r\n    border: 1px solid whitesmoke;\r\n  \r\n}\r\n\r\n.navbar-toggler { \r\n    background-color: rgba(129,53,136,.98);\r\n    border-color: rgba(129,53,136,.98);\r\n}\r\n\r\n.navbar-toggler-icon { \r\n    background-image: url( \r\n\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"); \r\n}\r\n\r\n.nav-link{\r\n    color: #fff\r\n}\r\n\r\n.navpost-btn{\r\n    font-weight: 600;\r\n    background-color: rgba(129,53,136,.98);\r\n    color:#fff;\r\n    text-align: center;\r\n    font-family: inherit;\r\n    border-color: #fff;\r\n    margin-left: 1ex;\r\n    margin-right: 1ex;\r\n    \r\n}\r\n\r\n.nav-icon {\r\n    font-size: 0.9rem;\r\n    line-height: 1.42857;\r\n    font-weight: 500\r\n}\r\n\r\nsection {\r\n    padding: 60px 0;\r\n    margin-top: 0.5rem\r\n}\r\n\r\nsection .section-title {\r\n    text-align: center;\r\n    color: rgba(129,53,136,.98);\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#footer {\r\n    background: rgba(129,53,136,.98) !important;\r\n}\r\n\r\n#footer h5{\r\n\tpadding-left: 10px;\r\n    border-left: 3px solid #eeeeee;\r\n    padding-bottom: 6px;\r\n    margin-bottom: 20px;\r\n    color:#ffffff;\r\n}\r\n\r\n#footer a {\r\n    color: #ffffff;\r\n    text-decoration: none !important;\r\n    background-color: transparent;\r\n    -webkit-text-decoration-skip: objects;\r\n}\r\n\r\n#footer ul.social li{\r\n\tpadding: 3px 0;\r\n}\r\n\r\n#footer ul.social li a i {\r\n    margin-right: 5px;\r\n\tfont-size:25px;\r\n\ttransition: .5s all ease;\r\n}\r\n\r\n#footer ul.social li:hover a i {\r\n\tfont-size:30px;\r\n\tmargin-top:-10px;\r\n}\r\n\r\n#footer ul.social li a,\r\n#footer ul.quick-links li a{\r\n\tcolor:#ffffff;\r\n}\r\n\r\n#footer ul.social li a:hover{\r\n\tcolor:#eeeeee;\r\n}\r\n\r\n#footer ul.quick-links li{\r\n\tpadding: 3px 0;\r\n\ttransition: .5s all ease;\r\n}\r\n\r\n#footer ul.quick-links li:hover{\r\n\tpadding: 3px 0;\r\n\tmargin-left:5px;\r\n\tfont-weight:700;\r\n}\r\n\r\n#footer ul.quick-links li a i{\r\n\tmargin-right: 5px;\r\n}\r\n\r\n#footer ul.quick-links li:hover a i {\r\n    font-weight: 700;\r\n}\r\n\r\n@media (max-width:767px){\r\n\t#footer h5 {\r\n    padding-left: 0;\r\n    border-left: transparent;\r\n    padding-bottom: 0px;\r\n    margin-bottom: 10px;\r\n}}\r\n\r\n.footeradd{\r\n    color: #ffffff\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsd0JBQXdCO0lBQ3hCLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7bVBBQytPO0FBQ25QOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQjtBQUNKOztBQUlBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBQ0E7Q0FDQyxrQkFBa0I7SUFDZiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IscUNBQXFDO0FBQ3pDOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0lBQ0ksaUJBQWlCO0NBQ3BCLGNBQWM7Q0FHZCx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUNBOztDQUVDLGFBQWE7QUFDZDs7QUFDQTtDQUNDLGFBQWE7QUFDZDs7QUFDQTtDQUNDLGNBQWM7Q0FHZCx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7Q0FDQztJQUNHLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QixDQUFDOztBQUVEO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgLyogYm9yZGVyLWNvbG9yOmJsYWNrOyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcclxuICBcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlci1pY29uIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoIFxyXG5cImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LCAwLjgpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA4aDI0TTQgMTZoMjRNNCAyNGgyNCcvJTNFJTNDL3N2ZyUzRVwiKTsgXHJcbn0gXHJcblxyXG4ubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4ubmF2cG9zdC1idG57XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMWV4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZXg7XHJcbiAgICBcclxufVxyXG5cclxuLm5hdi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XHJcbiAgICBmb250LXdlaWdodDogNTAwXHJcbn1cclxuXHJcblxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW1cclxufVxyXG5cclxuc2VjdGlvbiAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI5LDUzLDEzNiwuOTgpICFpbXBvcnRhbnQ7XHJcbn1cclxuI2Zvb3RlciBoNXtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuI2Zvb3RlciBhIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGl7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYSBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdGZvbnQtc2l6ZToyNXB4O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxufVxyXG4jZm9vdGVyIHVsLnNvY2lhbCBsaTpob3ZlciBhIGkge1xyXG5cdGZvbnQtc2l6ZTozMHB4O1xyXG5cdG1hcmdpbi10b3A6LTEwcHg7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYSxcclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaSBhe1xyXG5cdGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYTpob3ZlcntcclxuXHRjb2xvcjojZWVlZWVlO1xyXG59XHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGl7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG59XHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGk6aG92ZXJ7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcblx0bWFyZ2luLWxlZnQ6NXB4O1xyXG5cdGZvbnQtd2VpZ2h0OjcwMDtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpIGEgaXtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVyIGEgaSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcblx0I2Zvb3RlciBoNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufX1cclxuXHJcbi5mb290ZXJhZGR7XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _signin_auth_signin_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin-auth/signin-auth.service */ "./src/app/signin-auth/signin-auth.service.ts");



let AppComponent = class AppComponent {
    constructor(signinServ) {
        this.signinServ = signinServ;
        this.title = 'Chakripao';
    }
};
AppComponent.ctorParameters = () => [
    { type: _signin_auth_signin_auth_service__WEBPACK_IMPORTED_MODULE_2__["SigninAuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: socialConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialConfigs", function() { return socialConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _jobpost_jobpost_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jobpost/jobpost.component */ "./src/app/jobpost/jobpost.component.ts");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./information.service */ "./src/app/information.service.ts");
/* harmony import */ var _jobsearch_jobsearch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jobsearch/jobsearch.component */ "./src/app/jobsearch/jobsearch.component.ts");
/* harmony import */ var _jobs_view_jobs_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jobs-view/jobs-view.component */ "./src/app/jobs-view/jobs-view.component.ts");
/* harmony import */ var _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./job-apply/job-apply.component */ "./src/app/job-apply/job-apply.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _respost_respost_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./respost/respost.component */ "./src/app/respost/respost.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _signin_auth_signin_auth_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./signin-auth/signin-auth.component */ "./src/app/signin-auth/signin-auth.component.ts");
/* harmony import */ var _signup_auth_signup_auth_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./signup-auth/signup-auth.component */ "./src/app/signup-auth/signup-auth.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _jobsearch_jobsearch_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./jobsearch/jobsearch.service */ "./src/app/jobsearch/jobsearch.service.ts");





























function socialConfigs() {
    const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["AuthServiceConfig"]([
        {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["FacebookLoginProvider"]('app -id')
        },
        {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["GoogleLoginProvider"]('95434812881-nl4280nc6f0kbukd8upsv78qrikf1h9a.apps.googleusercontent.com')
        }
    ]);
    return config;
}
const material = [_angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"]];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _jobpost_jobpost_component__WEBPACK_IMPORTED_MODULE_9__["JobpostComponent"],
            _jobsearch_jobsearch_component__WEBPACK_IMPORTED_MODULE_11__["JobsearchComponent"],
            _jobs_view_jobs_view_component__WEBPACK_IMPORTED_MODULE_12__["JobsViewComponent"],
            _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_13__["JobApplyComponent"],
            _respost_respost_component__WEBPACK_IMPORTED_MODULE_18__["RespostComponent"],
            _signin_auth_signin_auth_component__WEBPACK_IMPORTED_MODULE_20__["SigninAuthComponent"],
            _signup_auth_signup_auth_component__WEBPACK_IMPORTED_MODULE_21__["SignupAuthComponent"]
        ],
        imports: [
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            material,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]
        ],
        exports: [_angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"]],
        providers: [
            _information_service__WEBPACK_IMPORTED_MODULE_10__["InformationService"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
            _auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
            _jobsearch_jobsearch_service__WEBPACK_IMPORTED_MODULE_25__["JobsearchService"],
            {
                provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_22__["AuthServiceConfig"],
                useFactory: socialConfigs
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_24__["TokenInterceptorService"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_auth_signin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin-auth/signin-auth.service */ "./src/app/signin-auth/signin-auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(signinServ, router) {
        this.signinServ = signinServ;
        this.router = router;
    }
    canActivate() {
        if (this.signinServ.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/sign-in']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _signin_auth_signin_auth_service__WEBPACK_IMPORTED_MODULE_3__["SigninAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/information.service.ts":
/*!****************************************!*\
  !*** ./src/app/information.service.ts ***!
  \****************************************/
/*! exports provided: InformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationService", function() { return InformationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InformationService = class InformationService {
    constructor() {
        this.currentDate = new Date();
        this.days = 1000 * 60 * 60 * 24;
        this.postJobUrl = 'https://naukrichakri.herokuapp.com/byjusjobs/job/listed';
        this.jobSearch = 'https://naukrichakri.herokuapp.com/byjusjobs/jobs';
        this.jobbylocationurl = 'https://naukrichakri.herokuapp.com/byjusjobs/jobsin/';
        this.jobbyskillsurl = 'https://naukrichakri.herokuapp.com/byjusjobs/jobs-for/';
        this.jobbyExpurl = 'https://naukrichakri.herokuapp.com/byjusjobs/jobs-experience/';
        this.jobbyidurl = 'https://naukrichakri.herokuapp.com/byjusjobs/jobs/';
        this.jobbylocskill = 'https://naukrichakri.herokuapp.com/byjusjobs/jobs/';
        this.jobbyexpskill = 'https://naukrichakri.herokuapp.com/byjusjobs/skill/exp/';
        this.jobsbyexploc = 'https://naukrichakri.herokuapp.com/byjusjobs/exp/loc/';
        this.jobsbyall = 'https://naukrichakri.herokuapp.com/byjusjobs/jobs/';
        this.googleLogin = 'https://naukrichakri.herokuapp.com/auth/google';
    }
    jobs(filterjob) {
        for (let i of filterjob) {
            let secondDate = new Date(this.currentDate);
            let firstDate = new Date(i.created);
            let diffInDays = Math.round(Math.abs((secondDate.getTime() - firstDate.getTime()) / (this.days)));
            let noOfWeeks = Math.floor(diffInDays / 7);
            let noOfMonths = Math.floor(diffInDays / 30);
            i.noOfDays = diffInDays;
            i.noOfWeeks = noOfWeeks;
            i.noOfMonths = noOfMonths;
            i.jobValid = (new Date(i.enddate) > new Date(this.currentDate));
        }
    }
};
InformationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InformationService);



/***/ }),

/***/ "./src/app/job-apply/job-apply.component.css":
/*!***************************************************!*\
  !*** ./src/app/job-apply/job-apply.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\r\n    background-color: rgba(129,53,136,.98);\r\n    border-color:black;\r\n  \r\n}\r\n.jt-24 {\r\n    font-size: 1.5rem;\r\n    line-height: 1.33333;\r\n}\r\n.jt-light {\r\n    font-weight: 400;\r\n}\r\n.jt-black {\r\n    color: rgba(0,0,0,.9);\r\n}\r\n.display-flex {\r\n    display: flex!important;\r\n}\r\n.pb4 {\r\n    padding-bottom: 5px!important;\r\n}\r\n.cn{\r\n    \r\n    font-size: 1.0rem;\r\n    line-height: 1.0;\r\n    color: rgba(0,0,0,.8);\r\n    font-weight: 500;\r\n    \r\n}\r\n.loc{\r\n    font-size: 0.9rem;\r\n    line-height: 1.0;\r\n    color: rgba(0,0,0,.8);\r\n    font-weight: 500;\r\n    \r\n}\r\n.pos{\r\n    font-size: 0.7rem;\r\n    line-height: 1.0;\r\n    color: rgba(0,0,0,.8);\r\n    font-weight: 500;\r\n    \r\n}\r\n.jd-t{\r\n    font-size: 1.0rem;\r\n    line-height: 1.0;\r\n    color: rgba(0,0,0,.8);\r\n    font-weight: 500;\r\n    \r\n    \r\n}\r\n.des{\r\n    color: rgba(0,0,0,.75);\r\n    font-size: 0.9rem;\r\n    text-align: justify;\r\n}\r\n.icon{\r\n    position :absolute;\r\n    left:15px;\r\n    top: 3px;\r\n    padding: 9px 8px;\r\n    color: #969592 \r\n    \r\n    \r\n}\r\n.underline-large{\r\n    color:#969592;\r\n    display:inline-block;\r\n    position:relative;\r\n    \r\n  }\r\n.underline-large::after{\r\n    content:'';\r\n    height:0.6px;\r\n    width:100%;\r\n    background:rgba(129,53,136,.98);\r\n    position:absolute;\r\n    left:calc(10% - 20%);\r\n    bottom:-5px;\r\n    margin-top: 0px\r\n  /*   another way you can achieve this\r\n    Check this link: \r\n    https://goo.gl/GgRdjz\r\n    \r\n    */\r\n    \r\n  }\r\nhr {\r\n    widows: 130px;\r\n    margin-top: 0rem;\r\n    margin-left: -2.2rem;\r\n    margin-right: -2.2rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n.btn{\r\n    background-color: rgba(129,53,136,.98);\r\n    color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iLWFwcGx5L2pvYi1hcHBseS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjs7O0FBR3BCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCOzs7QUFHSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7O0VBRW5CO0FBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsY0FBYztFQUNoQjs7OztLQUlHOztFQUVIO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3Q0FBd0M7RUFDMUM7QUFDQTtJQUNFLHNDQUFzQztJQUN0QyxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvam9iLWFwcGx5L2pvYi1hcHBseS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gIFxyXG59XHJcbi5qdC0yNCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzO1xyXG59XHJcbi5qdC1saWdodCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5qdC1ibGFjayB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuOSk7XHJcbn1cclxuLmRpc3BsYXktZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxufVxyXG4ucGI0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY257XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBcclxufVxyXG4ubG9je1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4wO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIFxyXG59XHJcblxyXG4ucG9ze1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4wO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIFxyXG59XHJcblxyXG4uamQtdHtcclxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5kZXN7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNzUpO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uaWNvbntcclxuICAgIHBvc2l0aW9uIDphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MTVweDtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgcGFkZGluZzogOXB4IDhweDtcclxuICAgIGNvbG9yOiAjOTY5NTkyIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG4udW5kZXJsaW5lLWxhcmdle1xyXG4gICAgY29sb3I6Izk2OTU5MjtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZS1sYXJnZTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgaGVpZ2h0OjAuNnB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6Y2FsYygxMCUgLSAyMCUpO1xyXG4gICAgYm90dG9tOi01cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHhcclxuICAvKiAgIGFub3RoZXIgd2F5IHlvdSBjYW4gYWNoaWV2ZSB0aGlzXHJcbiAgICBDaGVjayB0aGlzIGxpbms6IFxyXG4gICAgaHR0cHM6Ly9nb28uZ2wvR2dSZGp6XHJcbiAgICBcclxuICAgICovXHJcbiAgICBcclxuICB9XHJcbiAgaHIge1xyXG4gICAgd2lkb3dzOiAxMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDByZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuMnJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLTIuMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/job-apply/job-apply.component.ts":
/*!**************************************************!*\
  !*** ./src/app/job-apply/job-apply.component.ts ***!
  \**************************************************/
/*! exports provided: JobApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobApplyComponent", function() { return JobApplyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../information.service */ "./src/app/information.service.ts");
/* harmony import */ var _job_apply_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-apply.service */ "./src/app/job-apply/job-apply.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);





let JobApplyComponent = class JobApplyComponent {
    //private spinnerService: Ng4LoadingSpinnerService if will use spinner 
    constructor(spinnerService, infoservice, applyService) {
        this.spinnerService = spinnerService;
        this.infoservice = infoservice;
        this.applyService = applyService;
        this.currentDate = new Date();
        this.showSpinner = true;
    }
    jobs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spinnerService.show();
            setTimeout(() => this.showSpinner = false, 3000);
            if (this.infoservice.jobid != undefined) {
                this.jobDetails = yield this.applyService.jobApplyService().toPromise();
            }
            else {
                this.jobDetails = JSON.parse(sessionStorage.getItem('jobDetails'));
            }
            document.getElementById("jdesc").innerHTML = this.jobDetails.jd;
            let secondDate = new Date(this.currentDate);
            let firstDate = new Date(this.jobDetails.created);
            let diffInDays = Math.round(Math.abs((secondDate.getTime() - firstDate.getTime()) / (this.infoservice.days)));
            let noOfWeeks = Math.floor(diffInDays / 7);
            let noOfMonths = Math.floor(diffInDays / 30);
            this.jobDetails.noOfDays = diffInDays;
            this.jobDetails.noOfWeeks = noOfWeeks;
            this.jobDetails.noOfMonths = noOfMonths;
            sessionStorage.setItem('jobDetails', JSON.stringify(this.jobDetails));
        });
    }
    ngOnInit() {
        this.jobs();
    }
};
JobApplyComponent.ctorParameters = () => [
    { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"] },
    { type: _information_service__WEBPACK_IMPORTED_MODULE_2__["InformationService"] },
    { type: _job_apply_service__WEBPACK_IMPORTED_MODULE_3__["JobApplyService"] }
];
JobApplyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-apply',
        template: __webpack_require__(/*! raw-loader!./job-apply.component.html */ "./node_modules/raw-loader/index.js!./src/app/job-apply/job-apply.component.html"),
        styles: [__webpack_require__(/*! ./job-apply.component.css */ "./src/app/job-apply/job-apply.component.css")]
    })
], JobApplyComponent);



/***/ }),

/***/ "./src/app/job-apply/job-apply.service.ts":
/*!************************************************!*\
  !*** ./src/app/job-apply/job-apply.service.ts ***!
  \************************************************/
/*! exports provided: JobApplyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobApplyService", function() { return JobApplyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../information.service */ "./src/app/information.service.ts");




let JobApplyService = class JobApplyService {
    constructor(_http, infoService) {
        this._http = _http;
        this.infoService = infoService;
    }
    jobApplyService() {
        return this._http.get(this.infoService.jobbyidurl + this.infoService.jobid);
    }
};
JobApplyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _information_service__WEBPACK_IMPORTED_MODULE_3__["InformationService"] }
];
JobApplyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JobApplyService);



/***/ }),

/***/ "./src/app/jobpost/jobpost.component.css":
/*!***********************************************!*\
  !*** ./src/app/jobpost/jobpost.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .navbar-default {\r\n    background-color: rgba(129,53,136,.98);\r\n    border-color:black;\r\n  \r\n}\r\n \r\n.red{\r\n    color:#fff\r\n}\r\n \r\n.bg{\r\n    background:  rgba(129,52,136,.98);\r\n    border: none;\r\n    \r\n    /* fallback for old browsers */\r\n    /* background: -webkit-linear-gradient(to top,  rgba(129,52,136,.98));\r\n    background: -moz-linear-gradient(to top,  rgba(129,52,136,.98));\r\n    background: -o-linear-gradient(to top,  rgba(129,52,136,.98));\r\n    background: linear-gradient(to top,  rgba(129,52,136,.98));\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    font-family: 'Roboto', sans-serif; */\r\n  \r\n  /* background-color: rgba(129,52,136,.98); */\r\n}\r\n \r\n.subtn{\r\n  background-color: rgba(205, 63, 218, 0.98);\r\n  color: #fff;\r\n  margin-top: 15px;\r\n  border: none;\r\n  border-radius: 2px;\r\n  border-top-left-radius: 2px;\r\n  border-top-right-radius: 2px;\r\n  border-bottom-right-radius: 2px;\r\n  border-bottom-left-radius: 2px;\r\n  font-size: 1.2rem;\r\n  font-weight: 550;\r\n    font-family: inherit;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    z-index: 0;\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n \r\nbody {\r\n    background: rgba(129,52,136,.98);\r\n    /* fallback for old browsers */\r\n    background: linear-gradient(to top, rgba(197, 61, 209, 0.98),rgba(196, 37, 211, 0.98));\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    font-family: 'Roboto', sans-serif;\r\n  }\r\n \r\ninput[type=\"text\"], input[type=\"email\"], input[type=\"password\"] {\r\n  font-size: 0.9em;\r\n  color: #fff;\r\n  font-weight: 100;\r\n  /* width: 94.5%; */\r\n  display: block;\r\n  border: none;\r\n  padding: 0.8em;\r\n  border: solid 1px rgba(255, 255, 255, 0.37);\r\n  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\r\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #fff 4%);\r\n  background-position: -800px 0;\r\n  background-size: 100%;\r\n  background-repeat: no-repeat;\r\n  color: #fff;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n \r\n.text:focus, .text:valid {\r\n  box-shadow: none;\r\n  outline: none;\r\n  background-position: 0 0;\r\n}\r\n \r\n::-webkit-input-placeholder {\r\n  color: #fff;\r\n  font-weight: 100;\r\n}\r\n \r\n:-moz-placeholder {\r\n  /* Firefox 18- */\r\n  color: #fff;\r\n}\r\n \r\n::-moz-placeholder {\r\n  /* Firefox 19+ */\r\n  color: #fff;\r\n}\r\n \r\n:-ms-input-placeholder {\r\n  color: #fff;\r\n}\r\n \r\n.labtxt{\r\n  color: #fff\r\n}\r\n \r\n.rowh{\r\n  margin-top: 22px;\r\n}\r\n \r\n.ta-cl{\r\n  background-color: rgba(129,52,136,.98);\r\n  color: #fff\r\n}\r\n \r\n.page__header {\r\n  color: rgba(255,255,255,.85);\r\n  text-align: center;\r\n  font-weight: 600;\r\n  margin-top: 2%\r\n}\r\n \r\n.active-white-4 input[type=text]:focus:not([readonly]) {\r\n  border: 1px solid #fff;\r\n  box-shadow: 0 0 0 1px #fff;\r\n}\r\n \r\n.active-white-4 input[type=date]:focus:not([writeonly]) {\r\n  border: 1px solid #fff;\r\n  box-shadow: 0 0 0 1px #fff;\r\n}\r\n \r\n.active-white-5 textarea[type=text]:focus:not([writeonly]) {\r\n  border: 1px solid #fff;\r\n  box-shadow: 0 0 0 1px #fff;\r\n}\r\n \r\n.footercopy {\r\n  margin: 2em 0 1em;\r\n  text-align: center;\r\n}\r\n \r\n.footercopy p {\r\n  font-size: .9em;\r\n  color: #fff;\r\n  line-height: 1.8em;\r\n  letter-spacing: 1px;\r\n  font-weight: 100;\r\n}\r\n \r\n.footercopy p a {\r\n  color: #fff;\r\n  transition: 0.5s all;\r\n  -webkit-transition: 0.5s all;\r\n  -moz-transition: 0.5s all;\r\n  -o-transition: 0.5s all;\r\n  -ms-transition: 0.5s all;\r\n}\r\n \r\n:host ::ng-deep .ck-editor__editable_inline {\r\n  min-height: 100px;\r\n  border: 0.1px solid #fff !important;\r\n  box-shadow: 0 0 0 1px #fff !important;\r\n  background-color: rgba(129,52,136,.98) !important;\r\n  color: #fff;\r\n  list-style-type: none;\r\n}\r\n \r\n.ck-toolbar{\r\n  background-color: black !important;\r\n}\r\n \r\n.btn-outline-primary{\r\ncolor: #fff\r\n}\r\n \r\n.cont{\r\n  background-color: rgba(205, 63, 218, 0.98);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icG9zdC9qb2Jwb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyxzQ0FBc0M7SUFDdEMsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBSUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTs7SUFFWiw4QkFBOEI7SUFDOUI7Ozs7Ozt3Q0FNb0M7O0VBRXRDLDRDQUE0QztBQUM5Qzs7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixnQkFBZ0I7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBSTlCLHNGQUFzRjtJQUN0RixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGlDQUFpQztFQUNuQzs7QUFFRjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCwyQ0FBMkM7RUFFM0Msc0RBQXNEO0VBRXRELDJFQUEyRTtFQUMzRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDO0FBQ0Y7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMscUNBQXFDO0VBQ3JDLGlEQUFpRDtFQUNqRCxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtFQUNFLDBDQUEwQztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2pvYnBvc3Qvam9icG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5uYXZiYXItZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICAgIGJvcmRlci1jb2xvcjpibGFjaztcclxuICBcclxufVxyXG4gXHJcbi5yZWR7XHJcbiAgICBjb2xvcjojZmZmXHJcbn1cclxuXHJcblxyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZDogIHJnYmEoMTI5LDUyLDEzNiwuOTgpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgXHJcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsICByZ2JhKDEyOSw1MiwxMzYsLjk4KSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byB0b3AsICByZ2JhKDEyOSw1MiwxMzYsLjk4KSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG8gdG9wLCAgcmdiYSgxMjksNTIsMTM2LC45OCkpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIHJnYmEoMTI5LDUyLDEzNiwuOTgpKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyAqL1xyXG4gIFxyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LDUyLDEzNiwuOTgpOyAqL1xyXG59XHJcbi5zdWJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNSwgNjMsIDIxOCwgMC45OCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOSw1MiwxMzYsLjk4KTtcclxuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHRvcCxyZ2JhKDEwOSwgMzksIDExNiwgMC45OCkscmdiYSgxODEsIDU2LCAxOTIsIDAuOTgpKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgxMDksIDM5LCAxMTYsIDAuOTgpLHJnYmEoMTgxLCA1NiwgMTkyLCAwLjk4KSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDEwOSwgMzksIDExNiwgMC45OCkscmdiYSgxODEsIDU2LCAxOTIsIDAuOTgpKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMTk3LCA2MSwgMjA5LCAwLjk4KSxyZ2JhKDE5NiwgMzcsIDIxMSwgMC45OCkpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgLyogd2lkdGg6IDk0LjUlOyAqL1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjhlbTtcclxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQsIDAuMDksIDAuMDgsIDEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjY0LCAwLjA5LCAwLjA4LCAxKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTYlLCAjZmZmIDQlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk2JSwgI2ZmZiA0JSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwMHB4IDA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGV4dDpmb2N1cywgLnRleHQ6dmFsaWQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbn1cclxuXHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAvKiBGaXJlZm94IDE4LSAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5sYWJ0eHR7XHJcbiAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLnJvd2h7XHJcbiAgbWFyZ2luLXRvcDogMjJweDtcclxufVxyXG4udGEtY2x7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjksNTIsMTM2LC45OCk7XHJcbiAgY29sb3I6ICNmZmZcclxufVxyXG4ucGFnZV9faGVhZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuODUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDIlXHJcbn1cclxuXHJcbi5hY3RpdmUtd2hpdGUtNCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2ZmZjtcclxufVxyXG5cclxuLmFjdGl2ZS13aGl0ZS00IGlucHV0W3R5cGU9ZGF0ZV06Zm9jdXM6bm90KFt3cml0ZW9ubHldKSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2ZmZjtcclxufVxyXG5cclxuLmFjdGl2ZS13aGl0ZS01IHRleHRhcmVhW3R5cGU9dGV4dF06Zm9jdXM6bm90KFt3cml0ZW9ubHldKSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2ZmZjtcclxufVxyXG5cclxuXHJcbi5mb290ZXJjb3B5IHtcclxuICBtYXJnaW46IDJlbSAwIDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXJjb3B5IHAge1xyXG4gIGZvbnQtc2l6ZTogLjllbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uZm9vdGVyY29weSBwIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAtby10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAtbXMtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOSw1MiwxMzYsLjk4KSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4uY2stdG9vbGJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tb3V0bGluZS1wcmltYXJ5e1xyXG5jb2xvcjogI2ZmZlxyXG59XHJcbi5jb250e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA1LCA2MywgMjE4LCAwLjk4KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/jobpost/jobpost.component.ts":
/*!**********************************************!*\
  !*** ./src/app/jobpost/jobpost.component.ts ***!
  \**********************************************/
/*! exports provided: JobpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobpostComponent", function() { return JobpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../information.service */ "./src/app/information.service.ts");
/* harmony import */ var _postjob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postjob.service */ "./src/app/jobpost/postjob.service.ts");







let JobpostComponent = class JobpostComponent {
    constructor(formbuilder, router, information, postJobService) {
        this.formbuilder = formbuilder;
        this.router = router;
        this.information = information;
        this.postJobService = postJobService;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
    }
    onChange({ editor }) {
        this.jd = editor.getData();
    }
    postJobs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var skill = this.jobdataForm.value.skills.split(",");
            var exp = this.jobdataForm.value.experience.split("-").map(function (item) {
                return parseInt(item);
            });
            this.jobdataForm.value.skills = skill;
            this.jobdataForm.value.experience = exp;
            this.jobdataForm.value.jd = this.jd;
            this.jobData = yield this.postJobService.postJobs(this.jobdataForm.value).toPromise();
            if (this.jobData != null) {
                this.information.switch = true;
                this.router.navigate(['/applied']);
            }
        });
    }
    ngOnInit() {
        this.jobdataForm = this.formbuilder.group({
            companyname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            skills: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            experience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            startdate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            enddate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            applylink: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            source: [''],
            salary: ['']
            // jd: ['',[Validators.required]]
        });
    }
};
JobpostComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _information_service__WEBPACK_IMPORTED_MODULE_5__["InformationService"] },
    { type: _postjob_service__WEBPACK_IMPORTED_MODULE_6__["PostjobService"] }
];
JobpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobpost',
        template: __webpack_require__(/*! raw-loader!./jobpost.component.html */ "./node_modules/raw-loader/index.js!./src/app/jobpost/jobpost.component.html"),
        styles: [__webpack_require__(/*! ./jobpost.component.css */ "./src/app/jobpost/jobpost.component.css")]
    })
], JobpostComponent);



/***/ }),

/***/ "./src/app/jobpost/postjob.service.ts":
/*!********************************************!*\
  !*** ./src/app/jobpost/postjob.service.ts ***!
  \********************************************/
/*! exports provided: PostjobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostjobService", function() { return PostjobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../information.service */ "./src/app/information.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PostjobService = class PostjobService {
    constructor(informationService, _http) {
        this.informationService = informationService;
        this._http = _http;
    }
    postJobs(data) {
        return this._http.post(this.informationService.postJobUrl, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => response.json()));
    }
};
PostjobService.ctorParameters = () => [
    { type: _information_service__WEBPACK_IMPORTED_MODULE_2__["InformationService"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
];
PostjobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostjobService);



/***/ }),

/***/ "./src/app/jobs-view/jobs-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/jobs-view/jobs-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\r\n    background-color: rgba(129,53,136,.98);\r\n    border-color:black;\r\n  \r\n}\r\n\r\n.active-purple-4 input[type=text]:focus:not([readonly]) {\r\n    border: 1px solid rgba(129,53,136,.98);\r\n    box-shadow: 0 0 0 1px rgba(129,53,136,.98);\r\n    }\r\n\r\n.active-purple-4 input[type=number]:focus:not([readonly]) {\r\n        border: 1px solid rgba(129,53,136,.98);\r\n        box-shadow: 0 0 0 1px rgba(129,53,136,.98);\r\n        }\r\n\r\n.exp{\r\n      box-shadow: 0 0 0 1px rgba(129,53,136,.98); -webkit-box-shadow: none; \r\n}\r\n\r\n.icon{\r\n    position :absolute;\r\n    left:15px;\r\n    top: 3px;\r\n    padding: 9px 8px;\r\n    color: #969592 \r\n    \r\n    \r\n}\r\n\r\n.cardsalary{\r\n    position :absolute;\r\n    left:80px;\r\n    bottom:12px;\r\n    padding: 9px 8px;\r\n    color: #969592 \r\n    \r\n    \r\n}\r\n\r\n.cardicon  {\r\n    color:  rgba(0,0,0,.7); \r\n    \r\n    \r\n}\r\n\r\n.loc-sal {\r\n    font-size: 0.9rem;\r\n    line-height: 1.42857;\r\n    font-weight: 500;\r\n    color: rgba(0,0,0,.8);\r\n}\r\n\r\n.create{\r\n    font-size: 0.7rem;\r\n    line-height: 3;\r\n    font-weight: 600;\r\n    color: rgba(0,0,0,.6);\r\n    \r\n}\r\n\r\n.underline-small{\r\n    color:#969592;\r\n    display:inline-block;\r\n    position:relative;\r\n    \r\n  }\r\n\r\n.underline-small::before{\r\n    content:'';\r\n    height:0.6px;\r\n    width:60%;\r\n    background:rgba(129,53,136,.98);\r\n    position:absolute;\r\n    left:calc(40% - 20%);\r\n    bottom:-5px;\r\n  /*   another way you can achieve this\r\n    Check this link: \r\n    https://goo.gl/GgRdjz\r\n    \r\n    */\r\n    \r\n  }\r\n\r\n.iconcompany{\r\n    position :absolute;\r\n    left:12px;\r\n    top: 66px;\r\n    padding: 9px 8px;\r\n    color: #969592 \r\n}\r\n\r\n.namecompany{\r\n    position :absolute;\r\n    left:18px;\r\n    top: 70px;\r\n    padding: 9px 8px;\r\n    color: #969592 \r\n    \r\n}\r\n\r\n.my-select {\r\n    background-color: white;\r\n    border: 1px solid silver;\r\n    padding: 6px 20px;\r\n    box-shadow: 0px 0px 1px;\r\n    color: rgba(129,53,136,.98);\r\n  }\r\n\r\n/* border-radius: 20px; */\r\n\r\n/* color: rgba(129,53,136,.98); */\r\n\r\n.col{\r\n    margin: 0px;\r\n}\r\n\r\n.t-24 {\r\n    font-size: 2.5rem;\r\n    line-height: 1.33333;\r\n}\r\n\r\n.t-light {\r\n    font-weight: 200;\r\n}\r\n\r\n.t-black {\r\n    color: rgba(0,0,0,.9);\r\n}\r\n\r\n.display-flex {\r\n    display: flex!important;\r\n}\r\n\r\n.pb4 {\r\n    padding-bottom: 16px!important;\r\n}\r\n\r\n/* .footer {\r\n    position: fixed;\r\n    height: 10px;\r\n    background-color: red;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    margin-bottom: 0px;\r\n} */\r\n\r\n.company-title h5{\r\n    height: 30px;\r\n}\r\n\r\n.btn-footer{\r\n    background-color: rgba(129,53,136,.98);\r\n    color: white;\r\n}\r\n\r\njd {\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n    -webkit-text-decoration-style: initial;\r\n            text-decoration-style: initial;\r\n    -webkit-text-decoration-color: initial;\r\n            text-decoration-color: initial;\r\n}\r\n\r\n.jb-end{\r\n    color: red\r\n}\r\n\r\n.jb-to{\r\n    color: green\r\n}\r\n\r\n.viewcard{\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy12aWV3L2pvYnMtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsMENBQTBDO0lBQzFDOztBQUVBO1FBQ0ksc0NBQXNDO1FBQ3RDLDBDQUEwQztRQUMxQzs7QUFHUjtNQUNNLDBDQUEwQyxFQUFFLHdCQUF3QjtBQUMxRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQjs7O0FBR0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEI7OztBQUdKOztBQUVBO0lBQ0ksc0JBQXNCOzs7QUFHMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7O0FBRXpCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7O0VBRW5COztBQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztFQUNiOzs7O0tBSUc7O0VBRUg7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGdCQUFnQjtJQUNoQjs7QUFFSjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwyQkFBMkI7RUFDN0I7O0FBQ0EseUJBQXlCOztBQUN6QixpQ0FBaUM7O0FBSW5DO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFHQTs7Ozs7Ozs7R0FRRzs7QUFFSDtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvam9icy12aWV3L2pvYnMtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gIFxyXG59XHJcblxyXG4uYWN0aXZlLXB1cnBsZS00IGlucHV0W3R5cGU9dGV4dF06Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUtcHVycGxlLTQgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuLmV4cHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMTI5LDUzLDEzNiwuOTgpOyAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7IFxyXG59XHJcblxyXG4uaWNvbntcclxuICAgIHBvc2l0aW9uIDphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MTVweDtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgcGFkZGluZzogOXB4IDhweDtcclxuICAgIGNvbG9yOiAjOTY5NTkyIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLmNhcmRzYWxhcnl7XHJcbiAgICBwb3NpdGlvbiA6YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjgwcHg7XHJcbiAgICBib3R0b206MTJweDtcclxuICAgIHBhZGRpbmc6IDlweCA4cHg7XHJcbiAgICBjb2xvcjogIzk2OTU5MiBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5jYXJkaWNvbiAge1xyXG4gICAgY29sb3I6ICByZ2JhKDAsMCwwLC43KTsgXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4ubG9jLXNhbCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxufVxyXG5cclxuXHJcbi5jcmVhdGV7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIFxyXG59XHJcbi51bmRlcmxpbmUtc21hbGx7XHJcbiAgICBjb2xvcjojOTY5NTkyO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lLXNtYWxsOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgaGVpZ2h0OjAuNnB4O1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDpjYWxjKDQwJSAtIDIwJSk7XHJcbiAgICBib3R0b206LTVweDtcclxuICAvKiAgIGFub3RoZXIgd2F5IHlvdSBjYW4gYWNoaWV2ZSB0aGlzXHJcbiAgICBDaGVjayB0aGlzIGxpbms6IFxyXG4gICAgaHR0cHM6Ly9nb28uZ2wvR2dSZGp6XHJcbiAgICBcclxuICAgICovXHJcbiAgICBcclxuICB9XHJcblxyXG4uaWNvbmNvbXBhbnl7XHJcbiAgICBwb3NpdGlvbiA6YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEycHg7XHJcbiAgICB0b3A6IDY2cHg7XHJcbiAgICBwYWRkaW5nOiA5cHggOHB4O1xyXG4gICAgY29sb3I6ICM5Njk1OTIgXHJcbn1cclxuXHJcbi5uYW1lY29tcGFueXtcclxuICAgIHBvc2l0aW9uIDphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MThweDtcclxuICAgIHRvcDogNzBweDtcclxuICAgIHBhZGRpbmc6IDlweCA4cHg7XHJcbiAgICBjb2xvcjogIzk2OTU5MiBcclxuICAgIFxyXG59XHJcblxyXG4ubXktc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweDtcclxuICAgIGNvbG9yOiByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICB9XHJcbiAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cclxuICAvKiBjb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7ICovXHJcblxyXG5cclxuXHJcbi5jb2x7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4udC0yNCB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzO1xyXG59XHJcbi50LWxpZ2h0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuLnQtYmxhY2sge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xyXG59XHJcbi5kaXNwbGF5LWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbn1cclxuLnBiNCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSAqL1xyXG5cclxuLmNvbXBhbnktdGl0bGUgaDV7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5idG4tZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmpkIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogaW5pdGlhbDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogaW5pdGlhbDtcclxufVxyXG4uamItZW5ke1xyXG4gICAgY29sb3I6IHJlZFxyXG59XHJcblxyXG4uamItdG97XHJcbiAgICBjb2xvcjogZ3JlZW5cclxufVxyXG4udmlld2NhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/jobs-view/jobs-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/jobs-view/jobs-view.component.ts ***!
  \**************************************************/
/*! exports provided: JobsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsViewComponent", function() { return JobsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../information.service */ "./src/app/information.service.ts");
/* harmony import */ var _jobsearch_jobsearch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jobsearch/jobsearch.service */ "./src/app/jobsearch/jobsearch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _signin_auth_signin_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../signin-auth/signin-auth.service */ "./src/app/signin-auth/signin-auth.service.ts");







let JobsViewComponent = class JobsViewComponent {
    constructor(spinnerService, signinService, infoService, jobService, router) {
        this.spinnerService = spinnerService;
        this.signinService = signinService;
        this.infoService = infoService;
        this.jobService = jobService;
        this.router = router;
        this.showSpinner = true;
    }
    jobs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spinnerService.show();
            setTimeout(() => this.showSpinner = false, 3000);
            if (this.infoService.skills != undefined && this.infoService.location == undefined && this.infoService.experience == null) {
                this.jobList = yield this.jobService.getJobsbySkills().toPromise();
            }
            else if (this.infoService.skills == null && this.infoService.location != undefined && this.infoService.experience == undefined) {
                this.jobList = yield this.jobService.getJobsbyLocation().toPromise();
            }
            else if (this.infoService.skills == undefined && this.infoService.location == undefined && this.infoService.experience != undefined) {
                console.log("qwerty12345678");
                this.jobList = yield this.jobService.getJobsbyExperience().toPromise();
            }
            else if (this.infoService.skills != undefined && this.infoService.location != undefined && this.infoService.experience == undefined) {
                this.jobList = yield this.jobService.getJobsbylocskill().toPromise();
            }
            else if (this.infoService.skills != undefined && this.infoService.location == undefined && this.infoService.experience != undefined) {
                this.jobList = yield this.jobService.getJobsbyexpskill().toPromise();
            }
            else if (this.infoService.skills == undefined && this.infoService.location != undefined && this.infoService.experience != undefined) {
                this.jobList = yield this.jobService.getJobsexploc().toPromise();
            }
            else if (this.infoService.skills != undefined && this.infoService.location != undefined && this.infoService.experience != undefined) {
                this.jobList = yield this.jobService.getJobsbyall().toPromise();
            }
            if (this.jobList != undefined && this.jobList.length == 0) {
                this.infoService.switch = false;
                this.router.navigate(['/applied']);
            }
            if (this.jobList == undefined) {
                this.jobList = JSON.parse(sessionStorage.getItem('jobList'));
            }
            sessionStorage.setItem('jobList', JSON.stringify(this.jobList));
            this.infoService.jobs(this.jobList);
        });
    }
    applyJob(jobid) {
        //this.showSpinner=true;
        // setTimeout(()=>{
        //   this.showSpinner=false;},6000);
        this.infoService.jobid = jobid;
        this.router.navigate(['/apply']);
    }
    // async loggedin(){
    //   this.userlogin=await this.signinService.googleLogin().toPromise();
    //   console.log("here in ghanta",this.userlogin)
    //   return console.log(this.userlogin)
    // }
    ngOnInit() {
        this.jobs();
    }
};
JobsViewComponent.ctorParameters = () => [
    { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"] },
    { type: _signin_auth_signin_auth_service__WEBPACK_IMPORTED_MODULE_6__["SigninAuthService"] },
    { type: _information_service__WEBPACK_IMPORTED_MODULE_2__["InformationService"] },
    { type: _jobsearch_jobsearch_service__WEBPACK_IMPORTED_MODULE_3__["JobsearchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
JobsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobs-view',
        template: __webpack_require__(/*! raw-loader!./jobs-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/jobs-view/jobs-view.component.html"),
        styles: [__webpack_require__(/*! ./jobs-view.component.css */ "./src/app/jobs-view/jobs-view.component.css")]
    })
], JobsViewComponent);



/***/ }),

/***/ "./src/app/jobsearch/jobsearch.component.css":
/*!***************************************************!*\
  !*** ./src/app/jobsearch/jobsearch.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\r\n    background-color: rgba(129,53,136,.98);\r\n    border-color:black;\r\n  \r\n}\r\n\r\n.navbar-toggler { \r\n    background-color: rgba(129,53,136,.98);\r\n    border-color: rgba(129,53,136,.98);\r\n}\r\n\r\n.navbar-toggler-icon { \r\n    background-image: url( \r\n\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"); \r\n}\r\n\r\n.nav-link{\r\n    color: #fff\r\n}\r\n\r\n.active-purple-4 input[type=text]:focus:not([readonly]) {\r\n    border: 1px solid rgba(129,53,136,.98);\r\n    box-shadow: 0 0 0 1px rgba(129,53,136,.98);\r\n    }\r\n\r\n.active-purple-4 input[type=number]:focus:not([readonly]) {\r\n    border: 1px solid rgba(129,53,136,.98);\r\n    box-shadow: 0 0 0 1px rgba(129,53,136,.98);\r\n}\r\n\r\n.exp{\r\n      box-shadow: 0 0 0 1px rgba(129,53,136,.98); -webkit-box-shadow: none; \r\n}\r\n\r\n.icon{\r\n    position :absolute;\r\n    left:15px;\r\n    top: 3px;\r\n    padding: 9px 8px;\r\n    color: #969592 \r\n}\r\n\r\n.cardsalary{\r\n    position :absolute;\r\n    left:80px;\r\n    bottom:12px;\r\n    padding: 9px 8px;\r\n    color: #969592 \r\n    \r\n    \r\n}\r\n\r\n.cardicon  {\r\n    color:  rgba(0,0,0,.7);\r\n    \r\n    \r\n}\r\n\r\n.loc-sal {\r\n    font-size: 0.9rem;\r\n    line-height: 1.42857;\r\n    font-weight: 500;\r\n    color: rgba(0,0,0,.8);\r\n}\r\n\r\n.create{\r\n    font-size: 0.7rem;\r\n    line-height: 3.1;\r\n    font-weight: 600;\r\n    color: rgba(0,0,0,.6);\r\n}\r\n\r\n.iconcompany{\r\n    position :absolute;\r\n    left:12px;\r\n    top: 66px;\r\n    padding: 9px 8px;\r\n    color: #969592 \r\n}\r\n\r\n.namecompany{\r\n    position :absolute;\r\n    left:18px;\r\n    top: 70px;\r\n    padding: 9px 8px;\r\n    color: #969592 \r\n    \r\n}\r\n\r\n.my-select {\r\n    background-color: white;\r\n    border: 1px solid silver;\r\n    padding: 6px 20px;\r\n    box-shadow: 0px 0px 1px;\r\n    color: rgba(129,53,136,.98);\r\n  }\r\n\r\n/* border-radius: 20px; */\r\n\r\n/* color: rgba(129,53,136,.98); */\r\n\r\n.col{\r\n    margin: 0px;\r\n}\r\n\r\n.t-24 {\r\n    font-size: 2.5rem;\r\n    line-height: 1.33333;\r\n}\r\n\r\n.t-light {\r\n    font-weight: 200;\r\n}\r\n\r\n.t-black {\r\n    color: rgba(0,0,0,.9);\r\n}\r\n\r\n.display-flex {\r\n    display: flex!important;\r\n}\r\n\r\n.pb4 {\r\n    padding-bottom: 16px!important;\r\n}\r\n\r\n.btn-footer{\r\n    background-color: rgba(129,53,136,.98);\r\n    color: white;\r\n}\r\n\r\n.jb-end{\r\ncolor: red\r\n}\r\n\r\n.jb-to{\r\ncolor: green\r\n}\r\n\r\n.viewcard{\r\n    margin-top: 20px;\r\n}\r\n\r\n.navpost-btn{\r\n    font-weight: 600;\r\n    background-color: rgba(129,53,136,.98);\r\n    color:#fff;\r\n    text-align: center;\r\n    font-family: inherit;\r\n    border-color: #fff;\r\n    margin-left: 5ex;\r\n    margin-right: 3ex;\r\n    \r\n}\r\n\r\n.foot{\r\n    margin-top: 20px;\r\n}\r\n\r\n.spin {\r\n    position: fixed;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: show;\r\n    margin: auto;\r\n    top: 200px;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n\r\n/* Transparent Overlay */\r\n\r\n.spinner_overlay {\r\n\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: brown;\r\n    opacity: 0.2;\r\n    z-index: 1000;\r\n}\r\n\r\nsection {\r\n    padding: 60px 0;\r\n    margin-top: 0.5rem\r\n}\r\n\r\nsection .section-title {\r\n    text-align: center;\r\n    color: rgba(129,53,136,.98);\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#footer {\r\n    background: rgba(129,53,136,.98) !important;\r\n}\r\n\r\n#footer h5{\r\n\tpadding-left: 10px;\r\n    border-left: 3px solid #eeeeee;\r\n    padding-bottom: 6px;\r\n    margin-bottom: 20px;\r\n    color:#ffffff;\r\n}\r\n\r\n#footer a {\r\n    color: #ffffff;\r\n    text-decoration: none !important;\r\n    background-color: transparent;\r\n    -webkit-text-decoration-skip: objects;\r\n}\r\n\r\n#footer ul.social li{\r\n\tpadding: 3px 0;\r\n}\r\n\r\n#footer ul.social li a i {\r\n    margin-right: 5px;\r\n\tfont-size:25px;\r\n\ttransition: .5s all ease;\r\n}\r\n\r\n#footer ul.social li:hover a i {\r\n\tfont-size:30px;\r\n\tmargin-top:-10px;\r\n}\r\n\r\n#footer ul.social li a,\r\n#footer ul.quick-links li a{\r\n\tcolor:#ffffff;\r\n}\r\n\r\n#footer ul.social li a:hover{\r\n\tcolor:#eeeeee;\r\n}\r\n\r\n#footer ul.quick-links li{\r\n\tpadding: 3px 0;\r\n\ttransition: .5s all ease;\r\n}\r\n\r\n#footer ul.quick-links li:hover{\r\n\tpadding: 3px 0;\r\n\tmargin-left:5px;\r\n\tfont-weight:700;\r\n}\r\n\r\n#footer ul.quick-links li a i{\r\n\tmargin-right: 5px;\r\n}\r\n\r\n#footer ul.quick-links li:hover a i {\r\n    font-weight: 700;\r\n}\r\n\r\n@media (max-width:767px){\r\n\t#footer h5 {\r\n    padding-left: 0;\r\n    border-left: transparent;\r\n    padding-bottom: 0px;\r\n    margin-bottom: 10px;\r\n}}\r\n\r\n.footeradd{\r\n    color: #ffffff\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9ic2VhcmNoL2pvYnNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7bVBBQytPO0FBQ25QOztBQUVBO0lBQ0k7QUFDSjs7QUFLQTtJQUNJLHNDQUFzQztJQUN0QywwQ0FBMEM7SUFDMUM7O0FBRUo7SUFDSSxzQ0FBc0M7SUFDdEMsMENBQTBDO0FBQzlDOztBQUdBO01BQ00sMENBQTBDLEVBQUUsd0JBQXdCO0FBQzFFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEI7OztBQUdKOztBQUVBO0lBQ0ksc0JBQXNCOzs7QUFHMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGdCQUFnQjtJQUNoQjs7QUFFSjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwyQkFBMkI7RUFDN0I7O0FBQ0EseUJBQXlCOztBQUN6QixpQ0FBaUM7O0FBSW5DO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFHQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0FBQ2hCOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtFQUNWOztBQUVBLHdCQUF3Qjs7QUFDeEI7O0lBRUUsZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBR0E7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFDQTtDQUNDLGtCQUFrQjtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixxQ0FBcUM7QUFDekM7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7SUFDSSxpQkFBaUI7Q0FDcEIsY0FBYztDQUdkLHdCQUF3QjtBQUN6Qjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBQ0E7O0NBRUMsYUFBYTtBQUNkOztBQUNBO0NBQ0MsYUFBYTtBQUNkOztBQUNBO0NBQ0MsY0FBYztDQUdkLHdCQUF3QjtBQUN6Qjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtDQUNDO0lBQ0csZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCLENBQUM7O0FBRUQ7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvam9ic2VhcmNoL2pvYnNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gIFxyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyLWljb24geyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCggXHJcblwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0Nzdmcgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMjU1LDI1NSwyNTUsIDAuOCknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpOyBcclxufSBcclxuXHJcbi5uYXYtbGlua3tcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcblxyXG4gIFxyXG5cclxuLmFjdGl2ZS1wdXJwbGUtNCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICAgIH1cclxuXHJcbi5hY3RpdmUtcHVycGxlLTQgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxufVxyXG5cclxuICAgIFxyXG4uZXhwe1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgxMjksNTMsMTM2LC45OCk7IC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsgXHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgcG9zaXRpb24gOmFic29sdXRlO1xyXG4gICAgbGVmdDoxNXB4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBwYWRkaW5nOiA5cHggOHB4O1xyXG4gICAgY29sb3I6ICM5Njk1OTIgXHJcbn1cclxuXHJcbi5jYXJkc2FsYXJ5e1xyXG4gICAgcG9zaXRpb24gOmFic29sdXRlO1xyXG4gICAgbGVmdDo4MHB4O1xyXG4gICAgYm90dG9tOjEycHg7XHJcbiAgICBwYWRkaW5nOiA5cHggOHB4O1xyXG4gICAgY29sb3I6ICM5Njk1OTIgXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uY2FyZGljb24gIHtcclxuICAgIGNvbG9yOiAgcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4ubG9jLXNhbCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxufVxyXG5cclxuXHJcbi5jcmVhdGV7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzLjE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG59XHJcblxyXG4uaWNvbmNvbXBhbnl7XHJcbiAgICBwb3NpdGlvbiA6YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEycHg7XHJcbiAgICB0b3A6IDY2cHg7XHJcbiAgICBwYWRkaW5nOiA5cHggOHB4O1xyXG4gICAgY29sb3I6ICM5Njk1OTIgXHJcbn1cclxuXHJcbi5uYW1lY29tcGFueXtcclxuICAgIHBvc2l0aW9uIDphYnNvbHV0ZTtcclxuICAgIGxlZnQ6MThweDtcclxuICAgIHRvcDogNzBweDtcclxuICAgIHBhZGRpbmc6IDlweCA4cHg7XHJcbiAgICBjb2xvcjogIzk2OTU5MiBcclxuICAgIFxyXG59XHJcblxyXG4ubXktc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweDtcclxuICAgIGNvbG9yOiByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICB9XHJcbiAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cclxuICAvKiBjb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7ICovXHJcblxyXG5cclxuXHJcbi5jb2x7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4udC0yNCB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzO1xyXG59XHJcbi50LWxpZ2h0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuLnQtYmxhY2sge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xyXG59XHJcbi5kaXNwbGF5LWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbn1cclxuLnBiNCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYnRuLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5qYi1lbmR7XHJcbmNvbG9yOiByZWRcclxufVxyXG4uamItdG97XHJcbmNvbG9yOiBncmVlblxyXG59XHJcbi52aWV3Y2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm5hdnBvc3QtYnRue1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVleDtcclxuICAgIG1hcmdpbi1yaWdodDogM2V4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5mb290e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnNwaW4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgb3ZlcmZsb3c6IHNob3c7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBUcmFuc3BhcmVudCBPdmVybGF5ICovXHJcbiAgLnNwaW5uZXJfb3ZlcmxheSB7XHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW1cclxufVxyXG5cclxuc2VjdGlvbiAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI5LDUzLDEzNiwuOTgpICFpbXBvcnRhbnQ7XHJcbn1cclxuI2Zvb3RlciBoNXtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuI2Zvb3RlciBhIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGl7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYSBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdGZvbnQtc2l6ZToyNXB4O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxufVxyXG4jZm9vdGVyIHVsLnNvY2lhbCBsaTpob3ZlciBhIGkge1xyXG5cdGZvbnQtc2l6ZTozMHB4O1xyXG5cdG1hcmdpbi10b3A6LTEwcHg7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYSxcclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaSBhe1xyXG5cdGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYTpob3ZlcntcclxuXHRjb2xvcjojZWVlZWVlO1xyXG59XHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGl7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG59XHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGk6aG92ZXJ7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcblx0bWFyZ2luLWxlZnQ6NXB4O1xyXG5cdGZvbnQtd2VpZ2h0OjcwMDtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpIGEgaXtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVyIGEgaSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcblx0I2Zvb3RlciBoNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufX1cclxuXHJcbi5mb290ZXJhZGR7XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG59Il19 */"

/***/ }),

/***/ "./src/app/jobsearch/jobsearch.component.ts":
/*!**************************************************!*\
  !*** ./src/app/jobsearch/jobsearch.component.ts ***!
  \**************************************************/
/*! exports provided: JobsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsearchComponent", function() { return JobsearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _jobsearch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobsearch.service */ "./src/app/jobsearch/jobsearch.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../information.service */ "./src/app/information.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);







let JobsearchComponent = class JobsearchComponent {
    constructor(spinnerService, router, jobService, formbuilder, infoservice) {
        this.spinnerService = spinnerService;
        this.router = router;
        this.jobService = jobService;
        this.formbuilder = formbuilder;
        this.infoservice = infoservice;
        this.current = new Date();
        this.currentDate = new Date();
        this.showSpinner = true;
        this.p = 1;
        this.count = 6;
    }
    getJob() {
        let location = "Bangalore";
        if (this.jobsearchForm.value.location == "Bangalore" || this.jobsearchForm.value.location == "bangalore" || this.jobsearchForm.value.location == "BANGALORE") {
            this.infoservice.location = "Bengaluru";
        }
        else {
            this.infoservice.location = this.jobsearchForm.value.location;
        }
        this.infoservice.skills = this.jobsearchForm.value.skills;
        this.infoservice.experience = this.jobsearchForm.value.experience;
        this.router.navigate(['/jobs-view']);
    }
    applyJob(jobid) {
        this.infoservice.jobid = jobid;
        this.router.navigate(['/apply']);
    }
    jobsearch() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.showSpinner=true;
            // setTimeout(()=>{
            //   this.showSpinner=false;},6000);
            this.spinnerService.show();
            setTimeout(() => this.showSpinner = false, 3000);
            this.filterjob = yield this.jobService.getJobs().toPromise();
            this.infoservice.jobs(this.filterjob);
        });
    }
    ngOnInit() {
        this.jobsearch();
        this.jobsearchForm = this.formbuilder.group({
            location: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            skills: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            experience: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
};
JobsearchComponent.ctorParameters = () => [
    { type: ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _jobsearch_service__WEBPACK_IMPORTED_MODULE_2__["JobsearchService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _information_service__WEBPACK_IMPORTED_MODULE_4__["InformationService"] }
];
JobsearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobsearch',
        template: __webpack_require__(/*! raw-loader!./jobsearch.component.html */ "./node_modules/raw-loader/index.js!./src/app/jobsearch/jobsearch.component.html"),
        styles: [__webpack_require__(/*! ./jobsearch.component.css */ "./src/app/jobsearch/jobsearch.component.css")]
    })
], JobsearchComponent);



/***/ }),

/***/ "./src/app/jobsearch/jobsearch.service.ts":
/*!************************************************!*\
  !*** ./src/app/jobsearch/jobsearch.service.ts ***!
  \************************************************/
/*! exports provided: JobsearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsearchService", function() { return JobsearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../information.service */ "./src/app/information.service.ts");




let JobsearchService = class JobsearchService {
    constructor(_http, inforService) {
        this._http = _http;
        this.inforService = inforService;
    }
    getJobs() {
        return this._http.get(this.inforService.jobSearch);
        // .pipe(map((response: Response) => response.json())); this was the last line with every methods
    }
    getJobsbyLocation() {
        return this._http.get(this.inforService.jobbylocationurl + this.inforService.location);
    }
    getJobsbySkills() {
        return this._http.get(this.inforService.jobbyskillsurl + this.inforService.skills);
    }
    getJobsbyExperience() {
        return this._http.get(this.inforService.jobbyExpurl + this.inforService.experience);
    }
    getJobsbylocskill() {
        return this._http.get(this.inforService.jobbylocskill + this.inforService.skills + '/' + this.inforService.location);
    }
    getJobsbyexpskill() {
        return this._http.get(this.inforService.jobbyexpskill + this.inforService.experience + '/' + this.inforService.skills);
    }
    getJobsexploc() {
        return this._http.get(this.inforService.jobsbyexploc + this.inforService.experience + '/' + this.inforService.location);
    }
    getJobsbyall() {
        return this._http.get(this.inforService.jobsbyall + this.inforService.skills + '/' + this.inforService.location + '/' + this.inforService.experience);
    }
};
JobsearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _information_service__WEBPACK_IMPORTED_MODULE_3__["InformationService"] }
];
JobsearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JobsearchService);



/***/ }),

/***/ "./src/app/respost/respost.component.css":
/*!***********************************************!*\
  !*** ./src/app/respost/respost.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\r\n    background-color: rgba(129,53,136,.98);\r\n    border-color:black;\r\n  \r\n}\r\n .alert-success{\r\n     background-color: rgba(129,53,136,.98);\r\n     color: #ffff;\r\n     \r\n }\r\n .alt-ht{\r\n     height: 300%;\r\n }\r\n .alert button{\r\n    border-color: #fff;\r\n    background-color: rgba(129,53,136,.98);\r\n    color: #fff\r\n }\r\n hr{\r\n    border-top: 1px solid #fff\r\n }\r\n .noData {\r\n    margin: 0 auto;\r\n    margin-top: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzcG9zdC9yZXNwb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0JBQWtCOztBQUV0QjtDQUNDO0tBQ0ksc0NBQXNDO0tBQ3RDLFlBQVk7O0NBRWhCO0NBQ0E7S0FDSSxZQUFZO0NBQ2hCO0NBQ0E7SUFDRyxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDO0NBQ0g7Q0FDQTtJQUNHO0NBQ0g7Q0FFQTtJQUNHLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZXNwb3N0L3Jlc3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICAgIGJvcmRlci1jb2xvcjpibGFjaztcclxuICBcclxufVxyXG4gLmFsZXJ0LXN1Y2Nlc3N7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgIFxyXG4gfVxyXG4gLmFsdC1odHtcclxuICAgICBoZWlnaHQ6IDMwMCU7XHJcbiB9XHJcbiAuYWxlcnQgYnV0dG9ue1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG4gfVxyXG4gaHJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZlxyXG4gfVxyXG4gXHJcbiAubm9EYXRhIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/respost/respost.component.ts":
/*!**********************************************!*\
  !*** ./src/app/respost/respost.component.ts ***!
  \**********************************************/
/*! exports provided: RespostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespostComponent", function() { return RespostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../information.service */ "./src/app/information.service.ts");




let RespostComponent = class RespostComponent {
    constructor(router, infoService) {
        this.router = router;
        this.infoService = infoService;
        this.searchjob = this.infoService.switch;
    }
    view() {
        this.router.navigate(['/jobs']);
    }
    ngOnInit() {
    }
};
RespostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _information_service__WEBPACK_IMPORTED_MODULE_3__["InformationService"] }
];
RespostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-respost',
        template: __webpack_require__(/*! raw-loader!./respost.component.html */ "./node_modules/raw-loader/index.js!./src/app/respost/respost.component.html"),
        styles: [__webpack_require__(/*! ./respost.component.css */ "./src/app/respost/respost.component.css")]
    })
], RespostComponent);



/***/ }),

/***/ "./src/app/signin-auth/signin-auth.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signin-auth/signin-auth.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\r\n  background-color: rgba(129,53,136,.98);\r\n  border-color:black;\r\n\r\n}\r\n:root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\nbody {\r\n    background: #FFFAF0;\r\n    /* background: linear-gradient(to right, #0062E6, #33AEFF); */\r\n    background: linear-gradient(to right, #FFFAF0, #FFFAF0);\r\n  }\r\n.card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n.card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n.card-signin .card-body {\r\n    padding: 2rem;\r\n  }\r\n.form-signin {\r\n    width: 100%;\r\n  }\r\n.form-signin .btn {\r\n    font-size: 70%;\r\n    border-radius: .5 rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n  }\r\n.form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n.form-label-group input {\r\n    height: auto;\r\n    border-radius: 2rem;\r\n  }\r\n.form-label-group>input,\r\n  .form-label-group>label {\r\n    padding: var(--input-padding-y) var(--input-padding-x);\r\n  }\r\n.form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n.form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n  }\r\n.form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n.form-label-group input::-moz-placeholder {\r\n    color: transparent;\r\n  }\r\n.form-label-group input::placeholder {\r\n    color: transparent;\r\n  }\r\n.form-label-group input:not(:placeholder-shown) {\r\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n  }\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n.btn-google {\r\n    color: white;\r\n    background-color: #ea4335;\r\n    /* margin-left: 15px;\r\n    width: 22.5 rem; */\r\n    margin-left: 15px;\r\n    width: 92%;\r\n  }\r\n.btn-facebook {\r\n    color: white;\r\n    background-color: #3b5998;\r\n    margin-left: 15px;\r\n    width: 92%;\r\n  }\r\n.btn-loc{\r\n    color: white;\r\n    background-color: rgba(129,53,136,.98);\r\n    margin-left: 15px;\r\n    width: 92%;\r\n  }\r\n.rem-pwd{\r\n    margin-left: 15px;\r\n  }\r\n.rdrct-reg{\r\n    line-height: 700%;\r\n    font-size: 13px;\r\n    color: #969592\r\n  }\r\n.rdrct-reg a{\r\n    color: rgba(129,53,136,.98);\r\n  }\r\n/* Fallback for Edge\r\n  -------------------------------------------------- */\r\n@supports (-ms-ime-align: auto) {\r\n    .form-label-group>label {\r\n      display: none;\r\n    }\r\n    .form-label-group input::-ms-input-placeholder {\r\n      color: #777;\r\n    }\r\n  }\r\n/* Fallback for IE\r\n  -------------------------------------------------- */\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n    .form-label-group>label {\r\n      display: none;\r\n    }\r\n    .form-label-group input:-ms-input-placeholder {\r\n      color: #777;\r\n    }\r\n  }\r\n.icon{\r\n  position :absolute;\r\n  left:15px;\r\n  top: 3px;\r\n  padding: 9px 8px;\r\n  color: #969592 \r\n}\r\n.active-purple-4 input[type=email]:focus:not([readonly]) {\r\n  border: 1px solid rgba(129,53,136,.98);\r\n  box-shadow: 0 0 0 1px rgba(129,53,136,.98);\r\n  }\r\n.active-purple-4 input[type=password]:focus:not([readonly]) {\r\n  border: 1px solid rgba(129,53,136,.98);\r\n  box-shadow: 0 0 0 1px rgba(129,53,136,.98);\r\n}\r\n.active-purple-4 input[type=checkbox]:focus:not([writeonly]) {\r\n  border: 1px solid rgba(129,53,136,.98);\r\n  box-shadow: 0 0 0 1px rgba(129,53,136,.98);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluLWF1dGgvc2lnbmluLWF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7O0FBRXBCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkRBQTZEO0lBQzdELHVEQUF1RDtFQUN6RDtBQUVBO0lBQ0UsU0FBUztJQUNULG1CQUFtQjtJQUNuQiw4Q0FBOEM7RUFDaEQ7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFFQTtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFFQTs7SUFFRSxzREFBc0Q7RUFDeEQ7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsK0JBQStCO0VBQ2pDO0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFNQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLDRFQUE0RTtJQUM1RSxnREFBZ0Q7RUFDbEQ7QUFFQTtJQUNFLDZDQUE2QztJQUM3QyxnREFBZ0Q7SUFDaEQsZUFBZTtJQUNmLFdBQVc7RUFDYjtBQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QjtzQkFDa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjtBQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsVUFBVTtFQUNaO0FBRUE7SUFDRSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZjtFQUNGO0FBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFFQTtzREFDb0Q7QUFFcEQ7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0Y7QUFFQTtzREFDb0Q7QUFFcEQ7SUFFRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0Y7QUFHRjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQjtBQUNGO0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsMENBQTBDO0VBQzFDO0FBRUY7RUFDRSxzQ0FBc0M7RUFDdEMsMENBQTBDO0FBQzVDO0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsMENBQTBDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluLWF1dGgvc2lnbmluLWF1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItZGVmYXVsdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG5cclxufVxyXG46cm9vdCB7XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGQUYwO1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2MkU2LCAjMzNBRUZGKTsgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGRkFGMCwgI0ZGRkFGMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXNpZ25pbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXNpZ25pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNSByZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICsgdmFyKC0taW5wdXQtcGFkZGluZy15KSAqICgyIC8gMykpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1nb29nbGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNTtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDIyLjUgcmVtOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB3aWR0aDogOTIlO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWZhY2Vib29rIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHdpZHRoOiA5MiU7XHJcbiAgfVxyXG5cclxuICAuYnRuLWxvY3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB3aWR0aDogOTIlO1xyXG4gIH1cclxuXHJcbiAgLnJlbS1wd2R7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIC5yZHJjdC1yZWd7XHJcbiAgICBsaW5lLWhlaWdodDogNzAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjOTY5NTkyXHJcbiAgfVxyXG4gIC5yZHJjdC1yZWcgYXtcclxuICAgIGNvbG9yOiByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogRmFsbGJhY2sgZm9yIEVkZ2VcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gICAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBGYWxsYmFjayBmb3IgSUVcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksXHJcbiAgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcclxuICAgIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4uaWNvbntcclxuICBwb3NpdGlvbiA6YWJzb2x1dGU7XHJcbiAgbGVmdDoxNXB4O1xyXG4gIHRvcDogM3B4O1xyXG4gIHBhZGRpbmc6IDlweCA4cHg7XHJcbiAgY29sb3I6ICM5Njk1OTIgXHJcbn1cclxuXHJcbi5hY3RpdmUtcHVycGxlLTQgaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbiAgfVxyXG5cclxuLmFjdGl2ZS1wdXJwbGUtNCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI5LDUzLDEzNiwuOTgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxufVxyXG5cclxuLmFjdGl2ZS1wdXJwbGUtNCBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1czpub3QoW3dyaXRlb25seV0pIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOSw1MywxMzYsLjk4KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgxMjksNTMsMTM2LC45OCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/signin-auth/signin-auth.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signin-auth/signin-auth.component.ts ***!
  \******************************************************/
/*! exports provided: SigninAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninAuthComponent", function() { return SigninAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin-auth.service */ "./src/app/signin-auth/signin-auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user */ "./src/app/signin-auth/user.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");








let SigninAuthComponent = class SigninAuthComponent {
    constructor(OAuth, _http, router, formbuilder, loginService) {
        this.OAuth = OAuth;
        this._http = _http;
        this.router = router;
        this.formbuilder = formbuilder;
        this.loginService = loginService;
        //user:any;
        this.signup = false;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_6__["User"]();
    }
    socialLogIn(socialProvider) {
        let socialPlatformProvider;
        if (socialProvider === 'google') {
            socialPlatformProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID;
        }
        // } else if (socialProvider === 'google') {  
        //   socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
        // }  
        this.OAuth.signIn(socialPlatformProvider).then(user => {
            this.Loginresponse(user);
        });
    }
    Loginresponse(user) {
        this.loginService.loginresponse(user).subscribe((res) => {
            //this.response = res; 
            localStorage.setItem('token', res);
            this.router.navigate(['/jobs']);
        });
    }
    ngOnInit() {
        this.signinForm = this.formbuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
};
SigninAuthComponent.ctorParameters = () => [
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _signin_auth_service__WEBPACK_IMPORTED_MODULE_4__["SigninAuthService"] }
];
SigninAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin-auth',
        template: __webpack_require__(/*! raw-loader!./signin-auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/signin-auth/signin-auth.component.html"),
        styles: [__webpack_require__(/*! ./signin-auth.component.css */ "./src/app/signin-auth/signin-auth.component.css")]
    })
], SigninAuthComponent);



/***/ }),

/***/ "./src/app/signin-auth/signin-auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/signin-auth/signin-auth.service.ts ***!
  \****************************************************/
/*! exports provided: SigninAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninAuthService", function() { return SigninAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../information.service */ "./src/app/information.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let SigninAuthService = class SigninAuthService {
    constructor(_http, inforService, router) {
        this._http = _http;
        this.inforService = inforService;
        this.router = router;
    }
    loginresponse(responce) {
        this.url = 'http://localhost:5000/auth/login/';
        return this._http.post(this.url, responce);
        // .pipe(map((response: Response) => response.json()));
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate['/jobs'];
    }
    gettoken() {
        return localStorage.getItem('token');
    }
};
SigninAuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _information_service__WEBPACK_IMPORTED_MODULE_2__["InformationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SigninAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SigninAuthService);



/***/ }),

/***/ "./src/app/signin-auth/user.ts":
/*!*************************************!*\
  !*** ./src/app/signin-auth/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/signup-auth/signup-auth.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-auth/signup-auth.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1hdXRoL3NpZ251cC1hdXRoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/signup-auth/signup-auth.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-auth/signup-auth.component.ts ***!
  \******************************************************/
/*! exports provided: SignupAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupAuthComponent", function() { return SignupAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_auth_signin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signin-auth/signin-auth.service */ "./src/app/signin-auth/signin-auth.service.ts");





let SignupAuthComponent = class SignupAuthComponent {
    constructor(router, formbuilder, signinService) {
        this.router = router;
        this.formbuilder = formbuilder;
        this.signinService = signinService;
    }
    googleSignUp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.user = await this.signinService.googleLogin().toPromise();
        });
    }
    ngOnInit() {
    }
};
SignupAuthComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _signin_auth_signin_auth_service__WEBPACK_IMPORTED_MODULE_4__["SigninAuthService"] }
];
SignupAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-auth',
        template: __webpack_require__(/*! raw-loader!./signup-auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup-auth/signup-auth.component.html"),
        styles: [__webpack_require__(/*! ./signup-auth.component.css */ "./src/app/signup-auth/signup-auth.component.css")]
    })
], SignupAuthComponent);



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _signin_auth_signin_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin-auth/signin-auth.service */ "./src/app/signin-auth/signin-auth.service.ts");



let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(_signin_auth_signin_auth_service__WEBPACK_IMPORTED_MODULE_2__["SigninAuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.gettoken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptorService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CHAKKRIPAO\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map