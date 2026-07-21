import { getUserProfile } from "@/actions/User-actions";
import CreateProfileButton from "@/components/profile/CreateProfileButton";
import { auth } from "@clerk/nextjs/server";

const Profile = async () => {
    await auth.protect();

    const response = await getUserProfile();

    console.log(response);

    return (
        <>
            <div className="w-full min-h-40 bg-blue-300 flex flex-col items-center justify-center px-6 py-6">
                <CreateProfileButton />
            </div>

            {/* User Profile Data Here */}
            {!response.success ? (
                <h1>Create A profile</h1>
            ) : (
                <div className="mt-10">
                    <h1>{response.profile?.name}</h1>
                    <h1>{response.profile?.hobbies}</h1>
                    <h1>{response.profile?.desc}</h1>
                </div>
            )}
        </>
    );
};

export default Profile;
