/**
 *
 *
 * OpenAPI spec version: 20240531
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

export interface CreateKnowledgeBaseResponse {
  /**
   * URL for the created knowledge base. The knowledge base OCID is generated after this request is sent.
   */
  "location": string;
  /**
   * Same as location.
   */
  "contentLocation": string;
  /**
   * For optimistic concurrency control. See {@code if-match}.
   *
   */
  "etag": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the asynchronous work request.
   * Use GetWorkRequest with this ID to track the status of the request.
   *
   */
  "opcWorkRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * The returned model.KnowledgeBase instance.
   */
  "knowledgeBase": model.KnowledgeBase;
}
