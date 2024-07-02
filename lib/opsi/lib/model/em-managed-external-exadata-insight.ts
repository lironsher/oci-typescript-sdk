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
 * EM-managed Exadata insight resource.
 */
export interface EmManagedExternalExadataInsight extends model.ExadataInsight {
  /**
   * Enterprise Manager Unique Identifier
   */
  "enterpriseManagerIdentifier": string;
  /**
   * Enterprise Manager Entity Name
   */
  "enterpriseManagerEntityName": string;
  /**
   * Enterprise Manager Entity Type
   */
  "enterpriseManagerEntityType": string;
  /**
   * Enterprise Manager Entity Unique Identifier
   */
  "enterpriseManagerEntityIdentifier": string;
  /**
   * Enterprise Manager Entity Display Name
   */
  "enterpriseManagerEntityDisplayName"?: string;
  /**
   * OPSI Enterprise Manager Bridge OCID
   */
  "enterpriseManagerBridgeId": string;
  /**
   * Set to true to enable automatic enablement and disablement of related targets from Enterprise Manager. New resources (e.g. Database Insights) will be placed in the same compartment as the related Exadata Insight.
   */
  "isAutoSyncEnabled"?: boolean;

  "entitySource": string;
}

export namespace EmManagedExternalExadataInsight {
  export function getJsonObj(
    obj: EmManagedExternalExadataInsight,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExadataInsight.getJsonObj(obj) as EmManagedExternalExadataInsight)),
      ...{}
    };

    return jsonObj;
  }
  export const entitySource = "EM_MANAGED_EXTERNAL_EXADATA";
  export function getDeserializedJsonObj(
    obj: EmManagedExternalExadataInsight,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExadataInsight.getDeserializedJsonObj(obj) as EmManagedExternalExadataInsight)),
      ...{}
    };

    return jsonObj;
  }
}
