---
slug: '2025-02-04-pipelines-exit-on-error'
title: Sunset of pipelines.exit-on-error flag
draft: false
tags: [conduit, deprecate]
---

In this new release of [**Conduit 0.13**](/changelog/2025-02-04-conduit-0-13-0-release), we're sunsetting the flag `pipelines.exit-on-error` we had previously deprecated on [this other announcement](/changelog/2024-10-15-pipelines-exit-on-degraded). Going forward, you can use `pipelines.exit-on-degraded` to provide the same functionality.


<!--truncate-->

After Conduit 0.13, make sure you only use `pipelines.exit-on-degraded` when configuring [Pipeline Recovery](/docs/using/other-features/pipeline-recovery):

```bash
$ conduit run --help
...
            --pipelines.exit-on-degraded                exit Conduit if a pipeline enters a degraded state
...
```

If you were using a [Conduit Configuration file](/docs/configuration#configuration-file) this should look like:

```yaml title="conduit.yaml"
# ...
pipelines:
  exit-on-degraded: true
# ...
```

If you have any questions or comments, feel free to join our [Discord Community](https://discord.meroxa.com/).
