import { memo } from "react";

export const ArrowRight = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export const ArrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export const ArrowDown = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export const ArrowUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

export const TrashSVG = memo(
  ({ size, color }: { size?: number; color: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={color ? color : "black"}
        width={size ? size : 25}
        height={size ? size : 25}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    );
  }
);

export const DashboardSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color ? color : "black"}
    width={size ? size : 25}
    height={size ? size : 25}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    />
  </svg>
);

export const NotificationSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color ? color : "black"}
    width={size ? size : 25}
    height={size ? size : 25}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
    />
  </svg>
);

export const SalesSVG = ({ size, color }: { size?: number; color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
      />
    </svg>
  );
};

export const AggregatorSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return;
};

export const AgencySVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return;
};

export const DeveloperSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return;
};

export const ProjectSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  );
};

export const WhiteLableSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
};

export const AgentSVG = ({ size, color }: { size?: number; color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  );
};

export const CountrySVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return;
};

export const StateSVG = ({ size, color }: { size?: number; color: string }) => {
  return;
};

export const RegionSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return;
};

export const SuburbSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return;
};

export const BuildingSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => {
  return;
};

export const UserSVG = ({ size, color }: { size?: number; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color ? color : "black"}
    width={size ? size : 25}
    height={size ? size : 25}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export const SignOutSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color ? color : "black"}
    width={size ? size : 25}
    height={size ? size : 25}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
    />
  </svg>
);

export const MailSVG = ({ size, color }: { size?: number; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color ? color : "black"}
    width={size ? size : 25}
    height={size ? size : 25}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

export const PhoneSVG = ({ size, color }: { size?: number; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color ? color : "black"}
    width={size ? size : 25}
    height={size ? size : 25}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

export const LocationSVG = ({
  size,
  color,
}: {
  size?: number;
  color: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color ? color : "black"}
    width={size ? size : 25}
    height={size ? size : 25}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

export const JobSVG = ({ size, color }: { size?: number; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color ? color : "black"}
    width={size ? size : 25}
    height={size ? size : 25}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
    />
  </svg>
);

export const X = ({ size, color }: { size?: number; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color ? color : "black"}
    width={size ? size : 25}
    height={size ? size : 25}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const CameraSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
      />
    </svg>
  )
);

export const MenuSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  )
);

export const ThreeDotsSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
      />
    </svg>
  )
);

export const ArrowDownSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  )
);

export const ArrowUpSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
      />
    </svg>
  )
);

export const GalerySVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  )
);

export const EyeSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
);

export const EditSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  )
);

export const CreateSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
);

export const SearchSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  )
);

export const ThreeDotsVerticalSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
      />
    </svg>
  )
);

export const ExpandSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      />
    </svg>
  )
);

export const BedSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M2 19v-8.2h1V5h18v5.8h1V19h-2v-2H4v2Zm11-9h6V7h-6Zm-8 0h6V7H5Z"
      />
    </svg>
  )
);

export const BathSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M96 77.3C96 70 101.9 64 109.3 64c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9c-3.6 9-5.6 18.9-5.6 29.2c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.8-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5l-14.9-14.9C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h256v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-40.4c19.6-17.6 32-43.1 32-71.6v-16H32z"
      />
    </svg>
  )
);

export const GarageSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20 9v11h-2v-9H2v9H0V9l10-4l10 4m-3 3H3v2h14v-2m0 3H3v2h14v-2m5 0v-5h2v5h-2m0 4v-2h2v2h-2Z"
      />
    </svg>
  )
);

export const CheckedSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"
      />
    </svg>
  )
);

export const CircleCheckedSVG = memo(
  ({ size, color }: { size?: number; color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="#05ff86"
        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7t.275.7L9.9 15.9q.275.275.7.275t.7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
      />
    </svg>
  )
);

export const DashboardNav = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    </svg>
  )
);

export const SalesNav = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
      />
    </svg>
  )
);

export const AggregatorNav = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M8 15h7V8a7 7 0 1 0-7 7Zm8-6H9v7a7 7 0 1 0 7-7Z"
      />
    </svg>
  )
);

export const AgencyNav = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        fill="currentColor"
        d="M25.511 2.892L1.268 23H7v24h36V23h6.268L25.511 2.892zM30.942 40H19.593l2.38-10.711c-1.439-1-2.38-2.506-2.38-4.35c0-3.038 2.541-5.439 5.674-5.439c3.135 0 5.675 2.493 5.675 5.531c0 1.845-.941 3.245-2.379 4.242L30.942 40z"
      />
    </svg>
  )
);

export const DeveloperNav = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M21 7h-6a1 1 0 0 0-1 1v3h-2V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM8 6h2v2H8V6zM6 16H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V6h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm9 4h-2v-2h2v2zm0-4h-2v-2h2v2z"
      />
    </svg>
  )
);

export const ProjectNav = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M4.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM5 4.75A.75.75 0 0 1 5.75 4h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 4.75ZM6.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
      />
      <path
        fill="currentColor"
        d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Z"
      />
    </svg>
  )
);

export const WhitelabelNav = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M3 19V5h13.05L21 12l-4.95 7Zm2-2h10l3.55-5L15 7H5ZM5 7v10Z"
      />
    </svg>
  )
);

export const AgentNav = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M18.72 14.76c.35-.85.54-1.76.54-2.76c0-.72-.11-1.41-.3-2.05c-.65.15-1.33.23-2.04.23A9.07 9.07 0 0 1 9.5 6.34a9.21 9.21 0 0 1-4.73 4.88c-.04.25-.04.52-.04.78A7.27 7.27 0 0 0 12 19.27c1.05 0 2.06-.23 2.97-.64c.57 1.09.83 1.63.81 1.63c-1.64.55-2.91.82-3.78.82c-2.42 0-4.73-.95-6.43-2.66a9.03 9.03 0 0 1-2.24-3.69H2v-4.55h1.09a9.09 9.09 0 0 1 15.33-4.6a8.991 8.991 0 0 1 2.47 4.6H22v4.55h-.06L18.38 18l-5.3-.6v-1.67h4.83l.81-.97m-9.45-2.99c.3 0 .59.12.8.34a1.136 1.136 0 0 1 0 1.6c-.21.21-.5.33-.8.33c-.63 0-1.14-.5-1.14-1.13c0-.63.51-1.14 1.14-1.14m5.45 0c.63 0 1.13.51 1.13 1.14c0 .63-.5 1.13-1.13 1.13c-.63 0-1.14-.5-1.14-1.13a1.14 1.14 0 0 1 1.14-1.14Z"
      />
    </svg>
  )
);

export const CountryNav = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 48 48"
    >
      <g fill="none" strokeWidth="4">
        <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" />
        <path d="M4 20.8404C7.01485 19.4168 9.24466 19.2185 10.6894 20.2454C12.8566 21.7859 13.1283 28.064 18.0575 25.0635C22.9867 22.063 15.9467 20.8404 17.475 16.4939C19.0033 12.1474 24.0083 15.5237 24.5059 10.7627C24.8375 7.58862 21.0408 6.37413 13.1156 7.11921" />
        <path
          strokeLinecap="round"
          d="M36.0001 8C30.2857 12.9886 28.2899 16.0011 30.0127 17.0373C32.5968 18.5917 33.6933 16.4033 36.8467 17.0373C40.0001 17.6714 39.3173 21.9457 37.6587 21.9457C36.0001 21.9457 27.41 20.8518 27.8427 25.865C28.2753 30.8781 33.4422 31.6203 33.4422 34.4211C33.4422 36.2883 32.299 39.146 30.0127 42.9942"
        />
        <path
          strokeLinecap="round"
          d="M6.10449 32.9264C7.01598 32.5288 7.70115 32.2374 8.15999 32.052C12.0071 30.4978 14.8617 30.1314 16.7236 30.953C20.0161 32.4059 18.7503 35.3401 19.7816 36.4211C20.8128 37.5021 23.388 37.1876 23.388 39.244C23.388 40.615 22.9275 42.1637 22.0065 43.8901"
        />
      </g>
    </svg>
  )
);

export const BuildingNav = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 19h2V6l6.394 2.74a1 1 0 0 1 .606.92V19h2v2H1v-2h2V5.65a1 1 0 0 1 .594-.914l7.703-3.424A.5.5 0 0 1 12 1.77V19z"
      />
    </svg>
  )
);

export const TaskSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 6h11M3.8 5.8l.8.8l2-2m-2.8 7.2l.8.8l2-2m-2.8 7.2l.8.8l2-2M9 12h11M9 18h11"
      />
    </svg>
  )
);

export const DownloadSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
      />
    </svg>
  )
);

export const ReadOnlySVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      className="fill-blue-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
      />
    </svg>
  )
);

export const EditorModeSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      className="fill-green-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
);

export const RequesterSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <g fill="none" stroke="#000" strokeLinejoin="round" strokeWidth="4">
        <path
          strokeLinecap="round"
          d="M36 8L13 8C10 8 4 10 4 16C4 22 10 24 13 24H35C38 24 44 26 44 32C44 38 38 40 35 40H12"
        />
        <path
          fill="#2F88FF"
          d="M40 12C42.2091 12 44 10.2091 44 8C44 5.79086 42.2091 4 40 4C37.7909 4 36 5.79086 36 8C36 10.2091 37.7909 12 40 12Z"
        />
        <path
          fill="#2F88FF"
          d="M8 44C10.2091 44 12 42.2091 12 40C12 37.7909 10.2091 36 8 36C5.79086 36 4 37.7909 4 40C4 42.2091 5.79086 44 8 44Z"
        />
      </g>
    </svg>
  )
);

export const LoadingSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "transparent",
        display: "block",
        shapeRendering: "auto",
      }}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#e15b64"
        stroke={color ? color : "black"}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.22075055187637968s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        ></animateTransform>
      </path>
    </svg>
  )
);

export const DatabaseSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      />
    </svg>
  )
);

export const FileSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 21 21"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={color ? color : "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 14.5v-7l-5-5h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" />
        <path d="M12.5 2.5v3a2 2 0 0 0 2 2h3m-12-3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2" />
      </g>
    </svg>
  )
);

export const RolesSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 4h-4.18a3 3 0 0 0-5.64 0H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-7 0a1 1 0 1 1-1 1a1 1 0 0 1 1-1Zm7 15H5v-4h14Zm0-6H5V9h14Z"
      />
      <circle cx="17" cy="11" r="1" fill="currentColor" />
      <circle cx="14" cy="11" r="1" fill="currentColor" />
      <circle cx="14" cy="17" r="1" fill="currentColor" />
      <circle cx="17" cy="17" r="1" fill="currentColor" />
      <path fill="currentColor" d="M6 10h5v2H6zm0 6h5v2H6z" />
    </svg>
  )
);

export const AWSFileSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h9l5 5v13q0 .825-.588 1.413T18 22H6Zm0-2h12V8h-4V4H6v16Zm6-1q1.675 0 2.838-1.175T16 15v-4h-2v4q0 .825-.575 1.413T12 17q-.825 0-1.413-.588T10 15V9.5q0-.225.15-.363T10.5 9q.225 0 .363.138T11 9.5V15h2V9.5q0-1.05-.725-1.775T10.5 7q-1.05 0-1.775.725T8 9.5V15q0 1.65 1.175 2.825T12 19ZM6 4v4v-4v16V4Z"
      />
    </svg>
  )
);

export const Info = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  )
);

export const SetupAccess = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  )
);

export const EmailSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  )
);

export const RefreshSVG = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  )
);
export const StarSVG = memo(({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19.3418 0L14.5064 14.5064H0L12.0886 24.1773L7.25318 38.6836L19.3418 29.0127L31.4304 38.6836L26.595 24.1773L38.6836 14.5064H24.1773L19.3418 0Z"
      fill="#FFD702"
    />
  </svg>
));
export const YesPlan = memo(() => (
  <svg
    width="20"
    height="17"
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3312 0.821655L14.5732 2.65605L7.49045 9.73885L5.42675 7.75159L3.59236 5.9172L0 9.50955L1.8344 11.3439L5.65605 15.1656L7.41401 17L9.24841 15.1656L18.1656 6.24841L20 4.41401L16.3312 0.821655Z"
      fill="#08C277"
    />
  </svg>
));
export const NoPlan = memo(() => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.87389 0L0 2.87389L1.46752 4.3414L5.09554 8.03057L1.46752 11.6586L0 13.065L2.87389 16L4.3414 14.5325L8.03057 10.8433L11.6586 14.5325L13.065 16L16 13.065L14.5325 11.6586L10.8433 8.03057L14.5325 4.3414L16 2.87389L13.065 0L11.6586 1.46752L8.03057 5.09554L4.3414 1.46752L2.87389 0Z"
      fill="#FF0000"
    />
  </svg>
));
export const Plus = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  )
);

export const CloseEyes = memo(
  ({ size, color }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color ? color : "black"}
      width={size ? size : 25}
      height={size ? size : 25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  )
);

YesPlan.displayName = "YesPlan";
NoPlan.displayName = "NoPlan";
EmailSVG.displayName = "EmailSVG";
SetupAccess.displayName = "SetupAccess";
Info.displayName = "Info";
AWSFileSVG.displayName = "AWSFileSVG";
RolesSVG.displayName = "RolesSVG";
FileSVG.displayName = "FileSVG";
DatabaseSVG.displayName = "DatabaseSVG";
LoadingSVG.displayName = "LoadingSVG";
RequesterSVG.displayName = "RequesterSVG";
EditorModeSVG.displayName = "EditorModeSVG";
ReadOnlySVG.displayName = "ReadOnlySVG";
DownloadSVG.displayName = "DownloadSVG";
TaskSVG.displayName = "TaskSVG";
CircleCheckedSVG.displayName = "CircleCheckedSVG";
CheckedSVG.displayName = "CheckedSVG";
GarageSVG.displayName = "GarageSVG";
BathSVG.displayName = "BathSVG";
BedSVG.displayName = "BedSVG";
ExpandSVG.displayName = "ExpandSVG";
ThreeDotsVerticalSVG.displayName = "ThreeDotsVerticalSVG";
SearchSVG.displayName = "SearchSVG";
CreateSVG.displayName = "CreateSVG";
TrashSVG.displayName = "TrashSVG";
EditSVG.displayName = "EditSVG";
EyeSVG.displayName = "EyeSVG";
GalerySVG.displayName = "GalerySVG";
ArrowUpSVG.displayName = "ArrowUpSVG";
ArrowDownSVG.displayName = "ArrowDownSVG";
ThreeDotsSVG.displayName = "ThreeDotsSVG";
CameraSVG.displayName = "CameraSVG";
MenuSVG.displayName = "MenuSVG";
RefreshSVG.displayName = "RefreshSVG";
StarSVG.displayName = "StarSVG";
Plus.displayName = "Plus";
CloseEyes.displayName = "CloseEyes";
//
DashboardNav.displayName = "DashboardNav";
SalesNav.displayName = "SalesNav";
AggregatorNav.displayName = "AggregatorNav";
AgencyNav.displayName = "AgencyNav";
DeveloperNav.displayName = "DeveloperNav";
ProjectNav.displayName = "ProjectNav";
WhitelabelNav.displayName = "WhitelabelNav";
AgentNav.displayName = "AgentNav";
CountryNav.displayName = "CountryNav";
BuildingNav.displayName = "BuildingNav";
