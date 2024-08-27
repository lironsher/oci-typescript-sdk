/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The details required to enable the Database Lifecycle Management feature.
 */
export interface DatabaseLifecycleFeatureConfiguration extends model.DatabaseFeatureConfiguration {
  /**
   * The Oracle license model that applies to the external database.
   *
   */
  "licenseModel"?: DatabaseLifecycleFeatureConfiguration.LicenseModel;

  "feature": string;
}

export namespace DatabaseLifecycleFeatureConfiguration {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: DatabaseLifecycleFeatureConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseFeatureConfiguration.getJsonObj(
            obj
          ) as DatabaseLifecycleFeatureConfiguration)),
      ...{}
    };

    return jsonObj;
  }
  export const feature = "DB_LIFECYCLE_MANAGEMENT";
  export function getDeserializedJsonObj(
    obj: DatabaseLifecycleFeatureConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseFeatureConfiguration.getDeserializedJsonObj(
            obj
          ) as DatabaseLifecycleFeatureConfiguration)),
      ...{}
    };

    return jsonObj;
  }
}
