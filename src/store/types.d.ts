import { StateType, ActionType } from "typesafe-actions";

declare module "services" {
  export type RootAction = ActionType<typeof import("./root-actions").default>;
  export type RootState = StateType<typeof import("./root-reducer").default>;
}

// interface Types {
//   RootAction: RootAction;
// }
