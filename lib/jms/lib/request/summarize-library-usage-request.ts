/**
 *
 *
 * OpenAPI spec version: 20210610
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/jms/SummarizeLibraryUsage.ts.html |here} to see how to use SummarizeLibraryUsageRequest.
 */
export interface SummarizeLibraryUsageRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Fleet.
   */
  "fleetId": string;
  /**
   * The Java Server instance key.
   *
   */
  "serverInstanceKey"?: string;
  /**
   * The Fleet-unique identifier of the managed instance.
   */
  "managedInstanceId"?: string;
  /**
   * The deployed application key.
   *
   */
  "applicationKey"?: string;
  /**
   * The library key.
   *
   */
  "libraryKey"?: string;
  /**
   * Filter the list with library name contains the given value.
   *
   */
  "libraryNameContains"?: string;
  /**
   * The library name.
   *
   */
  "libraryName"?: string;
  /**
   * Total Common Vulnerability Scoring System (CVSS) Score reported by the analysis.
   */
  "cvssScoreGreaterThan"?: number;
  /**
   * Total Common Vulnerability Scoring System (CVSS) Score reported by the analysis.
   */
  "cvssScoreLessThan"?: number;
  /**
   * The start of the time period during which resources are searched (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeStart"?: Date;
  /**
   * The end of the time period during which resources are searched (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeEnd"?: Date;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. The token is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort libraries.  Only one sort order may be provided.
   * If no value is specified _timeLastSeen_ is default.
   *
   */
  "sortBy"?: model.LibrarySortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
