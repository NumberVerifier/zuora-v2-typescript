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
import type { CustomFields } from './customFields';

/**
 */
export interface PaymentScheduleItemRequest {
  /** The amount to be collected by this payment schedule item. */
  amount?: number;
  /** Three-letter ISO currency code. Once the currency is set for an account, it cannot be updated. */
  currency?: string;
  custom_fields?: CustomFields;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: string;
  gateway_id?: string;
  /** Identifier of the payment method on the customer account. */
  payment_method_id?: string;
  /**
   * At which hour in the day in the tenant's timezone this payment will be collected. Available values:[0,1,2,~,22,23]. If the time difference between your tenant’s timezone and the timezone where Zuora servers are located is not in full hours, for example, 2.5 hours, the payment schedule items will be triggered half an hour later than your scheduled time.       The default value is `0`. If the payment `run_hour` and `scheduled_date` are backdated, the system will collect the payment when the next `run_hour` occurs.
   * @minimum 0
   * @maximum 23
   */
  run_hour?: number;
  /** The scheduled date of the payment collection. */
  scheduled_date?: Date;
}