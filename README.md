# setup-github

[![Continuous Integration](https://github.com/ci-tasks/setup-github/actions/workflows/test.yml/badge.svg)](https://github.com/ci-tasks/setup-github/actions/workflows/test.yml)

GitHub Action that sets up [git client](https://git-scm.com/) in your GitHub Actions workflow by:

## Usage

```yaml
uses: ci-tasks/setup-github@main
with:
  token: ${{ github.token }}
```
