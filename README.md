# Deploy a Vinext application on Clever Cloud

[Vinext](https://github.com/cloudflare/vinext) is a drop-in replacement for Next.js, built on Vite. This example deploys it on [Clever Cloud](https://www.clever-cloud.com) with Bun.

To follow this tutorial, you need a [Clever Cloud account](https://console.clever-cloud.com) and [Clever Tools](https://github.com/CleverCloud/clever-tools):

```bash
npm i -g clever-tools
clever login
```

## Create and deploy the application

Clone this repository:

```bash
git clone https://github.com/CleverCloud/vinext-example
cd vinext-example
```

Create and configure the application:

```bash
clever create -t node
```

Deploy:

```bash
clever deploy
clever open
```

You should see the Vinext demo page, served by Bun on Clever Cloud. Learn more about [Node.js/Bun deployment](https://www.clever-cloud.com/developers/doc/applications/nodejs).
