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
    
