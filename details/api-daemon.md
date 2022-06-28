### Achievements

- Supported [Settings API](https://github.com/kaiostech/api-daemon/tree/main/services/settings)
  - A centralized settings system which makes applications and services on KaiOS can access, change, and monitor changes together.
- Supported [Device Capability API](https://github.com/kaiostech/api-daemon/tree/main/services/devicecapability)
  - Provided [hasFeature and getFeature functions](https://wiki.mozilla.org/WebAPI/Navigator.hasFeature)
  - Re-designed the API from [long, hard-coded implementation](https://github.com/kaiostech/gecko-b2g/blob/b2g48/dom/base/Navigator.cpp#L1755-L1967) to [configurable interface](https://github.com/kaiostech/api-daemon/blob/main/services/devicecapability/devicecapability.json), easy to maintain and extend.
