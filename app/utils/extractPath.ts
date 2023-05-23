const extractPath = (data: string | undefined): string => {
  if (data !== undefined) {
    const splitData: string[] = data!.split("/");

    console.log(splitData);

    return splitData[2].toUpperCase();
  }

  return "Request error";
};

export default extractPath;
