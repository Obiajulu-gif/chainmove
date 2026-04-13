# ChainMove Architecture

## Architecture Status

ChainMove currently has a frontend-heavy product prototype and a legacy Internet Computer contract implementation. The target architecture for the Drip Wave submission is a Stellar-native settlement stack.

## Current Repository Components

- `frontend/`: Next.js application for booking, onboarding, and dashboard flows
- `backend/`: Motoko contract prototype from the original implementation
- `docs/`: project positioning and migration documentation

## Target Stellar Architecture

### Frontend

The web client manages:

- Rider and driver onboarding
- Trip selection and booking flows
- Wallet connection and signing prompts
- Payment and payout state display

### API and Indexing Layer

An application service is expected to manage:

- Trip records and off-chain metadata
- Event ingestion from Soroban contract activity
- Notification delivery
- Admin and dispute workflows

### Soroban Contracts

The contract layer should include:

- Escrow creation for trips
- Payment release rules
- Cancellation and refund logic
- Platform fee collection
- Optional incentive or sponsor allocation logic

## Settlement Model

1. The rider initiates a trip and selects a supported asset.
2. The application creates a trip record and requests a wallet-signed funding action.
3. The Soroban contract records the escrow state.
4. Driver acceptance and trip completion trigger permitted state transitions.
5. The contract releases funds, fees, or refunds according to policy.

## Data Boundaries

### On-chain

- Escrow state
- Settlement status
- Treasury and fee distribution
- Contract events

### Off-chain

- Route metadata
- User profiles
- Analytics
- Notifications
- Dispute evidence

## Suggested Modules

- `contracts/trip-escrow`
- `contracts/settlement-policy`
- `services/indexer`
- `services/api`
- `frontend`

## Design Principles

- Keep settlement rules deterministic
- Minimize off-chain trust for payment movement
- Keep user-facing flows simple enough for mobile-first usage
- Prefer stable assets for fare predictability
- Design for ecosystem interoperability from the start
