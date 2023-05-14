import React from "react";
import Image from "next/image";
import { Plus } from "lib/Icons";
import { Draggable } from "@hello-pangea/dnd";

interface Props {
  data: any; //wait
  index: number;
}

function CardItem({ data, index }: Props) {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-md p-3 m-3 mt-0 last:mb-0 flex-none"
        >
          <label
            className={`px-2 py-1 rounded text-white text-sm
              ${
                data.priority === 0
                  ? "bg-blue-500"
                  : data.priority === 1
                  ? "bg-green-500"
                  : "bg-red-500"
              }
              `}
          >
            {data.priority === 0
              ? "Low"
              : data.priority === 1
              ? "Medium"
              : "High"}
          </label>
          <h5 className="text-md my-3 text-lg leading-6">{data.title}</h5>
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <span className="flex space-x-1 items-center">
                <div className="w-4 h-4 text-gray-500" />
                <span>{data.chat}</span>
              </span>
              <span className="flex space-x-1 items-center">
                <div className="w-4 h-4 text-gray-500" />
                <span>{data.attachment}</span>
              </span>
            </div>

            <ul className="flex space-x-3">
              {data.assignees.map((a: any, index: number) => {
                return (
                  <li key={index}>
                    <Image
                      alt={"hai"}
                      src={a.avt}
                      width="36"
                      height="36"
                      objectFit="cover"
                      className=" rounded-full "
                    />
                  </li>
                );
              })}
              <li>
                <button
                  className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center
                    rounded-full"
                >
                  <Plus />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CardItem;
