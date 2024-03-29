### Hexlet tests and linter status:
[![Actions Status](https://github.com/StoyingV/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/StoyingV/frontend-project-46/actions)

### Diff flat tests status
[![diff flat tests](https://github.com/StoyingV/frontend-project-46/actions/workflows/difflat.yml/badge.svg)](https://github.com/StoyingV/frontend-project-46/actions/workflows/difflat.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/25ecc975e7f3819b160f/maintainability)](https://codeclimate.com/github/StoyingV/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/25ecc975e7f3819b160f/test_coverage)](https://codeclimate.com/github/StoyingV/frontend-project-46/test_coverage)

## Description
This is consolr utilite for comparing different JSON YAML YML files.


## **Setup Guide**
1) Clone repositary on your PC
```
git clone git@github.com:StoyingV/frontend-project-46.git
```
2) Install dependesys

```
make install
```
ORе
```
sudo npm ci
```

For runing:
```
node bin/gendiff.js -h
```


## Example of work
Find differenses between two JSON flat files:
[![asciicast](https://asciinema.org/a/bVuOmmkW4pv6QzTKzvGAQuKKX.svg)](https://asciinema.org/a/bVuOmmkW4pv6QzTKzvGAQuKKX)

Find differenses between two YML flat files:
[![asciicast](https://asciinema.org/a/sCK5qSN4oNbaTDynihReV9tqD.svg)](https://asciinema.org/a/sCK5qSN4oNbaTDynihReV9tqD)

Find differenses for complicated recursive files JSON and YAML/YML:
[![asciicast](https://asciinema.org/a/C7TAOdpAJnCxUKmEMIoVPsTyR.svg)](https://asciinema.org/a/C7TAOdpAJnCxUKmEMIoVPsTyR)

Find differenses for complicated recursive files JSON and YAML/YML output using formatter PLAIN:
[![asciicast](https://asciinema.org/a/ATe2VpFmIaBofWZCUuVBMuw6M.svg)](https://asciinema.org/a/ATe2VpFmIaBofWZCUuVBMuw6M)

Find differenses for complicated recursive files JSON and YAML/YML output using formatter JSON (return json string):
[![asciicast](https://asciinema.org/a/oHtLfMrNeG0KAAV95frsOQfnr.svg)](https://asciinema.org/a/oHtLfMrNeG0KAAV95frsOQfnr)
