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
import type { CardBrand } from './cardBrand';
import type { CardMandate } from './cardMandate';
/**
 * Credit card information. When providing a card number, you must meet the requirements for PCI compliance. We strongly recommend using Zuora's [Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0) instead of interacting with this API directly.
 */
export interface Card {
    /** Card brand. */
    brand: CardBrand;
    /** The card number, as a string without any separators. */
    card_number: string;
    /** One or two digit expiration month (1-12) of the credit card. */
    expiry_month: number;
    /** Two- or four-digit number representing the card's expiration year. */
    expiry_year: number;
    /** The last four digits of the card number. */
    readonly last_4?: string;
    mandate?: CardMandate;
    /** Card security code. It is highly recommended to always include this value. */
    security_code?: string;
}
