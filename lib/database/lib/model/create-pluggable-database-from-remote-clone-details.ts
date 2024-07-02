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
 * Specifies the creation type Remote Clone.
 * Additional input 'dblinkUsername{@code  and }dblinkUserPassword can be provided for RemoteClone/Create RefreshableClone Operation.
 * If not provided, Backend will create a temporary user to perform RemoteClone operation. It is a required input parameter in case of creating Refreshable Clone PDB.
 *
 */
export interface CreatePluggableDatabaseFromRemoteCloneDetails
  extends model.CreatePluggableDatabaseCreationTypeDetails {
  /**
   * The name of the DB link user.
   */
  "dblinkUsername"?: string;
  /**
   * The DB link user password.
   */
  "dblinkUserPassword"?: string;
  /**
   * The OCID of the Source Pluggable Database.
   */
  "sourcePluggableDatabaseId": string;
  /**
   * The DB system administrator password of the source Container Database.
   */
  "sourceContainerDatabaseAdminPassword": string;
  "refreshableCloneDetails"?: model.CreatePluggableDatabaseRefreshableCloneDetails;
  /**
   * True if Pluggable Database needs to be thin cloned and false if Pluggable Database needs to be thick cloned.
   */
  "isThinClone"?: boolean;

  "creationType": string;
}

export namespace CreatePluggableDatabaseFromRemoteCloneDetails {
  export function getJsonObj(
    obj: CreatePluggableDatabaseFromRemoteCloneDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreatePluggableDatabaseCreationTypeDetails.getJsonObj(
            obj
          ) as CreatePluggableDatabaseFromRemoteCloneDetails)),
      ...{
        "refreshableCloneDetails": obj.refreshableCloneDetails
          ? model.CreatePluggableDatabaseRefreshableCloneDetails.getJsonObj(
              obj.refreshableCloneDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export const creationType = "REMOTE_CLONE_PDB";
  export function getDeserializedJsonObj(
    obj: CreatePluggableDatabaseFromRemoteCloneDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreatePluggableDatabaseCreationTypeDetails.getDeserializedJsonObj(
            obj
          ) as CreatePluggableDatabaseFromRemoteCloneDetails)),
      ...{
        "refreshableCloneDetails": obj.refreshableCloneDetails
          ? model.CreatePluggableDatabaseRefreshableCloneDetails.getDeserializedJsonObj(
              obj.refreshableCloneDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
