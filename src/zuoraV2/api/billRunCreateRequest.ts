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
import type { BillRunCreateRequestCustomObjects } from './billRunCreateRequestCustomObjects';
import type { BillRunCreateRequestDayOfMonth } from './billRunCreateRequestDayOfMonth';
import type { BillRunCreateRequestType } from './billRunCreateRequestType';

export interface BillRunCreateRequest {
  /** Identifier of the customer account to bill. Specify this field or `account_number` if you want to create a bill run for a single customer. */
  account_id?: string;
  /** Human-readable identifier of the account to bill. Specify this field or `account_id` if you want to create a bill run for a single customer. */
  account_number?: string;
  /** Identifier of the customer account batch to be included in this bill run. */
  batches?: string[];
  /** Type of the charge to be excluded from the bill run. */
  charges_excluded?: string[];
  /** Unique identifier of the Zuora user who created the object */
  readonly created_by_id?: string;
  /** The date and time when the object was created in ISO 8601 UTC format. */
  readonly created_time?: Date;
  custom_fields?: CustomFields;
  /** The custom objects associated with a Zuora standard object. */
  readonly custom_objects?: BillRunCreateRequestCustomObjects;
  /** The day of the month on which the multiple customer accounts are billed. */
  day_of_month?: BillRunCreateRequestDayOfMonth;
  /** If set to `true`, invoices will be automatically emailed to customers. */
  email?: boolean;
  /** If it is set to `false`, invoices for zero amounts will not be emailed to customers.  */
  email_zero_amount_invoices?: boolean;
  /** Unique identifier for the object. */
  readonly id?: string;
  /** The date displayed on the invoice. */
  invoice_date: Date;
  /** The name of the bill run. */
  name?: string;
  /** Indicates whether to automatically post a billing document after it is created. */
  post?: boolean;
  /** If set to `true`, subscriptions will be automatically renewed. */
  renew?: boolean;
  /** The target subscriptions for this bill run. Note that all these subscriptions must belong to the same account. */
  subscription_ids?: string[];
  /** All unbilled items on or before this date are included in this bill run. */
  target_date: Date;
  /** The type of the bill run. This field is only available if you have the <a href=”https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Automate_billing_document_generation/Bill_runs/Z_Catch-Up_Bill_Run” target=”_blank”>Catch-Up Bill Run</a> feature enabled in your tenant. */
  type?: BillRunCreateRequestType;
  /** Unique identifier of the Zuora user who last updated the object */
  readonly updated_by_id?: string;
  /** The date and time when the object was last updated in ISO 8601 UTC format. */
  readonly updated_time?: Date;
}
