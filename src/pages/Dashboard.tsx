import React from "react";
import ListItems from "../ui/ListItems.js";

export default function Dashboard() {
  return (
    <div className="flex gap-6 justify-between p-6">
      <div className="w-[827px]">
        <div className="flex flex-col gap-6 w-full h-[368px]">
          <ListItems />
          <ListItems />
        </div>
      </div>
      <div className="w-[455px] h-[368px]">
        <ListItems />
      </div>
    </div>
  );
}
