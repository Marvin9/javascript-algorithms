/**
 * @param {2dArray} activityList
 * @return {2dArray} maximum activities
 */
export default function activitySelection(activityList) {
  activityList.sort((a, b) => {
    const activity1FinishTime = a[1];
    const activity2FinishTime = b[1];
    return activity1FinishTime - activity2FinishTime;
  });

  let previousActivityFinishTime = -1;
  let maxActivityList = [];

  for (let i = 0, iBound = activityList.length; i < iBound; i += 1) {
    const currentActivityStartingTime = activityList[i][0];
    const currentActivityFinishTime = activityList[i][1];

    if (previousActivityFinishTime <= currentActivityStartingTime) {
      maxActivityList = [...maxActivityList, [...activityList[i]]];
      previousActivityFinishTime = currentActivityFinishTime;
    }
  }
  return maxActivityList;
}
