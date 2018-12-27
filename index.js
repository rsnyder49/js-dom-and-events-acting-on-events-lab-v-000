function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let ele = document.createElement();
  ele.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').append(ele);
}