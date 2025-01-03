# Geyser frontend

_A Vue.js client for Geyser_

1. [Installation](#installation)
2. [Package scripts](#package-scripts)
3. [Environment variables](#environment-variables)
4. [Contact](#contact)
5. [License](#license)

## Installation

This project uses `pnpm` as the package manager. If you haven't installed `pnpm`, you can do so by running the install
script (for POSIX systems):

```shell
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

After installing `pnpm`, you can install the project dependencies by running

```shell
pnpm i
```

## Package scripts

The project contains several pnpm scripts for automation of different tasks:

- Development server with live reload:

```shell
pnpm run dev
```

- Type check and build for production:

```shell
pnpm run build
```

- Preview production build in a local server:

```shell
pnpm run preview
```

- Check code formatting with Prettier:

```shell
pnpm run format
```

- Run ESLint:

```shell
pnpm run lint
```

- Type check:

```shell
pnpm run typecheck
```

- Run format, lint and type checks (used in CI):

```shell
pnpm run validate
```

- Generate GraphQL code:

```shell
pnpm run codegen
```

## Environment variables

Environment variables can be stored in either of the following .env files:

- `.env.local`
- `.env.development` and `.env.development.local` (development)
- `.env.production` and `.env.production.local` (production)

The following environment variables are used by the client.

| Environment variable       | Description                                         |
| -------------------------- | --------------------------------------------------- |
| `VITE_GRAPHQL_URL`         | GraphQL engine URL                                  |
| `VITE_KEYCLOAK_URL`        | Keycloak authentication server URL                  |
| `VITE_BYPASS_KEYCLOAK`     | Bypass Keycloak auth in development (set to `true`) |
| `VITE_HASURA_ADMIN_SECRET` | Hasura admin secret (when bypassing Keycloak)       |
| `VITE_HASURA_USER_ID`      | Hasura user ID (when bypassing Keycloak)            |
| `VITE_BUILD_VERSION`       | Build version (shown in top-left corner)            |

## Contact

For questions, suggestions, or bug reports, contact Julien Hauseux <[julien.hauseux@univ-lille.fr](mailto:julien.hauseux@univ-lille.fr)>.

## License

Licensed under GNU AGPL v3.0 &ndash; see [LICENSE](LICENSE).
