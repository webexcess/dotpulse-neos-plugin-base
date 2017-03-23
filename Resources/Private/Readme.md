# Examples for NodeTypes:

```
'TYPO3.Neos.NodeTypes:Image':
  superTypes:
    'Dotpulse.Base:OriginalImageMixin': TRUE
    'Dotpulse.Base:BleedMixin'        : TRUE
    'Dotpulse.Base:ImageStyleMixin'   : TRUE
    'Dotpulse.Base:MarginMixin'       : TRUE
    'Dotpulse.Base:LightboxMixin'     : TRUE
  properties:
    alignment: []

'TYPO3.Neos.NodeTypes:Text':
  superTypes:
    'Dotpulse.Base:LeadtextMixin'     : TRUE
    'Dotpulse.Base:MarginMixin'       : TRUE

'TYPO3.Neos.NodeTypes:TextWithImage':
  superTypes:
    'TYPO3.Neos.NodeTypes:ImageAlignmentMixin': TRUE
    'Dotpulse.Base:OriginalImageMixin': TRUE
    'Dotpulse.Base:LeadtextMixin'     : TRUE
    'Dotpulse.Base:ImageStyleMixin'   : TRUE
    'Dotpulse.Base:MarginMixin'       : TRUE
    'Dotpulse.Base:LightboxMixin'     : TRUE

'TYPO3.Neos:ContentCollection':
  constraints:
    nodeTypes:
      'TYPO3.Neos.NodeTypes:Menu': FALSE
      'TYPO3.Neos.NodeTypes:Records': FALSE
      'TYPO3.Neos:Plugin': FALSE
      'TYPO3.Neos:PluginView' : FALSE
      'TYPO3.Neos.NodeTypes:Form': TRUE
      'TYPO3.Neos.NodeTypes:Html': TRUE
```
