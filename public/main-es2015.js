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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n    <!-- <div style=\"text-align:center\">\n      <h1>\n        Welcome to {{ title }}!\n      </h1>\n      <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    </div>\n    <h2>Here are some links to help you start: </h2>\n    <ul>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n      </li>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n      </li>\n      <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n      </li>\n    </ul> -->\n<app-top-bar></app-top-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container m-t-1'><div class='row'>\n    <div class='col-lg-3 col-md-4'>\n    <div class='card'>\n    <div class='card-block'>\n    <h3 class='card-header'>Offers</h3>\n    </div>\n    <ul class='list-group list-group-flush'>\n    <li class='list-group-item'>\n    <a class=\"card-link\" routerLink=\"/home/active\">active offers\n    </a></li>\n    <li class='list-group-item'>\n    <a class=\"card-link\" routerLink=\"/home/expired\">expired offers\n    </a></li>\n    <li class='list-group-item'>\n    <a class=\"card-link\" routerLink=\"/home/drafts\">proposed offers\n    </a></li>\n    </ul>\n    </div>\n    </div>\n    <div class='col-lg-3 col-md-4'>\n    <div class='card'>\n    <div class='card-block'>\n    <h3 class='card-header'>Inbound</h3>\n    </div>\n    <ul class='list-group list-group-flush'>\n    <li class='list-group-item'>\n    <a class=\"card-link\" routerLink=\"/inbound/inboundToConfirm\">inbound items\n    </a></li>\n    <li class='list-group-item'>\n    <a class=\"card-link\" routerLink=\"/inbound/inboundReported\">reported items\n    </a></li>\n    </ul>\n    </div>\n    </div>\n    <!-- <div class='col-lg-3 col-md-4'>\n    <div class='card'>\n    <div class='card-block'>\n    <h4 class='card-header'>Outbound</h4>\n    </div>\n    <ul class='list-group list-group-flush'>\n    <li class='list-group-item'>\n    <a class=\"card-link\" href=\"/shipments\">0 outbound shipments\n    </a></li>\n    </ul>\n    </div>\n    </div> -->\n    <!-- <div class='col-lg-3 col-md-4'>\n    <div class='card'>\n    <div class='card-block'>\n    <h4 class='card-title'>Payments</h4>\n    </div>\n    <ul class='list-group list-group-flush'>\n    <li class='list-group-item'>\n    <a class=\"card-link\" href=\"/payment_requests\">0 payment requests\n    </a></li>\n    </ul>\n    </div>\n    </div> -->\n    </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/groups-active-list/groups-active-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/groups-active-list/groups-active-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table\" id=\"GroupTable\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width:9%\">#</th>\n      <th scope=\"col\" style=\"width:60%\">Followers</th>\n      <th scope=\"col\" style=\"width:20%\">status</th>\n      <th scope=\"col\" style=\"width:11%\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let follower of followersList\">\n      <tr>\n        <th scopr=\"row\">{{ ('000' + follower.id).slice(-4) }}</th>\n        <td>\n          {{ follower.individual }}\n        </td>\n        <td>{{ statusLevel[follower.status] }}</td>\n        <td>\n          <div>\n            <button class=\"btn btn-primary btn-sm mb-1\">Edit</button>\n            <button class=\"btn btn-primary btn-sm\" *ngIf=\"!follower.status\">Approve</button>\n          </div>\n        </td>\n      </tr>\n    </ng-container>\n\n    <!-- <tr>\n        <th scope=\"row\">1</th>\n        <td>Mark</td>\n        <td>Active</td>\n        <td><button class=\"btn btn-primary btn-sm\">Edit</button></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">2</th>\n        <td>Jacob</td>\n        <td>Ask to follow</td>\n        <td><button class=\"btn btn-primary btn-sm\">Edit</button>\n        <button class=\"btn btn-primary btn-sm\">Accept</button></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">3</th>\n        <td>Larry</td>\n        <td>Blocked</td>\n        <td><button class=\"btn btn-primary btn-sm\">Edit</button></td>\n      </tr> -->\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/groups-blocked-list/groups-blocked-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/groups-blocked-list/groups-blocked-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "//TODO: add css to the following tables\n// TODO: modify the css between edit and approve\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width:9%\">#</th>\n      <th scope=\"col\" style=\"width:56%\">Followers</th>\n      <th scope=\"col\" style=\"width:15%\">status</th>\n      <th scope=\"col\" style=\"width:20%\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let follower of followersList\">\n      <tr>\n        <th scopr=\"row\">{{ ('000' + follower.id).slice(-4) }}</th>\n        <td>\n          {{ follower.individual }}\n        </td>\n        <td>{{ statusLevel[follower.status] }}</td>\n        <td>\n          <div>\n            <button class=\"btn btn-primary btn-sm\">Edit</button>\n            <button class=\"btn btn-primary btn-sm\">Reactive</button>\n          </div>\n        </td>\n      </tr>\n    </ng-container>\n\n    <!-- <tr>\n        <th scope=\"row\">1</th>\n        <td>Mark</td>\n        <td>Active</td>\n        <td><button class=\"btn btn-primary btn-sm\">Edit</button></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">2</th>\n        <td>Jacob</td>\n        <td>Ask to follow</td>\n        <td><button class=\"btn btn-primary btn-sm\">Edit</button>\n        <button class=\"btn btn-primary btn-sm\">Accept</button></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">3</th>\n        <td>Larry</td>\n        <td>Blocked</td>\n        <td><button class=\"btn btn-primary btn-sm\">Edit</button></td>\n      </tr> -->\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/groups-waiting-list/groups-waiting-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/groups-waiting-list/groups-waiting-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "//TODO: add css to the following tables\n// TODO: modify the css between edit and approve\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width:9%\">#</th>\n      <th scope=\"col\" style=\"width:56%\">Followers</th>\n      <th scope=\"col\" style=\"width:15%\">status</th>\n      <th scope=\"col\" style=\"width:20%\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let follower of followersList\">\n      <tr>\n        <th scopr=\"row\">{{ ('000' + follower.id).slice(-4) }}</th>\n        <td>\n          {{ follower.individual }}\n        </td>\n        <td>{{ statusLevel[follower.status] }}</td>\n        <td>\n          <div>\n            <button class=\"btn btn-primary btn-sm\">Edit</button>\n            <button class=\"btn btn-primary btn-sm\">Accepts</button>\n          </div>\n        </td>\n      </tr>\n    </ng-container>\n\n    <!-- <tr>\n        <th scope=\"row\">1</th>\n        <td>Mark</td>\n        <td>Active</td>\n        <td><button class=\"btn btn-primary btn-sm\">Edit</button></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">2</th>\n        <td>Jacob</td>\n        <td>Ask to follow</td>\n        <td><button class=\"btn btn-primary btn-sm\">Edit</button>\n        <button class=\"btn btn-primary btn-sm\">Accept</button></td>\n      </tr>\n      <tr>\n        <th scope=\"row\">3</th>\n        <td>Larry</td>\n        <td>Blocked</td>\n        <td><button class=\"btn btn-primary btn-sm\">Edit</button></td>\n      </tr> -->\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/groups.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/groups.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\" id=\"dealTabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n\n      <a\n        class=\"nav-link active\"\n        id=\"active-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"group_active\"\n        role=\"tab\"\n        aria-controls=\"active\"\n        aria-selected=\"true\"\n        >Active Followers</a\n      >\n    </li>\n    <!-- <li class=\"nav-item\">\n        <a\n          class=\"nav-link active\"\n          id=\"active-tab\"\n          data-toggle=\"tab\"\n          routerLink=\"active\"\n          role=\"tab\"\n          aria-controls=\"active\"\n          aria-selected=\"true\"\n          >Active Groups</a\n        >\n      </li> -->\n      <li class=\"nav-item\">\n          <a\n            class=\"nav-link active\"\n            id=\"active-tab\"\n            data-toggle=\"tab\"\n            routerLink=\"group_blocked\"\n            role=\"tab\"\n            aria-controls=\"active\"\n            aria-selected=\"true\"\n            >Blocked Followers</a\n          >\n        </li>\n        <li class=\"nav-item\">\n            <a\n              class=\"nav-link active\"\n              id=\"active-tab\"\n              data-toggle=\"tab\"\n              routerLink=\"group_waiting\"\n              role=\"tab\"\n              aria-controls=\"active\"\n              aria-selected=\"true\"\n              >Ask to Follow</a\n            >\n          </li>\n  </ul>\n  <br>\n    <form class=\"form-inline float-left my-2\">\n      <input\n        class=\"form-control mr-sm-2\"\n        type=\"search\"\n        placeholder=\"Search\"\n        aria-label=\"Search\"\n        id=\"groupSearchInput\"\n        (keyup)=\"search()\"\n      />\n    </form>\n    <div class=\"float-right my-2\">\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-success btn-block\"\n        data-toggle=\"modal\"\n        data-target=\"#createForm\"\n        data-whatever=\"@mdo\"\n      >\n        Invite\n      </button>\n    </div>\n  <div class=\"tab-content\" id=\"dealLists\">\n    <router-outlet></router-outlet>\n  </div>\n  <div\n    class=\"modal fade\"\n    id=\"createForm\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"createFrom\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"createFrom\">Product Create Form</h5>\n          <button\n            type=\"button\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"recipient-name\" class=\"col-form-label\"\n                >Recipient:</label\n              >\n              <input type=\"text\" class=\"form-control\" id=\"recipient-name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"message-text\" class=\"col-form-label\">Message:</label>\n              <textarea class=\"form-control\" id=\"message-text\"></textarea>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n            Close\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\">Send message</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home-active-deal-list/home-active-deal-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home-active-deal-list/home-active-deal-list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"privilege\">\n  <table class=\"table\" id=\"dealTable\">\n    <thead>\n      <tr>\n        <th scope=\"col\" style=\"width: 9%\">#</th>\n        <th scope=\"col\" style=\"width: 60%\">Deals</th>\n        <th scope=\"col\" style=\"width: 10%\">Price</th>\n        <th scope=\"col\" style=\"width: 12%\">Quantity</th>\n        <th scope=\"col\" style=\"width: 9%\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let deal of dealList\">\n        <tr>\n          <th scopr=\"row\">{{ ('000' + deal.id).slice(-4) }}</th>\n          <td>\n            {{ deal.product_name }}\n            <!-- <small>{{ deal.note }}</small> -->\n            <!-- <div [innerHTML]=\"text\">{{ deal.note }}</div> -->\n            <div class=\"mt-2\" style=\"font-size:smaller\" [innerHTML]=\" deal.note | linkify \"></div>\n            <!-- </ng-container> -->\n          </td>\n          <td>{{ deal.price }}</td>\n          <td>{{ deal.quantity }}</td>\n          <td><button class=\"btn btn-primary btn-sm\">Details</button></td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n\n<div *ngIf=\"!privilege\" class=\"pt-5\">\n  <ng-container *ngFor=\"let following of followingList\">\n    <hr />\n    <label for=\"followingOffers\" value=\"following.company\" id=\"#following\" style=\"font-size:20px\">Following: {{\n      following.company\n    }} :</label>\n\n    <table class=\"table\" id=\"dealTable\">\n      <thead>\n        <tr>\n          <th scope=\"col\" style=\"width: 9%\">#</th>\n          <th scope=\"col\" style=\"width: 60%\">Deals</th>\n          <th scope=\"col\" style=\"width: 10%\">Price</th>\n          <th scope=\"col\" style=\"width: 12%\">Quantity</th>\n          <th scope=\"col\" style=\"width: 9%\">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let deal of dealList; index as i\">\n          <tr>\n            <th scopr=\"row\">{{ ('000' + deal.id).slice(-4) }}</th>\n            <td>\n              <span>{{ deal.product_name }}</span>\n              <div class=\"mt-2\" style=\"font-size:smaller\" [innerHTML]=\" deal.note | linkify \"></div>\n            </td>\n            <td>{{ deal.price }}</td>\n            <td>{{ deal.quantity }}</td>\n            <!-- <td><button class=\"btn btn-primary btn-sm\">Take</button></td> -->\n            <td>\n              <button\n                id=\"{{ i }}\"\n                type=\"button\"\n                class=\"btn btn-outline-success btn-block btn-sm\"\n                data-toggle=\"modal\"\n                data-target=\"#takeForm\"\n                data-whatever=\"@mdo\"\n                *ngIf=\"!privilege\"\n                (click)=\"takeDeal(i)\"\n              >\n                Take\n              </button>\n            </td>\n            <div\n              class=\"modal fade\"\n              id=\"takeForm\"\n              tabindex=\"-1\"\n              role=\"dialog\"\n              aria-labelledby=\"exampleModalLabel\"\n              aria-hidden=\"true\"\n            >\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"formTitle\">Take an Deal</h5>\n                    <button\n                      type=\"button\"\n                      class=\"close\"\n                      data-dismiss=\"modal\"\n                      aria-label=\"Close\"\n                    >\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <form>\n                      <div class=\"form-group\">\n                        <label for=\"product\" class=\"col-form-label\"\n                          >product:</label\n                        >\n                        <p>{{ inbound.product }}</p>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"price\" class=\"col-form-label\">price:</label>\n                        <p>{{ inbound.price }}</p>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"quantity\" class=\"col-form-label\"\n                          >quantity:</label\n                        >\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"quantity\"\n                          name=\"quantity\"\n                          [(ngModel)]=\"inbound.quantity\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"warehouse\" class=\"col-form-label\"\n                          >warehouse:</label\n                        >\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"warehouse\"\n                          name=\"warehouse\"\n                          [(ngModel)]=\"inbound.warehouse\"\n                        />\n                      </div>\n                    </form>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-secondary\"\n                      data-dismiss=\"modal\"\n                    >\n                      Close\n                    </button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-primary\"\n                      (click)=\"createInbound()\"\n                      data-dismiss=\"modal\"\n                    >\n                      Take\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>Drafts Deals</h6>\n//TODO add drafts deals logic\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\">#</th>\n      <th scope=\"col\" style=\"width: 60%\">Deals</th>\n      <th scope=\"col\" style=\"width: 10%\">Price</th>\n      <th scope=\"col\" style=\"width: 12%\">Quantity</th>\n      <th scope=\"col\" style=\"width: 9%\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let activeDeal of activeDealList\">\n      <tr>\n        <th scopr=\"row\">{{ ('000' + activeDeal.dealId).slice(-4) }}</th>\n        <td>\n          <div>\n            {{ activeDeal.title }}\n            <br />\n            <br />\n            {{ activeDeal.description }}\n            <br />\n            <br />\n            <div *ngFor=\"let link of activeDeal.deallinks\">\n              <div *ngIf=\"link.linkName\">Link Label: {{ link.linkName }}</div>\n              <a href=\"\" (click)=\"goToLink(link.link)\">{{ link.link }}</a>\n              <br />\n            </div>\n            <!-- </ng-container> -->\n          </div>\n        </td>\n        <td>{{ activeDeal.price }}</td>\n        <td>{{ activeDeal.quantity }}</td>\n        <td><button class=\"btn btn-primary btn-sm\">Take</button></td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home-expired-deal-list/home-expired-deal-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home-expired-deal-list/home-expired-deal-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>Expired Deals</h6>\n//TODO add drafts deals logic\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\">#</th>\n      <th scope=\"col\" style=\"width: 60%\">Deals</th>\n      <th scope=\"col\" style=\"width: 10%\">Price</th>\n      <th scope=\"col\" style=\"width: 12%\">Quantity</th>\n      <th scope=\"col\" style=\"width: 9%\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let activeDeal of activeDealList\">\n      <tr>\n        <th scopr=\"row\">{{ ('000' + activeDeal.dealId).slice(-4) }}</th>\n        <td>\n          <div>\n            {{ activeDeal.title }}\n            <br />\n            <br />\n            {{ activeDeal.description }}\n            <br />\n            <br />\n            <div *ngFor=\"let link of activeDeal.deallinks\">\n              <div *ngIf=\"link.linkName\">Link Label: {{ link.linkName }}</div>\n              <a href=\"\" (click)=\"goToLink(link.link)\">{{ link.link }}</a>\n              <br />\n            </div>\n            <!-- </ng-container> -->\n          </div>\n        </td>\n        <td>{{ activeDeal.price }}</td>\n        <td>{{ activeDeal.quantity }}</td>\n        <td><button class=\"btn btn-primary btn-sm\">Take</button></td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>Favorite Deals</h6>\n//TODO add drafts deals logic\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\">#</th>\n      <th scope=\"col\" style=\"width: 60%\">Deals</th>\n      <th scope=\"col\" style=\"width: 10%\">Price</th>\n      <th scope=\"col\" style=\"width: 12%\">Quantity</th>\n      <th scope=\"col\" style=\"width: 9%\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let activeDeal of activeDealList\">\n      <tr>\n        <th scopr=\"row\">{{ ('000' + activeDeal.dealId).slice(-4) }}</th>\n        <td>\n          <div>\n            {{ activeDeal.title }}\n            <br />\n            <br />\n            {{ activeDeal.description }}\n            <br />\n            <br />\n            <div *ngFor=\"let link of activeDeal.deallinks\">\n              <div *ngIf=\"link.linkName\">Link Label: {{ link.linkName }}</div>\n              <a href=\"\" (click)=\"goToLink(link.link)\">{{ link.link }}</a>\n              <br />\n            </div>\n            <!-- </ng-container> -->\n          </div>\n        </td>\n        <td>{{ activeDeal.price }}</td>\n        <td>{{ activeDeal.quantity }}</td>\n        <td><button class=\"btn btn-primary btn-sm\">Take</button></td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{ deal | json }}\n{{ selectProduct }}\n{{month}} -->\n<div class=\"container\">\n  <ul class=\"nav nav-tabs\" id=\"dealTabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link active\"\n        id=\"active-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"active\"\n        role=\"tab\"\n        aria-controls=\"active\"\n        aria-selected=\"true\"\n        >Active Deals</a\n      >\n    </li>\n    <!-- <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        id=\"expired-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"expired\"\n        role=\"tab\"\n        aria-controls=\"expired\"\n        aria-selected=\"false\"\n        >Expired Deals</a\n      >\n    </li>\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        id=\"favorite-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"favorite\"\n        role=\"tab\"\n        aria-controls=\"favorite\"\n        aria-selected=\"false\"\n        >Favorite Deals</a\n      >\n    </li>\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        id=\"drafts-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"drafts\"\n        role=\"tab\"\n        aria-controls=\"drafts\"\n        aria-selected=\"false\"\n        *ngIf=\"privilege\"\n        >Drafts Deals</a\n      >\n    </li> -->\n  </ul>\n  <br>\n    <form class=\"float-left my-2\">\n      <input\n        class=\"form-control mr-sm-2\"\n        type=\"text\"\n        placeholder=\"Search\"\n        aria-label=\"Search\"\n        id=\"searchInput\"\n        (keyup)=\"search()\"\n      />\n    </form>\n    <div class=\"float-right my-2\">\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-success btn-block\"\n        data-toggle=\"modal\"\n        data-target=\"#createForm\"\n        data-whatever=\"@mdo\"\n        *ngIf=\"privilege\"\n      >\n        Create\n      </button>\n    </div>\n\n  <div class=\"tab-content\" id=\"dealLists\">\n    <router-outlet></router-outlet>\n  </div>\n  <div\n    class=\"modal fade\"\n    id=\"createForm\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"createFrom\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"createFrom\">Deal Create Form</h5>\n          <button\n            type=\"button\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"deal-product\" class=\"col-form-label\">Product:</label>\n              <select\n                class=\"selectpicker form-control\"\n                data-live-search=\"true\"\n                name=\"product\"\n                [(ngModel)]=\"selectProduct\"\n                (ngModelChange)=\"setProductNameId()\"\n              >\n                <option\n                  *ngFor=\"let nameid of productList\"\n                  name=\"productsId\"\n                  [ngValue]=\"nameid\"\n                >\n                  {{ nameid.name }}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"deal-price\" class=\"col-form-label\">Price:</label>\n              <input type=\"text\" class=\"form-control\" id=\"deal-price\" name=\"price\" [(ngModel)]=\"deal.price\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"deal-quantity\" class=\"col-form-label\"\n                >Quantity:</label\n              >\n              <input type=\"number\" class=\"form-control\" id=\"deal-quantity\" name=\"quantity\" [(ngModel)]=\"deal.quantity\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"deal-expires\" class=\"col-form-label\"\n                >Expires At:</label\n              >\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <select\n                    class=\"custom-select d-block w-100\"\n                    id=\"month\"\n                    name=\"month\"\n                    [(ngModel)]=\"month\"\n                    required\n                  >\n                    <option>January</option>\n                    <option>February</option>\n                    <option>March</option>\n                    <option>April</option>\n                    <option>May</option>\n                    <option>June</option>\n                    <option>July</option>\n                    <option>August</option>\n                    <option>September</option>\n                    <option>October</option>\n                    <option>November</option>\n                    <option>December</option>\n                  </select>\n                </div>\n                <div class=\"col-md-2\">\n                  <select\n                    class=\"custom-select d-block w-100\"\n                    id=\"days\"\n                    name=\"days\"\n                    [(ngModel)]=\"days\"\n                    required\n                  >\n                    <option value=\"\">1</option>\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                    <option>5</option>\n                    <option>6</option>\n                    <option>7</option>\n                    <option>8</option>\n                    <option>9</option>\n                    <option>10</option>\n                    <option>11</option>\n                    <option>12</option>\n                    <option>13</option>\n                    <option>14</option>\n                    <option>15</option>\n                    <option>16</option>\n                    <option>17</option>\n                    <option>18</option>\n                    <option>19</option>\n                    <option>20</option>\n                    <option>21</option>\n                    <option>22</option>\n                    <option>23</option>\n                    <option>24</option>\n                    <option>25</option>\n                    <option>26</option>\n                    <option>27</option>\n                    <option>28</option>\n                    <option>29</option>\n                    <option>30</option>\n                    <option>31</option>\n                  </select>\n                </div>\n                <div class=\"col-md-2\">\n                  <select\n                    class=\"custom-select d-block w-100\"\n                    id=\"years\"\n                    name=\"year\"\n                    [(ngModel)]=\"year\"\n                    required\n                  >\n                    <option value=\"\">2014</option>\n                    <option>2014</option>\n                    <option>2015</option>\n                    <option>2016</option>\n                    <option>2017</option>\n                    <option>2018</option>\n                    <option>2019</option>\n                    <option>2020</option>\n                    <option>2021</option>\n                    <option>2022</option>\n                    <option>2023</option>\n                    <option>2024</option>\n                  </select>\n                </div>\n                <div class=\"col-md-2\">\n                  <select\n                    class=\"custom-select d-block w-100\"\n                    id=\"hours\"\n                    name=\"hour\"\n                    [(ngModel)]=\"hour\"\n                    required\n                  >\n                    <option value=\"\">00</option>\n                    <option>00</option>\n                    <option>01</option>\n                    <option>02</option>\n                    <option>03</option>\n                    <option>04</option>\n                    <option>05</option>\n                    <option>06</option>\n                    <option>07</option>\n                    <option>08</option>\n                    <option>09</option>\n                    <option>10</option>\n                    <option>11</option>\n                    <option>12</option>\n                    <option>13</option>\n                    <option>14</option>\n                    <option>15</option>\n                    <option>16</option>\n                    <option>17</option>\n                    <option>19</option>\n                    <option>20</option>\n                    <option>21</option>\n                    <option>22</option>\n                    <option>23</option>\n                  </select>\n                </div>\n                <div class=\"col-md-2\">\n                  <select\n                    class=\"custom-select d-block w-100\"\n                    id=\"minutes\"\n                    name=\"minutes\"\n                    [(ngModel)]=\"minutes\"\n                    required\n                  >\n                    <option value=\"\">00</option>\n                    <option>00</option>\n                    <option>01</option>\n                    <option>02</option>\n                    <option>03</option>\n                    <option>04</option>\n                    <option>05</option>\n                    <option>06</option>\n                    <option>07</option>\n                    <option>08</option>\n                    <option>09</option>\n                    <option>10</option>\n                    <option>11</option>\n                    <option>12</option>\n                    <option>13</option>\n                    <option>14</option>\n                    <option>15</option>\n                    <option>16</option>\n                    <option>17</option>\n                    <option>19</option>\n                    <option>20</option>\n                    <option>21</option>\n                    <option>22</option>\n                    <option>23</option>\n                    <option>24</option>\n                    <option>25</option>\n                    <option>26</option>\n                    <option>27</option>\n                    <option>28</option>\n                    <option>29</option>\n                    <option>30</option>\n                    <option>31</option>\n                    <option>32</option>\n                    <option>33</option>\n                    <option>34</option>\n                    <option>35</option>\n                    <option>36</option>\n                    <option>37</option>\n                    <option>38</option>\n                    <option>39</option>\n                    <option>40</option>\n                    <option>41</option>\n                    <option>42</option>\n                    <option>43</option>\n                    <option>44</option>\n                    <option>45</option>\n                    <option>46</option>\n                    <option>47</option>\n                    <option>48</option>\n                    <option>49</option>\n                    <option>50</option>\n                    <option>51</option>\n                    <option>52</option>\n                    <option>53</option>\n                    <option>54</option>\n                    <option>55</option>\n                    <option>56</option>\n                    <option>57</option>\n                    <option>58</option>\n                    <option>59</option>\n                  </select>\n                </div>\n              </div>\n              By default, expires in 3 days.\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product-Note\" class=\"col-form-label\">Note:</label>\n              <textarea\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-note\"\n                cols=\"30\"\n                rows=\"5\"\n                name=\"note\"\n                [(ngModel)]=\"deal.note\"\n              ></textarea>\n            </div>\n            <!-- <div class=\"form-group\">\n              <label for=\"deal-bonus\" class=\"col-form-label\">Bonus:</label>\n              <input type=\"text\" class=\"form-control\" id=\"deal-bonus\" name=\"bonus\" [(ngModel)]=\"deal.bonus\"/>\n              Give bonus for inbound items to self storages.\n            </div> -->\n            <div class=\"form-check\">\n              <input\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                value=\"\"\n                id=\"deal-service-tag\"\n                name=\"serviceTag\"\n                [(ngModel)]=\"deal.serviceTag\"\n              />\n              <label class=\"form-check-label\" for=\"deal-service-tag\">\n                Service Tag\n              </label>\n            </div>\n            Require service tags when members comfirm inbound items.\n            <hr />\n            <div class=\"form-check form-check-inline\">\n              <input\n                class=\"form-check-input\"\n                type=\"radio\"\n                name=\"public\"\n                id=\"publicRadio\"\n                value=\"true\"\n                name=\"dealPublic\"\n                [(ngModel)]=\"deal.dealPublic\"\n\n              />\n              <label class=\"form-check-label\" for=\"publicRadio\">Public</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input\n                class=\"form-check-input\"\n                type=\"radio\"\n                name=\"public\"\n                id=\"privateRadio\"\n                value=\"false\"\n                name=\"dealPriate\"\n                [(ngModel)]=\"deal.dealPublic\"\n              />\n              <label class=\"form-check-label\" for=\"PrivateRadio\">Private</label>\n            </div>\n            <hr />\n            Every member can see public offers. Only selected users can see\n            private offers.\n            <br />\n            <br />\n            <div class=\"form-check\">\n              <input\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                value=\"\"\n                id=\"notify\"\n                name=\"notify\"\n                [(ngModel)]=\"deal.notify\"\n              />\n              <label class=\"form-check-label\" for=\"notify\">\n                Notify everyone who can see the offer\n              </label>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n            Close\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"create()\" data-dismiss=\"modal\">Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inbound/history-list/history-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inbound/history-list/history-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\">#</th>\n      <th scope=\"col\" style=\"width: 42%\">Inbound</th>\n      <th scope=\"col\" style=\"width: 10%\">Price</th>\n      <th scope=\"col\" style=\"width: 12%\">Quantity</th>\n      <th scope=\"col\" style=\"width: 9\">WareHouse</th>\n      <th scope=\"col\" style=\"width: 9\">LastUpdate</th>\n      <th scope=\"col\" style=\"width: 9%\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let deal of dealList\">\n      <tr>\n        <th scopr=\"row\">{{ ('000' + deal.id).slice(-4) }}</th>\n        <td>\n          <div>\n            {{ deal.product_name }}\n            <br />\n            {{ deal.note }}\n            <!-- </ng-container> -->\n          </div>\n        </td>\n        <td>{{ deal.price }}</td>\n        <td>{{ deal.quantity }}</td>\n        <td><button class=\"btn btn-primary btn-sm\">Take</button></td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inbound/inbound.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inbound/inbound.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\" id=\"inboundTabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link active\"\n        id=\"active-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"inboundToConfirm\"\n        role=\"tab\"\n        aria-controls=\"active\"\n        aria-selected=\"true\"\n        >To Confirm</a\n      >\n    </li>\n    <!-- <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        id=\"expired-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"inboundReported\"\n        role=\"tab\"\n        aria-controls=\"expired\"\n        aria-selected=\"false\"\n        >Report</a\n      >\n    </li>\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        id=\"favorite-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"inboundHistory\"\n        role=\"tab\"\n        aria-controls=\"favorite\"\n        aria-selected=\"false\"\n        >Inbound History</a\n      >\n    </li> -->\n  </ul>\n  <br>\n  <div>\n    <form class=\"float-left my-2\">\n      <input\n        class=\"form-control mr-sm-2\"\n        type=\"search\"\n        placeholder=\"Search\"\n        aria-label=\"Search\"\n        id=\"inboundSearchInput\"\n        (keyup)=\"search()\"\n      />\n    </form>\n  </div>\n  <div class=\"tab-content\" id=\"inboundLists\">\n    <router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inbound/reported-list/reported-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inbound/reported-list/reported-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\">#</th>\n      <th scope=\"col\" style=\"width: 42%\">Inbound</th>\n      <th scope=\"col\" style=\"width: 10%\">Price</th>\n      <th scope=\"col\" style=\"width: 12%\">Quantity</th>\n      <th scope=\"col\" style=\"width: 9\">WareHouse</th>\n      <th scope=\"col\" style=\"width: 9\">LastUpdate</th>\n      <th scope=\"col\" style=\"width: 9%\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let deal of dealList\">\n      <tr>\n        <th scopr=\"row\">{{ ('000' + deal.id).slice(-4) }}</th>\n        <td>\n          <div>\n            {{ deal.product_name }}\n            <br />\n            {{ deal.note }}\n            <!-- </ng-container> -->\n          </div>\n        </td>\n        <td>{{ deal.price }}</td>\n        <td>{{ deal.quantity }}</td>\n        <td><button class=\"btn btn-primary btn-sm\">Take</button></td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inbound/to-confirm-list/to-confirm-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inbound/to-confirm-list/to-confirm-list.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" id=\"inboundTable\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\">#</th>\n      <th scope=\"col\" style=\"width: 30%\">Inbound</th>\n      <th scope=\"col\" style=\"width: 12%\" *ngIf=\"privilege\">From</th>\n      <th scope=\"col\" style=\"width: 10%\">Price</th>\n      <th scope=\"col\" style=\"width: 12%\">Quantity</th>\n      <th scope=\"col\" style=\"width: 9\">WareHouse</th>\n      <th scope=\"col\" style=\"width: 9\">LastUpdate</th>\n      <th scope=\"col\" style=\"width: 9%\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let record of recordList\">\n      <tr>\n        <th scopr=\"row\">{{ ('000' + record.id).slice(-4) }}</th>\n        <td>\n          <div>\n            {{ record.product }}\n            <!-- </ng-container> -->\n          </div>\n        </td>\n        <td *ngIf=\"privilege\">{{ record.individual }}</td>\n        <td *ngIf=\"!privilege\">{{ record.individual }}</td>\n        <td>{{ record.price }}</td>\n        <td>{{ record.quantity }}</td>\n        <td>{{ record.warehouse }}</td>\n        <td>{{ record.updatedAt }}</td>\n        <td>\n          <button class=\"btn btn-primary btn-sm mb-2\" *ngIf=\"!privilege\">\n            Confirm\n          </button>\n          <button class=\"btn btn-primary btn-sm mb-2\" *ngIf=\"privilege\">\n            Confirm\n          </button>\n          <button class=\"btn btn-primary btn-sm\">Cancel</button>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products-active-list/products-active-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products-active-list/products-active-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" id=\"productTable\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\">#</th>\n      <th scope=\"col\" style=\"width: 80%\">Products</th>\n      <th scope=\"col\" style=\"width: 11%\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let activeProducts of activeProductsList\">\n      <tr>\n        <th scopr=\"row\">{{ ('000' + activeProducts.id).slice(-4) }}</th>\n        <td>\n          {{ activeProducts.name }}\n        </td>\n        <td>\n          <button class=\"btn btn-primary btn-sm mb-1\">Details</button>\n          <button class=\"btn btn-primary btn-sm\">Edit</button>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\" id=\"dealTabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link active\"\n        id=\"active-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"product_active\"\n        role=\"tab\"\n        aria-controls=\"active\"\n        aria-selected=\"true\"\n        >Active Products</a\n      >\n    </li>\n  </ul>\n  <br>\n    <form class=\"float-left my-2\">\n      <input\n        class=\"form-control\"\n        type=\"search\"\n        placeholder=\"Search\"\n        aria-label=\"Search\"\n        id=\"productSearchInput\"\n        (keyup)=\"search()\"\n      />\n    </form>\n    <div class=\"float-right my-2\">\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-success btn-block\"\n        data-toggle=\"modal\"\n        data-target=\"#createForm\"\n        data-whatever=\"@mdo\"\n      >\n        Create\n      </button>\n  </div>\n  <div class=\"tab-content\" id=\"productsLists\">\n    <router-outlet></router-outlet>\n  </div>\n  <div\n    class=\"modal fade\"\n    id=\"createForm\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"createFrom\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"createFrom\">Product Create Form</h5>\n          <button\n            type=\"button\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"product-name\" class=\"col-form-label\">Name:</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-name\"\n                name=\"name\"\n                [(ngModel)]=\"product.name\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product-condition\" class=\"col-form-label\"\n                >Condition:</label\n              >\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-condition\"\n                name=\"condition\"\n                [(ngModel)]=\"product.condition\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product-price\" class=\"col-form-label\">Price:</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-price\"\n                name=\"msrp\"\n                [(ngModel)]=\"product.msrp\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product-asin\" class=\"col-form-label\">ASIN:</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-asin\"\n                name=\"asin\"\n                [(ngModel)]=\"product.asin\"\n              />\n              Each ASIN consists of 10 alphanumerics. Search listings with the\n              same ASINs.\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"product-upc\" class=\"col-form-label\">UPC:</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"product-upc\"\n                  name=\"upc\"\n                  [(ngModel)]=\"product.upc\"\n                />\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"product-weight\" class=\"col-form-label\"\n                  >Weight:</label\n                >\n                <input type=\"text\" class=\"form-control\" id=\"product-weight\" name=\"weight\" [(ngModel)]=\"product.weight\"/>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product-Note\" class=\"col-form-label\">Note:</label>\n              <textarea\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-note\"\n                cols=\"30\"\n                rows=\"10\"\n                name=\"note\"\n                [(ngModel)]=\"product.note\"\n              ></textarea>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n            Close\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"create()\" data-dismiss=\"modal\">Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-bar/top-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\"\n>\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\"><a routerLink=\"/\">Demo</a></h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"p-2 text-dark\" routerLink=\"/signin\" *ngIf=\"!currentUser\"\n      >Sign in</a\n    >\n    <a\n    class=\"p-2 text-dark\"\n    routerLink=\"/dashboard\"\n    *ngIf=\"currentUser\"\n    >DashBoard</a\n  >\n    <a\n      class=\"p-2 text-dark\"\n      routerLink=\"/home\"\n      *ngIf=\"currentUser\"\n      >Deal</a\n    >\n    <a\n    class=\"p-2 text-dark\"\n    routerLink=\"/inbound\"\n    *ngIf=\"currentUser\"\n    >Inbound</a\n  >\n    <a\n      class=\"p-2 text-dark\"\n      routerLink=\"/products\"\n      *ngIf=\"company\"\n      >Product</a\n    >\n    <a\n      class=\"p-2 text-dark\"\n      routerLink=\"/groups\"\n      *ngIf=\"company\"\n      >Groups</a\n    >\n  </nav>\n  <a class=\"btn btn-outline-primary\" routerLink=\"/register\" *ngIf=\"!currentUser\"\n    >Register</a\n  >\n  <a class=\"btn btn-outline-primary\" *ngIf=\"currentUser\" (click)=\"logout()\"\n    >Log out</a\n  >\n</div>\n<div id='flush-block' class=\"container\">\n    <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"company\">\n        You Signed In As a Member of Company\n      </div>\n      <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"individual\">\n          You Signed In As an Individual\n        </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user_components/register-form/register-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user_components/register-form/register-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"registerFromController\">\n  <div class=\"text-center mb-4\">\n    <img class=\"mb-4\" src=\"./assets/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\" />\n  </div>\n  <form class=\"form-signin\" (ngSubmit)=\"user_register()\" #registerFrom=\"ngForm\">\n    <div class=\"alert alert-primary\" role=\"alert\" *ngIf=\"isRegistered\">\n      You have successfully registered!\n      <br />\n      <a class=\"alert-link\" routerLink=\"/signin\">Click here back to sign in</a>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\"\n      *ngIf=\"!pwdValid() && !password.pristine && !ConfirmedPassword.pristine\">\n      Password and Confirmed Password are not match!\n    </div>\n    <div class=\"form-label-group\">\n      <input type=\"text\" class=\"form-control\" id=\"FirstName\" required autofocus [(ngModel)]=\"register.FirstName\"\n        name=\"FirstName\" #FirstName=\"ngModel\" />\n      <label for=\"FirstName\">First Name</label>\n    </div>\n    <div class=\"form-label-group\">\n      <input type=\"text\" class=\"form-control\" id=\"LastName\" required autofocus [(ngModel)]=\"register.LastName\"\n        name=\"LastName\" />\n      <label for=\"inputLastName\">Last Name</label>\n    </div>\n    <div class=\"form-label-group\">\n      <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" required autofocus [(ngModel)]=\"register.email\"\n        ngModel email #email=\"ngModel\" />\n      <label for=\"inputEmail\">Email</label>\n      <small class=\"form-text text-muted\">* Required</small>\n    </div>\n    <div class=\"form-label-group\">\n      <input type=\"password\" class=\"form-control\" id=\"password\" required autofocus [(ngModel)]=\"register.password\"\n        name=\"password\" #password=\"ngModel\" />\n      <label for=\"password\">Password</label>\n      <small class=\"form-text text-muted\">* Required</small>\n    </div>\n    <div class=\"form-label-group\">\n      <input type=\"password\" class=\"form-control\" id=\"ConfirmedPassword\" required autofocus\n        [(ngModel)]=\"confirmedPassword\" name=\"confirmedPassword\" #ConfirmedPassword=\"ngModel\" [(ngModel)]=\"confirmedPassword\"/>\n      <label for=\"ConfirmedPassword\">Confirmed Password</label>\n      <small class=\"form-text text-muted\">* Required</small>\n    </div>\n    <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!pwdValid()\" type=\"submit\">\n      Register\n    </button>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" routerLink=\"/signin\">\n        Back to Sign in\n      </button>\n  </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user_components/sign-in-form/sign-in-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user_components/sign-in-form/sign-in-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"signInFormController\" *ngIf=\"!currentUser\">\n  <form class=\"form-signin\" (ngSubmit)=\"onSubmit()\" #userForm=\"ngForm\">\n    <div class=\"text-center mb-4\">\n      <img\n        class=\"mb-4\"\n        src=\"./assets/bootstrap-solid.svg\"\n        alt=\"image\"\n        width=\"72\"\n        height=\"72\"\n      />\n    </div>\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"error\">\n        {{ error }}\n    </div>\n    <div class=\"form-label-group\">\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"email\"\n        required\n        [(ngModel)]=\"user.email\"\n        name=\"email\"\n        #email=\"ngModel\"\n      />\n      <label for=\"inputEmail\">Email address</label>\n    </div>\n    <div class=\"form-label-group\">\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"password\"\n        required\n        [(ngModel)]=\"user.password\"\n        name=\"password\"\n        #password=\"ngModel\"\n      />\n      <label for=\"inputPassword\">Password</label>\n    </div>\n    <div class=\"checkbox mb-3\">\n      <label> <input type=\"checkbox\" value=\"remember-me\" /> Remember me </label>\n    </div>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n      Sign in\n    </button>\n  </form>\n</div>\n"

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
/* harmony import */ var _user_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user_components/register-form/register-form.component */ "./src/app/user_components/register-form/register-form.component.ts");
/* harmony import */ var _user_components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user_components/sign-in-form/sign-in-form.component */ "./src/app/user_components/sign-in-form/sign-in-form.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _home_home_active_deal_list_home_active_deal_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home-active-deal-list/home-active-deal-list.component */ "./src/app/home/home-active-deal-list/home-active-deal-list.component.ts");
/* harmony import */ var _home_home_expired_deal_list_home_expired_deal_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home-expired-deal-list/home-expired-deal-list.component */ "./src/app/home/home-expired-deal-list/home-expired-deal-list.component.ts");
/* harmony import */ var _home_home_favorite_deal_list_home_favorite_deal_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home-favorite-deal-list/home-favorite-deal-list.component */ "./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.ts");
/* harmony import */ var _home_home_drafts_deal_list_home_drafts_deal_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home-drafts-deal-list/home-drafts-deal-list.component */ "./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_products_active_list_products_active_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/products-active-list/products-active-list.component */ "./src/app/products/products-active-list/products-active-list.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _groups_groups_active_list_groups_active_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./groups/groups-active-list/groups-active-list.component */ "./src/app/groups/groups-active-list/groups-active-list.component.ts");
/* harmony import */ var _groups_groups_blocked_list_groups_blocked_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./groups/groups-blocked-list/groups-blocked-list.component */ "./src/app/groups/groups-blocked-list/groups-blocked-list.component.ts");
/* harmony import */ var _groups_groups_waiting_list_groups_waiting_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./groups/groups-waiting-list/groups-waiting-list.component */ "./src/app/groups/groups-waiting-list/groups-waiting-list.component.ts");
/* harmony import */ var _inbound_inbound_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inbound/inbound.component */ "./src/app/inbound/inbound.component.ts");
/* harmony import */ var _inbound_to_confirm_list_to_confirm_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./inbound/to-confirm-list/to-confirm-list.component */ "./src/app/inbound/to-confirm-list/to-confirm-list.component.ts");
/* harmony import */ var _inbound_reported_list_reported_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./inbound/reported-list/reported-list.component */ "./src/app/inbound/reported-list/reported-list.component.ts");
/* harmony import */ var _inbound_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./inbound/history-list/history-list.component */ "./src/app/inbound/history-list/history-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






















const routes = [
    {
        path: 'dashboard',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"]
    },
    {
        path: 'register',
        component: _user_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_3__["RegisterFormComponent"]
    },
    {
        path: 'signin',
        component: _user_components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_4__["SignInFormComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: '', component: _home_home_active_deal_list_home_active_deal_list_component__WEBPACK_IMPORTED_MODULE_7__["HomeActiveDealListComponent"] },
            { path: 'active', component: _home_home_active_deal_list_home_active_deal_list_component__WEBPACK_IMPORTED_MODULE_7__["HomeActiveDealListComponent"] },
            { path: 'expired', component: _home_home_expired_deal_list_home_expired_deal_list_component__WEBPACK_IMPORTED_MODULE_8__["HomeExpiredDealListComponent"] },
            { path: 'favorite', component: _home_home_favorite_deal_list_home_favorite_deal_list_component__WEBPACK_IMPORTED_MODULE_9__["HomeFavoriteDealListComponent"] },
            { path: 'drafts', component: _home_home_drafts_deal_list_home_drafts_deal_list_component__WEBPACK_IMPORTED_MODULE_10__["HomeDraftsDealListComponent"] }
        ]
    },
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: 'product_active', component: _products_products_active_list_products_active_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductsActiveListComponent"] },
            { path: '', component: _products_products_active_list_products_active_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductsActiveListComponent"] }
        ]
    },
    {
        path: 'groups',
        component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_13__["GroupsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: 'group_blocked', component: _groups_groups_blocked_list_groups_blocked_list_component__WEBPACK_IMPORTED_MODULE_15__["GroupsBlockedListComponent"] },
            { path: 'group_active', component: _groups_groups_active_list_groups_active_list_component__WEBPACK_IMPORTED_MODULE_14__["GroupsActiveListComponent"] },
            { path: 'group_waiting', component: _groups_groups_waiting_list_groups_waiting_list_component__WEBPACK_IMPORTED_MODULE_16__["GroupsWaitingListComponent"] },
            { path: '', component: _groups_groups_active_list_groups_active_list_component__WEBPACK_IMPORTED_MODULE_14__["GroupsActiveListComponent"] }
        ]
    },
    {
        path: 'inbound',
        component: _inbound_inbound_component__WEBPACK_IMPORTED_MODULE_17__["InboundComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _inbound_to_confirm_list_to_confirm_list_component__WEBPACK_IMPORTED_MODULE_18__["ToConfirmListComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: 'inboundToConfirm',
                component: _inbound_to_confirm_list_to_confirm_list_component__WEBPACK_IMPORTED_MODULE_18__["ToConfirmListComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: 'inboundReported',
                component: _inbound_reported_list_reported_list_component__WEBPACK_IMPORTED_MODULE_19__["ReportedListComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: 'inboundHistory',
                component: _inbound_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_20__["HistoryListComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            }
        ]
    },
    { path: '**', redirectTo: 'signin' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'mean-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _user_components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user_components/sign-in-form/sign-in-form.component */ "./src/app/user_components/sign-in-form/sign-in-form.component.ts");
/* harmony import */ var _user_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user_components/register-form/register-form.component */ "./src/app/user_components/register-form/register-form.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptor/error.interceptor */ "./src/app/interceptor/error.interceptor.ts");
/* harmony import */ var _home_home_active_deal_list_home_active_deal_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home-active-deal-list/home-active-deal-list.component */ "./src/app/home/home-active-deal-list/home-active-deal-list.component.ts");
/* harmony import */ var _home_home_expired_deal_list_home_expired_deal_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home-expired-deal-list/home-expired-deal-list.component */ "./src/app/home/home-expired-deal-list/home-expired-deal-list.component.ts");
/* harmony import */ var _home_home_favorite_deal_list_home_favorite_deal_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home-favorite-deal-list/home-favorite-deal-list.component */ "./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.ts");
/* harmony import */ var _home_home_drafts_deal_list_home_drafts_deal_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home-drafts-deal-list/home-drafts-deal-list.component */ "./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_products_active_list_products_active_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./products/products-active-list/products-active-list.component */ "./src/app/products/products-active-list/products-active-list.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _groups_groups_active_list_groups_active_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./groups/groups-active-list/groups-active-list.component */ "./src/app/groups/groups-active-list/groups-active-list.component.ts");
/* harmony import */ var _groups_groups_blocked_list_groups_blocked_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./groups/groups-blocked-list/groups-blocked-list.component */ "./src/app/groups/groups-blocked-list/groups-blocked-list.component.ts");
/* harmony import */ var _groups_groups_waiting_list_groups_waiting_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./groups/groups-waiting-list/groups-waiting-list.component */ "./src/app/groups/groups-waiting-list/groups-waiting-list.component.ts");
/* harmony import */ var _inbound_inbound_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./inbound/inbound.component */ "./src/app/inbound/inbound.component.ts");
/* harmony import */ var _inbound_to_confirm_list_to_confirm_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./inbound/to-confirm-list/to-confirm-list.component */ "./src/app/inbound/to-confirm-list/to-confirm-list.component.ts");
/* harmony import */ var _inbound_reported_list_reported_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./inbound/reported-list/reported-list.component */ "./src/app/inbound/reported-list/reported-list.component.ts");
/* harmony import */ var _inbound_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./inbound/history-list/history-list.component */ "./src/app/inbound/history-list/history-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./custom-pipes/linkify.pipe */ "./src/app/custom-pipes/linkify.pipe.ts");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"],
            _user_components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_8__["SignInFormComponent"],
            _user_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_9__["RegisterFormComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _home_home_drafts_deal_list_home_drafts_deal_list_component__WEBPACK_IMPORTED_MODULE_15__["HomeDraftsDealListComponent"],
            _home_home_favorite_deal_list_home_favorite_deal_list_component__WEBPACK_IMPORTED_MODULE_14__["HomeFavoriteDealListComponent"],
            _home_home_expired_deal_list_home_expired_deal_list_component__WEBPACK_IMPORTED_MODULE_13__["HomeExpiredDealListComponent"],
            _home_home_active_deal_list_home_active_deal_list_component__WEBPACK_IMPORTED_MODULE_12__["HomeActiveDealListComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"],
            _products_products_active_list_products_active_list_component__WEBPACK_IMPORTED_MODULE_17__["ProductsActiveListComponent"],
            _groups_groups_component__WEBPACK_IMPORTED_MODULE_18__["GroupsComponent"],
            _groups_groups_active_list_groups_active_list_component__WEBPACK_IMPORTED_MODULE_19__["GroupsActiveListComponent"],
            _groups_groups_blocked_list_groups_blocked_list_component__WEBPACK_IMPORTED_MODULE_20__["GroupsBlockedListComponent"],
            _groups_groups_waiting_list_groups_waiting_list_component__WEBPACK_IMPORTED_MODULE_21__["GroupsWaitingListComponent"],
            _inbound_inbound_component__WEBPACK_IMPORTED_MODULE_22__["InboundComponent"],
            _inbound_to_confirm_list_to_confirm_list_component__WEBPACK_IMPORTED_MODULE_23__["ToConfirmListComponent"],
            _inbound_reported_list_reported_list_component__WEBPACK_IMPORTED_MODULE_24__["ReportedListComponent"],
            _inbound_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_25__["HistoryListComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"],
            _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_27__["LinkifyPipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/custom-pipes/linkify.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/custom-pipes/linkify.pipe.ts ***!
  \**********************************************/
/*! exports provided: LinkifyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkifyPipe", function() { return LinkifyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LinkifyPipe = class LinkifyPipe {
    transform(link) {
        return this.linkify(link);
    }
    linkify(plainText) {
        let replacedText;
        let replacePattern1;
        let replacePattern2;
        let replacePattern3;
        replacedText = plainText.replace(/\n/g, '<br/>');
        // URLs starting with http://, https://, or ftp://
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        replacedText = replacedText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
        // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
        // Change email addresses to maillot:: links.
        replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
        replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
        return replacedText;
    }
};
LinkifyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'linkify' })
], LinkifyPipe);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/groups/groups-active-list/groups-active-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/groups/groups-active-list/groups-active-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMtYWN0aXZlLWxpc3QvZ3JvdXBzLWFjdGl2ZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/groups/groups-active-list/groups-active-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/groups/groups-active-list/groups-active-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: GroupsActiveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsActiveListComponent", function() { return GroupsActiveListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let GroupsActiveListComponent = class GroupsActiveListComponent {
    constructor(groupService, authenticationService) {
        this.groupService = groupService;
        this.authenticationService = authenticationService;
        this.statusLevel = ['Ask To Follow', 'Active', 'Blocked'];
    }
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.privilege = this.authenticationService.currentUserValue[2];
            this.user = this.authenticationService.currentUserValue[0];
        }
        this.getfollowersListTen();
    }
    getfollowersListTen() {
        if (this.privilege !== 'company') {
            // TODO: error handle
        }
        else {
            this.groupService
                .tenSubscribers(this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(data => {
                this.followersList = data;
            });
        }
    }
};
GroupsActiveListComponent.ctorParameters = () => [
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
GroupsActiveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups-active-list',
        template: __webpack_require__(/*! raw-loader!./groups-active-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/groups/groups-active-list/groups-active-list.component.html"),
        providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]],
        styles: [__webpack_require__(/*! ./groups-active-list.component.scss */ "./src/app/groups/groups-active-list/groups-active-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], GroupsActiveListComponent);



/***/ }),

/***/ "./src/app/groups/groups-blocked-list/groups-blocked-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/groups/groups-blocked-list/groups-blocked-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMtYmxvY2tlZC1saXN0L2dyb3Vwcy1ibG9ja2VkLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/groups/groups-blocked-list/groups-blocked-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/groups/groups-blocked-list/groups-blocked-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GroupsBlockedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsBlockedListComponent", function() { return GroupsBlockedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let GroupsBlockedListComponent = class GroupsBlockedListComponent {
    constructor(groupService, authenticationService) {
        this.groupService = groupService;
        this.authenticationService = authenticationService;
        this.statusLevel = ['Ask To Follow', 'Active', 'Blocked'];
    }
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.privilege = this.authenticationService.currentUserValue[2];
            this.user = this.authenticationService.currentUserValue[0];
        }
        this.getfollowersListTenBlocked();
    }
    getfollowersListTenBlocked() {
        if (this.privilege !== 'company') {
            // TODO: error handle
        }
        else {
            this.groupService
                .tenSubscribersBlocked(this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(data => {
                this.followersList = data;
            });
        }
    }
};
GroupsBlockedListComponent.ctorParameters = () => [
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
GroupsBlockedListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups-blocked-list',
        template: __webpack_require__(/*! raw-loader!./groups-blocked-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/groups/groups-blocked-list/groups-blocked-list.component.html"),
        providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]],
        styles: [__webpack_require__(/*! ./groups-blocked-list.component.scss */ "./src/app/groups/groups-blocked-list/groups-blocked-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], GroupsBlockedListComponent);



/***/ }),

/***/ "./src/app/groups/groups-waiting-list/groups-waiting-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/groups/groups-waiting-list/groups-waiting-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMtd2FpdGluZy1saXN0L2dyb3Vwcy13YWl0aW5nLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/groups/groups-waiting-list/groups-waiting-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/groups/groups-waiting-list/groups-waiting-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GroupsWaitingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsWaitingListComponent", function() { return GroupsWaitingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let GroupsWaitingListComponent = class GroupsWaitingListComponent {
    constructor(groupService, authenticationService) {
        this.groupService = groupService;
        this.authenticationService = authenticationService;
        this.statusLevel = ['Ask To Follow', 'Active', 'Blocked'];
    }
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.privilege = this.authenticationService.currentUserValue[2];
            this.user = this.authenticationService.currentUserValue[0];
        }
        this.getfollowersListTenWaiting();
    }
    getfollowersListTenWaiting() {
        if (this.privilege !== 'company') {
            // TODO: error handle
        }
        else {
            this.groupService
                .tenSubscribersWaiting(this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(data => {
                this.followersList = data;
            });
        }
    }
};
GroupsWaitingListComponent.ctorParameters = () => [
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
GroupsWaitingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups-waiting-list',
        template: __webpack_require__(/*! raw-loader!./groups-waiting-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/groups/groups-waiting-list/groups-waiting-list.component.html"),
        providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]],
        styles: [__webpack_require__(/*! ./groups-waiting-list.component.scss */ "./src/app/groups/groups-waiting-list/groups-waiting-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], GroupsWaitingListComponent);



/***/ }),

/***/ "./src/app/groups/groups.component.scss":
/*!**********************************************!*\
  !*** ./src/app/groups/groups.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GroupsComponent = class GroupsComponent {
    constructor() { }
    ngOnInit() {
    }
    search() {
        // Declare variables
        const input = document.getElementById('groupSearchInput');
        const filter = input.value.toUpperCase();
        const table = document.getElementById('GroupTable');
        const tr = table.getElementsByTagName('tr');
        // Loop through all table rows, and hide those who don't match the search query
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < tr.length; i++) {
            const td = tr[i].getElementsByTagName('td')[0];
            if (td) {
                const txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                }
                else {
                    tr[i].style.display = 'none';
                }
            }
        }
    }
};
GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups',
        template: __webpack_require__(/*! raw-loader!./groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/groups/groups.component.html"),
        styles: [__webpack_require__(/*! ./groups.component.scss */ "./src/app/groups/groups.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GroupsComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue[0];
        if (currentUser) {
            // logged in so return true
            // console.log('login');
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/signin']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/home/home-active-deal-list/home-active-deal-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/home-active-deal-list/home-active-deal-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 1100px;\n}\n\ntable {\n  table-layout: fixed;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS1hY3RpdmUtZGVhbC1saXN0L2hvbWUtYWN0aXZlLWRlYWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWFjdGl2ZS1kZWFsLWxpc3QvaG9tZS1hY3RpdmUtZGVhbC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1hY3RpdmUtZGVhbC1saXN0L2hvbWUtYWN0aXZlLWRlYWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIG1heC13aWR0aDogMTEwMHB4O1xufVxudGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG59XG5cbnRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home-active-deal-list/home-active-deal-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/home-active-deal-list/home-active-deal-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HomeActiveDealListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeActiveDealListComponent", function() { return HomeActiveDealListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_deal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/deal.service */ "./src/app/services/deal.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _models_inbound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/inbound */ "./src/app/models/inbound.ts");
/* harmony import */ var _services_inbound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/inbound.service */ "./src/app/services/inbound.service.ts");
/* harmony import */ var _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../custom-pipes/linkify.pipe */ "./src/app/custom-pipes/linkify.pipe.ts");










let HomeActiveDealListComponent = class HomeActiveDealListComponent {
    constructor(dealService, authenticationService, productService, groupService, inboundService, linkify) {
        this.dealService = dealService;
        this.authenticationService = authenticationService;
        this.productService = productService;
        this.groupService = groupService;
        this.inboundService = inboundService;
        this.linkify = linkify;
        this.isCreated = false;
        this.inbound = new _models_inbound__WEBPACK_IMPORTED_MODULE_7__["Inbound"]('', '', null, '', '', '', null, null, null);
    }
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.creator = this.authenticationService.currentUserValue[0];
            if (this.authenticationService.currentUserValue[2] === 'company') {
                this.privilege = true;
                this.getActiveList(this.creator);
            }
            else {
                this.privilege = false;
                this.getfollowing(this.creator);
            }
        }
    }
    getActiveList(creator) {
        this.dealService
            .tenDeals(creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(data => {
            this.dealList = data;
        });
    }
    getfollowing(creator) {
        this.groupService
            .findfollowing(creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(data => {
            this.followingList = data;
            // console.log(this.followingList);
        }, error => {
            console.log(error);
        }, () => {
            this.getActiveList(this.followingList[0].company);
        });
    }
    takeDeal(productId) {
        if (productId >= 0) {
            this.inbound.product = this.dealList[productId].product_name;
            this.inbound.price = this.dealList[productId].price;
            this.inbound.warehouse = 'NH';
            this.inbound.company = this.followingList[0].company;
            this.inbound.individual = this.creator;
            this.inbound.status = 0;
            this.inbound.companyStatus = 0;
            this.inbound.dealId = this.dealList[productId].id;
        }
    }
    createInbound() {
        this.inboundService
            .create(this.inbound)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(data => {
            this.isCreated = true;
            this.inbound.clear();
        });
    }
};
HomeActiveDealListComponent.ctorParameters = () => [
    { type: _services_deal_service__WEBPACK_IMPORTED_MODULE_2__["DealService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"] },
    { type: _services_inbound_service__WEBPACK_IMPORTED_MODULE_8__["InboundService"] },
    { type: _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_9__["LinkifyPipe"] }
];
HomeActiveDealListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-active-deal-list',
        template: __webpack_require__(/*! raw-loader!./home-active-deal-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-active-deal-list/home-active-deal-list.component.html"),
        providers: [
            _services_deal_service__WEBPACK_IMPORTED_MODULE_2__["DealService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"],
            _services_inbound_service__WEBPACK_IMPORTED_MODULE_8__["InboundService"],
            _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_9__["LinkifyPipe"]
        ],
        styles: [__webpack_require__(/*! ./home-active-deal-list.component.scss */ "./src/app/home/home-active-deal-list/home-active-deal-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_deal_service__WEBPACK_IMPORTED_MODULE_2__["DealService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
        _services_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"],
        _services_inbound_service__WEBPACK_IMPORTED_MODULE_8__["InboundService"],
        _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_9__["LinkifyPipe"]])
], HomeActiveDealListComponent);



/***/ }),

/***/ "./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS1kcmFmdHMtZGVhbC1saXN0L2hvbWUtZHJhZnRzLWRlYWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWRyYWZ0cy1kZWFsLWxpc3QvaG9tZS1kcmFmdHMtZGVhbC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1kcmFmdHMtZGVhbC1saXN0L2hvbWUtZHJhZnRzLWRlYWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HomeDraftsDealListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDraftsDealListComponent", function() { return HomeDraftsDealListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeDraftsDealListComponent = class HomeDraftsDealListComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeDraftsDealListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-drafts-deal-list',
        template: __webpack_require__(/*! raw-loader!./home-drafts-deal-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.html"),
        styles: [__webpack_require__(/*! ./home-drafts-deal-list.component.scss */ "./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeDraftsDealListComponent);



/***/ }),

/***/ "./src/app/home/home-expired-deal-list/home-expired-deal-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/home-expired-deal-list/home-expired-deal-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS1leHBpcmVkLWRlYWwtbGlzdC9ob21lLWV4cGlyZWQtZGVhbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtZXhwaXJlZC1kZWFsLWxpc3QvaG9tZS1leHBpcmVkLWRlYWwtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtZXhwaXJlZC1kZWFsLWxpc3QvaG9tZS1leHBpcmVkLWRlYWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home-expired-deal-list/home-expired-deal-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/home-expired-deal-list/home-expired-deal-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HomeExpiredDealListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeExpiredDealListComponent", function() { return HomeExpiredDealListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeExpiredDealListComponent = class HomeExpiredDealListComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeExpiredDealListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-expired-deal-list',
        template: __webpack_require__(/*! raw-loader!./home-expired-deal-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-expired-deal-list/home-expired-deal-list.component.html"),
        styles: [__webpack_require__(/*! ./home-expired-deal-list.component.scss */ "./src/app/home/home-expired-deal-list/home-expired-deal-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeExpiredDealListComponent);



/***/ }),

/***/ "./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS1mYXZvcml0ZS1kZWFsLWxpc3QvaG9tZS1mYXZvcml0ZS1kZWFsLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS1mYXZvcml0ZS1kZWFsLWxpc3QvaG9tZS1mYXZvcml0ZS1kZWFsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLWZhdm9yaXRlLWRlYWwtbGlzdC9ob21lLWZhdm9yaXRlLWRlYWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HomeFavoriteDealListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFavoriteDealListComponent", function() { return HomeFavoriteDealListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeFavoriteDealListComponent = class HomeFavoriteDealListComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeFavoriteDealListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-favorite-deal-list',
        template: __webpack_require__(/*! raw-loader!./home-favorite-deal-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.html"),
        styles: [__webpack_require__(/*! ./home-favorite-deal-list.component.scss */ "./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeFavoriteDealListComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.container {\n  max-width: 1100px;\n}\n\n.pricing-header {\n  max-width: 700px;\n}\n\n.card-deck .card {\n  min-width: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxlQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbn1cblxuLnByaWNpbmctaGVhZGVyIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuLmNhcmQtZGVjayAuY2FyZCB7XG4gIG1pbi13aWR0aDogMjIwcHg7XG59XG4iLCJodG1sIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG59XG5cbi5wcmljaW5nLWhlYWRlciB7XG4gIG1heC13aWR0aDogNzAwcHg7XG59XG5cbi5jYXJkLWRlY2sgLmNhcmQge1xuICBtaW4td2lkdGg6IDIyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_deal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/deal */ "./src/app/models/deal.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_deal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/deal.service */ "./src/app/services/deal.service.ts");







let HomeComponent = class HomeComponent {
    constructor(dealService, productService, authenticationService) {
        this.dealService = dealService;
        this.productService = productService;
        this.authenticationService = authenticationService;
        this.deal = new _models_deal__WEBPACK_IMPORTED_MODULE_2__["Deal"](0, '', '', 0, '', '', false, false, false, '');
        this.isCreated = false;
    }
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.deal.creator = this.authenticationService.currentUserValue[0];
            if (this.authenticationService.currentUserValue[2] === 'company') {
                this.privilege = true;
                this.getNameId();
                if (this.productList) {
                    this.selectProduct = this.productList[0];
                }
            }
            else {
                this.privilege = false;
            }
        }
    }
    getNameId() {
        this.productService
            .productNameId(this.deal.creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            this.productList = data;
        }, error => {
            console.log(error);
        }, () => {
            setTimeout(() => {
                $('.selectpicker').selectpicker('refresh');
            });
        });
    }
    setProductNameId() {
        if (this.selectProduct) {
            this.deal.products = this.selectProduct.id;
            this.deal.productName = this.selectProduct.name;
        }
    }
    create() {
        if (this.month && this.days && this.year && this.hour && this.minutes) {
            const date = this.year +
                '-' +
                this.month +
                '-' +
                this.days +
                ' ' +
                this.hour +
                ':' +
                this.minutes +
                ':' +
                '00';
            this.deal.expiresAt = date;
            console.log(this.deal);
        }
        else {
            // TODO: need to improve error handle.
            this.error = 'please fill out all parts';
            return;
        }
        this.dealService
            .createDeal(this.deal)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            this.isCreated = true;
            this.deal.clear();
        });
    }
    search() {
        // Declare variables
        const input = document.getElementById('searchInput');
        const filter = input.value.toUpperCase();
        const table = document.getElementById('dealTable');
        const tr = table.getElementsByTagName('tr');
        // Loop through all table rows, and hide those who don't match the search query
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < tr.length; i++) {
            const td = tr[i].getElementsByTagName('td')[0];
            if (td) {
                const txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                }
                else {
                    tr[i].style.display = 'none';
                }
            }
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_deal_service__WEBPACK_IMPORTED_MODULE_6__["DealService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_deal_service__WEBPACK_IMPORTED_MODULE_6__["DealService"]],
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_deal_service__WEBPACK_IMPORTED_MODULE_6__["DealService"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/inbound/history-list/history-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/inbound/history-list/history-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm91bmQvaGlzdG9yeS1saXN0L2hpc3RvcnktbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/inbound/history-list/history-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/inbound/history-list/history-list.component.ts ***!
  \****************************************************************/
/*! exports provided: HistoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryListComponent", function() { return HistoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistoryListComponent = class HistoryListComponent {
    constructor() { }
    ngOnInit() {
    }
};
HistoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history-list',
        template: __webpack_require__(/*! raw-loader!./history-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/inbound/history-list/history-list.component.html"),
        styles: [__webpack_require__(/*! ./history-list.component.scss */ "./src/app/inbound/history-list/history-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HistoryListComponent);



/***/ }),

/***/ "./src/app/inbound/inbound.component.scss":
/*!************************************************!*\
  !*** ./src/app/inbound/inbound.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm91bmQvaW5ib3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/inbound/inbound.component.ts":
/*!**********************************************!*\
  !*** ./src/app/inbound/inbound.component.ts ***!
  \**********************************************/
/*! exports provided: InboundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundComponent", function() { return InboundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InboundComponent = class InboundComponent {
    constructor() { }
    ngOnInit() {
    }
    search() {
        // Declare variables
        const input = document.getElementById('inboundSearchInput');
        const filter = input.value.toUpperCase();
        const table = document.getElementById('inboundTable');
        const tr = table.getElementsByTagName('tr');
        // Loop through all table rows, and hide those who don't match the search query
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < tr.length; i++) {
            const td = tr[i].getElementsByTagName('td')[0];
            if (td) {
                const txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                }
                else {
                    tr[i].style.display = 'none';
                }
            }
        }
    }
};
InboundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inbound',
        template: __webpack_require__(/*! raw-loader!./inbound.component.html */ "./node_modules/raw-loader/index.js!./src/app/inbound/inbound.component.html"),
        styles: [__webpack_require__(/*! ./inbound.component.scss */ "./src/app/inbound/inbound.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InboundComponent);



/***/ }),

/***/ "./src/app/inbound/reported-list/reported-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/inbound/reported-list/reported-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm91bmQvcmVwb3J0ZWQtbGlzdC9yZXBvcnRlZC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/inbound/reported-list/reported-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/inbound/reported-list/reported-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ReportedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportedListComponent", function() { return ReportedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReportedListComponent = class ReportedListComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReportedListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reported-list',
        template: __webpack_require__(/*! raw-loader!./reported-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/inbound/reported-list/reported-list.component.html"),
        styles: [__webpack_require__(/*! ./reported-list.component.scss */ "./src/app/inbound/reported-list/reported-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReportedListComponent);



/***/ }),

/***/ "./src/app/inbound/to-confirm-list/to-confirm-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/inbound/to-confirm-list/to-confirm-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm91bmQvdG8tY29uZmlybS1saXN0L3RvLWNvbmZpcm0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/inbound/to-confirm-list/to-confirm-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/inbound/to-confirm-list/to-confirm-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ToConfirmListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToConfirmListComponent", function() { return ToConfirmListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_inbound_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/inbound.service */ "./src/app/services/inbound.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ToConfirmListComponent = class ToConfirmListComponent {
    constructor(inboundService, authenticationService) {
        this.inboundService = inboundService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.userEmail = this.authenticationService.currentUserValue[0];
            if (this.authenticationService.currentUserValue[2] === 'company') {
                this.privilege = true;
                this.getRecordsCompany(this.userEmail);
            }
            else {
                this.privilege = false;
                this.getRecords(this.userEmail);
            }
            // this.userEmail = 'admin';
        }
        else {
            // TODO: add no userEmail error
        }
    }
    getRecords(userEmail) {
        this.inboundService
            .tenRecords(userEmail)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.recordList = data;
        });
    }
    getRecordsCompany(userEmail) {
        this.inboundService
            .tenRecordsCompany(userEmail)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.recordList = data;
        });
    }
};
ToConfirmListComponent.ctorParameters = () => [
    { type: _services_inbound_service__WEBPACK_IMPORTED_MODULE_3__["InboundService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
ToConfirmListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-to-confirm-list',
        template: __webpack_require__(/*! raw-loader!./to-confirm-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/inbound/to-confirm-list/to-confirm-list.component.html"),
        providers: [_services_inbound_service__WEBPACK_IMPORTED_MODULE_3__["InboundService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]],
        styles: [__webpack_require__(/*! ./to-confirm-list.component.scss */ "./src/app/inbound/to-confirm-list/to-confirm-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_inbound_service__WEBPACK_IMPORTED_MODULE_3__["InboundService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], ToConfirmListComponent);



/***/ }),

/***/ "./src/app/interceptor/error.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptor/error.interceptor.ts ***!
  \**************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error || err.statusText || 'Connection Refused';
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/models/deal.ts":
/*!********************************!*\
  !*** ./src/app/models/deal.ts ***!
  \********************************/
/*! exports provided: Deal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deal", function() { return Deal; });
class Deal {
    constructor(products, productName, price, quantity, expiresAt, note, serviceTag, dealPublic, notify, creator) {
        this.products = products;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.expiresAt = expiresAt;
        this.note = note;
        this.serviceTag = serviceTag;
        this.dealPublic = dealPublic;
        this.notify = notify;
        this.creator = creator;
    }
    clear() {
        this.products = null;
        this.productName = '';
        this.price = '';
        this.quantity = null;
        this.expiresAt = '';
        this.note = '';
        this.serviceTag = null;
        this.dealPublic = null;
        this.notify = null;
        this.creator = '';
    }
}
Deal.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: Number },
    { type: String },
    { type: String },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: String }
];


/***/ }),

/***/ "./src/app/models/inbound.ts":
/*!***********************************!*\
  !*** ./src/app/models/inbound.ts ***!
  \***********************************/
/*! exports provided: Inbound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inbound", function() { return Inbound; });
class Inbound {
    constructor(product, price, quantity, warehouse, company, individual, status, companyStatus, dealId) {
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.warehouse = warehouse;
        this.company = company;
        this.individual = individual;
        this.status = status;
        this.companyStatus = companyStatus;
        this.dealId = dealId;
    }
    clear() {
        this.product = '';
        this.price = '';
        this.quantity = null;
        this.warehouse = '';
        this.company = '';
        this.individual = '';
        this.status = null;
        this.companyStatus = null;
        this.dealId = null;
    }
}
Inbound.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: Number },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(name, condition, msrp, asin, upc, weight, note, creator) {
        this.name = name;
        this.condition = condition;
        this.msrp = msrp;
        this.asin = asin;
        this.upc = upc;
        this.weight = weight;
        this.note = note;
        this.creator = creator;
    }
    /**
     * name
     */
    clear() {
        this.name = '';
        this.condition = '';
        this.msrp = '';
        this.asin = '';
        this.upc = '';
        this.weight = '';
        this.note = '';
        this.creator = '';
    }
}
Product.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/models/register.ts":
/*!************************************!*\
  !*** ./src/app/models/register.ts ***!
  \************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
class Register {
    constructor(FirstName = '', LastName = '', email = '', password = '') {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.email = email;
        this.password = password;
    }
    clear() {
        this.FirstName = '';
        this.LastName = '';
        this.email = '';
        this.password = '';
    }
}
Register.ctorParameters = () => [
    null,
    null,
    null,
    null
];


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, password, permission = null) {
        this.email = email;
        this.password = password;
        this.permission = permission;
    }
}
User.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/products/products-active-list/products-active-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/products/products-active-list/products-active-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLWFjdGl2ZS1saXN0L3Byb2R1Y3RzLWFjdGl2ZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/products-active-list/products-active-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/products/products-active-list/products-active-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductsActiveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsActiveListComponent", function() { return ProductsActiveListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProductsActiveListComponent = class ProductsActiveListComponent {
    constructor(productService, authenticationService) {
        this.productService = productService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.getActiveList();
    }
    getActiveList() {
        if (this.authenticationService.currentUserValue) {
            this.userEmail = this.authenticationService.currentUserValue[0];
            // this.userEmail = 'admin';
        }
        else {
            // TODO: add no userEmail error
        }
        this.productService
            .tenProduct(this.userEmail)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.activeProductsList = data;
        });
    }
};
ProductsActiveListComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ProductsActiveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-active-list',
        template: __webpack_require__(/*! raw-loader!./products-active-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products-active-list/products-active-list.component.html"),
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]],
        styles: [__webpack_require__(/*! ./products-active-list.component.scss */ "./src/app/products/products-active-list/products-active-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], ProductsActiveListComponent);



/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/product */ "./src/app/models/product.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ProductsComponent = class ProductsComponent {
    constructor(productService, authenticationSerive) {
        this.productService = productService;
        this.authenticationSerive = authenticationSerive;
        this.product = new _models_product__WEBPACK_IMPORTED_MODULE_4__["Product"]('', '', '', '', '', '', '', '');
        // public debug: any;
        this.isCreated = false;
    }
    ngOnInit() {
        if (this.authenticationSerive.currentUserValue) {
            this.product.creator = this.authenticationSerive.currentUserValue[0];
        }
        else {
            // TODO: handle no user error
        }
    }
    create() {
        this.productService
            .createProduct(this.product)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            console.log(data);
            this.isCreated = true;
            this.product.clear();
        });
    }
    search() {
        // Declare variables
        const input = document.getElementById('productSearchInput');
        const filter = input.value.toUpperCase();
        const table = document.getElementById('productTable');
        const tr = table.getElementsByTagName('tr');
        // Loop through all table rows, and hide those who don't match the search query
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < tr.length; i++) {
            const td = tr[i].getElementsByTagName('td')[0];
            if (td) {
                const txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                }
                else {
                    tr[i].style.display = 'none';
                }
            }
        }
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]],
        styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(user) {
        return this.http
            .post('http://192.168.1.119:8081/api/signin', user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(logInUser => {
            // login successful if there's a jwt token in the response
            if (logInUser) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(logInUser));
                this.currentUserSubject.next(logInUser);
            }
            return logInUser;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/deal.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/deal.service.ts ***!
  \******************************************/
/*! exports provided: DealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealService", function() { return DealService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
let DealService = class DealService {
    constructor(http) {
        this.http = http;
        this.createDealUrl = 'http://192.168.1.119:8081/api/createdeal'; // URL to web api
        this.tenDealsUrl = 'http://192.168.1.119:8081/api/deal/active/firstTen';
    }
    createDeal(deal) {
        return this.http.post(this.createDealUrl, deal, httpOptions);
    }
    tenDeals(creator) {
        const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenDealsUrl, JSON.parse(creatorJSON), httpOptions);
    }
};
DealService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DealService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DealService);



/***/ }),

/***/ "./src/app/services/group.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/group.service.ts ***!
  \*******************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
let GroupService = class GroupService {
    constructor(http) {
        this.http = http;
        // public subscription = new Subscription(null, null, null);
        // URL to web api
        this.tenUrl = 'http://192.168.1.119:8081/api/subscription/findTen';
        this.allUrl = 'http://192.168.1.119:8081/api/subscription/find';
        this.setActiveUrl = 'http://192.168.1.119:8081/api/subscription/setactive';
        this.setBlockUrl = 'http://192.168.1.119:8081/api/subscription/setblock';
        this.acceptUrl = 'http://192.168.1.119:8081/api/subscription/approve';
        this.tenBlockedUrl = 'http://192.168.1.119:8081/api/subscription/findTenBlocked';
        this.tenWaitingUrl = 'http://192.168.1.119:8081/api/subscription/findTenWaiting';
        this.findfollowingUrl = 'http://192.168.1.119:8081/api/subscription/findfollowing';
    }
    tenSubscribers(company) {
        const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenUrl, JSON.parse(creatorJSON), httpOptions);
    }
    allSubscribers(company) {
        const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.allUrl, JSON.parse(creatorJSON), httpOptions);
    }
    setActive(subscription) {
        return this.http.post(this.setActiveUrl, subscription, httpOptions);
    }
    setBlock(subscription) {
        return this.http.post(this.setBlockUrl, subscription, httpOptions);
    }
    approve(subscription) {
        return this.http.post(this.acceptUrl, subscription, httpOptions);
    }
    tenSubscribersBlocked(company) {
        const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenBlockedUrl, JSON.parse(creatorJSON), httpOptions);
    }
    tenSubscribersWaiting(company) {
        const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenWaitingUrl, JSON.parse(creatorJSON), httpOptions);
    }
    findfollowing(individual) {
        const creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.findfollowingUrl, JSON.parse(creatorJSON), httpOptions);
    }
};
GroupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GroupService);



/***/ }),

/***/ "./src/app/services/inbound.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/inbound.service.ts ***!
  \*********************************************/
/*! exports provided: InboundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundService", function() { return InboundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
let InboundService = class InboundService {
    // NameUrl = 'http://192.168.1.119:8081/api/product/name';
    constructor(http) {
        this.http = http;
        this.createUrl = 'http://192.168.1.119:8081/api/inbound/add'; // URL to web api
        this.tenUrl = 'http://192.168.1.119:8081/api/inbound/individualFind';
        this.allUrl = 'http://192.168.1.119:8081/api/inbound/individualFind';
        this.confirmUrl = 'http://192.168.1.119:8081/api/inbound/findRecords';
        this.tenCompanyUrl = 'http://192.168.1.119:8081/api/inbound/companyFind';
    }
    tenRecords(individual) {
        const creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenUrl, JSON.parse(creatorJSON), httpOptions);
    }
    tenRecordsCompany(company) {
        const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenCompanyUrl, JSON.parse(creatorJSON), httpOptions);
    }
    allRecords(individual) {
        const creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.allUrl, JSON.parse(creatorJSON), httpOptions);
    }
    confirm(inbound) {
        return this.http.post(this.confirmUrl, inbound, httpOptions);
    }
    create(inbound) {
        return this.http.post(this.createUrl, inbound, httpOptions);
    }
};
InboundService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InboundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], InboundService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
let ProductService = class ProductService {
    // NameUrl = 'http://192.168.1.119:8081/api/product/name';
    constructor(http) {
        this.http = http;
        this.createUrl = 'http://192.168.1.119:8081/api/product/add'; // URL to web api
        this.tenUrl = 'http://192.168.1.119:8081/api/product/findten';
        this.allUrl = 'http://192.168.1.119:8081/api/product/find';
        this.NameIdUrl = 'http://192.168.1.119:8081/api/product/NameId';
    }
    createProduct(product) {
        return this.http.post(this.createUrl, product, httpOptions);
    }
    tenProduct(creator) {
        const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenUrl, JSON.parse(creatorJSON), httpOptions);
    }
    allProduct(creator) {
        const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.allUrl, JSON.parse(creatorJSON), httpOptions);
    }
    productNameId(creator) {
        const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.NameIdUrl, JSON.parse(creatorJSON), httpOptions);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductService);



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
        this.registerUrl = 'http://192.168.1.119:8081/api/register'; // URL to web api
    }
    userRegister(register) {
        return this.http.post(this.registerUrl, register, httpOptions);
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RegisterService);



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.scss":
/*!************************************************!*\
  !*** ./src/app/top-bar/top-bar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-bottom: 20px;\n}\n\n.navbar {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5uYXZiYXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIiwiYm9keSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TopBarComponent = class TopBarComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.company = false;
        this.individual = false;
        this.authenticationService.currentUser.subscribe(x => this.checkPermission(x));
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/singin']);
        this.company = false;
        this.individual = false;
    }
    checkPermission(x) {
        this.currentUser = x;
        if (x) {
            const parsedValue = this.authenticationService.currentUserValue;
            if (parsedValue[2] === 'company') {
                this.company = true;
            }
            else if (parsedValue[2] === 'individual') {
                this.individual = true;
            }
        }
    }
    ngOnInit() { }
};
TopBarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-bar',
        template: __webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html"),
        styles: [__webpack_require__(/*! ./top-bar.component.scss */ "./src/app/top-bar/top-bar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], TopBarComponent);



/***/ }),

/***/ "./src/app/user_components/register-form/register-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/user_components/register-form/register-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 420px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: 0.75rem;\n}\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::placeholder {\n  color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n/* Fallback for Edge\n-------------------------------------------------- */\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n/* Fallback for IE\n-------------------------------------------------- */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL3VzZXJfY29tcG9uZW50cy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXJfY29tcG9uZW50cy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBQTtBQ0NGOztBREVBO0VBRUUsYUFBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBOztFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQWtCLHNDQUFBO0VBQ2xCLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUFjLG9DQUFBO0VBQ2QsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRElBO0VBQ0Usa0JBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQ0dGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEQUE7b0RBQUE7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUNHRjs7RUREQTtJQUNFLFdBQUE7RUNJRjtBQUNGOztBRERBO29EQUFBOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0VDR0Y7O0VEREE7SUFDRSxXQUFBO0VDSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXJfY29tcG9uZW50cy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwOyAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IHRleHQ7IC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLyogRmFsbGJhY2sgZm9yIEVkZ2Vcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuXG4vKiBGYWxsYmFjayBmb3IgSUVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cblxuXG4iLCJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IHRleHQ7XG4gIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLyogRmFsbGJhY2sgZm9yIEVkZ2Vcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59XG4vKiBGYWxsYmFjayBmb3IgSUVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user_components/register-form/register-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user_components/register-form/register-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/register */ "./src/app/models/register.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");







let RegisterFormComponent = class RegisterFormComponent {
    constructor(registerService, router, authenticationService) {
        this.registerService = registerService;
        this.router = router;
        this.authenticationService = authenticationService;
        // register = new Register();
        this.register = new _models_register__WEBPACK_IMPORTED_MODULE_2__["Register"]();
        this.isRegistered = false;
    }
    formValid() {
        if (this.register.FirstName &&
            this.register.LastName &&
            this.register.email &&
            this.register.password &&
            this.pwdValid()) {
            return true;
        }
        return false;
    }
    user_register() {
        this.registerService
            .userRegister(this.register)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            this.isRegistered = true;
            this.register.clear();
            this.confirmedPassword = '';
        });
    }
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/home']);
        }
    }
    pwdValid() {
        if (this.confirmedPassword === this.register.password) {
            return true;
        }
        return false;
    }
};
RegisterFormComponent.ctorParameters = () => [
    { type: _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
];
RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-form',
        template: __webpack_require__(/*! raw-loader!./register-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/user_components/register-form/register-form.component.html"),
        providers: [_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]],
        styles: [__webpack_require__(/*! ./register-form.component.scss */ "./src/app/user_components/register-form/register-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
], RegisterFormComponent);



/***/ }),

/***/ "./src/app/user_components/sign-in-form/sign-in-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user_components/sign-in-form/sign-in-form.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 420px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: 0.75rem;\n}\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::placeholder {\n  color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n/* Fallback for Edge\n-------------------------------------------------- */\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n/* Fallback for IE\n-------------------------------------------------- */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL3VzZXJfY29tcG9uZW50cy9zaWduLWluLWZvcm0vc2lnbi1pbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyX2NvbXBvbmVudHMvc2lnbi1pbi1mb3JtL3NpZ24taW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFBO0FDQ0Y7O0FERUE7RUFFRSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7O0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFBa0Isc0NBQUE7RUFDbEIsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQWMsb0NBQUE7RUFDZCw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FESUE7RUFDRSxrQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtvREFBQTs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtFQ0dGOztFRERBO0lBQ0UsV0FBQTtFQ0lGO0FBQ0Y7O0FEREE7b0RBQUE7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUNHRjs7RUREQTtJQUNFLFdBQUE7RUNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlcl9jb21wb25lbnRzL3NpZ24taW4tZm9ybS9zaWduLWluLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIHBhZGRpbmc6IC43NXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogdGV4dDsgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLyogRmFsbGJhY2sgZm9yIEVkZ2Vcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuXG4vKiBGYWxsYmFjayBmb3IgSUVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cbiIsImh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cbi8qIEZhbGxiYWNrIGZvciBJRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/user_components/sign-in-form/sign-in-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user_components/sign-in-form/sign-in-form.component.ts ***!
  \************************************************************************/
/*! exports provided: SignInFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInFormComponent", function() { return SignInFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let SignInFormComponent = class SignInFormComponent {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '');
        this.submitted = false;
        this.loading = false;
        this.error = '';
    }
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['dashboard']);
        }
    }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        this.authenticationService
            .login(this.user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            this.router.navigate(['dashboard']);
        }, error => {
            console.log(error);
            this.error = error;
        });
    }
};
SignInFormComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignInFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in-form',
        template: __webpack_require__(/*! raw-loader!./sign-in-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/user_components/sign-in-form/sign-in-form.component.html"),
        styles: [__webpack_require__(/*! ./sign-in-form.component.scss */ "./src/app/user_components/sign-in-form/sign-in-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SignInFormComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bill_yao/Documents/mean-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map