/**
 * Queue API
 * Use the Queue API to produce and consume messages, create queues, and manage related items. For more information, see [Queue](/iaas/Content/queue/overview.htm).
 * OpenAPI spec version: 20210201
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
 * A message consumed from a queue.
 */
export interface GetMessage {
  /**
   * The ID of the message. This ID is only used for tracing and debugging purposes and isn't used as a parameter in any request. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "id": number;
  /**
   * The content of the message.
   */
  "content": string;
  /**
   * A receipt is a base64urlencode opaque token, uniquely representing a message.
   * The receipt can be used to delete a message or update its visibility.
   *
   */
  "receipt": string;
  /**
   * The number of times that the message has been delivered to a consumer. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deliveryCount": number;
  /**
    * The time after which the message will be visible to other consumers, expressed in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: {@code 2018-04-20T00:00:07.405Z}
* 
    */
  "visibleAfter": Date;
  /**
    * The time after which the message will be automatically deleted, expressed in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: {@code 2018-04-20T00:00:07.405Z}
* 
    */
  "expireAfter": Date;
  "metadata"?: model.MessageMetadata;
}

export namespace GetMessage {
  export function getJsonObj(obj: GetMessage): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata ? model.MessageMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GetMessage): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? model.MessageMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
