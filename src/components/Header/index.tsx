import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { TAssignment } from "../Types/TAssignment";

export interface HeaderProps {
  onAddAssignment: (newAssignment: TAssignment) => void
}

export function Header(props: HeaderProps) {
  const [assignment, setAssignment] = useState("");
  const [dueDateStr, setDueDateStr] = useState("");

  const onChangeText = function(event: React.ChangeEvent<HTMLInputElement>) {
    setAssignment(event.currentTarget.value);
  }

  const onChangeDate = function(event: React.ChangeEvent<HTMLInputElement>) {
    setDueDateStr(event.target.value);
  }

  const isDisabled = (assignment === "") || (dueDateStr === "");

  const onClick = function(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    const newAssignment: TAssignment = {
      id: uuidv4(),
      title: assignment,
      isDone: false,
      dueDate: new Date(dueDateStr + "T00:00:00")
    }

    props.onAddAssignment(newAssignment);

    setAssignment("");
    setDueDateStr("");
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" value={assignment} onChange={onChangeText} />
        <input type="date" value={dueDateStr} onChange={onChangeDate}/>
        <button disabled={isDisabled} onClick={onClick}>
          Create <AiOutlinePlusCircle size={20}  />
        </button>
      </form>
    </header>
  );
}
