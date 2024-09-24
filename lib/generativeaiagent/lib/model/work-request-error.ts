/**
 * Generative AI Agents Management API
 * **Generative AI Agents API**


OCI Generative AI Agents is a fully managed service that combines the power of large language models (LLMs) with an intelligent retrieval system to create contextually relevant answers by searching your knowledge base, making your AI applications smart and efficient.

OCI Generative AI Agents supports several ways to onboard your data and then allows you and your customers to interact with your data using a chat interface or API.

Use the Generative AI Agents API to create and manage agents, knowledge bases, data sources, endpoints, data ingestion jobs, and work requests.

For creating and managing client chat sessions see the [Generative AI Agents Client API](#/EN/generative-ai-agents-client/latest/).

To learn more about the service, see the [Generative AI Agents documentation](/iaas/Content/generative-ai-agents/home.htm).

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

/**
* **WorkRequestError**
* <p>
An error encountered while performing an operation that is tracked by a work request.
* 
*/
export interface WorkRequestError {
  /**
   * A machine-usable code for the error that occurred. For a list of error codes, see
   * [API Errors](https://docs.cloud.oracle.com/iaas/Content/API/References/apierrors.htm).
   *
   */
  "code": string;
  /**
   * A human-readable error message.
   */
  "message": string;
  /**
   * The date and time the error occurred, in the format defined by
   * [RFC 3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timestamp": Date;
}

export namespace WorkRequestError {
  export function getJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
