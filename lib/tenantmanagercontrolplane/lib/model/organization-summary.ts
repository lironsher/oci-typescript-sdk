/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20200801
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
 * An organization entity.
 */
export interface OrganizationSummary {
  /**
   * OCID of the organization.
   */
  "id": string;
  /**
   * A display name for the organization. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * OCID of the compartment containing the organization. Always a tenancy OCID.
   */
  "compartmentId": string;
  /**
   * The name of the tenancy that is the organization parent.
   */
  "parentName"?: string;
  /**
   * OCID of the default Universal Credits Model subscription. Any tenancy joining the organization will automatically get assigned this subscription, if a subscription is not explictly assigned.
   */
  "defaultUcmSubscriptionId": string;
  /**
   * Lifecycle state of the organization.
   */
  "lifecycleState": string;
  /**
   * Date and time when the organization was created.
   */
  "timeCreated": Date;
  /**
   * Date and time when the organization was last updated.
   */
  "timeUpdated"?: Date;
}

export namespace OrganizationSummary {
  export function getJsonObj(obj: OrganizationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OrganizationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
