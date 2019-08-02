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

module.exports = "<app-top-bar></app-top-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Dashboard: -->\n<div class=\"container m-t-1\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <h3 class=\"card-header\">Offers</h3>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">\n            <a class=\"card-link\" routerLink=\"/home/active\">active offers </a>\n          </li>\n          <li class=\"list-group-item\">\n            <a class=\"card-link\" routerLink=\"/home/expired\">expired offers </a>\n          </li>\n          <li class=\"list-group-item\">\n            <a class=\"card-link\" routerLink=\"/home/propose\">proposed offers </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <h3 class=\"card-header\">Inbound</h3>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">\n            <a class=\"card-link\" routerLink=\"/inbound/inboundToConfirm\"\n              >inbound items\n            </a>\n          </li>\n          <li class=\"list-group-item\">\n            <a class=\"card-link\" routerLink=\"/inbound/inboundReported\"\n              >reported items\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- this is only for individuals -->\n    <div class=\"col-lg-3 col-md-4\" *ngIf=\"!privilege\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <h3 class=\"card-header\">More</h3>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">\n            <a class=\"card-link\" routerLink=\"/user_join\">Join a Company </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- this is only for company member -->\n    <div class=\"col-lg-3 col-md-4\" *ngIf=\"privilege\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <h3 class=\"card-header\">Product</h3>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">\n            <a class=\"card-link\" routerLink=\"/products\">Existing Products </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- this is only for company member -->\n    <div class=\"col-lg-3 col-md-4\" *ngIf=\"privilege\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <h3 class=\"card-header\">Group</h3>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">\n            <a class=\"card-link\" routerLink=\"/groups/group_active\"\n              >Active Followers\n            </a>\n          </li>\n          <li class=\"list-group-item\">\n            <a class=\"card-link\" routerLink=\"/groups/user_groups\">Groups </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/groups-active-list/groups-active-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/groups-active-list/groups-active-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" id=\"GroupTable\">\n  <thead>\n    <tr>\n      <th scope=\"col\" class=\"hide\">#</th>\n      <th scope=\"col\">Followers</th>\n      <th scope=\"col\" class=\"hide\">status</th>\n      <th scope=\"col\" class=\"hide\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let follower of followersList; index as i\">\n      <tr>\n        <th scopr=\"row\" class=\"hide\">{{ ('000' + follower.id).slice(-4) }}</th>\n        <td>\n          {{ follower.individual }}\n          <p class=\"text-danger show\">\n            Status: {{ statusLevel[follower.status] }}\n          </p>\n          <div>\n            <button\n              type=\"button\"\n              class=\"btn btn-outline-success btn-block show\"\n              data-toggle=\"modal\"\n              data-target=\"#userInformForm\"\n              (click)=\"subSelect(i)\"\n            >\n              Edit\n            </button>\n            <button\n              class=\"btn btn-outline-success btn-block show\"\n              *ngIf=\"!follower.status\"\n              (click)=\"setActive()\"\n            >\n              Approve\n            </button>\n          </div>\n        </td>\n        <td class=\"hide\">{{ statusLevel[follower.status] }}</td>\n        <td class=\"hide\">\n          <div>\n            <button\n              type=\"button\"\n              class=\"btn btn-outline-success btn-block\"\n              data-toggle=\"modal\"\n              data-target=\"#userInformForm\"\n              data-whatever=\"@mdo\"\n              (click) = \"subSelect(i)\"\n            >\n              Edit\n            </button>\n            <button\n              class=\"btn btn-outline-success btn-block\"\n              *ngIf=\"!follower.status\"\n              (click)=\"approve(i)\"\n            >\n              Approve\n            </button>\n          </div>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n\n<div\n  class=\"modal fade\"\n  id=\"userInformForm\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"userInformForm\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"userInformForm\">\n          User Information\n        </h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"recipient-name\" class=\"col-form-label\">Follower:</label>\n            {{selectSubscription.individual}}\n          </div>\n          <div class=\"form-group\">\n            <label for=\"recipient-name\" class=\"col-form-label\">Status:</label>\n            {{ statusLevel[selectSubscription.status] }}\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"setBlock()\">\n              Block\n            </button>\n            <button\n              type=\"button\"\n              class=\"btn btn-primary ml-2\"\n              (click)=\"setActive()\"\n            >\n              Active\n            </button>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/groups.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/groups.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{router.url}} -->\n<div class=\"container\">\n  <ul class=\"nav nav-tabs\" id=\"dealTabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        id=\"group-active-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"group_active\"\n        role=\"tab\"\n        aria-controls=\"active\"\n        aria-selected=\"true\"\n        >All Followers</a\n      >\n    </li>\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        id=\"user-group-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"user_groups\"\n        role=\"tab\"\n        aria-controls=\"active\"\n        aria-selected=\"true\"\n        >Groups</a\n      >\n    </li>\n  </ul>\n  <br />\n  <form class=\"form-inline float-left my-2\">\n    <input\n      class=\"form-control mr-sm-2\"\n      type=\"search\"\n      placeholder=\"Search\"\n      aria-label=\"Search\"\n      id=\"groupSearchInput\"\n      (keyup)=\"search()\"\n    />\n  </form>\n  <div class=\"tab-content\" id=\"dealLists\">\n    <router-outlet></router-outlet>\n  </div>\n  <div\n    class=\"modal fade\"\n    id=\"createForm\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"createFrom\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"createFrom\">Product Create Form</h5>\n          <button\n            type=\"button\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"recipient-name\" class=\"col-form-label\"\n                >Recipient:</label\n              >\n              <input type=\"text\" class=\"form-control\" id=\"recipient-name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"message-text\" class=\"col-form-label\">Message:</label>\n              <textarea class=\"form-control\" id=\"message-text\"></textarea>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n            Close\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\">Send message</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/user-groups/user-groups.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/user-groups/user-groups.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\">\n  <br />\n  <button\n    type=\"button\"\n    class=\"btn btn-primary\"\n    data-toggle=\"modal\"\n    data-target=\"#groupCreateForm\"\n  >\n    Create Group\n  </button>\n  <hr />\n  <div\n    class=\"modal fade\"\n    id=\"groupCreateForm\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"createFrom\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"createFrom\">Product Create Form</h5>\n          <button\n            type=\"button\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"recipient-name\" class=\"col-form-label\">Member:</label>\n              <select\n                class=\"selectpicker\"\n                multiple\n                data-live-search=\"true\"\n                name=\"selectedMember\"\n                [(ngModel)]=\"createGroup.member\"\n              >\n                <option *ngFor=\"let member of allMembers\" name=\"member\">\n                  {{ member.individual }}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"groupName\" class=\"col-form-label\">Group Name:</label>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                id=\"groupName\"\n                name=\"groupName\"\n                [(ngModel)]=\"createGroup.name\"\n              />\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n            Close\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"groupCreate()\">\n            created\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<table class=\"table\" id=\"GroupTable\">\n  <thead>\n    <tr>\n      <th scope=\"col\" class=\"hide\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\" class=\"hide\">Members</th>\n      <th scope=\"col\" class=\"hide\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let group of groupList; index as i\">\n      <tr>\n        <th scopr=\"row\" class=\"hide\">{{ ('000' + group.id).slice(-4) }}</th>\n        <td>\n          {{ group.name }}\n          <p class=\"text-primary show\">Members: {{ group.member }}</p>\n\n          <button type=\"button\" class=\"btn btn-outline-success btn-block btn-sm mb-1 show\" data-toggle=\"modal\" data-target=\"#groupEditForm\" (click)=\"selectGroup(i)\">\n              Edit\n            </button>\n          <button\n            class=\"btn btn-outline-success btn-block btn-sm mb-1 show\"\n            (click)=\"groupDelete(group.id)\"\n          >\n            Delete\n          </button>\n        </td>\n        <td class=\"hide\">\n          {{ group.member }}\n        </td>\n        <td class=\"hide\">\n          <button type=\"button\" class=\"btn btn-outline-success btn-block btn-sm mb-1\" data-toggle=\"modal\" data-target=\"#groupEditForm\" (click)=\"selectGroup(i)\">\n            Edit\n          </button>\n          <div>\n            <button\n              class=\"btn btn-outline-success btn-block btn-sm mb-1\"\n              (click)=\"groupDelete(group.id)\"\n            >\n              Delete\n            </button>\n            <!-- <button class=\"btn btn-primary btn-sm\" *ngIf=\"!follower.status\" (click)=\"setActive(i)\">Approve</button> -->\n          </div>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n<div\n  class=\"modal fade\"\n  id=\"groupEditForm\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Group Edit Form</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <hr>\n        <div class=\"form-group mt-1\">\n          <label for=\"add\">Members:</label>\n          <ng-container *ngFor=\"let member of allMembers; index as i\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" value=\"{{member.individual}}\"readonly>\n              <button class=\"btn btn-primary btn-sm mt-1\" *ngIf=\"checkExisted(member.individual)\" (click)=\"groupMemberAdd(i)\" data-dismiss=\"modal\"> Add </button>\n              <button class=\"btn btn-primary btn-sm mt-1 ml-2\" (click)=\"groupMemberDelete(i)\" data-dismiss=\"modal\"> Remove </button>\n            </div>\n\n          </ng-container>\n\n          </div>\n        <div *ngIf=\"delete\"></div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/user-join/user-join.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/user-join/user-join.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isRequested\">\n        Request Successfully!!\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isExisted\">\n        You have already following this company!!\n      </div>\n  <h3>Please enter the company's username to send a following request</h3>\n  <hr>\n  <div class=\"float-left\">\n<input type=\"text\" class=\"form-control\" id=\"companyEmail\" name=\"company\" [(ngModel)]=\"company\">\n</div>\n<div class=\"float-left ml-2\">\n    <button class=\"btn btn-primary\" (click)=\"checkRelationship()\">Request</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home-active-deal-list/home-active-deal-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home-active-deal-list/home-active-deal-list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"privilege\">\n  <table class=\"table\" id=\"dealTable\">\n    <thead>\n      <tr>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">#</th>\n        <th scope=\"col\" style=\"width: 60%\">Deals</th>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Price</th>\n        <th scope=\"col\" style=\"width: 13%\" class=\"hide\">Qty(left/total)</th>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let deal of dealList; index as i\">\n        <tr>\n          <th scopr=\"row\" class=\"hide\">{{ ('000' + deal.id).slice(-4) }}</th>\n          <td>\n            {{ deal.product_name }}\n            <div\n              class=\"mt-2\"\n              style=\"font-size:smaller\"\n              [innerHTML]=\"deal.note | linkify\"\n            ></div>\n            <hr />\n            <div class=\"float-left text-primary\">\n              Expires At: {{ deal.expires_at | date: 'medium' }}\n            </div>\n            <div class=\"float-right hide text-primary\" *ngIf=\"deal.public\">\n              Privilege: Public\n            </div>\n            <div class=\"float-right hide text-primary\" *ngIf=\"!deal.public\">\n              Privilege: Private\n            </div>\n            <br />\n            <div class=\"text-danger show\">\n              Price: {{ deal.price }} Quantity:\n              <div class=\"text-primary d-inline-block\">{{ deal.quantity }}</div>\n              / {{ deal.quantity + deal.quantityTaken }}\n            </div>\n            <button\n              id=\"{{ i }}\"\n              type=\"button\"\n              class=\"btn btn-outline-success btn-block btn-sm show\"\n              data-toggle=\"modal\"\n              data-target=\"#editForm\"\n              *ngIf=\"privilege\"\n              (click)=\"takeDeal(i)\"\n            >\n              Edit\n            </button>\n          </td>\n          <td class=\"hide text-success\">${{ deal.price }}</td>\n          <td class=\"hide\">\n            <div>\n              <div class=\"text-primary d-inline-block\">{{ deal.quantity }}</div>\n              / {{ deal.quantity + deal.quantityTaken }}\n            </div>\n          </td>\n          <td class=\"hide\">\n            <button\n              id=\"{{ i }}\"\n              type=\"button\"\n              class=\"btn btn-outline-success btn-block btn-sm\"\n              data-toggle=\"modal\"\n              data-target=\"#editForm\"\n              data-whatever=\"@mdo\"\n              *ngIf=\"privilege\"\n              (click)=\"takeDeal(i)\"\n            >\n              Edit\n            </button>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n\n<div *ngIf=\"!privilege\">\n  <table *ngIf=\"noFollowing\" class=\"table\" id=\"dealTable\">\n    <thead>\n      <tr>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">#</th>\n        <th scope=\"col\" style=\"width: 64%\">Deals</th>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Price</th>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Quantity</th>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scopr=\"row\"></th>\n        <td>\n          No Active Deals......\n        </td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n    </tbody>\n  </table>\n  <ng-container *ngFor=\"let following of followingList\">\n    <hr />\n    <label\n      for=\"followingOffers\"\n      value=\"following.company\"\n      id=\"#following\"\n      style=\"font-size:20px\"\n      >Following: {{ following.company }} :</label\n    >\n\n    <table class=\"table\" id=\"dealTable\">\n      <thead>\n        <tr>\n          <th scope=\"col\" style=\"width: 9%\" class=\"hide\">#</th>\n          <th scope=\"col\" style=\"width: 64%\">Deals</th>\n          <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Price</th>\n          <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Quantity</th>\n          <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let deal of dealList; index as i\">\n          <tr>\n            <th scopr=\"row\" class=\"hide\">{{ ('000' + deal.id).slice(-4) }}</th>\n            <td>\n              <span>{{ deal.product_name }}</span>\n              <div\n                class=\"mt-2\"\n                style=\"font-size:smaller\"\n                [innerHTML]=\"deal.note | linkify\"\n              ></div>\n              <p class=\"text-primary show\">\n                Expires At: {{ deal.expires_at | date: 'medium' }}\n              </p>\n              <p class=\"text-danger show\">\n                Price: {{ deal.price }} Quantity: {{ deal.quantity }}\n              </p>\n\n              <button\n                id=\"{{ i }}\"\n                type=\"button\"\n                class=\"btn btn-outline-success btn-block btn-sm show\"\n                data-toggle=\"modal\"\n                data-target=\"#takeForm\"\n                data-whatever=\"@mdo\"\n                *ngIf=\"!privilege\"\n                (click)=\"takeDeal(i)\"\n              >\n                Take\n              </button>\n            </td>\n            <td class=\"hide text-success\">${{ deal.price }}</td>\n            <td id=\"qty{{ i }}\" class=\"hide\">{{ deal.quantity }}</td>\n            <td class=\"hide\">\n              <button\n                id=\"{{ i }}\"\n                type=\"button\"\n                class=\"btn btn-outline-success btn-block btn-sm\"\n                data-toggle=\"modal\"\n                data-target=\"#takeForm\"\n                data-whatever=\"@mdo\"\n                *ngIf=\"!privilege\"\n                (click)=\"takeDeal(i)\"\n              >\n                Take\n              </button>\n            </td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  </ng-container>\n</div>\n<div\n  class=\"modal fade\"\n  id=\"takeForm\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"formTitle\">Take an Deal</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"product\" class=\"col-form-label\">Product:</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              value=\"{{ inbound.product }}\"\n              readonly\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"price\" class=\"col-form-label\">price:</label>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                value=\"{{ inbound.price }}\"\n                readonly\n              />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"quantity\" class=\"col-form-label\">quantity:</label>\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              id=\"quantity\"\n              name=\"quantity\"\n              [(ngModel)]=\"inbound.quantity\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\">Warehouse:</label>\n            <br />\n            <label for=\"warehouse\" class=\"col-form-label\"\n              >Public Warehouse:</label\n            >\n            <select\n              class=\"selectpicker form-control selectwidthauto\"\n              data-live-search=\"true\"\n              name=\"product\"\n              [(ngModel)]=\"selectPublicWarehouse\"\n              style=\"width: auto;\"\n            >\n              <option value=\"\">select one below</option>\n              <option\n                *ngFor=\"let address of publicWarehouse\"\n                name=\"address\"\n                class=\"selectOption\"\n                data-width=\"auto\"\n                data-mobile=\"true\"\n              >\n                {{ address.address }}\n              </option>\n            </select>\n            <button\n              class=\"btn btn-primary btn-sm mt-1\"\n              (click)=\"useSelfWarehouse()\"\n            >\n              Use self warehouse\n            </button>\n            <div *ngIf=\"selfWarehouse\">\n              <label for=\"selfWarehouse\" class=\"col-form-label\"\n                >Self Warehouse:</label\n              >\n\n              <select\n                class=\"selectpicker form-control selectwidthauto\"\n                data-live-search=\"true\"\n                name=\"address\"\n                [(ngModel)]=\"selectPrivateWarehouse\"\n                style=\"width: auto;\"\n              >\n                <option value=\"\">select one below</option>\n                <option\n                  *ngFor=\"let address of privateWarehouse\"\n                  name=\"address\"\n                  class=\"selectOption\"\n                  data-width=\"auto\"\n                  data-mobile=\"true\"\n                >\n                  {{ address.address }}\n                </option>\n              </select>\n              <button\n                class=\"btn btn-primary btn-sm mt-1\"\n                (click)=\"usePublicWarehouse()\"\n              >\n                Cancel\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"createInbound()\"\n          data-dismiss=\"modal\"\n        >\n          Take\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  class=\"modal fade\"\n  id=\"editForm\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"editForm\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"editForm\">Deal edit Form</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group select-hide\">\n            <label for=\"deal-product\" class=\"col-form-label\">Product:</label>\n            <br />\n            <p class=\"text-danger\">\n              Products only shows first 88 Words, use id to search for accurate\n              product(like: #17):\n            </p>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"productName\"\n              value=\"{{ selectDeal.productName }}\"\n              readonly\n            />\n          </div>\n          <div class=\"form-group show\">\n            <label for=\"deal-product\" class=\"col-form-label\">Product:</label>\n            <br />\n            <p class=\"text-danger\">\n              Products only shows product id on mobile view, use id to search\n              for accurate product(like: #17):\n            </p>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"productName\"\n              value=\"{{ selectDeal.productName }}\"\n              readonly\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"deal-price\" class=\"col-form-label\">Price:</label>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"deal-price\"\n                name=\"price\"\n                [(ngModel)]=\"selectDeal.price\"\n              />\n            </div>\n            <button class=\"btn btn-primary btn-sm mt-1\" (click)=\"makeAwards()\">\n              Awards\n            </button>\n            <button\n              class=\"btn btn-primary btn-sm mt-1 ml-1\"\n              (click)=\"cancelAwards()\"\n            >\n              No Awards\n            </button>\n            <hr />\n            <div *ngIf=\"isAwards\">\n              <p>Existed Inbound:</p>\n              <ng-container *ngFor=\"let awardsUser of awardsUsersUnique\">\n                Username:\n                <input\n                  readonly\n                  type=\"text\"\n                  value=\"{{awardsUser}}\"\n                  class=\"form-control\"\n                />\n                amount:\n                <input\n                  readonly\n                  type=\"text\"\n                  value=\"{{ awardsUsersUniqueQty[awardsUser] }}\"\n                  class=\"form-control\"\n                />\n              </ng-container>\n              <label for=\"awards\" class=\"col-form-label\">Awards:</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"awards\"\n                name=\"awards\"\n                [(ngModel)]=\"awards\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"deal-quantity\" class=\"col-form-label\">Quantity:</label>\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              id=\"deal-quantity\"\n              name=\"quantity\"\n              [(ngModel)]=\"selectDeal.quantity\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"deal-expires\" class=\"col-form-label\">Expires At:</label>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <select\n                  class=\"custom-select d-block w-100\"\n                  id=\"month\"\n                  name=\"month\"\n                  [(ngModel)]=\"month\"\n                  required\n                >\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n                  <option>6</option>\n                  <option>7</option>\n                  <option>8</option>\n                  <option>9</option>\n                  <option>10</option>\n                  <option>11</option>\n                  <option>12</option>\n                </select>\n                <p class=\"text-center\">Month</p>\n              </div>\n              <div class=\"col-md-2\">\n                <select\n                  class=\"custom-select d-block w-100\"\n                  id=\"days\"\n                  name=\"days\"\n                  [(ngModel)]=\"days\"\n                  required\n                >\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n                  <option>6</option>\n                  <option>7</option>\n                  <option>8</option>\n                  <option>9</option>\n                  <option>10</option>\n                  <option>11</option>\n                  <option>12</option>\n                  <option>13</option>\n                  <option>14</option>\n                  <option>15</option>\n                  <option>16</option>\n                  <option>17</option>\n                  <option>18</option>\n                  <option>19</option>\n                  <option>20</option>\n                  <option>21</option>\n                  <option>22</option>\n                  <option>23</option>\n                  <option>24</option>\n                  <option>25</option>\n                  <option>26</option>\n                  <option>27</option>\n                  <option>28</option>\n                  <option>29</option>\n                  <option>30</option>\n                  <option>31</option>\n                </select>\n                <p class=\"text-center\">Days</p>\n              </div>\n              <div class=\"col-md-2\">\n                <select\n                  class=\"custom-select d-block w-100\"\n                  id=\"years\"\n                  name=\"year\"\n                  [(ngModel)]=\"year\"\n                  required\n                >\n                  <option value=\"\">2014</option>\n                  <option>2014</option>\n                  <option>2015</option>\n                  <option>2016</option>\n                  <option>2017</option>\n                  <option>2018</option>\n                  <option>2019</option>\n                  <option>2020</option>\n                  <option>2021</option>\n                  <option>2022</option>\n                  <option>2023</option>\n                  <option>2024</option>\n                </select>\n                <p class=\"text-center\">Year</p>\n              </div>\n              <div class=\"col-md-2\">\n                <select\n                  class=\"custom-select d-block w-100\"\n                  id=\"hours\"\n                  name=\"hour\"\n                  [(ngModel)]=\"hour\"\n                  required\n                >\n                  <option>0</option>\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n                  <option>6</option>\n                  <option>7</option>\n                  <option>8</option>\n                  <option>9</option>\n                  <option>10</option>\n                  <option>11</option>\n                  <option>12</option>\n                  <option>13</option>\n                  <option>14</option>\n                  <option>15</option>\n                  <option>16</option>\n                  <option>17</option>\n                  <option>19</option>\n                  <option>20</option>\n                  <option>21</option>\n                  <option>22</option>\n                  <option>23</option>\n                </select>\n                <p class=\"text-center\">Hour</p>\n              </div>\n              <div class=\"col-md-2\">\n                <select\n                  class=\"custom-select d-block w-100\"\n                  id=\"minutes\"\n                  name=\"minutes\"\n                  [(ngModel)]=\"minutes\"\n                  required\n                >\n                  <option>0</option>\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n                  <option>6</option>\n                  <option>7</option>\n                  <option>8</option>\n                  <option>9</option>\n                  <option>10</option>\n                  <option>11</option>\n                  <option>12</option>\n                  <option>13</option>\n                  <option>14</option>\n                  <option>15</option>\n                  <option>16</option>\n                  <option>17</option>\n                  <option>19</option>\n                  <option>20</option>\n                  <option>21</option>\n                  <option>22</option>\n                  <option>23</option>\n                  <option>24</option>\n                  <option>25</option>\n                  <option>26</option>\n                  <option>27</option>\n                  <option>28</option>\n                  <option>29</option>\n                  <option>30</option>\n                  <option>31</option>\n                  <option>32</option>\n                  <option>33</option>\n                  <option>34</option>\n                  <option>35</option>\n                  <option>36</option>\n                  <option>37</option>\n                  <option>38</option>\n                  <option>39</option>\n                  <option>40</option>\n                  <option>41</option>\n                  <option>42</option>\n                  <option>43</option>\n                  <option>44</option>\n                  <option>45</option>\n                  <option>46</option>\n                  <option>47</option>\n                  <option>48</option>\n                  <option>49</option>\n                  <option>50</option>\n                  <option>51</option>\n                  <option>52</option>\n                  <option>53</option>\n                  <option>54</option>\n                  <option>55</option>\n                  <option>56</option>\n                  <option>57</option>\n                  <option>58</option>\n                  <option>59</option>\n                </select>\n                <p class=\"text-center\">Minutes</p>\n              </div>\n            </div>\n            By default, expires in 3 days.\n          </div>\n          <div class=\"form-group\">\n            <label for=\"product-Note\" class=\"col-form-label\">Note:</label>\n            <textarea\n              type=\"text\"\n              class=\"form-control\"\n              id=\"product-note\"\n              cols=\"30\"\n              rows=\"5\"\n              name=\"note\"\n              [(ngModel)]=\"selectDeal.note\"\n            ></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"deal-bonus\" class=\"col-form-label\">Bonus:</label>\n\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"deal-bonus\"\n                name=\"bonus\"\n                [(ngModel)]=\"selectDeal.bonus\"\n              />\n            </div>\n            <small>Give bonus for inbound items to self storages.</small>\n          </div>\n          <div class=\"form-check\">\n            <input\n              class=\"form-check-input\"\n              type=\"checkbox\"\n              value=\"\"\n              id=\"deal-service-tag\"\n              name=\"serviceTag\"\n              [(ngModel)]=\"selectDeal.serviceTag\"\n            />\n            <label class=\"form-check-label\" for=\"deal-service-tag\">\n              Service Tag\n            </label>\n          </div>\n          Require service tags when members confirm inbound items.\n          <hr />\n          Make Deal Public Or Private\n          <br />\n          <button\n            type=\"button\"\n            class=\"btn btn-primary mt-1\"\n            (click)=\"makePublic()\"\n          >\n            Public\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary mt-1 ml-3\"\n            (click)=\"makePrivate()\"\n          >\n            Private\n          </button>\n          <br />\n          <div class=\"form-group\" *ngIf=\"isPublic\">\n            <label for=\"recipient-name\" class=\"col-form-label\">Member:</label>\n            <select\n              class=\"selectpicker\"\n              multiple\n              data-live-search=\"true\"\n              name=\"selectedMember\"\n              [(ngModel)]=\"membersTemp\"\n            >\n              <option *ngFor=\"let member of memberList\" name=\"member\">\n                {{ member.individual }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\" *ngIf=\"isPrivate\">\n            <label for=\"recipient-name\" class=\"col-form-label\">Member:</label>\n            <select\n              class=\"selectpicker\"\n              multiple\n              data-live-search=\"true\"\n              name=\"selectedMember\"\n              [(ngModel)]=\"membersTemp\"\n            >\n              <option\n                *ngFor=\"let group of groupList\"\n                name=\"group\"\n                value=\"{{ group.member }}\"\n              >\n                {{ group.name }}\n              </option>\n            </select>\n          </div>\n          <hr />\n          Every member can see public offers. Only selected users can see\n          private offers.\n          <br />\n          <br />\n          <div class=\"form-check\">\n            <input\n              class=\"form-check-input\"\n              type=\"checkbox\"\n              value=\"\"\n              id=\"notify\"\n              name=\"notify\"\n              [(ngModel)]=\"selectDeal.notify\"\n            />\n            <label class=\"form-check-label\" for=\"notify\">\n              Notify everyone who can see the offer\n            </label>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"updateCompany()\"\n          data-dismiss=\"modal\"\n        >\n          Update\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<div *ngIf=\"privilege\">\n  <table class=\"table\" id=\"dealTable\">\n    <thead>\n      <tr>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">#</th>\n        <th scope=\"col\" style=\"width: 73%\" >Deals</th>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Price</th>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Quantity</th>\n        <!-- <th scope=\"col\" class=\"hide\"></th> -->\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let deal of expiredList; index as i\">\n        <tr>\n          <th scopr=\"row\" class=\"hide\">{{ ('000' + deal.id).slice(-4) }}</th>\n          <td>\n            {{ deal.product_name }}\n            <div\n              class=\"mt-2\"\n              style=\"font-size:smaller\"\n              [innerHTML]=\"deal.note | linkify\"\n            ></div>\n            <p class=\"text-danger show\">Price: {{deal.price}} Quantity: {{ deal.quantity }}/{{ deal.quantity + deal.quantityTaken }}</p>\n          </td>\n          <td class=\"hide text-success\">${{ deal.price }}</td>\n          <td class=\"hide\">{{ deal.quantity }}/{{ deal.quantity + deal.quantityTaken }}</td>\n          <!-- <td class=\"hide\"> -->\n          <!-- </td> -->\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n\n<div *ngIf=\"!privilege\">\n  <table *ngIf=\"noFollowing\" class=\"table\" id=\"dealTable\">\n    <thead>\n      <tr>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">#</th>\n        <th scope=\"col\" style=\"width: 64%\" >Deals</th>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Price</th>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Quantity</th>\n        <th scope=\"col\" style=\"width: 9%\" class=\"hide\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scopr=\"row\"></th>\n        <td>\n          No Active Deals......\n        </td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <!-- </ng-container> -->\n    </tbody>\n  </table>\n  <ng-container *ngFor=\"let following of followingList\">\n    <hr />\n    <label\n      for=\"followingOffers\"\n      value=\"following.company\"\n      id=\"#following\"\n      style=\"font-size:20px\"\n      >Following: {{ following.company }} :</label\n    >\n\n    <table class=\"table\" id=\"dealTable\">\n      <thead>\n        <tr>\n          <th scope=\"col\" style=\"width: 9%\" class=\"hide\">#</th>\n          <th scope=\"col\" style=\"width: 73%\" >Deals</th>\n          <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Price</th>\n          <!-- <th scope=\"col\" style=\"width: 12%\">Quantity</th> -->\n          <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let deal of expiredList; index as i\">\n          <tr>\n            <th scopr=\"row\" class=\"hide\">{{ ('000' + deal.id).slice(-4) }}</th>\n            <td>\n              <span>{{ deal.product_name }}</span>\n              <div\n                class=\"mt-2\"\n                style=\"font-size:smaller\"\n                [innerHTML]=\"deal.note | linkify\"\n              ></div>\n              <p class=\"show text-danger\">Price: {{deal.price}}</p>\n              <button\n              id=\"{{ i }}\"\n              type=\"button\"\n              class=\"btn btn-outline-success btn-block btn-sm show\"\n              data-toggle=\"modal\"\n              data-target=\"#takeForm\"\n              data-whatever=\"@mdo\"\n              *ngIf=\"!privilege\"\n              (click)=\"takeDeal(i)\"\n            >\n              propose\n            </button>\n            </td>\n            <td class=\"hide text-success\">${{ deal.price }}</td>\n            <td class=\"hide\">\n              <button\n                id=\"{{ i }}\"\n                type=\"button\"\n                class=\"btn btn-outline-success btn-block btn-sm\"\n                data-toggle=\"modal\"\n                data-target=\"#takeForm\"\n                data-whatever=\"@mdo\"\n                *ngIf=\"!privilege\"\n                (click)=\"takeDeal(i)\"\n              >\n                propose\n              </button>\n            </td>\n            <div\n              class=\"modal fade\"\n              id=\"takeForm\"\n              tabindex=\"-1\"\n              role=\"dialog\"\n              aria-labelledby=\"exampleModalLabel\"\n              aria-hidden=\"true\"\n            >\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"formTitle\">Propose an Offer</h5>\n                    <button\n                      type=\"button\"\n                      class=\"close\"\n                      data-dismiss=\"modal\"\n                      aria-label=\"Close\"\n                    >\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <form>\n                      <div class=\"form-group\">\n                        <label for=\"product\" class=\"col-form-label\"\n                          >Product:</label\n                        >\n                        <p>{{ inbound.product }}</p>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"price\" class=\"col-form-label\">price:</label>\n                        <p>{{ inbound.price }}</p>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"quantity\" class=\"col-form-label\"\n                          >quantity:</label\n                        >\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"quantity\"\n                          name=\"quantity\"\n                          [(ngModel)]=\"inbound.quantity\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                          <label class=\"col-form-label\">Warehouse:</label>\n                          <br />\n                          <label for=\"warehouse\" class=\"col-form-label\"\n                            >Public Warehouse:</label\n                          >\n                          <select\n                              class=\"selectpicker form-control selectwidthauto\"\n                              data-live-search=\"true\"\n                              name=\"product\"\n                              [(ngModel)]=\"selectPublicWarehouse\"\n                              style=\"width: auto;\"\n                            >\n                            <option value=\"\">select one below</option>\n                              <option\n                                *ngFor=\"let address of publicWarehouse\"\n                                name=\"address\"\n                                class=\"selectOption\"\n                                data-width=\"auto\"\n                                data-mobile=\"true\"\n                              >\n                                {{ address.address }}\n                              </option>\n                            </select>\n                          <button\n                            class=\"btn btn-primary btn-sm mt-1\"\n                            (click)=\"useSelfWarehouse()\"\n                          >\n                            Use self warehouse\n                          </button>\n                          <div *ngIf=\"selfWarehouse\">\n                            <label for=\"selfWarehouse\" class=\"col-form-label\"\n                              >Self Warehouse:</label\n                            >\n                            <select\n                            class=\"selectpicker form-control selectwidthauto\"\n                            data-live-search=\"true\"\n                            name=\"address\"\n                            [(ngModel)]=\"selectPrivateWarehouse\"\n                            style=\"width: auto;\"\n                          >\n                          <option value=\"\">select one below</option>\n                            <option\n                              *ngFor=\"let address of privateWarehouse\"\n                              name=\"address\"\n                              class=\"selectOption\"\n                              data-width=\"auto\"\n                              data-mobile=\"true\"\n                            >\n                              {{ address.address }}\n                            </option>\n                          </select>\n                            <button\n                              class=\"btn btn-primary btn-sm mt-1\"\n                              (click)=\"usePublicWarehouse()\"\n                            >\n                              Cancel\n                            </button>\n                          </div>\n                        </div>\n                    </form>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-secondary\"\n                      data-dismiss=\"modal\"\n                    >\n                      Close\n                    </button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-primary\"\n                      (click)=\"createPropose()\"\n                      data-dismiss=\"modal\"\n                    >\n                      Propose\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  </ng-container>\n</div>\n"

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

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\" id=\"dealTabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        id=\"active-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"active\"\n        role=\"tab\"\n        aria-controls=\"active\"\n        aria-selected=\"true\"\n        >Active Deals</a\n      >\n    </li>\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        id=\"expired-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"expired\"\n        role=\"tab\"\n        aria-controls=\"expired\"\n        aria-selected=\"false\"\n        >Expired Deals</a\n      >\n    </li>\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        id=\"proposed-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"propose\"\n        role=\"tab\"\n        aria-controls=\"proposed\"\n        aria-selected=\"false\"\n        >Proposed Deals</a\n      >\n    </li>\n  </ul>\n  <br />\n  <form class=\"float-left my-2\">\n    <input\n      class=\"form-control mr-sm-2\"\n      type=\"text\"\n      placeholder=\"Search\"\n      aria-label=\"Search\"\n      id=\"searchInput\"\n      (keyup)=\"search()\"\n    />\n  </form>\n  <div class=\"float-right my-2\">\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-success btn-block\"\n      data-toggle=\"modal\"\n      data-target=\"#createForm\"\n      data-whatever=\"@mdo\"\n      *ngIf=\"privilege\"\n    >\n      Create\n    </button>\n  </div>\n  <br />\n  <div class=\"tab-content mt-5\" id=\"dealLists\">\n    <router-outlet></router-outlet>\n  </div>\n  <div\n    class=\"modal fade\"\n    id=\"createForm\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"createFrom\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"createFrom\">Deal Create Form</h5>\n          <button\n            type=\"button\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group select-hide\">\n              <label for=\"deal-product\" class=\"col-form-label\">Product:</label>\n              <br />\n              <p class=\"text-danger\">\n                Products only shows first 88 Words, use id to search for\n                accurate product(like: #17):\n              </p>\n\n              <select\n                class=\"selectpicker form-control selectwidthauto\"\n                data-live-search=\"true\"\n                name=\"product\"\n                [(ngModel)]=\"selectProduct\"\n                (ngModelChange)=\"setProductNameId()\"\n                style=\"width: auto;\"\n              >\n                <option\n                  *ngFor=\"let nameid of productList\"\n                  name=\"productsId\"\n                  [ngValue]=\"nameid\"\n                  class=\"selectOption\"\n                  data-width=\"auto\"\n                  data-mobile=\"true\"\n                >\n                  #{{ nameid.id }} {{ nameid.name | slice: 0:84 }}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group show\">\n              <label for=\"deal-product\" class=\"col-form-label\">Product:</label>\n              <br />\n              <p class=\"text-danger\">\n                Products only shows product id on mobile view, use id to search\n                for accurate product(like: #17):\n              </p>\n\n              <select\n                class=\"selectpicker form-control selectwidthauto\"\n                data-live-search=\"true\"\n                name=\"product\"\n                [(ngModel)]=\"selectProduct\"\n                (ngModelChange)=\"setProductNameId()\"\n                style=\"width: auto;\"\n              >\n                <option\n                  *ngFor=\"let nameid of productList\"\n                  name=\"productsId\"\n                  [ngValue]=\"nameid\"\n                  class=\"selectOption\"\n                  data-width=\"auto\"\n                  data-mobile=\"true\"\n                >\n                  #{{ nameid.id }}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"deal-price\" class=\"col-form-label\">Price:</label>\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"deal-price\"\n                  name=\"price\"\n                  [(ngModel)]=\"deal.price\"\n                />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"deal-quantity\" class=\"col-form-label\"\n                >Quantity:</label\n              >\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"deal-quantity\"\n                name=\"quantity\"\n                [(ngModel)]=\"deal.quantity\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"deal-expires\" class=\"col-form-label\"\n                >Expires At:</label\n              >\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <select\n                    class=\"custom-select d-block w-100\"\n                    id=\"month\"\n                    name=\"month\"\n                    [(ngModel)]=\"month\"\n                    required\n                  >\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                    <option>5</option>\n                    <option>6</option>\n                    <option>7</option>\n                    <option>8</option>\n                    <option>9</option>\n                    <option>10</option>\n                    <option>11</option>\n                    <option>12</option>\n                  </select>\n                  <p class=\"text-center\">Month</p>\n                </div>\n                <div class=\"col-md-2\">\n                  <select\n                    class=\"custom-select d-block w-100\"\n                    id=\"days\"\n                    name=\"days\"\n                    [(ngModel)]=\"days\"\n                    required\n                  >\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                    <option>5</option>\n                    <option>6</option>\n                    <option>7</option>\n                    <option>8</option>\n                    <option>9</option>\n                    <option>10</option>\n                    <option>11</option>\n                    <option>12</option>\n                    <option>13</option>\n                    <option>14</option>\n                    <option>15</option>\n                    <option>16</option>\n                    <option>17</option>\n                    <option>18</option>\n                    <option>19</option>\n                    <option>20</option>\n                    <option>21</option>\n                    <option>22</option>\n                    <option>23</option>\n                    <option>24</option>\n                    <option>25</option>\n                    <option>26</option>\n                    <option>27</option>\n                    <option>28</option>\n                    <option>29</option>\n                    <option>30</option>\n                    <option>31</option>\n                  </select>\n                  <p class=\"text-center\">Days</p>\n                </div>\n                <div class=\"col-md-2\">\n                  <select\n                    class=\"custom-select d-block w-100\"\n                    id=\"years\"\n                    name=\"year\"\n                    [(ngModel)]=\"year\"\n                    required\n                  >\n                    <option value=\"\">2014</option>\n                    <option>2014</option>\n                    <option>2015</option>\n                    <option>2016</option>\n                    <option>2017</option>\n                    <option>2018</option>\n                    <option>2019</option>\n                    <option>2020</option>\n                    <option>2021</option>\n                    <option>2022</option>\n                    <option>2023</option>\n                    <option>2024</option>\n                  </select>\n                  <p class=\"text-center\">Year</p>\n                </div>\n                <div class=\"col-md-2\">\n                  <select\n                    class=\"custom-select d-block w-100\"\n                    id=\"hours\"\n                    name=\"hour\"\n                    [(ngModel)]=\"hour\"\n                    required\n                  >\n                    <option>0</option>\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                    <option>5</option>\n                    <option>6</option>\n                    <option>7</option>\n                    <option>8</option>\n                    <option>9</option>\n                    <option>10</option>\n                    <option>11</option>\n                    <option>12</option>\n                    <option>13</option>\n                    <option>14</option>\n                    <option>15</option>\n                    <option>16</option>\n                    <option>17</option>\n                    <option>19</option>\n                    <option>20</option>\n                    <option>21</option>\n                    <option>22</option>\n                    <option>23</option>\n                  </select>\n                  <p class=\"text-center\">Hour</p>\n                </div>\n                <div class=\"col-md-2\">\n                  <select\n                    class=\"custom-select d-block w-100\"\n                    id=\"minutes\"\n                    name=\"minutes\"\n                    [(ngModel)]=\"minutes\"\n                    required\n                  >\n                    <option>0</option>\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                    <option>5</option>\n                    <option>6</option>\n                    <option>7</option>\n                    <option>8</option>\n                    <option>9</option>\n                    <option>10</option>\n                    <option>11</option>\n                    <option>12</option>\n                    <option>13</option>\n                    <option>14</option>\n                    <option>15</option>\n                    <option>16</option>\n                    <option>17</option>\n                    <option>19</option>\n                    <option>20</option>\n                    <option>21</option>\n                    <option>22</option>\n                    <option>23</option>\n                    <option>24</option>\n                    <option>25</option>\n                    <option>26</option>\n                    <option>27</option>\n                    <option>28</option>\n                    <option>29</option>\n                    <option>30</option>\n                    <option>31</option>\n                    <option>32</option>\n                    <option>33</option>\n                    <option>34</option>\n                    <option>35</option>\n                    <option>36</option>\n                    <option>37</option>\n                    <option>38</option>\n                    <option>39</option>\n                    <option>40</option>\n                    <option>41</option>\n                    <option>42</option>\n                    <option>43</option>\n                    <option>44</option>\n                    <option>45</option>\n                    <option>46</option>\n                    <option>47</option>\n                    <option>48</option>\n                    <option>49</option>\n                    <option>50</option>\n                    <option>51</option>\n                    <option>52</option>\n                    <option>53</option>\n                    <option>54</option>\n                    <option>55</option>\n                    <option>56</option>\n                    <option>57</option>\n                    <option>58</option>\n                    <option>59</option>\n                  </select>\n                  <p class=\"text-center\">Minutes</p>\n                </div>\n              </div>\n              By default, expires in 3 days.\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product-Note\" class=\"col-form-label\">Note:</label>\n              <textarea\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-note\"\n                cols=\"30\"\n                rows=\"5\"\n                name=\"note\"\n                [(ngModel)]=\"deal.note\"\n              ></textarea>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"deal-bonus\" class=\"col-form-label\">Bonus:</label>\n\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"deal-bonus\"\n                  name=\"bonus\"\n                  [(ngModel)]=\"deal.bonus\"\n                />\n              </div>\n              <small>Give bonus for inbound items to self storages.</small>\n            </div>\n            <div class=\"form-check\">\n              <input\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                value=\"\"\n                id=\"deal-service-tag\"\n                name=\"serviceTag\"\n                [(ngModel)]=\"deal.serviceTag\"\n              />\n              <label class=\"form-check-label\" for=\"deal-service-tag\">\n                Service Tag\n              </label>\n            </div>\n            Require service tags when members confirm inbound items.\n            <hr />\n            Make Deal Public Or Private\n            <br />\n            <button\n              type=\"button\"\n              class=\"btn btn-primary mt-1\"\n              (click)=\"makePublic()\"\n            >\n              Public\n            </button>\n            <button\n              type=\"button\"\n              class=\"btn btn-primary mt-1 ml-3\"\n              (click)=\"makePrivate()\"\n            >\n              Private\n            </button>\n            <br />\n            <div class=\"form-group\" *ngIf=\"isPublic\">\n              <label for=\"recipient-name\" class=\"col-form-label\">Member:</label>\n              <select\n                class=\"selectpicker\"\n                multiple\n                data-live-search=\"true\"\n                name=\"selectedMember\"\n                [(ngModel)]=\"membersTemp\"\n              >\n                <option *ngFor=\"let member of memberList\" name=\"member\">\n                  {{ member.individual }}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\" *ngIf=\"isPrivate\">\n              <label for=\"recipient-name\" class=\"col-form-label\">Member:</label>\n              <select\n                class=\"selectpicker\"\n                multiple\n                data-live-search=\"true\"\n                name=\"selectedMember\"\n                [(ngModel)]=\"membersTemp\"\n              >\n                <option\n                  *ngFor=\"let group of groupList\"\n                  name=\"group\"\n                  value=\"{{ group.member }}\"\n                >\n                  {{ group.name }}\n                </option>\n              </select>\n            </div>\n            <hr />\n            Every member can see public offers. Only selected users can see\n            private offers.\n            <br />\n            <br />\n            <div class=\"form-check\">\n              <input\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                value=\"\"\n                id=\"notify\"\n                name=\"notify\"\n                [(ngModel)]=\"deal.notify\"\n              />\n              <label class=\"form-check-label\" for=\"notify\">\n                Notify everyone who can see the offer\n              </label>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n            Close\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"create()\"\n            data-dismiss=\"modal\"\n          >\n            Add\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/propose-deal/propose-deal.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/propose-deal/propose-deal.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" id=\"inboundTable\" *ngIf=\"!noRecord\">\n  <thead>\n    <tr>\n      <th scope=\"col\" class=\"hide\">#</th>\n      <th scope=\"col\">Inbound</th>\n      <th scope=\"col\" *ngIf=\"privilege\" class=\"hide\">From</th>\n      <th scope=\"col\" class=\"hide\">Price</th>\n      <th scope=\"col\" class=\"hide\">Quantity</th>\n      <th scope=\"col\" class=\"hide\">WareHouse</th>\n      <th scope=\"col\" class=\"hide\">LastUpdate</th>\n      <th scope=\"col\" class=\"hide\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let record of proposeList; index as i\">\n      <tr>\n        <th scopr=\"row\" class=\"hide\">{{ ('000' + record.id).slice(-4) }}</th>\n        <td>\n          <div>\n            {{ record.product }}\n            <p class=\"text-danger show\">From: {{record.individual}} Warehouse: {{record.warehouse}}</p>\n            <p class=\"text-danger show\">Price: {{record.price}} Quantity: {{record.quantity}}</p>\n            <p class=\"text-danger show\">Update: {{record.updatedAt | date: 'medium'}}</p>\n            <div *ngIf=\"!record.proposeStatus\" class=\"show\">\n                Action: Waiting\n                <div *ngIf=\"privilege\">\n                    <button\n                    id=\"{{ i }}\"\n                    type=\"button\"\n                    class=\"btn btn-outline-success btn-block btn-sm\"\n                    data-toggle=\"modal\"\n                    data-target=\"#proposeConfirmForm\"\n                    *ngIf=\"privilege\"\n                    (click)=\"select(i)\"\n                  >\n                    Confirm\n                  </button>\n                </div>\n              </div>\n              <div *ngIf=\"record.proposeStatus\">\n                Action: Confirmed\n              </div>\n            <!-- </ng-container> -->\n          </div>\n        </td>\n        <td *ngIf=\"privilege\" class=\"hide\">{{ record.individual }}</td>\n        <!-- <td *ngIf=\"!privilege\">{{ record.individual }}</td> -->\n        <td class=\"hide text-success\">${{ record.price }}</td>\n        <td class=\"hide\">{{ record.quantity }}</td>\n        <td class=\"hide\">{{ record.warehouse }}</td>\n        <td class=\"hide\">{{ record.updatedAt | date: 'medium'}}</td>\n        <td class=\"hide\">\n          <div *ngIf=\"!record.proposeStatus\" >\n            Waiting\n            <div *ngIf=\"privilege\">\n                <button\n                id=\"{{ i }}\"\n                type=\"button\"\n                class=\"btn btn-outline-success btn-block btn-sm\"\n                data-toggle=\"modal\"\n                data-target=\"#proposeConfirmForm\"\n                *ngIf=\"privilege\"\n                (click)=\"select(i)\"\n              >\n                Confirm\n              </button>\n              <!-- <button class=\"btn btn-outline-success btn-block btn-sm\" (click)=\"proposeConfirm(record.id, record.quantity, record.dealId)\">Confirm</button> -->\n            </div>\n          </div>\n          <div *ngIf=\"record.proposeStatus\">\n            Confirmed\n          </div>\n          <!-- <button class=\"btn btn-primary btn-sm mb-2\" *ngIf=\"!privilege\">\n            Confirm\n          </button> -->\n          <!-- <button class=\"btn btn-primary btn-sm\">Cancel</button> -->\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n\n<table class=\"table\" id=\"inboundTable\" *ngIf=\"noRecord\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\">#</th>\n      <th scope=\"col\" style=\"width: 30%\">Inbound</th>\n      <th scope=\"col\" style=\"width: 12%\" *ngIf=\"privilege\">From</th>\n      <th scope=\"col\" style=\"width: 10%\">Price</th>\n      <th scope=\"col\" style=\"width: 12%\">Quantity</th>\n      <th scope=\"col\" style=\"width: 9\">WareHouse</th>\n      <th scope=\"col\" style=\"width: 9\">LastUpdate</th>\n      <th scope=\"col\" style=\"width: 9%\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scopr=\"row\"></th>\n      <td>\n        No Inbound Record......\n      </td>\n      <td *ngIf=\"privilege\"></td>\n      <!-- <td *ngIf=\"!privilege\">{{ record.individual }}</td> -->\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td>\n        <!-- <button class=\"btn btn-primary btn-sm mb-2\" *ngIf=\"!privilege\">\n              Confirm\n            </button> -->\n        <!-- <button class=\"btn btn-primary btn-sm\">Cancel</button> -->\n      </td>\n    </tr>\n  </tbody>\n</table>\n<div\nclass=\"modal fade\"\nid=\"proposeConfirmForm\"\ntabindex=\"-1\"\nrole=\"dialog\"\naria-hidden=\"true\"\n>\n<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"formTitle\">Confirm a Propose</h5>\n      <button\n        type=\"button\"\n        class=\"close\"\n        data-dismiss=\"modal\"\n        aria-label=\"Close\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"product\" class=\"col-form-label\"\n            >Product:</label\n          >\n          <input type=\"text\" class=\"form-control\" value=\"{{selectInbound.product}}\" readonly>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"price\" class=\"col-form-label\">price:</label>\n          <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>\n              <input type=\"number\" class=\"form-control\" name=\"price\" value=\"{{selectInbound.price}}\" readonly>\n            </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"quantity\" class=\"col-form-label\"\n            >quantity:</label\n          >\n          <input\n            type=\"number\"\n            class=\"form-control\"\n            id=\"quantity\"\n            name=\"quantity\"\n            [(ngModel)] = \"selectInbound.quantity\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"warehouse\" class=\"col-form-label\"\n            >warehouse:</label\n          >\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"warehouse\"\n            name=\"warehouse\"\n            [(ngModel)]=\"selectInbound.warehouse\"\n            readonly\n          />\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button\n        type=\"button\"\n        class=\"btn btn-secondary\"\n        data-dismiss=\"modal\"\n      >\n        Close\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary\"\n        (click)=\"proposeConfirm()\"\n        data-dismiss=\"modal\"\n      >\n        Confirm\n      </button>\n    </div>\n  </div>\n</div>\n</div>\n"

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

module.exports = "<table class=\"table\" id=\"inboundTable\" *ngIf=\"!noRecord\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\" class=\"hide\">#</th>\n      <th scope=\"col\" style=\"width: 30%\">Inbound</th>\n      <th scope=\"col\" style=\"width: 12%\" *ngIf=\"privilege\" class=\"hide\">\n        From\n      </th>\n      <th scope=\"col\" style=\"width: 10%\" class=\"hide\">Price</th>\n      <th scope=\"col\" style=\"width: 12%\" class=\"hide\">Quantity</th>\n      <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Location</th>\n      <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Updated</th>\n      <th scope=\"col\" style=\"width: 9%\" class=\"hide\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let record of recordList; index as i\">\n      <tr>\n        <th scopr=\"row\" class=\"hide\">{{ ('000' + record.id).slice(-4) }}</th>\n        <td>\n          <div>\n            {{ record.product }}\n            <p class=\"text-primary show\">\n              Update: {{ record.updatedAt | date: 'medium' }}\n            </p>\n            <p class=\"text-danger show\" *ngIf=\"privilege\">\n              From: {{ record.individual }}\n            </p>\n            <div class=\"text-danger show\">\n              Price:{{ record.price }}\n\n          <div *ngIf=\"!record.publicWarehouse\">+ {{ record.bonus }}(bonus)</div>\n          <div *ngIf=\"record.awards\">+ {{ record.awards }}(awards)</div>\n              Quantity: {{ record.quantity }}\n            </div>\n            <p class=\"text-danger show\">Warehouse: {{ record.warehouse }}</p>\n            <p class=\"text-danger show\">Status: {{ status[record.status] }}</p>\n            <!-- </ng-container> -->\n          </div>\n          <button\n          id=\"{{ i }}\"\n          type=\"button\"\n          class=\"btn btn-outline-success btn-block btn-sm show\"\n          data-toggle=\"modal\"\n          data-target=\"#proposeEditForm\"\n          *ngIf=\"!record.status && !privilege\"\n          (click)=\"select(i)\"\n        >\n          Edit\n        </button>\n        </td>\n        <td *ngIf=\"privilege\" class=\"hide\">{{ record.individual }}</td>\n        <!-- <td *ngIf=\"!privilege\">{{ record.individual }}</td> -->\n        <td class=\"hide text-success\">\n          ${{ record.price }}\n          <div *ngIf=\"!record.publicWarehouse\">+ {{ record.bonus }}(bonus)</div>\n          <div *ngIf=\"record.awards\">+ {{ record.awards }}(awards)</div>\n        </td>\n        <td class=\"hide\">{{ record.quantity }}</td>\n        <td class=\"hide\">{{ record.warehouse }}</td>\n        <td class=\"hide\">{{ record.updatedAt | date: 'medium' }}</td>\n        <td class=\"hide\">\n          {{ status[record.status] }}\n          <button\n          id=\"{{ i }}\"\n          type=\"button\"\n          class=\"btn btn-outline-success btn-block btn-sm\"\n          data-toggle=\"modal\"\n          data-target=\"#proposeEditForm\"\n          *ngIf=\"!record.status && !privilege\"\n          (click)=\"select(i)\"\n        >\n          Edit\n        </button>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n\n<table class=\"table\" id=\"inboundTable\" *ngIf=\"noRecord\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\">#</th>\n      <th scope=\"col\" style=\"width: 30%\">Inbound</th>\n      <th scope=\"col\" style=\"width: 12%\" *ngIf=\"privilege\">From</th>\n      <th scope=\"col\" style=\"width: 10%\">Price</th>\n      <th scope=\"col\" style=\"width: 12%\">Quantity</th>\n      <th scope=\"col\" style=\"width: 9\">WareHouse</th>\n      <th scope=\"col\" style=\"width: 9\">LastUpdate</th>\n      <th scope=\"col\" style=\"width: 9%\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scopr=\"row\"></th>\n      <td>\n        No Inbound Record......\n      </td>\n      <td *ngIf=\"privilege\"></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<div\nclass=\"modal fade\"\nid=\"proposeEditForm\"\ntabindex=\"-1\"\nrole=\"dialog\"\naria-hidden=\"true\"\n>\n<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"formTitle\">Edit a Propose</h5>\n      <button\n        type=\"button\"\n        class=\"close\"\n        data-dismiss=\"modal\"\n        aria-label=\"Close\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"product\" class=\"col-form-label\"\n            >Product:</label\n          >\n          <input type=\"text\" class=\"form-control\" value=\"{{selectInbound.product}}\" readonly>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"price\" class=\"col-form-label\">price:</label>\n          <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>\n              <input type=\"number\" class=\"form-control\" name=\"price\" value=\"{{selectInbound.price}}\" readonly>\n            </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"quantity\" class=\"col-form-label\"\n            >quantity:</label\n          >\n          <input\n            type=\"number\"\n            class=\"form-control\"\n            id=\"quantity\"\n            name=\"quantity\"\n            [(ngModel)] = \"selectInbound.quantity\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"warehouse\" class=\"col-form-label\"\n            >warehouse:</label\n          >\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"warehouse\"\n            name=\"warehouse\"\n            value=\"{{selectInbound.warehouse}}\"\n            readonly\n          />\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button\n        type=\"button\"\n        class=\"btn btn-secondary\"\n        data-dismiss=\"modal\"\n      >\n        Close\n      </button>\n      <!-- <button\n      type=\"button\"\n      class=\"btn btn-primary\"\n      (click)=\"cancelInbound()\"\n      data-dismiss=\"modal\"\n    >\n      Cancel All\n    </button> -->\n      <button\n        type=\"button\"\n        class=\"btn btn-primary\"\n        (click)=\"updateInboundQty()\"\n        data-dismiss=\"modal\"\n      >\n        Confirm\n      </button>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products-active-list/products-active-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products-active-list/products-active-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" id=\"productTable\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 9%\">#</th>\n      <th scope=\"col\" style=\"width: 80%\">Products</th>\n      <th scope=\"col\" style=\"width: 11%\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let activeProducts of activeProductsList; index as i\">\n      <tr>\n        <th scopr=\"row\">\n          <div>\n            {{ ('000' + activeProducts.id).slice(-4) }}\n            <br />\n            <img src=\"{{ activeProducts.link }}\" height=\"25\" />\n          </div>\n        </th>\n        <td>\n          {{ activeProducts.name }}\n        </td>\n        <!-- <td> -->\n        <!-- <button class=\"btn btn-primary btn-sm mb-1\">Details</button> -->\n        <button\n          type=\"button\"\n          class=\"btn btn-outline-success btn-block mt-1\"\n          data-toggle=\"modal\"\n          data-target=\"#productEditForm\"\n          data-whatever=\"@mdo\"\n          (click)=\"editProductSelect(i)\"\n        >\n          Edit\n        </button>\n        <!-- </td> -->\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n<div\n  class=\"modal fade\"\n  id=\"productEditForm\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"productEditForm\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"createFrom\">Product Edit Form</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form ngNativeValidate>\n          <div class=\"form-group\">\n            <label for=\"product-name\" class=\"col-form-label\">Name:</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"product-name\"\n              name=\"name\"\n              [(ngModel)]=\"selectProduct.name\"\n            />\n            <small>* Required</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"product-condition\" class=\"col-form-label\"\n              >Condition:</label\n            >\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"product-condition\"\n              name=\"condition\"\n              [(ngModel)]=\"selectProduct.condition\"\n              readonly\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"product-price\" class=\"col-form-label\">Price:</label>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-price\"\n                name=\"msrp\"\n                [(ngModel)]=\"selectProduct.msrp\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"product-asin\" class=\"col-form-label\">ASIN:</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"product-asin\"\n              name=\"asin\"\n              [(ngModel)]=\"selectProduct.asin\"\n            />\n            <small\n              >Each ASIN consists of 10 alphanumerics. Search listings with the\n              same ASINs.</small\n            >\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"product-upc\" class=\"col-form-label\">UPC:</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-upc\"\n                name=\"upc\"\n                [(ngModel)]=\"selectProduct.upc\"\n              />\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"product-weight\" class=\"col-form-label\">Weight:</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-weight\"\n                name=\"weight\"\n                [(ngModel)]=\"selectProduct.weight\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"product-Note\" class=\"col-form-label\">Note:</label>\n            <textarea\n              type=\"text\"\n              class=\"form-control\"\n              id=\"product-note\"\n              cols=\"30\"\n              rows=\"10\"\n              name=\"note\"\n              [(ngModel)]=\"selectProduct.note\"\n            ></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"product_link\" class=\"col-form-label\"\n              >Product Image Link</label\n            >\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"product_link\"\n              name=\"productLink\"\n              [(ngModel)]=\"selectProduct.link\"\n            />\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"update()\"\n          data-dismiss=\"modal\"\n        >\n          Update\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"create()\"\n          data-dismiss=\"modal\"\n          disabled\n        >\n          Update\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\" id=\"dealTabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link active\"\n        id=\"active-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"product_active\"\n        role=\"tab\"\n        aria-controls=\"active\"\n        aria-selected=\"true\"\n        >Active Products</a\n      >\n    </li>\n  </ul>\n  <br>\n    <form class=\"float-left my-2\">\n      <input\n        class=\"form-control\"\n        type=\"search\"\n        placeholder=\"Search\"\n        aria-label=\"Search\"\n        id=\"productSearchInput\"\n        (keyup)=\"search()\"\n      />\n    </form>\n    <div class=\"float-right my-2\">\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-success btn-block\"\n        data-toggle=\"modal\"\n        data-target=\"#createForm\"\n        data-whatever=\"@mdo\"\n      >\n        Create\n      </button>\n  </div>\n  <div class=\"tab-content\" id=\"productsLists\">\n    <router-outlet></router-outlet>\n  </div>\n  <div\n    class=\"modal fade\"\n    id=\"createForm\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"createFrom\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"createFrom\">Product Create Form</h5>\n          <button\n            type=\"button\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form ngNativeValidate>\n            <div class=\"form-group\">\n              <label for=\"product-name\" class=\"col-form-label\">Name:</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-name\"\n                name=\"name\"\n                [(ngModel)]=\"product.name\"\n              />\n              <small>* Required</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product-condition\" class=\"col-form-label\"\n                >Condition:</label\n              >\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-condition\"\n                name=\"condition\"\n                [(ngModel)]=\"product.condition\"\n                readonly\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product-price\" class=\"col-form-label\">Price:</label>\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input type=\"text\" class=\"form-control\"\n                id=\"product-price\"\n                name=\"msrp\"\n                [(ngModel)]=\"product.msrp\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product-asin\" class=\"col-form-label\">ASIN:</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-asin\"\n                name=\"asin\"\n                [(ngModel)]=\"product.asin\"\n              />\n              <small>Each ASIN consists of 10 alphanumerics. Search listings with the\n                same ASINs.</small>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"product-upc\" class=\"col-form-label\">UPC:</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"product-upc\"\n                  name=\"upc\"\n                  [(ngModel)]=\"product.upc\"\n                />\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"product-weight\" class=\"col-form-label\"\n                  >Weight:</label\n                >\n                <input type=\"text\" class=\"form-control\" id=\"product-weight\" name=\"weight\" [(ngModel)]=\"product.weight\"/>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product-Note\" class=\"col-form-label\">Note:</label>\n              <textarea\n                type=\"text\"\n                class=\"form-control\"\n                id=\"product-note\"\n                cols=\"30\"\n                rows=\"10\"\n                name=\"note\"\n                [(ngModel)]=\"product.note\"\n              ></textarea>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"product_link\" class=\"col-form-label\">Product Image Link</label>\n              <input type=\"text\" class=\"form-control\" id=\"product_link\" name=\"productLink\" [(ngModel)]=\"product.link\" />\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n            Close\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"create()\" data-dismiss=\"modal\" *ngIf=\"product.name\">Add</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"create()\" data-dismiss=\"modal\" *ngIf=\"!product.name\" disabled>Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/storage/storage.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/storage/storage.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\" id=\"dealTabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link active\"\n        id=\"active-tab\"\n        data-toggle=\"tab\"\n        routerLink=\"active\"\n        role=\"tab\"\n        aria-controls=\"active\"\n        aria-selected=\"true\"\n        >Back</a\n      >\n    </li>\n  </ul>\n  <br />\n  <div class=\"float-right my-2\">\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-success btn-block\"\n      data-toggle=\"modal\"\n      data-target=\"#addressCreateFrom\"\n      data-whatever=\"@mdo\"\n    >\n      Create\n    </button>\n  </div>\n  <br />\n  <table class=\"table\" id=\"addressTable\">\n      <thead>\n        <tr>\n          <th scope=\"col\" style=\"width: 9%\" class=\"hide\">#</th>\n          <th scope=\"col\" style=\"width: 91%\">Address</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let address of addressList; index as i\">\n          <tr>\n            <th scopr=\"row\" class=\"hide\">{{ ('000' + address.id).slice(-4) }}</th>\n            <td>\n              {{ address.address }}\n            </td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  <div\n    class=\"modal fade\"\n    id=\"addressCreateFrom\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Address Create Form</h5>\n          <button\n            type=\"button\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"address\">Address:</label>\n              <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" [(ngModel)]=\"addressAdd\"/>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n                  Close\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-primary\"\n                  data-dismiss=\"modal\"\n                  (click) = \"create()\"\n                >\n                  Add\n                </button>\n              </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-bar/top-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbar\"\n    aria-controls=\"navbar\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbar\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Demo</a>\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\"  id=\"nav-dashboard\" >\n        <a class=\"nav-link\" routerLink=\"/dashboard\" *ngIf=\"currentUser\" (click)=\"ngOnInit()\"\n          >Dashboard</a\n        >\n      </li>\n      <li class=\"nav-item\" id=\"nav-deal\">\n        <a class=\"nav-link\" routerLink=\"/home\" *ngIf=\"currentUser\" (click)=\"ngOnInit()\">Deal</a>\n      </li>\n      <li class=\"nav-item\" id=\"nav-inbound\">\n        <a class=\"nav-link\" routerLink=\"/inbound\" *ngIf=\"currentUser\" (click)=\"ngOnInit()\"\n          >Inbound</a\n        >\n      </li>\n\n      <li class=\"nav-item\" id=\"nav-products\">\n        <a class=\"nav-link\" routerLink=\"/products\" *ngIf=\"company\" (click)=\"ngOnInit()\"\n          >Products</a\n        >\n      </li>\n\n      <li class=\"nav-item\" id=\"nav-groups\">\n        <a class=\"nav-link\" routerLink=\"/groups\" *ngIf=\"company\" (click)=\"ngOnInit()\"\n          >Groups</a\n        >\n      </li>\n    </ul>\n\n    <a\n      class=\"btn btn-outline-primary\"\n      routerLink=\"/register\"\n      *ngIf=\"!currentUser\"\n      >Register</a\n    >\n    <a class=\"btn btn-outline-primary\" *ngIf=\"currentUser\" (click)=\"logout()\"\n      >Log out</a\n    >\n  </div>\n</nav>\n\n<div id='flush-block' class=\"container\">\n    <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"company\">\n        You Signed In As a Member of Company\n      </div>\n      <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"individual\">\n          You Signed In As an Individual\n        </div>\n</div>\n<div id='storage-block' class=\"container\">\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"company\">\n      click <a routerLink=\"/storage\">here</a> to go to storage setting\n  </div>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"individual\">\n        click <a routerLink=\"/storage\">here</a> to go to storage setting\n      </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user_components/activate/activate.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user_components/activate/activate.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>activated!</h1>\n<h1><a class=\"alert-link\" routerLink=\"/signin\">Click here back to sign in</a></h1>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user_components/register-form/register-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user_components/register-form/register-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"registerFromController\">\n  <div class=\"text-center mb-4\">\n    <img\n      class=\"mb-4\"\n      src=\"./assets/bootstrap-solid.svg\"\n      alt=\"\"\n      width=\"72\"\n      height=\"72\"\n    />\n  </div>\n  <form class=\"form-signin\" (ngSubmit)=\"user_register()\" #registerFrom=\"ngForm\">\n    <div class=\"alert alert-primary\" role=\"alert\" *ngIf=\"isRegistered\">\n      You have successfully registered!\n      Go to your Email and Click activate link\n      <br />\n      <a class=\"alert-link\" routerLink=\"/signin\">Click here back to sign in</a>\n      <button\n        type=\"button\"\n        class=\"close\"\n        data-dismiss=\"alert\"\n        aria-label=\"Close\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div\n      class=\"alert alert-danger\"\n      role=\"alert\"\n      *ngIf=\"!pwdValid() && !password.pristine && !ConfirmedPassword.pristine\"\n    >\n      Password and Confirmed Password are not match!\n    </div>\n\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"error\">\n      {{ error.errors[0].message }}\n    </div>\n    <div class=\"form-label-group\">\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"username\"\n        required\n        autofocus\n        [(ngModel)]=\"register.username\"\n        name=\"username\"\n        required\n      />\n      <label for=\"username\">Username</label>\n    </div>\n    <div class=\"form-label-group\">\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"phone\"\n        required\n        autofocus\n        [(ngModel)]=\"register.phone\"\n        name=\"phone\"\n        required\n      />\n      <label for=\"phone\">phone</label>\n    </div>\n    <div class=\"form-label-group\">\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        id=\"email\"\n        name=\"email\"\n        required\n        autofocus\n        [(ngModel)]=\"register.email\"\n        required\n      />\n      <label for=\"inputEmail\">Email</label>\n    </div>\n    <div class=\"form-label-group\">\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"password\"\n        required\n        autofocus\n        [(ngModel)]=\"register.password\"\n        name=\"password\"\n        #password=\"ngModel\"\n        required\n      />\n      <label for=\"password\">Password</label>\n    </div>\n    <div class=\"form-label-group\">\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"ConfirmedPassword\"\n        required\n        autofocus\n        [(ngModel)]=\"confirmedPassword\"\n        name=\"confirmedPassword\"\n        #ConfirmedPassword=\"ngModel\"\n        [(ngModel)]=\"confirmedPassword\"\n      />\n      <label for=\"ConfirmedPassword\">Confirmed Password</label>\n      <small class=\"form-text text-muted\">Fields all required</small>\n    </div>\n    <button\n      class=\"btn btn-lg btn-primary btn-block\"\n      [disabled]=\"!pwdValid()\"\n      type=\"submit\"\n    >\n      Register\n    </button>\n    <button\n      class=\"btn btn-lg btn-primary btn-block\"\n      type=\"submit\"\n      routerLink=\"/signin\"\n    >\n      Back to Sign in\n    </button>\n  </form>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
/* harmony import */ var _inbound_inbound_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inbound/inbound.component */ "./src/app/inbound/inbound.component.ts");
/* harmony import */ var _inbound_to_confirm_list_to_confirm_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inbound/to-confirm-list/to-confirm-list.component */ "./src/app/inbound/to-confirm-list/to-confirm-list.component.ts");
/* harmony import */ var _inbound_reported_list_reported_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inbound/reported-list/reported-list.component */ "./src/app/inbound/reported-list/reported-list.component.ts");
/* harmony import */ var _inbound_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./inbound/history-list/history-list.component */ "./src/app/inbound/history-list/history-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _groups_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./groups/user-groups/user-groups.component */ "./src/app/groups/user-groups/user-groups.component.ts");
/* harmony import */ var _groups_user_join_user_join_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./groups/user-join/user-join.component */ "./src/app/groups/user-join/user-join.component.ts");
/* harmony import */ var _home_propose_deal_propose_deal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/propose-deal/propose-deal.component */ "./src/app/home/propose-deal/propose-deal.component.ts");
/* harmony import */ var _user_components_activate_activate_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user_components/activate/activate.component */ "./src/app/user_components/activate/activate.component.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./storage/storage.component */ "./src/app/storage/storage.component.ts");

























var routes = [
    { path: 'storage', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _storage_storage_component__WEBPACK_IMPORTED_MODULE_24__["StorageComponent"] },
    {
        path: 'dashboard',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"]
    },
    {
        path: 'activate',
        component: _user_components_activate_activate_component__WEBPACK_IMPORTED_MODULE_23__["ActivateComponent"]
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
            { path: 'drafts', component: _home_home_drafts_deal_list_home_drafts_deal_list_component__WEBPACK_IMPORTED_MODULE_10__["HomeDraftsDealListComponent"] },
            { path: 'propose', component: _home_propose_deal_propose_deal_component__WEBPACK_IMPORTED_MODULE_22__["ProposeDealComponent"] }
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
            { path: 'group_active', component: _groups_groups_active_list_groups_active_list_component__WEBPACK_IMPORTED_MODULE_14__["GroupsActiveListComponent"] },
            { path: 'user_groups', component: _groups_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_20__["UserGroupsComponent"] },
            { path: '', component: _groups_groups_active_list_groups_active_list_component__WEBPACK_IMPORTED_MODULE_14__["GroupsActiveListComponent"] }
        ]
    },
    { path: 'user_join', component: _groups_user_join_user_join_component__WEBPACK_IMPORTED_MODULE_21__["UserJoinComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    {
        path: 'inbound',
        component: _inbound_inbound_component__WEBPACK_IMPORTED_MODULE_15__["InboundComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _inbound_to_confirm_list_to_confirm_list_component__WEBPACK_IMPORTED_MODULE_16__["ToConfirmListComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: 'inboundToConfirm',
                component: _inbound_to_confirm_list_to_confirm_list_component__WEBPACK_IMPORTED_MODULE_16__["ToConfirmListComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: 'inboundReported',
                component: _inbound_reported_list_reported_list_component__WEBPACK_IMPORTED_MODULE_17__["ReportedListComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            },
            {
                path: 'inboundHistory',
                component: _inbound_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_18__["HistoryListComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            }
        ]
    },
    { path: '**', redirectTo: 'signin' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mean-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
/* harmony import */ var _inbound_inbound_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./inbound/inbound.component */ "./src/app/inbound/inbound.component.ts");
/* harmony import */ var _inbound_to_confirm_list_to_confirm_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./inbound/to-confirm-list/to-confirm-list.component */ "./src/app/inbound/to-confirm-list/to-confirm-list.component.ts");
/* harmony import */ var _inbound_reported_list_reported_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./inbound/reported-list/reported-list.component */ "./src/app/inbound/reported-list/reported-list.component.ts");
/* harmony import */ var _inbound_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./inbound/history-list/history-list.component */ "./src/app/inbound/history-list/history-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./custom-pipes/linkify.pipe */ "./src/app/custom-pipes/linkify.pipe.ts");
/* harmony import */ var _groups_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./groups/user-groups/user-groups.component */ "./src/app/groups/user-groups/user-groups.component.ts");
/* harmony import */ var _groups_user_join_user_join_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./groups/user-join/user-join.component */ "./src/app/groups/user-join/user-join.component.ts");
/* harmony import */ var _home_propose_deal_propose_deal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/propose-deal/propose-deal.component */ "./src/app/home/propose-deal/propose-deal.component.ts");
/* harmony import */ var _user_components_activate_activate_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user_components/activate/activate.component */ "./src/app/user_components/activate/activate.component.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./storage/storage.component */ "./src/app/storage/storage.component.ts");
/* harmony import */ var _custom_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./custom-pipes/keys.pipe */ "./src/app/custom-pipes/keys.pipe.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
                _inbound_inbound_component__WEBPACK_IMPORTED_MODULE_20__["InboundComponent"],
                _inbound_to_confirm_list_to_confirm_list_component__WEBPACK_IMPORTED_MODULE_21__["ToConfirmListComponent"],
                _inbound_reported_list_reported_list_component__WEBPACK_IMPORTED_MODULE_22__["ReportedListComponent"],
                _inbound_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_23__["HistoryListComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
                _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_25__["LinkifyPipe"],
                _groups_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_26__["UserGroupsComponent"],
                _groups_user_join_user_join_component__WEBPACK_IMPORTED_MODULE_27__["UserJoinComponent"],
                _home_propose_deal_propose_deal_component__WEBPACK_IMPORTED_MODULE_28__["ProposeDealComponent"],
                _user_components_activate_activate_component__WEBPACK_IMPORTED_MODULE_29__["ActivateComponent"],
                _storage_storage_component__WEBPACK_IMPORTED_MODULE_30__["StorageComponent"],
                _custom_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_31__["KeysPipe"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-pipes/keys.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/custom-pipes/keys.pipe.ts ***!
  \*******************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinkifyPipe = /** @class */ (function () {
    function LinkifyPipe() {
    }
    LinkifyPipe.prototype.transform = function (link) {
        return this.linkify(link);
    };
    LinkifyPipe.prototype.linkify = function (plainText) {
        var replacedText;
        var replacePattern1;
        var replacePattern2;
        var replacePattern3;
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
    };
    LinkifyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'linkify' })
    ], LinkifyPipe);
    return LinkifyPipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // privilege check
        if (this.authenticationService.currentUserValue) {
            if (this.authenticationService.currentUserValue[2] === 'company') {
                this.privilege = true;
            }
            else {
                this.privilege = false;
            }
        }
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]],
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/groups/groups-active-list/groups-active-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/groups/groups-active-list/groups-active-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  table-layout: fixed;\n  word-wrap: break-word;\n  width: 100%;\n}\n\n@media screen and (max-width: 1000px) {\n  .hide {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .show {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2dyb3Vwcy9ncm91cHMtYWN0aXZlLWxpc3QvZ3JvdXBzLWFjdGl2ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ncm91cHMvZ3JvdXBzLWFjdGl2ZS1saXN0L2dyb3Vwcy1hY3RpdmUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUFRLGFBQUE7RUNHUjtBQUNGOztBRERBO0VBQ0U7SUFBTyxhQUFBO0VDSVA7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMtYWN0aXZlLWxpc3QvZ3JvdXBzLWFjdGl2ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5oaWRlIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNob3cge2Rpc3BsYXk6IG5vbmU7fVxufVxuIiwidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuc2hvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/subscription */ "./src/app/models/subscription.ts");






var GroupsActiveListComponent = /** @class */ (function () {
    function GroupsActiveListComponent(groupService, authenticationService) {
        this.groupService = groupService;
        this.authenticationService = authenticationService;
        // status mapping from 0,1,2 to specific meaning
        this.statusLevel = ['Ask To Follow', 'Active', 'Blocked'];
        // used to pass data to API
        this.selectSubscription = new _models_subscription__WEBPACK_IMPORTED_MODULE_5__["Subscription"](null, null, null);
    }
    GroupsActiveListComponent.prototype.ngOnInit = function () {
        // privilege check
        if (this.authenticationService.currentUserValue) {
            this.privilege = this.authenticationService.currentUserValue[2];
            this.user = this.authenticationService.currentUserValue[0];
        }
        this.getfollowersListTen();
    };
    GroupsActiveListComponent.prototype.getfollowersListTen = function () {
        var _this = this;
        if (this.privilege !== 'company') {
            // TODO: error handle
        }
        else {
            this.groupService
                .tenSubscribers(this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                _this.followersList = data;
            });
        }
    };
    GroupsActiveListComponent.prototype.approve = function (i) {
        var _this = this;
        this.selectSubscription.individual = this.followersList[i].individual;
        this.selectSubscription.status = this.followersList[i].status;
        this.selectSubscription.company = this.followersList[i].company;
        this.groupService
            .setActive(this.selectSubscription)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    GroupsActiveListComponent.prototype.setActive = function () {
        var _this = this;
        this.groupService
            .setActive(this.selectSubscription)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    GroupsActiveListComponent.prototype.setBlock = function () {
        var _this = this;
        this.groupService
            .setBlock(this.selectSubscription)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    GroupsActiveListComponent.prototype.subSelect = function (i) {
        this.selectId = i;
        this.selectSubscription.individual = this.followersList[i].individual;
        this.selectSubscription.status = this.followersList[i].status;
        this.selectSubscription.company = this.followersList[this.selectId].company;
    };
    GroupsActiveListComponent.ctorParameters = function () { return [
        { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
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
    return GroupsActiveListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(router) {
        this.router = router;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/groups' || this.router.url === '/groups/group_active') {
            document.getElementById('group-active-tab').classList.add('active');
        }
        else if (this.router.url === '/groups/user_groups') {
            document.getElementById('user-group-tab').classList.add('active');
        }
        this.currentPath = this.router.url;
        if (this.currentPath === '/groups/user_groups') {
            this.isGroupTab = true;
        }
        else {
            this.isGroupTab = false;
        }
    };
    GroupsComponent.prototype.search = function () {
        // Declare variables
        var input = document.getElementById('groupSearchInput');
        var filter = input.value.toUpperCase();
        var table = document.getElementById('GroupTable');
        var tr = table.getElementsByTagName('tr');
        // Loop through all table rows, and hide those who don't match the search query
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName('td')[0];
            if (td) {
                var txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                }
                else {
                    tr[i].style.display = 'none';
                }
            }
        }
    };
    GroupsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! raw-loader!./groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.scss */ "./src/app/groups/groups.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/groups/user-groups/user-groups.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/groups/user-groups/user-groups.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  table-layout: fixed;\n  word-wrap: break-word;\n  width: 100%;\n}\n\n@media screen and (max-width: 1000px) {\n  .hide {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .show {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2dyb3Vwcy91c2VyLWdyb3Vwcy91c2VyLWdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3JvdXBzL3VzZXItZ3JvdXBzL3VzZXItZ3JvdXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFO0lBQVEsYUFBQTtFQ0dSO0FBQ0Y7O0FEREE7RUFDRTtJQUFPLGFBQUE7RUNJUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzL3VzZXItZ3JvdXBzL3VzZXItZ3JvdXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5oaWRlIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNob3cge2Rpc3BsYXk6IG5vbmU7fVxufVxuIiwidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuc2hvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/groups/user-groups/user-groups.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/groups/user-groups/user-groups.component.ts ***!
  \*************************************************************/
/*! exports provided: UserGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupsComponent", function() { return UserGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _models_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/group */ "./src/app/models/group.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserGroupsComponent = /** @class */ (function () {
    function UserGroupsComponent(groupService, authenticationService) {
        this.groupService = groupService;
        this.authenticationService = authenticationService;
        this.selectedGroup = new _models_group__WEBPACK_IMPORTED_MODULE_4__["Group"]('', '', '');
        this.createGroup = new _models_group__WEBPACK_IMPORTED_MODULE_4__["Group"]('', '', '');
        this.isEditing = false;
    }
    UserGroupsComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.currentUserValue) {
            this.currentUser = this.authenticationService.currentUserValue[0];
            if (this.authenticationService.currentUserValue[2] === 'company') {
                this.privilege = true;
                this.groupRetrieve();
                this.getAll();
            }
            else {
                this.privilege = false;
                // error handle, should not be there.
            }
        }
    };
    UserGroupsComponent.prototype.getAll = function () {
        var _this = this;
        this.groupService
            .allSubscribers(this.currentUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.allMembers = data;
        }, function (error) {
            console.log(error);
        }, function () {
            setTimeout(function () {
                $('.selectpicker').selectpicker('refresh');
            });
        });
    };
    // retrieve all groups
    UserGroupsComponent.prototype.groupRetrieve = function () {
        var _this = this;
        this.groupService
            .groupRetrieve(this.currentUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.groupList = data;
        });
    };
    // create groups
    UserGroupsComponent.prototype.groupCreate = function () {
        var _this = this;
        if (this.createGroup.name && this.createGroup.member) {
            this.createGroup.creator = this.currentUser;
        }
        this.groupService
            .groupCreate(this.createGroup)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.isCreated = true;
            _this.createGroup.clear();
            _this.ngOnInit();
        });
    };
    // delete groups
    UserGroupsComponent.prototype.groupDelete = function (id, pageId) {
        var _this = this;
        this.groupService
            .groupDelete(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.groupList.pop(pageId);
            _this.isDeleted = true;
            _this.ngOnInit();
        });
    };
    UserGroupsComponent.prototype.groupEdit = function (id) {
        this.isEditing = true;
    };
    UserGroupsComponent.prototype.selectGroup = function (i) {
        this.selectGroupMember = this.groupList[i].member;
        this.selectId = this.groupList[i].id;
    };
    UserGroupsComponent.prototype.checkExisted = function (member) {
        if (member && this.selectGroupMember) {
            if (this.selectGroupMember.includes(member)) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    UserGroupsComponent.prototype.groupMemberAdd = function (i) {
        var _this = this;
        var memberAdd = this.allMembers[i].individual;
        var currentMemberArray = this.selectGroupMember.split(',');
        currentMemberArray.push(memberAdd);
        var currentMemberString = currentMemberArray.toString();
        this.groupService
            .updateGroup(this.selectId, currentMemberString)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) { }, function (error) {
            console.log(error);
        }, function () {
            _this.ngOnInit();
        });
    };
    UserGroupsComponent.prototype.groupMemberDelete = function (i) {
        var _this = this;
        var memberAdd = this.allMembers[i].individual;
        var currentMemberArray = this.selectGroupMember.split(',');
        currentMemberArray.splice(i, 1);
        var currentMemberString = currentMemberArray.toString();
        this.groupService
            .updateGroup(this.selectId, currentMemberString)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) { }, function (error) {
            console.log(error);
        }, function () {
            _this.ngOnInit();
        });
    };
    UserGroupsComponent.ctorParameters = function () { return [
        { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    UserGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-groups',
            template: __webpack_require__(/*! raw-loader!./user-groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/groups/user-groups/user-groups.component.html"),
            providers: [_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]],
            styles: [__webpack_require__(/*! ./user-groups.component.scss */ "./src/app/groups/user-groups/user-groups.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], UserGroupsComponent);
    return UserGroupsComponent;
}());



/***/ }),

/***/ "./src/app/groups/user-join/user-join.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/groups/user-join/user-join.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy91c2VyLWpvaW4vdXNlci1qb2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/groups/user-join/user-join.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/groups/user-join/user-join.component.ts ***!
  \*********************************************************/
/*! exports provided: UserJoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserJoinComponent", function() { return UserJoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserJoinComponent = /** @class */ (function () {
    function UserJoinComponent(authenticationService, groupService) {
        this.authenticationService = authenticationService;
        this.groupService = groupService;
    }
    UserJoinComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.currentUserValue) {
            if (this.authenticationService.currentUserValue[2] === 'company') {
                this.privilege = true;
                this.currentUser = this.authenticationService.currentUserValue[0];
            }
            else {
                this.privilege = false;
                this.currentUser = this.authenticationService.currentUserValue[0];
            }
        }
    };
    UserJoinComponent.prototype.checkRelationship = function () {
        var _this = this;
        this.groupService
            .checkRelationship(this.currentUser, this.company)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            if (data) {
                _this.isExisted = true;
            }
        }, function (error) {
            console.log(error);
        }, function () {
            if (!_this.isExisted) {
                _this.request(_this.currentUser, _this.company);
            }
        });
    };
    UserJoinComponent.prototype.request = function (individual, company) {
        var _this = this;
        this.groupService
            .create(individual, company)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.isRequested = true;
        });
    };
    UserJoinComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] }
    ]; };
    UserJoinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-join',
            template: __webpack_require__(/*! raw-loader!./user-join.component.html */ "./node_modules/raw-loader/index.js!./src/app/groups/user-join/user-join.component.html"),
            providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]],
            styles: [__webpack_require__(/*! ./user-join.component.scss */ "./src/app/groups/user-join/user-join.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]])
    ], UserJoinComponent);
    return UserJoinComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue[0];
        if (currentUser) {
            // logged in so return true
            // console.log('login');
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/signin']);
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home-active-deal-list/home-active-deal-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/home-active-deal-list/home-active-deal-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  table-layout: fixed;\n  word-wrap: break-word;\n  width: 100%;\n}\n\n@media screen and (max-width: 1000px) {\n  .hide {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .show {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS1hY3RpdmUtZGVhbC1saXN0L2hvbWUtYWN0aXZlLWRlYWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWFjdGl2ZS1kZWFsLWxpc3QvaG9tZS1hY3RpdmUtZGVhbC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFO0lBQVEsYUFBQTtFQ0dSO0FBQ0Y7O0FEREE7RUFDRTtJQUFPLGFBQUE7RUNJUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLWFjdGl2ZS1kZWFsLWxpc3QvaG9tZS1hY3RpdmUtZGVhbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5oaWRlIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNob3cge2Rpc3BsYXk6IG5vbmU7fVxufVxuIiwidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuc2hvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_deal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/deal */ "./src/app/models/deal.ts");
/* harmony import */ var _services_deal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/deal.service */ "./src/app/services/deal.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _models_inbound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/inbound */ "./src/app/models/inbound.ts");
/* harmony import */ var _services_inbound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/inbound.service */ "./src/app/services/inbound.service.ts");
/* harmony import */ var _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../custom-pipes/linkify.pipe */ "./src/app/custom-pipes/linkify.pipe.ts");
/* harmony import */ var _custom_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../custom-pipes/keys.pipe */ "./src/app/custom-pipes/keys.pipe.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");













var HomeActiveDealListComponent = /** @class */ (function () {
    function HomeActiveDealListComponent(dealService, authenticationService, productService, groupService, inboundService, linkify, keys, storageService) {
        this.dealService = dealService;
        this.authenticationService = authenticationService;
        this.productService = productService;
        this.groupService = groupService;
        this.inboundService = inboundService;
        this.linkify = linkify;
        this.keys = keys;
        this.storageService = storageService;
        this.isCreated = false;
        this.inbound = new _models_inbound__WEBPACK_IMPORTED_MODULE_8__["Inbound"]('', '', null, '', '', '', null, null, null);
        this.selectDeal = new _models_deal__WEBPACK_IMPORTED_MODULE_2__["Deal"](null, '', null, null, '', '', false, false, false, '');
        this.selfWarehouse = false;
        this.isAwards = false;
        this.awards = 0;
        this.awardsUsersUnique = new Array();
        this.awardsUsersUniqueQty = new Array();
    }
    HomeActiveDealListComponent.prototype.ngOnInit = function () {
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
    };
    HomeActiveDealListComponent.prototype.getActiveList = function (creator) {
        var _this = this;
        this.dealService
            .tenDeals(creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.dealList = data;
        });
    };
    HomeActiveDealListComponent.prototype.getActiveListIndividual = function (creator, individual) {
        var _this = this;
        this.dealService
            .individualDeals(creator, individual)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.dealList = data;
        });
    };
    HomeActiveDealListComponent.prototype.getfollowing = function (creator) {
        var _this = this;
        this.groupService
            .findfollowing(creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.followingList = data;
            // console.log(this.followingList);
        }, function (error) {
            console.log(error);
        }, function () {
            if (_this.followingList[0]) {
                _this.getActiveListIndividual(_this.followingList[0].company, _this.creator);
            }
            else {
                _this.noFollowing = true;
            }
        });
    };
    HomeActiveDealListComponent.prototype.takeDeal = function (productId) {
        if (!this.privilege) {
            this.dealCreator = this.dealList[productId].creator;
            this.Storage(this.dealCreator);
            if (productId >= 0) {
                this.inbound.product = this.dealList[productId].product_name;
                this.inbound.price = this.dealList[productId].price;
                this.inbound.quantity = 0;
                this.inbound.warehouse = this.publicWarehouse;
                if (this.followingList) {
                    this.inbound.company = this.followingList[0].company;
                }
                this.inbound.individual = this.creator;
                this.inbound.status = 0;
                this.inbound.companyStatus = 0;
                this.inbound.dealId = this.dealList[productId].id;
                this.inbound.bonus = this.dealList[productId].bonus;
            }
        }
        else {
            this.selectDeal.id = this.dealList[productId].id;
            this.selectDeal.productName = this.dealList[productId].product_name;
            this.selectDeal.quantity = this.dealList[productId].quantity;
            this.selectDeal.price = this.dealList[productId].price;
            var currentTime = new Date(this.dealList[productId].expires_at);
            this.month = (currentTime.getMonth() + 1).toString();
            this.days = currentTime.getDate().toString();
            this.year = currentTime.getFullYear().toString();
            this.hour = currentTime.getHours().toString();
            this.minutes = currentTime.getMinutes().toString();
            this.selectDeal.note = this.dealList[productId].note;
            this.selectDeal.bonus = this.dealList[productId].bonus;
            this.selectDeal.serviceTag = this.dealList[productId].service_tag;
            this.selectDeal.notify = this.dealList[productId].notify;
            this.selectDeal.creator = this.dealList[productId].creator;
            this.selectDeal.members = this.dealList[productId].members;
            this.selectDeal.dealPublic = this.dealList[productId].public;
            // this.selectDeal.warehouse = this.publicWarehouse;
        }
    };
    HomeActiveDealListComponent.prototype.createInbound = function () {
        var _this = this;
        if (this.selfWarehouse) {
            this.inbound.warehouse = this.selectPrivateWarehouse;
        }
        else {
            this.inbound.warehouse = this.selectPublicWarehouse;
        }
        this.inboundService
            .create(this.inbound)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.ngOnInit();
            _this.isCreated = true;
            _this.inbound.clear();
            _this.selectProductId = null;
        }, function (error) {
            console.log(error);
        }, function () {
            _this.inbound.clear();
            _this.selectPrivateWarehouse = null;
            _this.selectPublicWarehouse = null;
            _this.inbound.publicWarehouse = true;
            _this.selfWarehouse = false;
        });
    };
    HomeActiveDealListComponent.prototype.updateCompany = function () {
        var _this = this;
        if (this.awardsUsers) {
            this.update();
        }
        var date = this.year +
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
        this.selectDeal.expiresAt = date;
        this.dealService
            .updateCompany(this.selectDeal)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.ngOnInit();
            _this.awards = 0;
            _this.selectDeal.clear();
        });
    };
    HomeActiveDealListComponent.prototype.useSelfWarehouse = function () {
        this.selfWarehouse = true;
        this.inbound.publicWarehouse = false;
        this.privateStorage(this.creator);
    };
    HomeActiveDealListComponent.prototype.usePublicWarehouse = function () {
        this.selfWarehouse = false;
        this.inbound.publicWarehouse = true;
    };
    HomeActiveDealListComponent.prototype.makeAwards = function () {
        var _this = this;
        this.isAwards = true;
        this.inboundService
            .findAwardsUser(this.selectDeal.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            // console.log(data);
            _this.awardsUsers = data;
            while (_this.awardsUsers.length >= 1) {
                var currentAwardsUser = _this.awardsUsers.pop();
                if (currentAwardsUser !== undefined) {
                    if (!_this.awardsUsersUnique.includes(currentAwardsUser.individual)) {
                        _this.awardsUsersUnique.push(currentAwardsUser.individual);
                        _this.awardsUsersUniqueQty[currentAwardsUser.individual] =
                            currentAwardsUser.quantity;
                    }
                    else {
                        _this.awardsUsersUniqueQty[currentAwardsUser.individual] +=
                            currentAwardsUser.quantity;
                    }
                }
            }
        });
    };
    HomeActiveDealListComponent.prototype.cancelAwards = function () {
        this.isAwards = false;
        this.awardsUsers = null;
    };
    HomeActiveDealListComponent.prototype.update = function () {
        var _this = this;
        var i = 0;
        var awardsIds = new Array();
        if (this.awardsUsers) {
            while (this.awardsUsers[i]) {
                awardsIds.push(this.awardsUsers[i].id);
                i++;
            }
        }
        // console.log(awardsIds);
        this.inboundService
            .updateAwards(awardsIds, this.selectDeal.price, this.awards)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.isUpdateAwards = true;
        }, function (error) {
            console.log(error);
        }, function () {
            _this.awardsUsers = null;
        });
    };
    HomeActiveDealListComponent.prototype.makePublic = function () {
        var _this = this;
        this.membersTemp = '';
        this.isPublic = true;
        this.isPrivate = false;
        this.selectDeal.dealPublic = true;
        this.groupService
            .allSubscribers(this.selectDeal.creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.memberList = data;
        }, function (error) {
            console.log(error);
        }, function () {
            setTimeout(function () {
                $('.selectpicker').selectpicker('refresh');
                $('.selectpicker').selectpicker('selectAll');
            });
        });
    };
    HomeActiveDealListComponent.prototype.makePrivate = function () {
        var _this = this;
        this.membersTemp = '';
        this.isPublic = false;
        this.isPrivate = true;
        this.selectDeal.dealPublic = false;
        this.groupService
            .groupRetrieve(this.selectDeal.creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.groupList = data;
        }, function (error) {
            console.log(error);
        }, function () {
            setTimeout(function () {
                $('.selectpicker').selectpicker('refresh');
            });
        });
    };
    HomeActiveDealListComponent.prototype.Storage = function (dealCreator) {
        var _this = this;
        this.storageService
            .retrieve(dealCreator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            console.log(data);
            _this.publicWarehouse = data;
        }, function (error) {
            console.log(error);
        }, function () {
            setTimeout(function () {
                $('.selectpicker').selectpicker('refresh');
            });
        });
    };
    HomeActiveDealListComponent.prototype.privateStorage = function (creator) {
        var _this = this;
        this.storageService
            .retrieve(creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.privateWarehouse = data;
        }, function (error) {
            console.log(error);
        }, function () {
            setTimeout(function () {
                $('.selectpicker').selectpicker('refresh');
            });
        });
    };
    HomeActiveDealListComponent.ctorParameters = function () { return [
        { type: _services_deal_service__WEBPACK_IMPORTED_MODULE_3__["DealService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
        { type: _services_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"] },
        { type: _services_inbound_service__WEBPACK_IMPORTED_MODULE_9__["InboundService"] },
        { type: _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_10__["LinkifyPipe"] },
        { type: _custom_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_11__["KeysPipe"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"] }
    ]; };
    HomeActiveDealListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-active-deal-list',
            template: __webpack_require__(/*! raw-loader!./home-active-deal-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-active-deal-list/home-active-deal-list.component.html"),
            providers: [
                _services_deal_service__WEBPACK_IMPORTED_MODULE_3__["DealService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
                _services_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"],
                _services_inbound_service__WEBPACK_IMPORTED_MODULE_9__["InboundService"],
                _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_10__["LinkifyPipe"],
                _services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"],
                _custom_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_11__["KeysPipe"]
            ],
            styles: [__webpack_require__(/*! ./home-active-deal-list.component.scss */ "./src/app/home/home-active-deal-list/home-active-deal-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_deal_service__WEBPACK_IMPORTED_MODULE_3__["DealService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"],
            _services_inbound_service__WEBPACK_IMPORTED_MODULE_9__["InboundService"],
            _custom_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_10__["LinkifyPipe"],
            _custom_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_11__["KeysPipe"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"]])
    ], HomeActiveDealListComponent);
    return HomeActiveDealListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeDraftsDealListComponent = /** @class */ (function () {
    function HomeDraftsDealListComponent() {
    }
    HomeDraftsDealListComponent.prototype.ngOnInit = function () {
    };
    HomeDraftsDealListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-drafts-deal-list',
            template: __webpack_require__(/*! raw-loader!./home-drafts-deal-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.html"),
            styles: [__webpack_require__(/*! ./home-drafts-deal-list.component.scss */ "./src/app/home/home-drafts-deal-list/home-drafts-deal-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeDraftsDealListComponent);
    return HomeDraftsDealListComponent;
}());



/***/ }),

/***/ "./src/app/home/home-expired-deal-list/home-expired-deal-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/home-expired-deal-list/home-expired-deal-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  table-layout: fixed;\n  word-wrap: break-word;\n  width: 100%;\n}\n\n@media screen and (max-width: 1000px) {\n  .hide {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .show {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS1leHBpcmVkLWRlYWwtbGlzdC9ob21lLWV4cGlyZWQtZGVhbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtZXhwaXJlZC1kZWFsLWxpc3QvaG9tZS1leHBpcmVkLWRlYWwtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUFRLGFBQUE7RUNHUjtBQUNGOztBRERBO0VBQ0U7SUFBTyxhQUFBO0VDSVA7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1leHBpcmVkLWRlYWwtbGlzdC9ob21lLWV4cGlyZWQtZGVhbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5oaWRlIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNob3cge2Rpc3BsYXk6IG5vbmU7fVxufVxuIiwidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuc2hvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_deal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/deal.service */ "./src/app/services/deal.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_inbound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/inbound */ "./src/app/models/inbound.ts");
/* harmony import */ var _models_deal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/deal */ "./src/app/models/deal.ts");
/* harmony import */ var _services_inbound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/inbound.service */ "./src/app/services/inbound.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");










var HomeExpiredDealListComponent = /** @class */ (function () {
    function HomeExpiredDealListComponent(authenticationService, dealService, groupService, inboundService, storageService) {
        this.authenticationService = authenticationService;
        this.dealService = dealService;
        this.groupService = groupService;
        this.inboundService = inboundService;
        this.storageService = storageService;
        this.inbound = new _models_inbound__WEBPACK_IMPORTED_MODULE_6__["Inbound"]('', '', null, '', '', '', null, null, null);
        this.selectDeal = new _models_deal__WEBPACK_IMPORTED_MODULE_7__["Deal"](null, '', null, null, '', '', false, false, false, '');
        this.selectWarehouse = '';
    }
    HomeExpiredDealListComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.currentUserValue) {
            this.currentUser = this.authenticationService.currentUserValue[0];
            if (this.authenticationService.currentUserValue[2] === 'company') {
                this.privilege = true;
                this.expiredRetrieve(this.currentUser);
            }
            else {
                this.privilege = false;
                this.getfollowing(this.currentUser);
            }
        }
        else {
            // error handle no user
        }
    };
    HomeExpiredDealListComponent.prototype.getfollowing = function (creator) {
        var _this = this;
        this.groupService
            .findfollowing(creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.followingList = data;
            // console.log(this.followingList);
        }, function (error) {
            console.log(error);
        }, function () {
            if (_this.followingList[0]) {
                _this.expiredRetrieve(_this.followingList[0].company);
            }
            else {
                _this.noFollowing = true;
            }
        });
    };
    HomeExpiredDealListComponent.prototype.expiredRetrieve = function (creator) {
        var _this = this;
        this.dealService
            .expiredDealRetrieve(creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.expiredList = data;
        });
    };
    HomeExpiredDealListComponent.prototype.takeDeal = function (productId) {
        this.selectProductId = productId;
        if (!this.privilege) {
            this.dealCreator = this.expiredList[productId].creator;
            this.Storage(this.dealCreator);
            if (productId >= 0) {
                this.inbound.product = this.expiredList[productId].product_name;
                this.inbound.price = this.expiredList[productId].price;
                this.inbound.quantity = 0;
                this.inbound.warehouse = '';
                if (this.followingList) {
                    this.inbound.company = this.followingList[0].company;
                }
                this.inbound.individual = this.currentUser;
                this.inbound.status = 0;
                this.inbound.companyStatus = 0;
                this.inbound.propose = 1;
                this.inbound.dealId = this.expiredList[productId].id;
            }
        }
        else {
            this.selectDeal.id = this.expiredList[productId].id;
            this.selectDeal.productName = this.expiredList[productId].product_name;
            this.selectDeal.quantity = this.expiredList[productId].quantity;
            this.selectDeal.price = this.expiredList[productId].price;
            this.selectWarehouse = '';
        }
    };
    HomeExpiredDealListComponent.prototype.createPropose = function () {
        var _this = this;
        if (this.selfWarehouse) {
            this.inbound.warehouse = this.selectPrivateWarehouse;
        }
        else {
            this.inbound.warehouse = this.selectPublicWarehouse;
        }
        this.inboundService
            .createPropose(this.inbound)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.isProposed = true;
            _this.inbound.clear();
            _this.selectProductId = null;
        }, function (error) {
            console.log(error);
        }, function () {
            _this.inbound.clear();
            _this.selectPrivateWarehouse = null;
            _this.selectPublicWarehouse = null;
            _this.selfWarehouse = false;
            _this.inbound.publicWarehouse = true;
        });
    };
    HomeExpiredDealListComponent.prototype.useSelfWarehouse = function () {
        this.selfWarehouse = true;
        this.inbound.publicWarehouse = false;
        this.privateStorage(this.currentUser);
    };
    HomeExpiredDealListComponent.prototype.usePublicWarehouse = function () {
        this.selfWarehouse = false;
        this.inbound.publicWarehouse = true;
    };
    HomeExpiredDealListComponent.prototype.Storage = function (dealCreator) {
        var _this = this;
        console.log(dealCreator);
        this.storageService
            .retrieve(dealCreator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            console.log(data);
            _this.publicWarehouse = data;
        }, function (error) {
            console.log(error);
        }, function () {
            setTimeout(function () {
                $('.selectpicker').selectpicker('refresh');
            });
        });
    };
    HomeExpiredDealListComponent.prototype.privateStorage = function (creator) {
        var _this = this;
        console.log(creator);
        this.storageService
            .retrieve(creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.privateWarehouse = data;
        }, function (error) {
            console.log(error);
        }, function () {
            setTimeout(function () {
                $('.selectpicker').selectpicker('refresh');
            });
        });
    };
    HomeExpiredDealListComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _services_deal_service__WEBPACK_IMPORTED_MODULE_3__["DealService"] },
        { type: _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"] },
        { type: _services_inbound_service__WEBPACK_IMPORTED_MODULE_8__["InboundService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] }
    ]; };
    HomeExpiredDealListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-expired-deal-list',
            template: __webpack_require__(/*! raw-loader!./home-expired-deal-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-expired-deal-list/home-expired-deal-list.component.html"),
            providers: [
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
                _services_deal_service__WEBPACK_IMPORTED_MODULE_3__["DealService"],
                _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
                _services_inbound_service__WEBPACK_IMPORTED_MODULE_8__["InboundService"],
                _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
            ],
            styles: [__webpack_require__(/*! ./home-expired-deal-list.component.scss */ "./src/app/home/home-expired-deal-list/home-expired-deal-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_deal_service__WEBPACK_IMPORTED_MODULE_3__["DealService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
            _services_inbound_service__WEBPACK_IMPORTED_MODULE_8__["InboundService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]])
    ], HomeExpiredDealListComponent);
    return HomeExpiredDealListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeFavoriteDealListComponent = /** @class */ (function () {
    function HomeFavoriteDealListComponent() {
    }
    HomeFavoriteDealListComponent.prototype.ngOnInit = function () {
    };
    HomeFavoriteDealListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-favorite-deal-list',
            template: __webpack_require__(/*! raw-loader!./home-favorite-deal-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.html"),
            styles: [__webpack_require__(/*! ./home-favorite-deal-list.component.scss */ "./src/app/home/home-favorite-deal-list/home-favorite-deal-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeFavoriteDealListComponent);
    return HomeFavoriteDealListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.container {\n  max-width: 1100px;\n}\n\n.pricing-header {\n  max-width: 700px;\n}\n\n.card-deck .card {\n  min-width: 220px;\n}\n\n@media screen and (max-width: 996px) {\n  .select-hide {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .show {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxlQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQWUsYUFBQTtFQ0VmO0FBQ0Y7O0FEQUE7RUFDRTtJQUFPLGFBQUE7RUNHUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xufVxuXG4ucHJpY2luZy1oZWFkZXIge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG4uY2FyZC1kZWNrIC5jYXJkIHtcbiAgbWluLXdpZHRoOiAyMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcbiAgLnNlbGVjdC1oaWRlIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNob3cge2Rpc3BsYXk6IG5vbmU7fVxufVxuIiwiaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xufVxuXG4ucHJpY2luZy1oZWFkZXIge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG4uY2FyZC1kZWNrIC5jYXJkIHtcbiAgbWluLXdpZHRoOiAyMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcbiAgLnNlbGVjdC1oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNob3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_deal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/deal */ "./src/app/models/deal.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_deal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/deal.service */ "./src/app/services/deal.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _models_email__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/email */ "./src/app/models/email.ts");










var HomeComponent = /** @class */ (function () {
    function HomeComponent(dealService, productService, groupService, authenticationService, router // private homeActiveDealListComponent: HomeActiveDealListComponent
    ) {
        this.dealService = dealService;
        this.productService = productService;
        this.groupService = groupService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.deal = new _models_deal__WEBPACK_IMPORTED_MODULE_3__["Deal"](0, '', null, 0, '', '', true, false, false, '');
        this.isCreated = false;
        this.email = new _models_email__WEBPACK_IMPORTED_MODULE_9__["Email"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.today = new Date();
        this.today.setDate(this.today.getDate() + 3);
        this.month = (this.today.getMonth() + 1).toString().slice(-2);
        this.days = this.today
            .getDate()
            .toString()
            .slice(-2);
        this.year = this.today.getFullYear().toString();
        this.hour = this.today.getHours().toString();
        this.minutes = this.today.getMinutes().toString();
        if (this.router.url === '/home' || this.router.url === '/home/active') {
            document.getElementById('active-tab').classList.add('active');
        }
        else if (this.router.url === '/home/expired') {
            document.getElementById('expired-tab').classList.add('active');
        }
        else if (this.router.url === '/home/propose') {
            document.getElementById('proposed-tab').classList.add('active');
        }
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
    };
    HomeComponent.prototype.getNameId = function () {
        var _this = this;
        this.productService
            .productNameId(this.deal.creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.productList = data;
        }, function (error) {
            console.log(error);
        }, function () {
            setTimeout(function () {
                // $('.selectpicker').addClass('fixedWidth').selectpicker('setStyle');
                $('.selectpicker').selectpicker('render');
                $('.selectpicker').selectpicker('refresh');
            });
        });
    };
    HomeComponent.prototype.setProductNameId = function () {
        if (this.selectProduct) {
            this.deal.products = this.selectProduct.id;
            this.deal.productName = this.selectProduct.name;
        }
        document.getElementById('active-tab').classList.add('active');
    };
    HomeComponent.prototype.create = function () {
        var _this = this;
        if (this.month && this.days && this.year && this.hour && this.minutes) {
            var date = this.year +
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
            this.deal.members = this.membersTemp.join();
        }
        else {
            // TODO: need to improve error handle.
            this.error = 'please fill out all parts';
            return;
        }
        this.dealService
            .createDeal(this.deal)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.isCreated = true;
            window.location.reload();
            // console.log(data);
            // this.homeActiveDealListComponent.dealList[data.id] = this.deal;
            // console.log(this.homeActiveDealListComponent.dealList[''])
            // this.deal.clear();
            // this.ngOnInit();
        }, function (error) {
            console.log(error);
        }, function () {
            _this.emailNotification(_this.deal);
            _this.deal.clear();
        });
    };
    HomeComponent.prototype.emailNotification = function (deal) {
        if (this.deal.notify === true) {
            this.email.emailList = deal.members;
            this.email.emailSubject = deal.productName;
            this.email.emailText = deal.note;
            this.dealService
                .emailNotification(this.email)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
            }, function () {
                console.log('done');
            });
        }
    };
    HomeComponent.prototype.search = function () {
        // Declare variables
        var input = document.getElementById('searchInput');
        var filter = input.value.toUpperCase();
        var table = document.getElementById('dealTable');
        var tr = table.getElementsByTagName('tr');
        // Loop through all table rows, and hide those who don't match the search query
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName('td')[0];
            if (td) {
                var txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                }
                else {
                    tr[i].style.display = 'none';
                }
            }
        }
    };
    HomeComponent.prototype.makePublic = function () {
        var _this = this;
        this.membersTemp = '';
        this.isPublic = true;
        this.isPrivate = false;
        this.deal.dealPublic = true;
        this.groupService
            .allSubscribers(this.deal.creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.memberList = data;
        }, function (error) {
            console.log(error);
        }, function () {
            setTimeout(function () {
                $('.selectpicker').selectpicker('refresh');
                $('.selectpicker').selectpicker('selectAll');
            });
        });
    };
    HomeComponent.prototype.makePrivate = function () {
        var _this = this;
        this.membersTemp = '';
        this.isPublic = false;
        this.isPrivate = true;
        this.deal.dealPublic = false;
        this.groupService
            .groupRetrieve(this.deal.creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.groupList = data;
        }, function (error) {
            console.log(error);
        }, function () {
            setTimeout(function () {
                $('.selectpicker').selectpicker('refresh');
            });
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_deal_service__WEBPACK_IMPORTED_MODULE_7__["DealService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _services_group_service__WEBPACK_IMPORTED_MODULE_8__["GroupService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] // private homeActiveDealListComponent: HomeActiveDealListComponent
         }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _services_deal_service__WEBPACK_IMPORTED_MODULE_7__["DealService"], _services_group_service__WEBPACK_IMPORTED_MODULE_8__["GroupService"]],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_deal_service__WEBPACK_IMPORTED_MODULE_7__["DealService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_8__["GroupService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] // private homeActiveDealListComponent: HomeActiveDealListComponent
        ])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/propose-deal/propose-deal.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/propose-deal/propose-deal.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  table-layout: fixed;\n  word-wrap: break-word;\n  width: 100%;\n}\n\n@media screen and (max-width: 1000px) {\n  .hide {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .show {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2hvbWUvcHJvcG9zZS1kZWFsL3Byb3Bvc2UtZGVhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9wcm9wb3NlLWRlYWwvcHJvcG9zZS1kZWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFO0lBQVEsYUFBQTtFQ0dSO0FBQ0Y7O0FEREE7RUFDRTtJQUFPLGFBQUE7RUNJUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9wb3NlLWRlYWwvcHJvcG9zZS1kZWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5oaWRlIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNob3cge2Rpc3BsYXk6IG5vbmU7fVxufVxuIiwidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuc2hvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/propose-deal/propose-deal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/propose-deal/propose-deal.component.ts ***!
  \*************************************************************/
/*! exports provided: ProposeDealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposeDealComponent", function() { return ProposeDealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_deal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/deal.service */ "./src/app/services/deal.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_inbound_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/inbound.service */ "./src/app/services/inbound.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_inbound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/inbound */ "./src/app/models/inbound.ts");








var ProposeDealComponent = /** @class */ (function () {
    function ProposeDealComponent(authenticationService, dealService, groupService, inboundService) {
        this.authenticationService = authenticationService;
        this.dealService = dealService;
        this.groupService = groupService;
        this.inboundService = inboundService;
        this.selectInbound = new _models_inbound__WEBPACK_IMPORTED_MODULE_7__["Inbound"](null, null, null, null, null, null, null, null, null);
    }
    ProposeDealComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.currentUserValue) {
            this.currentUser = this.authenticationService.currentUserValue[0];
            if (this.authenticationService.currentUserValue[2] === 'company') {
                this.privilege = true;
                this.proposeRetrieveCompany(this.currentUser);
            }
            else {
                this.privilege = false;
                this.proposeRetrieve(this.currentUser);
            }
        }
    };
    ProposeDealComponent.prototype.proposeRetrieve = function (individual) {
        var _this = this;
        this.inboundService
            .proposeRetrieve(individual)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.proposeList = data;
        });
    };
    ProposeDealComponent.prototype.proposeRetrieveCompany = function (individual) {
        var _this = this;
        this.inboundService
            .proposeRetrieveCompany(individual)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.proposeList = data;
        });
    };
    ProposeDealComponent.prototype.proposeConfirm = function () {
        var _this = this;
        this.inboundService
            .proposeConfirm(this.selectInbound.id, this.selectInbound.quantity, this.selectInbound.dealId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.ngOnInit();
        }, function (error) {
            console.log(error);
        }, function () {
            _this.selectInbound.clear();
        });
    };
    ProposeDealComponent.prototype.select = function (i) {
        // if (i >= 0) {
        this.selectInbound.product = this.proposeList[i].product;
        this.selectInbound.price = this.proposeList[i].price;
        this.selectInbound.quantity = this.proposeList[i].quantity;
        this.selectInbound.id = this.proposeList[i].id;
        this.selectInbound.dealId = this.proposeList[i].dealId;
        this.selectInbound.warehouse = this.proposeList[i].warehouse;
        // }
    };
    ProposeDealComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _services_deal_service__WEBPACK_IMPORTED_MODULE_3__["DealService"] },
        { type: _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"] },
        { type: _services_inbound_service__WEBPACK_IMPORTED_MODULE_5__["InboundService"] }
    ]; };
    ProposeDealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-propose-deal',
            template: __webpack_require__(/*! raw-loader!./propose-deal.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/propose-deal/propose-deal.component.html"),
            providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _services_deal_service__WEBPACK_IMPORTED_MODULE_3__["DealService"], _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"], _services_inbound_service__WEBPACK_IMPORTED_MODULE_5__["InboundService"]],
            styles: [__webpack_require__(/*! ./propose-deal.component.scss */ "./src/app/home/propose-deal/propose-deal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_deal_service__WEBPACK_IMPORTED_MODULE_3__["DealService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
            _services_inbound_service__WEBPACK_IMPORTED_MODULE_5__["InboundService"]])
    ], ProposeDealComponent);
    return ProposeDealComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HistoryListComponent = /** @class */ (function () {
    function HistoryListComponent() {
    }
    HistoryListComponent.prototype.ngOnInit = function () {
    };
    HistoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history-list',
            template: __webpack_require__(/*! raw-loader!./history-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/inbound/history-list/history-list.component.html"),
            styles: [__webpack_require__(/*! ./history-list.component.scss */ "./src/app/inbound/history-list/history-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HistoryListComponent);
    return HistoryListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InboundComponent = /** @class */ (function () {
    function InboundComponent() {
    }
    InboundComponent.prototype.ngOnInit = function () {
    };
    InboundComponent.prototype.search = function () {
        // Declare variables
        var input = document.getElementById('inboundSearchInput');
        var filter = input.value.toUpperCase();
        var table = document.getElementById('inboundTable');
        var tr = table.getElementsByTagName('tr');
        // Loop through all table rows, and hide those who don't match the search query
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName('td')[0];
            if (td) {
                var txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                }
                else {
                    tr[i].style.display = 'none';
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
    return InboundComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportedListComponent = /** @class */ (function () {
    function ReportedListComponent() {
    }
    ReportedListComponent.prototype.ngOnInit = function () {
    };
    ReportedListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reported-list',
            template: __webpack_require__(/*! raw-loader!./reported-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/inbound/reported-list/reported-list.component.html"),
            styles: [__webpack_require__(/*! ./reported-list.component.scss */ "./src/app/inbound/reported-list/reported-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportedListComponent);
    return ReportedListComponent;
}());



/***/ }),

/***/ "./src/app/inbound/to-confirm-list/to-confirm-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/inbound/to-confirm-list/to-confirm-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  table-layout: fixed;\n  word-wrap: break-word;\n  width: 100%;\n}\n\n@media screen and (max-width: 1000px) {\n  .hide {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .show {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpbGxfeWFvL0RvY3VtZW50cy9tZWFuLWFwcC9zcmMvYXBwL2luYm91bmQvdG8tY29uZmlybS1saXN0L3RvLWNvbmZpcm0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5ib3VuZC90by1jb25maXJtLWxpc3QvdG8tY29uZmlybS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFO0lBQVEsYUFBQTtFQ0dSO0FBQ0Y7O0FEREE7RUFDRTtJQUFPLGFBQUE7RUNJUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW5ib3VuZC90by1jb25maXJtLWxpc3QvdG8tY29uZmlybS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5oaWRlIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNob3cge2Rpc3BsYXk6IG5vbmU7fVxufVxuIiwidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuc2hvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_inbound_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/inbound.service */ "./src/app/services/inbound.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_inbound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/inbound */ "./src/app/models/inbound.ts");
/* harmony import */ var _services_deal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/deal.service */ "./src/app/services/deal.service.ts");







var ToConfirmListComponent = /** @class */ (function () {
    function ToConfirmListComponent(inboundService, authenticationService, dealService) {
        this.inboundService = inboundService;
        this.authenticationService = authenticationService;
        this.dealService = dealService;
        this.status = ['Success', 'Unknown Status', 'Canceled'];
        this.selectInbound = new _models_inbound__WEBPACK_IMPORTED_MODULE_5__["Inbound"]('', '', null, '', '', '', null, null, null);
    }
    ToConfirmListComponent.prototype.ngOnInit = function () {
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
    };
    ToConfirmListComponent.prototype.getRecords = function (userEmail) {
        var _this = this;
        this.inboundService
            .tenRecords(userEmail)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.recordList = data;
        }, function (error) {
            console.log(error);
        }, function () {
            if (_this.recordList.length < 1) {
                _this.noRecord = true;
            }
        });
    };
    ToConfirmListComponent.prototype.getRecordsCompany = function (userEmail) {
        var _this = this;
        this.inboundService
            .tenRecordsCompany(userEmail)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.recordList = data;
        });
    };
    ToConfirmListComponent.prototype.cancelInbound = function (index) {
        var _this = this;
        this.selectInbound.dealId = this.recordList[index].dealId;
        this.selectInbound.quantity = this.recordList[index].quantity;
        this.selectInbound.id = this.recordList[index].id;
        this.inboundService
            .cancelInbound(this.selectInbound)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    ToConfirmListComponent.prototype.select = function (i) {
        this.selectId = i;
        this.selectInbound.dealId = this.recordList[i].dealId;
        this.selectInbound.quantity = this.recordList[i].quantity;
        this.selectInbound.id = this.recordList[i].id;
        this.selectInbound.product = this.recordList[i].product;
        this.selectInbound.price = this.recordList[i].price;
        this.selectInbound.warehouse = this.recordList[i].warehouse;
    };
    ToConfirmListComponent.prototype.updateInboundQty = function () {
        var _this = this;
        if (this.selectInbound.quantity > this.recordList[this.selectId].quantity) {
            this.inValid = true;
        }
        else {
            this.qtyGiveBack =
                this.recordList[this.selectId].quantity - this.selectInbound.quantity;
            this.inboundService
                .updateInboundQty(this.selectInbound.dealId, this.selectInbound.id, this.selectInbound.quantity)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                _this.giveBackQty();
            }, function (error) {
                console.log(error);
            }, function () {
                _this.ngOnInit();
            });
        }
    };
    ToConfirmListComponent.prototype.giveBackQty = function () {
        this.dealService
            .giveBackQty(this.selectInbound.dealId, this.qtyGiveBack)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ToConfirmListComponent.ctorParameters = function () { return [
        { type: _services_inbound_service__WEBPACK_IMPORTED_MODULE_3__["InboundService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _services_deal_service__WEBPACK_IMPORTED_MODULE_6__["DealService"] }
    ]; };
    ToConfirmListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-to-confirm-list',
            template: __webpack_require__(/*! raw-loader!./to-confirm-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/inbound/to-confirm-list/to-confirm-list.component.html"),
            providers: [_services_inbound_service__WEBPACK_IMPORTED_MODULE_3__["InboundService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _services_deal_service__WEBPACK_IMPORTED_MODULE_6__["DealService"]],
            styles: [__webpack_require__(/*! ./to-confirm-list.component.scss */ "./src/app/inbound/to-confirm-list/to-confirm-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_inbound_service__WEBPACK_IMPORTED_MODULE_3__["InboundService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_deal_service__WEBPACK_IMPORTED_MODULE_6__["DealService"]])
    ], ToConfirmListComponent);
    return ToConfirmListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                // location.reload(true);
            }
            var error = err.error || err.statusText || 'Connection Refused';
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



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
var Deal = /** @class */ (function () {
    function Deal(products, productName, price, quantity, expiresAt, note, serviceTag, dealPublic, notify, creator) {
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
    Deal.prototype.clear = function () {
        this.products = null;
        this.productName = '';
        this.price = null;
        this.quantity = null;
        this.expiresAt = '';
        this.note = '';
        this.serviceTag = null;
        this.dealPublic = null;
        this.notify = null;
        this.creator = '';
        this.members = '';
        this.bonus = null;
    };
    Deal.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Number },
        { type: Number },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: String }
    ]; };
    return Deal;
}());



/***/ }),

/***/ "./src/app/models/email.ts":
/*!*********************************!*\
  !*** ./src/app/models/email.ts ***!
  \*********************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email(emailList, emailSubject, emailText) {
        if (emailList === void 0) { emailList = null; }
        if (emailSubject === void 0) { emailSubject = null; }
        if (emailText === void 0) { emailText = null; }
        this.emailList = emailList;
        this.emailSubject = emailSubject;
        this.emailText = emailText;
    }
    Email.prototype.clear = function () {
        this.emailList = null;
        this.emailSubject = null;
        this.emailText = null;
    };
    Email.ctorParameters = function () { return [
        null,
        null,
        null
    ]; };
    return Email;
}());



/***/ }),

/***/ "./src/app/models/group.ts":
/*!*********************************!*\
  !*** ./src/app/models/group.ts ***!
  \*********************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
var Group = /** @class */ (function () {
    function Group(name, creator, member) {
        this.id = null;
        this.name = name;
        this.creator = creator;
        this.member = member;
    }
    /**
     * name
     */
    Group.prototype.clear = function () {
        this.id = null;
        this.name = '';
        this.creator = '';
        this.member = '';
    };
    Group.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Group;
}());



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
var Inbound = /** @class */ (function () {
    function Inbound(product, price, quantity, warehouse, company, individual, status, companyStatus, dealId) {
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
    Inbound.prototype.clear = function () {
        this.id = null;
        this.product = '';
        this.price = '';
        this.quantity = null;
        this.warehouse = '';
        this.company = '';
        this.individual = '';
        this.status = null;
        this.companyStatus = null;
        this.dealId = null;
        this.publicWarehouse = true;
        this.bonus = 0;
    };
    Inbound.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    return Inbound;
}());



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
var Product = /** @class */ (function () {
    function Product(name, condition, msrp, asin, upc, weight, note, creator) {
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
    Product.prototype.clear = function () {
        this.name = '';
        this.condition = 'New';
        this.msrp = null;
        this.asin = '';
        this.upc = '';
        this.weight = '';
        this.note = '';
        this.creator = '';
        this.link = '';
    };
    Product.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Product;
}());



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
var Register = /** @class */ (function () {
    function Register(username, phone, email, password) {
        if (username === void 0) { username = ''; }
        if (phone === void 0) { phone = ''; }
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        this.username = username;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
    Register.prototype.clear = function () {
        this.username = '';
        this.phone = '';
        this.email = '';
        this.password = '';
    };
    Register.ctorParameters = function () { return [
        null,
        null,
        null,
        null
    ]; };
    return Register;
}());



/***/ }),

/***/ "./src/app/models/subscription.ts":
/*!****************************************!*\
  !*** ./src/app/models/subscription.ts ***!
  \****************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
var Subscription = /** @class */ (function () {
    function Subscription(individual, company, status) {
        this.company = company;
        this.individual = individual;
        this.status = status;
    }
    Subscription.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: Number }
    ]; };
    return Subscription;
}());



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
var User = /** @class */ (function () {
    function User(email, password, permission) {
        if (permission === void 0) { permission = null; }
        this.email = email;
        this.password = password;
        this.permission = permission;
    }
    User.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return User;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/product */ "./src/app/models/product.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ProductsActiveListComponent = /** @class */ (function () {
    function ProductsActiveListComponent(productService, authenticationService) {
        this.productService = productService;
        this.authenticationService = authenticationService;
        this.selectProduct = new _models_product__WEBPACK_IMPORTED_MODULE_3__["Product"](null, null, null, null, null, null, null, null);
        this.isUpdate = false;
    }
    ProductsActiveListComponent.prototype.ngOnInit = function () {
        this.getActiveList();
    };
    ProductsActiveListComponent.prototype.getActiveList = function () {
        var _this = this;
        if (this.authenticationService.currentUserValue) {
            this.userEmail = this.authenticationService.currentUserValue[0];
            // this.userEmail = 'admin';
        }
        else {
            // TODO: add no userEmail error
        }
        this.productService
            .tenProduct(this.userEmail)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.activeProductsList = data;
        });
    };
    ProductsActiveListComponent.prototype.editProductSelect = function (i) {
        console.log(i);
        if (i >= 0) {
            this.selectProduct.id = this.activeProductsList[i].id;
            this.selectProduct.name = this.activeProductsList[i].name;
            this.selectProduct.condition = this.activeProductsList[i].product_condition;
            this.selectProduct.msrp = this.activeProductsList[i].msrp;
            this.selectProduct.asin = this.activeProductsList[i].asin;
            this.selectProduct.upc = this.activeProductsList[i].upc;
            this.selectProduct.weight = this.activeProductsList[i].weight;
            this.selectProduct.note = this.activeProductsList[i].note;
            this.selectProduct.creator = this.activeProductsList[i].creator;
            this.selectProduct.link = this.activeProductsList[i].link;
        }
    };
    ProductsActiveListComponent.prototype.update = function () {
        var _this = this;
        this.productService
            .updateProduct(this.selectProduct)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.isUpdate = true;
        }, function (error) {
            console.log(error);
        }, function () {
            _this.ngOnInit();
            _this.selectProduct.clear();
        });
    };
    ProductsActiveListComponent.ctorParameters = function () { return [
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    ProductsActiveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-active-list',
            template: __webpack_require__(/*! raw-loader!./products-active-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products-active-list/products-active-list.component.html"),
            providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]],
            styles: [__webpack_require__(/*! ./products-active-list.component.scss */ "./src/app/products/products-active-list/products-active-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ProductsActiveListComponent);
    return ProductsActiveListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/product */ "./src/app/models/product.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, authenticationSerive) {
        this.productService = productService;
        this.authenticationSerive = authenticationSerive;
        this.product = new _models_product__WEBPACK_IMPORTED_MODULE_4__["Product"](null, 'New', null, '', '', '', '', '');
        // public debug: any;
        this.isCreated = false;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        if (this.authenticationSerive.currentUserValue) {
            this.product.creator = this.authenticationSerive.currentUserValue[0];
        }
        else {
            // TODO: handle no user error
        }
    };
    ProductsComponent.prototype.create = function () {
        var _this = this;
        this.productService
            .createProduct(this.product)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            console.log(data);
            _this.isCreated = true;
            window.location.reload();
            _this.product.clear();
        });
    };
    ProductsComponent.prototype.search = function () {
        // Declare variables
        var input = document.getElementById('productSearchInput');
        var filter = input.value.toUpperCase();
        var table = document.getElementById('productTable');
        var tr = table.getElementsByTagName('tr');
        // Loop through all table rows, and hide those who don't match the search query
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName('td')[0];
            if (td) {
                var txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                }
                else {
                    tr[i].style.display = 'none';
                }
            }
        }
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
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
    return ProductsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        return this.http
            .post('http://192.168.1.90:8081/api/signin', user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (logInUser) {
            // login successful if there's a jwt token in the response
            if (logInUser) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(logInUser));
                _this.currentUserSubject.next(logInUser);
            }
            return logInUser;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
var DealService = /** @class */ (function () {
    // IndividualDealsUrl = 'http://192.168.1.86:8081/api/deal/active/firstTenIndivivdual';
    // updatePriceCompanyUrl = 'http://192.168.1.119:8081/api/deal/updatePrice';
    function DealService(http) {
        this.http = http;
        this.createDealUrl = 'http://192.168.1.90:8081/api/createdeal'; // URL to web api
        this.tenDealsUrl = 'http://192.168.1.90:8081/api/deal/active/firstTen';
        this.updateCompanyUrl = 'http://192.168.1.90:8081/api/deal/update';
        this.expiredDealUrl = 'http://192.168.1.90:8081/api/deal/expiredDeal';
        this.individualDealUrl = 'http://192.168.1.90:8081/api/deal/individualFind';
        this.sendNotificationUrl = 'http://192.168.1.90:8081/api/send-notification';
        this.giveBackQtyUrl = 'http://192.168.1.90:8081/api/deal/giveBackQty';
    }
    DealService.prototype.createDeal = function (deal) {
        return this.http.post(this.createDealUrl, deal, httpOptions);
    };
    DealService.prototype.emailNotification = function (email) {
        return this.http.post(this.sendNotificationUrl, email, httpOptions);
    };
    DealService.prototype.individualDeals = function (creator, individual) {
        var creatorJSON = '{ "creator" : ' +
            '"' +
            creator +
            '"' +
            ', ' +
            '"individual" : ' +
            '"' +
            individual +
            '"' +
            ' }';
        return this.http.post(this.individualDealUrl, JSON.parse(creatorJSON), httpOptions);
    };
    DealService.prototype.tenDeals = function (creator) {
        var creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenDealsUrl, JSON.parse(creatorJSON), httpOptions);
    };
    DealService.prototype.updateCompany = function (deal) {
        return this.http.post(this.updateCompanyUrl, deal, httpOptions);
    };
    DealService.prototype.expiredDealRetrieve = function (creator) {
        var creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        return this.http.post(this.expiredDealUrl, JSON.parse(creatorJSON), httpOptions);
    };
    DealService.prototype.giveBackQty = function (dealId, quantity) {
        var creatorJSON = '{ "dealId" : ' +
            '"' +
            dealId +
            '"' +
            ', ' +
            '"quantity" : ' +
            '"' +
            quantity +
            '"' +
            ' }';
        return this.http.post(this.giveBackQtyUrl, JSON.parse(creatorJSON), httpOptions);
    };
    DealService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DealService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DealService);
    return DealService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
var GroupService = /** @class */ (function () {
    function GroupService(http) {
        this.http = http;
        // public subscription = new Subscription(null, null, null);
        // URL to web api
        this.tenUrl = 'http://192.168.1.90:8081/api/subscription/findTen';
        this.allUrl = 'http://192.168.1.90:8081/api/subscription/find';
        this.setActiveUrl = 'http://192.168.1.90:8081/api/subscription/setactive';
        this.setBlockUrl = 'http://192.168.1.90:8081/api/subscription/setblock';
        this.acceptUrl = 'http://192.168.1.90:8081/api/subscription/approve';
        this.tenBlockedUrl = 'http://192.168.1.90:8081/api/subscription/findTenBlocked';
        this.tenWaitingUrl = 'http://192.168.1.90:8081/api/subscription/findTenWaiting';
        this.findfollowingUrl = 'http://192.168.1.90:8081/api/subscription/findfollowing';
        this.checkRelationshipUrl = 'http://192.168.1.90:8081/api/subscription/check';
        this.createUrl = 'http://192.168.1.90:8081/api/subscription/create';
        /**
         * user-group URL
         */
        this.userGroupCreateUrl = 'http://192.168.1.90:8081/api/group/create';
        this.userGroupDeleteUrl = 'http://192.168.1.90:8081/api/group/delete';
        this.userGroupRetrieveUrl = 'http://192.168.1.90:8081/api/group/retrieve';
        this.updateGroupUrl = 'http://192.168.1.90:8081/api/group/update';
    }
    GroupService.prototype.updateGroup = function (groupId, groupMember) {
        var creatorJSON = '{ "groupId" : ' +
            '"' +
            groupId +
            '"' +
            ', ' +
            '"groupMember" : ' +
            '"' +
            groupMember +
            '"' +
            ' }';
        return this.http.post(this.updateGroupUrl, JSON.parse(creatorJSON), httpOptions);
    };
    GroupService.prototype.tenSubscribers = function (company) {
        var creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenUrl, JSON.parse(creatorJSON), httpOptions);
    };
    GroupService.prototype.allSubscribers = function (company) {
        var creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.allUrl, JSON.parse(creatorJSON), httpOptions);
    };
    GroupService.prototype.setActive = function (subscription) {
        return this.http.post(this.setActiveUrl, subscription, httpOptions);
    };
    GroupService.prototype.setBlock = function (subscription) {
        return this.http.post(this.setBlockUrl, subscription, httpOptions);
    };
    GroupService.prototype.approve = function (subscription) {
        return this.http.post(this.acceptUrl, subscription, httpOptions);
    };
    GroupService.prototype.tenSubscribersBlocked = function (company) {
        var creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenBlockedUrl, JSON.parse(creatorJSON), httpOptions);
    };
    GroupService.prototype.tenSubscribersWaiting = function (company) {
        var creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenWaitingUrl, JSON.parse(creatorJSON), httpOptions);
    };
    GroupService.prototype.findfollowing = function (individual) {
        var creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.findfollowingUrl, JSON.parse(creatorJSON), httpOptions);
    };
    GroupService.prototype.checkRelationship = function (individual, company) {
        var creatorJSON = '{ "individual" : ' +
            '"' +
            individual +
            '"' +
            ', ' +
            '"company" : ' +
            '"' +
            company +
            '"' +
            ' }';
        // console.log(creatorJSON);
        return this.http.post(this.checkRelationshipUrl, JSON.parse(creatorJSON), httpOptions);
    };
    GroupService.prototype.create = function (individual, company) {
        var creatorJSON = '{ "individual" : ' +
            '"' +
            individual +
            '"' +
            ', ' +
            '"company" : ' +
            '"' +
            company +
            '"' +
            ' }';
        return this.http.post(this.createUrl, JSON.parse(creatorJSON), httpOptions);
    };
    /**
     *
     * user-group service
     */
    GroupService.prototype.groupCreate = function (group) {
        return this.http.post(this.userGroupCreateUrl, group, httpOptions);
    };
    GroupService.prototype.groupDelete = function (id) {
        var creatorJSON = '{ "id" : ' + '"' + id + '"' + ' }';
        return this.http.post(this.userGroupDeleteUrl, JSON.parse(creatorJSON), httpOptions);
    };
    GroupService.prototype.groupRetrieve = function (creator) {
        var creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        return this.http.post(this.userGroupRetrieveUrl, JSON.parse(creatorJSON), httpOptions);
    };
    GroupService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GroupService);
    return GroupService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
var InboundService = /** @class */ (function () {
    // NameUrl = 'http://192.168.1.119:8081/api/product/name';
    function InboundService(http) {
        this.http = http;
        this.createUrl = 'http://192.168.1.90:8081/api/inbound/add'; // URL to web api
        this.tenUrl = 'http://192.168.1.90:8081/api/inbound/individualFind';
        this.allUrl = 'http://192.168.1.90:8081/api/inbound/individualFind';
        this.confirmUrl = 'http://192.168.1.90:8081/api/inbound/findRecords';
        this.tenCompanyUrl = 'http://192.168.1.90:8081/api/inbound/companyFind';
        this.proposeRetrieveUrl = 'http://192.168.1.90:8081/api/inbound/proposeRetrieve';
        this.proposeRetrieveCompanyUrl = 'http://192.168.1.90:8081/api/inbound/proposeRetrieveCompany';
        this.createProposeUrl = 'http://192.168.1.90:8081/api/inbound/createPropose';
        this.proposeConfirmUrl = 'http://192.168.1.90:8081/api/inbound/proposeConfirm';
        this.cancelInboundUrl = 'http://192.168.1.90:8081/api/inbound/cancelInbound';
        this.findAwardsUsersUrl = 'http://192.168.1.90:8081/api/inbound/findAwardsUser';
        this.updateAwardsUrl = 'http://192.168.1.90:8081/api/inbound/updateAwards';
        this.updateInboundQtyUrl = 'http://192.168.1.90:8081/api/inbound/updateInboundQty';
    }
    InboundService.prototype.cancelInbound = function (inbound) {
        return this.http.post(this.cancelInboundUrl, inbound, httpOptions);
    };
    InboundService.prototype.tenRecords = function (individual) {
        var creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenUrl, JSON.parse(creatorJSON), httpOptions);
    };
    InboundService.prototype.tenRecordsCompany = function (company) {
        var creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenCompanyUrl, JSON.parse(creatorJSON), httpOptions);
    };
    InboundService.prototype.allRecords = function (individual) {
        var creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.allUrl, JSON.parse(creatorJSON), httpOptions);
    };
    InboundService.prototype.confirm = function (inbound) {
        return this.http.post(this.confirmUrl, inbound, httpOptions);
    };
    InboundService.prototype.create = function (inbound) {
        return this.http.post(this.createUrl, inbound, httpOptions);
    };
    InboundService.prototype.proposeRetrieve = function (individual) {
        var creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.proposeRetrieveUrl, JSON.parse(creatorJSON), httpOptions);
    };
    InboundService.prototype.proposeRetrieveCompany = function (company) {
        var creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.proposeRetrieveCompanyUrl, JSON.parse(creatorJSON), httpOptions);
    };
    InboundService.prototype.createPropose = function (inbound) {
        return this.http.post(this.createProposeUrl, inbound, httpOptions);
    };
    InboundService.prototype.proposeConfirm = function (id, quantity, dealId) {
        var creatorJSON = '{ "id" : ' +
            '"' +
            id +
            '"' +
            ', ' +
            '"quantity" : ' +
            '"' +
            quantity +
            '"' +
            ', ' +
            '"dealId" : ' +
            '"' +
            dealId +
            '"' +
            ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.proposeConfirmUrl, JSON.parse(creatorJSON), httpOptions);
    };
    InboundService.prototype.findAwardsUser = function (dealId) {
        var creatorJSON = '{ "dealId" : ' + '"' + dealId + '"' + ' }';
        return this.http.post(this.findAwardsUsersUrl, JSON.parse(creatorJSON), httpOptions);
    };
    InboundService.prototype.updateAwards = function (inboundIds, price, awards) {
        var creatorJSON = '{ "inboundIds" : ' +
            '"' +
            inboundIds +
            '"' +
            ', ' +
            '"price" : ' +
            '"' +
            price +
            '"' +
            ', ' +
            '"awards" : ' +
            '"' +
            awards +
            '"' +
            ' }';
        // console.log(JSON.parse(creatorJSON));
        return this.http.post(this.updateAwardsUrl, JSON.parse(creatorJSON), httpOptions);
    };
    InboundService.prototype.updateInboundQty = function (dealId, id, quantity) {
        var creatorJSON = '{ "dealId" : ' +
            '"' +
            dealId +
            '"' +
            ', ' +
            '"id" : ' +
            '"' +
            id +
            '"' +
            ', ' +
            '"quantity" : ' +
            '"' +
            quantity +
            '"' +
            ' }';
        return this.http.post(this.updateInboundQtyUrl, JSON.parse(creatorJSON), httpOptions);
    };
    InboundService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InboundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InboundService);
    return InboundService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
var ProductService = /** @class */ (function () {
    // NameUrl = 'http://192.168.1.119:8081/api/product/name';
    function ProductService(http) {
        this.http = http;
        this.createUrl = 'http://192.168.1.90:8081/api/product/add'; // URL to web api
        this.tenUrl = 'http://192.168.1.90:8081/api/product/findten';
        this.allUrl = 'http://192.168.1.90:8081/api/product/find';
        this.NameIdUrl = 'http://192.168.1.90:8081/api/product/NameId';
        this.updateUrl = 'http://192.168.1.90:8081/api/product/update';
    }
    ProductService.prototype.createProduct = function (product) {
        return this.http.post(this.createUrl, product, httpOptions);
    };
    ProductService.prototype.updateProduct = function (product) {
        return this.http.post(this.updateUrl, product, httpOptions);
    };
    ProductService.prototype.tenProduct = function (creator) {
        var creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.tenUrl, JSON.parse(creatorJSON), httpOptions);
    };
    ProductService.prototype.allProduct = function (creator) {
        var creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.allUrl, JSON.parse(creatorJSON), httpOptions);
    };
    ProductService.prototype.productNameId = function (creator) {
        var creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.NameIdUrl, JSON.parse(creatorJSON), httpOptions);
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.registerUrl = 'http://192.168.1.90:8081/api/register'; // URL to web api
    }
    RegisterService.prototype.userRegister = function (register) {
        return this.http.post(this.registerUrl, register, httpOptions);
    };
    RegisterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'content-Type': 'application/json'
    })
};
var StorageService = /** @class */ (function () {
    function StorageService(http) {
        this.http = http;
        this.addAddressUrl = 'http://192.168.1.90:8081/api/address/add';
        this.countUrl = 'http://192.168.1.90:8081/api/address/count';
        this.retrieveUrl = 'http://192.168.1.90:8081/api/address/retrieve';
    }
    StorageService.prototype.addAddress = function (address, creator) {
        var creatorJSON = '{ "address" : ' +
            '"' +
            address +
            '"' +
            ', ' +
            '"creator" : ' +
            '"' +
            creator +
            '"' +
            ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.addAddressUrl, JSON.parse(creatorJSON), httpOptions);
    };
    StorageService.prototype.count = function (creator) {
        var creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.countUrl, JSON.parse(creatorJSON), httpOptions);
    };
    StorageService.prototype.retrieve = function (creator) {
        var creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
        // console.log(JSON.parse(creator));
        return this.http.post(this.retrieveUrl, JSON.parse(creatorJSON), httpOptions);
    };
    StorageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/storage/storage.component.scss":
/*!************************************************!*\
  !*** ./src/app/storage/storage.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JhZ2Uvc3RvcmFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/storage/storage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/storage/storage.component.ts ***!
  \**********************************************/
/*! exports provided: StorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageComponent", function() { return StorageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var StorageComponent = /** @class */ (function () {
    function StorageComponent(storageService, authenticationService) {
        this.storageService = storageService;
        this.authenticationService = authenticationService;
    }
    StorageComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.currentUserValue) {
            this.creator = this.authenticationService.currentUserValue[0];
            if (this.authenticationService.currentUserValue[2] === 'company') {
                this.privilege = true;
            }
            else {
                this.privilege = false;
            }
        }
        this.retrieve();
    };
    StorageComponent.prototype.create = function () {
        var _this = this;
        if (this.addressAdd) {
            this.storageService
                .addAddress(this.addressAdd, this.creator)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                _this.isCreated = true;
            }, function (error) {
                console.log(error);
            }, function () {
                _this.ngOnInit();
            });
        }
    };
    StorageComponent.prototype.retrieve = function () {
        var _this = this;
        this.storageService
            .retrieve(this.creator)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.addressList = data;
        });
    };
    StorageComponent.ctorParameters = function () { return [
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    StorageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-storage',
            template: __webpack_require__(/*! raw-loader!./storage.component.html */ "./node_modules/raw-loader/index.js!./src/app/storage/storage.component.html"),
            providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]],
            styles: [__webpack_require__(/*! ./storage.component.scss */ "./src/app/storage/storage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], StorageComponent);
    return StorageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.company = false;
        this.individual = false;
        this.authenticationService.currentUser.subscribe(function (x) {
            return _this.checkPermission(x);
        });
    }
    TopBarComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/singin']);
        this.company = false;
        this.individual = false;
    };
    TopBarComponent.prototype.checkPermission = function (x) {
        this.currentUser = x;
        if (x) {
            var parsedValue = this.authenticationService.currentUserValue;
            if (parsedValue[2] === 'company') {
                this.company = true;
            }
            else if (parsedValue[2] === 'individual') {
                this.individual = true;
            }
        }
    };
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-bar.component.scss */ "./src/app/top-bar/top-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/app/user_components/activate/activate.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/user_components/activate/activate.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJfY29tcG9uZW50cy9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user_components/activate/activate.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user_components/activate/activate.component.ts ***!
  \****************************************************************/
/*! exports provided: ActivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateComponent", function() { return ActivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActivateComponent = /** @class */ (function () {
    function ActivateComponent() {
    }
    ActivateComponent.prototype.ngOnInit = function () {
    };
    ActivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activate',
            template: __webpack_require__(/*! raw-loader!./activate.component.html */ "./node_modules/raw-loader/index.js!./src/app/user_components/activate/activate.component.html"),
            styles: [__webpack_require__(/*! ./activate.component.scss */ "./src/app/user_components/activate/activate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActivateComponent);
    return ActivateComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/register */ "./src/app/models/register.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");







var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(registerService, router, authenticationService) {
        this.registerService = registerService;
        this.router = router;
        this.authenticationService = authenticationService;
        // register = new Register();
        this.register = new _models_register__WEBPACK_IMPORTED_MODULE_2__["Register"]();
        this.error = null;
        this.isRegistered = false;
    }
    RegisterFormComponent.prototype.formValid = function () {
        if (this.register.username &&
            this.register.phone &&
            this.register.email &&
            this.register.password &&
            this.pwdValid()) {
            return true;
        }
        return false;
    };
    RegisterFormComponent.prototype.user_register = function () {
        var _this = this;
        this.registerService
            .userRegister(this.register)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            // console.log(data);
            _this.isRegistered = true;
            _this.register.clear();
            _this.confirmedPassword = '';
            _this.error = null;
        }, function (error) {
            _this.error = error;
        }, function () { });
    };
    RegisterFormComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/home']);
        }
    };
    RegisterFormComponent.prototype.pwdValid = function () {
        if (this.confirmedPassword === this.register.password) {
            return true;
        }
        return false;
    };
    RegisterFormComponent.ctorParameters = function () { return [
        { type: _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
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
    return RegisterFormComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SignInFormComponent = /** @class */ (function () {
    function SignInFormComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '');
        this.submitted = false;
        this.loading = false;
        this.error = '';
    }
    SignInFormComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['dashboard']);
        }
    };
    SignInFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.authenticationService
            .login(this.user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['dashboard']);
        }, function (error) {
            _this.error = error;
        }, function () {
            _this.ngOnInit();
        });
    };
    SignInFormComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignInFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in-form',
            template: __webpack_require__(/*! raw-loader!./sign-in-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/user_components/sign-in-form/sign-in-form.component.html"),
            styles: [__webpack_require__(/*! ./sign-in-form.component.scss */ "./src/app/user_components/sign-in-form/sign-in-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignInFormComponent);
    return SignInFormComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map