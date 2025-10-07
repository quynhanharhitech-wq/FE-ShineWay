import React from "react";
import ListItem from "../ui/ListItem";

export default function Dashboard() {
  return (
    <div className="flex gap-6 justify-between p-6">
      <div className="w-[827px]">
        <div className="flex flex-col gap-6 w-full h-[368px]">
          <ListItem />
          <ListItem />
        </div>
      </div>
      <div className="w-[455px] h-[368px]">
        <ListItem />
      </div>
    </div>
  );
}
