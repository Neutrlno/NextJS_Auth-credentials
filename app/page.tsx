import { getServerSession } from "next-auth";

export default async function Home() {
    const session = await getServerSession();
    console.log('session', session);
    return (
        <div className="flex h-full justify-center items-center bg-slate-900 ">
            {session ? JSON.stringify(session) : "Main page"}
        </div>
    );
}
