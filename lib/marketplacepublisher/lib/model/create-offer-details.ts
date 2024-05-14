/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about new Offers.
 */
export interface CreateOfferDetails {
  /**
   * Offers Identifier
   */
  "displayName": string;
  /**
   * Compartment Identifier of the seller
   */
  "sellerCompartmentId": string;
  /**
   * Compartment Identifier of the buyer
   */
  "buyerCompartmentId"?: string;
  /**
   * Description of the Offer
   */
  "description"?: string;
  /**
   * Internal notes of the Offer
   */
  "internalNotes"?: string;
  /**
   * The time the Offer will become active after it has been accepted by the Buyer. An RFC3339 formatted datetime string
   */
  "timeStartDate"?: Date;
  /**
   * Duration the Offer will be active after its start date. An ISO8601 extended formatted string.
   */
  "duration"?: string;
  /**
   * The time the Offer must be accepted by the Buyer before the Offer becomes invalid. An RFC3339 formatted datetime string
   */
  "timeAcceptBy"?: Date;
  "pricing"?: model.Pricing;
  "buyerInformation"?: model.BuyerInformation;
  "sellerInformation"?: model.SellerInformation;
  /**
   * A list of Resource Bundles associated with an Offer.
   */
  "resourceBundles"?: Array<model.ResourceBundle>;
  /**
   * A list of key value pairs specified by the seller
   */
  "customFields"?: Array<model.CustomField>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateOfferDetails {
  export function getJsonObj(obj: CreateOfferDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "pricing": obj.pricing ? model.Pricing.getJsonObj(obj.pricing) : undefined,
        "buyerInformation": obj.buyerInformation
          ? model.BuyerInformation.getJsonObj(obj.buyerInformation)
          : undefined,
        "sellerInformation": obj.sellerInformation
          ? model.SellerInformation.getJsonObj(obj.sellerInformation)
          : undefined,
        "resourceBundles": obj.resourceBundles
          ? obj.resourceBundles.map(item => {
              return model.ResourceBundle.getJsonObj(item);
            })
          : undefined,
        "customFields": obj.customFields
          ? obj.customFields.map(item => {
              return model.CustomField.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateOfferDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "pricing": obj.pricing ? model.Pricing.getDeserializedJsonObj(obj.pricing) : undefined,
        "buyerInformation": obj.buyerInformation
          ? model.BuyerInformation.getDeserializedJsonObj(obj.buyerInformation)
          : undefined,
        "sellerInformation": obj.sellerInformation
          ? model.SellerInformation.getDeserializedJsonObj(obj.sellerInformation)
          : undefined,
        "resourceBundles": obj.resourceBundles
          ? obj.resourceBundles.map(item => {
              return model.ResourceBundle.getDeserializedJsonObj(item);
            })
          : undefined,
        "customFields": obj.customFields
          ? obj.customFields.map(item => {
              return model.CustomField.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
