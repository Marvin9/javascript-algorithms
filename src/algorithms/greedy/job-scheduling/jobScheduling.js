/**
 * @param {2dArray} jobsListWithDeadlineAndProfit
 * @returns {2dArray} sequence of jobs to gain max profit
 */

function maxFromDeadline(list) {
  let max = 0;
  for (let i = 0; i < list.length; i += 1) max = Math.max(max, list[i][1]);
  return max;
}

function fillSlot(slots, index, job) {
  slots[index] = [...job]; // eslint-disable-line
}

function isSlotFilled(slots, index) {
  return slots[index] ? 1 : 0;
}

export default function jobScheduling(jobsListWithDeadlineAndProfit) {
  jobsListWithDeadlineAndProfit.sort((a, b) => b[0] - a[0]);

  const maxDeadline = maxFromDeadline(jobsListWithDeadlineAndProfit);
  const numberOfSlot = Math.min(maxDeadline, jobsListWithDeadlineAndProfit.length);
  const slots = new Array(numberOfSlot).fill(0);
  let numberOfSlotsFilled = 0;
  let i = 0;
  while (i < jobsListWithDeadlineAndProfit.length && numberOfSlotsFilled < numberOfSlot) {
    let deadline = jobsListWithDeadlineAndProfit[i][1] - 1;
    while (deadline >= 0) {
      if (!isSlotFilled(slots, deadline)) {
        fillSlot(slots, deadline, jobsListWithDeadlineAndProfit[i]);
        numberOfSlotsFilled += 1;
        break;
      }
      deadline -= 1;
    }
    i += 1;
  }

  return {
    maxProfit: slots.reduce((a, b) => a + (typeof b === 'number' ? 0 : b[0]), 0),
    slots: slots.map(slot => (typeof slot === 'number' ? [0, 0] : slot)),
    detailedSlots: slots.map((slot, index) => {
      if (typeof slot === 'number') {
        return {
          [`Slot-${index + 1}`]: {
            empty: true,
          },
        };
      }
      return {
        [`Slot-${index + 1}`]: {
          jobProfit: slot[0],
          jobDeadline: slot[1],
        },
      };
    }),
  };
}
