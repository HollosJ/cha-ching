import React, { useRef, useState } from 'react';
import { toast } from 'sonner';

type ListItem = {
  title: string;
  cost: '' | number;
};

type Props = {
  items: ListItem[];
  setItems: (items: ListItem[]) => void;
  className?: string;
};

const CostListInput = ({ items, setItems, className }: Props) => {
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState(0);

  return (
    <div className={` space-y-4 ${className ?? ''}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="">{item.title}</div>
          <div className="">£{item.cost ? item.cost.toFixed(2) : 0}</div>
          <button
            onClick={() => {
              const newItems = [...items];
              newItems.splice(index, 1);
              setItems(newItems);
            }}
            className="text-red-500 justify-self-end hover:text-red-700"
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}

      <div className="grid grid-cols-4 gap-4">
        <input
          type="text"
          className="col-span-2 input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          className="input"
          placeholder="Cost"
          onChange={(e) => setCost(Number(e.target.value))}
          step={0.01}
        />

        <button
          className="button button--primary"
          type="button"
          onClick={() => {
            if (!title || !(cost > 0)) {
              toast.error('Please enter a valid title and cost.');

              return;
            }

            setItems([...items, { title, cost }]);

            setTitle('');
            setCost(0);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CostListInput;
