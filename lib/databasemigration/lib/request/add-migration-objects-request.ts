/**
 *
 *
 * OpenAPI spec version: 20230518
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasemigration/AddMigrationObjects.ts.html |here} to see how to use AddMigrationObjectsRequest.
 */
export interface AddMigrationObjectsRequest extends common.BaseRequest {
  /**
   * The OCID of the migration
   *
   */
  "migrationId": string;
  /**
   * Arrays of object.
   *
   */
  "addMigrationObjectsDetails":
    | model.MySqlMigrationObjectCollection
    | model.OracleMigrationObjectCollection;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call
   * for a resource, set the {@code if-match} parameter to the value of the
   * etag from a previous GET or POST response for that resource.
   * The resource will be updated or deleted only if the etag you
   * provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
}
