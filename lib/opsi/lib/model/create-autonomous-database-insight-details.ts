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
 * The information about database to be analyzed. When isAdvancedFeaturesEnabled is set to false, parameters connectionDetails, credentialDetails and opsiPrivateEndpoint are optional. Otherwise, connectionDetails and crendetialDetails are required to enable full OPSI service features. If the Autonomouse Database is configured with private, restricted or dedicated access, opsiPrivateEndpoint parameter is required.
 *
 */
export interface CreateAutonomousDatabaseInsightDetails extends model.CreateDatabaseInsightDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId": string;
  /**
   * OCI database resource type
   */
  "databaseResourceType": string;
  /**
   * Flag is to identify if advanced features for autonomous database is enabled or not
   */
  "isAdvancedFeaturesEnabled": boolean;
  "connectionDetails"?: model.ConnectionDetails;
  "credentialDetails"?: model.CredentialsBySource | model.CredentialByVault | model.CredentialByIam;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the OPSI private endpoint
   */
  "opsiPrivateEndpointId"?: string;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "entitySource": string;
}

export namespace CreateAutonomousDatabaseInsightDetails {
  export function getJsonObj(
    obj: CreateAutonomousDatabaseInsightDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDatabaseInsightDetails.getJsonObj(
            obj
          ) as CreateAutonomousDatabaseInsightDetails)),
      ...{
        "connectionDetails": obj.connectionDetails
          ? model.ConnectionDetails.getJsonObj(obj.connectionDetails)
          : undefined,
        "credentialDetails": obj.credentialDetails
          ? model.CredentialDetails.getJsonObj(obj.credentialDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const entitySource = "AUTONOMOUS_DATABASE";
  export function getDeserializedJsonObj(
    obj: CreateAutonomousDatabaseInsightDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDatabaseInsightDetails.getDeserializedJsonObj(
            obj
          ) as CreateAutonomousDatabaseInsightDetails)),
      ...{
        "connectionDetails": obj.connectionDetails
          ? model.ConnectionDetails.getDeserializedJsonObj(obj.connectionDetails)
          : undefined,
        "credentialDetails": obj.credentialDetails
          ? model.CredentialDetails.getDeserializedJsonObj(obj.credentialDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
