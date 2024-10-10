import React from "react";
import { useBearStore } from "../store";
import { useMainStore } from "../mainStore";

function Test() {
//   const bears = useBearStore((state) => state.bears);
//   const addABear = useBearStore((state) => state.addABear);

  const items = useMainStore((state) => state.items);
  const addItem = useMainStore((state) => state.addItem)
console.log(items)
  return (
    <div>
      <button
        onClick={() => {
        //   addABear(100);
        }}
      >
  {/* {bears} */}
      </button>
    </div>
  );
}

export default Test;
