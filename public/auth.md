# Auth.md Agent Registration

## Registration Instructions for AI Agents

This document describes how AI agents can register and interact with the portfolio of Alberto Mateo, a Frontend Developer specialized in JavaScript, TypeScript, and clean UI.

### Agent Registration Process

To access WebMCP tools and portfolio data, agents must register.

**Registration Endpoint (simulated):**
`https://amateo82.es/.well-known/oauth-authorization-server/register`

**Required Information:**
- **agent_name**: Unique identifier for your agent (e.g., "my-awesome-agent-v1")
- **capabilities**: List of requested capabilities (e.g., ["read_portfolio", "search_projects"])
- **public_key** (optional): Your agent's public key for JWT authentication

**Supported Identity Types:**
- `urn:ietf:params:oauth:client-credentials` (API Key)
- `urn:ietf:params:oauth:jwt-bearer` (JWT Token)

**Credential Types:**
- API Key (for testing)
- JWT (for production)

### Agent Capabilities

Registered agents can access the following capabilities:

1. **Get Portfolio Information**
   - Retrieve developer biography, skills, work experience, and education
   - Query: `get_portfolio_info`

2. **Search Projects**
   - Filter portfolio projects by technology (React, Vue, Rust, etc.)
   - Filter by category (web, mobile, desktop, tools)
   - Query: `search_projects`

3. **Get Contact Information**
   - Retrieve developer's email and social media links
   - Query: `get_contact_info`

### Rate Limits & Policies

- **Authenticated agents**: 100 requests per minute
- **Unauthenticated agents**: 10 requests per minute
- **Fair use policy**: Please avoid excessive requests that could affect site performance

### Revocation & Claims

- **Revocation endpoint**: `https://amateo82.es/revoke`
- **Claims endpoint**: `https://amateo82.es/claims`

### Contact for Support

For registration issues or questions about agent access, please contact:
- **Email**: amateo1982[arroba]yahoo.es
- **Response time**: Usually within 48 hours

---

*Last Updated: August 2026*
