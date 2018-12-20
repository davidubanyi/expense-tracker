import moment from "moment";

//get visible budgets
export default (budgets, { text, sortBy, startDate, endDate, group }) => {
  return budgets
    .filter(budget => {
      const createdAtMoment = moment(budget.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = budget.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const groupMatch = budget.group
        .toLowerCase()
        .includes(group.toLowerCase());

      return startDateMatch && endDateMatch && textMatch && groupMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
