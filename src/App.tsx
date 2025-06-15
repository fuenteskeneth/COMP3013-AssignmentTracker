import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { TAssignment } from "./components/Types/TAssignment";

function App() {
  const [assignmentList, setAssignmentList] = useState<TAssignment[]>([]);
  const [createdCount, setCreatedCount] = useState(0);

  const onAddAssignment = function(newAssignment: TAssignment) {
    setAssignmentList([...assignmentList, newAssignment]);
    setCreatedCount(createdCount + 1);
  }

  const onAssignmentDone = function(id: string) {
    setAssignmentList(
      assignmentList.map((a) => (a.id===id) ? {...a, isDone: !a.isDone} : a)
    );
  }

  const onAssignmentDelete = function(id: string) {
    setAssignmentList(
      assignmentList.map((a) => (a.id===id) ? null : a).filter((a) => a!==null)
    );
  }

  return (
    <>
      <Header onAddAssignment={onAddAssignment} />
      <Assignments assignments={assignmentList} createdCount={createdCount} onDone={onAssignmentDone} onDelete={onAssignmentDelete} />
    </>
  );
}

export default App;
