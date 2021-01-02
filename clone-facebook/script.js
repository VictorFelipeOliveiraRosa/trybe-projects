function generate_days(number_days = 31) {
  const getSelectDays = document.querySelector('#user-day-birth');
  for (let i = 0; i < number_days; i++) {
    const create_day = document.createElement('option');
    create_day.innerText = i + 1;
    create_day.value = i + 1;
    getSelectDays.appendChild(create_day);
  }
}

function generate_month() {
  const getSelectMonth = document.querySelector('#user-month-birth');
  const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  for (let i = 0; i < month.length; i++) {
    const create_month = document.createElement('option');
    create_month.innerText = month[i];
    create_month.value = i + 1;
    getSelectMonth.appendChild(create_month);
  }
}

function generate_years() {
  const getSelectYear = document.querySelector('#user-year-birth');
  const year = new Date().getFullYear();
  // const maxAge = year - 110;
  for (let i = 0; i < 116; i++) {
    const create_year = document.createElement('option');
    create_year.innerText = year - i;
    create_year.value = year - i;
    getSelectYear.appendChild(create_year);
  }
}

// REMOVE CLASS SELECTED 
function removeSelected() {
  const [elSelected] = document.querySelectorAll('.selected');
  elSelected.classList.remove('selected');
}

// Controla selected GENERO personaliz[ado
function viewInput(element) {
  const [getInput] = document.querySelectorAll('.personality-gender-other');
  if (element.id == 'personalizado') {
    getInput.style.display = 'block';
    getInput.setAttribute('required', '');
  } 
    if (element.id == 'feminino' || element.id == 'masculino') {
    getInput.style.display = 'none';
    getInput.value = '';
    getInput.removeAttribute('required');
  } 
}

// add e remo class selected 
function gender_select(event) {
  const element = event.target;
  if (element.id == 'feminino' || element.id == 'masculino' || element.id == 'personalizado') {
    removeSelected();
    element.classList.add('selected');
  }
  viewInput(element);
}

//ADD EVENTO NO SELECT GENERO
function addEventGender() {
  const [getContent] = document.querySelectorAll('.gender-all-container');
  getContent.addEventListener('click', gender_select);
}

// MONTA OBJETO COM OS DADOS DO CADASTRO
function mount_object(register) {
  const new_register = {}
  const data = Array.from(register)
  data.forEach(element => {
    new_register[element.name] = element.value;
  });
  const [gender] = document.querySelectorAll('.selected')
  console.log(gender.value)
  new_register['gender'] = gender.value;
  console.log(new_register);
}

//EVENT PREVENT 
async function formsRegister(event) {
  await event.preventDefault();
  await mount_object(event.target);
  // await event.target.submit();
}

// ADD EVENTO SUBMIT NO FORMS 
const addEventBtnRegister = () => {
  const [getBtnRegistry] = document.querySelectorAll('.cadastrar-usuario');
  getBtnRegistry.addEventListener('submit', formsRegister); 
}


function main() {
  generate_days();
  generate_month();
  generate_years();
  addEventBtnRegister();
  addEventGender();
}

window.onload = main;