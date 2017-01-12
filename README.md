# Ghost Logger

## Installation

`npm i ghost-logger --save`

## Overview

This module is a generic logger for logentries. Provides a simple `console.log(msg, data)` like interface to log in your app with. 

Configuration information can be found below.

# Logger

```js
const GhostLogger = require('ghost-logger');
const logger = new GhostLogger(config);

logger.info("it's lit", { data: myData });
```

# Config


* **`logentries`**: Currently only endpoint logging API supported, New Relic and others to come.
  * **`enabled`** [BOOLEAN] will only log if set to true
  * **`token`** [STRING] your logentries api token
  * **`console`** [BOOLEAN] if set to true, will also log to the console
  
# Example config file

## Example config file

```json
{
  "logentries": {
    "enabled": true,
    "token": "-- YOUR LOGENTRIES TOKEN --",
    "console": true
  }
}
```
