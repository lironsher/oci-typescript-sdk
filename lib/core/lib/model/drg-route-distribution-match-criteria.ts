/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The match criteria in a route distribution statement. The match criteria outlines which routes
 * should be imported or exported.
 *
 */
export interface DrgRouteDistributionMatchCriteria {
  "matchType": string;
}

export namespace DrgRouteDistributionMatchCriteria {
  export function getJsonObj(obj: DrgRouteDistributionMatchCriteria): object {
    const jsonObj = { ...obj, ...{} };

    if ("matchType" in obj && obj.matchType) {
      switch (obj.matchType) {
        case "DRG_ATTACHMENT_ID":
          return model.DrgAttachmentIdDrgRouteDistributionMatchCriteria.getJsonObj(
            <model.DrgAttachmentIdDrgRouteDistributionMatchCriteria>(<object>jsonObj),
            true
          );
        case "DRG_ATTACHMENT_TYPE":
          return model.DrgAttachmentTypeDrgRouteDistributionMatchCriteria.getJsonObj(
            <model.DrgAttachmentTypeDrgRouteDistributionMatchCriteria>(<object>jsonObj),
            true
          );
        case "MATCH_ALL":
          return model.DrgAttachmentMatchAllDrgRouteDistributionMatchCriteria.getJsonObj(
            <model.DrgAttachmentMatchAllDrgRouteDistributionMatchCriteria>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.matchType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrgRouteDistributionMatchCriteria): object {
    const jsonObj = { ...obj, ...{} };

    if ("matchType" in obj && obj.matchType) {
      switch (obj.matchType) {
        case "DRG_ATTACHMENT_ID":
          return model.DrgAttachmentIdDrgRouteDistributionMatchCriteria.getDeserializedJsonObj(
            <model.DrgAttachmentIdDrgRouteDistributionMatchCriteria>(<object>jsonObj),
            true
          );
        case "DRG_ATTACHMENT_TYPE":
          return model.DrgAttachmentTypeDrgRouteDistributionMatchCriteria.getDeserializedJsonObj(
            <model.DrgAttachmentTypeDrgRouteDistributionMatchCriteria>(<object>jsonObj),
            true
          );
        case "MATCH_ALL":
          return model.DrgAttachmentMatchAllDrgRouteDistributionMatchCriteria.getDeserializedJsonObj(
            <model.DrgAttachmentMatchAllDrgRouteDistributionMatchCriteria>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.matchType);
      }
    }
    return jsonObj;
  }
}
