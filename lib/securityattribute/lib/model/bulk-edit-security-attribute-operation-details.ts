/**
 * Security Attribute API
 * Use the Security Attributes API to manage security attributes and security attribute namespaces. For more information, see the documentation for [Security Attributes](/iaas/Content/zero-trust-packet-routing/managing-security-attributes.htm) and [Security Attribute Nampespaces](/iaas/Content/zero-trust-packet-routing/managing-security-attribute-namespaces.htm).
 * OpenAPI spec version: 20240815
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

export interface BulkEditSecurityAttributeOperationDetails {
  /**
   * An enum-like description of the type of operation.
   * <p>
   * {@code ADD_WHERE_ABSENT} adds a security attribute only if it does not already exist on the resource.
   * * {@code SET_WHERE_PRESENT} updates the value for a security attribute only if it is present on the resource.
   * * {@code ADD_OR_SET} combines the first two operations to add a security attribute if it does not already exist on the resource
   * or update the value if it is present on the resource.
   * * {@code REMOVE} removes the security attribute from the resource. It's removed from the resource regardless of the value.
   *
   */
  "operationType": BulkEditSecurityAttributeOperationDetails.OperationType;
  /**
   * Security attributes for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"oracle-zpr\": {\"td\": {\"value\": \"42\", \"mode\": \"audit\"}}}}
   *
   */
  "securityAttributes": { [key: string]: { [key: string]: any } };
}

export namespace BulkEditSecurityAttributeOperationDetails {
  export enum OperationType {
    AddWhereAbsent = "ADD_WHERE_ABSENT",
    SetWherePresent = "SET_WHERE_PRESENT",
    AddOrSet = "ADD_OR_SET",
    Remove = "REMOVE"
  }

  export function getJsonObj(obj: BulkEditSecurityAttributeOperationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BulkEditSecurityAttributeOperationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
