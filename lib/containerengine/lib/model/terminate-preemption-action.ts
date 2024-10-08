/**
 * Kubernetes Engine API
 * API for the Kubernetes Engine service (also known as the Container Engine for Kubernetes service). Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Kubernetes Engine](/iaas/Content/ContEng/Concepts/contengoverview.htm).

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
 * Terminates the preemptible instance when it is interrupted for eviction.
 */
export interface TerminatePreemptionAction extends model.PreemptionAction {
  /**
   * Whether to preserve the boot volume that was used to launch the preemptible instance when the instance is terminated. Defaults to false if not specified.
   *
   */
  "isPreserveBootVolume"?: boolean;

  "type": string;
}

export namespace TerminatePreemptionAction {
  export function getJsonObj(obj: TerminatePreemptionAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PreemptionAction.getJsonObj(obj) as TerminatePreemptionAction)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "TERMINATE";
  export function getDeserializedJsonObj(
    obj: TerminatePreemptionAction,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PreemptionAction.getDeserializedJsonObj(obj) as TerminatePreemptionAction)),
      ...{}
    };

    return jsonObj;
  }
}
