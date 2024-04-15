"use strict";
/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * Quickstart API Reference
 * Zuora Quickstart API is recommended for new customers and integrators, allowing new integrators to swiftly integrate with Zuora. It supports essential business use cases.

To use the Quickstart API, you must have the following features enabled on your tenant:
 
* [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization)
* [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement)

To find the latest changes made to the Zuora Quickstart API, check the [Quickstart API Changelog](https://developer.zuora.com/quickstart-api/changelog/2022q4-changelog/).
We recommend that you subscribe to [Developers Community](https://community.zuora.com/communities/community-home?communitykey=e2a932b4-50c4-4019-a3e8-362e38714df3) to get notifications when a new version is released.


 * OpenAPI spec version: 2024-01-24
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountPaymentMethodRequestType = void 0;
/**
 * The type of the payment method. An additional hash is included on the payment method with a name matching this value. It contains additional information specific to the payment method type.
 */
var AccountPaymentMethodRequestType;
(function (AccountPaymentMethodRequestType) {
    AccountPaymentMethodRequestType["paypal_express"] = "paypal_express";
    AccountPaymentMethodRequestType["paypal_express_native"] = "paypal_express_native";
    AccountPaymentMethodRequestType["paypal_adaptive"] = "paypal_adaptive";
    AccountPaymentMethodRequestType["card"] = "card";
    AccountPaymentMethodRequestType["cc_ref"] = "cc_ref";
    AccountPaymentMethodRequestType["ach_debit"] = "ach_debit";
    AccountPaymentMethodRequestType["sepa_debit"] = "sepa_debit";
    AccountPaymentMethodRequestType["betalings_debit"] = "betalings_debit";
    AccountPaymentMethodRequestType["autogiro_debit"] = "autogiro_debit";
    AccountPaymentMethodRequestType["bacs_debit"] = "bacs_debit";
    AccountPaymentMethodRequestType["au_becs_debit"] = "au_becs_debit";
    AccountPaymentMethodRequestType["nz_becs_debit"] = "nz_becs_debit";
    AccountPaymentMethodRequestType["pad_debit"] = "pad_debit";
    AccountPaymentMethodRequestType["apple_pay"] = "apple_pay";
    AccountPaymentMethodRequestType["wire_transfer"] = "wire_transfer";
    AccountPaymentMethodRequestType["check"] = "check";
    AccountPaymentMethodRequestType["cash"] = "cash";
    AccountPaymentMethodRequestType["other"] = "other";
    AccountPaymentMethodRequestType["paypal"] = "paypal";
    AccountPaymentMethodRequestType["adyen_google_pay"] = "adyen_google_pay";
    AccountPaymentMethodRequestType["adyen_apple_pay"] = "adyen_apple_pay";
})(AccountPaymentMethodRequestType || (exports.AccountPaymentMethodRequestType = AccountPaymentMethodRequestType = {}));
