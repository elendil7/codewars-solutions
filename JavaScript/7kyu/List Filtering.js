const filter_list = (list) => {
  var array = [];
  for (let i = 0; i < list.length; i ++) {
    if (typeof list[i] === "number") {
      array.push(list[i]);
    }
  }
  return array;
}
