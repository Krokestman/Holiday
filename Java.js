function timeRestrictions(days, mounths) {

   if (isNaN((days)) || days === " " || days > 31 || days < 0 || !days) {
      document.getElementById("main-panel__text").innerHTML = "Ви помилились, спробуйте ще раз";
      return false;
   }

   if (isNaN((mounths)) || mounths === " " || mounths > 12 || mounths < 0 || !mounths) {
      document.getElementById("main-panel__text").innerHTML = "Ви помилились, спробуйте ще раз";
      return false;
   }
   return true;
}

function even(number) {
   return number % 2 === 0;
}

function nextYear(Mounth) {
   if (Mounth > 12) {
      Mounth = 1;
      return Mounth;
   }
   return Mounth;
}

function nextMouns(Day, Mounth) {
   if (Day > 31 && even(Mounth)) {
      Day = 1;
      Mounth += 1;
      Mounth = nextYear(Mounth);
      return [Day, Mounth];
   }
   if (Day > 30 && !even(Mounth)) {
      Day = 1;
      Mounth += 1;
      Mounth = nextYear(Mounth);
      return [Day, Mounth];
   }
   return [Day, Mounth];
}

function checDate(firstVacationDay, firstVacationMounth, lastVacationDay, lastVacationMounth) {
   if (firstVacationDay == lastVacationDay && firstVacationMounth == lastVacationMounth) {
      return false;
   }
   else {
      return true;
   }
}
function checUndefined(firstVacationDay, firstVacationMounth, lastVacationDay, lastVacationMounth) {
   if (firstVacationDay == 0 || firstVacationMounth == 0 || lastVacationDay == 0 || lastVacationMounth == 0) {
      document.getElementById("main-panel__text").innerHTML = "Ви помилились, спробуйте ще раз";
      return true;
   }
   else {
      return false;
   }
}

function input() {
   let firstVacationDay = Number(document.getElementById('firstOutWorkDay').value - 1);
   if (firstVacationDay == -1) {
      firstVacationDay = 0;
   }
   let firstVacationMounth = Number(document.getElementById('firstOutWorkMounth').value);
   let lastVacationDay = Number(document.getElementById('lastOutWorkDay').value);
   let lastVacationMounth = Number(document.getElementById('lastOutWorkMounth').value);
   let day = 0;
   timeRestrictions(firstVacationDay, firstVacationMounth);
   if (checUndefined(firstVacationDay, firstVacationMounth, lastVacationDay, lastVacationMounth)) {
      return;
   }

   for (; checDate(firstVacationDay, firstVacationMounth, lastVacationDay, lastVacationMounth);) {
      ++firstVacationDay;
      ++day;
      [firstVacationDay, firstVacationMounth] = nextMouns(firstVacationDay, firstVacationMounth);
      console.log(firstVacationDay, firstVacationMounth, lastVacationDay, lastVacationMounth, day);
   }
   if (timeRestrictions()) {
      document.getElementById("main-panel__text").innerHTML = day;
   }

   return day;
}

document.getElementById('calcButton').addEventListener('click', input);
