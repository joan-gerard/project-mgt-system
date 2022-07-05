export const getTodayDate = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

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
