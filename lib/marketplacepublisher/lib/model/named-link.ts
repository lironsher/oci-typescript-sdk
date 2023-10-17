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
 * A link to a resource on the internet.
 */
export interface NamedLink {
  /**
   * Text that describes the resource.
   */
  "name": string;
  /**
   * The URL of the resource.
   */
  "url": string;
}

export namespace NamedLink {
  export function getJsonObj(obj: NamedLink): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NamedLink): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
