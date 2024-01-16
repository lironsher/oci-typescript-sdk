/**
 *
 *
 * OpenAPI spec version: 20180401
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/monitoring/ListAlarmsStatus.ts.html |here} to see how to use ListAlarmsStatusRequest.
 */
export interface ListAlarmsStatusRequest extends common.BaseRequest {
  /**
 * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the
* resources monitored by the metric that you are searching for. Use tenancyId to search in
* the root compartment.
* <p>
Example: {@code ocid1.compartment.oc1..exampleuniqueID}
* 
 */
  "compartmentId": string;
  /**
   * Customer part of the request identifier token. If you need to contact Oracle about a particular
   * request, please provide the complete request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * When true, returns resources from all compartments and subcompartments. The parameter can
   * only be set to true when compartmentId is the tenancy OCID (the tenancy is the root compartment).
   * A true value requires the user to have tenancy-level permissions. If this requirement is not met,
   * then the call is rejected. When false, returns resources from only the compartment specified in
   * compartmentId. Default is false.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * For list pagination. The value of the {@code opc-next-page} response header from the previous \"List\" call.
   * For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call.
* For important details about how pagination works, see
* [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Default: 1000
* <p>
Example: 500
* 
 */
  "limit"?: number;
  /**
   * A filter to return only resources that match the given display name exactly.
   * Use this filter to list an alarm by name. Alternatively, when you know the alarm OCID, use the GetAlarm operation.
   *
   */
  "displayName"?: string;
  /**
 * The field to use when sorting returned alarm definitions. Only one sorting level is provided.
* <p>
Example: {@code severity}
* 
 */
  "sortBy"?: ListAlarmsStatusRequest.SortBy;
  /**
 * The sort order to use when sorting returned alarm definitions. Ascending (ASC) or descending (DESC).
* <p>
Example: {@code ASC}
* 
 */
  "sortOrder"?: ListAlarmsStatusRequest.SortOrder;
  /**
 * A filter to return only the resource with the specified [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
* The resource must be monitored by the metric that you are searching for.
* <p>
Example: {@code ocid1.instance.oc1.phx.exampleuniqueID}
* 
 */
  "resourceId"?: string;
  /**
 * A filter to return only resources that match the given service name exactly.
* Use this filter to list all alarms containing metric streams that match the *exact* service-name dimension.
* <p>
Example: {@code logging-analytics}
* 
 */
  "serviceName"?: string;
  /**
 * A filter to return only resources that match the given entity [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) exactly.
* The resource (entity) must be monitored by the metric that you are searching for.
* <p>
Example: {@code ocid1.instance.oc1.phx.exampleuniqueID}
* 
 */
  "entityId"?: string;
  /**
 * A filter to return only metric streams that match the specified status.
* For example, the value \"FIRING\" returns only firing metric streams.
* <p>
Example: {@code FIRING}
* 
 */
  "status"?: ListAlarmsStatusRequest.Status;
}

export namespace ListAlarmsStatusRequest {
  export enum SortBy {
    DisplayName = "displayName",
    Severity = "severity"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum Status {
    Firing = "FIRING",
    Ok = "OK"
  }
}
