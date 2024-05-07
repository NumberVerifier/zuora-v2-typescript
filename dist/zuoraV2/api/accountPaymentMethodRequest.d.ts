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
import type { Account } from './account';
import type { AchDebit } from './achDebit';
import type { ApplePay } from './applePay';
import type { AuBecsDebit } from './auBecsDebit';
import type { AutogiroDebit } from './autogiroDebit';
import type { BacsDebit } from './bacsDebit';
import type { BetalingsDebit } from './betalingsDebit';
import type { BillingDetails } from './billingDetails';
import type { Card } from './card';
import type { CcRef } from './ccRef';
import type { CustomFields } from './customFields';
import type { AccountPaymentMethodRequestCustomObjects } from './accountPaymentMethodRequestCustomObjects';
import type { GooglePay } from './googlePay';
import type { NzBecsDebit } from './nzBecsDebit';
import type { PadDebit } from './padDebit';
import type { PaypalAdaptive } from './paypalAdaptive';
import type { PaypalExpress } from './paypalExpress';
import type { PaypalExpressNative } from './paypalExpressNative';
import type { SepaDebit } from './sepaDebit';
import type { AccountPaymentMethodRequestType } from './accountPaymentMethodRequestType';
/**
 */
export interface AccountPaymentMethodRequest {
    /** The customer account associated with this payment method. */
    readonly account?: Account;
    /** A customer account identifier. */
    account_id?: string;
    ach_debit?: AchDebit;
    apple_pay?: ApplePay;
    au_becs_debit?: AuBecsDebit;
    autogiro_debit?: AutogiroDebit;
    bacs_debit?: BacsDebit;
    /** The first six or eight digits of the payment method's number, such as the credit card number or account number. Banks use this number to identify a payment method. */
    bank_identification_number?: string;
    betalings_debit?: BetalingsDebit;
    billing_details?: BillingDetails;
    card?: Card;
    cc_ref?: CcRef;
    /** Unique identifier of the Zuora user who created the object */
    readonly created_by_id?: string;
    /** The date and time when the object was created in ISO 8601 UTC format. */
    readonly created_time?: Date;
    custom_fields?: CustomFields;
    /** The custom objects associated with a Zuora standard object. */
    readonly custom_objects?: AccountPaymentMethodRequestCustomObjects;
    /** The custom type of the payment method from Universal Payment Connector. */
    custom_type?: string;
    /** Identifier of the device browser session. */
    device_session_id?: string;
    google_pay?: GooglePay;
    /** Unique identifier for the object. */
    readonly id?: string;
    /**
     * The IP address from which the Mandate was accepted by the customer.
     * @nullable
     */
    ip_address?: string | null;
    /** Maximum number of consecutive failed retry payment attempts using this payment method before retries are stopped. */
    maximum_payment_attempts?: number;
    nz_becs_debit?: NzBecsDebit;
    pad_debit?: PadDebit;
    /** The retry interval in hours. */
    payment_retry_interval?: number;
    paypal_adaptive?: PaypalAdaptive;
    paypal_express?: PaypalExpress;
    paypal_express_native?: PaypalExpressNative;
    sepa_debit?: SepaDebit;
    /** The type of the payment method. An additional hash is included on the payment method with a name matching this value. It contains additional information specific to the payment method type. */
    type?: AccountPaymentMethodRequestType;
    /** Unique identifier of the Zuora user who last updated the object */
    readonly updated_by_id?: string;
    /** The date and time when the object was last updated in ISO 8601 UTC format. */
    readonly updated_time?: Date;
}