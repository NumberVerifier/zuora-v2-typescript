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
 * Indicates on which date the subscription becomes effective.
 */
export interface StartOnResponse {
    /** Effective contract date for this subscription, in the `yyyy-mm-dd` format. */
    contract_effective?: Date;
    /** The date on which the services or products within a subscription have been accepted by the customer, in the `yyyy-mm-dd` format.      <ul>       <li> If [Zuora is configured to require customer acceptance](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Default_Subscription_Settings#Require_Customer_Acceptance_of_Orders.3F) and the `customer_acceptance` field is not set for a `subscription_plans` order action or the "Create a subscription" operation, a `pending` order and/or a `pending_acceptance` subscription are created. At the same time, if the service activation date field is also required and not set, a `pending` order and/or a `pending_activation` subscription are created instead.</li>       <li>       If [Zuora is configured to require customer acceptance](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Default_Subscription_Settings#Require_Customer_Acceptance_of_Orders.3F) and the `customer_acceptance` field is not set for any of the following order actions or the "Update a subscription" operation, a `pending` order is created. The subscription status is not impacted. **Note**: This feature is in Limited Availability. If you want to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com/).       <ul>       <li>`add_subscription_plans`</li>       <li>`update_subscription_plans`</li>       <li>`remove_subscription_plans`</li>       <li>`renew`</li>       <li>`terms`</li>       </ul></li>       </ul>        */
    customer_acceptance?: Date;
    /** The date on which the services or products within a subscription have been activated and access has been provided to the customer, as the `yyyy-mm-dd` format.       <ul>        <li> If [Zuora is configured to require service activation](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Default_Subscription_Settings#Require_Service_Activation_of_Orders.3F) and the `service_activation` field is not set for a `subscription_plans` order action or the "Create a subscription" operation, a `pending` order and/or a `pending_activation` subscription are created.</li>         <li> If [Zuora is configured to require service activation](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Default_Subscription_Settings#Require_Service_Activation_of_Orders.3F) and the `service_activation` field is not set for any of the following order actions or the "Update a subscription" operation, a `pending` order is created. The subscription status is not impacted. **Note**: This feature is in Limited Availability. If you want to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com/).         <ul>           <li>`add_subscription_plans`</li>           <li>`update_subscription_plans`</li>           <li>`remove_subscription_plans`</li>           <li>`renew`</li>           <li>`terms`</li>           </ul>           </li>         </ul> */
    service_activation?: Date;
}
//# sourceMappingURL=startOnResponse.d.ts.map