# Torn Tools

The website for Congerie's Torn client and future Torn utilities.

## Deploy with Vercel

1. Open Vercel and choose **Add New Project**.
2. Import `congeriesstudio-wq/congerie-torn-tools`.
3. Framework preset: **Other**.
4. Build command: leave empty.
5. Output directory: `.`
6. Deploy.

The deployed site is intended to provide the public home for the client, release notes, and future Torn tools.

## Client update hosting

The Android client expects its public update manifest at:

`/congerie/update.json`

The release APK will eventually be served at:

`/congerie/latest.apk`

The manifest and APK should only be published together after a signed release has been built and its SHA-256 has been verified. Do not point the client at a missing or placeholder APK.
