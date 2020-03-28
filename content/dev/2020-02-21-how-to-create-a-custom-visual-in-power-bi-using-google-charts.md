---
title: How to create a custom visual in Power BI using Google Charts
tags:
- Power BI
- JavaScript
---

Let jump right in! Here's the minimal steps to get Google Charts showing in a Power BI custom visual...

The main Microsoft Power BI resource that I used for learning how to create custom visuals: https://docs.microsoft.com/en-us/power-bi/developer/visuals/custom-visual-develop-tutorial

1. There's a lot of good information on that page. So the first step is to complete the one-time setup in the 'Prerequisites' section and the 'Setting up the developer environment' section there.
    - Note: The 'certificate' step isn't strictly required, but it makes development and testing A LOT faster. Basically, Power BI can do live refreshes rather than you having to manually import the PBVIZ file for each change. These steps are assuming that the certificate is installed.
2. Sidenote: I was going to write my own summary here, but the linked page is really good and will include pictures that I won't include.
3. In the [custom visual tutorial](https://docs.microsoft.com/en-us/power-bi/developer/visuals/custom-visual-develop-tutorial#creating-a-custom-visual), complete the section 'Creating a custom visual'
    - The next section on that tutorial page, 'Adding visual elements', can be skipped because that uses the d3.js library.
4. (Finally) **Add Google Charts to Power BI custom visual**:
    1. Run: `npm i google-charts`
    2. In 'src/visual.ts':
        1. Add: `import { GoogleCharts } from 'google-charts'`
        2. Replace the class with the following:
        
           ```javascript
            export class Visual implements IVisual {
                private target: HTMLElement

                constructor(options: VisualConstructorOptions) {
                    this.target = options.element
                }

                public update(options: VisualUpdateOptions) {
                    GoogleCharts.load(() => {
                        const data = new GoogleCharts.api.visualization.DataTable()
                        data.addColumn('number', 'X-Axis Timeline')
                        data.addColumn('number', 'Things')
                        data.addColumn('number', 'Stuff')
                        data.addRows([
                            [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
                            [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
                            [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
                            [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
                            [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
                            [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
                            [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
                            [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
                            [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
                            [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
                            [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
                            [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
                        ])
                        const options = {
                            chart: {
                                title: 'Things vs Stuff'
                            },
                            hAxis: {
                                title: 'Time'
                            },
                            vAxis: {
                                title: 'Popularity'
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                        const chart = new GoogleCharts.api.visualization.LineChart(this.target);
                        chart.draw(data, options);
                    })
                }

                /**
                 * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
                 * objects and properties you want to expose to the users in the property pane.
                 */
                public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
                    return VisualSettings.enumerateObjectInstances(VisualSettings.getDefault(), options);
                }
            }
           ```

5. In your Power BI report, refresh the developer visual, and see that the Google Charts are showing!
    - Note: The `pbiviz start` output mentions 'https://localhost:8080/webpack-dev-server/', but that only shows a directory, and not the actual chart.
6. To load data from Power BI rather than locally, please continue with Microsoft's walkthrough, [Process data in the visual code](https://docs.microsoft.com/en-us/power-bi/developer/visuals/custom-visual-develop-tutorial#process-data-in-the-visual-code)



## Bonus
If you want to add a nice border around your chart, then use something similar to this:

```javascript
private readonly chartElement: HTMLElement

constructor(options: VisualConstructorOptions) {
    const target = options.element
    this.chartElement = document.createElement('div');
    this.chartElement.style.border = "1px solid rgba(0,0,0,.125)"
    this.chartElement.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.2)"
    this.chartElement.style.borderRadius = "4px"
    this.chartElement.style.padding = "30px"
    target.appendChild(this.chartElement)
}
```
