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
/**
 * The type of the bill run. This field is only available if you have the <a href=”https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Automate_billing_document_generation/Bill_runs/Z_Catch-Up_Bill_Run” target=”_blank”>Catch-Up Bill Run</a> feature enabled in your tenant.
 */
export var BillRunCreateRequestType;
(function (BillRunCreateRequestType) {
    BillRunCreateRequestType["regular"] = "regular";
    BillRunCreateRequestType["catch_up"] = "catch_up";
})(BillRunCreateRequestType || (BillRunCreateRequestType = {}));
//# sourceMappingURL=billRunCreateRequestType.js.map