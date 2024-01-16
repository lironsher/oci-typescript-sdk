/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details used to register the peer database of a database already registered in Data Safe.
 */
export interface CreatePeerTargetDatabaseDetails {
  /**
   * The display name of the peer target database in Data Safe. The name is modifiable and does not need to be unique.
   */
  "displayName"?: string;
  /**
   * The description of the peer target database in Data Safe.
   */
  "description"?: string;
  /**
   * The OCID of the Data Guard Association resource in which the database being registered is considered as peer database to the primary database.
   */
  "dataguardAssociationId"?: string;
  "databaseDetails":
    | model.InstalledDatabaseDetails
    | model.AutonomousDatabaseDetails
    | model.DatabaseCloudServiceDetails;
  "tlsConfig"?: model.TlsConfig;
}

export namespace CreatePeerTargetDatabaseDetails {
  export function getJsonObj(obj: CreatePeerTargetDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseDetails": obj.databaseDetails
          ? model.DatabaseDetails.getJsonObj(obj.databaseDetails)
          : undefined,
        "tlsConfig": obj.tlsConfig ? model.TlsConfig.getJsonObj(obj.tlsConfig) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePeerTargetDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseDetails": obj.databaseDetails
          ? model.DatabaseDetails.getDeserializedJsonObj(obj.databaseDetails)
          : undefined,
        "tlsConfig": obj.tlsConfig
          ? model.TlsConfig.getDeserializedJsonObj(obj.tlsConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
