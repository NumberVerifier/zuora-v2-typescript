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
import type { LineItemPatchRequestBillingRule } from './lineItemPatchRequestBillingRule';
import type { LineItemPatchRequestCategory } from './lineItemPatchRequestCategory';
import type { CustomFields } from './customFields';
import type { OrderLineItemRevenue } from './orderLineItemRevenue';
import type { LineItemPatchRequestState } from './lineItemPatchRequestState';
import type { LineItemPatchRequestType } from './lineItemPatchRequestType';

/**
 * Update an order line item
 */
export interface LineItemPatchRequest {
  /** An active accounting code in your Zuora chart of accounts. */
  accounting_code?: string;
  /** An active accounting code in your Zuora chart of accounts. */
  adjustment_liability_account?: string;
  /** The billing rule for the order line item. */
  billing_rule?: LineItemPatchRequestBillingRule;
  /** Category of the order line item. */
  category?: LineItemPatchRequestCategory;
  /** An active accounting code in your Zuora chart of accounts. */
  contract_asset_account?: string;
  /** An active accounting code in your Zuora chart of accounts. */
  contract_liability_account?: string;
  custom_fields?: CustomFields;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: string;
  /** Discount percent. */
  discount_percent?: number;
  /** Discount amount per unit. */
  discount_unit_amount?: number;
  /** The date the order line item transitions to complete. */
  end_date?: Date;
  /** Human-readable identifier of the order item. It can be user-supplied. */
  item_number?: string;
  /** The list price per unit for the order line item. */
  list_unit_price?: number;
  /** The name of the order line item. */
  name?: string;
  /** The product code for the order line item. */
  product_code?: string;
  /** Used by customers to specify the Purchase Order Number provided by the buyer. */
  purchase_order_number?: string;
  /** The quantity of the product ordered. */
  quantity?: number;
  /** Use this field to relate an order line item to an subscription. */
  related_subscription_number?: string;
  revenue?: OrderLineItemRevenue;
  /** The unique identifier of a contact belonging to the billing account of the order line item. Use this field to assign and existing contact as the sold to contact of an order line item. */
  sold_to_id?: string;
  /** The date a transaction starts. The default value of this field is the order date. */
  start_date?: Date;
  /** The state of an order line item. If you want to generate billing documents for order line items, you must set this field to `sent_to_billing`. For invoice preview, you do not need to set this field. */
  state?: LineItemPatchRequestState;
  /** All order line items that were unbilled on or before this date are included in future bill runs. */
  target_date?: Date;
  /** The tax code for the order line item. */
  tax_code?: string;
  /** The type of the order line item. */
  type?: LineItemPatchRequestType;
  /** An active accounting code in your Zuora chart of accounts.. */
  unbilled_receivables_account?: string;
  /** The unit amount to be charged. */
  unit_amount?: number;
  /** A configured unit of measure. */
  unit_of_measure?: string;
}
