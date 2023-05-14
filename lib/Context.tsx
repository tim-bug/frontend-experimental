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
