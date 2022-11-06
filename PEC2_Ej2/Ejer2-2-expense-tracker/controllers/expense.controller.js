/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class ExpenseController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindExpenseListChanged(this.onExpenseListChanged);
    this.view.bindAddExpense(this.handleAddExpense);
    this.view.bindEditExpense(this.service.expenses);
    this.view.bindeditUpdateWindow(this.handleEditExpense);
    this.view.bindDeleteExpense(this.handleDeleteExpense);

    // Display initial todos
    this.onExpenseListChanged(this.service.expenses);
  }

  onExpenseListChanged = expenses => {
    this.view.displayExpenses(expenses);
  };

  handleAddExpense = (expenseText, amountImport) => {
    this.service.addExpense(expenseText, amountImport);
  };

  handleEditExpense = (id, expenseText, amountImport) => {
    this.service.editExpense(id, expenseText, amountImport);
  };

  handleDeleteExpense = id => {
    this.service.deleteExpense(id);
  };

}
