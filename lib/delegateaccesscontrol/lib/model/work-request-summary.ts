/**
 * Oracle Delegate Access Control API
 * Oracle Delegate Access Control allows ExaCC and ExaCS customers to delegate management of their Exadata resources operators outside their tenancies. 
With Delegate Access Control, Support Providers can deliver managed services using comprehensive and robust tooling built on the OCI platform. 
Customers maintain control over who has access to the delegated resources in their tenancy and what actions can be taken. 
Enterprises managing resources across multiple tenants can use Delegate Access Control to streamline management tasks.
Using logging service, customers can view a near real-time audit report of all actions performed by a Service Provider operator. 

 * OpenAPI spec version: 20230801
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
 * A summary of the status of a work request.
 */
export interface WorkRequestSummary {
  /**
   * Type of the work request
   */
  "operationType": model.OperationType;
  /**
   * Status of current work request.
   */
  "status": model.OperationStatus;
  /**
   * The id of the work request.
   */
  "id": string;
  /**
   * The ocid of the compartment that contains the work request. Work requests should be scoped to
   * the same compartment as the resource the work request affects. If the work request affects multiple resources,
   * and those resources are not in the same compartment, it is up to the service team to pick the primary
   * resource whose compartment should be used
   *
   */
  "compartmentId": string;
  /**
   * The resources affected by this work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Percentage of the request completed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time the request was created, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the request was started, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339),
   * section 14.29.
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the object was finished, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequestSummary {
  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
