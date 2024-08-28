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
 * The details required to modify a Database Management features for an Oracle cloud database.
 */
export interface ModifyDatabaseManagementFeatureDetails {
  "featureDetails":
    | model.DatabaseDiagnosticsAndManagementFeatureDetails
    | model.DatabaseLifecycleManagementFeatureDetails
    | model.DatabaseSqlWatchFeatureDetails;
}

export namespace ModifyDatabaseManagementFeatureDetails {
  export function getJsonObj(obj: ModifyDatabaseManagementFeatureDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "featureDetails": obj.featureDetails
          ? model.DatabaseFeatureDetails.getJsonObj(obj.featureDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModifyDatabaseManagementFeatureDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "featureDetails": obj.featureDetails
          ? model.DatabaseFeatureDetails.getDeserializedJsonObj(obj.featureDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
