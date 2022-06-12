class Data {
  constructor(name, num) {
    this.name = name;
    this.num = num;
  }
}
class Processing {
  constructor() {
    this.local = localStorage;
    this.arr = [];
  }
  getItem() {
    if (
      this.local.getItem("contacts") === null ||
      this.local.getItem("contacts") === undefined
    ) {
      return this.arr;
    } else {
      return (this.arr = JSON.parse(this.local.getItem("contacts")));
    }
  }
  saveItem(pop, Data) {
    const Datax = pop.getItem();
    Datax.push(Data);

    this.local.setItem("contacts", JSON.stringify(Datax));
  }
  removeItem(pop, index) {
    const Datax = pop.getItem();

    Datax.splice(index, 1);
    this.local.setItem("contacts", JSON.stringify(Datax));
  }
  displayItem(pop) {
    const Datax = pop.getItem();
    console.log(Datax);
  }
  createItem(Data) {
    const ul = document.createElement("ul");
    const list = "";
    ul.className = "list-group";
    Data.forEach((element) => {
      // console.log(element.name);
      list += ` <li class="list-group-item">
      <div class="row">
        <div class="col-sm-8 mb-2 bg-dark text-light">
          <h1>Hello</h1>
        </div>
        <div class="col-sm-4">
          <div class="titles float-end">
            <button id="delete" class="btn btn-danger">
              <i class="fas fa-times"></i>
            </button>
            <button id="check" class="btn btn-success">
              <i class="fas fa-check"></i>
            </button>
          </div>
        </div>
      </div>
    </li>`;
    });
  }
}
const myData = new Data("Steve", 123123);

const pop = new Processing();
// pop.save(pop, myData);
pop.displayItem(pop);
