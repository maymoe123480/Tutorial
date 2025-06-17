// "use client";

// import styles from "./Rexercise1.module.css";
// import { useState } from "react";

// export default function TodoApp() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [changedTask, setChangedTask] = useState("");
//   const [taskIndex, setTaskIndex] = useState(null);

//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };

//   const removeTask = (indexToRemove) => {
//   const confirmDelete = window.confirm("Are you sure you want to delete this task?");
//   if (confirmDelete) {
//     setTasks((prevTasks) =>
//       prevTasks.filter((_, index) => index !== indexToRemove)
//     );
//   } else {
//     // Optionally handle the cancel action
//     console.log("Task deletion cancelled.");
//   }
// };

//   // const removeTask = (indexToRemove) => {
//   //   setTasks((prevTasks) =>
//   //     prevTasks.filter((_, index) => index !== indexToRemove)
//   //   );
//   // };

//   const updateTask = () => {
//     if (changedTask.trim()) {
//       setTasks((prevTasks) =>
//         prevTasks.map((task, index) =>
//           index === taskIndex ? changedTask : task
//         )
//       );
//       setChangedTask("");
//       setTaskIndex(null);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {/* Add New Task */}
//       <div>
//         <input
//           className={styles.taskInput}
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 addTask();
//               }
//             }}
//         />
//         <button className={styles.addTaskBtn} onClick={addTask}>
//           Add Task
//         </button>
//       </div>

//       {/* Update Existing Task */}
//       {taskIndex !== null && (
//         <div className={styles.updateSection}>
//           <input
//             className={styles.taskInput}
//             value={changedTask}
//             onChange={(e) => setChangedTask(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 updateTask();
//               }
//             }}
//           />

//           <button className={styles.updateTaskBtn} onClick={updateTask}>
//             Update
//           </button>
//           <button
//             className={styles.cancelBtn}
//             onClick={() => {
//               setTaskIndex(null);
//               setChangedTask("");
//             }}
//           >
//             Cancel
//           </button>
//         </div>
//       )}

//       {/* Task Table */}
//       <table className={styles.taskTable}>
//         <thead>
//           <tr>
//             <th>Task</th>
//             <th>Action1</th>
//             <th>Action2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.length > 0 ? (
//             tasks.map((task, index) => (
//               <tr key={index}>
//                 <td>{task}</td>
//                 <td>
//                   <button
//                     className={styles.editBtn}
//                     onClick={() => {
//                       setTaskIndex(index);
//                       setChangedTask(task);
//                     }}
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     className={styles.removeBtn}
//                     onClick={() => removeTask(index)}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" style={{ textAlign: "center" }}>
//                 No tasks available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }




"use client";

import styles from "./EXErcise1.module.css";
import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [changedTask, setChangedTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const updateTask = () => {
    if (changedTask.trim()) {
      const updated = [...tasks];
      updated[editIndex] = changedTask;
      setTasks(updated);
      setChangedTask("");
      setEditIndex(null);
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Task List 2021</h2>
      <div className={styles.inputRow}>
        <input
          className={styles.taskInput}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What do you have planned?"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTask();
            }
          }}

        />
        <button className={styles.addTaskBtn} onClick={addTask}>
          Add task
        </button>
      </div>

      <div className={styles.taskList}>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} className={styles.taskItem}>
              {editIndex === index ? (
                <>
                  <input
                    className={styles.taskInput}
                    value={changedTask}
                    onChange={(e) => setChangedTask(e.target.value)}
                  />
                  <button className={styles.saveBtn} onClick={updateTask}>
                    SAVE
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => removeTask(index)}
                  >
                    DELETE
                  </button>
                </>
              ) : (
                <>
                  <span className={styles.taskText}>{task}</span>
                  <button
                    className={styles.editBtn}
                    onClick={() => {
                      setEditIndex(index);
                      setChangedTask(task);
                    }}
                  >
                    UPDATE
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => removeTask(index)}
                  >
                    DELETE
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
