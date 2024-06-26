# Zuora Unoffical Typescript SDK v2
This is an unofficial typescript SDK for Zuora Quickstart (v2) API. This SDK is generated from the OpenAPI specification of Zuora REST API.

https://developer.zuora.com/api-references/quickstart-api/overview/

## Quickstart 
1. Copy .env to .env.local and set values
2. Run npx ts-node test.ts from the examples folder

## Playground
1. cd playground
2. npm install
3. npm run dev

## Playground
This lets you test the SDK in a browser environment.
cd playground
npm install
npm run dev

### For ZUORA_ENDPOINT use the name or a URL
```typescript
export enum ZUORA_ENDPOINTS {
    US_SANDBOX = "https://rest.sandbox.zuora.com",
    US_PRODUCTION = "https://rest.zuora.com",
    US_NA_SANDBOX = "https://rest.sandbox.na.zuora.com",
    US_NA_PRODUCTION = "https://rest.na.zuora.com",
    US_CENTRAL = "https://rest.test.zuora.com",
    EU_SANDBOX = "https://rest.sandbox.eu.zuora.com",
    EU_CENTRAL = "https://rest.test.eu.zuora.com",
    EU_PRODUCTION = "https://rest.eu.zuora.com"
}
```
### Install 
 npm install --save "git://github.com/NumberVerifier/zuora-v2-typescript.git"

