/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The configuration for an Application channel.
 */
export interface ApplicationChannel extends model.Channel {
  /**
   * The URL to send response and error messages to.
   */
  "outboundUrl"?: string;
  /**
   * True if the user id in the AIC message should be treated as an authenticated user id.
   */
  "isAuthenticatedUserId": boolean;
  /**
   * The URL to use to send messages to this channel.
   * This will be generally be used to configure a webhook in a 3rd party messaging system to send messages to this channel.
   *
   */
  "webhookUrl": string;

  "type": string;
}

export namespace ApplicationChannel {
  export function getJsonObj(obj: ApplicationChannel, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Channel.getJsonObj(obj) as ApplicationChannel)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "APPLICATION";
  export function getDeserializedJsonObj(
    obj: ApplicationChannel,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Channel.getDeserializedJsonObj(obj) as ApplicationChannel)),
      ...{}
    };

    return jsonObj;
  }
}
