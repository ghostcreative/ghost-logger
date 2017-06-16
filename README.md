# Ghost Logger

## Installation

`npm i ghost-logger --save`

## Overview

This module is a generic logger for winston console, logentries, loggly, and new relic. Provides a simple `console.LEVEL` like interface to log in your app with. 

Configuration information can be found below.

# Logger

```js
const GhostLogger = require('ghost-logger');
const logger = new GhostLogger(config);

logger.info("it's lit", { data: myData });
```

# Config

* **`blacklist`** [ARRAY] Blacklisted Attributes to remove from logs

* **`console`**:
 
* **`loggly`**: 

* **`logentries`**: 
  * **`enabled`** [BOOLEAN] will only log if set to true
  * **`token`** [STRING] your logentries api token
  * **`console`** [BOOLEAN] if set to true, will also log to the console
  
* **`newrelic`**: 

## Example config file

```json
{
  "enabled": true,
  "logentries": {
    "enabled": true,
    "token": "-- YOUR LOGENTRIES TOKEN --",
    "console": true,
    "blacklist": ["password","credit_card"]
  }
}
```
