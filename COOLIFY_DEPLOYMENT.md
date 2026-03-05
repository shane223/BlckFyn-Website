# Deploying to Coolify (Option 1: The Easiest Way)

This repository is ready to be deployed to Coolify without the need for custom `Dockerfile`s or `docker-compose.yml` files.

Coolify has built-in auto-detection for Vite and React projects using **Nixpacks** or the **Static Site** template.

Follow these steps to deploy this application:

## 1. Connect Repository
1. Log into your Coolify instance.
2. Ensure you have connected your Github/Gitlab account to Coolify.

## 2. Create a New Resource
1. From the Coolify dashboard, click **Create New Resource**.
2. Select **Public Repository** or **Private Repository** (depending on where your code is hosted).
3. Select your repository (`shane223/BlckFyn-Website` or your fork) and specify the branch (usually `main`).

## 3. Configure the Build
Coolify will attempt to auto-detect your project. Ensure the following settings are configured in the Coolify UI:

*   **Build Pack:** Select **Static Site** or **Nixpacks**.
*   **Install Command:** `npm install`
*   **Build Command:** `npm run build`
*   **Publish Directory:** `dist`

## 4. Deploy
1. Click the **Deploy** button.
2. Coolify will fetch your code, run the install and build commands, and serve the `dist` folder automatically.

That's it! Your Vite application will be live once the build process completes.
