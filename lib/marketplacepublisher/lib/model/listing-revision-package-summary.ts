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
 * The model for a summary of a package.
 */
export interface ListingRevisionPackageSummary {
  /**
   * The ID of the listing revision package.
   */
  "id": string;
  /**
   * The ID of the listing revision.
   */
  "listingRevisionId": string;
  /**
   * The unique identifier for the compartment.
   */
  "compartmentId": string;
  /**
   * The name of the listing revision package.
   */
  "displayName": string;
  /**
   * The version of the specified package.
   */
  "packageVersion": string;
  /**
   * The specified package's type.
   */
  "packageType": model.PackageType;
  /**
   * Identifies whether security upgrades will be provided for this package.
   */
  "areSecurityUpgradesProvided": boolean;
  /**
   * The current state of the Package.
   */
  "lifecycleState": string;
  /**
   * The current status of the package.
   */
  "status": string;
  /**
    * The date and time the publication package was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: {@code 2022-09-24T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the publication package was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: {@code 2022-09-24T21:10:29.600Z}
* 
    */
  "timeUpdated": Date;
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
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ListingRevisionPackageSummary {
  export function getJsonObj(obj: ListingRevisionPackageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ListingRevisionPackageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
