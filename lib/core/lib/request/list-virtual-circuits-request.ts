/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/core/ListVirtualCircuits.ts.html |here} to see how to use ListVirtualCircuitsRequest.
 */
export interface ListVirtualCircuitsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated
* \"List\" call. For important details about how pagination works, see
* [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: {@code 50}
* 
 */
  "limit"?: number;
  /**
   * For list pagination. The value of the {@code opc-next-page} response header from the previous \"List\"
   * call. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * A filter to return only resources that match the given display name exactly.
   *
   */
  "displayName"?: string;
  /**
   * The field to sort by. You can provide one sort order ({@code sortOrder}). Default order for
   * TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME
   * sort order is case sensitive.
   * <p>
   **Note:** In general, some \"List\" operations (for example, {@code ListInstances}) let you
   * optionally filter by availability domain if the scope of the resource type is within a
   * single availability domain. If you call one of these \"List\" operations without specifying
   * an availability domain, the resources are grouped by availability domain, then sorted.
   *
   */
  "sortBy"?: ListVirtualCircuitsRequest.SortBy;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}). The DISPLAYNAME sort order
   * is case sensitive.
   *
   */
  "sortOrder"?: ListVirtualCircuitsRequest.SortOrder;
  /**
   * A filter to return only resources that match the specified lifecycle
   * state. The value is case insensitive.
   *
   */
  "lifecycleState"?: string;
}

export namespace ListVirtualCircuitsRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
