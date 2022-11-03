/**
 * @class View
 *
 * Visual representation of the model.
 */
class ExpenseView {
  constructor() {
    

    this.balance = this.getElement('#balance');
    this.money_plus = this.getElement('#money-plus');
    this.money_minus = this.getElement('#money-minus');
    this.list = this.getElement('#list');
    this.form = this.getElement('#form');
    this.text = this.getElement('#text');
    this.amount = this.getElement('#amount');
    
    
    //this._initLocalListeners();
  }

  //Recuperem el text del concepte
  get _text() {
    return this.text.value;
  }

  //Recuperem l'import del concepte
  get _amount() {
    return this.amount.value;
  }

  //recuperem saldo
  get _balance(){
    return this.balance;
  }

  //recuperem ingressos
  get _moneyPlus(){
    return this.money_plus;
  }

  //recuperem ingressos
  get _moneyMinus(){
    return this.money_minus;
  }

  //Reiniciem el text del quadre de text
  _resetInput() {
    this.text.value = "";
  }

  //posem a cero l'import del concepte
  _resetAmount() {
    this.amount.value = "";
  }

  updateBalance(total){
    this.balance.innerText = `$${total}`;
  }

  createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  displayExpenses(expenses) {
    // Delete all nodes
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
    var total;
    total = 0;
    // Show default message
      // Create nodes
      expenses.forEach(expense => {
         // Get sign
        const sign = expense.amount < 0 ? '-' : '+';
        total = total + expense.amount*1;
        const item = this.createElement('li');

        // Add class based on value
          item.id = expense.id;
          item.classList.add(expense.amount < 0 ? 'minus' : 'plus');

          item.innerHTML = `
            ${expense.text} <span>${sign}${Math.abs(
            expense.amount
            )}</span> <button class="delete-btn">x</button>
            </span> <button class="update-btn">..</button>
            `;
            
        this.list.appendChild(item);
              
      });
      
      this.updateBalance(total.toFixed(2));

    // Debugging
    console.log(expenses);
  }

 /* _initLocalListeners() {
    this.list.addEventListener("input", event => {
      if (event.target.className === "editable") {
        this._temporaryExpenseText = event.target.innerText;
      }
    });
  }*/

  bindAddExpense(handler) {
    this.form.addEventListener("submit", event => {
      event.preventDefault();

      if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a text and amount');
      }else{
        handler(this._text, this._amount);
        this._resetInput();
        this._resetAmount();
      }
       
    });
  }

  bindDeleteExpense(handler) {
    this.list.addEventListener("click", event => {
      if (event.target.className === "delete-btn") {
        const id = event.target.parentElement.id;
        handler(id);
      }
    });
  }

  bindEditExpense(expenses,handler) {
    this.list.addEventListener("click", event => {
      if (event.target.className === "update-btn") {
        const activeText = expenses.filter(({id}) => id === event.target.parentElement.id);
        console.log(activeText);
        console.log(expenses);
        const text=prompt("concepte",activeText[0]["text"]);
        const amount=prompt("import",activeText[0]["amount"]);
        handler(activeText[0]["id"], text, amount);
      }
    });
  }
}
