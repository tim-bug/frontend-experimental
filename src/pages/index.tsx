import { GetServerSideProps } from "next";
export default function Index() {}

export async function getServerSideProps(context: GetServerSideProps) {
  return {
    redirect: {
      destination: "/auth",
      permanent: false,
    },
  };
}
