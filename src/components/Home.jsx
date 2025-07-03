import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addNote, updateNote } from "../redux/noteSlice.js";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId = searchParams.get("id");
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    if(noteId){
      const found = notes.find((p)=>p.id===noteId);
      setTitle(found.title);
      setContent(found.content);
    }
  }, [noteId,notes])
  

  function createNote(){
    const note = {
      title: title,
      content: content,
      id: noteId || Date.now().toString(),
      createdAt: new Date(new Date().toISOString()).toLocaleString(),
    };

    if(noteId){
      dispatch(updateNote(note));
    }

    else{
      dispatch(addNote(note));
    }

    setTitle("");
    setContent("");
    setSearchParams({});
  }

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-r gap-4 place-content-between">
        <input
          type="text"
          className="p-2 rounded-2xl mt-2"
          placeholder="Enter Title for your Note"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick = {createNote} className="p-2 rounded-2xl mt-2">
          {noteId ? "Update Note" : "Create New Note"}
        </button>
      </div>

      <div>
        <textarea
          className="min-h-80 min-w-96 p-2 rounded-2xl mt-2"
          placeholder="Enter Content for your Note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
