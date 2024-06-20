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

- Start the Vite dev server with live reloading:

```shell
pnpm run dev
```

- Run the TypeScript compiler via `vue-tsc` to check types and then build the application for production
  using `vite build`:

```shell
pnpm run build
```

- Run the build output of the application in a local server:

```shell
pnpm run preview
```

- Use Prettier to check if the files are correctly formatted:

```shell
pnpm run format
```

- Run ESLint for finding and fixing problems in your code, and `vue-tsc --noEmit` for type checking
  without emitting output files:

```shell
pnpm run lint
```

- Generate code from your GraphQL schema and GraphQL operations:

```shell
pnpm run codegen
```

## Environment variables

Environment variables can be stored in either of the following .env files:

- `.env.local`
- `.env.development` (for development only)
- `.env.development.local` (for development only)
- `.env.production` (for production only)
- `.env.production.local` (for production only)

The following environment variables are used by the client.

| Environment variable       | Explanation                                                                    |
| -------------------------- | ------------------------------------------------------------------------------ |
| `VITE_KEYCLOAK_URL`        | The URL of the Keycloak server used for authentification                       |
| `VITE_GRAPHQL_URL`         | The URL of the GraphQL engine                                                  |
| `VITE_LOGIN_FLOW`          | The login flow (see below). Valid values are `DIRECT`, `LOOKUP`, and `IMPORT`. |
| `VITE_HASURA_ADMIN_SECRET` | Admin secret for Hasura GraphQL Engine (in development mode only)              |

### Login flows

Users are initially authenticated by Keycloak in order to gain access to Geyser. Additionally, Keycloak may transmit
some user attributes to Geyser (first name, last name, and optionally an alias). Since Geyser also holds these user
attributes, we propose three login flows in order to manage these dual sources of information.

- `DIRECT`: This flow involves using solely the information provided by Keycloak, foregoing any data stored in Geyser.
  If the user does not exist in Geyser, some functionalities will not work properly.
- `LOOKUP`: This flow relies on the user ID provided by Keycloak to retrieve the user information stored in Geyser. This
  will cause an error if the user does not exist in Geyser.
- `IMPORT`: This flow will create or update the user in Geyser based on the information transmitted by Keycloak.

## Contact

For any questions, comments, suggestions for improvements, or to report any errors or possible bugs, please contact
Julien Hauseux <[julien.hauseux@univ-lille.fr](mailto:julien.hauseux@univ-lille.fr)>.

## License

This project is licensed under the GNU Affero General Public License v3.0 &ndash; see the [LICENSE](LICENSE) file for
details.
