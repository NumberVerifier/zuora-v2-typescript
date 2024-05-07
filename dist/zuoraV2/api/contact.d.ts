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
import type { ContactAddress } from './contactAddress';
import type { ContactCustomFields } from './contactCustomFields';
import type { ContactCustomObjects } from './contactCustomObjects';
import type { ContactOtherPhoneType } from './contactOtherPhoneType';
/**
 */
export interface Contact {
    /** Identifier of a customer account with which this contact is associated. */
    account_id?: string;
    /** Container for the address informtion. */
    address?: ContactAddress;
    /** Unique identifier of the Zuora user who created the object */
    readonly created_by_id?: string;
    /** The date and time when the object was created in ISO 8601 UTC format. */
    readonly created_time?: Date;
    /** Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. */
    custom_fields?: ContactCustomFields;
    /** The custom objects associated with a Zuora standard object. */
    readonly custom_objects?: ContactCustomObjects;
    /** Customer email address. */
    email?: string;
    /** The contact's fax number. */
    fax?: string;
    /** Customer first name. */
    first_name?: string;
    /** Customer home phone (including extension). */
    home_phone?: string;
    /** Unique identifier for the object. */
    readonly id?: string;
    /** Customer last name. */
    last_name?: string;
    /** Customer phone (including extension). */
    mobile_phone?: string;
    /** Nickname for this contact. */
    nickname?: string;
    /** Other customer phone (including extension). */
    other_phone?: string;
    /** The type of the additional phone number. */
    other_phone_type?: ContactOtherPhoneType;
    /** A region defined in your Zuora Tax rules. */
    tax_region?: string;
    /** Unique identifier of the Zuora user who last updated the object */
    readonly updated_by_id?: string;
    /** The date and time when the object was last updated in ISO 8601 UTC format. */
    readonly updated_time?: Date;
    /** Customer work email. */
    work_email?: string;
    /** Customer work phone. */
    work_phone?: string;
}