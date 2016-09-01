# private-data-write
Writes miscellaneous values to a job's private data using key => value pairs that can be set in the script configurator as input parameters. 

## Overview

<img src="http://i.imgur.com/XHSTuig.png" width="371">

Set any value (from a variable, script expression, or just inline text) as an easy to use private data key. In the example above **Shawmut Customer ID** is the key for variable from a backing dataset. After the job processes through this script, we can access (or overwrite!) this value easily by accessing **[Job.PrivateData:Key="Shawmut Customer ID"]**.

Currently this script supports writing 25 private data values. If more needs to be written, you hou have to run your job through additional scripting instances.

To aid in debugging private data values, check out [switch-job-ticket-export](https://github.com/open-automation/switch-job-ticket-export).
