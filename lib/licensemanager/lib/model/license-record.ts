/**
 * License Manager API
 * Use the License Manager API to manage product licenses and license records. For more information, see [License Manager Overview](/iaas/Content/LicenseManager/Concepts/licensemanageroverview.htm).
 * OpenAPI spec version: 20220430
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
 * License record summary.
 */
export interface LicenseRecord {
  /**
   * The license record [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "id": string;
  /**
   * The product license [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) with which the license record is associated.
   */
  "productLicenseId"?: string;
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) where the license record is created.
   */
  "compartmentId"?: string;
  /**
   * The license record display name. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The license record product ID.
   */
  "productId"?: string;
  /**
   * The number of license units added by the user for the given license record.
   * Default 1
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "licenseCount"?: number;
  /**
   * The license record end date in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * date format.
   * Example: {@code 2018-09-12}
   *
   */
  "expirationDate"?: Date;
  /**
   * The license record support end date in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * date format.
   * Example: {@code 2018-09-12}
   *
   */
  "supportEndDate"?: Date;
  /**
   * Specifies if the license count is unlimited.
   */
  "isUnlimited": boolean;
  /**
   * Specifies if the license record term is perpertual.
   */
  "isPerpetual": boolean;
  /**
   * The time the license record was created. An [RFC 3339](https://tools.ietf.org/html/rfc3339)-formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the license record was updated. An [RFC 3339](https://tools.ietf.org/html/rfc3339)-formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current license record state.
   */
  "lifecycleState": model.LifeCycleState;
  /**
   * The product license unit.
   */
  "licenseUnit"?: model.LicenseUnit;
  /**
   * The product license name with which the license record is associated.
   */
  "productLicense"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
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
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace LicenseRecord {
  export function getJsonObj(obj: LicenseRecord): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LicenseRecord): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
