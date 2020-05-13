---
title: How to do BPMN.io things with Vue.js
tags:
- Vue.js
- bpmn.io
---



## How to show the palette in bpmn.io using vue.js
1. In your Vue componenet, import the following two CSS from bpmn-js, inside your `script` section:

        import 'bpmn-js/dist/assets/diagram-js.css'
        import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'

Note: This wasn't working when trying to use the CSS files via the main index.html file with `link rel="stylesheet" ...`



## How to add a new element to the palette
1. Create CustomPaletteProvider.js and add the following contents:

        import PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider'
        
        export default class CustomPaletteProvider extends PaletteProvider {
          constructor (
            create,
            elementFactory,
            globalConnect,
            handTool,
            lassoTool,
            palette,
            spaceTool,
            translate
          ) {
            super(
              palette,
              create,
              elementFactory,
              spaceTool,
              lassoTool,
              handTool,
              globalConnect,
              translate
            )
            
            this.create = create
            this.elementFactory = elementFactory
            this.translate = translate
          }
          
          getPaletteEntries (element) {
            const { create, elementFactory, translate } = this
            return Object.assign(super.getPaletteEntries(element), {
              'terminate-end-event': {
                group: 'event',
                className: 'bpmn-icon-end-event-terminate',
                title: translate('Create Terminate End Event'),
                action: {
                  click: function (event) {
                    const shape = elementFactory.createShape({
                      type: 'bpmn:EndEvent',
                      eventDefinitionType: 'bpmn:TerminateEventDefinition'
                    })
                    create.start(event, shape)
                  }
                }
              }
            })
          }
        }
        
        CustomPaletteProvider.$inject = [
          'create',
          'elementFactory',
          'globalConnect',
          'handTool',
          'lassoTool',
          'palette',
          'spaceTool',
          'translate'
        ]

2. Update your Modeler in your Vue component:

        import Modeler from 'bpmn-js/lib/Modeler'
        import CustomPaletteProvider from './CustomPaletteProvider'
        
        this.modeler = new Modeler({
          container: '#canvas',
          additionalModules: [
            {
              __init__: ['paletteProvider'],
              paletteProvider: ['type', CustomPaletteProvider]
            }
          ]
        })
