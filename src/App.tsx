import React from 'react';
import './App.css';
import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective, Inject, Toolbar, Filter } from '@syncfusion/ej2-react-gantt';
import { templateData, resourceDetails } from './data';
function App() {
  let ganttInst: GanttComponent | null;
  const taskValues: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
    resourceInfo: "resources"
  }
  const customizeColumn =(props: any) =>{
    if((props.ganttProperties.resourceNames)){
    return ( 
    <div>
      <img  src={'https://ej2.syncfusion.com/react/demos/src/gantt/images/' + props.ganttProperties.resourceNames + '.png'} alt=""/>
    </div>);
    } else {
     return <div></div>
    }
  }
  const customizeHeader =(props: any) =>{
    return <span className="e-icon-userlogin">Resources</span>
  } 
  const onToolbarClick =(props: any) =>{
    if(props.item.id === 'filter'){
      (ganttInst as GanttComponent).filterByColumn('resources', 'startswith', 'M');
    }
    else if(props.item.id === 'clearfilter'){
      (ganttInst as GanttComponent).clearFiltering();
    }
  }
  return (
    <div>
      <GanttComponent dataSource={templateData} ref={g=> ganttInst = g}
      taskFields={taskValues} resources={resourceDetails} rowHeight={65}
      toolbar={["CollapseAll", "ExpandAll", {text: "Filter", id:"filter"}, {text: "Clear Filter", id:"clearfilter"}]}
      toolbarClick={onToolbarClick} allowFiltering={true}
      resourceFields={{id: "resourceId", name: "resourceName"}}>
        <Inject services={[Toolbar, Filter]}></Inject>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID" width="100"></ColumnDirective>
          <ColumnDirective field="TaskName" headerText="Name" width="250"></ColumnDirective>
          <ColumnDirective field="resources" headerText="Resources" width="250" template={customizeColumn} headerTemplate={customizeHeader}></ColumnDirective>
          <ColumnDirective field="Duration"></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

export default App;