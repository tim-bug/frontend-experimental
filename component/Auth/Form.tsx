import { useRouter } from "next/router";
import { InputText } from "primereact/inputtext";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

type FormValues = {
  email: string;
  password: string;
};

const CreateProject = () => {
  const router = useRouter();

  const { reset, control, handleSubmit, formState } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    router.replace("/dashboard");
  };

  return (
    <>
      <form className="flex flex-col-reverse md:flex-col-reverse lg:flex-row border border-gray-300 rounded-xl">
        <div className="w-full md:w-full lg:w-full h-full flex flex-col">
          <div className="space-y-3 md:rounded-xl bg-white p-4 md:p-8">
            <Controller
              render={({ field: { onChange, onBlur, value } }) => (
                <div className="flex gap-3 flex-col">
                  <label className="font-bold text-gray-500 text-xs">
                    EMAIL / USERNAME
                  </label>
                  <InputText
                    disabled={router.query.method === "read"}
                    placeholder="email..."
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </div>
              )}
              rules={{
                required: true,
              }}
              name="email"
              control={control}
              defaultValue={""}
            />
            <Controller
              render={({ field: { onChange, onBlur, value } }) => (
                <div className="flex gap-3 flex-col">
                  <label className="font-bold text-gray-500 text-xs">
                    PASSWORD
                  </label>

                  <Password
                    toggleMask
                    disabled={router.query.method === "read"}
                    placeholder="password..."
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </div>
              )}
              name="password"
              control={control}
              defaultValue={""}
            />
            <Button onClick={handleSubmit(onSubmit)} className="h-10">
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
export default CreateProject;
