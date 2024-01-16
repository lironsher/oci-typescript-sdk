/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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

export interface UpdateIPSecConnectionTunnelDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The type of routing to use for this tunnel (BGP dynamic routing, static routing, or policy-based routing).
   *
   */
  "routing"?: UpdateIPSecConnectionTunnelDetails.Routing;
  /**
   * Internet Key Exchange protocol version.
   *
   */
  "ikeVersion"?: UpdateIPSecConnectionTunnelDetails.IkeVersion;
  "bgpSessionConfig"?: model.UpdateIPSecTunnelBgpSessionDetails;
  /**
   * Indicates whether the Oracle end of the IPSec connection is able to initiate starting up the IPSec tunnel.
   *
   */
  "oracleInitiation"?: UpdateIPSecConnectionTunnelDetails.OracleInitiation;
  /**
    * By default (the {@code AUTO} setting), IKE sends packets with a source and destination port set to 500,
* and when it detects that the port used to forward packets has changed (most likely because a NAT device
* is between the CPE device and the Oracle VPN headend) it will try to negotiate the use of NAT-T.
* <p>
The {@code ENABLED} option sets the IKE protocol to use port 4500 instead of 500 and forces encapsulating traffic with the ESP protocol inside UDP packets.
* <p>
The {@code DISABLED} option directs IKE to completely refuse to negotiate NAT-T
* even if it senses there may be a NAT device in use.
* 
    */
  "natTranslationEnabled"?: UpdateIPSecConnectionTunnelDetails.NatTranslationEnabled;
  "phaseOneConfig"?: model.PhaseOneConfigDetails;
  "phaseTwoConfig"?: model.PhaseTwoConfigDetails;
  "dpdConfig"?: model.DpdConfig;
  "encryptionDomainConfig"?: model.UpdateIPSecTunnelEncryptionDomainDetails;
}

export namespace UpdateIPSecConnectionTunnelDetails {
  export enum Routing {
    Bgp = "BGP",
    Static = "STATIC",
    Policy = "POLICY"
  }

  export enum IkeVersion {
    V1 = "V1",
    V2 = "V2"
  }

  export enum OracleInitiation {
    InitiatorOrResponder = "INITIATOR_OR_RESPONDER",
    ResponderOnly = "RESPONDER_ONLY"
  }

  export enum NatTranslationEnabled {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Auto = "AUTO"
  }

  export function getJsonObj(obj: UpdateIPSecConnectionTunnelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "bgpSessionConfig": obj.bgpSessionConfig
          ? model.UpdateIPSecTunnelBgpSessionDetails.getJsonObj(obj.bgpSessionConfig)
          : undefined,

        "phaseOneConfig": obj.phaseOneConfig
          ? model.PhaseOneConfigDetails.getJsonObj(obj.phaseOneConfig)
          : undefined,
        "phaseTwoConfig": obj.phaseTwoConfig
          ? model.PhaseTwoConfigDetails.getJsonObj(obj.phaseTwoConfig)
          : undefined,
        "dpdConfig": obj.dpdConfig ? model.DpdConfig.getJsonObj(obj.dpdConfig) : undefined,
        "encryptionDomainConfig": obj.encryptionDomainConfig
          ? model.UpdateIPSecTunnelEncryptionDomainDetails.getJsonObj(obj.encryptionDomainConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateIPSecConnectionTunnelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "bgpSessionConfig": obj.bgpSessionConfig
          ? model.UpdateIPSecTunnelBgpSessionDetails.getDeserializedJsonObj(obj.bgpSessionConfig)
          : undefined,

        "phaseOneConfig": obj.phaseOneConfig
          ? model.PhaseOneConfigDetails.getDeserializedJsonObj(obj.phaseOneConfig)
          : undefined,
        "phaseTwoConfig": obj.phaseTwoConfig
          ? model.PhaseTwoConfigDetails.getDeserializedJsonObj(obj.phaseTwoConfig)
          : undefined,
        "dpdConfig": obj.dpdConfig
          ? model.DpdConfig.getDeserializedJsonObj(obj.dpdConfig)
          : undefined,
        "encryptionDomainConfig": obj.encryptionDomainConfig
          ? model.UpdateIPSecTunnelEncryptionDomainDetails.getDeserializedJsonObj(
              obj.encryptionDomainConfig
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
