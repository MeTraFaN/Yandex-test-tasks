let arrayOfPoints = {
  from: [],
  to: []
};
let answer = [];

Array.prototype.diff = function(a) {
  return this.filter(function(i) {
    if (a.indexOf(i) >= 0){
      a.splice(a.indexOf(i), 1);
    }      
  });
}

dataParse(data); // вызов функции для наполнения arrayofPoints.from и arrayofPoints.to

sort(arrayOfPoints.from, arrayOfPoints.to);

data.forEach((card,i)=>{
  answer[i] = finalAnswer(card);
})

function dataParse(data) {
  data.forEach((item)=>{
    arrayOfPoints.from.push(item.from);
    arrayOfPoints.to.push(item.to);
  });
}

function sort(from, to) {
  let stack = []; // стек
  let res = []; // конечный массив

  let c = from.slice();  // Создание копии массива
  to.diff(c) // получение названия точки старта
  c.length == 0 ? FirstEl = from[0].toString() : FirstEl = c.toString();
  FIndex = from.indexOf(FirstEl); // получаем индекс этого города
  SecondEl = to[FIndex];  // записываем город прибытия для первого маршрута
  stack.push(FirstEl, SecondEl); // добавляем в стек первый город из маршрута
  console.log(c)
  delete from[FIndex];
  delete to[FIndex];

  while (stack.length != 0) {
    // проверка на то  есть ли город прибытия в списке городов из которых отправляются
    if(from.indexOf(SecondEl) >= 0) {  
      FIndex = from.indexOf(SecondEl);
      FirstEl = from[FIndex];
      SecondEl = to[FIndex];
      stack.push(SecondEl); // добавляем в стек город прибытия

      delete from[FIndex];
      delete to[FIndex];
    } else {
      res.unshift(SecondEl);
      stack.pop(SecondEl); // удаляем вершину тупика 
      SecondEl = stack[stack.length-1]; //смещаемся назад по стеку
    };
  }

  delete arrayOfPoints.from; // 
  delete arrayOfPoints.to;  //Освобождаем память
  delete arrayOfPoints;  //

  dataSorting(res);
}

function dataSorting(res) {
  for(let i = data.length; i > 0; i--) {
    data.forEach((item, index)=> {
      if(res[i-1] == item.from && res[i] == item.to) {
        data.unshift(data.splice(index,1)[0]);
      }
    })
  }
}

function finalAnswer(card) {
  if (card.transport.type == "flight")
    result = "From <strong>" + card.from + "</strong>, take " + card.transport.type + " " + card.transport.number + " to <strong>" + card.to + "</strong>. Class type: " + card.transport.classtype + ".";
  else if(card.transport.type == "train")
    result = "Take " + card.transport.type + " " + card.transport.number + " from <strong>" + card.from + "</strong> to <strong>" + card.to + "</strong>. Train car number: " + card.transport.traincarnumber + ". Railway track: " + card.transport.railwaytrack + ".";
  else
    result = "Take " + card.transport.type + " " + card.transport.number + " from <strong>" + card.from + "</strong> to <strong>" + card.to + "</strong>.";
  
  if (card.transport.seatNumber)
    result += " Seat " + card.transport.seatNumber + ".";
  else
    result += " No seat assignment.";

  if (card.transport.gate)
    result += " Gate " + card.transport.gate + ".";

  if (card.baggage.transferPoint == "automatically")
    result += " Baggage will be automatically transferred from your last leg.";
  else if (card.baggage)
    result += " Baggage drop at ticket counter " + card.baggage.transferPoint + ".";

  return result;
}

