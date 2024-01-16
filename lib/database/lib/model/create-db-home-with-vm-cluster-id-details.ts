/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Note that a valid {@code vmClusterId} value must be supplied for the {@code CreateDbHomeWithVmClusterId} API operation to successfully complete.
 *
 */
export interface CreateDbHomeWithVmClusterIdDetails extends model.CreateDbHomeBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VM cluster.
   */
  "vmClusterId": string;
  /**
    * A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
* 
    */
  "dbVersion"?: string;
  "database"?: model.CreateDatabaseDetails;

  "source": string;
}

export namespace CreateDbHomeWithVmClusterIdDetails {
  export function getJsonObj(
    obj: CreateDbHomeWithVmClusterIdDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDbHomeBase.getJsonObj(obj) as CreateDbHomeWithVmClusterIdDetails)),
      ...{
        "database": obj.database ? model.CreateDatabaseDetails.getJsonObj(obj.database) : undefined
      }
    };

    return jsonObj;
  }
  export const source = "VM_CLUSTER_NEW";
  export function getDeserializedJsonObj(
    obj: CreateDbHomeWithVmClusterIdDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDbHomeBase.getDeserializedJsonObj(
            obj
          ) as CreateDbHomeWithVmClusterIdDetails)),
      ...{
        "database": obj.database
          ? model.CreateDatabaseDetails.getDeserializedJsonObj(obj.database)
          : undefined
      }
    };

    return jsonObj;
  }
}
