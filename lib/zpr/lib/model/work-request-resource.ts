/**
 * Zero Trust Packet Routing Control Plane API
 * Use the Zero Trust Packet Routing Control Plane API to manage ZPR configuration and policy. See the [Zero Trust Packet Routing](/iaas/Content/zero-trust-packet-routing/home.htm) documentation for more information.
 * OpenAPI spec version: 20240301
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
 * A resource created or operated on by a work request.
 */
export interface WorkRequestResource {
  /**
   * The resource type that the work request affects.
   */
  "entityType": string;
  /**
   * The way in which this resource is affected by the operation tracked in the work request.
   * A resource being created, updated, or deleted remains in the IN_PROGRESS state until
   * work is complete for that resource, at which point it transitions to CREATED, UPDATED,
   * or DELETED, respectively.
   *
   */
  "actionType": model.ActionType;
  /**
   * An [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) or other unique identifier for the resource.
   */
  "identifier": string;
  /**
   * The URI path that you can use for a GET request to access the resource metadata.
   */
  "entityUri"?: string;
  /**
   * Additional information that helps to explain the resource.
   */
  "metadata"?: { [key: string]: string };
}

export namespace WorkRequestResource {
  export function getJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
