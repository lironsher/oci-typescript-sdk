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
export interface EnablePeComanagedDatabaseInsightDetails
  extends model.EnableDatabaseInsightDetails {
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Private service accessed database.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the OPSI private endpoint
   */
  "opsiPrivateEndpointId": string;
  /**
   * Database service name used for connection requests.
   */
  "serviceName": string;
  "credentialDetails": model.CredentialsBySource | model.CredentialByVault;
  "connectionDetails"?: model.PeComanagedDatabaseConnectionDetails;
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

  "entitySource": string;
}

export namespace EnablePeComanagedDatabaseInsightDetails {
  export function getJsonObj(
    obj: EnablePeComanagedDatabaseInsightDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.EnableDatabaseInsightDetails.getJsonObj(
            obj
          ) as EnablePeComanagedDatabaseInsightDetails)),
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.CredentialDetails.getJsonObj(obj.credentialDetails)
          : undefined,
        "connectionDetails": obj.connectionDetails
          ? model.PeComanagedDatabaseConnectionDetails.getJsonObj(obj.connectionDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const entitySource = "PE_COMANAGED_DATABASE";
  export function getDeserializedJsonObj(
    obj: EnablePeComanagedDatabaseInsightDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.EnableDatabaseInsightDetails.getDeserializedJsonObj(
            obj
          ) as EnablePeComanagedDatabaseInsightDetails)),
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.CredentialDetails.getDeserializedJsonObj(obj.credentialDetails)
          : undefined,
        "connectionDetails": obj.connectionDetails
          ? model.PeComanagedDatabaseConnectionDetails.getDeserializedJsonObj(obj.connectionDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
