import PrioritySort from './PrioritySort.js';

$(document).ready(function(){
  let options  = {
    $listElement: $(".priority-sort"),
    seeAllId: "#all",
    seeLessId: "#less",
    initialCountAttribute: "data-initial-items-count",
    priorityOrderAttribute: "data-priority-order",
  };
  let sort = new PrioritySort(options);
  sort.init();
});