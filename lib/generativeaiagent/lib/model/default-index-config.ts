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
* **DefaultIndexConfig**
* <p>
The default index is service managed vector store on behalf of the customer.
* 
*/
export interface DefaultIndexConfig extends model.IndexConfig {
  /**
   * Whether to enable Hybrid search in service managed OpenSearch.
   */
  "shouldEnableHybridSearch"?: boolean;

  "indexConfigType": string;
}

export namespace DefaultIndexConfig {
  export function getJsonObj(obj: DefaultIndexConfig, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.IndexConfig.getJsonObj(obj) as DefaultIndexConfig)),
      ...{}
    };

    return jsonObj;
  }
  export const indexConfigType = "DEFAULT_INDEX_CONFIG";
  export function getDeserializedJsonObj(
    obj: DefaultIndexConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.IndexConfig.getDeserializedJsonObj(obj) as DefaultIndexConfig)),
      ...{}
    };

    return jsonObj;
  }
}
