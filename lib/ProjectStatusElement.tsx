interface Status {
  status: string;
}
const ProjectStatusElement = ({ status }: Status) => {
  switch (status) {
    case "AVAILABLE":
      return <p className="rounded-xl font-bold text-green-500">{status}</p>;
    case "DRAFT":
      return <p className="rounded-xl font-bold text-yellow-500">{status}</p>;
    case "DELETED":
      return <p className="rounded-xl font-bold text-gray-500">{status}</p>;
    case "LEASED":
      return <p className="rounded-xl font-bold text-orange-500">{status}</p>;
    case "BOOKED":
      return <p className="rounded-xl font-bold text-blue-500">{status}</p>;
    case "SOLD":
      return <p className="rounded-xl font-bold text-red-500">{status}</p>;
    default:
      return <p className="rounded-xl font-bold text-gray-500">{status}</p>;
  }
};

export const TransactionStatus = ({ status }: Status): JSX.Element => {
  switch (status) {
    case "BOOKED":
      return (
        <p className="rounded-xl font-bold text-green-500 bg-green-500/20 w-fit p-2">
          {status}
        </p>
      );
    case "EOI":
      return (
        <p className="rounded-xl font-bold text-orange-500 bg-orange-500/20 w-fit p-2">
          {status}
        </p>
      );
    default:
      return (
        <p className="rounded-xl font-bold text-gray-500 bg-gray-500/20 w-fit p-2">
          {status}
        </p>
      );
  }
};

export default ProjectStatusElement;
