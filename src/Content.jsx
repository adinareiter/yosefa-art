import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Bio } from "./Bio";
import { Contact } from "./Contact";
import { PaintingsIndex } from "./PaintingsIndex";
import { PaintingShow } from "./PaintingShow";
import { OriginalsIndex } from "./OriginalsIndex";
import { SemiOriginalsIndex } from "./SemiOriginalsIndex";
import { WaterdaleCollabsIndex } from "./WaterdaleCollabsIndex";
import Modal from "./Modal";
import AdminLogIn from "./AdminLogIn";
import AdminPage from "./AdminPage";
import AdminPaintingShow from "./AdminPaintingShow";
import CategoriesNew from "./CategoriesNew";
import CategoriesShow from "./CategoriesShow";

export function Content() {
  const [paintings, setPaintings] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isPaintingsShowVisible, setIsPaintingsShowVisible] = useState(false);
  const [isCategoryShowVisible, setIsCategoryShowVisible] = useState(false);
  const [currentPainting, setCurrentPainting] = useState({});
  const [currentCategory, setCurrentCategory] = useState({});

  const handleIndexPaintings = () => {
    axios.get("/paintings.json").then((response) => {
      setPaintings(response.data);
    });
  };
  const handleIndexCategories = () => {
    axios.get("/categories.json").then((response) => {
      setCategories(response.data);
    });
  };

  const handleCreateCategory = (params, successCallback) => {
    console.log("handleCreateCategory", params);
    axios.post("/categories.json", params).then((response) => {
      setCategories([...categories, response.data]);
      successCallback();
    });
  };

  const handleShowPainting = (painting) => {
    setIsPaintingsShowVisible(true);
    setCurrentPainting(painting);
  };
  const handleClose = () => {
    setIsPaintingsShowVisible(false);
    window.location.reload();
  };

  const handleShowCategory = (category) => {
    setIsCategoryShowVisible(true);
    setCurrentCategory(category);
  };

  const handleUpdatePainting = (id, params, successCallback) => {
    axios.patch(`/paintings/${id}.json`, params).then((response) => {
      setPaintings(
        paintings.map((painting) => {
          if (painting.id === response.data.id) {
            return response.data;
          } else {
            return painting;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  // const handleUpdateCategory = (id, params, successCallback) => {
  //   axios
  //     .patch(`/categories/${id}.json`, params)
  //     .then((response) => {
  //       setCategories(
  //         categories.map((cat) => {
  //           return cat.id === response.data.id ? response.data : cat;
  //         })
  //       );
  //       successCallback();
  //       setIsCategoryShowVisible(false); // Close modal after editing
  //     })
  //     .catch((error) => {
  //       console.error("Error updating category:", error);
  //       // Handle error
  //     });
  // };

  const handleUpdateCategory = (id, params, successCallback) => {
    console.log("handleUpdateCategory", params);
    axios.patch(`/categories/${id}.json`, params).then((response) => {
      setCategories(
        categories.map((category) => {
          if (category.id === response.data.id) {
            return response.data;
          } else {
            return category;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyPainting = (painting) => {
    axios.delete(`/paintings/${painting.id}.json`).then((response) => {
      setPaintings(paintings.filter((i) => i.id !== painting.id));
      handleClose();
    });
  };

  const handleDestroyCategory = (category) => {
    console.log("handleDestroyCategory", category);
    axios.delete(`/categories/${category.id}.json`).then((response) => {
      setCategories(categories.filter((i) => i.id !== category.id));
      handleClose();
    });
  };

  useEffect(() => {
    handleIndexPaintings();
  }, []);
  useEffect(() => {
    handleIndexCategories();
  }, []);

  return (
    <Router>
      <div className="content-container content">
        <Routes>
          <Route path="/" element={<Bio paintings={paintings} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<PaintingsIndex paintings={paintings} />} />
          <Route path="painting/:id" element={<PaintingShow painting={currentPainting} />} />
          <Route path="/originals" element={<OriginalsIndex paintings={paintings} />} />
          <Route path="/semi-originals" element={<SemiOriginalsIndex paintings={paintings} />} />
          <Route path="/waterdale-collabs" element={<WaterdaleCollabsIndex paintings={paintings} />} />
          <Route path="/admin-login" element={<AdminLogIn />} />
          <Route
            path="/admin-page"
            element={
              <AdminPage
                paintings={paintings}
                onPaintingShow={handleShowPainting}
                categories={categories}
                onShowCategory={handleShowCategory}
              />
            }
          />
          <Route path="/category-new" element={<CategoriesNew onCreateCategory={handleCreateCategory} />} />
        </Routes>
        <Modal show={isPaintingsShowVisible} onClose={handleClose}>
          <AdminPaintingShow
            painting={currentPainting}
            onUpdatePainting={handleUpdatePainting}
            onDestroyPainting={handleDestroyPainting}
          />
        </Modal>
      </div>

      <Modal show={isCategoryShowVisible} onClose={handleClose}>
        <CategoriesShow
          category={currentCategory}
          onUpdateCategory={handleUpdateCategory}
          onDestroyCategory={handleDestroyCategory}
        />
      </Modal>
    </Router>
  );
}
