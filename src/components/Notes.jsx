import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteNote, resetNotes } from "../redux/noteSlice.js";
import toast from "react-hot-toast";

const Notes = () => {
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(noteId){
    dispatch(DeleteNote(noteId));
  }

  function handleReset(){
    toast.success("Notes successfully reset")
    dispatch(resetNotes());
  }

  return (
    <div>
      <div className="flex flex-r gap-20 place-content-between">
        <input
          type="search"
          className="p-2 rounded-2xl mt-2"
          placeholder="Enter Title for the Note"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="p-2 rounded-2xl mt-2" onClick={handleReset}>
          Reset Notes
        </button>
      </div>
      <div>
        {filteredData.length > 0 &&
          filteredData.map((note) => {
            return (
              <div key={note.id} className="border mt-4 flex flex-col rounded-2xl gap-3">
                <div>
                  {note.title}
                </div>
                <div>
                  {note.content}
                </div>
                <div className="flex flex-row place-content-between pr-1 pl-1 pb-1">
                  <div className="buttons">
                    <button>
                      <a href={`/?id=${note.id}`} className="links">
                        Edit
                      </a>
                    </button>
                  </div>

                  <div className="buttons">
                    <button>
                      <a href={`/Notes/${note.id}`} className="links">
                        View
                      </a>
                    </button>
                  </div>

                  <div className="buttons">
                    <button onClick={()=> handleDelete(note.id)}>
                      Delete
                    </button>
                  </div>

                  <div className="buttons">
                    <button onClick={()=> {
                    navigator.clipboard.writeText(note.content);
                    toast.success("Copied to Clipboard");}}>
                      Copy
                    </button>
                  </div>

                  <div className="buttons">
                    <button onClick={()=> {
                    navigator.clipboard.writeText(`${window.location.href}/${note.id}`);
                    toast.success("Link Copied");}}>
                      Share
                    </button>
                  </div>

                </div>
                <div>
                  {note.createdAt}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default Notes;
