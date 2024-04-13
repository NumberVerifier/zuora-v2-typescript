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
export type GetInvoiceParams = {
    /**
     * Allows you to specify which fields are returned in the response.
            <details>
              <summary> Accepted values </summary>
                `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `state`, `balance`, `due_date`, `invoice_number`, `posted_by_id`, `state_transitions`, `description`, `account_id`, `total`, `subtotal`, `tax`, `paid`, `past_due`, `document_date`, `amount_paid`, `amount_refunded`, `payment_terms`, `bill_to_id`, `sold_to_id`, `billing_document_settings`, `currency`
            </details>
     */
    'fields[]'?: string[];
    /**
     * Allows you to specify which fields are returned in the response.
            <details>
              <summary> Accepted values </summary>
                `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `amount`, `booking_reference`, `applied_to_item_id`, `price_id`, `discount_item`, `deferred_revenue_account`, `description`, `invoice_id`, `sku`, `name`, `purchase_order_number`, `quantity`, `recognized_revenue_account`, `remaining_balance`, `revenue_recognition_rule_name`, `accounting_code`, `service_end`, `service_start`, `accounts_receivable_account`, `subscription_id`, `subscription_item_id`, `tax`, `tax_code`, `tax_inclusive`, `unit_amount`, `unit_of_measure`, `document_item_date`
            </details>
     */
    'invoice_items.fields[]'?: string[];
    /**
     * Allows you to specify which fields are returned in the response.
            <details>
              <summary> Accepted values </summary>
                `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `amount`, `amount_exempt`, `tax_date`, `jurisdiction`, `location_code`, `name`, `sales_tax_payable_account`, `tax_code`, `tax_code_name`, `tax_rate`, `tax_rate_name`, `tax_inclusive`, `tax_rate_type`, `amount_credited`, `amount_paid`, `remaining_balance`
            </details>
     */
    'taxation_items.fields[]'?: string[];
    /**
     * Allows you to specify which fields are returned in the response.
            <details>
              <summary> Accepted values </summary>
                `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `auto_pay`, `account_number`, `bill_to_id`, `sold_to_id`, `billing_document_settings`, `communication_profile_id`, `crm_id`, `sales_rep`, `parent_account_id`, `payment_gateway`, `payment_terms`, `remaining_credit_memo_balance`, `remaining_debit_memo_balance`, `remaining_invoice_balance`, `remaining_payment_balance`, `sequence_set_id`, `tax_certificate`, `batch`, `tax_identifier`, `bill_cycle_day`, `description`, `name`, `currency`, `default_payment_method_id`, `enabled`
            </details>
     */
    'account.fields[]'?: string[];
    /**
     * Allows you to specify which fields are returned in the response.
            <details>
              <summary> Accepted values </summary>
                `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `account_id`, `address`, `home_phone`, `first_name`, `last_name`, `email`, `work_email`, `nickname`, `other_phone`, `work_phone`, `mobile_phone`, `tax_region`, `other_phone_type`, `fax`
            </details>
     */
    'bill_to.fields[]'?: string[];
    /**
     * Allows you to specify which fields are returned in the response.
            <details>
              <summary> Accepted values </summary>
                `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `total`, `subtotal`, `quantity_fulfilled`, `quantity_pending_fulfillment`, `unit_of_measure`, `accounting_code`, `adjustment_liability_account`, `unit_amount`, `target_date`, `billing_rule`, `contract_asset_account`, `contract_liability_account`, `description`, `discount_total`, `revenue`, `discount_unit_amount`, `discount_percent`, `category`, `name`, `item_number`, `type`, `list_price`, `list_unit_price`, `original_order_date`, `original_order_id`, `original_order_line_item_id`, `original_order_line_item_number`, `original_order_number`, `product_code`, `price_id`, `purchase_order_number`, `quantity`, `quantity_available_for_return`, `related_subscription_number`, `requires_fulfillment`, `sold_to_id`, `original_sold_to_id`, `tax_code`, `tax_inclusive`, `end_date`, `start_date`, `unbilled_receivables_account`, `state`, `order_id`
            </details>
     */
    'line_item.fields[]'?: string[];
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
//# sourceMappingURL=getInvoiceParams.d.ts.map