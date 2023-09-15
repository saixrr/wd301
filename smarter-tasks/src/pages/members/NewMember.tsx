import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import { API_ENDPOINT } from '../../config/constants';
import { addMember } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const NewMember = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatchMembers = useMembersDispatch();

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    // Reset the form when the modal is closed
    reset();
    setError(null);
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, password } = data;
    const response = await addMember(dispatchMembers, {
      name,
      email,
      password,
    });

    // Then depending on response, I'll either close the modal...
    if (response.ok) {
      setIsOpen(false);
    } else {
      // Or I'll set the error.
      setError(response.error as React.SetStateAction<null>);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        New Member
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create new member
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        placeholder="Name"
                        {...register('name', { required: true })}
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.name && <span className="text-red-500">Name is required</span>}
                      <input
                        type="email"
                        placeholder="Email"
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.email && <span className="text-red-500">Valid email is required</span>}
                      <input
                        type="password"
                        placeholder="Password"
                        {...register('password', { required: true })}
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.password ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.password && <span className="text-red-500">Password is required</span>}
                      {error && <span className="text-red-500">{error}</span>}
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default NewMember;