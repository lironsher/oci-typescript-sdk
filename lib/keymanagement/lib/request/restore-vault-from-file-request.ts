/**
 *
 *
 * OpenAPI spec version: release
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
import stream = require("stream");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/keymanagement/RestoreVaultFromFile.ts.html |here} to see how to use RestoreVaultFromFileRequest.
 */
export interface RestoreVaultFromFileRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The content length of the body.
   */
  "contentLength"?: number;
  /**
   * The encrypted backup file to upload to restore the vault.
   */
  "restoreVaultFromFileDetails":
    | Uint8Array
    | Buffer
    | Blob
    | stream.Readable
    | ReadableStream
    | string;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a
   * resource, set the {@code if-match} parameter to the value of the etag from a
   * previous GET or POST response for that resource. The resource will be
   * updated or deleted only if the etag you provide matches the resource's
   * current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * The base64-encoded MD5 hash value of the body, as described in [RFC 2616](https://tools.ietf.org/rfc/rfc2616), section 14.15.
   * If the Content-MD5 header is present, Key Management performs an integrity check on the body of the HTTP request by computing the MD5
   * hash for the body and comparing it to the MD5 hash supplied in the header. If the two hashes don't match, the object is rejected and
   * a response with 400 Unmatched Content MD5 error is returned, along with the message: \"The computed MD5 of the request body (ACTUAL_MD5)
   * does not match the Content-MD5 header (HEADER_MD5).\"
   *
   */
  "contentMd5"?: string;
  /**
   * Unique identifier for the request. If provided, the returned request ID
   * will include this value. Otherwise, a random request ID will be
   * generated by the service.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case
   * of a timeout or server error without risk of executing that same action
   * again. Retry tokens expire after 24 hours, but can be invalidated
   * before then due to conflicting operations (e.g., if a resource has been
   * deleted and purged from the system, then a retry of the original
   * creation request may be rejected).
   *
   */
  "opcRetryToken"?: string;
}
