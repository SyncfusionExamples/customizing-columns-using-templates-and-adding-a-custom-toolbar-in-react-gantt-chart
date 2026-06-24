# React Gantt Chart with Custom Column Templates and Toolbar

A React sample repository demonstrating the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) with custom column templates, resource rendering, and toolbar-based interactions.

## Repository description
This repository provides a React example that showcases a Syncfusion Gantt Chart configured with custom resource column templates, header templates, and toolbar actions for controlling filtering and task presentation.

## Project Overview

The sample focuses on extending the default Gantt chart behavior by customizing how resource information is displayed within columns and by handling toolbar actions programmatically. It highlights how template support and toolbar events can be used together to control filtering and task visibility in a structured project timeline.

## Features

- Custom `Resources` column template
- Custom `Resources` header template
- Built-in toolbar actions such as `CollapseAll` and `ExpandAll`
- Custom toolbar actions for filtering and clearing filters
- Programmatic filtering triggered through toolbar events
- Support for nested tasks, dependencies, and resource assignment

## Getting Started

### Prerequisites

- Node.js (LTS or later)
- npm

### Install

```bash
npm install
```

### Run

```bash
npm start
```

Open `http://localhost:3000`.

## Notes

- The sample renders a `GanttComponent` configured with `taskFields` mapping.
- Column customization is implemented using `template` and `headerTemplate`.
- Toolbar click handlers apply and clear filters dynamically.
- Resource images are loaded from a public Syncfusion demo CDN for display purposes.

## Related Links

- [Explore React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart)
- [Gantt Chart Feature Overview](https://ej2.syncfusion.com/react/documentation/gantt/overview)
- [React Gantt Chart Getting Started Guide](https://ej2.syncfusion.com/react/documentation/gantt/getting-started)
- [React Gantt API Documentation](https://ej2.syncfusion.com/react/documentation/api/gantt/)
- [React Gantt Chart Live Demos and Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/gantt/column-template)
