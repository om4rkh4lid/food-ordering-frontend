export const formatFloorNumber = (floor: number) => {
  const lastDigit = `${floor}`.slice(-1);
  switch (parseInt(lastDigit)) {
    case 1:
      return `${floor}st`;
    case 2:
      return `${floor}nd`;
    case 3:
      return `${floor}rd`
    default:
      return `${floor}th`;
  }
} 