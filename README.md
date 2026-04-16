# React Gantt Chart with Custom Column Templates and Toolbar

A React sample repository demonstrating `@syncfusion/ej2-react-gantt` with custom resource templates, header templates, and custom toolbar actions.

## Repository description
This repository contains a Create React App example rendering a Gantt chart with custom resource display and toolbar-driven filtering.

## Features

- Custom `Resources` column template
- Custom `Resources` header template
- Built-in toolbar buttons: `CollapseAll`, `ExpandAll`
- Custom toolbar buttons: `Filter`, `Clear Filter`
- Programmatic filtering via toolbar events
- Nested tasks, dependencies, and resources

## What it demonstrates

- `GanttComponent` with `taskFields` mapping
- `ColumnsDirective` and `ColumnDirective` customization
- Custom column `template` and `headerTemplate`
- Toolbar click handling
- Resource mapping via `resourceDetails`

## Getting Started

### Prerequisites

- Node.js
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

- Uses React 17 and Create React App
- Loads resource images from Syncfusion demo CDN
- Filter button limits resources starting with `M`
- Clear Filter removes active filtering

## Available Scripts

- `npm start`
- `npm run build`
- `npm test`
- `npm run eject`
