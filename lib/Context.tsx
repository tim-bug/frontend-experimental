import {
  useReducer,
  createContext,
  memo,
  useMemo,
  useContext,
  ReactNode,
} from "react";
import { State } from "./Interface";
import { Action, GlobalContextType } from "./Type";
import { format } from "date-fns";

interface DateProps {
  date: string;
}

const Dates = memo((props: DateProps): JSX.Element => {
  const d = useMemo(
    () => format(new Date(props.date), "PPPPpppp"),
    [props.date]
  );

  return <p className="m-0 text-gray-400">{d}</p>;
});
const NotificationDate = memo((props: DateProps): JSX.Element => {
  const d = useMemo(
    () => format(new Date(props.date), "PPPPpppp"),
    [props.date]
  );

  return <p className="m-0 text-gray-400 text-xs">{d}</p>;
});
NotificationDate.displayName = "NotificationDate";
Dates.displayName = "Dates";

const INITIAL_STATE: State = {
  id: "",
  profile: undefined,
  project: {},
  country: {},
  developer: {},
  agency: {},
  aggregator: {},
  notification: {},
  group: {},
  groupAccess: {},
  agent: {},
  whitelabel: {},
  states: {},
  transaction: {},
  buildingType: {},
  region: {},
  suburb: {},
  dashboardSummary: {},
  menu: undefined,
  error: {
    closeMessage: "",
    message: "",
    type: "error",
  },
  signUpContext: {
    details: undefined,
    company: undefined,
    plan: undefined,
    payment: undefined,
  },
  authStrategy: [],
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

const Reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case "ID":
      return {
        ...state,
        id: payload.id,
      };
    case "SET_PROFILE":
      return {
        ...state,
        profile: payload.profile,
      };
    case "SET_PROJECT":
      return {
        ...state,
        project: payload.project,
      };
    case "SET_COUNTRY":
      return {
        ...state,
        country: payload.country,
      };
    case "SET_DEVELOPER":
      return {
        ...state,
        developer: payload.developer,
      };
    case "SET_AGENCY":
      return {
        ...state,
        agency: payload.agency,
      };
    case "SET_AGGREGATOR":
      return {
        ...state,
        aggregator: payload.aggregator,
      };
    case "SET_NOTIFY":
      return {
        ...state,
        notification: payload.notification,
      };
    case "SET_GROUP":
      return {
        ...state,
        group: payload.group,
      };
    case "SET_GROUP_ACCESS":
      return {
        ...state,
        groupAccess: payload.groupAccess,
      };
    case "SET_AGENT":
      return {
        ...state,
        agent: payload.agent,
      };
    case "SET_WHITELABEL":
      return {
        ...state,
        whitelabel: payload.whitelabel,
      };
    case "SET_STATES":
      return {
        ...state,
        states: payload.states,
      };
    case "SET_TRANSACTION":
      return {
        ...state,
        transaction: payload.transaction,
      };
    case "SET_BUILDINGTYPE":
      return {
        ...state,
        buildingType: payload.buildingType,
      };
    case "SET_REGION":
      return {
        ...state,
        region: payload.region,
      };
    case "SET_SUBURB":
      return {
        ...state,
        suburb: payload.suburb,
      };
    case "SET_DASHBOARD_SUMMARY":
      return {
        ...state,
        dashboardSummary: payload.dashboardSummary,
      };
    case "SET_MENU":
      return {
        ...state,
        menu: payload.menu,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: payload.error,
      };
    case "SET_SIGNUP_CONTEXT":
      return {
        ...state,
        signUpContext: payload.signUpContext,
      };
    case "SET_AUTH_STRATEGY":
      return {
        ...state,
        authStrategy: payload.authStrategy,
      };
    default:
      throw new Error(`${type} type is not define`);
  }
};

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useCtx = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return { state, dispatch };
};

export default memo(GlobalProvider);
export { GlobalContext, useCtx, Dates, NotificationDate };
