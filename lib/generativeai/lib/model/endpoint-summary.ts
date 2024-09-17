/**
 * Generative AI Service Management API
 * OCI Generative AI is a fully managed service that provides a set of state-of-the-art, customizable large language models (LLMs) that cover a wide range of use cases for text generation, summarization, and text embeddings. 

Use the Generative AI service management API to create and manage [dedicated AI clusters](#/en/generative-ai/latest/DedicatedAiCluster/), [endpoints](#/en/generative-ai/latest/Endpoint/), [custom models](#/en/generative-ai/latest/Model/), and [work requests](#/en/generative-ai/latest/WorkRequest/) in the Generative AI service. For example, create a custom model by fine-tuning an out-of-the-box model using your own data, on a fine-tuning dedicated AI cluster. Then, create a hosting dedicated AI cluster with an endpoint to host your custom model. 

To access your custom model endpoints, or to try the out-of-the-box models to generate text, summarize, and create text embeddings see the [Generative AI Inference API](/iaas/api/#/en/generative-ai-inference/latest/).

To learn more about the service, see the [Generative AI documentation](/iaas/Content/generative-ai/home.htm).

 * OpenAPI spec version: 20231130
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
 * Summary information for an endpoint resource.
 */
export interface EndpointSummary {
  /**
   * An OCID that uniquely identifies this endpoint resource.
   */
  "id": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   */
  "displayName"?: string;
  /**
   * An optional description of the endpoint.
   */
  "description"?: string;
  /**
   * The OCID of the model that's used to create this endpoint.
   */
  "modelId": string;
  /**
   * The compartment OCID to create the endpoint in.
   */
  "compartmentId": string;
  /**
   * The OCID of the dedicated AI cluster on which a model will be deployed to.
   */
  "dedicatedAiClusterId": string;
  /**
   * The date and time that the endpoint was created in the format of an RFC3339 datetime string.
   */
  "timeCreated": Date;
  /**
   * The date and time the endpoint was updated in the format of n RFC3339 datetime string.
   */
  "timeUpdated"?: Date;
  /**
    * The current state of the endpoint.
* <p>
Allowed values are:
* - ACTIVE
* - CREATING
* - UPDATING
* - DELETING
* - DELETED
* - FAILED
* 
    */
  "lifecycleState": string;
  /**
   * A message describing the current state with detail that can provide actionable information.
   */
  "lifecycleDetails"?: string;
  "contentModerationConfig"?: model.ContentModerationConfig;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace EndpointSummary {
  export function getJsonObj(obj: EndpointSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "contentModerationConfig": obj.contentModerationConfig
          ? model.ContentModerationConfig.getJsonObj(obj.contentModerationConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EndpointSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "contentModerationConfig": obj.contentModerationConfig
          ? model.ContentModerationConfig.getDeserializedJsonObj(obj.contentModerationConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
