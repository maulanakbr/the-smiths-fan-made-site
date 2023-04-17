const truncate = (data: string, length: number): string => {
  if (data.length > length) {
    return data.substring(0, length) + "...";
  }

  return "The data is too short";
};

export default truncate;
