export default class PrioritySort
{
  constructor(options)
  {
    this.$listElement           = options.$listElement
    this.$seeAllElement         = $(options.seeAllId);
    this.$seeLessElement        = $(options.seeLessId);
    this.initialCountAttribute  = options.initialCountAttribute;
    this.priorityOrderAttribute = options.priorityOrderAttribute;
  }

  init()
  {
    this.bindEvents();
    this.sortByPriority();
    this.$seeLessElement.toggle();
    // this.$seeAllElement.toggle();
  }

  bindEvents()
  {
    this.$seeAllElement.on("click", () => this.onClickSeeAll());
    this.$seeLessElement.on("click", () => this.onClickSeeLess());
  }

  onClickSeeAll()
  {
    this.sortDefault();
    $(event.target).toggle();
    this.$seeLessElement.toggle();
    event.preventDefault();

  }

  onClickSeeLess()
  {
    this.sortByPriority();
    $(event.target).toggle();
    this.$seeAllElement.toggle();
    event.preventDefault();
  }

  sortByPriority()
  {
    for(let listItem of this.$listElement)
    {
      let count = $(listItem).attr(this.initialCountAttribute);    
      let items = Array.prototype
        .slice.call( $(listItem).children().hide() )
        .sort( (a,b) => this.sortArrayFunction(a, b, "priority") )
        .slice(0, count);
  
      items.forEach(element => $(listItem).append($(element).show()) );
    }
  }

  sortDefault()
  {
    for(let listItem of this.$listElement)
    {
      let items = Array.prototype
        .slice.call( $(listItem).children().hide() )
        .sort( (a,b) => this.sortArrayFunction(a, b, "default"))

      items.forEach(element => $(listItem).append($(element).show()) );
    }
  }

  sortArrayFunction(a,b, type)
  {
    let orderA;
    let orderB;
    if(type == "priority")
    {
      orderA = $(a).attr(this.priorityOrderAttribute) || 40;
      orderB = $(b).attr(this.priorityOrderAttribute) || 40;
    }
    else
    {
      orderA = $(a).prop("textContent");
      orderB = $(b).prop("textContent");
    }
    if (orderA < orderB) {
      return -1;
    }
    if (orderA > orderB) {
      return 1;
    }
    return 0;
  }
}