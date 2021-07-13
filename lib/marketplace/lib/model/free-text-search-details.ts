/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The model for a request that uses Search's Free text.
 */
export interface FreeTextSearchDetails extends model.SearchListingsDetails {
  /**
   * The text to search for.
   */
  "text": string;

  "type": string;
}

export namespace FreeTextSearchDetails {
  export function getJsonObj(obj: FreeTextSearchDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SearchListingsDetails.getJsonObj(obj) as FreeTextSearchDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "FreeText";
  export function getDeserializedJsonObj(
    obj: FreeTextSearchDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SearchListingsDetails.getDeserializedJsonObj(obj) as FreeTextSearchDetails)),
      ...{}
    };

    return jsonObj;
  }
}
