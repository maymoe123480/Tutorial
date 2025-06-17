import { useState } from "react";
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Stack } from "@mui/material";

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
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Task List</h2>
      <div style={{ display: "flex"}}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="What do you have planned?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        {/* <Button variant="contained" color="primary" onClick={addTask}> */}
            <Button variant="contained" sx={{ backgroundColor: "green", color: "#fff" }}>
  Add Task
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          {/* <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>
                  {editIndex === index ? (
                    <TextField
                      size="small"
                      variant="outlined"
                      value={changedTask}
                      onChange={(e) => setChangedTask(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && updateTask()}
                    />
                  ) : (
                    task
                  )}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    {editIndex === index ? (
                      <Button variant="contained" sx={{ backgroundColor: "green", color: "#fff" }} onClick={updateTask}>
                        Save
                      </Button>
                    ) : (
                      <>
                        <Button variant="contained" sx={{ backgroundColor: "green", color: "#fff" }} onClick={() => { setEditIndex(index); setChangedTask(task); }}>
                          Update
                        </Button>
                        <Button variant="contained" sx={{ backgroundColor: "red", color: "#fff" }} onClick={() => removeTask(index)}>
                          Delete
                        </Button>
                      </>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
