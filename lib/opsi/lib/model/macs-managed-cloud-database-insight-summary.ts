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
 * Summary of a database insight resource.
 */
export interface MacsManagedCloudDatabaseInsightSummary extends model.DatabaseInsightSummary {
  /**
   * OCI database resource type
   */
  "databaseResourceType"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Management Agent
   */
  "managementAgentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VM Cluster or DB System ID, depending on which configuration the resource belongs to.
   */
  "parentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the root resource for a composite target. e.g. for ExaCS members the rootId will be the OCID of the Exadata Infrastructure resource.
   */
  "rootId"?: string;

  "entitySource": string;
}

export namespace MacsManagedCloudDatabaseInsightSummary {
  export function getJsonObj(
    obj: MacsManagedCloudDatabaseInsightSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseInsightSummary.getJsonObj(obj) as MacsManagedCloudDatabaseInsightSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const entitySource = "MACS_MANAGED_CLOUD_DATABASE";
  export function getDeserializedJsonObj(
    obj: MacsManagedCloudDatabaseInsightSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseInsightSummary.getDeserializedJsonObj(
            obj
          ) as MacsManagedCloudDatabaseInsightSummary)),
      ...{}
    };

    return jsonObj;
  }
}
