import db from "../../firebase/firebase"

export const addCategory = (categoryGroup) => ({
  type: "ADD_CATEGORY",
  categoryGroup
});

export const startAddCategory = (categoryGroup = "random") => {
  return dispatch => {
    const category = {groupName: categoryGroup }
    db.collection('groups').add(category).then(() => {
      dispatch(addCategory(categoryGroup))
    })
  }
}

export const removeCategory = categoryGroup => ({
  type: "REMOVE_CATEGORY",
  categoryGroup
});

export const setCategories = (categoryGroup) => ({
  type: "SET_CATEGORIES",
  categoryGroup
})

