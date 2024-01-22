"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/utils/lib/redux";
import { increment, decrement } from "@/utils/lib/redux/counter/slice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-[8px]">
      <button
        className="bg-black text-white p-1 w-[30px] rounded-md grid place-items-center"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span className="text-lg text-black">{count}</span>
      <button
        className="bg-black text-white p-1 w-[30px] rounded-md grid place-items-center"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
}
