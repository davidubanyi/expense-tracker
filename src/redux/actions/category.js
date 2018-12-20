export const addCategory = (categoryGroup = "random") => ({
  type: "ADD_CATEGORY",
  categoryGroup
});

export const removeCategory = categoryGroup => ({
  type: "REMOVE_CATEGORY",
  categoryGroup
});
