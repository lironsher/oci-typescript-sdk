/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Contains details indicating which compartment the term should move to
 */
export interface ChangeTermCompartmentDetails {
  /**
   * The id of the compartment which the term should be moved.
   */
  "compartmentId"?: string;
}

export namespace ChangeTermCompartmentDetails {
  export function getJsonObj(obj: ChangeTermCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeTermCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
