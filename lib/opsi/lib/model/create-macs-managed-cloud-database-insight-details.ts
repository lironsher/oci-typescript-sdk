/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * The information about database to be analyzed.
 */
export interface CreateMacsManagedCloudDatabaseInsightDetails
  extends model.CreateDatabaseInsightDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Management Agent
   */
  "managementAgentId": string;
  "connectionDetails": model.ConnectionDetails;
  "connectionCredentialDetails":
    | model.CredentialsBySource
    | model.CredentialByVault
    | model.CredentialByIam;
  /**
   * OCI database resource type
   */
  "databaseResourceType": string;
  /**
   * Database Deployment Type (EXACS will be supported in the future)
   */
  "deploymentType": CreateMacsManagedCloudDatabaseInsightDetails.DeploymentType;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "entitySource": string;
}

export namespace CreateMacsManagedCloudDatabaseInsightDetails {
  export enum DeploymentType {
    VirtualMachine = "VIRTUAL_MACHINE",
    BareMetal = "BARE_METAL",
    Exacc = "EXACC",
    Exacs = "EXACS"
  }

  export function getJsonObj(
    obj: CreateMacsManagedCloudDatabaseInsightDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDatabaseInsightDetails.getJsonObj(
            obj
          ) as CreateMacsManagedCloudDatabaseInsightDetails)),
      ...{
        "connectionDetails": obj.connectionDetails
          ? model.ConnectionDetails.getJsonObj(obj.connectionDetails)
          : undefined,
        "connectionCredentialDetails": obj.connectionCredentialDetails
          ? model.CredentialDetails.getJsonObj(obj.connectionCredentialDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const entitySource = "MACS_MANAGED_CLOUD_DATABASE";
  export function getDeserializedJsonObj(
    obj: CreateMacsManagedCloudDatabaseInsightDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDatabaseInsightDetails.getDeserializedJsonObj(
            obj
          ) as CreateMacsManagedCloudDatabaseInsightDetails)),
      ...{
        "connectionDetails": obj.connectionDetails
          ? model.ConnectionDetails.getDeserializedJsonObj(obj.connectionDetails)
          : undefined,
        "connectionCredentialDetails": obj.connectionCredentialDetails
          ? model.CredentialDetails.getDeserializedJsonObj(obj.connectionCredentialDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
