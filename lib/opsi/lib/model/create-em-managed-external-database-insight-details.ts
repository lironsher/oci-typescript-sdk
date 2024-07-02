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
export interface CreateEmManagedExternalDatabaseInsightDetails
  extends model.CreateDatabaseInsightDetails {
  /**
   * Enterprise Manager Unique Identifier
   */
  "enterpriseManagerIdentifier": string;
  /**
   * OPSI Enterprise Manager Bridge OCID
   */
  "enterpriseManagerBridgeId": string;
  /**
   * Enterprise Manager Entity Unique Identifier
   */
  "enterpriseManagerEntityIdentifier": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Exadata insight.
   */
  "exadataInsightId"?: string;

  "entitySource": string;
}

export namespace CreateEmManagedExternalDatabaseInsightDetails {
  export function getJsonObj(
    obj: CreateEmManagedExternalDatabaseInsightDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDatabaseInsightDetails.getJsonObj(
            obj
          ) as CreateEmManagedExternalDatabaseInsightDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const entitySource = "EM_MANAGED_EXTERNAL_DATABASE";
  export function getDeserializedJsonObj(
    obj: CreateEmManagedExternalDatabaseInsightDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDatabaseInsightDetails.getDeserializedJsonObj(
            obj
          ) as CreateEmManagedExternalDatabaseInsightDetails)),
      ...{}
    };

    return jsonObj;
  }
}
