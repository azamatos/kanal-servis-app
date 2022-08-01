import * as React from 'react'
import { ICard } from "../types";

function Card({ title, author, company, photo, body }: ICard) {

  return (
    <div className="font-mono flex flex-col rounded-md border-8 border-[#27569C] p-4 justify-between w-[800px] h-[600px] ">
      <div className="flex flex-row h-[300px] justify-center items-center">
        <div className="w-[250px] h-[250px] flex items-center justify-center">
          <img
            className="w-[150px} h-[150px]"
            src={photo}
            alt={'SOS'} />
        </div>
        <div className="flex flex-col gap-5 justify-center w-full">
          <div className="flex text-3xl">
            <span className="font-bold w-[150px]">Author:</span>
            {author}
          </div>
          <div className="flex text-3xl">
            <span className="font-bold w-[150px]">Company:</span>
            {company}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 h-[300px]">
        <div className="flex text-3xl text-justify">
          <span className="font-bold w-[100px]">Title:</span>
          {title}
        </div>
        <div className="flex font-bold text-3xl text-justify">
          {body}
        </div>
      </div>
    </div >
  );
}

export default Card;