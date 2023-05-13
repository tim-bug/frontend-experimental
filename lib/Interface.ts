import { AgentInterface, TenantType } from "@arkasuryawan/gp-interfaces";

export interface State {
  id?: string;
  profile?: AgentInterface;
  project?: any; // inside this has data and total
  country?: any;
  developer?: any;
  agency?: any;
  aggregator?: any;
  notification?: any;
  group?: any;
  groupAccess?: any;
  agent?: any;
  whitelabel?: any;
  states?: any;
  transaction?: any;
  buildingType?: any;
  region?: any;
  suburb?: any;
  dashboardSummary?: any;
  menu?: any;
  signUpContext?: {
    details?: any;
    company?: any;
    plan?: any;
    payment?: any;
  };
  authStrategy?: string[];
  error?: {
    message?: string;
    type?: string;
    closeMessage?: string;
  };
}

export type TInternalType = TenantType | "Administrator";

export interface IRoles {
  role: TInternalType;
  open: boolean;
  setOpen: (d: boolean) => void;
}
