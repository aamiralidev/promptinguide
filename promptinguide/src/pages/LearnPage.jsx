import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import SideNavigation from "../components/SideNavigation";

const LearnPage = () => {
  // State to keep track of the selected chapter

  // Dummy chapters data (replace this with your actual chapter data)
  const chapters_u = [
    {
      id: 1,
      title: "Chapter 1",
      content: "Content for Chapter 1...",
    },
    {
      id: 2,
      title: "Chapter 2",
      content: "Content for Chapter 2...",
      hasChildren: true,
      children: [
        {
          id: 4,
          title: "Chapter 3",
          content: "Content for Chapter 3...",
          hasChildren: true,
        },
        { id: 5, title: "Chapter 3", content: "Content for Chapter 3..." },
        { id: 6, title: "Chapter 3", content: "Content for Chapter 3..." },
      ],
    },
    {
      id: 3,
      title: "Chapter 3",
      content: "Content for Chapter 3...",
      hasChildren: true,
      children: [
        { id: 4, title: "Chapter 3", content: "Content for Chapter 3..." },
        { id: 5, title: "Chapter 3", content: "Content for Chapter 3..." },
        { id: 6, title: "Chapter 3", content: "Content for Chapter 3..." },
      ],
    },
    { id: 4, title: "Chapter 3", content: "Content for Chapter 3..." },
    { id: 5, title: "Chapter 3", content: "Content for Chapter 3..." },
    { id: 6, title: "Chapter 3", content: "Content for Chapter 3..." },
    { id: 7, title: "Chapter 3", content: "Content for Chapter 3..." },
    { id: 8, title: "Chapter 3", content: "Content for Chapter 3..." },
    { id: 9, title: "Chapter 3", content: "Content for Chapter 3..." },
    { id: 10, title: "Chapter 3", content: "Content for Chapter 3..." },
  ];

  // const toggleExpand = (chapter) => {
  //   chapter.isExpanded == true
  //     ? (chapter.isExpanded = false)
  //     : (chapter.isExpanded = true);

  //   console.log(chapter);
  // };

  const [chapters, setChapters] = useState(chapters_u);
  const [selectedChapter, setSelectedChapter] = useState(
    chapters.length > 0 ? chapters[0] : "Nothing to learn"
  );
  const updateChapters = (prevChapters, chapterToUpdate) => {
    const updateNestedChapters = (chapters) => {
      return chapters.map((chapter) => {
        if (chapter.id === chapterToUpdate.id) {
          return {
            ...chapter,
            isExpanded: !chapter.isExpanded,
          };
        } else if (chapter.children) {
          return {
            ...chapter,
            children: updateNestedChapters(chapter.children),
          };
        } else {
          return chapter;
        }
      });
    };

    // Call the inner function with the top-level chapters
    return updateNestedChapters(prevChapters);
  };

  const toggleExpand = (chapter) => {
    // Update the state immutably using updateChapters function
    setChapters((prevChapters) => {
      return updateChapters(prevChapters, chapter);
    });
  };

  // Function to handle chapter selection
  const handleChapterSelect = (chapter) => {
    toggleExpand(chapter);
    // console.log("chapter", chapter);
    setSelectedChapter(chapter);
    console.log(chapter);
  };

  return (
    <div className="container-fluid d-flex w-100 mt-5">
      <div>
        <SideNavigation
          chapters={chapters}
          selectedChapter={selectedChapter}
          handleChapterSelect={handleChapterSelect}
          toggleExpand={toggleExpand}
        />
      </div>
      <div className="p-5">{selectedChapter.content}</div>
    </div>
  );
};

export default LearnPage;
