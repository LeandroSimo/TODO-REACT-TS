import { useState } from "react";
import Modal from "react-modal";

// CSS
import styles from "./App.module.css";

// components
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";
import { ITask } from "./interfaces/Task";

Modal.setAppElement("#root");

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div>
      <div className="container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName={styles.modal_overlay}
          className={styles.modal_content}
        >
          <TaskForm btnText="Editar Tarefa" taskList={taskList} />
        </Modal>
      </div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas: </h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={openModal}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
