import React from "react";
import { useSelector } from "react-redux";
import { useParams} from "react-router-dom";

const ViewNote = () => {
  const {id} = useParams();
  const allNotes = useSelector((state)=>state.note.notes);
  const note = allNotes.find((p)=>p.id===id);
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-r gap-4 place-content-between">
        <input
          type="text"
          className="p-2 rounded-2xl mt-2"
          placeholder="Enter Title for your Note"
          value={note.title}
          disabled
        />
      </div>

      <div>
        <textarea
          className="min-h-80 min-w-96 p-2 rounded-2xl mt-2"
          placeholder="Enter Content for your Note"
          value={note.content}
          disabled
        ></textarea>
      </div>
    </div>
  )
}

export default ViewNote
