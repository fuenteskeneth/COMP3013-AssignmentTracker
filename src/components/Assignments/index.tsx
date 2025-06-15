import { Assignment } from "../Assignment";
import { TAssignment } from "../Types/TAssignment";
import styles from "./assignments.module.css";

export interface AssignmentsProps {
  assignments: TAssignment[];
  createdCount: number;
  onDone: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Assignments({assignments, createdCount, onDone, onDelete}: AssignmentsProps) {
  const completedCount = assignments.filter((a) => a.isDone).length;
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{createdCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments && assignments.map((a) => <Assignment key={a.id} element={a} onDone={onDone} onDelete={onDelete} />)}
      </div>
    </section>
  );
}
