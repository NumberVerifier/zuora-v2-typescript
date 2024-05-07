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
export type GetRefundsParams = {
    /**
     * A cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with `next_page=W3sib3JkZXJ=`, your subsequent call can include `cursor=W3sib3JkZXJ=` in order to fetch the next page of the list.
     */
    cursor?: string;
    /**
     * Allows you to expand responses by including related object information in a single call. See the [Expand responses](https://developer.zuora.com/quickstart-api/tutorial/expand-responses/) section of the Quickstart API Tutorials for detailed instructions.
     */
    'expand[]'?: string[];
    /**
     * A case-sensitive filter on the list. See the [Filter lists](https://developer.zuora.com/quickstart-api/tutorial/filter-lists/) section of the Quickstart API Tutorials for detailed instructions.
     */
    'filter[]'?: string[];
    /**
     * A case-sensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. `account_number.asc`) or descending (e.g. `account_number.desc`). You cannot sort on properties that are arrays. If the array-type properties are specified for the `sort[]` parameter, they are ignored.
     */
    'sort[]'?: string[];
    /**
     * The maximum number of results to return in a single page. If the specified `page_size` is less than 1 or greater than 99, Zuora will return a 400 error.
     */
    page_size?: number;
    /**
   * Allows you to specify which fields are returned in the response.
          <details>
            <summary> Accepted values </summary>
              `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `account_id`, `amount`, `refund_date`, `external`, `gateway_id`, `gateway_reconciliation_reason`, `gateway_reconciliation_status`, `gateway_response`, `gateway_response_code`, `gateway_state`, `comment`, `payment_method_id`, `payout_id`, `reason_code`, `reference_id`, `refund_method_type`, `refund_number`, `statement_descriptor`, `statement_descriptor_phone`, `state`, `state_transitions`
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
   * Allows you to specify which fields are returned in the response.
          <details>
            <summary> Accepted values </summary>
              `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `type`, `account_id`, `bank_identification_number`, `device_session_id`, `ip_address`, `maximum_payment_attempts`, `payment_retry_interval`, `state`, `use_default_retry_rule`, `existing_mandate`, `last_failed_sale_transaction_time`, `last_transaction_time`, `last_transaction_status`, `number_of_consecutive_failures`, `total_number_of_processed_payments`, `total_number_of_error_payments`, `billing_details`, `card`, `apple_pay`, `google_pay`, `ach_debit`, `cc_ref`, `paypal_adaptive`, `paypal_express_native`, `paypal_express`, `sepa_debit`, `betalings_debit`, `autogiro_debit`, `bacs_debit`, `au_becs_debit`, `nz_becs_debit`, `pad_debit`
          </details>
   */
    'payment_method.fields[]'?: string[];
    /**
   * Allows you to specify which fields are returned in the response.
          <details>
            <summary> Accepted values </summary>
              `id`, `amount`, `billing_document_id`, `billing_document_type`
          </details>
   */
    'applied_to.fields[]'?: string[];
    /**
   * Allows you to specify which fields are returned in the response.
          <details>
            <summary> Accepted values </summary>
              `id`, `amount`, `credit_memo_item_id`, `taxation_item_id`
          </details>
   */
    'refund_applied_to_item.fields[]'?: string[];
};
