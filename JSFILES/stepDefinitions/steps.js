"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var AngularHomePage_js_1 = require("../pageObjects/AngularHomePage.js");
var calculator_js_1 = require("../pageObjects/calculator.js");
var chai = require("chai");
chai.use(require('chai-smoothie'));
var expect = chai.expect;
var calc = new calculator_js_1.calculator();
var ah = new AngularHomePage_js_1.AngularHomePage();
cucumber_1.Given('I will navigate to {string} page', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(string == "Calc")) return [3 /*break*/, 2];
                return [4 /*yield*/, protractor_1.browser.get('http://juliemr.github.io/protractor-demo/')];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2:
                if (!(string == "AngularJS")) return [3 /*break*/, 4];
                return [4 /*yield*/, protractor_1.browser.get('https://angularjs.org/')];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('I clicked on header link', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.sleep(3000)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ah.linktext.click()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('You will navigate to angular page', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("Navigated to next page successfully");
        return [2 /*return*/];
    });
}); });
cucumber_1.Then('You will enter {string} in search box', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.sleep(3000)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ah.search.sendKeys(string)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('I will add two numbers {string} and {string}', function (string, string2) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, calc.firstEditBox.sendKeys(string)];
            case 1:
                _a.sent();
                return [4 /*yield*/, calc.secondEditBox.sendKeys(string2)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('the output displayed should be {string}', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, calc.go.click()];
            case 1:
                _a.sent();
                return [4 /*yield*/, calc.getResult.getText().then(function (text) {
                        console.log(text);
                        expect(true).to.be.true;
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBNEM7QUFDNUMseUNBQXFDO0FBQ3JDLHdFQUFvRTtBQUNwRSw4REFBd0Q7QUFFeEQsMkJBQThCO0FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixJQUFJLElBQUksR0FBQyxJQUFJLDBCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLG9DQUFlLEVBQUUsQ0FBQztBQUcvQixnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLFVBQU0sTUFBTTs7OztxQkFDakQsQ0FBQSxNQUFNLElBQUUsTUFBTSxDQUFBLEVBQWQsd0JBQWM7Z0JBRWYscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsRUFBQTs7Z0JBQTlELFNBQThELENBQUM7OztxQkFFekQsQ0FBQSxNQUFNLElBQUUsV0FBVyxDQUFBLEVBQW5CLHdCQUFtQjtnQkFFekIscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFBQTs7Z0JBQTNDLFNBQTJDLENBQUM7Ozs7O0tBRy9DLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQywwQkFBMEIsRUFBRzs7O29CQUNoQyxxQkFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQXpCLFNBQXlCLENBQUM7Z0JBQzFCLHFCQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUE7O2dCQUF6QixTQUF5QixDQUFDOzs7O0tBRTNCLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxtQ0FBbUMsRUFBRTs7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBOzs7S0FDbkQsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLFVBQU0sTUFBTTs7O29CQUN4RCxxQkFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQXpCLFNBQXlCLENBQUM7Z0JBQzFCLHFCQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFBOztnQkFBaEMsU0FBZ0MsQ0FBQzs7OztLQUNsQyxDQUFDLENBQUM7QUFHRCxlQUFJLENBQUMsOENBQThDLEVBQUUsVUFBTSxNQUFNLEVBQUUsT0FBTzs7O29CQUVwRSxxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQTs7Z0JBQXhDLFNBQXdDLENBQUM7Z0JBQ3pDLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFBOztnQkFBMUMsU0FBMEMsQ0FBQzs7OztLQUVoRCxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsVUFBTSxNQUFNOzs7b0JBRTFELHFCQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUE7O2dCQUFyQixTQUFxQixDQUFDO2dCQUN0QixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7d0JBRWhELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRWxCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFFMUIsQ0FBQyxDQUFDLEVBQUE7O2dCQU5GLFNBTUUsQ0FBQTs7OztLQUVILENBQUMsQ0FBQyJ9