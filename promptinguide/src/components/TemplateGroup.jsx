import React from "react";
import TemplateCard from "./TemplateCard";

const TemplateGroup = () => {
  const templates = [
    {
      id: 1,
      category: "input",
      title: "Meta Language Creation",
      intention:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      motivation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      structure:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      example:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      consequences:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
    },
    {
      id: 2,
      category: "output",
      title: "Meta Language Creation",
      intention:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      motivation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      structure:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      example:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      consequences:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
    },
    {
      id: 3,
      category: "error",
      title: "Meta Language Creation",
      intention:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      motivation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      structure:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      example:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      consequences:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
    },
    {
      id: 4,
      category: "context",
      title: "Meta Language Creation",
      intention:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      motivation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      structure:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      example:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      consequences:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
    },
    {
      id: 5,
      category: "improvement",
      title: "Meta Language Creation",
      intention:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      motivation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      structure:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      example:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      consequences:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
    },
    {
      id: 6,
      category: "interaction",
      title: "Meta Language Creation",
      intention:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      motivation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      structure:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      example:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
      consequences:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat dolore, doloribus tempore repellat itaque quisquam magni sed ipsam ab recusandae minima deserunt ipsum enim. Tempora ab assumenda mollitia reprehenderit animi praesentium eligendi, suscipit excepturi harum aspernatur aliquam fugiat in enim cupiditate perferendis facilis, repellendus magnam numquam odio deleniti incidunt!",
    },
  ];

  return (
    <div className="d-flex flex-wrap gap-4 mt-3">
      {templates.map((template) => (
        <TemplateCard key={template.id} templateDetails={template} />
      ))}
    </div>
  );
};

export default TemplateGroup;
