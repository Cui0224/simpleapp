/*  
    举例用
    使用：dispatch(add(data))
*/
import { ADD } from "../action_types/index";
export function add(data) {
  return {
    type: ADD,
    ...data,
  };
}
