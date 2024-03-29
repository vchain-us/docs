## vcn authenticate

Authenticate assets against the blockchain

### Synopsis


Authenticate assets against the blockchain.

Authentication is the process of matching the hash of a local asset to 
a hash on the blockchain. 
If matched, the returned result (the authentication) is the blockchain-stored
metadata that’s bound to the matching hash. 
Otherwise, the returned result status equals UNKNOWN.

Note that your assets will not be uploaded but processed locally.

The exit code will be 0 only if all assets' statuses are equal to TRUSTED. 
Otherwise, the exit code will be 1.

Assets are referenced by the passed ARG(s), with authentication accepting 
1 or more ARG(s) at a time. Multiple assets can be authenticated at the 
same time while passing them within ARG(s).

ARG must be one of
- `file://<file>`
- `dir://<directory>`
- `git://<repository>`
- `docker://<image>`
- `podman://<image>`

```
vcn authenticate [flags]
```

### Examples

```
  vcn authenticate /bin/vcn
```

### Options

```
      --alerts             specify to authenticate and monitor for the configured alerts, if set no ARG(s) can be used
      --hash string        specify a hash to authenticate, if set no ARG(s) can be used
  -h, --help               help for authenticate
  -I, --org string         accept only authentications matching the passed organisation's ID,
                           if set no SignerID can be used
                           (overrides VCN_ORG env var, if any)
  -s, --signerID strings   accept only authentications matching the passed SignerID(s)
                           (overrides VCN_SIGNERID env var, if any)
```

### Options inherited from parent commands

```
      --config string   config file (default is $HOME/.vcn/config.json)
  -o, --output string   output format, one of: --output=json|--output=yaml|--output=''
  -S, --silent          silent mode, don't show progress spinner, but it will still output the result
```

### SEE ALSO

* [vcn](vcn.md)	 - vChain Codenotary - Notarize and authenticate, from code to production

###### Auto generated by spf13/cobra on 24-Jan-2020
