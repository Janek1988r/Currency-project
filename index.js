/*

const removeIncome = (e) => {
  const incomeElement = e.currentTarget;
  const incomeElementParten = incomeElement.closest(".budget-element");
  incomeElementParten.remove();

  const removedId = incomeElementParten.id;
  console.log(removedId);
  incomes = incomes.filter((item) => item.id != removedId);

  let sumOfIncomes = calculateSum(incomes, "iValue");
  incomesSum.innerHTML = `Suma przychodów: ${sumOfIncomes} PLN`;
};

const changeInputValues = (editedID, editedName, editedValue, event) => {
  const divById = document.getElementById(editedID);
  const elementsToUpdate = divById.querySelectorAll(".budget-position span");
  let index = incomes.findIndex((item) => item.id == editedID);
  console.log("index", index);
  if (index != -1) {
    if (editedName != "") {
      elementsToUpdate[0].innerHTML = `${editedName}: `;
      incomes[index].title = editedName;
    }
    if (editedValue != "") {
      elementsToUpdate[1].innerHTML = `${editedValue} PLN`;
      incomes[index].iValue = parseFloat(editedValue);
    }
    let sumOfIncomes = calculateSum(incomes, "iValue");
    incomesSum.innerHTML = `Suma przychodów: ${sumOfIncomes} złotych`;
    console.log("Przychody", sumOfIncomes);
  } else {
    index = outgoes.findIndex((item) => item.id == editedID);
    if (editedName != "") {
      elementsToUpdate[0].innerHTML = `${editedName}: `;
      outgoes[index].title = `${editedName} złotych`;
    }
    if (editedValue != "") {
      elementsToUpdate[1].innerHTML = editedValue;
      outgoes[index].oValue = parseFloat(editedValue);
    }
    let sumOfOutgoes = calculateSum(outgoes, "oValue");
    outgoesSum.innerHTML = `Suma przychodów: ${sumOfOutgoes} PLN`;
    console.log("Wydatki", sumOfOutgoes);
  }
  const toRemove = event.currentTarget;
  const toRemoveParent = toRemove.closest(".editing");
  toRemoveParent.remove();
};

const getEditedValues = (editedButton) => {
  const getEditedName = document.querySelector("#edited-name");
  const getEditedValue = document.querySelector("#edited-value");
  const getEditedId = editedButton.closest(".budget-element");

  const editedId = getEditedId.id;
  const editedName = getEditedName.value;
  const editedValue = getEditedValue.value;

  changeInputValues(editedId, editedName, editedValue, event);
};

const createIncomeEditForm = (e) => {
  e.preventDefault();
  const element = e.currentTarget;
  const elementParten = element.closest(".budget-element");

  const divForEdit = document.createElement("div");
  divForEdit.classList.add("editing");

  const formForEdit = document.createElement("form");
  formForEdit.setAttribute = ("id", "form-for-edit");

  const editedName = document.createElement("input");
  editedName.setAttribute("id", "edited-name");
  editedName.setAttribute("type", "text");
  editedName.setAttribute("placeholder", "Nowa Nazwa");

  const editedValue = document.createElement("input");
  editedValue.setAttribute("id", "edited-value");
  editedValue.setAttribute("type", "number");
  editedValue.setAttribute("ster", "0.01");
  editedValue.setAttribute("placeholder", "Nowa kwota");

  const editedButton = document.createElement("button");
  editedButton.innerHTML = "Zmień";
  editedButton.setAttribute("id", "form-edit-button");
  editedButton.setAttribute("type", "submit");
  editedButton.classList.add("button");

  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Anuluj";
  cancelButton.setAttribute("id", "cancel-button");
  cancelButton.setAttribute("type", "button");
  cancelButton.classList.add("button");

  if (isEdited == false) {
    formForEdit.appendChild(editedName);
    formForEdit.appendChild(editedValue);
    formForEdit.appendChild(editedButton);
    formForEdit.appendChild(cancelButton);
    divForEdit.appendChild(formForEdit);
    elementParten.appendChild(divForEdit);

    cancelButton.addEventListener("click", () => {
      const canceledList = cancelButton.closest(".editing");
      canceledList.remove();
      isEdited = false;
    });

    editedButton.addEventListener("click", function (event) {
      event.preventDefault();
      getEditedValues(editedButton);
      isEdited = false;
    });
  }
  let sumOfIncomes = calculateSum(incomes, "iValue");
  incomesSum.innerHTML = `Suma przychodów: ${sumOfIncomes} PLN`;
  isEdited = true;
};

const createOutgoEditForm = (eve) => {
  eve.preventDefault();
  const element = eve.currentTarget;
  const elementParten = element.closest(".budget-element");

  const divForOutgoEdit = document.createElement("div");
  divForOutgoEdit.classList.add("editing");

  const formForEdit = document.createElement("form");
  formForEdit.setAttribute = ("id", "form-for-edit");

  const editedName = document.createElement("input");
  editedName.setAttribute("id", "edited-name");
  editedName.setAttribute("type", "text");
  editedName.setAttribute("placeholder", "Nowa Nazwa");

  const editedValue = document.createElement("input");
  editedValue.setAttribute("id", "edited-value");
  editedValue.setAttribute("type", "number");
  editedValue.setAttribute("ster", "0.01");
  editedValue.setAttribute("placeholder", "Nowa kwota");

  const editedButton = document.createElement("button");
  editedButton.innerHTML = "Zmień";
  editedButton.setAttribute("id", "form-edit-button");
  editedButton.setAttribute("type", "submit");
  editedButton.classList.add("button");

  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Anuluj";
  cancelButton.setAttribute("id", "cancel-button");
  cancelButton.setAttribute("type", "button");
  cancelButton.classList.add("button");

  if (isEdited == false) {
    formForEdit.appendChild(editedName);
    formForEdit.appendChild(editedValue);
    formForEdit.appendChild(editedButton);
    formForEdit.appendChild(cancelButton);
    divForOutgoEdit.appendChild(formForEdit);
    elementParten.appendChild(divForOutgoEdit);

    cancelButton.addEventListener("click", () => {
      const canceledList = cancelButton.closest(".editing");
      canceledList.remove();
      isEdited = false;
    });

    editedButton.addEventListener("click", function (event) {
      event.preventDefault();
      getEditedValues(editedButton);
      isEdited = false;
    });
  }
  let sumOfOutgoes = calculateSum(outgoes, "oValue");
  outgoesSum.innerHTML = `Suma wydatków: ${sumOfOutgoes} PLN`;
  isEdited = true;
};

const renderIncome = (income) => {
  const buttonEdit = document.createElement("button");
  buttonEdit.type = "button";
  buttonEdit.name = "buttonEdit";
  buttonEdit.innerText = "Edytuj";
  buttonEdit.classList.add("button");

  const buttonRemove = document.createElement("button");
  buttonRemove.type = "button";
  buttonRemove.name = "buttonRemove";
  buttonRemove.innerText = "Usuń";
  buttonRemove.classList.add("button");

  const budgetElement = document.createElement("div");
  budgetElement.classList.add("budget-element");
  budgetElement.id = `${income.id}`;

  const newIncome = document.createElement("div");
  newIncome.classList.add("budget-position");

  const newIncomeButtons = document.createElement("div");
  newIncomeButtons.classList.add("budget-buttons");

  const incomeTitle = document.createElement("span");
  incomeTitle.innerHTML = `${income.title}: `;

  const incomeValue = document.createElement("span");
  incomeValue.innerHTML = `${income.iValue} złotych`;

  newIncome.appendChild(incomeTitle);
  newIncome.appendChild(incomeValue);
  newIncomeButtons.appendChild(buttonEdit);
  newIncomeButtons.appendChild(buttonRemove);
  budgetElement.appendChild(newIncome);
  budgetElement.appendChild(newIncomeButtons);
  incomesList.appendChild(budgetElement);

  buttonRemove.addEventListener("click", removeIncome);
  buttonEdit.addEventListener("click", createIncomeEditForm);
};

const addIncome = (e) => {
  e.preventDefault();
  if (incomeName.value == "" || incomeValue.value == "") {
    alert("Wprowadź poprawne dane!");
    return;
  } else {
    const incomeID = Date.now();
    const incVal = incomeValue.value;
    const incName = incomeName.value;

    const income = {
      id: incomeID,
      title: incName,
      iValue: parseFloat(incVal),
    };

    incomes.push(income);
    incomeName.value = "";
    incomeValue.value = "";

    renderIncome(income);
    let sumOfIncomes = calculateSum(incomes, "iValue");
    incomesSum.innerHTML = `Suma przychodów: ${sumOfIncomes} PLN`;
    console.log("Przychody", sumOfIncomes);
  }
};

/*OUTGOES*/
const removeOutgo = (e) => {
  const outgoElement = e.currentTarget;
  const outgoElementParten = outgoElement.closest(".budget-element");
  outgoElementParten.remove();

  const removedId = outgoElementParten.id;
  console.log(removedId);
  outgoes = outgoes.filter((item) => item.id != removedId);

  let sumOfOutgoes = calculateSum(outgoes, "oValue");
  outgoesSum.innerHTML = `Suma wydatków: ${sumOfOutgoes} PLN`;
};

const renderOutgo = (outgo) => {
  const buttonEdit = document.createElement("button");
  buttonEdit.type = "button";
  buttonEdit.name = "buttonEdit";
  buttonEdit.innerText = "Edytuj";
  buttonEdit.classList.add("button");

  const buttonRemove = document.createElement("button");
  buttonRemove.type = "submit";
  buttonRemove.name = "buttonRemove";
  buttonRemove.innerText = "Usuń";
  buttonRemove.classList.add("button");

  const outgoElement = document.createElement("div");
  outgoElement.classList.add("budget-element");
  outgoElement.id = `${outgo.id}`;

  const newOutgo = document.createElement("div");
  newOutgo.classList.add("budget-position");

  const newOutgoButtons = document.createElement("div");
  newOutgoButtons.classList.add("budget-buttons");

  const outgoTitle = document.createElement("span");
  outgoTitle.innerHTML = `${outgo.title}: `;

  const outgoValue = document.createElement("span");
  outgoValue.innerHTML = `${outgo.oValue} złotych`;

  newOutgo.appendChild(outgoTitle);
  newOutgo.appendChild(outgoValue);
  newOutgoButtons.appendChild(buttonEdit);
  newOutgoButtons.appendChild(buttonRemove);
  outgoElement.appendChild(newOutgo);
  outgoElement.appendChild(newOutgoButtons);
  outgoesList.appendChild(outgoElement);

  buttonRemove.addEventListener("click", removeOutgo);
  buttonEdit.addEventListener("click", createOutgoEditForm);
};

const addOutgo = (e) => {
  e.preventDefault();
  if (outgoName.value == "" || outgoValue.value == "") {
    alert("Wprowadź poprawne dane!");
    return;
  } else {
    const outgoID = Date.now();
    const outVal = outgoValue.value;
    const outName = outgoName.value;

    const outgo = {
      id: outgoID,
      title: outName,
      oValue: parseFloat(outVal),
    };

    outgoes.push(outgo);
    outgoName.value = "";
    outgoValue.value = "";

    renderOutgo(outgo);
    let sumOfOutgoes = calculateSum(outgoes, "oValue");
    outgoesSum.innerHTML = `Suma wydatków: ${sumOfOutgoes} PLN`;
  }
};

function calculateSum(array, property) {
  const total = array.reduce((accumulator, object) => {
    return accumulator + object[property];
  }, 0);
  return total;
}

function calculateTotalMoney() {
  const totalIncome = incomes.reduce((accumulator, object) => {
    return accumulator + object.iValue;
  }, 0);
  const totalOutgo = outgoes.reduce((accumulator, object) => {
    return accumulator + object.oValue;
  }, 0);
  const totalMoney = totalIncome - totalOutgo;
  console.log(totalMoney);
  const absoluteTotalMoney = Math.abs(totalMoney);
  sumOfMoney.innerHTML = `Bilans wynosi zero`;
  if (totalMoney > 0) {
    sumOfMoney.classList.add("green");
    sumOfMoney.classList.remove("red");
    sumOfMoney.innerHTML = `Możesz jeszcze wydac ${totalMoney} PLN`;
  } else if (totalMoney < 0) {
    sumOfMoney.classList.add("red");
    sumOfMoney.classList.remove("green");
    sumOfMoney.innerHTML = `Bilans jest ujemny. Jesteś na minusie ${absoluteTotalMoney} PLN`;
  } else {
    sumOfMoney.classList.remove("red");
    sumOfMoney.classList.remove("green");
  }
  return totalMoney;
}

incomesSubmit.addEventListener("submit", addIncome);
outgoesSubmit.addEventListener("submit", addOutgo);

document.addEventListener("click", calculateTotalMoney);
document.addEventListener("submit", calculateTotalMoney);
