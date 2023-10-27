export const isOfType = <T>(
  varToBeChecked: any,
  propertyToCheckFor: keyof T
): varToBeChecked is T => {
  // The "is T" portion is the type guard.
  return (varToBeChecked as T)[propertyToCheckFor] !== undefined
};

export function checkTypeGuard(obj: any, type: any) {
  // isOfType<{}>(Object, 'toString');
}

export function instanceCheck(obj: any, type: any) {
  return obj instanceof type;
}

export function typeCheck(obj: any, type: any) {
  return typeof obj;
}

export async function debug(obj: any) {
  let DEBUG = true;
  // Check for types and then do logging and stuff based on types.
  if (DEBUG) {
    console.log(`${obj.toString()} has a type of: ${typeof obj}`);
    console.log(obj);
  }
}
