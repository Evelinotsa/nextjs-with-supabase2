"use client"
import { useEffect, useState } from 'react';
import supabase from '../../supabase';

// Määra tüübid
type Todo = {
  id: number;
  title: string;
  priority: string;
  created_at: string;
  updated_at: string;
  deleted: boolean;
};

export default function SupabaseComponent() {
  // Kasutame useState tüübitamist
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      // Tüübita päringu tulemuse tüüp ainult .select() meetodis
      let { data, error } = await supabase
        .from('todos') // Tabeli nimi stringina
        .select('*');  // Valime kõik väljad

      if (error) {
        console.error('Viga andmete toomisel:', error);
      } else {
        setTodos(data || []); // Seadistame andmed või tühja massiivi
      }
    };

    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
