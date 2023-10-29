import React, { useState } from "react";
import "./Main.scss";
import frame1 from "../Body/assets/frame1.png";
import frame2 from "../Body/assets/frame2.png";
import frame3 from "../Body/assets/frame3.png";
// import frame4 from "../Body/assets/frame4.png";
const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recent");
  const [opensuggestion, setOpensuggestion] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const suggestiontoggle = () => {
    setOpensuggestion(!opensuggestion);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const [categories, setCategories] = useState({
    Announcement: true,
    "Educate & Inform": true,
    Invitation: true,
    Ocassions: true,
  });
  const isAnyCategoryChecked = Object.values(categories).some((value) => value);

  const categoriesArray = Object.keys(categories).map((key) => ({
    key,
    name: key,
  }));

  // Sort the categories based on the selected option
  if (selectedOption === "A to Z") {
    categoriesArray.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedOption === "Z to A") {
    categoriesArray.sort((a, b) => b.name.localeCompare(a.name));
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setOpensuggestion(!opensuggestion);
  };

  return (
    <div className="main_body">
      <div className="main_section">
        <div className="category_section">
          <div className="category_headline">Categories</div>
          <div className="categories">
            {Object.keys(categories).map((category) => (
              <div key={category} className="category">
                <input
                  type="checkbox"
                  checked={categories[category]}
                  onChange={() => {
                    setCategories({
                      ...categories,
                      [category]: !categories[category],
                    });
                  }}
                />
                <div>{category}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="template_section">
          <div className="search_filter">
            <div className="searchbar">
              <input
                onClick={suggestiontoggle}
                type="text"
                placeholder="Search email templates"
                value={searchValue} // Bind input value to the state
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <div className="suggestionbox">
                {opensuggestion &&
                  Object.keys(categories).map((category) => (
                    <div
                      key={category}
                      className="suggestions"
                      onClick={() => handleSuggestionClick(category)}
                    >
                      {category}
                    </div>
                  ))}
              </div>
            </div>
            <div className="filter-section">
              {isAnyCategoryChecked && (
                <div className="filtermenu" onClick={toggleDropdown}>
                  <div className="sortheading">
                    Sort by: <div>{selectedOption}</div>
                  </div>
                  {isOpen && (
                    <div className="filtered_options">
                      <ul className="options">
                        <li onClick={() => handleOptionClick("Recent")}>
                          Recent
                        </li>
                        <li onClick={() => handleOptionClick("A to Z")}>
                          A to Z
                        </li>
                        <li onClick={() => handleOptionClick("Z to A")}>
                          Z to A
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="templates_section">
              {categoriesArray.map((category) =>
                categories[category.key] &&
                (searchValue === "" ||
                  category.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())) ? (
                  <div key={category.key} className="each_category">
                    <div className="template_heading">{category.name}</div>
                    <div className="image_section">
                      <div className="image_frame">
                        <div>
                          <img src={frame1} alt="/" />
                          <div>Featured Service</div>
                        </div>
                        <button>Use This</button>
                      </div>
                      <div className="image_frame">
                        <div>
                          <img src={frame2} alt="/" />
                          <div>Featured Service</div>
                        </div>
                        <button>Use This</button>
                      </div>
                      <div className="image_frame">
                        <div>
                          <img src={frame3} alt="/" />
                          <div>Featured Service</div>
                        </div>
                        <button>Use This</button>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
