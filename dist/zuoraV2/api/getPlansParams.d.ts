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
export type GetPlansParams = {
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
              `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `start_date`, `end_date`, `name`, `active`, `description`, `plan_number`, `product_id`, `active_currencies`
          </details>
   */
    'fields[]'?: string[];
    /**
   * Allows you to specify which fields are returned in the response.
          <details>
            <summary> Accepted values </summary>
              `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `tiers`, `charge_model`, `charge_type`, `name`, `description`, `revenue_recognition_rule`, `stacked_discount`, `recognized_revenue_accounting_code`, `deferred_revenue_accounting_code`, `accounting_code`, `recurring`, `start_event`, `tax_code`, `tax_inclusive`, `taxable`, `unit_of_measure`, `quantity`, `min_quantity`, `max_quantity`, `price_base_interval`, `discount_level`, `overage`, `plan_id`, `tiers_mode`, `apply_discount_to`, `prepayment`, `drawdown`, `discount_amounts`, `unit_amounts`, `discount_percent`, `amounts`
          </details>
   */
    'prices.fields[]'?: string[];
    /**
   * Allows you to specify which fields are returned in the response.
          <details>
            <summary> Accepted values </summary>
              `custom_fields`, `created_by_id`, `updated_by_id`, `created_time`, `id`, `updated_time`, `start_date`, `end_date`, `active`, `name`, `type`, `sku`, `description`
          </details>
   */
    'product.fields[]'?: string[];
};
