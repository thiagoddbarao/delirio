name: Sync Delírio

on:
  schedule:
    - cron: '0 12 * * *'  # 09:00 Brasília (UTC-3)
    - cron: '0 18 * * *'  # 15:00 Brasília (UTC-3)
    - cron: '0 0 * * *'   # 21:00 Brasília (UTC-3)
  workflow_dispatch:        # permite rodar manualmente se precisar

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Chamar sync do Delírio
        run: |
          curl -s https://delirio-rose.vercel.app/api/sync
