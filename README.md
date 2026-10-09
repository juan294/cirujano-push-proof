# Cirujano push-proof benchmark

A non-production, public benchmark repository for the
[Cirujano](https://github.com/juan294/cirujano) skip-validated-push proof. It holds a
small tested module and a pinned dependency workload of about 1,850 packages, so each CI
job does real install, lint, test and build work. Nothing here is deployed.

The CI workflow runs on pull requests into `develop` and on pushes to `develop`.
Cirujano measures whether a push that only lands an already-green pull request can skip
re-running the same jobs on the same tree, and publishes its evidence as a pull request
here. No change merges automatically.

Sample baseline-1 recorded for the push-proof cohort.
