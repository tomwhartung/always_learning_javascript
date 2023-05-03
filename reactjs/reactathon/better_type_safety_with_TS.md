
# better_type_safety_with_TS.md

Notes from a talk at Reactathon 2023 about TS.

1. Use stricter config
  - Settings to set:
    - strict: true - currently the default?
    - noUnchecedIndexedAccess: true
2. Use linting
  - Do not use these escape hatches:
    - any
    - as
    - !
    - object and function types
3. Better global types
  - ts-reset - look it up
4. Types at I/O boundaries
  - Database
  - session
  - remote API
  - request/response
  - user input (CLI)
  - . . . missed the rest . . .
  - schema valitation:
    - look at zod
    - using GraphQL or tRPC can help
  - routing and navigation:
    - type-safe routing: TanStack Router

- Towards better type safety:
  - generate types where possible
  - choose libraries with strong typing
  - lean on the ecosystem

