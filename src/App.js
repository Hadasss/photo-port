import React, { useState } from "react";
import About from "./components/About/index";
import Nav from "./components/Nav/index";
import Gallery from "./components/Gallery/index";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <ContactForm></ContactForm>
      {/* New props also cause components to re-render. So even though the setter in App.js doesn’t cause its children to re-render, the fact that its prop changed does. */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
