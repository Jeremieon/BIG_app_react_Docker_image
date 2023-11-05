import { useState, useEffect, createContext } from "react";
import axios from "axios";

import AddNote from "./AddNote";
import NotesList from "./NotesList";

export const NotesListUpdateFunctionContext = createContext(null);

export default function NoteApp() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
      const getNotes = async () => {
              // The URL of the backend
        const API_URL = "http://localhost:8000";
        const { data } = await axios.get(`${API_URL}/api/notes`);
        setNotes(data);
      };
      getNotes();
    }, []);
    return (
      <NotesListUpdateFunctionContext.Provider value={setNotes}>
        <div>
          <h1 id="app-title">Notes App</h1>
          <AddNote />
          <NotesList notes={notes} />
        </div>
      </NotesListUpdateFunctionContext.Provider>
    );
  }
