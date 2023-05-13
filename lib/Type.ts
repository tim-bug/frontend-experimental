import { Dispatch } from "react";
import { State } from "./Interface";

export type Action =
  | { type: "ID"; payload: State }
  | { type: "SET_PROFILE"; payload: State }
  | { type: "SET_PROJECT"; payload: State }
  | { type: "SET_COUNTRY"; payload: State }
  | { type: "SET_DEVELOPER"; payload: State }
  | { type: "SET_AGENCY"; payload: State }
  | { type: "SET_AGGREGATOR"; payload: State }
  | { type: "SET_NOTIFY"; payload: State }
  | { type: "SET_GROUP"; payload: State }
  | { type: "SET_GROUP_ACCESS"; payload: State }
  | { type: "SET_AGENT"; payload: State }
  | { type: "SET_WHITELABEL"; payload: State }
  | { type: "SET_AGENT"; payload: State }
  | { type: "SET_STATES"; payload: State }
  | { type: "SET_TRANSACTION"; payload: State }
  | { type: "SET_BUILDINGTYPE"; payload: State }
  | { type: "SET_REGION"; payload: State }
  | { type: "SET_SUBURB"; payload: State }
  | { type: "SET_DASHBOARD_SUMMARY"; payload: State }
  | { type: "SET_MENU"; payload: State }
  | { type: "SET_ERROR"; payload: State }
  | { type: "SET_SIGNUP_CONTEXT"; payload: State }
  | { type: "SET_AUTH_STRATEGY"; payload: State };

export type GlobalContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export type TMode = "UPDATE" | "REMOVE" | "ADD";

export type TLoginEmailPassword = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUp =
  | "complete details"
  | "company"
  | "choose next"
  | "choose Your plan"
  | "payment";

export type ICompleteDetails = {
  name: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  country: string;
  state: string;
  suburb: string;
  passcode: string;
  email: string;
  password: string;
};

export type ICompany = {
  name: string;
  referenceCode: string;
  email: string;
  phoneNumber: string;
  address: string;
  secondAddress: string;
  country: string;
  state: string;
  suburb: string;
  passcode: string;
};

export type IPlan = {};

export type IPayment = {};
