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
export type GetPaymentMethodByIdParams = {
    /**
     * Allows you to specify which fields are returned in the response.
            <details>
              <summary> Accepted values </summary>
                `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `type`, `account_id`, `bank_identification_number`, `device_session_id`, `ip_address`, `maximum_payment_attempts`, `payment_retry_interval`, `state`, `use_default_retry_rule`, `existing_mandate`, `last_failed_sale_transaction_time`, `last_transaction_time`, `last_transaction_status`, `number_of_consecutive_failures`, `total_number_of_processed_payments`, `total_number_of_error_payments`, `billing_details`, `card`, `apple_pay`, `google_pay`, `ach_debit`, `cc_ref`, `paypal_adaptive`, `paypal_express_native`, `paypal_express`, `sepa_debit`, `betalings_debit`, `autogiro_debit`, `bacs_debit`, `au_becs_debit`, `nz_becs_debit`, `pad_debit`
            </details>
     */
    'fields[]'?: string[];
    /**
     * Allows you to specify which fields are returned in the response.
            <details>
              <summary> Accepted values </summary>
                `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `auto_pay`, `account_number`, `bill_to_id`, `sold_to_id`, `billing_document_settings`, `communication_profile_id`, `crm_id`, `sales_rep`, `parent_account_id`, `payment_gateway`, `payment_terms`, `remaining_credit_memo_balance`, `remaining_debit_memo_balance`, `remaining_invoice_balance`, `remaining_payment_balance`, `sequence_set_id`, `tax_certificate`, `batch`, `tax_identifier`, `bill_cycle_day`, `description`, `name`, `currency`, `default_payment_method_id`, `enabled`
            </details>
     */
    'account.fields[]'?: string[];
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
//# sourceMappingURL=getPaymentMethodByIdParams.d.ts.map