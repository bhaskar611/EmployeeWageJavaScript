const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(employeeCheck) {
	switch (employeeCheck) {
		case IS_PART_TIME:
			return PART_TIME_HOURS
			break;
		case IS_FULL_TIME:
			return FULL_TME_HOURS;
			break;
		default:
			return 0;
	}
}

let empHours = 0;
let employeeCheck = Math.floor(Math.random() * 10 % 3);

empHours = getWorkingHours(employeeCheck);
let empWage = empHours * WAGE_PER_HOUR;
console.log('Employee Wage : ' + empWage);