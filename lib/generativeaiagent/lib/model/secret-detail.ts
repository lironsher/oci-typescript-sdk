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
* **SecretDetail**
* <p>
The details of configured security configuration on OpenSearch.
* 
*/
export interface SecretDetail {
  "type": string;
}

export namespace SecretDetail {
  export function getJsonObj(obj: SecretDetail): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "IDCS_SECRET":
          return model.IdcsSecret.getJsonObj(<model.IdcsSecret>(<object>jsonObj), true);
        case "BASIC_AUTH_SECRET":
          return model.BasicAuthSecret.getJsonObj(<model.BasicAuthSecret>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecretDetail): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "IDCS_SECRET":
          return model.IdcsSecret.getDeserializedJsonObj(<model.IdcsSecret>(<object>jsonObj), true);
        case "BASIC_AUTH_SECRET":
          return model.BasicAuthSecret.getDeserializedJsonObj(
            <model.BasicAuthSecret>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
