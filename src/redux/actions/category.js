import db from "../../firebase/firebase";

export const addCategory = categoryGroup => ({
  type: "ADD_CATEGORY",
  categoryGroup
});

export const startAddCategory = (categoryGroup = "random") => {
  return dispatch => {
    const category = { groupName: categoryGroup };
    dispatch(addCategory(categoryGroup));
    db.collection("groups")
      .add(category)
      .then(() => {
        console.log('group added worked')
      });
  };
};

export const removeCategory = categoryGroup => ({
  type: "REMOVE_CATEGORY",
  categoryGroup
});

export const setCategories = categoryGroup => ({
  type: "SET_CATEGORIES",
  categoryGroup
});

//Start Set Categories
export const startSetCategories = () => {
  return dispatch => {
    return db
      .collection("groups")
      .get()
      .then(querySnapshot => {
        const categories = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          categories.push({ ...data });
        });
        const categoriesGroup = [];
        categories.map(category => {
          return categoriesGroup.push(category.groupName);
        });
        dispatch(setCategories(categoriesGroup));
      });
  };
};
