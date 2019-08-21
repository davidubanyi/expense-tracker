import db from "../../firebase/firebase";

export const addCategory = categoryGroup => ({
  type: "ADD_CATEGORY",
  categoryGroup
});

export const startAddCategory = (categoryGroup = "random") => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const category = { groupName: categoryGroup };
    dispatch(addCategory(categoryGroup));
    db.collection(`users/${uid}/groups`)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return db
      .collection(`users/${uid}/groups`)
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
        dispatch(setCategories(['airtime', 'transportation', 'food', 'clothing',...categoriesGroup]));
      });
  };
};
