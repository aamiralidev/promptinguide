import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const SideNavigation = ({
  chapters,
  selectedChapter,
  handleChapterSelect,
  toggleExpand,
  width = 180,
}) => {
  return (
    <ul
      className="d-flex flex-column gap-1"
      style={{ listStyle: "none", paddingLeft: "0.8rem" }}
    >
      {chapters.map((chapter) => (
        <li
          key={chapter.id}
          onClick={() => handleChapterSelect(chapter)}
          style={{ width: `${width}px` }}
        >
          <div
            className={`d-flex justify-content-between align-items-center hoverable-li pt-1 pb-1 ps-3 pe-3 rounded rounded-1 ${
              selectedChapter && selectedChapter.id === chapter.id
                ? "clicked"
                : ""
            }`}
          >
            <span>{chapter.title}</span>
            {chapter.hasChildren && (
              <BsChevronRight
                className={`arrow-icon p-1`}
                size={20}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleExpand(chapter);
                }}
                style={{
                  zIndex: 99,
                  transform: chapter.isExpanded
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                }}
              />
            )}
          </div>
          {chapter.isExpanded && chapter.hasChildren && chapter.children && (
            <div className="side-navigation-container">
              <SideNavigation
                chapters={chapter.children}
                selectedChapter={selectedChapter}
                handleChapterSelect={handleChapterSelect}
                toggleExpand={toggleExpand}
                width={width - 13}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SideNavigation;
