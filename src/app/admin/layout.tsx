import AdminSidebar from "./AdminSidebar";

interface AdminLayoutPropes {
    children: React.ReactNode;
}

const AdminLayuot = ({ children }: AdminLayoutPropes) => {
    return (
        <div>
            <div>
                <AdminSidebar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default AdminLayuot