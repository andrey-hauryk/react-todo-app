import { useState } from "react";
import Modal from "./Modal";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateTask: (task: Task) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ isOpen, onClose, onCreateTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };

    onCreateTask(newTask);
    setText("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Добавить задачу">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите задачу..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
    </Modal>
  );
};

export default CreateTaskModal;
