export const fetchMonster = async (seed: number, size: number): Promise<string> => {
  const requestInit: RequestInit = {
    method: "GET",
    headers: {
      origin: "x-requested-with",
      contentLength: "size"
    }
  };

  const response = await fetch(`http://localhost:8080/api/basic/monsters/${seed}/png?size=${size}`, requestInit);

  if (!response.ok) {
    throw new Error("Response not OK");
  }

  const blobResponse = await response.blob();
  const image = URL.createObjectURL(blobResponse);

  return image;
};
