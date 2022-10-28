function getAreaOfCircle(radius) {
    const pi = 3.14;
    var area = 2 * pi * radius;
}

function getFlowerColor() {
    switch(flower){
        case "rose":
            return "red";
        case "violet":
            return "blue";
        case "sunflower":
            return "yellow";
        default:
            return "unknown";
    }
    }

    function getCalendarMonthDays(monthName) {
        monthName = monthName.toLowerCase();
        switch (monthName) {
            case "april":
            case "june":
            case "september":
            case "november":
                return 30;
            case "february":
                return 28;
            default:
                return 31;
        }
    }

    function incrementCounter(counter, maxvalue, targetDisplay, increment=1){
        if(targetDisplay == null){
            targetDisplay = document.body;
        }
        let addComma = false;
        while(counter <= maxvalue){
            if(addComma){
                targetDisplay.innerHTML += ", ";
            }
            targetDisplay.innerHTML += counter;
            addComma = true;
            counter += increment;
        }
    
    function decrementCounter(counter, minvalue, targetDisplay, decrement=1){
        if(targetDisplay == null){
            targetDisplay = document.body;
        }
        let addComma = false;
        while(counter >= minvalue){
            if(addComma){
                targetDisplay.innerHTML += ", ";
            }
            targetDisplay.innerHTML += counter;
            addComma = true;
            counter -= decrement;
        }
    }

    }
    function incrementCountFor(counter, maxvalue, targetDisplay, increment=1){
        if(targetDisplay == null){
            targetDisplay = document.body;
        }
        let addComma = false;
        for(counter; counter<= maxvalue; counter += increment){
            if(addComma){
                targetDisplay.innerHTML += ", ";
            }
            targetDisplay.innerHTML += counter;
            addComma = true;
        }
    }

    // FIBONACCI SEQUENCE

    function doFibonacciSequence (limit) {

        for(let i=0; i < limit; i++) {

            let numbers = []
            let n1 = 0;
            let n2 = 1;
            let newValue = n1+n2;

            for (let i=0; i < limit; i++)

            n1 = n2;
            n2 = newValue;

        }

        return
    }

    
    function getStaffCountFor(key, value, operator="="){
        let dataCount = 0;
        //let i = 0;
        //while(i < staff.length){
        for(let i = 0; i < staff.length; i++){
            switch(key){
                case  "age":
                    if(operator == ">" && staff[i][key] > value){
                        dataCount++;
                    }else if(operator == "<" && staff[i][key] < value){
                        dataCount++;
                    }else if(operator == ">=" && staff[i][key] >= value){
                        dataCount++;
                    }else if(operator == "<=" && staff[i][key] <= value){
                        dataCount++;
                    }else if(staff[i][key] == value){
                        dataCount++;
                    }
                    break;
                case "language":
                    //let j = 0;
                    //while(j < staff[i].languages.length){
                    for(let j = 0; j < staff[i].languages.length; j++){
                        if(staff[i].languages[j] == value){
                            dataCount++;
                        }
                        //j++;
                    }
                    break;
                default:
                    if(staff[i][key] == value){
                        dataCount++;
                    }
                    break;
            }
            //i++;
        }
        return dataCount;
    }


    //0,1,1,2,3,5,8,13,21,34,..
    function doFibonacciSequence(limit){

        let numbers = [0,1];
        let newValue = 0;

        if(limit <= 1){
            number = numbers.pop();
        }

        for(let i=0; i < limit-2; i++){
            newValue = numbers[i] + numbers[i+1];
            numbers.push(newValue);
            console.log(numbers);
        }

        return numbers;

    }
        
