import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import MyCard from "./MyCard";

const MainBody = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  return (
    <>
      <div>
        <InputField addTask={addTask} />
      </div>
      <div className="flex displayarea flex-wrap justify-center items-center px-2">
        {tasks.map((task, index) => (
          <MyCard
            task={task}
            key={index}
            deleteTask={deleteTask}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default MainBody;
