/**
 *
 *
 * OpenAPI spec version: 20171215
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/filestorage/ListExportSets.ts.html |here} to see how to use ListExportSetsRequest.
 */
export interface ListExportSetsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
 * The name of the availability domain.
* <p>
Example: {@code Uocm:PHX-AD-1}
* 
 */
  "availabilityDomain": string;
  /**
 * For list pagination. The maximum number of results per page,
* or items to return in a paginated \"List\" call.
* 1 is the minimum, 4096 is the maximum.
* <p>
For important details about how pagination works,
* see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: {@code 500}
* 
 */
  "limit"?: number;
  /**
 * For list pagination. The value of the {@code opc-next-page} response
* header from the previous \"List\" call.
* <p>
For important details about how pagination works,
* see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* 
 */
  "page"?: string;
  /**
 * A user-friendly name. It does not have to be unique, and it is changeable.
* <p>
Example: {@code My resource}
* 
 */
  "displayName"?: string;
  /**
   * Filter results by the specified lifecycle state. Must be a valid
   * state for the resource type.
   *
   */
  "lifecycleState"?: ListExportSetsRequest.LifecycleState;
  /**
   * Filter results by [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm). Must be an OCID of the correct type for
   * the resouce type.
   *
   */
  "id"?: string;
  /**
   * The field to sort by. You can provide either value, but not both.
   * By default, when you sort by time created, results are shown
   * in descending order. When you sort by display name, results are
   * shown in ascending order.
   *
   */
  "sortBy"?: ListExportSetsRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc', where 'asc' is
   * ascending and 'desc' is descending. The default order is 'desc'
   * except for numeric values.
   *
   */
  "sortOrder"?: ListExportSetsRequest.SortOrder;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListExportSetsRequest {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
