# Contributing to ChainMove

## Scope

ChainMove is being prepared as a Stellar-aligned open-source mobility payments project. Contributions should improve code quality, product clarity, operational safety, or ecosystem interoperability.

## Ways to Contribute

- Improve frontend flows for riders, drivers, and sponsors
- Help define Soroban contract interfaces and settlement logic
- Add Stellar wallet integration and transaction handling
- Improve documentation, architecture notes, and developer onboarding
- Strengthen testing, linting, and deployment workflows

## Workflow

1. Fork the repository and create a focused feature branch.
2. Keep changes scoped to a single concern where possible.
3. Document any product or protocol assumptions in the pull request.
4. Add or update tests when behavior changes.
5. Open a pull request with a clear summary, rationale, and verification notes.

## Pull Request Expectations

- Use descriptive branch names such as `feat/soroban-escrow-contract` or `docs/readme-drip-wave`.
- Explain user impact and any ecosystem relevance.
- Include screenshots for UI changes.
- Avoid unrelated refactors in the same pull request.

## Coding Standards

- Prefer TypeScript for new application code.
- Keep smart contract logic deterministic and auditable.
- Do not commit secrets, private keys, or funded test credentials.
- Favor explicit naming over compact but unclear abstractions.

## Issues

When opening an issue, include:

- The problem being addressed
- Why it matters to riders, drivers, or ecosystem partners
- Reproduction steps if it is a bug
- A proposal if it is an enhancement

## Security

If you identify a security issue involving payments, keys, settlement logic, or user data, do not disclose it publicly in an issue. Contact the maintainer privately first.
