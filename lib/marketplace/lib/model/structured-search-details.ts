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
 * The model for a request that uses Search's structured query language.
 */
export interface StructuredSearchDetails extends model.SearchListingsDetails {
  /**
   * The structured query describing which resources to search for.
   */
  "query": string;

  "type": string;
}

export namespace StructuredSearchDetails {
  export function getJsonObj(obj: StructuredSearchDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SearchListingsDetails.getJsonObj(obj) as StructuredSearchDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "Structured";
  export function getDeserializedJsonObj(
    obj: StructuredSearchDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SearchListingsDetails.getDeserializedJsonObj(obj) as StructuredSearchDetails)),
      ...{}
    };

    return jsonObj;
  }
}
