'use strict';

// write your code here

const averageCount = document.querySelectorAll('.population');

let total = 0;

averageCount.forEach((span) => {
  const number = Number(span.textContent.replaceAll(',', ''));

  total += number;
});

const totalCount = total / averageCount.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  totalCount.toLocaleString();
