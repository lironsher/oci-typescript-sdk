/**
 * MarketplacePrivateOffer API
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
 * the internal details of an offer that are only visible to the seller
 */
export interface OfferInternalDetail {
  /**
   * A list of key value pairs specified by the seller
   */
  "customFields": Array<model.CustomField>;
  /**
   * Internal notes only intended for the Publisher of the Offer
   */
  "internalNotes": string;
}

export namespace OfferInternalDetail {
  export function getJsonObj(obj: OfferInternalDetail): object {
    const jsonObj = {
      ...obj,
      ...{
        "customFields": obj.customFields
          ? obj.customFields.map(item => {
              return model.CustomField.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OfferInternalDetail): object {
    const jsonObj = {
      ...obj,
      ...{
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
