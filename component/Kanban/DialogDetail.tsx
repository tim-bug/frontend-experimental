import { Dialog } from "primereact/dialog";
import { useRouter } from "next/router";
interface Props {
  showDetail: boolean;
  setShowDetail: (s: boolean) => void;
}
const DialogDetail = ({ setShowDetail, showDetail }: Props) => {
  const router = useRouter();
  return (
    <>
      <Dialog
        header="Header"
        draggable={false}
        visible={
          // @ts-ignore
          router.query.hasOwnProperty("q") && router.query?.q?.length > 0
        }
        onHide={() => router.back()}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </>
  );
};

export default DialogDetail;
