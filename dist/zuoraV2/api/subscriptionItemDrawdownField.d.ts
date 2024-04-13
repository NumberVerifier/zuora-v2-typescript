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
 * The drawdown information.
 */
export interface SubscriptionItemDrawdownField {
    /** The conversion rate between usage unit of measure (UOM) and drawdown unit of measure for a drawdown charge.        **Note**:    <ul>    <li>Must be a positive number (>0).</li>    <li>Must be `1` when usage UOM and drawdown UOM are the same.</li>     <li>If both `conversion_rate` and `unit_of_measure` for the drawdown are empty, the system will set default values respectively: <ul>      <li> `conversion_rate`: 1 </li>      <li> `unit_of_measure`: Same as the usage UOM of this drawdown charge. </li></ul></li></ul>        The `conversion_rate` and `unit_of_measure` fields need to have values or be empty at the same time.      */
    conversion_rate?: number;
}
//# sourceMappingURL=subscriptionItemDrawdownField.d.ts.map