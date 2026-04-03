# Nursing Workforce BI

Magazine-style static BI page for estimating Taiwan hospital nursing workforce demand.

## Local preview

```bash
npm install
python -m http.server 4173
```

Open `http://127.0.0.1:4173`.

## Rebuild data

```bash
npm run build-data
```

This regenerates `data.js` from the source Excel plus the latest official acute-bed datasets that `build-data.js` can fetch.
