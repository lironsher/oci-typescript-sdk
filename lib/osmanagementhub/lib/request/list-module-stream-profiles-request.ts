/**
 *
 *
 * OpenAPI spec version: 20220901
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagementhub/ListModuleStreamProfiles.ts.html |here} to see how to use ListModuleStreamProfilesRequest.
 */
export interface ListModuleStreamProfilesRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the software source.
   */
  "softwareSourceId": string;
  /**
   * The name of a module. This parameter is required if a
   * streamName is specified.
   *
   */
  "moduleName"?: string;
  /**
   * The name of the module stream. This parameter is required if a profile name is specified.
   */
  "streamName"?: string;
  /**
   * The name of the entity to be queried.
   */
  "name"?: string;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: {@code 50}
* 
 */
  "limit"?: number;
  /**
 * For list pagination. The value of the {@code opc-next-page} response header from the previous \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: {@code 3}
* 
 */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for moduleName is ascending.
   *
   */
  "sortBy"?: ListModuleStreamProfilesRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
}

export namespace ListModuleStreamProfilesRequest {
  export enum SortBy {
    ModuleName = "moduleName"
  }
}
