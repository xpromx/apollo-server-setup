## Description

Trying a new GraphQL Apollo-server Setup.

- Prioritize control, speed & quality
- Code as pure and simple as possible
- Schema First Approach
- Omit typescript decorations
- TDD: Use Apollo-Server Mocks
- Authorization: using graphql-shield (Centralized security rules)

## ToDo

- [x] Jest Setup
- [x] Service Class
- [ ] Auto import resolvers + schemas files
- [x] Prisma DB
- [ ] Add test using DB
- [x] Improve Tests
- [x] Authentication
- [x] Authorization
- [ ] Monitoring
- [x] Github Actions CI/CD
- [x] Input Validations
- [x] Error Formating
- [x] Mocks
- [x] Express -> (recommeded & most popular with apollo server)
- [x] Cache
- [ ] Schema validation
- [ ] Cors

## Commands

| command               | description                   |
| --------------------- | ----------------------------- |
| `yarn run build`      | build the server              |
| `yarn run start`      | start the production server   |
| `yarn run dev`        | run dev server                |
| `yarn run generate`   | generate ts types from schema |
| `yarn run test`       | run all tests                 |
| `yarn run test:lint`  | run eslint checker            |
| `yarn run test:jest`  | run all jest tests            |
| `yarn run db:seeds`   | run seeds                     |
| `yarn run db:migrate` | run generate & migrations     |
| `yarn run db:deploy`  | run migrations                |
