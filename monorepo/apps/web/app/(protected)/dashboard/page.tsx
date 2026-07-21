import { createDbUser } from "@/actions/User-actions";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Dashboard = async () => {
    await auth.protect();

    const db_User = await createDbUser();

    return (
        <div>
            <UserButton />
            <h1>{db_User.data.name}</h1>
        </div>
    );
};

export default Dashboard;
