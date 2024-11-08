import React from 'react';
import { toast } from 'sonner';

type Props = {
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  className?: string;
};

const EditButton = ({ editMode, setEditMode, className }: Props) => {
  const handleEditMode = () => {
    if (!editMode) {
      toast.info('Layout editing mode enabled');
    } else {
      toast.info('Layout editing mode disabled');
    }

    setEditMode(!editMode);
  };

  return (
    <button
      onClick={handleEditMode}
      className={`${className || ''} flex items-center gap-2`}
    >
      {editMode ? 'Done' : 'Edit'}

      {editMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      )}
    </button>
  );
};

export default EditButton;
