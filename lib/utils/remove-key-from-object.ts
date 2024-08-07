// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeKeyFromObject = (obj: Record<string, any>, key: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [key]: _, ...newObj } = obj;
  return newObj;
};
