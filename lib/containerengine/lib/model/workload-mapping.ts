/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The properties that define an workloadMapping.
 */
export interface WorkloadMapping {
  /**
   * The ocid of the workloadMapping.
   */
  "id": string;
  /**
   * The OCID of the cluster.
   */
  "clusterId": string;
  /**
   * The namespace of the workloadMapping.
   */
  "namespace": string;
  /**
   * The OCID of the mapped customer tenancy.
   */
  "mappedTenancyId": string;
  /**
   * The OCID of the mapped customer compartment.
   */
  "mappedCompartmentId": string;
  /**
   * The time the cluster was created.
   */
  "timeCreated": Date;
  /**
   * The state of the workloadMapping.
   */
  "lifecycleState": model.WorkloadMappingLifecycleState;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace WorkloadMapping {
  export function getJsonObj(obj: WorkloadMapping): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkloadMapping): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
