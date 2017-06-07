function myFrameWork(el) {

	var element = document.querySelector(el);
	let classes = element.classList;


	element.getAllClasses = function() {
		return element.className;
	}

	element.addClass = function(...args) {
		args.forEach((className)=> {
            classes.add(className);
        })
	}

	element.removeClass = function(...args) {
		args.forEach((className)=> {
            classes.remove(className);
        })
	}

	element.reNameClass = function(...args) {
		if(args.length%2 == 0) {
			let oldClassName;
			args.forEach((className, index)=> {
				if( index%2 == 0) {
					classes.forEach((_className,  _index)=> {
						if (className == _className) 
							oldClassName = className;				
					})
					if (oldClassName.typeOf == "undefined")
						console.log("У элемента " + el + " нет класса с названием " + className);
				} else {
					element.removeClass(oldClassName);
					element.addClass(className);
				}
			})
		} else {
			console.log("Ошибка: Ожидается чётное количество аргументов. Получено нечётное количество аргументов.")
		}
	}

	element.clearAllClasses = function() {
			element.className = "";
	}

	element.toggle = function (...args) {
		args.forEach((className)=> {
			classes.toggle(className);
		})
	}

	return element;
}
