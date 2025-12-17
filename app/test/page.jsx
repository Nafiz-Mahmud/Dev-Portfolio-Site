"use client";
import { motion, stagger } from "motion/react";
import { useRef } from "react";
export default function TestPage() {
  const ref = useRef(null);
  const users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "Alice", age: 28 },
    { id: 5, name: "Tom", age: 32 },
  ];
  return (
    <div className="text-center text-white text-xl">
      <h1>This is a test page.</h1>
      <div className="space h-[50rem] w-full bg-red-500/30"></div>
      <div className="h-[60rem] flex flex-col items-center justify-center">
        <motion.h2
          className="text-4xl mb-32"
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: -50, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          This will appear
        </motion.h2>
        <div className="users flex items-center justify-around gap-8">
          {users.map((user, index) => (
            <motion.div
              className="user p-8 bg-lightgray-opacity-2 rounded-xl"
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: -50, opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: index * 0.1,
                delay: (users.length - 1 - index) * 0.1, //backward//
              }}
              viewport={{
                once: false,
                margin: "0px 0px -200px 0px",
              }}
              key={user.id}
            >
              <p>
                {user.name} - {user.age}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="space h-[50rem] w-full bg-red-500/30"></div>
    </div>
  );
}
