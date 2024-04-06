import React, { useContext } from 'react';
import data from "./assets/data";
import Areachart from "./components/Areachart";
import Navbar from "./components/Navbar";
import GridComp from "./components/GridComp"
import SearchSelectComp from "./components/SearchSelectComp";
import { StudentContext } from './Context';

const App = () => {
  const userId = useContext(StudentContext);
  const students = data.students;
  const student = students[userId.value];
  return (
    <div className="p-4 bg-slate-700 w-full h-full">
      <Navbar />
        <SearchSelectComp data={students} student={student} />
        <GridComp data={student} />
        <Areachart data={student.student_metrics} />
    </div>
  );
}

export default App;
