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
 * Approval info for initial access or extension of a Delegated Resource Access Request
 *
 */
export interface DelegatedResourceAccessRequestApprovalDetails {
  /**
   * Indicated whether the request is approved or rejected.
   */
  "approvalAction"?: DelegatedResourceAccessRequestApprovalDetails.ApprovalAction;
  /**
   * Access start time that is actually approved by the customer in [RFC 3339](https://tools.ietf.org/html/rfc3339)timestamp format, e.g. '2020-05-22T21:10:29.600Z'.
   */
  "timeApprovedForAccess"?: Date;
  /**
   * approval type, initial or extension
   */
  "approvalType"?: DelegatedResourceAccessRequestApprovalDetails.ApprovalType;
  /**
   * Comment specified by the approver of the request.
   */
  "approverComment": string;
  /**
   * User ID of the approver.
   */
  "approverId"?: string;
  /**
   * Additional message specified by the approver of the request.
   */
  "approverAdditionalMessage"?: string;
}

export namespace DelegatedResourceAccessRequestApprovalDetails {
  export enum ApprovalAction {
    Approve = "APPROVE",
    Reject = "REJECT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ApprovalType {
    Initial = "INITIAL",
    Extension = "EXTENSION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DelegatedResourceAccessRequestApprovalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: DelegatedResourceAccessRequestApprovalDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
