# Contributing to saat

Thank you for your interest in contributing to saat! We're excited to collaborate with you to make saat an even better data seeding tool. Here's how you can contribute.

## How to Contribute

There are many ways you can contribute to saat, depending on your skills and interests:

- **Bug Reports**: If you notice a bug, please file an issue on our GitHub issue tracker. Include as much detail as you can. Screenshots, error messages, and code snippets are very helpful.
- **Feature Requests**: Have an idea for a new feature? Let us know! File an issue with a detailed explanation of your feature request and how it would enhance saat.
- **Documentation**: Help us improve our documentation. If you find mistakes, or you think something could be clearer, submit a pull request.
- **Code Contributions**: Interested in fixing a bug or adding a new feature? Read the section below on setting up your development environment.

## Setting Up Your Development Environment

Here’s how you can set up saat for local development:

1. Fork the saat repo on GitHub.
2. Clone your fork locally:
   ```bash
   git clone git@github.com:iamfj/saat.git
   ```
3. Install the dependencies:
   ```bash
   pnpm install
   ```
4. Create a branch for local development:
   ```bash
   git checkout -b name-of-your-bugfix-or-feature
   ```
5. Make your changes locally.
6. Before pushing your branch to GitHub, run the tests to ensure everything is working correctly:
   ```bash
   pnpm test
   ```
7. Commit your changes and push your branch to GitHub:
   ```bash
   git add .
   git commit -m "Your detailed description of your changes."
   git push origin name-of-your-bugfix-or-feature
   ```
8. Submit a pull request.

## Pull Request Guidelines

Before submitting your pull request, please ensure the following:

- Write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should include more detail.
- Always aim to add test cases for your code. This helps us maintain code quality and ensure that your feature or fix doesn't break in the future.
- Ensure the PR is directed against the `main` branch and not against released branches unless you are backporting fixes.
- If you add functionality, update the documentation accordingly.

## Conduct

We have a code of conduct in place that we expect all participants to adhere to. Please read [the full text](CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Getting Help

If you need help with your contributions or have other questions, feel free to tag or message maintainers in your issues or pull requests. We want to ensure that your contributing experience is as smooth as possible.

Once again, thanks for your interest in saat. We look forward to your contributions!
