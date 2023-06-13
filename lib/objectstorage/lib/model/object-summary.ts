/**
 * Object Storage Service API
 * Use Object Storage and Archive Storage APIs to manage buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
 * To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,
 * talk to an administrator. If you are an administrator who needs to write policies to give users access, see
 * [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
 *
 */
export interface ObjectSummary {
  /**
   * The name of the object. Avoid entering confidential information.
   * Example: test/object1.log
   *
   */
  "name": string;
  /**
   * Size of the object in bytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "size"?: number;
  /**
   * Base64-encoded MD5 hash of the object data.
   */
  "md5"?: string;
  /**
   * The date and time the object was created, as described in [RFC 2616](https://tools.ietf.org/html/rfc2616#section-14.29).
   */
  "timeCreated"?: Date;
  /**
   * The current entity tag (ETag) for the object.
   */
  "etag"?: string;
  /**
   * The storage tier that the object is stored in.
   */
  "storageTier"?: model.StorageTier;
  /**
   * Archival state of an object. This field is set only for objects in Archive tier.
   */
  "archivalState"?: model.ArchivalState;
  /**
   * The date and time the object was modified, as described in [RFC 2616](https://tools.ietf.org/rfc/rfc2616), section 14.29.
   */
  "timeModified"?: Date;
}

export namespace ObjectSummary {
  export function getJsonObj(obj: ObjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ObjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
