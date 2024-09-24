/**
 * Generative AI Agents Client API
 * OCI Generative AI Agents is a fully managed service that combines the power of large language models (LLMs) with an intelligent retrieval system to create contextually relevant answers by searching your knowledge base, making your AI applications smart and efficient.

OCI Generative AI Agents supports several ways to onboard your data and then allows you and your customers to interact with your data using a chat interface or API.

Use the Generative AI Agents Client API to create and manage client chat sessions. A session represents an interactive conversation initiated by a user through an API to engage with an agent. It involves a series of exchanges where the user sends queries or prompts, and the agent responds with relevant information, actions, or assistance based on the user's input. The session persists for the duration of the interaction, maintaining context and continuity to provide coherent and meaningful responses throughout the conversation.

For creating and managing agents, knowledge bases, data sources, endpoints, and data ingestion jobs see the [Generative AI Agents Management API](#/EN/generative-ai-agents/latest/).

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

import * as ChatResponse from "./chat-response";
export import ChatResponse = ChatResponse.ChatResponse;
import * as CreateSessionResponse from "./create-session-response";
export import CreateSessionResponse = CreateSessionResponse.CreateSessionResponse;
import * as DeleteSessionResponse from "./delete-session-response";
export import DeleteSessionResponse = DeleteSessionResponse.DeleteSessionResponse;
import * as GetSessionResponse from "./get-session-response";
export import GetSessionResponse = GetSessionResponse.GetSessionResponse;
import * as UpdateSessionResponse from "./update-session-response";
export import UpdateSessionResponse = UpdateSessionResponse.UpdateSessionResponse;
