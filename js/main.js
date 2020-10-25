const btnSubmit = document.querySelector('#btn-submit');
const allInputs = document.querySelectorAll('input.form-control');
const resultText = document.querySelector('.result-text');

class Calc {
    #aItems = [1, 2, 3, 4, 5, 6]; // 0 - 5
    #bItems = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]; // 0 - 15
    #cItems = [23, 24, 25, 26, 27, 28, 29, 30, 31]; // 0 - 8
    #dItems = [
        {value: [40000, 40, 35] },
        {value: [80000, 13, 350]},
        {value: [80000, 8, 400]},
        {value: [100000, 15, 500]},
        {value: [30000, 1, 600]},
        {value: [60000, 1, 3000]},
        {value: [60000, 1, 2800]},
        {value: [80000, 1, 3500]},
        {value: [120000, 12, 12000] }
    ];

    #sumMaintenanceCostsOfOneCar = 0;

    updateValues() {
        this.#aItems.length = 0;
        this.#bItems.length = 0;
        this.#cItems.length = 0;
        this.#dItems.forEach(value => value.value.length = 0);

        let dIndex = 0;
        let dCounter = 0;

        for (const iterator of allInputs) {
            if (iterator.name === 'a') {
                this.#aItems.push(iterator.value);
            }
            if (iterator.name === 'b') {
                this.#bItems.push(iterator.value);
            }
            if (iterator.name === 'c') {
                this.#cItems.push(iterator.value);
            }
            if (iterator.name === 'd') {
                this.#dItems[dIndex].value.push(iterator.value);
                dCounter === 2 ? (dCounter = 0, dIndex++) : dCounter++;
            }
        }
    }

    test() {
        console.log(this.#aItems);
        console.log(this.#bItems);
        console.log(this.#cItems);
        console.log(this.#dItems);
    }

    setValues() {
        let aIndex = 0;
        let bIndex = 0;
        let cIndex = 0;
        let dIndex = 0;
        let dCounter = 0;

        for (const iterator of allInputs) {
            if (iterator.name === 'a') {
                iterator.value = this.#aItems[aIndex++];
            }
            if (iterator.name === 'b') {
                iterator.value = this.#bItems[bIndex++];
            }
            if (iterator.name === 'c') {
                iterator.value = this.#cItems[cIndex++];
            }
            if (iterator.name === 'd') {
                iterator.value = this.#dItems[dIndex].value[dCounter];
                dCounter === 2 ? (dCounter = 0, dIndex++) : dCounter++;
            }
        }
    }

    driversSalaryMonthly() {
        if (Number(this.#bItems[0]) === 0) { return '' }
        
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[0] / this.#aItems[2];
        return `Зарплата водителю ежемесячная — ${this.#bItems[0]} / ${this.#aItems[2]} = ${(this.#bItems[0] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    
    driversSalaryByMileage() {
        if (Number(this.#bItems[1]) === 0) { return '' };
        
        this.#sumMaintenanceCostsOfOneCar += Number(this.#bItems[1]);
        return `Зарплата водителю по километражу — ${Number(this.#bItems[1]).toFixed(2)}грн.<br>`;
    }

    businessTripToTheDriver() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[2] * this.#aItems[1] / this.#aItems[2];
        return `Командировочные водителю — ${(this.#bItems[2] * this.#aItems[1] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    taxesMonth() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[3] / this.#aItems[2];
        return `Налоги грн./месяц — ${(this.#bItems[3] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    vehicleInspectionAndTrailer() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[4] / this.#bItems[5] / this.#aItems[2];
        return `Техосмотр машина + прицеп — ${(this.#bItems[4] / this.#bItems[5] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    carCivilCarAndTrailer() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[5] / 12 / this.#aItems[2];
        return `Автогражданка машина + прицеп — ${(this.#bItems[5] / 12 / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    licenseCards() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[6] / 60 / this.#aItems[2];
        return `Лицензия + карточки — ${(this.#bItems[6] / 60 / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    environmentalPollutionTax() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[7] / this.#aItems[2];
        return `Налог на загрязнения окруж среды — ${(this.#bItems[7] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    constructionAndInstallationWorksInsurance() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[8] / 12 / this.#aItems[2];
        return `СМР страхование — ${(this.#bItems[8] / 12 / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    vulcanization() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[9] / this.#aItems[2];
        return `Вулканизация — ${(this.#bItems[9] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    carWash() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[10] / this.#aItems[2];
        return `Мойка машины — ${(this.#bItems[10] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    parking() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[11] / this.#aItems[2];
        return `Стоянки — ${(this.#bItems[11] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    policeServices() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[12] / this.#aItems[2];
        return `"Услуги" ГАИ — ${(this.#bItems[12] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    unscheduledRepairs() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[13] / 12 / this.#aItems[2];
        return `Ремонты внеплановые — ${(this.#bItems[13] / 12 / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    unexpectedExpenses() {
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[14] / this.#aItems[2];
        return `Непредвиденные расходы — ${(this.#bItems[14] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    }

    loanInterest() { 
        this.#sumMaintenanceCostsOfOneCar += this.#bItems[15] / this.#aItems[2];
        return `Проценты по кредиту(без тела кредита) — ${(this.#bItems[15] / this.#aItems[2]).toFixed(2)}грн.<br>`;
    } // without loan body

    fuel() {
        this.#sumMaintenanceCostsOfOneCar += this.#aItems[3] / 100 * this.#aItems[4];
        return `Топливо — ${(this.#aItems[3] / 100 * this.#aItems[4]).toFixed(2)}грн.<br>`;
    }

    maintenanceCostsOfOneCar() {
        return `Итого: ${(this.#sumMaintenanceCostsOfOneCar).toFixed(2)}грн. на 1 км. пробега<br>`;
    } // !!!!!

    resultCalc() {
        return `${this.driversSalaryMonthly()}
        ${this.driversSalaryByMileage()}
        ${this.businessTripToTheDriver()}
        ${this.taxesMonth()}
        ${this.vehicleInspectionAndTrailer()}
        ${this.carCivilCarAndTrailer()}
        ${this.licenseCards()}
        ${this.environmentalPollutionTax()}
        ${this.constructionAndInstallationWorksInsurance()}
        ${this.vulcanization()}
        ${this.carWash()}
        ${this.parking()}
        ${this.policeServices()}
        ${this.unscheduledRepairs()}
        ${this.unexpectedExpenses()}
        ${this.loanInterest()}
        ${this.fuel()}
        ${this.maintenanceCostsOfOneCar()}`;
        
    }
}

const calculating = new Calc();
calculating.setValues();


btnSubmit.onclick = (e) => {
    e.preventDefault();
    calculating.updateValues();


    const text = `
    Общие расходы (на весь автопарк)
    Зарплата бухгалтеру - 23/3=7.67грн.
    Зарплата логиста - 24/3=8грн.
    Оплата телефонной связи - 25/3=8.33грн.
    Интернет - 26/3=8.67грн.
    Информационные услуги - 27/3=9грн.
    Реклама - 28/3=9.33грн.
    Канцтовары, путевки, почта и пр. расходники - 29/3=9.67грн.
    Транспортные расходы - 30/3=10грн.
    Аренда офиса - 31/3=10.33грн.
    Итого: 81грн. на 1 км. пробега
    
    Затраты на техобслуживание
    Наименование работ	стоимость	Затраты на 1 км.
    Масло(двигатель)	1400	0.035
    Итого расходы на ТО: 0.04грн. на 1 км. пробега
    
    
    Итого все расходы: 63.88+81+0.04=144.92
    Прибавляем 6% холостых пробегов: 144.92*1.06=153.61
    
    Себестоимость 1км пробега составляет 153.61 грн.`;

    resultText.innerHTML = calculating.resultCalc();
}