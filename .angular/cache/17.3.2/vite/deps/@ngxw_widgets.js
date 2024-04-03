import {
  Component,
  Injectable,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-573XOZEJ.js";
import "./chunk-GADBISN6.js";
import "./chunk-SG3BCSKH.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-PQ7O3X3G.js";
import "./chunk-J4B6MK7R.js";

// node_modules/@ngxw/widgets/fesm2022/ngxw-widgets.mjs
var _WidgetsService = class _WidgetsService {
  constructor() {
  }
};
_WidgetsService.ɵfac = function WidgetsService_Factory(t) {
  return new (t || _WidgetsService)();
};
_WidgetsService.ɵprov = ɵɵdefineInjectable({
  token: _WidgetsService,
  factory: _WidgetsService.ɵfac,
  providedIn: "root"
});
var WidgetsService = _WidgetsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _WidgetsComponent = class _WidgetsComponent {
};
_WidgetsComponent.ɵfac = function WidgetsComponent_Factory(t) {
  return new (t || _WidgetsComponent)();
};
_WidgetsComponent.ɵcmp = ɵɵdefineComponent({
  type: _WidgetsComponent,
  selectors: [["lib-widgets"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  template: function WidgetsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "p");
      ɵɵtext(1, " widgets works! ");
      ɵɵelementEnd();
    }
  }
});
var WidgetsComponent = _WidgetsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WidgetsComponent, [{
    type: Component,
    args: [{
      selector: "lib-widgets",
      standalone: true,
      imports: [],
      template: `
    <p>
      widgets works!
    </p>
  `
    }]
  }], null, null);
})();
export {
  WidgetsComponent,
  WidgetsService
};
//# sourceMappingURL=@ngxw_widgets.js.map
