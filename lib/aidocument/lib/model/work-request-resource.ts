/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
 *
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
 * A resource created, or operated on, by a work request.
 */
export interface WorkRequestResource {
  /**
   * The resource type the work request affects.
   */
  "entityType": string;
  /**
   * The way in which this resource is affected by the work tracked in the work request.
   * A resource being created, updated, or deleted remains in the IN_PROGRESS state until
   * the work is complete for. At that point, it transitions to CREATED, UPDATED,
   * or DELETED, as appropriate.
   *
   */
  "actionType": model.ActionType;
  /**
   * The identifier of the resource the work request affects.
   */
  "identifier": string;
  /**
   * The URI path that the user can do a GET on to access the resource metadata.
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
