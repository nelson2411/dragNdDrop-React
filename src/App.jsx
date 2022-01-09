import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import initialData from "./initial-data";
import Column from "./Column";

class App extends React.Component {
  state = initialData;
  render() {
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

export default App;
