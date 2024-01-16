/**
 * Oracle Integration API
 * Oracle Integration API.
 * OpenAPI spec version: 20190131
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
 * Description of Integration Instance.
 */
export interface IntegrationInstance {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Integration Instance Identifier, can be renamed.
   */
  "displayName": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * Standard or Enterprise type,
   * Oracle Integration Generation 2 uses ENTERPRISE and STANDARD,
   * Oracle Integration 3 uses ENTERPRISEX and STANDARDX
   *
   */
  "integrationInstanceType": IntegrationInstance.IntegrationInstanceType;
  /**
   * The time the the IntegrationInstance was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the IntegrationInstance was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the integration instance.
   */
  "lifecycleState"?: IntegrationInstance.LifecycleState;
  /**
   * An message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "stateMessage"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name,
   * type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to
   * namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Bring your own license.
   */
  "isByol": boolean;
  /**
   * The Integration Instance URL.
   */
  "instanceUrl": string;
  /**
   * The number of configured message packs (if any) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "messagePacks": number;
  /**
   * The file server is enabled or not.
   */
  "isFileServerEnabled"?: boolean;
  /**
   * VisualBuilder is enabled or not.
   */
  "isVisualBuilderEnabled"?: boolean;
  "customEndpoint"?: model.CustomEndpointDetails;
  /**
   * A list of alternate custom endpoints used for the integration instance URL.
   *
   */
  "alternateCustomEndpoints"?: Array<model.CustomEndpointDetails>;
  /**
   * The entitlement used for billing purposes.
   */
  "consumptionModel"?: IntegrationInstance.ConsumptionModel;
  "networkEndpointDetails"?: model.PublicEndpointDetails;
  "idcsInfo"?: model.IdcsInfoDetails;
  /**
   * A list of associated attachments to other services
   *
   */
  "attachments"?: Array<model.AttachmentDetails>;
  /**
   * Shape
   */
  "shape"?: IntegrationInstance.Shape;
  "privateEndpointOutboundConnection"?:
    | model.PrivateEndpointOutboundConnection
    | model.NoneOutboundConnection;
}

export namespace IntegrationInstance {
  export enum IntegrationInstanceType {
    Standard = "STANDARD",
    Enterprise = "ENTERPRISE",
    Standardx = "STANDARDX",
    Enterprisex = "ENTERPRISEX",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ConsumptionModel {
    Ucm = "UCM",
    Gov = "GOV",
    Oic4Saas = "OIC4SAAS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Shape {
    Development = "DEVELOPMENT",
    Production = "PRODUCTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IntegrationInstance): object {
    const jsonObj = {
      ...obj,
      ...{
        "customEndpoint": obj.customEndpoint
          ? model.CustomEndpointDetails.getJsonObj(obj.customEndpoint)
          : undefined,
        "alternateCustomEndpoints": obj.alternateCustomEndpoints
          ? obj.alternateCustomEndpoints.map(item => {
              return model.CustomEndpointDetails.getJsonObj(item);
            })
          : undefined,

        "networkEndpointDetails": obj.networkEndpointDetails
          ? model.NetworkEndpointDetails.getJsonObj(obj.networkEndpointDetails)
          : undefined,
        "idcsInfo": obj.idcsInfo ? model.IdcsInfoDetails.getJsonObj(obj.idcsInfo) : undefined,
        "attachments": obj.attachments
          ? obj.attachments.map(item => {
              return model.AttachmentDetails.getJsonObj(item);
            })
          : undefined,

        "privateEndpointOutboundConnection": obj.privateEndpointOutboundConnection
          ? model.OutboundConnection.getJsonObj(obj.privateEndpointOutboundConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IntegrationInstance): object {
    const jsonObj = {
      ...obj,
      ...{
        "customEndpoint": obj.customEndpoint
          ? model.CustomEndpointDetails.getDeserializedJsonObj(obj.customEndpoint)
          : undefined,
        "alternateCustomEndpoints": obj.alternateCustomEndpoints
          ? obj.alternateCustomEndpoints.map(item => {
              return model.CustomEndpointDetails.getDeserializedJsonObj(item);
            })
          : undefined,

        "networkEndpointDetails": obj.networkEndpointDetails
          ? model.NetworkEndpointDetails.getDeserializedJsonObj(obj.networkEndpointDetails)
          : undefined,
        "idcsInfo": obj.idcsInfo
          ? model.IdcsInfoDetails.getDeserializedJsonObj(obj.idcsInfo)
          : undefined,
        "attachments": obj.attachments
          ? obj.attachments.map(item => {
              return model.AttachmentDetails.getDeserializedJsonObj(item);
            })
          : undefined,

        "privateEndpointOutboundConnection": obj.privateEndpointOutboundConnection
          ? model.OutboundConnection.getDeserializedJsonObj(obj.privateEndpointOutboundConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
