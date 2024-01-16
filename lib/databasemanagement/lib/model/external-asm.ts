/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

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
 * The details of an external ASM.
 */
export interface ExternalAsm {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external ASM.
   */
  "id": string;
  /**
   * The user-friendly name for the external ASM. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The name of the external ASM.
   */
  "componentName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external DB system that the ASM is a part of.
   */
  "externalDbSystemId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external connector.
   */
  "externalConnectorId"?: string;
  /**
   * The directory in which ASM is installed. This is the same directory in which Oracle Grid Infrastructure is installed.
   */
  "gridHome"?: string;
  /**
   * Indicates whether the ASM is a cluster ASM or not.
   */
  "isCluster"?: boolean;
  /**
   * Indicates whether Oracle Flex ASM is enabled or not.
   */
  "isFlexEnabled"?: boolean;
  /**
   * The current lifecycle state of the external ASM.
   */
  "lifecycleState": ExternalAsm.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The list of databases that are serviced by the ASM.
   */
  "servicedDatabases"?: Array<model.ExternalAsmServicedDatabase>;
  /**
   * The additional details of the external ASM defined in {@code {\"key\": \"value\"}} format.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "additionalDetails"?: { [key: string]: string };
  /**
   * The date and time the external ASM was created.
   */
  "timeCreated": Date;
  /**
   * The date and time the external ASM was last updated.
   */
  "timeUpdated": Date;
  /**
   * The ASM version.
   */
  "version"?: string;
}

export namespace ExternalAsm {
  export enum LifecycleState {
    Creating = "CREATING",
    NotConnected = "NOT_CONNECTED",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExternalAsm): object {
    const jsonObj = {
      ...obj,
      ...{
        "servicedDatabases": obj.servicedDatabases
          ? obj.servicedDatabases.map(item => {
              return model.ExternalAsmServicedDatabase.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalAsm): object {
    const jsonObj = {
      ...obj,
      ...{
        "servicedDatabases": obj.servicedDatabases
          ? obj.servicedDatabases.map(item => {
              return model.ExternalAsmServicedDatabase.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
