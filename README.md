# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

- Set up github
    - go to the project settings
    - click on pages
    - In "build and deploy" select Deploy from branch
    - in the section "Branch" select the option gh-pages (use the command npm run deploy first), and /root and save changes


- Run one of next command from main branch every time that you need to re-deploy the page

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


### Config file changes

```javascript
const config: Config = {
  ...
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/entregalo-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'proyectos-helisa', // Usually your GitHub org/user name.
  projectName: 'entregalo-docs', // Usually your repo name.
  trailingSlash: false,
...
}
```