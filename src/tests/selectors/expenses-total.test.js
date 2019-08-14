import selectExpensesTotal from "../../redux/selectors/expenses-total"
import expenses from "../fixtures/filters";


test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([])
    expect(res).toBe(0)
})

test ('should add a single expense', () => {
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(195)
})

test ('should add a multiple expense', () => {
    const res = selectExpensesTotal([expenses])
    expect(res).toBe(114195)
})