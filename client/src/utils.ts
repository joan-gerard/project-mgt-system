export const getTodayDate = () => {
  const current = new Date();
  console.log("current date", new Date());

  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
  }

  let month;
  switch (current.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  const date = `${day} ${current.getDate()} ${month} ${current.getFullYear()}`;

  return date;
};

export const changeDateFormat = (completionDate: string) => {
  const updatedDate = completionDate.replace(/-/g, " / ").split(" ").reverse();

  // swap array elements
  const tmp = updatedDate[2];
  updatedDate[2] = updatedDate[0];
  updatedDate[0] = tmp;

  return updatedDate.join("");
};

export const calculateCountdown = (
  completionDate: string,
  cb: (a: number) => void
) => {
  const today = new Date();
  const date2 = new Date(changeDateFormat(completionDate));

  const Difference_In_Time = date2.getTime() - today.getTime();
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  cb(Math.ceil(Difference_In_Days));
};

export const sortProjectTasks = (a: any, b: any) => {
  if (a.start < b.start) {
    return -1;
  }
  if (a.start > b.start) {
    return 1;
  }
  return 0;
};
