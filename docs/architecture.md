# ChainMove Architecture

## Architecture Goal

Move ChainMove from an earlier monolithic prototype into a payment-oriented Stellar architecture where on-chain responsibilities are narrow and auditable, and operational logic remains off-chain where it belongs.

## Proposed Components

### 1. Client Applications

- rider interface for trip booking and payment authorization
- driver interface for trip acceptance, completion, and payout visibility
- operator dashboard for monitoring disputes, fees, and settlement history

Recommended stack:

- Next.js
- TypeScript
- Tailwind CSS

## 2. Stellar Wallet and Identity Layer

Responsibilities:

- wallet connection
- transaction signing
- account selection
- payment confirmation UX

Planned options:

- browser wallet support for Stellar-compatible wallets
- SEP-10 style authentication or equivalent signed-session flows where needed

## 3. Soroban Contract Layer

### Ride Escrow Contract

Responsibilities:

- accept rider funds
- hold funds until release conditions are met
- support cancellation and refund paths
- emit settlement events

### Fee Routing Logic

Responsibilities:

- split payment among driver, operator, and treasury accounts
- preserve deterministic accounting for each completed trip

### Asset Support

Responsibilities:

- accept XLM, USDC, and approved issued assets
- validate supported assets per deployment or operator configuration

## 4. Application Backend

Responsibilities:

- ride matching and dispatch
- route and fare estimation
- trip lifecycle management
- notification delivery
- dispute workflow coordination

Suggested stack:

- Node.js or NestJS
- PostgreSQL
- Redis
- job workers for asynchronous processing

## 5. Data and Event Model

Off-chain data should include:

- trip metadata
- routing data
- participant roles
- operator settings
- dispute records
- analytics

On-chain data should stay minimal:

- payment asset
- amount
- trip or escrow reference
- payout destinations
- lifecycle state needed for settlement

## 6. Security Model

Key design principles:

- keep custody logic explicit
- minimize privileged admin actions
- define cancellation and dispute authority clearly
- separate off-chain operational truth from on-chain settlement authority
- log every settlement-relevant state transition

## 7. Migration Notes

Current codebase:

- Next.js frontend
- Motoko contracts
- Internet Identity integration

Planned migration:

- replace Motoko contracts with Soroban contracts in Rust
- replace ICP-specific authentication and chain calls with Stellar wallet flows
- keep useful frontend UX patterns where possible
- introduce service modules for indexing, notifications, and trip-state orchestration
