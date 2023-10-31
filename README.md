# setup-github

<!-- action-docs-description -->
## Description

Configure a git client for use with GitHub
<!-- action-docs-description -->

<!-- action-docs-inputs -->
## Inputs

| parameter | description | required | default |
| --- | --- | --- | --- |
| github-token | Personal access token (PAT) used to fetch the repository. The PAT is configured with the local git config, which enables your scripts to run authenticated git commands. The post-job step removes the PAT. We recommend using a service account with the least permissions necessary. Also when generating a new PAT, select the least scopes necessary.  | `false` | ${{ github.token }} |
<!-- action-docs-inputs -->

<!-- action-docs-outputs -->

<!-- action-docs-outputs -->

<!-- action-docs-runs -->
## Runs

This action is a `node16` action.
<!-- action-docs-runs -->
