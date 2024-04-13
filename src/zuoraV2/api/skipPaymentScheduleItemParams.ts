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

export type SkipPaymentScheduleItemParams = {
/**
 * Allows you to specify which fields are returned in the response. 
        <details> 
          <summary> Accepted values </summary> 
            `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `account_id`, `amount`, `balance`, `currency`, `debit_memo_id`, `invoice_id`, `payment_id`, `payment_method_id`, `description`, `prepayment`, `payment_gateway_id`, `run_hour`, `state`, `scheduled_date`, `payment_schedule_item_number`, `payment_schedule_id`, `cancellation_reason`, `error_message`, `payment_option_id` 
        </details>
 */
'fields[]'?: string[];
/**
 * Allows you to specify which fields are returned in the response. 
        <details> 
          <summary> Accepted values </summary> 
            `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `account_id`, `description`, `next_payment_date`, `payment_schedule_number`, `number_of_payments`, `prepayment`, `start_date`, `run_hour`, `state`, `recent_payment_date`, `total_payments_errored`, `total_payments_processed`, `total_amount`, `debit_memo_id`, `invoice_id` 
        </details>
 */
'payment_schedule.fields[]'?: string[];
/**
 * Allows you to expand responses by including related object information in a single call. See the [Expand responses](https://developer.zuora.com/quickstart-api/tutorial/expand-responses/) section of the Quickstart API Tutorials for detailed instructions.
 */
'expand[]'?: string[];
/**
 * A case-sensitive filter on the list. See the [Filter lists](https://developer.zuora.com/quickstart-api/tutorial/filter-lists/) section of the Quickstart API Tutorial for detailed instructions.            
            Note that the filters on this operation are only applicable to the related objects. For example, when you are calling the "Retrieve a billing document" operation, you can use the `filter[]` parameter on the related objects such as `filter[]=items[account_id].EQ:8ad09e208858b5cf0188595208151c63`
 */
'filter[]'?: string[];
/**
 * The maximum number of results to return in a single page. If the specified `page_size` is less than 1 or greater than 99, Zuora will return a 400 error.
 */
page_size?: number;
};
