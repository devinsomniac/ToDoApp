import React, { useState,useEffect } from "react";
import InputField from "./InputField";
import Card from "./Card";
import Cookies from "js-cookie"

const MainBody = () => {
  const [tasks, settask] = useState([]);
  useEffect(() => {
    const savedTasks = Cookies.get('tasks');
    if (savedTasks) {
      settask(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = (task) => {
    if (task) {
      const updatedTasks = [...tasks, task];
      settask(updatedTasks);
      Cookies.set('tasks', JSON.stringify(updatedTasks), { expires: 7 }); 
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    settask(updatedTasks);
    Cookies.set('tasks', JSON.stringify(updatedTasks), { expires: 7 });
  };
  return (
    <div className="flex flex-col flex-1 justify-center items-center py-2 px-2 h-screen max-w-screen relative">
      <InputField addTask={addTask} />
      <div className="taskArea flex justify-center items-center flex-wrap w-screen py-3 m-3">
        {tasks.map((task, index) => (
          <Card key={index} task={task} index={index} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
