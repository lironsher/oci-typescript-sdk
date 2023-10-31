/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Invoke Oracle function step details.
 *
 */
export interface InvokeFunctionStep extends model.DrPlanUserDefinedStep {
  /**
    * The OCID of function to be invoked.
* <p>
Example: `ocid1.fnfunc.oc1..uniqueID`
* 
    */
  "functionId": string;
  /**
    * The region in which the function is deployed.
* <p>
Example: `us-ashburn-1`
* 
    */
  "functionRegion": string;
  /**
    * The request body for the function.
* <p>
Example: `{ \"FnParam1\", \"FnParam2\" }`
* 
    */
  "requestBody"?: string;

  "stepType": string;
}

export namespace InvokeFunctionStep {
  export function getJsonObj(obj: InvokeFunctionStep, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrPlanUserDefinedStep.getJsonObj(obj) as InvokeFunctionStep)),
      ...{}
    };

    return jsonObj;
  }
  export const stepType = "INVOKE_FUNCTION";
  export function getDeserializedJsonObj(
    obj: InvokeFunctionStep,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrPlanUserDefinedStep.getDeserializedJsonObj(obj) as InvokeFunctionStep)),
      ...{}
    };

    return jsonObj;
  }
}
