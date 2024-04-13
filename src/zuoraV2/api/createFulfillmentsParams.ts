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

export type CreateFulfillmentsParams = {
/**
 * Allows you to specify which fields are returned in the response. 
        <details> 
          <summary> Accepted values </summary> 
            `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `state`, `description`, `quantity`, `order_line_item_id`, `fulfillment_number`, `revenue`, `fulfillment_date`, `tracking_number`, `carrier`, `fulfillment_system`, `location`, `external_id`, `type`, `target_date` 
        </details>
 */
'fields[]'?: string[];
/**
 * Allows you to specify which fields are returned in the response. 
        <details> 
          <summary> Accepted values </summary> 
            `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `fulfillment_id`, `description`, `fulfillment_item_number` 
        </details>
 */
'fulfillment_item.fields[]'?: string[];
/**
 * Allows you to specify which fields are returned in the response. 
        <details> 
          <summary> Accepted values </summary> 
            `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `amount`, `applied_to_item_id`, `price_id`, `discount_item`, `deferred_revenue_account`, `description`, `credit_memo_id`, `sku`, `name`, `purchase_order_number`, `quantity`, `recognized_revenue_account`, `remaining_balance`, `revenue_recognition_rule_name`, `service_end`, `service_start`, `accounts_receivable_account`, `on_account_account`, `subscription_id`, `subscription_item_id`, `tax`, `tax_code`, `tax_inclusive`, `unit_amount`, `unit_of_measure`, `subtotal`, `invoice_item_id`, `document_item_date` 
        </details>
 */
'credit_memo_item.fields[]'?: string[];
/**
 * Allows you to specify which fields are returned in the response. 
        <details> 
          <summary> Accepted values </summary> 
            `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `amount`, `booking_reference`, `applied_to_item_id`, `price_id`, `discount_item`, `deferred_revenue_account`, `description`, `invoice_id`, `sku`, `name`, `purchase_order_number`, `quantity`, `recognized_revenue_account`, `remaining_balance`, `revenue_recognition_rule_name`, `accounting_code`, `service_end`, `service_start`, `accounts_receivable_account`, `subscription_id`, `subscription_item_id`, `tax`, `tax_code`, `tax_inclusive`, `unit_amount`, `unit_of_measure`, `document_item_date` 
        </details>
 */
'invoice_item.fields[]'?: string[];
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
